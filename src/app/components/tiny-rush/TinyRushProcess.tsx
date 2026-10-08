import React from "react";
import { ACCENT, Card, Lead, SectionTitle } from "./shared";

const steps = [
  {
    title: "Brief",
    text: "I wrote the game concept, the scope (and what not to build), and a separate set of responsive requirements before any code existed.",
  },
  {
    title: "Build",
    text: "Claude Code implemented the game in Phaser 3 and TypeScript from that brief: the arena, trucks, rival AI, HUD and screens.",
  },
  {
    title: "Review on device",
    text: "I played on my phone and on desktop and reported what felt wrong in player language: “slower”, “the joystick is bad”, “the cargo is hidden”.",
  },
  {
    title: "Decide",
    text: "I chose what to add next (bump, mud, pause), what to keep out of scope, and approved the final balance.",
  },
  {
    title: "Validate",
    text: "Simulated matches and screenshots at five screen sizes checked each change before it reached the playable build.",
  },
];

const split = {
  me: [
    "Game concept, rules and scope limits",
    "Design pillars and the 10-second readability goal",
    "Responsive requirements for phone and desktop",
    "Playtesting and diagnosing what felt wrong",
    "Which features to add, and which to cut",
    "Final call on balance and visual direction",
  ],
  ai: [
    "Writing the Phaser / TypeScript code",
    "Drawing the art in code (no paid assets)",
    "Implementing fixes I asked for",
    "Running batches of simulated matches",
    "Capturing screenshots at each screen size",
  ],
};

const learnings = [
  {
    title: "AI changes speed and scope, not who decides",
    text: "Working with AI, I spent less time producing and more time directing and reviewing. I covered prototype, balancing data and copy in a single sprint, but every decision that shaped the player's experience was still mine to make.",
  },
  {
    title: "The real device is the real test",
    text: "All three v1 problems were invisible on desktop and obvious on a phone within minutes. I now treat testing on a phone as part of designing for it.",
  },
  {
    title: "Constraints create the strategy",
    text: "A 5-apple cargo limit and two mud puddles did more for depth than any feature I left out. Small rules, clearly shown, beat many rules explained.",
  },
];

const next = [
  "Playtest with 5 casual players: time to first delivery, and do they understand mud without being told?",
  "Difficulty levels by adjusting the rival's reaction time and mistakes, never its speed",
  "Haptic feedback on pickups and bumps for Android",
  "A second arena layout to test whether players adapt their routes",
];

export function TinyRushProcess() {
  return (
    <div className="space-y-24">
      <section>
        <SectionTitle eyebrow="How I worked with AI">Designer as director</SectionTitle>
        <div className="space-y-10">
          <Lead>
            At mobile studios that iterate fast, knowing how to work with AI is
            becoming an expectation. What matters is how it fits a process with
            good judgment. Here is how this project was split.
          </Lead>

          <ol className="grid md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-white border border-gray-100 rounded-lg p-5 space-y-2">
                <span className="text-xs text-gray-400">Step {i + 1}</span>
                <p className="text-lg text-gray-900">{s.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg p-6 space-y-3" style={{ backgroundColor: `${ACCENT}12` }}>
              <h3 className="text-lg text-gray-900">What I owned</h3>
              <ul className="space-y-2 text-gray-700">
                {split.me.map((m) => (
                  <li key={m} className="flex gap-3">
                    <span aria-hidden style={{ color: ACCENT }}>●</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg p-6 space-y-3 bg-gray-50">
              <h3 className="text-lg text-gray-900">What I delegated to AI</h3>
              <ul className="space-y-2 text-gray-700">
                {split.ai.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span aria-hidden className="text-gray-400">●</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Reflection">Key learnings</SectionTitle>
        <div className="space-y-6">
          {learnings.map((l) => (
            <Card key={l.title} title={l.title}>
              <p>{l.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Next">What I'd test and build next</SectionTitle>
        <ul className="grid md:grid-cols-2 gap-4">
          {next.map((n) => (
            <li key={n} className="flex gap-3 bg-white border border-gray-100 rounded-lg p-5 text-gray-600 leading-relaxed">
              <span aria-hidden style={{ color: ACCENT }}>→</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
