import React from "react";
import { Screenshot } from "../remote-settings/Screenshot";
import { TestHubPlayground } from "./TestHubPlayground";
import home from "@/assets/test-hub/home.jpg";
import abTest from "@/assets/test-hub/ab-test.jpg";
import rollout from "@/assets/test-hub/rollout.jpg";

const ACCENT = "#3f8f8a";

const workflows = [
  {
    title: "Calendar and Latest Tests",
    lead: "What was live on any day, in two clicks.",
    detail:
      "The home screen is a calendar of every running test, color-coded by type, with a monthly, weekly and daily view. Below it, Latest Tests shows active and recently ended tests as cards with three headline KPIs: a two-minute morning scan.",
    image: home,
    alt: "Test Hub home with the test calendar and the Latest Tests cards",
  },
  {
    title: "One test, one view",
    lead: "Everything needed for a go/no-go decision in a single modal.",
    detail:
      "Headline tiles with deltas vs. control, retention and LTV curves, a daily chart that repaints when you click any KPI row, and a full KPI table. “See more details” deep-links to the right Looker dashboards for that test and game, and a copy icon shares the exact view.",
    image: abTest,
    alt: "A/B test detail with performance tiles, retention and LTV charts, daily installs and KPI table",
  },
  {
    title: "Live games and flexible rollouts (v1.5)",
    lead: "From 50/50 splits to real release schedules.",
    detail:
      "Live games roll out gradually (10%, 25%, 50%). The version comparison now shows the target split, actual adoption day by day, and which days are balanced enough to trust, with merged versions on the control side.",
    image: rollout,
    alt: "Version comparison with rollout target, actual adoption and balanced periods",
  },
];

const testTypes = [
  ["Product Test", "A single version in a controlled segment: installs, retention, LTV."],
  ["Version Comparison", "New vs. previous version, with main / tested / difference columns."],
  ["Technical Test", "Same structure as a version comparison, for technical releases."],
  ["A/B Test", "Groups vs. control inside the same version, with eligible users and LTV."],
];

const interactions = [
  ["Click a KPI, the chart follows", "Clicking any row in the KPI table repaints the daily chart for that metric, so exploring a test never means leaving the view."],
  ["Unbalanced days are shaded, not hidden", "Days without enough balanced installs stay on the calendar with a shaded state, so GMs see what is running and know which data to trust."],
  ["Share the exact view", "A copy icon shares the test exactly as you see it, replacing the 2–10 dashboards people used to send around each day."],
  ["Deep links, already filtered", "“See more details” opens the right Looker dashboards pre-filtered for that test and game: no setup, no searching."],
];

export function TestHubDesign() {
  return (
    <div className="space-y-16">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
          Key Workflows
        </h2>
        <p className="text-gray-600 leading-relaxed">
          I designed Test Hub around the questions Game Managers ask every day,
          not around the data model. Each screen answers one of them: what is
          running, how is it doing, and should we ship.
        </p>
      </div>

      {/* Interactive recreation */}
      <div className="max-w-5xl mx-auto px-8 space-y-6">
        <div className="flex items-start gap-5">
          <div
            className="w-1 h-20 rounded-full flex-shrink-0 mt-1"
            style={{ background: `linear-gradient(to bottom, ${ACCENT}, ${ACCENT}33)` }}
          />
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider mb-1" style={{ color: ACCENT }}>
              Try it
            </p>
            <h3 className="text-2xl font-light text-gray-900 mb-2">The calendar and test view, in code</h3>
            <p className="text-gray-600 leading-relaxed text-[15px] mb-1.5">
              A working recreation of the core flow, so you can feel the interactions instead of reading about them.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Open a test, click a KPI and watch the chart follow, filter by test type, copy a link to the view,
              and switch between the live, loading, empty and error states I designed. Built in React with
              Claude Code; games and numbers are fictional.
            </p>
          </div>
        </div>
        <TestHubPlayground />
      </div>

      {workflows.map((w, i) => (
        <div key={w.title} className="space-y-5 max-w-5xl mx-auto px-8">
          <div className="flex items-start gap-5">
            <div
              className="w-1 h-20 rounded-full flex-shrink-0 mt-1"
              style={{ background: `linear-gradient(to bottom, ${ACCENT}, ${ACCENT}33)` }}
            />
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: ACCENT }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-light text-gray-900 mb-2">{w.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-1.5">{w.lead}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{w.detail}</p>
            </div>
          </div>
          <Screenshot src={w.image} alt={w.alt} />
        </div>
      ))}

      {/* Four test types */}
      <div className="max-w-5xl mx-auto px-8 space-y-8 pt-8">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
            Four Test Types, One Pattern
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Every test type gets its own KPI set, but the layout never changes:
            the same headline tiles, charts and KPI table are reused as one
            component system. Once a GM learns one test, they can read all of
            them, and a new test type is a new KPI set, not a new screen.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testTypes.map(([title, text]) => (
            <div
              key={title}
              className="border-l-4 p-8"
              style={{ backgroundColor: `${ACCENT}0d`, borderColor: ACCENT }}
            >
              <h4 className="text-2xl font-light text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interaction details */}
      <div className="max-w-5xl mx-auto px-8 space-y-8 pt-8">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
            Interaction Details
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Small behaviors that make the tool feel fast and trustworthy. The
            first three are live in the recreation above.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interactions.map(([title, text]) => (
            <div key={title} className="bg-white border border-gray-100 rounded-lg p-8">
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: ACCENT }}>
                Interaction
              </p>
              <h4 className="font-medium text-gray-900 mb-3">{title}</h4>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key decisions */}
      <div className="max-w-5xl mx-auto px-8 space-y-8 pt-8">
        <h2 className="text-3xl font-light tracking-tight text-gray-900">
          Key Decisions
        </h2>
        <div className="space-y-6">
          {[
            ["Weekly by default", "Tests usually span several weeks, so after the V0 feedback session the calendar opens on the weekly view, with daily and monthly one click away."],
            ["Show unbalanced tests, don’t hide them", "Early on, tests with unbalanced installs simply disappeared from the calendar. I pushed to keep them visible and shade the unbalanced days instead, so GMs always see what is running."],
            ["Link to Looker instead of rebuilding it", "Deep analysis already lives in Looker. Test Hub opens the right dashboards, already filtered for that test and game, so we could ship fast without duplicating the Analytics team’s work."],
            ["Scope as a design tool", "Creative and CPI data were requested, but they stayed out of the MVP so V0 could launch on time. They are on the roadmap, not in the way."],
          ].map(([title, text]) => (
            <div key={title} className="bg-white border border-gray-100 rounded-lg p-8">
              <h4 className="font-medium text-gray-900 mb-3">{title}</h4>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
