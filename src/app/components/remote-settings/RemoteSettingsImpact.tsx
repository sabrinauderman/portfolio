import React from "react";

const ACCENT = "#5b7fa6";

const success = [
  {
    icon: "🛡️",
    title: "Safe by Default",
    text: "No configuration reaches live players without the level of review its risk requires. Production stays locked until QA gives a verdict.",
    benefits: ["Broken configs caught before save", "No untested pushes", "Full audit trail"],
  },
  {
    icon: "⚡",
    title: "Review Where It Matters",
    text: "Claude triages every change, so low-risk edits flow through and QA time goes to the changes that can actually break the game.",
    benefits: ["Less waiting for safe changes", "QA focused on high risk", "Rules owned by the team"],
  },
  {
    icon: "🧪",
    title: "A/B Tests You Can Trust",
    text: "Tests stay in sync with their baselines, flag when they drift out of date, and winners reach production without manual rework.",
    benefits: ["Out-of-date detection", "Faster setup and rollout", "Reliable results"],
  },
];

const stats = [
  { value: "4", label: "war rooms in 2026 traced back to remote settings pushes" },
  { value: "12,785", label: "players stuck on the previous season for a month" },
  { value: "94% → 41%", label: "drop in race starts in one evening after one broken push" },
  { value: "~10%", label: "of Android players unable to load the game for an hour" },
];

const incidents = [
  {
    title: "A deleted modifier broke a live event",
    text: "A push removed one entry from a config list and an event screen stopped loading during a peak weekend. 7–14k players affected, a war room late at night and a compensation plan the next day. The QA gate would have blocked it.",
  },
  {
    title: "An A/B group silently served old content",
    text: "A control group kept its own copy of the content and never received the new season. Up to 12,785 players were locked out for a month, fixable only with a new build. Out-of-date detection would have flagged it before launch.",
  },
  {
    title: "A content push blocked the game from loading",
    text: "About 10% of Android players couldn’t load the game for an hour. The postmortem asked for a mandatory QA step on remote content pushes: exactly what the QA gate does.",
  },
  {
    title: "New players dropped out mid-tutorial",
    text: "After a push, first-session engagement worsened and dropout spiked at one tutorial step, costing two days of investigation. A targeted QA sign-off on new-player flows would have caught it.",
  },
];

const learnings = [
  {
    title: "A Gate With a Skip Button Isn\u2019t a Gate",
    text: "Earlier validation had a skip option, and everyone used it. We chose to block saving entirely: noisier at first, but better than silent failures reaching players.",
  },
  {
    title: "Safety Can’t Slow the Company Down",
    text: "A gate on every change would have recreated the “Tested” flag nobody used. The real design problem was deciding how much review each change needs, not adding more review.",
  },
  {
    title: "Incidents Make the Case",
    text: "Abstract pain points didn’t move priorities. Tracing real war rooms and postmortems back to specific gaps in the tool turned a redesign into a business case.",
  },
  {
    title: "AI Classifies, People Decide",
    text: "Claude is good at reading a change and matching it to a rule. Keeping the ruleset in plain language, editable by the team, is what makes that automation trustworthy.",
  },
];

const quotes = [
  {
    who: "Game Designer",
    text: "Without clear context, it’s difficult to confidently know which revisions should be used, which makes baseline creation risky and can also make prod pushes risky.",
  },
  {
    who: "A/B Test Postmortem",
    text: "Not enough time or resources were dedicated to testing the AB on Prod.",
  },
  {
    who: "Team Member",
    text: "Could it be that I changed the remote settings while the event was live?",
  },
  {
    who: "Developer",
    text: "It works, I pushed it, if I broke it for everyone else, I’m sorry, we can revert and figure out.",
  },
];

export function RemoteSettingsImpact() {
  return (
    <div className="space-y-16">
      {/* Definition of Success */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Definition of Success
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Remote Settings is still in progress and hasn&apos;t shipped, so
          there are no production results yet. The redesign aims to make
          changing a live game safe without making it slow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {success.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-100 rounded-lg p-8 space-y-4"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${ACCENT}1a` }}
              >
                <span className="text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-xl font-light text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
              <div className="pt-4 border-t border-gray-100">
                <p
                  className="text-xs uppercase tracking-wider mb-2"
                  style={{ color: ACCENT }}
                >
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

      {/* Why It Matters */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Why It Matters
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          To build the case for the project, I traced real incidents from Slack
          threads and war room postmortems back to gaps in the tool. The
          pattern was always the same: something reached production without
          being caught.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-100 rounded-lg p-6 space-y-3"
            >
              <p
                className="text-3xl font-light tracking-tight"
                style={{ color: ACCENT }}
              >
                {s.value}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {incidents.map((i) => (
            <div
              key={i.title}
              className="border-l-4 p-8"
              style={{ backgroundColor: `${ACCENT}0d`, borderColor: ACCENT }}
            >
              <h4 className="text-2xl font-light text-gray-900 mb-2">
                {i.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{i.text}</p>
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
            <div
              key={l.title}
              className="bg-white border border-gray-100 rounded-lg p-8"
            >
              <h4 className="font-medium text-gray-900 mb-3">{l.title}</h4>
              <p className="text-gray-600 leading-relaxed">{l.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Voices from the team */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Voices from the Team
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          What people said about the current tool during discovery, in Slack
          threads and postmortems.
        </p>
        <div className="space-y-6">
          {quotes.map((q) => (
            <div
              key={q.text}
              className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative"
            >
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
