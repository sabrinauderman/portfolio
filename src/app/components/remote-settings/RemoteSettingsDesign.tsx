import React from "react";
import { Screenshot } from "./Screenshot";
import { RemoteSettingsAI } from "./RemoteSettingsAI";
import baselines from "@/assets/remote-settings/baselines.jpg";
import baselineDetail from "@/assets/remote-settings/baseline-detail.jpg";
import qa from "@/assets/remote-settings/qa.jpg";
import bulkEdit from "@/assets/remote-settings/bulk-edit.jpg";
import abTests from "@/assets/remote-settings/ab-tests.jpg";
import modules from "@/assets/remote-settings/modules.jpg";
import validationGate from "@/assets/remote-settings/validation-gate.jpg";

const ACCENT = "#5b7fa6";

const workflows = [
  {
    title: "Baselines at a glance",
    lead: "Every baseline group shows its state in one row.",
    detail:
      "Platform, environment (Dev, Prod, Live), QA status and running A/B tests sit next to each version range, so nobody has to remember which group is live or what is waiting for QA.",
    image: baselines,
    alt: "Baselines Groups list with platform, environment, QA and A/B test status",
  },
  {
    title: "Production is locked until QA says yes",
    lead: "Changes are tested on an OTA baseline, never on live.",
    detail:
      "When a change is waiting for QA, the baseline says so at the top, lists every baseline receiving the same push, and keeps “Send to prod” disabled until a verdict is given.",
    image: baselineDetail,
    alt: "Baseline detail page with a Waiting for QA banner and Send to prod disabled",
  },
  {
    title: "One QA pool for everything",
    lead: "Config pushes and A/B variants land in the same queue.",
    detail:
      "Each request shows what changed (with diffs), which modules are also impacted, what to test, the risk level and who reviews it. QA moves it from New to In testing to Validated or Rejected.",
    image: qa,
    alt: "QA queue with config push requests, diffs, risk level and verdict actions",
  },
  {
    title: "Bulk Edit",
    lead: "One change, applied to every baseline that needs it.",
    detail:
      "A four-step flow (select changes, matching rules, select baselines, confirm) replaces editing the same module by hand in several baselines, one of the biggest sources of mistakes.",
    image: bulkEdit,
    alt: "Bulk Edit wizard with four steps",
  },
  {
    title: "A/B tests that stay in sync",
    lead: "Tests flag when they drift from their baseline.",
    detail:
      "Each test shows its status, baselines, modules and start date, plus an “Out of date” warning when the baseline it runs on has changed since launch.",
    image: abTests,
    alt: "A/B Tests list with status, baselines, modules and out-of-date warnings",
  },
  {
    title: "Modules and revisions",
    lead: "Every module shows its latest revision and who changed it.",
    detail:
      "Revisions carry a short description (“Cooldown 75s”, “Titan speed nerf”) so the history reads like a changelog instead of a list of numbers.",
    image: modules,
    alt: "Modules list with latest revision, date and author",
  },
];

export function RemoteSettingsDesign() {
  return (
    <div className="space-y-16">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
          Key Workflows
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Instead of static mockups, I built a high-fidelity, clickable
          prototype with Claude. It made it possible to review real flows
          (switching roles and risk levels) and discuss behavior, not just
          screens.
        </p>
      </div>

      {/* Two gates */}
      <div className="max-w-5xl mx-auto px-8 space-y-8">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
            Two Gates Before Production
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The core of v5 is a two-gate flow, and AI powers both. The first
            gate catches every problem introduced along the way before a config
            can even be saved; the second decides who needs to review a change
            before it goes live.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="border-l-4 p-8 space-y-3"
            style={{ backgroundColor: `${ACCENT}0d`, borderColor: ACCENT }}
          >
            <p className="text-xs uppercase tracking-wider" style={{ color: ACCENT }}>
              Gate 1 · Before save
            </p>
            <h4 className="text-2xl font-light text-gray-900">Validation</h4>
            <p className="text-gray-600 leading-relaxed">
              An AI-powered check, built on the Events Config Check tool by my
              teammate Fran, scans the whole config on save and surfaces every
              problem introduced during the process: problems, warnings and
              notes, each explained by its impact on players (crashes, wrong
              behavior, progression blockers). Designers fix them by hand or
              with Claude, then re-run the check.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Decision: saving is fully blocked, with no skip button. Past
              versions had one, everybody used it, and the gate became useless.
            </p>
          </div>
          <div
            className="border-l-4 p-8 space-y-3"
            style={{ backgroundColor: `${ACCENT}0d`, borderColor: ACCENT }}
          >
            <p className="text-xs uppercase tracking-wider" style={{ color: ACCENT }}>
              Gate 2 · Before prod
            </p>
            <h4 className="text-2xl font-light text-gray-900">QA risk routing</h4>
            <p className="text-gray-600 leading-relaxed">
              On Send to QA, Claude classifies each change against a risk
              ruleset. Low risk is tested by Claude, mid risk goes to a peer (never
              the author), and high risk goes to the QA queue with the
              designer&apos;s test notes. Every verdict needs a written reason,
              and the baseline only reaches prod once its review is cleared.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Decision: no bypass. Changes that used to skip QA are now tested
              by Claude, and the rules live in config so the team can add cases
              without engineering.
            </p>
          </div>
        </div>
        <Screenshot
          src={validationGate}
          alt="Save modal blocked by the validation gate, listing problems, warnings and notes"
        />
      </div>

      {workflows.map((w, i) => (
        <div key={w.title} className="space-y-5 max-w-5xl mx-auto px-8">
          <div className="flex items-start gap-5">
            <div
              className="w-1 h-20 rounded-full flex-shrink-0 mt-1"
              style={{
                background: `linear-gradient(to bottom, ${ACCENT}, ${ACCENT}33)`,
              }}
            />
            <div className="flex-1">
              <p
                className="text-xs uppercase tracking-wider mb-1"
                style={{ color: ACCENT }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-light text-gray-900 mb-2">
                {w.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-1.5">
                {w.lead}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {w.detail}
              </p>
            </div>
          </div>
          <Screenshot src={w.image} alt={w.alt} />
        </div>
      ))}

      <div className="max-w-5xl mx-auto px-8 pt-16">
        <RemoteSettingsAI />
      </div>
    </div>
  );
}
