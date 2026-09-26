import React from "react";

const ACCENT = "#5b7fa6";

const personas = [
  {
    icon: "🎮",
    title: "Game Designers",
    text: "The main users. They tune balancing, offers, events and A/B tests every week, often on several baselines at once, without a clear rulebook for how configs should be managed.",
    pains: [
      "Baselines named only by version ranges",
      "Same change edited in many places",
      "Hard to tell what is live",
    ],
  },
  {
    icon: "👨‍💻",
    title: "Developers",
    text: "Create modules and connect the game to its configuration. They get pulled in whenever a push breaks something or an A/B test has to be set up or promoted to production.",
    pains: [
      "Wrong configs reaching production",
      "A/B setup takes more than a day",
      "Promoting a winner is manual",
    ],
  },
  {
    icon: "🔍",
    title: "QA",
    text: "Should be the safety net, but was outside the tool. A “Tested” flag existed on baselines, yet it was never adopted: constant updates made it outdated right away.",
    pains: [
      "No queue of what needs testing",
      "Changes reach prod untested",
      "No link between test and push",
    ],
  },
];

const insights = [
  {
    title: "The feature existed, the process didn\u2019t",
    text: "v4 already had a QA tab and a \u201cTested\u201d status. Nothing enforced them, so anyone could push to prod whatever the status. The gap wasn\u2019t UI, it was process.",
  },
  {
    title: "Avoid checkbox theater",
    text: "Engineering\u2019s main concern: people would click \u201ctested\u201d just to unblock themselves. Attribution (who tested, when, with a written reason) makes the gate real.",
  },
  {
    title: "Not every change deserves the same review",
    text: "A copy fix and an economy rebalance went through the same path. Forcing manual QA on everything would overload a QA team that was already underwater.",
  },
  {
    title: "Baselines grow until nobody can read them",
    text: "Every train, web build and version added a group, none were archived, and the \u201clive\u201d marker stayed green months after a version went inactive.",
  },
  {
    title: "A/B tests drift from their baselines",
    text: "Tests built for 1\u20133 modules were used for 20+. Designers updated the main config but not the test, or only one of two live versions.",
  },
  {
    title: "False alarms buried real changes",
    text: "Line-by-line diffs flagged reordered rows as changes, burying the edits that mattered and training people to ignore the diff.",
  },
];

export function RemoteSettingsResearch() {
  return (
    <div className="space-y-32">
      {/* Context */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light" style={{ color: ACCENT }}>
          The Challenge
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Remote Settings lets Madbox change a game&apos;s configuration
            (prices, balancing values, feature flags, event parameters)
            without going through a new build and App Store / Google Play
            review. Madbox started in hyper-casual with everything hard-coded;
            as the games grew more complex, the tool became critical to how
            every team ships.
          </p>
          <p>
            Configurations are organized in <strong>baselines</strong> tied to
            app versions, each one pointing to a revision of every{" "}
            <strong>module</strong> (Shop, Ads, Progression, GDPR&hellip;). The
            tool worked, but it had grown feature by feature, and the cost of a
            mistake was a broken live game.
          </p>
        </div>
      </section>

      {/* Discovery process */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light tracking-tight text-gray-900">
          Discovery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["💬", "Conversations", "Walkthroughs with designers and developers to map how the tool is really used day to day."],
            ["🧵", "Feedback mining", "Collected feedback scattered across Slack threads and Notion pages from the last two years into one place, with status: open, fixed or unknown."],
            ["✨", "AI-assisted synthesis", "Used Claude to cluster that feedback into themes and pain points, so I could spend my time on decisions instead of copy-pasting threads."],
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
              style={{
                backgroundColor: `${ACCENT}0d`,
                borderColor: `${ACCENT}33`,
              }}
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
