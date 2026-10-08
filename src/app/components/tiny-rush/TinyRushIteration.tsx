import React from "react";
import phoneMud from "@/assets/tiny-rush/phone-mud.jpg";
import phonePause from "@/assets/tiny-rush/phone-pause.jpg";
import cargoBefore from "@/assets/tiny-rush/cargo-before.jpg";
import cargoAfter from "@/assets/tiny-rush/cargo-after.jpg";
import { ACCENT, Card, Lead, Phone, SectionTitle, Stat } from "./shared";
import { DiagramLegend, FrameDiagram, JoystickDiagram } from "./TinyRushDiagrams";

/** Before / after visuals for each playtest fix. v1 wasn't kept, so these are diagrams or a recreation. */
const fixVisuals: Record<string, React.ReactNode> = {
  slower: (
    <figure className="space-y-3">
      <FrameDiagram />
      <DiagramLegend />
      <figcaption className="text-sm text-gray-500 text-center">Schematic, not measured frame times.</figcaption>
    </figure>
  ),
  joystick: (
    <figure className="space-y-3">
      <JoystickDiagram />
      <figcaption className="text-sm text-gray-500 text-center">Schematic of the thumb zone below the arena.</figcaption>
    </figure>
  ),
  cargo: (
    <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
      <Phone
        src={cargoBefore}
        alt="Recreated v1 on a phone web view: the arena overflows and covers the cargo bar"
        caption="Before (v1 rule, recreated): the arena covers the cargo bar. You're carrying 3 apples and can't see it."
      />
      <Phone
        src={cargoAfter}
        alt="Current version on the same web view: the cargo bar shows 3 of 5 apples below the arena"
        caption="After: same screen, the arena fits the space left for it and the cargo shows 3/5."
      />
    </div>
  ),
};

const fixes = [
  {
    id: "slower",
    problem: "“On mobile it feels slower.”",
    cause:
      "The farm scenery (hundreds of flowers, bushes and fence posts) was redrawn as vectors every frame. Phones dropped frames, and the game clock slowed with them.",
    fix: "Draw the scenery once into a single image, and let the clock keep real time even when frames drop. Trucks also accelerate a little faster.",
  },
  {
    id: "joystick",
    problem: "“The joystick is bad.”",
    cause:
      "It only worked inside a small zone and stopped hard at its rim, so quick turns meant lifting the thumb and starting again.",
    fix: "Start the stick anywhere the thumb lands, let it follow the thumb past the rim, and reach full speed with less drag.",
  },
  {
    id: "cargo",
    problem: "“The cargo bar is hidden under the game.”",
    cause:
      "The arena was sized from the screen height. Inside an app's web view the real height is smaller, so the arena overflowed onto the cargo bar.",
    fix: "Size the arena from the space the layout actually leaves for it, so it can never cover the HUD on any device.",
  },
];

const added = [
  {
    title: "Bump",
    text: "Ram the rival at speed and one apple flies out of their truck. The rival can do it to you too, and it tries when you're carrying 3 or more.",
  },
  {
    title: "Mud puddles",
    text: "Two puddles, mirrored for fairness. Driving through one splashes half your cargo out around it. A cheap way to make routes matter.",
  },
  {
    title: "Pause and quit",
    text: "A pause button next to the timer (and Esc) with Resume, Restart and Quit to menu. The game also pauses when you switch apps.",
  },
];

const rival = [
  "Same speed, same cargo limit, same delivery rules as the player",
  "Re-plans only 2–4 times per second, like a human reacting",
  "Misjudges distances slightly and sometimes hesitates for a moment",
  "Gives up on apples the player will clearly reach first",
  "Heads home early when apples are far and time is short",
  "Steers around mud when loaded, but not perfectly",
];

export function TinyRushIteration() {
  return (
    <div className="space-y-24">
      {/* Playtest fixes */}
      <section>
        <SectionTitle eyebrow="Playtest on my phone">Three problems the desktop didn't show</SectionTitle>
        <div className="space-y-10">
          <Lead>
            The first version felt right on a laptop. Playing it on my own
            phone surfaced three problems within minutes. Each one turned out to
            have a technical cause behind a UX symptom.
          </Lead>
          <div className="space-y-6">
            {fixes.map((f) => (
              <div key={f.problem} className="grid md:grid-cols-3 gap-6 bg-white border border-gray-100 rounded-lg p-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">What I felt</p>
                  <p className="text-lg text-gray-900">{f.problem}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Why</p>
                  <p className="text-gray-600 leading-relaxed">{f.cause}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: ACCENT }}>
                    Fix
                  </p>
                  <p className="text-gray-600 leading-relaxed">{f.fix}</p>
                </div>
                <div className="md:col-span-3 border-t border-gray-100 pt-6">
                  {fixVisuals[f.id]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* v2 features */}
      <section>
        <SectionTitle eyebrow="Version 2">Adding interaction between the two trucks</SectionTitle>
        <div className="grid md:grid-cols-[1fr_280px_280px] gap-10 items-start">
          <div className="space-y-6">
            <Lead>
              The MVP was a clean race, but the two players barely affected each
              other. I added three small features to create moments of conflict
              and give players control over the session.
            </Lead>
            {added.map((a) => (
              <Card key={a.title} title={a.title}>
                <p>{a.text}</p>
              </Card>
            ))}
          </div>
          <Phone
            src={phoneMud}
            alt="The orange truck in a mud puddle with apples splashed around it and a −2 label"
            caption="Mud: −2 apples, splashed around the puddle for anyone to grab."
          />
          <Phone
            src={phonePause}
            alt="Pause screen with Resume, Restart and Quit to menu"
            caption="Pause: one primary action, two secondary ones."
          />
        </div>
      </section>

      {/* Balancing */}
      <section>
        <SectionTitle eyebrow="Balancing with data">Competitive, but beatable</SectionTitle>
        <div className="space-y-10">
          <Lead>
            I didn't want to tune difficulty by feel alone. I ran batches of 16
            simulated matches with a bot standing in for an attentive player
            (8 keyboard directions, a 150 ms reaction delay) and compared the
            results after each change.
          </Lead>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat value="13 / 16" label="matches won by the bot against the v1 rival, usually by 3–8 points" />
            <Stat value="12 / 16" label="won in v2 by a bot that steers around mud" />
            <Stat value="5 / 16" label="won in v2 by a bot that drives straight through mud" />
            <Stat value="3–8 pts" label="typical winning margin: close enough that every delivery matters" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card title="How the rival stays fair">
              <ul className="space-y-2">
                {rival.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span aria-hidden style={{ color: ACCENT }}>–</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="What the numbers told me">
              <p>
                Mud became the real skill test: avoiding it is the difference
                between winning 3 matches in 4 and winning 1 in 3. That
                confirmed the hazard adds decisions instead of just punishing
                players.
              </p>
              <p>
                The rival never cheats with extra speed. It loses because it
                thinks like a slightly distracted person, which feels fairer
                when you beat it.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
