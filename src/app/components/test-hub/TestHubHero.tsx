import React from "react";
import { Link } from "react-router";

export function TestHubHero() {
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

        <div className="space-y-2">
          <h1 className="text-6xl font-light tracking-tight text-gray-900">
            Test Hub
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Madbox&apos;s internal platform for game tests: one place where Game
          Managers see what&apos;s live, how it&apos;s performing and whether
          to ship, without opening Looker or asking the Analytics team.
        </p>
      </div>
    </section>
  );
}
