import React from "react";
import { ACCENT } from "./shared";

const highlights = [
  { value: "10 s", label: "Target to understand the rules, with no tutorial" },
  { value: "2 taps", label: "From the menu to a rematch: one big button on each screen, nothing in between" },
  { value: "5 sizes", label: "Screens checked, from a 375 px phone to 1080p; portrait and landscape get their own layouts" },
  { value: "3 issues", label: "Found playing on a real phone that the desktop never showed" },
];

export function TinyRushHighlights() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-wider mb-8" style={{ color: ACCENT }}>
        At a glance
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {highlights.map((h) => (
          <div key={h.value} className="space-y-2">
            <p className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
              {h.value}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{h.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
