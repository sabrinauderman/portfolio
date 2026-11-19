import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

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

const dayNum = (i: number) => i + 1;
const fmtShort = (i: number) => `${dayNum(i)} Nov`;
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

/* ---------- Fictional metrics ---------- */

const MAIN = "#3b82f6"; // main / control (blue)
const TESTED = "#f97316"; // tested / variant (orange)
const MUI_BLUE = "#1976d2";

type Metric = { key: string; label: string; unit: "" | "%" | "$" | "x"; lowerBetter?: boolean };
const METRICS: Metric[] = [
  { key: "installs", label: "Installs", unit: "" },
  { key: "retention_d1", label: "Retention D1", unit: "%" },
  { key: "retention_d3", label: "Retention D3", unit: "%" },
  { key: "retention_d7", label: "Retention D7", unit: "%" },
  { key: "retention_d14", label: "Retention D14", unit: "%" },
  { key: "roas_d7", label: "ROAS D7", unit: "x" },
  { key: "ltv_d1", label: "LTV D1", unit: "$" },
  { key: "ltv_d7", label: "LTV D7", unit: "$" },
  { key: "cpi", label: "CPI", unit: "$", lowerBetter: true },
];
const BASE: Record<string, number> = {
  installs: 6200, retention_d1: 0.41, retention_d3: 0.24, retention_d7: 0.13, retention_d14: 0.08,
  roas_d7: 0.62, ltv_d1: 0.11, ltv_d7: 0.29, cpi: 0.47,
};

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const seedOf = (str: string) => [...str].reduce((a, c, i) => a + c.charCodeAt(0) * (i + 7), 0);

function hasBaseline(t: Test) {
  return t.type !== "Product Test";
}
function armLabels(t: Test): [string, string] {
  if (t.type === "AB Test") return ["Control", "Variant B"];
  if (t.pills && t.pills.length === 2) return [t.pills[1][1], t.pills[0][1]];
  if (t.type === "Technical Test") return ["Previous", t.label.replace("Technical Test ", "")];
  return ["", t.label.replace("Product Test ", "")];
}

function metricsFor(t: Test) {
  const r = rand(seedOf(t.id) * 13);
  const out: Record<string, { main: number; tested: number }> = {};
  for (const m of METRICS) {
    const base = BASE[m.key] * (0.85 + r() * 0.3);
    const lift = (r() - 0.4) * 0.16;
    out[m.key] = { main: base, tested: base * (1 + lift) };
  }
  const days = effEnd(t) - t.start + 1;
  out.installs.main = Math.round((out.installs.main * days) / 6);
  out.installs.tested = Math.round(out.installs.main * (0.96 + r() * 0.08));
  return out;
}

function fmtMetric(v: number, m: Metric) {
  if (m.unit === "%") return `${(v * 100).toFixed(2)}%`;
  if (m.unit === "$") return `$${v.toFixed(3)}`;
  if (m.unit === "x") return `${(v * 100).toFixed(1)}%`;
  return Math.round(v).toLocaleString("en-US");
}

function dailySeries(t: Test, m: Metric, v: { main: number; tested: number }) {
  const r = rand(seedOf(t.id + m.key));
  const days = effEnd(t) - t.start + 1;
  const scale = m.key === "installs" ? 1 / days : 1;
  return Array.from({ length: days }, (_, i) => {
    const w = 1 + (r() - 0.5) * 0.18;
    const ramp = m.key === "installs" ? Math.min(1, 0.55 + i * 0.12) : 1;
    return { day: t.start + i, main: v.main * scale * w * ramp, tested: v.tested * scale * (w + (r() - 0.5) * 0.06) * ramp };
  });
}

/* ---------- Line chart (MUI-like) ---------- */

type Series = { label: string; color: string; values: number[]; dashed?: boolean };

function LineChartBox({ title, xLabels, series, format, shade, wide }: { title: string; xLabels: string[]; series: Series[]; format: (v: number) => string; shade?: number[]; wide?: boolean }) {
  const W = wide ? 860 : 420, H = wide ? 220 : 210, L = 46, R = 12, T = 12, B = 26;
  const all = series.flatMap((s) => s.values);
  const min = Math.min(...all) * 0.92, max = Math.max(...all) * 1.06;
  const n = xLabels.length;
  const x = (i: number) => L + (n === 1 ? 0.5 : i / (n - 1)) * (W - L - R);
  const y = (v: number) => T + (1 - (v - min) / (max - min || 1)) * (H - T - B);
  const step = (W - L - R) / Math.max(1, n - 1);
  const ticks = [0, 0.5, 1].map((p) => min + p * (max - min));
  const every = Math.ceil(n / 6);
  return (
    <div className="border border-gray-200 rounded p-3 min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <div className="flex flex-wrap gap-3 text-[11px] text-gray-600">
          {series.map((s) => (
            <span key={s.label} className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
              {s.label}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={title}>
        <defs>
          <pattern id="th-unb" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="6" height="6" fill="#f3f4f6" />
            <line x1="0" y1="0" x2="0" y2="6" stroke="#e5e7eb" strokeWidth="3" />
          </pattern>
        </defs>
        {shade?.map((i) => <rect key={i} x={x(i) - step / 2} y={T} width={step} height={H - T - B} fill="url(#th-unb)" />)}
        {ticks.map((v, i) => (
          <g key={i}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="#eef0f3" />
            <text x={L - 6} y={y(v) + 3} fontSize="9" fill="#9ca3af" textAnchor="end">{format(v)}</text>
          </g>
        ))}
        {xLabels.map((l, i) => (i % every === 0 || i === n - 1 ? <text key={i} x={x(i)} y={H - 8} fontSize="9" fill="#9ca3af" textAnchor="middle">{l}</text> : null))}
        {series.map((s) => (
          <g key={s.label}>
            <path
              d={s.values.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ")}
              fill="none" stroke={s.color} strokeWidth="2" strokeDasharray={s.dashed ? "4 4" : undefined}
              style={{ transition: "d 450ms ease" }}
            />
            {s.values.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r="2.5" fill={s.color} style={{ transition: "cy 450ms ease" }} />)}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ---------- Test details modal ---------- */

function TestModal({ test, onClose }: { test: Test; onClose: () => void }) {
  const data = useMemo(() => metricsFor(test), [test]);
  const base = hasBaseline(test);
  const [mainLabel, testedLabel] = armLabels(test);
  const [metricKey, setMetricKey] = useState("installs");
  const [copied, setCopied] = useState(false);
  const [menu, setMenu] = useState(false);
  const [withUnbalanced, setWithUnbalanced] = useState(false);
  const metric = METRICS.find((m) => m.key === metricKey) ?? METRICS[0];
  const live = isLive(test);
  const days = effEnd(test) - test.start + 1;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (menu ? setMenu(false) : onClose());
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, menu]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.href.split("#")[0]}#test=${test.id}`);
    } catch {
      /* clipboard can be blocked; the feedback still shows */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const diff = (k: string) => ((data[k].tested - data[k].main) / data[k].main) * 100;
  const diffColor = (d: number, m: Metric) => ((m.lowerBetter ? d <= 0 : d >= 0) ? "#2e7d32" : "#d32f2f");
  const title = test.pills?.length === 2 ? `${test.game} · ${test.pills[0][1]} vs ${test.pills[1][1]}` : `${test.game} · ${test.label || "Test"}`;
  const meta = [test.type, ...test.meta.split(" · ")].join(" · ");

  const overview: [string, string, number | null][] = [
    ["Installs", Math.round(data.installs.main + (base ? data.installs.tested : 0)).toLocaleString("en-US"), null],
    ["Retention D7", fmtMetric(data.retention_d7.tested, METRICS[3]), base ? diff("retention_d7") : null],
    ["LTV D7", fmtMetric(data.ltv_d7.tested, METRICS[7]), base ? diff("ltv_d7") : null],
  ];

  const retDays = ["D0", "D1", "D3", "D7", "D14"];
  const ret = (k: "main" | "tested") => [1, data.retention_d1[k], data.retention_d3[k], data.retention_d7[k], data.retention_d14[k]];
  const ltvDays = ["D0", "D1", "D3", "D7"];
  const ltv = (k: "main" | "tested") => [data.ltv_d1[k] * 0.45, data.ltv_d1[k], (data.ltv_d1[k] + data.ltv_d7[k]) / 2, data.ltv_d7[k]];
  const arms = (fn: (k: "main" | "tested") => number[]): Series[] =>
    base ? [{ label: `${mainLabel} (main)`, color: MAIN, values: fn("main") }, { label: `${testedLabel} (tested)`, color: TESTED, values: fn("tested") }] : [{ label: testedLabel, color: TESTED, values: fn("tested") }];

  const daily = dailySeries(test, metric, data[metric.key]);
  const shade = withUnbalanced ? [] : daily.map((d, i) => (test.unbalanced.includes(d.day) ? i : -1)).filter((i) => i >= 0);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8" style={{ fontFamily: FONT }}>
      <div className="absolute inset-0 bg-black/50 animate-[th-fade_180ms_ease-out]" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-[900px] max-h-full flex flex-col bg-white rounded shadow-2xl animate-[th-in_200ms_ease-out]"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 px-5 pt-5 pb-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold" style={{ background: test.icon }}>{test.game[0]}</span>
              <h4 className="text-[1.1rem] font-semibold text-gray-900">{title}</h4>
              <span className="h-[22px] px-2 rounded-full text-[11px] font-semibold flex items-center bg-black/[.08] text-gray-800">{test.type}</span>
            </div>
            <p className="text-xs italic text-gray-500">
              {fmtShort(test.start)} 2026 – {live ? "ongoing" : `${fmtShort(test.end)} 2026`} ({days} days)
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{meta}</p>
          </div>
          <div className="relative flex items-center gap-1">
            <button
              onClick={() => setMenu((m) => !m)}
              aria-expanded={menu}
              className="text-[13px] px-2.5 py-1 rounded border flex items-center gap-1 hover:bg-blue-50"
              style={{ borderColor: `${MUI_BLUE}80`, color: MUI_BLUE }}
            >
              See more details <span className="text-[10px]">▾</span>
            </button>
            {menu && (
              <div className="absolute right-16 top-9 z-10 w-64 bg-white rounded shadow-lg border border-gray-100 py-1 text-sm text-gray-800">
                <label className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Include unbalanced data
                  <input type="checkbox" checked={withUnbalanced} onChange={() => setWithUnbalanced((v) => !v)} className="accent-[#1976d2] w-4 h-4" />
                </label>
                <div className="border-t border-gray-100 my-1" />
                {["Test overview (Looker)", "Retention deep dive (Looker)", "Monetization (Looker)"].map((d) => (
                  <button key={d} onClick={() => setMenu(false)} className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50">
                    <span className="text-gray-500">↗</span>{d}
                  </button>
                ))}
              </div>
            )}
            <span className="relative">
              <button onClick={copy} aria-label="Copy link" className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100">
                <Icon d="M9 9h10v12H9zM5 15V3h10" size={17} />
              </button>
              {copied && <span role="status" className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] text-white bg-gray-700 rounded px-2 py-0.5">Copied!</span>}
            </span>
            <button onClick={onClose} aria-label="Close" className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100">
              <Icon d="M6 6l12 12M18 6L6 18" size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-5 pb-6">
          <p className="text-base font-semibold text-gray-900 mb-3">Performance Overview</p>
          <div className="flex flex-wrap gap-3 mb-5">
            {overview.map(([label, value, d]) => (
              <div key={label} className="flex-1 min-w-[140px] border border-gray-200 rounded p-4">
                <p className="text-sm text-gray-500 mb-1">{label}</p>
                <p className="text-xl font-semibold text-gray-900 mb-1">{value}</p>
                {label === "Installs" && base && <p className="text-xs text-gray-500">50% main / 50% tested</p>}
                {d !== null && (
                  <p className="text-xs flex items-center gap-1">
                    <span style={{ color: d >= 0 ? "#2e7d32" : "#d32f2f" }} className="font-semibold">
                      {d >= 0 ? "↗" : "↘"} {d >= 0 ? "+" : ""}{d.toFixed(1)}%
                    </span>
                    <span className="text-gray-500">vs {mainLabel}</span>
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <LineChartBox title="Retention Rate Over Time" xLabels={retDays} series={arms(ret)} format={(v) => `${Math.round(v * 100)}%`} />
            <LineChartBox title={base && test.type !== "AB Test" ? "ROAS Evolution" : "LTV Evolution"} xLabels={ltvDays} series={arms(ltv)} format={(v) => `$${v.toFixed(2)}`} />
          </div>

          <div className="mt-5">
            <LineChartBox
              title={`Daily ${metric.label}`}
              wide
              xLabels={daily.map((d) => fmtShort(d.day))}
              series={base
                ? [{ label: `${mainLabel} (main)`, color: MAIN, values: daily.map((d) => d.main) }, { label: `${testedLabel} (tested)`, color: TESTED, values: daily.map((d) => d.tested) }]
                : [{ label: testedLabel, color: TESTED, values: daily.map((d) => d.tested) }]}
              format={(v) => fmtMetric(v, metric)}
              shade={shade}
            />
            {shade.length > 0 && <p className="text-[11px] text-gray-500 mt-1.5">Shaded days didn’t have enough balanced installs and are left out of the totals.</p>}
          </div>

          <div className="mt-4 border border-gray-200 rounded overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-black/[.04] text-gray-900">
                  <th className="text-left font-semibold px-4 py-2 min-w-[130px]">Metric</th>
                  {base && (
                    <th className="text-right font-semibold px-4 py-2">
                      {mainLabel}
                      <span className="block text-xs" style={{ color: MAIN }}>(main)</span>
                    </th>
                  )}
                  <th className="text-right font-semibold px-4 py-2">
                    {testedLabel}
                    {base && <span className="block text-xs" style={{ color: TESTED }}>(tested)</span>}
                  </th>
                  {base && <th className="text-right font-semibold px-4 py-2">Difference</th>}
                </tr>
              </thead>
              <tbody>
                {METRICS.map((m) => {
                  const d = diff(m.key);
                  const on = m.key === metricKey;
                  return (
                    <tr
                      key={m.key}
                      onClick={() => setMetricKey(m.key)}
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setMetricKey(m.key))}
                      aria-selected={on}
                      className={`cursor-pointer border-t border-gray-100 transition-colors ${on ? "bg-blue-500/[.08]" : "hover:bg-black/[.04]"}`}
                    >
                      <td className="px-4 py-2 font-medium text-gray-800">{m.label}</td>
                      {base && <td className="px-4 py-2 text-right tabular-nums">{fmtMetric(data[m.key].main, m)}</td>}
                      <td className="px-4 py-2 text-right tabular-nums">{fmtMetric(data[m.key].tested, m)}</td>
                      {base && (
                        <td className="px-4 py-2 text-right font-semibold tabular-nums" style={{ color: diffColor(d, m) }}>
                          {d >= 0 ? "+" : ""}{d.toFixed(1)}%
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-2">Click any metric row to see it day by day in the chart above.</p>
        </div>
      </div>
    </div>
,
    document.body
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
        @keyframes th-fade{from{opacity:0}to{opacity:1}}
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

                  {selected && state === "live" && <TestModal key={selected.id} test={selected} onClose={() => setSelected(null)} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
