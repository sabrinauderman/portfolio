import React from "react";
import { Screenshot } from "./Screenshot";
import settings from "@/assets/remote-settings/settings.jpg";

const ACCENT = "#5b7fa6";

const tiers = [
  {
    level: "Low risk",
    who: "Claude",
    color: "bg-emerald-800 text-white",
    example: "Text & localization only, no gameplay module, audience under 15%.",
    outcome: "Claude approves it. No human bottleneck for safe changes.",
  },
  {
    level: "Mid risk",
    who: "Peer",
    color: "bg-orange-500 text-white",
    example: "Live baseline, but no gameplay-facing module touched.",
    outcome: "A designer or PM sign-off is enough.",
  },
  {
    level: "High risk",
    who: "QA",
    color: "bg-red-50 text-red-700 border border-red-200",
    example: "Gameplay module on a live baseline, or any economy / monetization change.",
    outcome: "Goes to the QA pool. Prod stays locked until the verdict.",
  },
];

export function RemoteSettingsAI() {
  return (
    <div className="space-y-24">
      {/* AI in the product */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light tracking-tight text-gray-900">
          AI Inside the Flow
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Discovery showed that sending every change to QA would never stick,
            but sending none was how broken configs reached players. So the
            question became: <strong>who needs to look at this change?</strong>
          </p>
          <p>
            When someone sends a change, Claude reads what changed (modules,
            baselines, audience size) and classifies it against a{" "}
            <strong>risk ruleset</strong>. The first matching rule decides who
            reviews it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.level}
              className="bg-white border border-gray-100 rounded-lg p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${t.color}`}
                >
                  {t.level}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  Reviewed by {t.who}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.example}
              </p>
              <p className="text-sm text-gray-900 leading-relaxed pt-4 border-t border-gray-100">
                {t.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ruleset */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-light text-gray-900">
            A ruleset the team owns
          </h3>
          <p className="text-gray-600 leading-relaxed">
            The rules are written in plain language and live in the game
            settings: nothing is hardcoded. Each team can add cases as they
            come up, reorder them, or switch them off. Claude does the
            classifying, but people decide the policy, and every decision shows
            the rule that triggered it.
          </p>
        </div>
        <Screenshot src={settings} alt="Risk ruleset settings with Low, Mid and High rules" />
      </section>

      {/* AI in the process */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light tracking-tight text-gray-900">
          AI in My Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="rounded-lg p-6 border"
            style={{ backgroundColor: `${ACCENT}0d`, borderColor: `${ACCENT}33` }}
          >
            <h4 className="font-medium text-gray-900 mb-3">
              Synthesizing discovery
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Claude helped me pull scattered feedback from Slack and Notion
              into one document, grouped by theme and status, which became the
              base for the problem definition.
            </p>
          </div>
          <div
            className="rounded-lg p-6 border"
            style={{ backgroundColor: `${ACCENT}0d`, borderColor: `${ACCENT}33` }}
          >
            <h4 className="font-medium text-gray-900 mb-3">
              Prototyping in code
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              I built the interactive prototype with Claude, iterating on real
              states (roles, risk tiers, QA verdicts) much faster than with
              static frames.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
