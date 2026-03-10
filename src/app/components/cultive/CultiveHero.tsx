import { Link } from "react-router";
import React from "react";

export function CultiveHero() {
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
            Cultive
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Cultive is an app in which you can check cultural activities located
          in your neighborhood, easily accessed on foot. This way, you learn
          more about the place you live and take care of your own well-being.
        </p>
      </div>
    </section>
  );
}
