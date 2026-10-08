import React from "react";

export function TinyRushProjectOverview() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Role
            </h3>
            <p className="text-gray-900">
              Game & UX/UI Designer (solo), directing AI-assisted development
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Timeline
            </h3>
            <p className="text-gray-900">Prototype sprint</p>
            <p className="text-sm text-gray-500">October 2026 · MVP + one iteration</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Platform
            </h3>
            <p className="text-gray-900">Mobile web (portrait) and desktop web (landscape)</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                Claude Code
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Phaser 3
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                Vite
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
