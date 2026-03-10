import React from "react";
import { Link } from "react-router";

export function TrackingToolHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="space-y-6">
        {/* Back to Projects Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>←</span>
          <span>Back to Projects</span>
        </Link>

        <div className="space-y-2">
          <h1 className="text-6xl font-light tracking-tight text-gray-900">
            Tracking Tool
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          An internal platform designed to centralize event tracking management
          at Madbox, streamlining the QA process and reducing manual
          redundancies across Analytics, Game Developers, and QA teams.
        </p>
      </div>
    </section>
  );
}
