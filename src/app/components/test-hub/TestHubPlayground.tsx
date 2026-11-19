import React, { useEffect, useMemo, useState } from "react";

/*
 * Interactive recreation of Test Hub's calendar and test detail.
 * All games, versions and numbers are fictional.
 */

const ACCENT = "#3f8f8a";
const DAYS = 14;
const START = new Date(2026, 10, 8); // Sun 8 Nov 2026 (fictional window)
const TODAY = 11; // index of "today" in the window

type TestType = "Product Test" | "Version Comparison" | "Technical Test" | "A/B Test";

const TYPE_COLOR: Record<TestType, string> = {
  "Product Test": "#7c3aed",
  "Version Comparison": "#ea580c",
  "Technical Test": "#2563eb",
  "A/B Test": "#ca8a04",
};

type Test = {
  id: string;
  type: TestType;
  game: string;
  label: string;
  meta: string;
  start: number;
  end: number; // inclusive
  unbalanced: number[];
};

const TESTS: Test[] = [
  { id: "t1", type: "Product Test", game: "Harbor Hop", label: "Product Test 1.4.0", meta: "iOS · CA, GB", start: 0, end: 13, unbalanced: [] },
  { id: "t2", type: "Version Comparison", game: "Ant Empire", label: "2.3.1 vs 2.2.9", meta: "Android · GB, CA", start: 0, end: 4, unbalanced: [0, 1] },
  { id: "t3", type: "Technical Test", game: "Pocket Golf", label: "Technical Test 0.9.2", meta: "Android · PH", start: 2, end: 11, unbalanced: [] },
  { id: "t4", type: "A/B Test", game: "Ant Empire", label: "Shop_Price_Anchor", meta: "iOS · CA, GB", start: 3, end: 13, unbalanced: [3, 4, 5] },
  { id: "t5", type: "Version Comparison", game: "Harbor Hop", label: "1.5.0 vs 1.4.0", meta: "Android · GB, CA", start: 7, end: 13, unbalanced: [7] },
];

type Kpi = { key: string; label: string; unit: string; control: number; test: number; better: "up" | "down" };

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function kpisFor(test: Test): Kpi[] {
  const r = rand(test.id.charCodeAt(1) * 31);
  const k = (key: string, label: string, unit: string, base: number, spread: number, better: "up" | "down" = "up"): Kpi => {
    const delta = (r() - 0.35) * spread;
    return { key, label, unit, control: base, test: +(base * (1 + delta)).toFixed(2), better };
  };
  return [
    k("installs", "Installs", "", 4200 + Math.round(r() * 3000), 0.1),
    k("d1", "D1 retention", "%", 38 + Math.round(r() * 8), 0.12),
    k("d7", "D7 retention", "%", 11 + Math.round(r() * 4), 0.18),
    k("ltv", "LTV D7", "$", +(0.42 + r() * 0.2).toFixed(2), 0.2),
    k("playtime", "Playtime / user", "min", 21 + Math.round(r() * 9), 0.15),
  ];
}

function series(test: Test, kpi: Kpi) {
  const keySeed = [...kpi.key].reduce((a, c, i) => a + c.charCodeAt(0) * (i + 3), 0);
  const r = rand(test.id.charCodeAt(1) * 7 + keySeed * 13);
  const days = Math.min(test.end, TODAY) - test.start + 1; // no data for days still ahead
  return Array.from({ length: days }, (_, i) => {
    const wobble = 1 + (r() - 0.5) * 0.12;
    const trend = 1 + (i / days) * 0.04;
    return {
      day: test.start + i,
      control: kpi.control * wobble * trend,
      test: kpi.test * (wobble + (r() - 0.5) * 0.05) * trend,
    };
  });
}

const fmtDay = (i: number, opts: Intl.DateTimeFormatOptions) =>
  new Date(START.getFullYear(), START.getMonth(), START.getDate() + i).toLocaleDateString("en-GB", opts);

const fmtVal = (v: number, unit: string) =>
  unit === "$" ? `$${v.toFixed(2)}` : unit === "%" ? `${v.toFixed(1)}%` : unit === "min" ? `${v.toFixed(1)} min` : Math.round(v).toLocaleString("en-GB");

type ViewState = "live" | "loading" | "empty" | "error";

/* ---------- Small pieces ---------- */

function Segmented<T extends string>({ value, options, onChange, label }: { value: T; options: [T, string][]; onChange: (v: T) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex rounded-md border border-gray-200 bg-white p-0.5 text-xs">
      {options.map(([v, text]) => (
        <button
          key={v}
          role="radio"
          aria-checked={value === v}
          onClick={() => onChange(v)}
          className={`px-2.5 sm:px-3 py-1.5 rounded-[5px] whitespace-nowrap transition-colors ${value === v ? "text-white" : "text-gray-500 hover:text-gray-800"}`}
          style={value === v ? { background: ACCENT } : undefined}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

function Chart({ test, kpi }: { test: Test; kpi: Kpi }) {
  const data = useMemo(() => series(test, kpi), [test, kpi]);
  const W = 560, H = 170, P = 28;
  const vals = data.flatMap((d) => [d.control, d.test]);
  const min = Math.min(...vals) * 0.96, max = Math.max(...vals) * 1.04;
  const x = (i: number) => P + (i / Math.max(1, data.length - 1)) * (W - P * 2);
  const y = (v: number) => H - P - ((v - min) / (max - min)) * (H - P * 2);
  const path = (k: "control" | "test") => data.map((d, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(d[k]).toFixed(1)}`).join(" ");
  const color = TYPE_COLOR[test.type];
  const step = (W - P * 2) / Math.max(1, data.length - 1);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`${kpi.label} per day, test vs control`}>
      {data.map((d, i) =>
        test.unbalanced.includes(d.day) ? (
          <rect key={i} x={x(i) - step / 2} y={P / 2} width={step} height={H - P * 1.5} fill="url(#th-stripes)" />
        ) : null
      )}
      <defs>
        <pattern id="th-stripes" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="#f3f4f6" />
          <line x1="0" y1="0" x2="0" y2="6" stroke="#e5e7eb" strokeWidth="3" />
        </pattern>
      </defs>
      {[0.25, 0.5, 0.75].map((t) => (
        <line key={t} x1={P} x2={W - P} y1={P + t * (H - P * 2)} y2={P + t * (H - P * 2)} stroke="#f1f5f9" />
      ))}
      <path d={path("control")} fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" style={{ transition: "d 450ms ease" }} />
      <path d={path("test")} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "d 450ms ease" }} />
      {data.map((d, i) => (
        <circle key={i} cx={x(i)} cy={y(d.test)} r="2.5" fill={color} style={{ transition: "cy 450ms ease" }} />
      ))}
      <text x={P} y={H - 6} fontSize="10" fill="#9ca3af">{fmtDay(data[0].day, { day: "numeric", month: "short" })}</text>
      <text x={W - P} y={H - 6} fontSize="10" fill="#9ca3af" textAnchor="end">{fmtDay(data[data.length - 1].day, { day: "numeric", month: "short" })}</text>
    </svg>
  );
}

function Detail({ test, onClose }: { test: Test; onClose: () => void }) {
  const kpis = useMemo(() => kpisFor(test), [test]);
  const [active, setActive] = useState(kpis[1].key);
  const [copied, setCopied] = useState(false);
  const kpi = kpis.find((k) => k.key === active) ?? kpis[0];
  const color = TYPE_COLOR[test.type];

  useEffect(() => setActive(kpis[1].key), [kpis]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.href.split("#")[0]}#test=${test.id}&kpi=${kpi.key}`);
    } catch {
      /* clipboard can be blocked; the feedback is still useful in a demo */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="border-t border-gray-200 bg-white animate-[th-in_220ms_ease-out]">
      <div className="flex flex-wrap items-start justify-between gap-3 px-5 pt-5">
        <div>
          <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color }}>{test.type} · {test.game}</p>
          <h4 className="text-lg font-medium text-gray-900">{test.label}</h4>
          <p className="text-xs text-gray-500">{test.meta} · {fmtDay(test.start, { day: "numeric", month: "short" })} – {fmtDay(test.end, { day: "numeric", month: "short" })}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={copy} className="text-xs px-3 py-1.5 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors" aria-live="polite">
            {copied ? "✓ Link copied with this view" : "Copy link to this view"}
          </button>
          <button onClick={onClose} aria-label="Close test detail" className="w-8 h-8 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-50">✕</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5 p-5">
        <div className="rounded-lg border border-gray-100 p-3">
          <div className="flex flex-wrap items-center justify-between gap-2 px-1 mb-1">
            <p className="text-sm text-gray-800">{kpi.label} per day</p>
            <div className="flex items-center gap-3 text-[11px] text-gray-500">
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 rounded" style={{ background: color }} />Test</span>
              <span className="flex items-center gap-1"><span className="w-3 border-t-2 border-dashed border-gray-400" />Control</span>
              {test.unbalanced.length > 0 && (
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-gray-100 border border-gray-200" />Unbalanced day</span>
              )}
            </div>
          </div>
          <Chart test={test} kpi={kpi} />
        </div>

        <table className="w-full text-sm self-start">
          <caption className="text-left text-[11px] uppercase tracking-wider text-gray-400 pb-2">Click a KPI to chart it</caption>
          <tbody>
            {kpis.map((k) => {
              const d = (k.test - k.control) / k.control;
              const good = k.better === "up" ? d >= 0 : d <= 0;
              const on = k.key === kpi.key;
              return (
                <tr key={k.key}>
                  <td className="p-0">
                    <button
                      onClick={() => setActive(k.key)}
                      aria-pressed={on}
                      className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md text-left transition-colors ${on ? "bg-gray-100" : "hover:bg-gray-50"}`}
                      style={on ? { boxShadow: `inset 3px 0 0 ${color}` } : undefined}
                    >
                      <span className="text-gray-700">{k.label}</span>
                      <span className="flex items-center gap-2 tabular-nums">
                        <span className="text-gray-900">{fmtVal(k.test, k.unit)}</span>
                        <span className={`text-xs ${good ? "text-emerald-600" : "text-rose-600"}`}>
                          {d >= 0 ? "+" : "−"}{Math.abs(d * 100).toFixed(1)}%
                        </span>
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- Main ---------- */

export function TestHubPlayground() {
  const [state, setState] = useState<ViewState>("live");
  const [range, setRange] = useState<"week" | "two">("two");
  const [selected, setSelected] = useState<Test | null>(null);
  const [hidden, setHidden] = useState<TestType[]>([]);

  const days = range === "week" ? 7 : DAYS;
  const offset = range === "week" ? 7 : 0;
  const visible = TESTS.filter((t) => !hidden.includes(t.type) && t.end >= offset && t.start < offset + days);

  const retry = () => {
    setState("loading");
    setTimeout(() => setState("live"), 900);
  };

  const toggleType = (t: TestType) => {
    setSelected(null);
    setHidden((h) => (h.includes(t) ? h.filter((x) => x !== t) : [...h, t]));
  };

  const showEmpty = state === "empty" || (state === "live" && visible.length === 0);

  return (
    <div className="space-y-4">
      <style>{`@keyframes th-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}`}</style>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Segmented
          label="Preview state"
          value={state}
          onChange={(v) => { setSelected(null); setState(v); }}
          options={[["live", "Live data"], ["loading", "Loading"], ["empty", "Empty"], ["error", "Error"]]}
        />
        <p className="text-xs text-gray-400">Recreated in React · fictional games and data</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-gray-100">
          <div>
            <p className="text-base text-gray-900">Test Summary</p>
            <p className="text-xs text-gray-500">
              {fmtDay(offset, { day: "numeric", month: "short" })} – {fmtDay(offset + days - 1, { day: "numeric", month: "short", year: "numeric" })}
            </p>
          </div>
          <Segmented label="Calendar range" value={range} onChange={(v) => { setSelected(null); setRange(v); }} options={[["week", "Weekly"], ["two", "2 weeks"]]} />
        </div>

        {/* Type filters = legend */}
        <div className="flex flex-wrap gap-2 px-5 py-3 border-b border-gray-100">
          {(Object.keys(TYPE_COLOR) as TestType[]).map((t) => {
            const off = hidden.includes(t);
            return (
              <button
                key={t}
                onClick={() => toggleType(t)}
                aria-pressed={!off}
                disabled={state !== "live"}
                className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-all disabled:opacity-40 ${off ? "border-gray-200 text-gray-400" : "border-transparent text-gray-700"}`}
                style={off ? undefined : { background: `${TYPE_COLOR[t]}14` }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: off ? "#d1d5db" : TYPE_COLOR[t] }} />
                {t}
              </button>
            );
          })}
        </div>

        {/* Calendar */}
        <div className="overflow-x-auto">
          <div className="px-5 py-4" style={{ minWidth: range === "week" ? 560 : 760 }}>
            <div className="grid mb-2" style={{ gridTemplateColumns: `repeat(${days}, minmax(0, 1fr))` }}>
              {Array.from({ length: days }, (_, i) => {
                const d = offset + i;
                const isToday = d === TODAY;
                return (
                  <div key={i} className="text-[11px] text-gray-400 px-1">
                    {fmtDay(d, { weekday: "short" })}{" "}
                    <span className={isToday ? "inline-flex w-5 h-5 items-center justify-center rounded-full text-white" : "text-gray-600"} style={isToday ? { background: "#dc2626" } : undefined}>
                      {fmtDay(d, { day: "numeric" })}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="relative min-h-[196px]" aria-busy={state === "loading"}>
              {/* day grid lines */}
              <div className="absolute inset-0 grid pointer-events-none" style={{ gridTemplateColumns: `repeat(${days}, minmax(0, 1fr))` }}>
                {Array.from({ length: days }, (_, i) => (
                  <div key={i} className={`border-l border-gray-100 ${offset + i > TODAY ? "bg-gray-50/60" : ""}`} />
                ))}
              </div>

              {state === "live" && !showEmpty && (
                <div className="relative space-y-2 py-1">
                  {visible.map((t) => {
                    const s = Math.max(t.start, offset) - offset;
                    const e = Math.min(t.end, offset + days - 1) - offset;
                    const color = TYPE_COLOR[t.type];
                    const on = selected?.id === t.id;
                    return (
                      <div key={t.id} className="grid" style={{ gridTemplateColumns: `repeat(${days}, minmax(0, 1fr))` }}>
                        <button
                          onClick={() => setSelected(on ? null : t)}
                          aria-expanded={on}
                          aria-label={`${t.type}: ${t.game} ${t.label}. Open details`}
                          className={`relative h-7 flex rounded-md overflow-hidden text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 ${on ? "ring-2 ring-offset-1" : "hover:brightness-110"} ${selected && !on ? "opacity-40" : ""}`}
                          style={{ gridColumn: `${s + 1} / ${e + 2}`, ["--tw-ring-color" as string]: color, outlineColor: color }}
                        >
                          {Array.from({ length: e - s + 1 }, (_, i) => {
                            const day = offset + s + i;
                            const unb = t.unbalanced.includes(day);
                            const future = day > TODAY;
                            return (
                              <span
                                key={i}
                                className="flex-1 h-full"
                                title={unb ? "Not enough balanced installs on this day" : undefined}
                                style={{
                                  background: unb
                                    ? `repeating-linear-gradient(45deg, ${color}55 0 4px, ${color}2e 4px 8px)`
                                    : future ? `${color}40` : color,
                                }}
                              />
                            );
                          })}
                          <span className="absolute inset-y-0 left-0 max-w-full flex items-center pl-1 pointer-events-none">
                            <span className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-[11px] text-white truncate" style={{ background: color }}>
                              <span className="font-medium">{t.game}</span>
                              <span className="opacity-90 truncate">{t.label} · {t.meta}</span>
                            </span>
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {state === "loading" && (
                <div className="relative space-y-2 py-1" aria-label="Loading tests">
                  {[[0, 13], [0, 5], [2, 11], [4, 13]].map(([a, b], i) => (
                    <div key={i} className="grid" style={{ gridTemplateColumns: `repeat(${days}, minmax(0, 1fr))` }}>
                      <div className="h-7 rounded-md bg-gray-200 animate-pulse" style={{ gridColumn: `${Math.min(a, days - 1) + 1} / ${Math.min(b, days - 1) + 2}`, animationDelay: `${i * 120}ms` }} />
                    </div>
                  ))}
                  <p className="sr-only">Loading tests…</p>
                </div>
              )}

              {showEmpty && (
                <div className="relative flex flex-col items-center justify-center text-center py-10 px-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ background: `${ACCENT}14`, color: ACCENT }}>◷</div>
                  <p className="text-sm font-medium text-gray-900">No tests running in these dates</p>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs">
                    Tests show up here the day they go live. Try another range{hidden.length ? ", or show all test types" : ""}.
                  </p>
                  {hidden.length > 0 && (
                    <button onClick={() => setHidden([])} className="mt-4 text-xs px-3 py-1.5 rounded-md text-white" style={{ background: ACCENT }}>
                      Show all test types
                    </button>
                  )}
                </div>
              )}

              {state === "error" && (
                <div role="alert" className="relative flex flex-col items-center justify-center text-center py-10 px-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-rose-50 text-rose-600">!</div>
                  <p className="text-sm font-medium text-gray-900">We couldn’t load tests for these dates</p>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs">The data source didn’t respond. Your filters are saved, so nothing is lost.</p>
                  <button onClick={retry} className="mt-4 text-xs px-3 py-1.5 rounded-md text-white" style={{ background: ACCENT }}>
                    Try again
                  </button>
                </div>
              )}
            </div>

            {state === "live" && !showEmpty && !selected && (
              <p className="text-[11px] text-gray-400 mt-3">
                Click any test to open it. Striped days didn’t have enough balanced installs to trust; lighter days are still ahead.
              </p>
            )}
          </div>
        </div>

        {selected && state === "live" && <Detail key={selected.id} test={selected} onClose={() => setSelected(null)} />}
      </div>
    </div>
  );
}
