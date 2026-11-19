import React from "react";

const ACCENT = "#d4834f";

const changes = [
  {
    title: "The riskiest step is gone",
    text: "QA used to set up every event attribute as a filter by hand, and most errors came from one missed attribute. The tool now sets the filters up automatically.",
  },
  {
    title: "Checking events in one place",
    text: "Verifying events used to mean jumping to Looker. That check now lives inside the tool, next to the tracking update it belongs to.",
  },
  {
    title: "One source of truth",
    text: "Every event, description and tracking update lives in one repository that Analytics, Game Developers and QA all read from, instead of scattered docs and messages.",
  },
];

const quotes = [
  {
    team: "QA Team",
    text: "The new tracking tool made the DQA process much smoother. What previously took around a full day can now be completed in half a day or less.",
  },
  {
    team: "Game Developers",
    text: "By automating the most conflict-prone step in the app, we managed to reduce human error and make the process much safer and more efficient.",
  },
  {
    team: "Analytics Team",
    text: "Having everything centralized in one place, with clearer descriptions and tracking updates, makes the workflow much easier to follow.",
  },
  {
    team: "Analytics Team",
    text: "Merging the step of checking events in Looker into the tool simplified the workflow — now everything can be done in the same place.",
  },
];

const learnings = [
  [
    "Design for the step where errors happen",
    "Listening to QA showed that one manual step, setting up attributes as filters, caused most mistakes. Automating that single step did more than any amount of interface polish.",
  ],
  [
    "Three teams, one flow",
    "Analytics, Game Developers and QA each touch a tracking update at a different moment. Regular check-ins with all three kept the tool from solving one team's problem by creating another's.",
  ],
  [
    "Ship in phases",
    "Phase 1 focused on QA, where the pain was sharpest. Delivering there first built the trust and momentum the next phases needed.",
  ],
];

export function TrackingToolImpact() {
  return (
    <div className="space-y-16">
      {/* What changed */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
          What Changed
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          The goal was not a prettier tracking spreadsheet. It was removing the
          manual steps where tracking broke, so data could be trusted across
          every game.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {changes.map((c) => (
            <div
              key={c.title}
              className="border-l-4 p-8"
              style={{ backgroundColor: `${ACCENT}0d`, borderColor: ACCENT }}
            >
              <h4 className="text-xl font-light text-gray-900 mb-3">{c.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{c.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User feedback */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
          In Their Words
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          After the rollout, people across QA, Game Development and Analytics
          shared how their workflow changed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="bg-[#f5f6f6] rounded-2xl p-8 shadow-sm relative">
              <div className="absolute top-4 left-5 text-5xl text-[#7a9b7c] opacity-20 font-serif">
                "
              </div>
              <div className="relative z-10 space-y-3 pt-4">
                <p className="text-lg italic text-gray-800 font-light leading-relaxed">
                  {q.text}
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {q.team}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learnings */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Key Learnings
        </h2>
        <div className="space-y-6">
          {learnings.map(([title, text]) => (
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
