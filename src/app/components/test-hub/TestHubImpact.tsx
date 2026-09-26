import React from "react";

const ACCENT = "#3f8f8a";

const success = [
  {
    icon: "🙋",
    title: "Self-Serve Answers",
    text: "Game Managers go to Test Hub first, not to Looker, Slack or the Analytics team, for any routine question about a running test.",
    benefits: ["Less dependency on Analytics", "Answers in minutes", "Analysts free for real analysis"],
  },
  {
    icon: "⚡",
    title: "Faster Go/No-Go",
    text: "Everything needed to decide whether to ship sits in one view, with the right Looker dashboards one click away.",
    benefits: ["One link per test", "Consistent KPIs per test type", "Release decisions in hours"],
  },
  {
    icon: "🗂️",
    title: "Knowledge That Stays",
    text: "Every test lives on the calendar with its dates, filters and context, so “what was live in March, and why did we ship?” has an answer.",
    benefits: ["Shared history of tests", "Context linked to each test", "Easy onboarding"],
  },
];

const stats = [
  { value: "4 months", label: "from kickoff to launch, for an internal tool at Madbox" },
  { value: "2–10 → 1", label: "dashboards shared per test each day, replaced by one link" },
  { value: "4", label: "test types covered with a single, consistent pattern" },
  { value: "Real time", label: "tests appear the moment they are added, instead of the next day" },
];

const learnings = [
  {
    title: "Trust Before Features",
    text: "We postponed the V0 launch by a week because some numbers still didn’t match Looker. Launching on time with wrong data would have repeated exactly what killed the old dashboard.",
  },
  {
    title: "A Tool Is Only as Good as Its Inputs",
    text: "Many issues after launch came from the spreadsheet feeding Test Hub: a missing end date, “iOS” instead of “ios”. I wrote a Team Playbook with the rules and processes that prevent pipeline outages and broken data.",
  },
  {
    title: "Scope Is a Design Decision",
    text: "Saying no to creative data in the MVP is what made a four-month launch possible. The roadmap keeps those requests visible without letting them block the release.",
  },
];

const quotes = [
  {
    who: "Game Manager · Main Stakeholder",
    text: "Test Hub was the fastest project ever built at Madbox: four months, when the average is about a year. And it’s really well built, scalable, with an incredible UX.",
  },
  {
    who: "Game Manager",
    text: "That’s real nice! Right on time for 4.2.",
  },
];

export function TestHubImpact() {
  return (
    <div className="space-y-16">
      {/* Definition of Success */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Definition of Success
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Test Hub is live and used by the game teams. Success means a Game
          Manager can answer any question about a running test without opening
          a Looker dashboard or pinging the Analytics team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {success.map((s) => (
            <div key={s.title} className="bg-white border border-gray-100 rounded-lg p-8 space-y-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${ACCENT}1a` }}
              >
                <span className="text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-xl font-light text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: ACCENT }}>
                  Benefits
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {s.benefits.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Results
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-lg p-6 space-y-3">
              <p className="text-3xl font-light tracking-tight" style={{ color: ACCENT }}>
                {s.value}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            ["Shipped and adopted", "Launched to the New Games teams and covering all their active tests, with a dedicated channel where users report issues and request improvements."],
            ["Growing into live games", "v1.5 extends Test Hub to live games, starting with Pocket Champs: flexible rollouts, one-click Bayesian A/B results and a single source of truth for test configuration."],
          ].map(([title, text]) => (
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

      {/* Learnings */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Key Learnings
        </h2>
        <div className="space-y-6">
          {learnings.map((l) => (
            <div key={l.title} className="bg-white border border-gray-100 rounded-lg p-8">
              <h4 className="font-medium text-gray-900 mb-3">{l.title}</h4>
              <p className="text-gray-600 leading-relaxed">{l.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Feedback */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          User Feedback
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          What Game Managers said after Test Hub went live.
        </p>
        <div className="space-y-6">
          {quotes.map((q) => (
            <div key={q.text} className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
              <div className="absolute top-6 left-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
                "
              </div>
              <div className="relative z-10 space-y-2">
                <p className="text-xs uppercase tracking-wider text-gray-400 text-center">
                  {q.who}
                </p>
                <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center">
                  {q.text}
                </p>
              </div>
              <div className="absolute bottom-6 right-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
