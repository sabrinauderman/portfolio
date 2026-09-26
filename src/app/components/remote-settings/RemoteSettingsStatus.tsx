import React from "react";

const ACCENT = "#5b7fa6";

export function RemoteSettingsStatus() {
  return (
    <div className="space-y-16">
      <div>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <h2 className="text-3xl font-light tracking-tight text-gray-900">
            Where It Stands
          </h2>
          <span className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            Not shipped yet
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          This project is still in progress and hasn&apos;t shipped. The
          prototype defines the target experience; there are no production
          results to show yet. Below is what success should look like once it
          goes live.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          ["🛡️", "Safer pushes", "No change reaches live players without the level of review its risk requires."],
          ["⚡", "Less waiting", "Low-risk changes skip the queue, so QA time goes to the changes that really need it."],
          ["🧪", "Easier A/B tests", "Setting up a test and promoting the winner stop being multi-hour, multi-person tasks."],
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
            <h3 className="text-xl font-light text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 space-y-4">
        <h3 className="text-xl font-light text-gray-900">Next steps</h3>
        <ul className="text-gray-600 space-y-2 list-disc pl-6">
          <li>Validate the prototype with designers, developers and QA</li>
          <li>Tune the risk ruleset with real changes before trusting auto-approval</li>
          <li>Roll out game by game and measure incidents and review time</li>
        </ul>
      </div>
    </div>
  );
}
