import React from "react";

const ACCENT = "#5b7fa6";

const costOfToday = [
  { value: "4", label: "war rooms in 2026 traced back to remote settings pushes" },
  { value: "12,785", label: "players stuck on the previous season for a month, fixable only with a new build" },
  { value: "94% \u2192 41%", label: "drop in race starts in one evening after a single broken push" },
  { value: "~10%", label: "of Android players unable to load the game for an hour" },
];

const incidents = [
  {
    date: "Aug 2026",
    title: "A deleted modifier broke a live event",
    what: "A push removed one entry from a config list. The event screen stopped loading during a peak weekend: race starts fell from 94% to 41% and 7\u201314k players were affected. War room at 22:34, full fix by 23:50, compensation modeled the next day.",
    catch: "The QA gate would have blocked the push; the triage flags gameplay modules on live baselines as high risk.",
  },
  {
    date: "Sep 2026",
    title: "An A/B group silently served old content",
    what: "A control group kept its own copy of the content and never picked up the new season. Up to 12,785 players were locked out of it for the whole month, and it could only be fixed with a special build.",
    catch: "Out-of-date detection on A/B tests would have flagged the group before launch.",
  },
  {
    date: "Feb 2026",
    title: "A content push blocked the game from loading",
    what: "About 10% of Android players couldn\u2019t load the game for an hour. The issue had been seen in staging but dismissed. The postmortem asked for a mandatory QA step on remote content pushes.",
    catch: "That mandatory step is exactly the QA gate, with the test plan attached to the request.",
  },
  {
    date: "Jul 2026",
    title: "New players dropped out at a tutorial step",
    what: "After a push, first-session engagement got worse and dropout spiked at one tutorial step. The team spent the rest of that day and the next investigating.",
    catch: "A targeted QA sign-off on new-player flows before launch.",
  },
];

const beforeAfter = [
  {
    area: "Pushing to production",
    before: "Any config could go live, whatever its QA status. Untested changes reached players several times in a year.",
    after: "“Send to prod” stays locked until a verdict. Changes are tested on an OTA baseline, never on live.",
  },
  {
    area: "QA involvement",
    before: "A “Tested” flag nobody used. QA had no queue and no link to what was being pushed.",
    after: "One QA pool with diffs, impacted modules and test instructions. The verdict unlocks the push.",
  },
  {
    area: "Review effort",
    before: "Every change followed the same path: either everything was reviewed, or nothing was.",
    after: "Claude triages each change: low risk auto-approved, mid risk to a peer, high risk to QA.",
  },
  {
    area: "Editing many baselines",
    before: "One change meant editing the same module in several baselines, one by one.",
    after: "Bulk Edit applies a change to every matching baseline in four steps, with a confirm screen.",
  },
  {
    area: "A/B tests",
    before: "Tests couldn’t span versions and blocked edits on unrelated modules.",
    after: "Tests show their baselines and modules, and warn when they drift out of date.",
  },
  {
    area: "Traceability",
    before: "Tracing an incident meant cross-referencing Slack threads, Grist history and war room recaps.",
    after: "Every revision carries who pushed it, what changed and the diff against the previous version.",
  },
  {
    area: "Knowing what’s live",
    before: "Baseline groups were only version ranges; the “live” marker was unreliable.",
    after: "Every group shows platform, environment, QA state and running tests in one row.",
  },
];

const metrics = [
  {
    metric: "War rooms caused by remote settings pushes",
    baseline: "4 in 2026 so far",
    goal: "Trending to zero",
  },
  {
    metric: "Untested pushes to production",
    baseline: "No gate: any status can go live",
    goal: "0, enforced by the QA gate",
  },
  {
    metric: "Share of changes needing manual QA",
    baseline: "All or nothing",
    goal: "Only high-risk changes",
  },
  {
    metric: "Time to launch an A/B test",
    baseline: "More than a day",
    goal: "Same day",
  },
  {
    metric: "Time to promote an A/B winner",
    baseline: "Hours",
    goal: "Minutes, via Bulk Edit",
  },
  {
    metric: "Time to trace an incident to its push",
    baseline: "Hours to days",
    goal: "Minutes, from the audit trail",
  },
];

export function RemoteSettingsImpact() {
  return (
    <div className="space-y-32">
      {/* Honest framing */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-3xl font-light" style={{ color: ACCENT }}>
            Impact
          </h2>
          <span className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            Not shipped yet
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Remote Settings hasn&apos;t shipped, so there are no production
          results yet. What follows is the real cost of the current tool, the
          incidents the redesign would have prevented, what it changes, and
          how its impact will be measured once it goes live.
        </p>
      </section>

      {/* Cost of today */}
      <section className="space-y-10">
        <h3 className="text-2xl font-light text-gray-900">
          The cost of the current tool
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {costOfToday.map((c) => (
            <div
              key={c.label}
              className="bg-white border border-gray-100 rounded-lg p-6 space-y-3"
            >
              <p
                className="text-4xl font-light tracking-tight"
                style={{ color: ACCENT }}
              >
                {c.value}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real incidents */}
      <section className="space-y-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-light text-gray-900">
            Real incidents the redesign would have caught
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            To make the case for the project, I went back through Slack
            threads and war room postmortems. The pattern was always the same:
            something reached production without being caught, and the cost
            was a war room, a compensation effort, or players stuck in a
            broken experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {incidents.map((i) => (
            <div
              key={i.title}
              className="bg-white border border-gray-100 rounded-lg p-6 space-y-4"
            >
              <p className="text-xs uppercase tracking-wider text-gray-400">
                {i.date}
              </p>
              <h4 className="text-lg font-medium text-gray-900">{i.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{i.what}</p>
              <p
                className="text-sm leading-relaxed pt-4 border-t border-gray-100"
                style={{ color: ACCENT }}
              >
                <span className="font-medium">Would have been caught by: </span>
                {i.catch}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Before / after */}
      <section className="space-y-10">
        <h3 className="text-2xl font-light text-gray-900">
          What the redesign changes
        </h3>
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          <div className="hidden md:grid grid-cols-[1fr_2fr_2fr] bg-gray-50 text-xs uppercase tracking-wider text-gray-400">
            <div className="px-6 py-4">Area</div>
            <div className="px-6 py-4">Before</div>
            <div className="px-6 py-4" style={{ color: ACCENT }}>
              After
            </div>
          </div>
          {beforeAfter.map((row) => (
            <div
              key={row.area}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] border-t border-gray-100 first:border-t-0 md:first:border-t"
            >
              <div className="px-6 pt-5 md:py-5 font-medium text-gray-900 text-sm">
                {row.area}
              </div>
              <div className="px-6 py-2 md:py-5 text-sm text-gray-500 leading-relaxed">
                <span className="md:hidden text-xs uppercase tracking-wider text-gray-400 block mb-1">
                  Before
                </span>
                {row.before}
              </div>
              <div
                className="px-6 pb-5 pt-2 md:py-5 text-sm text-gray-900 leading-relaxed"
                style={{ backgroundColor: `${ACCENT}0d` }}
              >
                <span
                  className="md:hidden text-xs uppercase tracking-wider block mb-1"
                  style={{ color: ACCENT }}
                >
                  After
                </span>
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Measurement plan */}
      <section className="space-y-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-light text-gray-900">
            How success will be measured
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Goals are hypotheses to validate after rollout, starting with one
            game before extending to the rest of the studio.
          </p>
        </div>
        <div className="space-y-3">
          {metrics.map((m) => (
            <div
              key={m.metric}
              className="grid grid-cols-1 md:grid-cols-[2fr_1.3fr_1.3fr] gap-2 md:gap-6 items-center bg-white border border-gray-100 rounded-lg px-6 py-5"
            >
              <p className="text-gray-900">{m.metric}</p>
              <p className="text-sm text-gray-500">
                <span className="text-xs uppercase tracking-wider text-gray-400 mr-2">
                  Today
                </span>
                {m.baseline}
              </p>
              <p className="text-sm font-medium" style={{ color: ACCENT }}>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-normal mr-2">
                  Goal
                </span>
                {m.goal}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact so far */}
      <section className="space-y-10">
        <h3 className="text-2xl font-light text-gray-900">
          Impact so far
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ["🧭", "One shared problem statement", "Around 16 feedback threads and 10 real incidents from Slack, Notion and postmortems turned into a clear case for the project: what it prevents, and the proof."],
            ["🖱️", "A prototype people can use", "A clickable prototype covering the whole flow, from baselines to QA verdict, built with Claude so discussions happen on real behavior."],
            ["🤖", "A new role for AI", "Moved the conversation from “should QA test everything?” to “who needs to look at this change?”, with rules the team owns."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-lg p-8 space-y-4"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${ACCENT}1a` }}
              >
                <span className="text-2xl">{icon}</span>
              </div>
              <h4 className="text-xl font-light text-gray-900">{title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <section className="bg-gray-50 rounded-lg p-8 space-y-4">
        <h3 className="text-xl font-light text-gray-900">Next steps</h3>
        <ul className="text-gray-600 space-y-2 list-disc pl-6">
          <li>Validate the prototype with designers, developers and QA</li>
          <li>Tune the risk ruleset on real changes before trusting auto-approval</li>
          <li>Roll out on one game first, then measure against the goals above</li>
        </ul>
      </section>
    </div>
  );
}
