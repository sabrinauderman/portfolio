import React from "react";

const ACCENT = "#3f8f8a";

const personas = [
  {
    icon: "🎮",
    title: "Game Managers",
    text: "The primary users. They run several tests at once and have to decide what ships. Every routine question meant Looker expertise or pinging the Analytics team.",
    pains: [
      "2–10 dashboards per test, every day",
      "No single view of what’s live",
      "Go/no-go on incomplete data",
    ],
  },
  {
    icon: "🎨",
    title: "Game Designers",
    text: "Need to see how product tests and new versions affect their game, without learning Looker filters or waiting for someone to build a dashboard.",
    pains: [
      "Depend on others for numbers",
      "Hard to compare versions",
      "Context lost after each test",
    ],
  },
  {
    icon: "📊",
    title: "Analytics Team",
    text: "Spent their time rebuilding the same dashboards and answering the same questions for every test, instead of doing real analysis.",
    pains: [
      "New test = new dashboards",
      "No reusable KPI structure",
      "Constant ad-hoc requests",
    ],
  },
];

const insights = [
  {
    title: "Trust is the product",
    text: "The old internal dashboard died because its numbers couldn’t be trusted. Teams went back to Looker and Slack, even for basic questions. Whatever we built had to match Looker exactly.",
  },
  {
    title: "The calendar is the mental model",
    text: "The questions GMs ask are about time: “What was live on March 12?”, “What changed last week?”. A calendar answers them in two clicks.",
  },
  {
    title: "Test knowledge evaporates",
    text: "Decisions got made, but the context behind them disappeared into Slack threads and spreadsheets. There was no record that grew over time.",
  },
  {
    title: "Quick answers, not deep analysis",
    text: "GMs need health checks and go/no-go signals in minutes. Deep statistics stay in Looker, so Test Hub links out instead of rebuilding it.",
  },
];

export function TestHubResearch() {
  return (
    <div className="space-y-32">
      {/* Challenge */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light" style={{ color: ACCENT }}>
          The Challenge
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Madbox runs tests constantly: product tests, version comparisons,
            technical tests and A/B tests across several games. Each one ends
            in the same question: should we ship?
          </p>
          <p>We found the following challenges:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The existing internal dashboard had lost the team&apos;s trust
              because of data reliability issues, so people stopped using it
            </li>
            <li>
              Game Managers depended on the Analytics team or Looker for every
              routine question about a running test
            </li>
            <li>
              Each test generated 2 to 10 dashboards shared per day, with no
              single place to see everything
            </li>
            <li>
              Every new test started from scratch: new dashboards, no shared
              KPIs, no baseline
            </li>
            <li>
              Go/no-go decisions happened on incomplete information, or were
              delayed until someone assembled the data
            </li>
          </ul>
        </div>
      </section>

      {/* Discovery */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light tracking-tight text-gray-900">
          Discovery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["💬", "Stakeholder interviews", "Sessions with Game Managers to map the questions they ask every day and how long it takes to answer them."],
            ["🧪", "Feedback on V0", "Walked GMs through the first version before launch. The calendar was validated, and their input changed the default view and the Looker links."],
            ["🔍", "Data validation", "Weeks of cross-checking every number against Looker with the Analytics and Data Engineering teams before going live."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-lg p-6 space-y-3"
            >
              <span className="text-2xl">{icon}</span>
              <h3 className="text-lg font-medium text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personas */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          User Personas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-gray-100 rounded-lg p-6 space-y-4"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${ACCENT}1a` }}
              >
                <span className="text-2xl">{p.icon}</span>
              </div>
              <h3 className="text-xl font-light text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                  Pain Points
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {p.pains.map((pain) => (
                    <li key={pain}>• {pain}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Key Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((i) => (
            <div
              key={i.title}
              className="rounded-lg p-6 border"
              style={{ backgroundColor: `${ACCENT}0d`, borderColor: `${ACCENT}33` }}
            >
              <h4 className="font-medium text-gray-900 mb-3">{i.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
