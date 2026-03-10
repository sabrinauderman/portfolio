import React from "react";

export function TrackingToolResearch() {
  return (
    <div className="space-y-32">
      {/* Problem Statement */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#d4834f]">The Challenge</h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            At Madbox, we have a process called "Tracking Update" where we add
            new events to our games. This involves Analytics Design, Game
            Developer Implementation, and QA testing—requiring extensive
            communication across teams.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              No established process for managing events that were already
              created
            </li>
            <li>
              Recent problems with events and parameters not arriving correctly
              from new implementations and technical refactors
            </li>
            <li>
              The existing QA process is error-prone and time-intensive due to
              manual dashboard setup for each event
            </li>
            <li>
              Decentralized information makes it impossible to efficiently test
              past events
            </li>
            <li>
              The events database can get out of sync and lacks standardization
            </li>
          </ul>
        </div>
      </section>

      {/* User Personas */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          User Personas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* QA Testers */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 space-y-4">
            <div className="w-12 h-12 bg-[#d4834f]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-light text-gray-900">QA Testers</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Need to quickly verify that events and parameters are functioning
              correctly across game versions. Currently spend excessive time
              manually configuring dashboards for each event they want to test.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                Pain Points
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Time-intensive manual setup</li>
                <li>• Can't test historical events</li>
                <li>• Scattered information</li>
              </ul>
            </div>
          </div>

          {/* Game Developers */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 space-y-4">
            <div className="w-12 h-12 bg-[#d4834f]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <h3 className="text-xl font-light text-gray-900">
              Game Developers
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Implement tracking events in games and need clear, standardized
              specifications. Often create separate stories in different
              databases, leading to fragmented information and potential
              implementation errors.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                Pain Points
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Unclear event specifications</li>
                <li>• Multiple sources of truth</li>
                <li>• Manual story creation</li>
              </ul>
            </div>
          </div>

          {/* Analytics Team */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 space-y-4">
            <div className="w-12 h-12 bg-[#d4834f]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-light text-gray-900">Analytics Team</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Design and maintain event tracking architecture across all games.
              Struggle with keeping the events database synchronized and
              ensuring information shared during implementation doesn't get
              lost.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                Pain Points
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Database sync issues</li>
                <li>• Lost implementation details</li>
                <li>• No standardization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Key Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#d4834f]/5 border border-[#d4834f]/20 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-3">
              Decentralized Information
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Event specifications, implementation details, and testing results
              are scattered across multiple tools (Notion, dashboards, separate
              databases), making it impossible to get a complete picture.
            </p>
          </div>
          <div className="bg-[#d4834f]/5 border border-[#d4834f]/20 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-3">
              Manual Redundancies
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Teams spend significant time on repetitive manual work:
              configuring dashboards, updating multiple databases, and
              communicating changes across teams.
            </p>
          </div>
          <div className="bg-[#d4834f]/5 border border-[#d4834f]/20 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-3">
              Reactive, Not Proactive
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Problems with events are only discovered after deployment, when
              parameters fail to arrive or technical refactors break existing
              implementations.
            </p>
          </div>
          <div className="bg-[#d4834f]/5 border border-[#d4834f]/20 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-3">
              No Historical Testing
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              The current process makes it impossible to verify older events,
              creating blind spots and potential technical debt as games evolve.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
