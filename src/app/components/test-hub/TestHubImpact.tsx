import React from "react";

const ACCENT = "#3f8f8a";

const headline = [
  { value: "4 months", label: "from kickoff to launch" },
  { value: "3×", label: "faster than the ~1-year average for internal tools at Madbox" },
  { value: "2–10 → 1", label: "dashboards shared per test each day, replaced by one link" },
  { value: "1 day → 0", label: "wait for a new test to appear: now it shows up in real time" },
];

const usage = [
  { value: "2 clicks", label: "to see every test that was live on any given day" },
  { value: "2 min", label: "morning scan of all active tests, 3 KPIs each" },
  { value: "4", label: "test types covered by one consistent layout" },
  { value: "45 days", label: "of ended tests kept one click away" },
];

const next = [
  { value: "2 h", label: "target from test live to release or rollback decision (v1.5)" },
  { value: "10 / 25 / 50%", label: "phased rollouts supported for live games" },
  { value: "1 click", label: "to Bayesian A/B results, instead of manual lookup" },
  { value: "1", label: "source of truth for test configuration and release schedule" },
];

const learnings = [
  {
    title: "Trust Before Features",
    text: "We delayed V0 by 1 week because some numbers didn’t match Looker yet. Wrong data is what killed the previous dashboard.",
  },
  {
    title: "A Tool Is Only as Good as Its Inputs",
    text: "Most post-launch issues came from the spreadsheet feeding Test Hub. I wrote a Team Playbook to prevent pipeline outages and broken data.",
  },
  {
    title: "Scope Is a Design Decision",
    text: "Keeping creative data out of the MVP is what made a 4-month launch possible.",
  },
];

function StatGrid({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((s) => (
        <div key={s.label} className="bg-white border border-gray-100 rounded-lg p-6 space-y-3">
          <p className="text-3xl font-light tracking-tight" style={{ color: ACCENT }}>
            {s.value}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function TestHubImpact() {
  return (
    <div className="space-y-16">
      {/* Results */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Results
        </h2>
        <StatGrid items={headline} />
      </div>

      {/* Day-to-day */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Day-to-Day Impact
        </h2>
        <StatGrid items={usage} />
      </div>

      {/* v1.5 */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Next: Live Games (v1.5)
        </h2>
        <StatGrid items={next} />
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
        <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
          <div className="absolute top-6 left-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
            "
          </div>
          <div className="relative z-10 space-y-2">
            <p className="text-xs uppercase tracking-wider text-gray-400 text-center">
              Game Manager · Main Stakeholder
            </p>
            <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center">
              Test Hub was the fastest project ever built at Madbox: four
              months, when the average is about a year. And it&apos;s really
              well built, scalable, with an incredible UX.
            </p>
          </div>
          <div className="absolute bottom-6 right-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
            "
          </div>
        </div>
      </div>
    </div>
  );
}
