import React from "react";
import { Link } from "react-router";

export function RemoteSettingsHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="space-y-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>←</span>
          <span>Back to Projects</span>
        </Link>

        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-6xl font-light tracking-tight text-gray-900">
            Remote Settings
          </h1>
          <span className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            In progress · Not shipped yet
          </span>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          A redesign of the internal tool Madbox uses to change live game
          configurations without shipping a new build, bringing QA into the
          flow and using AI to decide how much review each change needs before
          it reaches production.
        </p>
      </div>
    </section>
  );
}
