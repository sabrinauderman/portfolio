import React from "react";

export function TrackingToolProjectOverview() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Role
            </h3>
            <p className="text-gray-900">UX/UI Designer & Project Manager</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Timeline
            </h3>
            <p className="text-gray-900">3 Phases</p>
            <p className="text-sm text-gray-500">2024</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Team
            </h3>
            <p className="text-gray-900">Analytics, Game Developers, QA</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                Figma
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Jira
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                Slack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
