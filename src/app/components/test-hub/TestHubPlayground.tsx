import React, { useEffect, useMemo, useState } from "react";

/*
 * Interactive recreation of Test Hub's "Test Summary" calendar and test detail,
 * matching the shipped UI. All games, versions and numbers are fictional.
 */

const ORANGE = "#f26b1d";
const LINK = "#1a7fc1";
const FONT = "'Poppins', ui-sans-serif, system-ui, sans-serif";
const MONTH_DAYS = 30; // November 2026 starts on a Sunday
const TODAY = 18; // index of 19 Nov
const MAX_ROWS = 5;

type TestType = "Product Test" | "Technical Test" | "AB Test" | "Version Comparison";
const TYPES: TestType[] = ["Product Test", "Technical Test", "AB Test", "Version Comparison"];

type Test = {
  id: string;
  type: TestType;
  game: string;
  icon: string; // game avatar color
  color: string; // bar color
  pills?: [string, string][]; // e.g. [["50%", "2.3.1"], ["50%", "2.2.9"]]
  label: string;
  meta: string;
  start: number;
  end: number; // inclusive, day index (0 = 1 Nov)
  unbalanced: number[];
};

const TESTS: Test[] = [
  { id: "t1", type: "Product Test", game: "Harbor Hop", icon: "#0ea5e9", color: "#65a30d", label: "Product Test 1.4.0", meta: "Facebook · iOS · CA,GB", start: 0, end: 7, unbalanced: [] },
  { id: "t2", type: "Product Test", game: "Ant Empire", icon: "#f59e0b", color: "#7c3aed", label: "Product Test 0.3.1", meta: "Facebook · Android · GB,CA", start: 0, end: 21, unbalanced: [] },
  { id: "t3", type: "Technical Test", game: "Pocket Golf", icon: "#22c55e", color: "#2563eb", label: "Technical Test 2.1.1", meta: "AppLovin · Android · PH", start: 0, end: 21, unbalanced: [] },
  { id: "t4", type: "Version Comparison", game: "Harbor Hop", icon: "#0ea5e9", color: "#f97316", pills: [["50%", "1.5.2"], ["50%", "1.5.0"]], label: "", meta: "AppLovin · Android · GB,CA", start: 0, end: 9, unbalanced: [0, 1] },
  { id: "t5", type: "AB Test", game: "Ant Empire", icon: "#f59e0b", color: "#eab308", pills: [["Prod", "100%"]], label: "AB Test: Shop_Price_Anchor", meta: "iOS · CA,GB", start: 0, end: 21, unbalanced: [3, 4, 5] },
  { id: "t6", type: "Version Comparison", game: "Pocket Golf", icon: "#22c55e", color: "#65a30d", pills: [["50%", "2.2.0"], ["50%", "2.1.1"]], label: "", meta: "AppLovin · Android · GB,CA", start: 10, end: 21, unbalanced: [10, 11] },
  { id: "t7", type: "Product Test", game: "Sky Stack", icon: "#ec4899", color: "#0d9488", label: "Product Test 0.1.0", meta: "Facebook · iOS · US", start: 1, end: 6, unbalanced: [] },
  { id: "t8", type: "Technical Test", game: "Sky Stack", icon: "#ec4899", color: "#db2777", label: "Technical Test 0.1.2", meta: "AppLovin · Android · BR", start: 2, end: 12, unbalanced: [] },
  { id: "t9", type: "AB Test", game: "Harbor Hop", icon: "#0ea5e9", color: "#9333ea", pills: [["Prod", "50%"]], label: "AB Test: Onboarding_Skip", meta: "Android · US", start: 3, end: 8, unbalanced: [] },
];

/* ---------- Fictional KPI data ---------- */

type Kpi = { key: string; label: string; unit: string; control: number; test: number };

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function kpisFor(test: Test): Kpi[] {
  const r = rand(test.id.charCodeAt(1) * 31);
  const k = (key: string, label: string, unit: string, base: number, spread: number): Kpi => ({
    key, label, unit, control: base, test: +(base * (1 + (r() - 0.35) * spread)).toFixed(2),
  });
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
  return Array.from({ length: Math.max(days, 1) }, (_, i) => {
    const wobble = 1 + (r() - 0.5) * 0.12;
    const trend = 1 + (i / days) * 0.04;
    return { day: test.start + i, control: kpi.control * wobble * trend, test: kpi.test * (wobble + (r() - 0.5) * 0.05) * trend };
  });
}

const dayNum = (i: number) => i + 1;
const fmtShort = (i: number) => `${dayNum(i)} Nov`;
const fmtVal = (v: number, unit: string) =>
  unit === "$" ? `$${v.toFixed(2)}` : unit === "%" ? `${v.toFixed(1)}%` : unit === "min" ? `${v.toFixed(1)} min` : Math.round(v).toLocaleString("en-GB");

type ViewState = "live" | "loading" | "empty" | "error";
type Range = "monthly" | "weekly" | "daily";
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ---------- Icons ---------- */

const Icon = ({ d, size = 20 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);
const RAIL = [
  "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  "M9 3h6v4l3 3v3H6v-3l3-3zM5 21h14M7 17h10",
  "M5 19l4-1 9-9a2.8 2.8 0 00-4-4l-9 9zM14 6l4 4",
  "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-2.7 1.1V21a2 2 0 11-4 0v-.1a1.6 1.6 0 00-2.7-1.1l-.1.1a2 2 0 11-2.8-2.8l.1-.1A1.6 1.6 0 003 15H3a2 2 0 110-4h.1a1.6 1.6 0 001.1-2.7l-.1-.1a2 2 0 112.8-2.8l.1.1A1.6 1.6 0 009 4.6V3a2 2 0 114 0v.1a1.6 1.6 0 002.7 1.1l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 001.1 2.7H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1.3z",
  "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0",
];

/* ---------- Bar ---------- */

const isLive = (t: Test) => t.end >= TODAY;
const effEnd = (t: Test) => Math.min(t.end, TODAY); // live tests stop on today's cell
const darken = (hex: string) => `linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25)), ${hex}`;

function Bar({ t, from, to, selected, onClick }: { t: Test; from: number; to: number; selected: Test | null; onClick: () => void }) {
  const on = selected?.id === t.id;
  const live = isLive(t);
  const s = Math.max(t.start, from) - from;
  const e = Math.min(effEnd(t), to) - from;
  const startsHere = t.start >= from;
  const endsHere = effEnd(t) <= to;
  // Rounded only at the real start/end; live tests keep a square right edge.
  const r = (cond: boolean) => (cond ? 10 : 0);
  const radius = `${r(startsHere)}px ${r(endsHere && !live)}px ${r(endsHere && !live)}px ${r(startsHere)}px`;
  return (
    <button
      onClick={onClick}
      aria-expanded={on}
      aria-label={`${t.type}: ${t.game} ${t.label || t.pills?.map((p) => p[1]).join(" vs ")}${live ? " (live)" : ""}. Open details`}
      className={`relative min-h-[19.6px] flex text-left transition-all ${on ? "ring-2 ring-offset-1 ring-gray-900 z-10" : "hover:brightness-110"} ${selected && !on ? "opacity-40" : ""}`}
      style={{ gridColumn: `${s + 1} / ${e + 2}`, borderRadius: radius, fontFamily: FONT }}
    >
      {Array.from({ length: e - s + 1 }, (_, i) => {
        const day = from + s + i;
        const unb = t.unbalanced.includes(day);
        const fadedToday = live && day === TODAY && from !== to; // daily view shows the full bar
        const first = i === 0;
        const last = i === e - s;
        return (
          <span
            key={i}
            className="flex-1 self-stretch"
            title={fadedToday ? "Still running" : unb ? "Not enough balanced installs on this day" : undefined}
            style={{
              borderRadius: `${first ? r(startsHere) : 0}px ${last ? r(endsHere && !live) : 0}px ${last ? r(endsHere && !live) : 0}px ${first ? r(startsHere) : 0}px`,
              background: fadedToday
                ? `linear-gradient(to right, ${t.color}40 50%, transparent 50%)`
                : unb
                  ? `repeating-linear-gradient(45deg, ${t.color} 0 5px, ${t.color}99 5px 10px)`
                  : t.color,
            }}
          />
        );
      })}
      {(startsHere || s === 0) && (
        <span
          className="absolute inset-y-0 left-0 max-w-full flex items-center gap-1 pr-2 text-[10px] font-semibold leading-[1.2] text-white whitespace-nowrap overflow-hidden pointer-events-none"
          style={{ background: t.color, borderRadius: radius, paddingLeft: startsHere ? 8 : 5 }}
        >
          <span className="w-[14px] h-[14px] rounded-full flex-shrink-0 border border-white/70 flex items-center justify-center text-[7px] font-bold" style={{ background: t.icon }}>
            {t.game[0]}
          </span>
          {t.pills?.map(([a, b], i) => (
            <React.Fragment key={i}>
              {i > 0 && <span>vs</span>}
              <span className="inline-flex items-center px-[5px] rounded-lg text-[9px] font-bold leading-[1.5]" style={{ background: darken(t.color) }}>{a}</span>
              <span>{b}</span>
            </React.Fragment>
          ))}
          {t.label && <span>{t.label}</span>}
          <span className="font-normal opacity-75">{t.meta}</span>
        </span>
      )}
    </button>
  );
}

/* ---------- Chart & detail ---------- */

function Chart({ test, kpi }: { test: Test; kpi: Kpi }) {
  const data = useMemo(() => series(test, kpi), [test, kpi]);
  const W = 560, H = 170, P = 28;
  const vals = data.flatMap((d) => [d.control, d.test]);
  const min = Math.min(...vals) * 0.96, max = Math.max(...vals) * 1.04;
  const x = (i: number) => P + (i / Math.max(1, data.length - 1)) * (W - P * 2);
  const y = (v: number) => H - P - ((v - min) / (max - min || 1)) * (H - P * 2);
  const path = (k: "control" | "test") => data.map((d, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(d[k]).toFixed(1)}`).join(" ");
  const step = (W - P * 2) / Math.max(1, data.length - 1);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`${kpi.label} per day, test vs control`}>
      <defs>
        <pattern id="th-stripes" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="#f3f4f6" />
          <line x1="0" y1="0" x2="0" y2="6" stroke="#e5e7eb" strokeWidth="3" />
        </pattern>
      </defs>
      {data.map((d, i) =>
        test.unbalanced.includes(d.day) ? <rect key={i} x={x(i) - step / 2} y={P / 2} width={step} height={H - P * 1.5} fill="url(#th-stripes)" /> : null
      )}
      {[0.25, 0.5, 0.75].map((t) => (
        <line key={t} x1={P} x2={W - P} y1={P + t * (H - P * 2)} y2={P + t * (H - P * 2)} stroke="#f1f5f9" />
      ))}
      <path d={path("control")} fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" style={{ transition: "d 450ms ease" }} />
      <path d={path("test")} fill="none" stroke={test.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "d 450ms ease" }} />
      {data.map((d, i) => (
        <circle key={i} cx={x(i)} cy={y(d.test)} r="2.5" fill={test.color} style={{ transition: "cy 450ms ease" }} />
      ))}
      <text x={P} y={H - 6} fontSize="10" fill="#9ca3af">{fmtShort(data[0].day)}</text>
      <text x={W - P} y={H - 6} fontSize="10" fill="#9ca3af" textAnchor="end">{fmtShort(data[data.length - 1].day)}</text>
    </svg>
  );
}

function Detail({ test, onClose }: { test: Test; onClose: () => void }) {
  const kpis = useMemo(() => kpisFor(test), [test]);
  const [active, setActive] = useState(kpis[1].key);
  const [copied, setCopied] = useState(false);
  const kpi = kpis.find((k) => k.key === active) ?? kpis[0];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.href.split("#")[0]}#test=${test.id}&kpi=${kpi.key}`);
    } catch {
      /* clipboard can be blocked; the feedback still shows */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const title = test.label || `${test.pills?.map((p) => p[1]).join(" vs ")}`;

  return (
    <div className="border-t border-gray-200 bg-white animate-[th-in_220ms_ease-out]" style={{ fontFamily: FONT }}>
      <div className="flex flex-wrap items-start justify-between gap-3 px-6 pt-5">
        <div className="flex items-start gap-3">
          <span className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold" style={{ background: test.icon }}>{test.game[0]}</span>
          <div>
            <p className="text-[11px] uppercase tracking-wider mb-0.5" style={{ color: test.color }}>{test.type} · {test.game}</p>
            <h4 className="text-lg text-gray-900">{title}</h4>
            <p className="text-xs text-gray-500">{test.meta} · {fmtShort(test.start)} – {isLive(test) ? "Live" : fmtShort(test.end)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={copy} className="text-xs px-3 py-1.5 rounded border text-gray-700 hover:bg-gray-50 transition-colors" style={{ borderColor: copied ? "#16a34a" : "#e5e7eb" }} aria-live="polite">
            {copied ? "✓ Link copied with this view" : "Copy link to this view"}
          </button>
          <button onClick={onClose} aria-label="Close test detail" className="w-8 h-8 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-50">✕</button>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_270px] gap-5 p-6">
        <div className="rounded-lg border border-gray-100 p-3">
          <div className="flex flex-wrap items-center justify-between gap-2 px-1 mb-1">
            <p className="text-sm text-gray-800">{kpi.label} per day</p>
            <div className="flex items-center gap-3 text-[11px] text-gray-500">
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 rounded" style={{ background: test.color }} />Test</span>
              <span className="flex items-center gap-1"><span className="w-3 border-t-2 border-dashed border-gray-400" />Control</span>
              {test.unbalanced.length > 0 && <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-gray-100 border border-gray-200" />Unbalanced day</span>}
            </div>
          </div>
          <Chart test={test} kpi={kpi} />
        </div>

        <table className="w-full text-sm self-start">
          <caption className="text-left text-[11px] uppercase tracking-wider text-gray-400 pb-2">Click a KPI to chart it</caption>
          <tbody>
            {kpis.map((k) => {
              const d = (k.test - k.control) / k.control;
              const on = k.key === kpi.key;
              return (
                <tr key={k.key}>
                  <td className="p-0">
                    <button
                      onClick={() => setActive(k.key)}
                      aria-pressed={on}
                      className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded text-left transition-colors ${on ? "bg-orange-50" : "hover:bg-gray-50"}`}
                      style={on ? { boxShadow: `inset 3px 0 0 ${ORANGE}` } : undefined}
                    >
                      <span className="text-gray-700">{k.label}</span>
                      <span className="flex items-center gap-2 tabular-nums">
                        <span className="text-gray-900">{fmtVal(k.test, k.unit)}</span>
                        <span className={`text-xs ${d >= 0 ? "text-emerald-600" : "text-rose-600"}`}>{d >= 0 ? "+" : "−"}{Math.abs(d * 100).toFixed(1)}%</span>
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
  const [range, setRange] = useState<Range>("monthly");
  const [selected, setSelected] = useState<Test | null>(null);
  const [hidden, setHidden] = useState<TestType[]>([]);
  const [expanded, setExpanded] = useState<number[]>([]);

  const tests = TESTS.filter((t) => !hidden.includes(t.type));
  const weeks =
    range === "monthly" ? [0, 7, 14, 21, 28] : range === "weekly" ? [14] : [];
  const anyInView =
    range === "daily" ? tests.some((t) => t.start <= TODAY && t.end >= TODAY) : tests.some((t) => weeks.some((w) => effEnd(t) >= w && t.start <= Math.min(w + 6, MONTH_DAYS - 1)));
  const showEmpty = state === "empty" || (state === "live" && !anyInView);

  const pick = (t: Test) => setSelected((s) => (s?.id === t.id ? null : t));
  const retry = () => {
    setState("loading");
    setTimeout(() => setState("live"), 900);
  };
  const toggleType = (t: TestType) => {
    setSelected(null);
    setHidden((h) => (h.includes(t) ? h.filter((x) => x !== t) : [...h, t]));
  };

  const title = range === "daily" ? "Thursday, 19 November 2026" : range === "weekly" ? "15 – 21 November 2026" : "November 2026";

  return (
    <div className="space-y-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        @keyframes th-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
      `}</style>

      {/* State switcher (outside the product frame) */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="radiogroup" aria-label="Preview state" className="inline-flex rounded-md border border-gray-200 bg-white p-0.5 text-xs">
          {([["live", "Live data"], ["loading", "Loading"], ["empty", "Empty"], ["error", "Error"]] as [ViewState, string][]).map(([v, text]) => (
            <button
              key={v}
              role="radio"
              aria-checked={state === v}
              onClick={() => { setSelected(null); setState(v); }}
              className={`px-2.5 sm:px-3 py-1.5 rounded-[5px] whitespace-nowrap transition-colors ${state === v ? "text-white bg-gray-900" : "text-gray-500 hover:text-gray-800"}`}
            >
              {text}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400">Recreated in React · fictional games and data</p>
      </div>

      {/* Product frame */}
      <div className="rounded-xl border border-gray-200 shadow-md overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <div className="flex min-w-[920px] bg-[#f7f8fa]" style={{ fontFamily: FONT }}>
            {/* Icon rail */}
            <aside className="w-14 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col items-center pt-5 gap-6 text-gray-700">
              <Icon d="M4 7h16M4 12h16M4 17h16" />
              <div className="h-4" />
              {RAIL.map((d, i) => (
                <span key={i} className={i === 0 ? "text-gray-900" : "text-gray-500"}><Icon d={d} /></span>
              ))}
            </aside>

            <div className="flex-1 min-w-0">
              {/* Top bar */}
              <header className="flex items-center justify-between gap-4 px-6 h-14 bg-white">
                <p className="text-lg text-gray-900">Test Centric Platform</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 w-64 h-9 px-3 rounded-md bg-gray-100 text-gray-400 text-xs">
                    <Icon d="M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4" size={16} />
                    Search on Test Hub
                  </div>
                  <span className="text-gray-500"><Icon d={RAIL[4]} /></span>
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-200 to-amber-200 border border-white shadow-sm" aria-hidden="true" />
                </div>
              </header>
              <div className="h-[3px] bg-white"><div className="h-full w-20 ml-6" style={{ background: ORANGE }} /></div>

              {/* Breadcrumb = type filters */}
              <div className="flex items-center justify-between gap-3 px-6 py-3 border-y border-gray-100 bg-white">
                <p className="text-[13px]" style={{ color: LINK }}>
                  4 Games <span className="text-gray-400 mx-1">·</span>
                  {TYPES.map((t, i) => {
                    const off = hidden.includes(t);
                    return (
                      <React.Fragment key={t}>
                        {i > 0 && <span className="mx-1 text-gray-300">|</span>}
                        <button
                          onClick={() => toggleType(t)}
                          aria-pressed={!off}
                          disabled={state !== "live"}
                          className={`hover:underline disabled:no-underline disabled:opacity-50 ${off ? "line-through text-gray-400" : ""}`}
                        >
                          {t}
                        </button>
                      </React.Fragment>
                    );
                  })}
                </p>
                <span className="relative flex items-center gap-1.5 text-xs text-gray-700 border border-gray-200 rounded px-3 py-1.5 bg-white">
                  <Icon d="M4 5h16l-6 8v5l-4 2v-7z" size={14} />
                  Filters
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-[9px] text-white flex items-center justify-center" style={{ background: ORANGE }}>
                    {TYPES.length - hidden.length}
                  </span>
                </span>
              </div>

              <div className="px-6 py-5">
                <p className="text-lg text-gray-900">Test Summary</p>
                <p className="text-xs text-gray-500 mb-4">Calendar view of when tests were running</p>

                <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
                  {/* Card header */}
                  <div className="flex items-center justify-between px-4 py-3">
                    <p className="text-sm text-gray-900">4 Games</p>
                    <div role="radiogroup" aria-label="Calendar range" className="flex text-[11px]">
                      {(["monthly", "weekly", "daily"] as Range[]).map((r, i) => (
                        <button
                          key={r}
                          role="radio"
                          aria-checked={range === r}
                          onClick={() => { setSelected(null); setRange(r); }}
                          className={`px-3 py-1.5 border uppercase tracking-wide transition-colors ${i === 0 ? "rounded-l" : ""} ${i === 2 ? "rounded-r" : ""} ${i > 0 ? "-ml-px" : ""}`}
                          style={range === r ? { background: ORANGE, borderColor: ORANGE, color: "#fff" } : { borderColor: "#f5b48f", color: ORANGE }}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Period nav */}
                  <div className="relative flex items-center justify-center gap-6 py-2.5 bg-gray-100 border-y border-gray-200 text-gray-700">
                    <span className="text-gray-400" aria-hidden="true">‹</span>
                    <p className="text-sm">{title}</p>
                    <span className="text-gray-400" aria-hidden="true">›</span>
                    <span className="absolute right-4 text-[11px] px-2.5 py-1 rounded border" style={{ borderColor: "#f5b48f", color: ORANGE }}>TODAY</span>
                  </div>

                  {/* Weekday header */}
                  {range !== "daily" && (
                    <div className="grid grid-cols-7 border-b border-gray-100 text-[11px] text-gray-600">
                      {WEEKDAYS.map((d) => <div key={d} className="px-3 py-2">{d}</div>)}
                    </div>
                  )}

                  <div aria-busy={state === "loading"}>
                    {/* Loading */}
                    {state === "loading" && (
                      <div className="p-3 space-y-1.5" aria-label="Loading tests">
                        {[[0, 7], [0, 5], [1, 7], [2, 6], [0, 3]].map(([a, b], i) => (
                          <div key={i} className="grid grid-cols-7">
                            <div className="h-[22px] rounded-md bg-gray-200 animate-pulse" style={{ gridColumn: `${a + 1} / ${b + 1}`, animationDelay: `${i * 120}ms` }} />
                          </div>
                        ))}
                        <p className="sr-only">Loading tests…</p>
                      </div>
                    )}

                    {/* Error */}
                    {state === "error" && (
                      <div role="alert" className="flex flex-col items-center justify-center text-center py-12 px-6">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-rose-50 text-rose-600">!</div>
                        <p className="text-sm text-gray-900">We couldn’t load tests for these dates</p>
                        <p className="text-xs text-gray-500 mt-1 max-w-xs">The data source didn’t respond. Your filters are saved, so nothing is lost.</p>
                        <button onClick={retry} className="mt-4 text-xs px-4 py-1.5 rounded text-white uppercase tracking-wide" style={{ background: ORANGE }}>Try again</button>
                      </div>
                    )}

                    {/* Empty */}
                    {showEmpty && state !== "loading" && state !== "error" && (
                      <div className="flex flex-col items-center justify-center text-center py-12 px-6">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-orange-50" style={{ color: ORANGE }}>◷</div>
                        <p className="text-sm text-gray-900">No tests running in these dates</p>
                        <p className="text-xs text-gray-500 mt-1 max-w-xs">Tests show up here the day they go live. Try another range{hidden.length ? ", or show all test types" : ""}.</p>
                        {hidden.length > 0 && (
                          <button onClick={() => setHidden([])} className="mt-4 text-xs px-4 py-1.5 rounded text-white uppercase tracking-wide" style={{ background: ORANGE }}>Show all test types</button>
                        )}
                      </div>
                    )}

                    {/* Live: weeks */}
                    {state === "live" && !showEmpty && range !== "daily" &&
                      weeks.map((w) => {
                        const last = Math.min(w + 6, MONTH_DAYS - 1);
                        const inWeek = tests.filter((t) => effEnd(t) >= w && t.start <= last);
                        const open = expanded.includes(w);
                        const shown = open ? inWeek : inWeek.slice(0, MAX_ROWS);
                        const more = inWeek.length - shown.length;
                        return (
                          <div key={w} className="relative border-b border-gray-100 last:border-b-0">
                            <div className="absolute inset-0 grid grid-cols-7 pointer-events-none">
                              {Array.from({ length: 7 }, (_, i) => (
                                <div key={i} className={`border-l first:border-l-0 border-gray-100 ${w + i >= MONTH_DAYS ? "bg-gray-50" : ""}`} />
                              ))}
                            </div>
                            <div className="relative grid grid-cols-7 text-[11px] text-gray-700">
                              {Array.from({ length: 7 }, (_, i) => {
                                const d = w + i;
                                return (
                                  <div key={i} className="px-3 pt-2 pb-1.5">
                                    {d < MONTH_DAYS && (
                                      <span className={d === TODAY ? "inline-flex w-5 h-5 items-center justify-center rounded-full text-white" : ""} style={d === TODAY ? { background: "#dc2626" } : undefined}>
                                        {dayNum(d)}
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                            <div className="relative px-3 pb-2 space-y-[5px] min-h-[40px]">
                              {shown.map((t) => (
                                <div key={t.id} className="grid grid-cols-7">
                                  <Bar t={t} from={w} to={last} selected={selected} onClick={() => pick(t)} />
                                </div>
                              ))}
                              {(more > 0 || open) && inWeek.length > MAX_ROWS && (
                                <div className="grid grid-cols-7">
                                  <button
                                    onClick={() => setExpanded((x) => (open ? x.filter((v) => v !== w) : [...x, w]))}
                                    className="h-[18px] rounded bg-gray-100 hover:bg-gray-200 text-[10px] text-gray-600 transition-colors"
                                    aria-label={open ? "Show fewer tests" : `Show ${more} more tests this week`}
                                  >
                                    {open ? "Less" : `+${more}`}
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}

                    {/* Live: daily */}
                    {state === "live" && !showEmpty && range === "daily" && (
                      <div className="p-3 space-y-[5px]">
                        {tests.filter((t) => t.start <= TODAY && t.end >= TODAY).map((t) => (
                          <div key={t.id} className="grid grid-cols-1">
                            <Bar t={{ ...t, start: TODAY, end: TODAY }} from={TODAY} to={TODAY} selected={selected?.id === t.id ? { ...t, start: TODAY, end: TODAY } : selected} onClick={() => pick(t)} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {state === "live" && !showEmpty && !selected && (
                    <p className="text-[11px] text-gray-400 px-4 py-2.5 border-t border-gray-100">
                      Click any test to open it. Striped days didn’t have enough balanced installs to trust; live tests fade on today’s cell because they’re still running.
                    </p>
                  )}

                  {selected && state === "live" && <Detail key={selected.id} test={selected} onClose={() => setSelected(null)} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
