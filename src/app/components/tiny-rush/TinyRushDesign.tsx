import React from "react";
import phoneMenu from "@/assets/tiny-rush/phone-menu.jpg";
import phoneGameplay from "@/assets/tiny-rush/phone-gameplay.jpg";
import phoneResults from "@/assets/tiny-rush/phone-results.jpg";
import desktopGameplay from "@/assets/tiny-rush/desktop-gameplay.jpg";
import tabletGameplay from "@/assets/tiny-rush/tablet-gameplay.jpg";
import { ACCENT, Browser, Card, Lead, Phone, RIVAL, SectionTitle } from "./shared";

const pillars = [
  {
    title: "Readable in 10 seconds",
    text: "A new player should know what to do before the countdown ends. No tutorial screens, no text walls: the rules are drawn, not explained.",
  },
  {
    title: "One rule, many decisions",
    text: "The only constraint is a 5-apple cargo. Go home now with 3, or risk one more? That single limit creates the whole strategy.",
  },
  {
    title: "Fair on every screen",
    text: "Phone and desktop players get the same arena, the same speed and the same rules. Only the layout and controls change.",
  },
];

const loop = [
  { step: "Collect", note: "Drive over apples" },
  { step: "Carry", note: "Max 5 in the truck" },
  { step: "Deliver", note: "Enter your base" },
  { step: "Score", note: "+1 per apple" },
];

const onboarding = [
  {
    title: "Rules as a pictogram strip",
    text: "The menu shows three icons: grab apples, drop at base, beat Blue. One line warns that mud and bumps spill apples.",
  },
  {
    title: "Color means team, everywhere",
    text: "Orange is always you: your truck, your base, your score card, the joystick. Blue is always the rival. Labels (YOU / RIVAL) back up the color for color-blind players.",
  },
  {
    title: "Hints only when they matter",
    text: "A bouncing DROP HERE appears over your base only while you carry apples. A FULL! bubble pops over your truck at 5/5. Both disappear once you learn the loop.",
  },
];

const hud = [
  { title: "Score cards", text: "Big numbers in team colors. Each delivery makes the card bump, so you notice points arriving without reading." },
  { title: "Timer", text: "Neutral dark pill that turns red and ticks in the last 10 seconds to create a final rush." },
  { title: "Cargo as apples", text: "Five slots that fill with apples instead of a bare number. At 5/5 the bar turns orange, shakes and reads CARGO FULL." },
  { title: "Nothing else", text: "No minimap, no menu bar, no ability icons. Four pieces of information is all a 60-second match needs." },
];

const feel = [
  "Apples pop in, bob gently and bounce up before flying into your truck",
  "Cargo slots pop as they fill; the truck squashes on every pickup",
  "Delivered apples arc into the basket, which squashes, with a floating +1",
  "Dust trails at speed, a camera shake on hard bumps, a mud splash",
  "Rising pitch on each pickup and delivery: the 5th apple sounds best",
  "Countdown 3-2-1-GO, a ticking final 10 seconds, confetti on victory",
];

const a11y = [
  "Team identity uses color and text, never color alone",
  "Touch targets of 44 px or more; the PLAY button is 68 px tall",
  "Fully playable by keyboard: Enter to start, Esc to pause, no mouse",
  "Respects reduced-motion settings; sound can be muted from every screen",
  "Tabular numbers so scores and the timer don't jitter as they change",
];

export function TinyRushDesign() {
  return (
    <div className="space-y-24">
      {/* Brief */}
      <section>
        <SectionTitle eyebrow="The brief">A casual game anyone can play in a minute</SectionTitle>
        <Lead>
          The goal was a small competitive collection game that plays well in a
          mobile browser and on a laptop: one shared arena, one player against
          an AI rival, 60 seconds, highest score wins. The scope was
          deliberately tight: no upgrades, levels or monetization. I wanted the
          design challenge to be clarity and feel, not feature count.
        </Lead>
      </section>

      {/* Pillars */}
      <section>
        <SectionTitle eyebrow="Design pillars">Three rules I checked every decision against</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <Card key={p.title} title={p.title} tone="accent">
              <p>{p.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Core loop */}
      <section>
        <SectionTitle eyebrow="Core loop">Collect, carry, deliver, repeat</SectionTitle>
        <div className="bg-gray-50 rounded-2xl p-8 space-y-8">
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {loop.map((l, i) => (
              <li key={l.step} className="relative bg-white rounded-xl p-5 border border-gray-100">
                <span className="text-xs text-gray-400">Step {i + 1}</span>
                <p className="text-xl text-gray-900 mt-1">{l.step}</p>
                <p className="text-sm text-gray-500">{l.note}</p>
                {i < loop.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-xl z-10"
                    style={{ color: ACCENT }}
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl p-5 bg-white border border-gray-100">
              <p className="text-gray-900 mb-1">Tension: the cargo limit</p>
              <p className="text-gray-600 leading-relaxed">
                Apples only count once delivered. Carrying more is efficient but
                riskier, and anything still in the truck at 0:00 is lost.
              </p>
            </div>
            <div className="rounded-xl p-5 bg-white border border-gray-100">
              <p className="text-gray-900 mb-1">Risk: mud and bumps (added in v2)</p>
              <p className="text-gray-600 leading-relaxed">
                Mud spills half your cargo; a hard ram knocks one apple out of
                the other truck. Both make a full truck something to protect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section>
        <SectionTitle eyebrow="Onboarding">Teaching without a tutorial</SectionTitle>
        <div className="grid md:grid-cols-[1fr_280px] gap-12 items-start">
          <div className="space-y-6">
            {onboarding.map((o) => (
              <Card key={o.title} title={o.title}>
                <p>{o.text}</p>
              </Card>
            ))}
          </div>
          <Phone
            src={phoneMenu}
            alt="Tiny Rush menu on a phone: logo, two trucks, three rule icons and a large PLAY button"
            caption="The menu is the tutorial: three pictograms, one warning, one big button."
          />
        </div>
      </section>

      {/* HUD */}
      <section>
        <SectionTitle eyebrow="HUD">Four pieces of information, nothing more</SectionTitle>
        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          <Phone
            src={phoneGameplay}
            alt="Phone gameplay: scores and timer on top, the square arena, a full cargo bar and the joystick below"
            caption="Full cargo: the bar turns orange, FULL! pops over the truck and DROP HERE points home."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {hud.map((h) => (
              <Card key={h.title} title={h.title}>
                <p>{h.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive */}
      <section>
        <SectionTitle eyebrow="Responsive by design">One game, a layout for each screen</SectionTitle>
        <div className="space-y-10">
          <Lead>
            I didn't want a phone game shown small on a laptop. The game world
            is a fixed square arena that every device simulates identically.
            The interface around it is a separate layer that reorganizes itself
            for each screen.
          </Lead>

          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Phone (portrait)">
              <p>
                Scores and timer on top, the arena as large as the width
                allows, cargo directly under it, and the rest of the screen
                kept for the thumb. Safe areas around notches are respected.
              </p>
            </Card>
            <Card title="Desktop (landscape)">
              <p>
                The arena is centered at full height and the extra width holds
                the score cards, YOU on the left with cargo and RIVAL on the
                right. No joystick: WASD or arrow keys.
              </p>
            </Card>
          </div>

          <Browser
            src={desktopGameplay}
            alt="Desktop layout: YOU card and cargo on the left, RIVAL card on the right, timer above the arena"
            caption="Desktop: the side space becomes symmetric score panels instead of empty margins."
          />

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-start">
            <Browser
              src={tabletGameplay}
              alt="Tablet layout in portrait with joystick"
              caption="Tablet (768 × 1024): the portrait layout with a touch joystick."
            />
            <div className="space-y-6">
              <Card title="Same rules, every device">
                <p>
                  Speeds, distances and cargo rules are in game-world units,
                  not pixels, so a phone player is never faster or slower than
                  a desktop player.
                </p>
              </Card>
              <Card title="Tested at 5 sizes">
                <p>375 × 667, 390 × 844, 768 × 1024, 1366 × 768 and 1920 × 1080. Resizing or rotating mid-match never restarts it.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section>
        <SectionTitle eyebrow="Controls">Movement that matches the device</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Touch: a floating joystick">
            <p>
              The stick appears wherever the thumb lands and follows it when
              dragged past the rim, so changing direction is instant. Full
              speed is reached at about two-thirds of the travel, with a small
              dead zone to ignore resting thumbs.
            </p>
          </Card>
          <Card title="Keyboard: no mouse needed">
            <p>
              WASD or arrow keys with smooth acceleration, Enter or Space to
              start, Esc or P to pause. The joystick is never shown on desktop,
              but a touchscreen laptop switches to it on first touch.
            </p>
          </Card>
        </div>
      </section>

      {/* Game feel */}
      <section>
        <SectionTitle eyebrow="Game feel">Every action answers back</SectionTitle>
        <div className="grid md:grid-cols-[1fr_280px] gap-12 items-start">
          <ul className="grid sm:grid-cols-2 gap-4">
            {feel.map((f) => (
              <li key={f} className="flex gap-3 bg-white border border-gray-100 rounded-lg p-4 text-gray-600 leading-relaxed">
                <span aria-hidden style={{ color: ACCENT }}>●</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Phone
            src={phoneResults}
            alt="Results screen: trophy, You win!, final scores and PLAY AGAIN"
            caption="Results: outcome first, then scores, then one big button to go again."
          />
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <SectionTitle eyebrow="Accessibility">Small choices that widen the audience</SectionTitle>
        <ul className="grid md:grid-cols-2 gap-4">
          {a11y.map((a) => (
            <li key={a} className="flex gap-3 text-gray-600 leading-relaxed">
              <span aria-hidden style={{ color: RIVAL }}>✓</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
