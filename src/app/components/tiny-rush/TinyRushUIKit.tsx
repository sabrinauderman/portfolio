import React from "react";
import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import { kit } from "./kit";
import { ACCENT, Lead, RIVAL, SectionTitle } from "./shared";

const FREDOKA = { fontFamily: "Fredoka, sans-serif" };

/* ------------------------------------------------------------ arena map */

const pins = [
  { n: 1, x: 50, y: 11, label: "Rival base", text: "Blue pad, mirrored at the top. Same size and distance as yours." },
  { n: 2, x: 50, y: 89, label: "Your base", text: "Orange pad at the bottom, closest to the thumb on phones. 220 × 118 units." },
  { n: 3, x: 26, y: 50, label: "Mud puddles", text: "Two hazards on the centre line, mirrored left and right. Spill half your cargo." },
  { n: 4, x: 50, y: 77, label: "Start positions", text: "Both trucks start the same distance from their base, facing the field." },
  { n: 5, x: 4, y: 30, label: "Hedge and fence", text: "Frames the field. Pure decoration: nothing inside the fence blocks driving." },
];

/* --------------------------------------------------------- game objects */

const objects = [
  {
    name: "Player truck",
    images: ["obj-truck-empty", "obj-truck-loaded", "obj-truck-full"],
    states: "Empty · loaded · full",
    text: "Toy proportions, a big cab and an orange ring underneath so you find yourself in a glance. Apples sit in the open bed, so cargo is readable in the world, not only in the HUD.",
  },
  {
    name: "Rival truck",
    images: ["obj-truck-rival"],
    states: "Same silhouette, blue",
    text: "Identical shape and size to keep the match visibly fair. Only color and ring change.",
  },
  {
    name: "Apple",
    images: ["obj-apple"],
    states: "Idle bob · collect bounce",
    text: "The only red object on the field, with a leaf and highlight to read at 20 px. A gentle bob makes it feel alive and collectible.",
  },
  {
    name: "Mud puddle",
    images: ["obj-mud"],
    states: "Static · splash on entry",
    text: "Dark brown, low and wide, so it reads as ground you can drive into, not a wall. Driving through costs half your cargo.",
  },
  {
    name: "Base",
    images: ["obj-base-you", "obj-base-rival"],
    states: "Idle · glowing while you carry",
    text: "Dashed pad with hazard stripes, a basket and a label. Delivered apples fly into the basket so the goal is concrete.",
  },
  {
    name: "Scenery",
    images: ["obj-tree"],
    states: "Decoration only",
    text: "Hedges, apple trees and a wooden fence set the farm theme. Kept low-contrast so gameplay objects always pop.",
  },
];

/* --------------------------------------------------------------- color */

const colors = [
  { name: "You", hex: "#FF8A1F", role: "Player truck, base, score, joystick, primary buttons" },
  { name: "You, dark", hex: "#D9600A", role: "Score numbers, outlines, button depth" },
  { name: "Rival", hex: "#3D8BFF", role: "Rival truck, base and score" },
  { name: "Rival, dark", hex: "#1F5FD1", role: "Rival score numbers" },
  { name: "Apple / urgent", hex: "#EF3B36", role: "Apples and the final-10-seconds timer: red means act now" },
  { name: "Grass", hex: "#8FD468", role: "Field, with #86CB5F mowing stripes" },
  { name: "Mud", hex: "#8A5A2B", role: "Hazard" },
  { name: "Ink", hex: "#23324A", role: "Timer pill, text" },
];

/* ---------------------------------------------------------- typography */

const type = [
  { sample: "Tiny Rush", spec: "Logo · Fredoka Bold 76 px, white stroke", style: { fontSize: 56, fontWeight: 700, color: ACCENT } },
  { sample: "24", spec: "Score · Bold 32 px phone / up to 108 px desktop, tabular", style: { fontSize: 56, fontWeight: 700, color: "#D9600A" } },
  { sample: "PLAY AGAIN", spec: "Primary button · Bold 26–32 px, +0.06em", style: { fontSize: 30, fontWeight: 700, color: "#23324A", letterSpacing: "0.06em" } },
  { sample: "CARGO  YOU  RIVAL", spec: "Labels · Bold 11–20 px, +0.08em", style: { fontSize: 18, fontWeight: 700, color: "#5B6B84", letterSpacing: "0.08em" } },
  { sample: "Watch out: mud and bumps spill your apples!", spec: "Hints · Medium 13–16 px", style: { fontSize: 17, fontWeight: 500, color: "#7A4A26" } },
];

/* ------------------------------------------------------------ component */

function Swatch({ hex, name, role }: { hex: string; name: string; role: string }) {
  return (
    <div className="space-y-2">
      <div className="h-16 rounded-xl border border-black/5" style={{ background: hex }} />
      <div>
        <p className="text-gray-900 text-sm">{name}</p>
        <p className="text-xs text-gray-400 font-mono">{hex}</p>
        <p className="text-xs text-gray-500 leading-relaxed mt-1">{role}</p>
      </div>
    </div>
  );
}

function Specimen({ img, label, note, className = "", boxClassName = "min-h-[96px]" }: { img: string; label: string; note?: string; className?: string; boxClassName?: string }) {
  return (
    <figure className={`space-y-2 ${className}`}>
      <div className={`rounded-xl bg-[#e8f6ff] p-3 flex items-center justify-center ${boxClassName}`}>
        <img src={kit(img)} alt={label} loading="lazy" className="max-h-40 w-auto max-w-full rounded-lg" />
      </div>
      <figcaption>
        <p className="text-sm text-gray-900">{label}</p>
        {note && <p className="text-xs text-gray-500 leading-relaxed">{note}</p>}
      </figcaption>
    </figure>
  );
}

/** Wireframe of the phone layout with real measurements. */
function PortraitSpec() {
  const row = "flex items-center justify-center rounded-lg text-[11px] text-center leading-tight";
  return (
    <div className="mx-auto w-[220px] rounded-[2rem] border-4 border-gray-900 p-3 flex flex-col gap-2 h-[440px] bg-white">
      <div className={`${row} h-9 bg-gray-100 text-gray-600`}>HUD · 58 px<br />YOU · timer ⏸ · RIVAL</div>
      <div className="flex-1 flex items-center justify-center">
        <div className={`${row} aspect-square w-full text-white`} style={{ background: "#8FD468" }}>
          Arena<br />largest square that fits
        </div>
      </div>
      <div className={`${row} h-7 bg-gray-100 text-gray-600`}>Cargo · 46 px</div>
      <div className={`${row} h-24 border-2 border-dashed`} style={{ borderColor: ACCENT, color: ACCENT }}>
        Thumb zone<br />150–320 px
      </div>
    </div>
  );
}

function LandscapeSpec() {
  const box = "flex items-center justify-center rounded-lg text-[11px] text-center leading-tight";
  return (
    <div className="mx-auto w-full max-w-[460px] aspect-[16/10] rounded-xl border-4 border-gray-900 p-3 grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_1fr] gap-2 bg-white">
      <div />
      <div className={`${box} h-7 px-4 bg-gray-800 text-white`}>Timer · 44–68 px</div>
      <div />
      <div className="flex flex-col justify-center gap-2">
        <div className={`${box} h-14 border-2`} style={{ borderColor: ACCENT, color: "#D9600A" }}>YOU<br />score</div>
        <div className={`${box} h-8 bg-gray-100 text-gray-600`}>Cargo</div>
      </div>
      <div className={`${box} h-full aspect-square text-white`} style={{ background: "#8FD468" }}>
        Arena<br />full height
      </div>
      <div className="flex flex-col justify-center">
        <div className={`${box} h-14 border-2`} style={{ borderColor: RIVAL, color: "#1F5FD1" }}>RIVAL<br />score</div>
      </div>
    </div>
  );
}

export function TinyRushUIKit() {
  return (
    <div className="space-y-24">
      {/* Arena map */}
      <section>
        <SectionTitle eyebrow="Level layout">One arena, built for fairness</SectionTitle>
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src={kit("arena-map")} alt="Top-down map of the Tiny Rush arena" className="w-full h-auto block" />
            {pins.map((p) => (
              <span
                key={p.n}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-900 text-white text-sm flex items-center justify-center shadow-lg ring-4 ring-white"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                {p.n}
              </span>
            ))}
          </div>
          <div className="space-y-6">
            <Lead>
              The arena is a 960 × 960 square in game units. It looks and
              plays the same on every screen. Everything that matters is
              mirrored top to bottom, so neither side has an advantage.
            </Lead>
            <ol className="space-y-4">
              {pins.map((p) => (
                <li key={p.n} className="flex gap-4">
                  <span className="flex-none w-7 h-7 rounded-full bg-gray-900 text-white text-sm flex items-center justify-center">
                    {p.n}
                  </span>
                  <div>
                    <p className="text-gray-900">{p.label}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm text-gray-500">
              9 apples on the field at once; each one respawns 0.7–1.5 s after
              it's picked up. The opening layout is mirrored too.
            </p>
          </div>
        </div>
      </section>

      {/* Game objects */}
      <section>
        <SectionTitle eyebrow="Game objects">Readable at thumbnail size</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {objects.map((o) => (
            <div key={o.name} className="bg-white border border-gray-100 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-center gap-2 rounded-xl bg-[#8FD468]/25 p-3 min-h-[140px]">
                {o.images.map((img) => (
                  <img
                    key={img}
                    src={kit(img)}
                    alt={`${o.name}: ${img.replace("obj-", "").replace(/-/g, " ")}`}
                    loading="lazy"
                    className="min-w-0 max-h-28 w-auto rounded-lg"
                    style={{ maxWidth: `${100 / o.images.length}%` }}
                  />
                ))}
              </div>
              <div className="space-y-1">
                <p className="text-lg text-gray-900">{o.name}</p>
                <p className="text-xs uppercase tracking-wider" style={{ color: ACCENT }}>
                  {o.states}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color */}
      <section>
        <SectionTitle eyebrow="Color system">Orange is you, blue is them</SectionTitle>
        <div className="space-y-8">
          <Lead>
            Two complementary team colors carry identity through every layer:
            truck, base, HUD and controls. Red is reserved for apples and
            urgency, so it always means “act now”.
          </Lead>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {colors.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <SectionTitle eyebrow="Typography">One rounded family, five roles</SectionTitle>
        <div className="space-y-2">
          {type.map((t) => (
            <div key={t.spec} className="grid md:grid-cols-[1.4fr_1fr] gap-2 md:gap-8 items-center border-b border-gray-100 py-5">
              <p style={{ ...FREDOKA, ...t.style, lineHeight: 1.1 }}>{t.sample}</p>
              <p className="text-sm text-gray-500">{t.spec}</p>
            </div>
          ))}
          <p className="text-sm text-gray-500 pt-4">
            Fredoka is a free, rounded typeface that matches the toy look. Numbers use tabular figures so scores and the timer never jitter.
          </p>
        </div>
      </section>

      {/* HUD components */}
      <section>
        <SectionTitle eyebrow="HUD components">Every state, captured from the live build</SectionTitle>
        <div className="space-y-12">
          <div>
            <h3 className="text-lg text-gray-900 mb-4">Score and timer</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <Specimen img="ui-score-you" label="Your score" note="Phone, top left" />
              <Specimen img="ui-score-rival" label="Rival score" note="Mirrored, top right" />
              <Specimen img="ui-timer" label="Timer" note="Neutral ink pill" />
              <Specimen img="ui-timer-urgent" label="Timer, last 10 s" note="Red, pulses each second" />
              <Specimen img="ui-btn-pause" label="Pause" note="44 px touch target" />
            </div>
          </div>

          <div>
            <h3 className="text-lg text-gray-900 mb-4">Cargo meter</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Specimen img="ui-cargo-0" label="Empty" note="Dashed slots show capacity before you start" />
              <Specimen img="ui-cargo-3" label="Loading" note="Each slot pops in as an apple" />
              <Specimen img="ui-cargo-full" label="Full" note="Orange fill, shake, CARGO FULL label" />
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <h3 className="text-lg text-gray-900 mb-4">Desktop panel</h3>
              <Specimen img="ui-desktop-panel" boxClassName="h-52" label="YOU card + cargo" note="Landscape uses big side panels; score up to 108 px" />
            </div>
            <div>
              <h3 className="text-lg text-gray-900 mb-4">Buttons and dialogs</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Specimen img="ui-btn-play" boxClassName="h-52" label="Primary button" note="68 px tall, 3D press, idle nudge every few seconds" />
                <Specimen img="ui-pause-card" boxClassName="h-52" label="Pause" note="One primary action, two secondary" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-gray-900 mb-4">Results</h3>
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <Specimen img="ui-results-win" label="Win" note="Trophy, orange title, confetti" />
              <Specimen img="ui-results-lose" label="Lose" note="“So close!”: encouraging, not punishing" />
              <Specimen img="ui-results-draw" label="Draw" note="Neutral purple, both scores even" />
            </div>
          </div>
        </div>
      </section>

      {/* Layout specs */}
      <section>
        <SectionTitle eyebrow="Layout specs">Two layouts, one rule</SectionTitle>
        <div className="space-y-8">
          <Lead>
            The arena is always the largest square that fits the space left by
            the HUD. The HUD never sits on top of the game.
          </Lead>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 items-center">
            <div className="space-y-3">
              <PortraitSpec />
              <p className="text-sm text-gray-500 text-center">Portrait (phones, tablets)</p>
            </div>
            <div className="space-y-3">
              <LandscapeSpec />
              <p className="text-sm text-gray-500 text-center">
                Landscape (laptops, desktops): side panels 150–360 px each
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Joystick */}
      <section>
        <SectionTitle eyebrow="Control spec">Virtual joystick</SectionTitle>
        <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
          <div className="flex gap-4">
            <Specimen img="ui-joystick-idle" label="Resting" note="Breathes gently to invite a touch" className="w-40" />
            <Specimen img="ui-joystick-active" label="Dragging" note="Knob follows the thumb" className="w-40" />
          </div>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            {[
              ["Base size", "112–156 px, scales with the thumb zone"],
              ["Knob", "46% of the base"],
              ["Full speed", "≈ 30 px of drag (65% of the stick's reach)"],
              ["Dead zone", "8% of travel"],
              ["Spawn", "Under the thumb, anywhere on the play screen"],
              ["Past the rim", "Base follows the thumb; no hard stop"],
              ["Release", "Glides back to the centre of the thumb zone"],
              ["Hidden", "On devices without touch"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-gray-100 pb-3">
                <dt className="text-xs uppercase tracking-wider text-gray-400">{k}</dt>
                <dd className="text-gray-800 mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
