import React from "react";
import phoneMenu from "@/assets/tiny-rush/phone-menu.jpg";
import phoneGameplay from "@/assets/tiny-rush/phone-gameplay.jpg";
import { kit } from "./kit";
import { ACCENT, Lead, RIVAL, SectionTitle } from "./shared";

/* ---------------------------------------------------------- screen flow */

function ScreenNode({
  label,
  meta,
  src,
  fit = "cover",
  children,
}: {
  label: string;
  meta: string;
  src?: string;
  fit?: "cover" | "contain";
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 min-w-0">
      <div className="w-full max-w-[150px] aspect-[390/600] rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex items-center justify-center">
        {src ? (
          <img
            src={src}
            alt={`${label} screen`}
            className={`w-full h-full ${fit === "contain" ? "object-contain p-2 bg-[#e8f6ff]" : "object-cover object-top"}`}
            loading="lazy"
          />
        ) : (
          children
        )}
      </div>
      <div className="text-center">
        <p className="text-gray-900">{label}</p>
        <p className="text-xs text-gray-500">{meta}</p>
      </div>
    </div>
  );
}

function Arrow({ label }: { label: string }) {
  return (
    <div className="flex md:flex-col items-center justify-center gap-1 text-center py-2 md:py-0 md:pt-24">
      <span className="text-xs text-gray-500 leading-tight max-w-[90px]">{label}</span>
      <span aria-hidden className="text-xl rotate-90 md:rotate-0" style={{ color: ACCENT }}>
        →
      </span>
    </div>
  );
}

const transitions = [
  ["Menu", "PLAY button, Enter or Space", "Countdown"],
  ["Countdown", "3 seconds", "Match"],
  ["Match", "Pause button, Esc / P, or leaving the app", "Pause"],
  ["Pause", "Resume or Esc", "Match (same moment)"],
  ["Pause", "Restart", "Countdown (new match)"],
  ["Pause", "Quit to menu", "Menu"],
  ["Match", "Timer reaches 0:00 (+0.9 s for last deliveries)", "Results"],
  ["Results", "PLAY AGAIN, Enter or Space (after 0.7 s)", "Countdown"],
];

/* -------------------------------------------------------- state machine */

const states = [
  {
    name: "Empty",
    cargo: "0 / 5",
    sees: "Dashed cargo slots. No hints: the apples are the call to action.",
  },
  {
    name: "Loading",
    cargo: "1–4 / 5",
    sees: "Slots pop as they fill, apples appear in the truck bed, your base glows orange.",
  },
  {
    name: "Full",
    cargo: "5 / 5",
    sees: "FULL! bubble over the truck, cargo bar turns orange and shakes, DROP HERE points home. Apples are ignored.",
  },
  {
    name: "Unloading",
    cargo: "in base",
    sees: "Apples arc one by one into the basket every 0.11 s, each with a +1, a rising chime and a score-card bump.",
  },
  {
    name: "Hit",
    cargo: "mud or bump",
    sees: "Truck wobbles, a −N label appears and apples spill nearby. You can't re-grab them for 0.9 s.",
  },
];

/* ------------------------------------------------------------- pacing */

const pacing = [
  { from: 0, to: 3, name: "Anticipation", text: "3 · 2 · 1 · GO with controls hint", color: "#cbd5e1" },
  { from: 3, to: 13, name: "Learning", text: "First pickup in seconds; DROP HERE guides the first delivery", color: "#fdba74" },
  { from: 13, to: 53, name: "Competition", text: "Routes, contested apples, bumps and mud", color: ACCENT },
  { from: 53, to: 63, name: "Final rush", text: "Timer turns red and ticks; bank your cargo before 0:00", color: "#ef3b36" },
];

/* ------------------------------------------------------ feedback matrix */

const feedback = [
  ["Apple picked up", "Apple bounces up and flies into the truck; truck squashes", "Pitch rises with each apple", "Slot pops in"],
  ["Cargo full", "FULL! bubble; DROP HERE over your base; base glows", "Short low “boop”", "Bar turns orange, shakes, reads CARGO FULL"],
  ["Apple delivered", "Apple arcs into the basket, basket squashes, +1 floats up", "Chime climbing a scale", "Score card bumps"],
  ["Hard bump", "Camera shake, BUMP! label, victim wobbles and spills 1 apple", "Low thud", "Victim's cargo drops"],
  ["Mud", "Mud splash, wobble, −N label, apples land around the puddle", "Splash", "Cargo drops by half"],
  ["Last 10 seconds", "—", "Tick each second, sharper for the last 5", "Timer turns red and pulses"],
  ["Win / lose / draw", "Confetti on a win; badge animates in", "Fanfare / falling notes / two even notes", "Results card with both scores"],
];

export function TinyRushFlow() {
  return (
    <div className="space-y-24">
      {/* Screen flow */}
      <section>
        <SectionTitle eyebrow="Screen flow">From tap to rematch in two touches</SectionTitle>
        <div className="space-y-10">
          <Lead>
            The whole game is five screens. The flow is built for repeat play:
            one big button on the menu, one big button on the results, and no
            loading or settings screens in between.
          </Lead>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-2 md:gap-3">
              <ScreenNode label="Menu" meta="Rules as 3 pictograms" src={phoneMenu} />
              <Arrow label="PLAY" />
              <ScreenNode label="Countdown" meta="3 seconds">
                <span className="text-5xl font-semibold text-gray-800" style={{ fontFamily: "Fredoka, sans-serif" }}>
                  3·2·1
                </span>
              </ScreenNode>
              <Arrow label="GO" />
              <div className="flex flex-col items-center gap-6">
                <ScreenNode label="Match" meta="60 seconds" src={phoneGameplay} />
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs text-gray-500">⏸ / Esc ⇅ Resume</span>
                </div>
                <ScreenNode label="Pause" meta="Resume · Restart · Quit" src={kit("ui-pause-card")} fit="contain" />
              </div>
              <Arrow label="0:00" />
              <ScreenNode label="Results" meta="Win · Lose · Draw" src={kit("ui-results-win")} fit="contain" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-gray-400 border-b border-gray-200">
                  <th className="py-3 pr-6 font-normal">From</th>
                  <th className="py-3 pr-6 font-normal">Trigger</th>
                  <th className="py-3 font-normal">To</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {transitions.map(([from, trigger, to], i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 pr-6 text-gray-900">{from}</td>
                    <td className="py-3 pr-6">{trigger}</td>
                    <td className="py-3">{to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* State machine */}
      <section>
        <SectionTitle eyebrow="Player states">What the truck is doing, and how the UI says it</SectionTitle>
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {["Empty", "Loading", "Full", "Unloading", "Empty"].map((s, i, arr) => (
              <React.Fragment key={i}>
                <span
                  className="rounded-full px-4 py-2 border"
                  style={{
                    borderColor: s === "Full" ? ACCENT : "#e5e7eb",
                    background: s === "Full" ? `${ACCENT}14` : "white",
                  }}
                >
                  {s}
                </span>
                {i < arr.length - 1 && <span aria-hidden style={{ color: ACCENT }}>→</span>}
              </React.Fragment>
            ))}
            <span className="text-gray-400 px-2">·</span>
            <span className="rounded-full px-4 py-2 border border-dashed border-gray-300 text-gray-600">
              Hit (mud / bump) → back to Loading or Empty
            </span>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {states.map((s) => (
              <div key={s.name} className="bg-white border border-gray-100 rounded-lg p-5 space-y-2">
                <p className="text-lg text-gray-900">{s.name}</p>
                <p className="text-xs uppercase tracking-wider" style={{ color: ACCENT }}>
                  {s.cargo}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.sees}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacing */}
      <section>
        <SectionTitle eyebrow="Match pacing">Designing the 60 seconds</SectionTitle>
        <div className="space-y-6">
          <Lead>
            A short match still needs a shape. The phases below are design
            targets, used to decide when hints appear and when the tension
            ramps up.
          </Lead>
          <div className="flex h-12 rounded-xl overflow-hidden">
            {pacing.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center text-xs text-white px-2 text-center"
                style={{ flexGrow: p.to - p.from, flexBasis: 0, background: p.color }}
              >
                <span className="hidden sm:inline">{p.name}</span>
              </div>
            ))}
          </div>
          <div className="relative h-4 text-xs text-gray-400 font-mono tabular-nums">
            {[0, 3, 13, 53, 63].map((t) => (
              <span
                key={t}
                className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full"
                style={{ left: `${(t / 63) * 100}%` }}
              >
                {t} s
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {pacing.map((p) => (
              <div key={p.name} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: p.color }} />
                  <span className="text-gray-900">{p.name}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback matrix */}
      <section>
        <SectionTitle eyebrow="Feedback matrix">Every event answers in three channels</SectionTitle>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wider text-gray-400 border-b border-gray-200">
                <th className="py-3 pr-6 font-normal">Event</th>
                <th className="py-3 pr-6 font-normal">In the world</th>
                <th className="py-3 pr-6 font-normal">Sound</th>
                <th className="py-3 font-normal">HUD</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 align-top">
              {feedback.map(([event, world, sound, hud]) => (
                <tr key={event} className="border-b border-gray-100">
                  <td className="py-3 pr-6 text-gray-900 whitespace-nowrap">{event}</td>
                  <td className="py-3 pr-6">{world}</td>
                  <td className="py-3 pr-6">{sound}</td>
                  <td className="py-3">{hud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          The rival's pickups are silent and its deliveries are a quiet note,
          so your own feedback always stands out. <span style={{ color: RIVAL }}>Blue</span> never competes with{" "}
          <span style={{ color: ACCENT }}>orange</span> for attention.
        </p>
      </section>
    </div>
  );
}
