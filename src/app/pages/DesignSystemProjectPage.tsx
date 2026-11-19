import React from "react";
import { Link } from "react-router";
import { Screenshot } from "../components/remote-settings/Screenshot";
import cover from "@/assets/design-system/cover.jpg";
import colors from "@/assets/design-system/colors.jpg";
import buttons from "@/assets/design-system/buttons.jpg";
import filters from "@/assets/design-system/filters.jpg";
import appShell from "@/assets/design-system/app-shell.jpg";
import darkMode from "@/assets/design-system/dark-mode.jpg";

const ACCENT = "#ff6347";

const principles = [
  ["Fast", "Token-based, so a theme changes in minutes, not hours."],
  ["Accessible", "WCAG AA color contrast and built-in focus states on every interactive element."],
  ["Minimal", "Three color groups, a clear text scale and an 8px grid: simple to learn and to maintain."],
];

const foundations = [
  ["Color", "Madbox Orange (#ff6347) as primary, a 10-step neutral scale and four semantic colors: success, error, warning, info."],
  ["Type", "System font stack on a 16px root and rem scale: h1 32, h2 24, h3 20, body 16, label 14, small 12."],
  ["Space & radius", "8px grid (2 to 32) and four radius steps, from 4px to 12px, plus full."],
  ["Coverage", "30+ components across inputs, navigation, layout and feedback, including skeletons, spinners, dialogs and snackbars."],
];

const sections = [
  {
    title: "Tokens first",
    lead: "Every color, size and radius is a named token.",
    detail:
      "Components never hardcode values. That is what makes dark mode and future rebrands a token change instead of a redesign.",
    image: colors,
    alt: "Color tokens: Madbox Orange scale, neutral scale and semantic colors",
  },
  {
    title: "Components with every state",
    lead: "Variants for priority, states for real use.",
    detail:
      "Buttons come in six variants (default, secondary, outline, ghost, link, destructive), three sizes, with icons, disabled and loading states, so engineers never have to invent the missing one.",
    image: buttons,
    alt: "Button component with variants, sizes, icons and states",
  },
  {
    title: "Madbox patterns, not just components",
    lead: "The recurring problems of internal dashboards, solved once.",
    detail:
      "The filter bar shows active filters as inline, editable chips, with a Filters button that opens a panel of operators, multi-select lists and toggles. The same pattern works across every dashboard.",
    image: filters,
    alt: "Madbox filter bar with inline filter chips and a Filters button",
  },
  {
    title: "One app shell",
    lead: "The chrome every internal tool sits in.",
    detail:
      "Collapsible sidebar with the tri-color wordmark, search and navigation, plus a title bar with the game selector and tabs. The active nav item and tab share the same 10% orange tint, and the game selector reuses the Select pattern.",
    image: appShell,
    alt: "Madbox app shell with sidebar, title bar, game selector and tabs",
  },
  {
    title: "Dark mode built in",
    lead: "Same tokens, second theme.",
    detail:
      "Because everything is tokenized, dark mode comes from the system itself, not from a second set of screens.",
    image: darkMode,
    alt: "The Madbox app shell in dark mode",
  },
];

export function DesignSystemProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-lg font-light tracking-tight text-gray-900">
            Sabrina's portfolio
          </Link>
          <Link
            to="/projects"
            className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors"
          >
            Projects
          </Link>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <div className="space-y-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>←</span>
              <span>Back to Projects</span>
            </Link>
            <h1 className="text-6xl font-light tracking-tight text-gray-900">
              Madbox Design System
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              A token-based design system for Madbox&apos;s internal tools and
              dashboards: foundations, 30+ components and Madbox-specific
              patterns, built for consistency, accessibility and speed of
              iteration.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Role</h3>
                <p className="text-gray-900">Product Designer (sole designer)</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Scope</h3>
                <p className="text-gray-900">Tokens, components, patterns, documentation</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Status</h3>
                <p className="text-gray-900">v1.0 documented</p>
                <p className="text-sm text-gray-500">Rollout paused for other priorities</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Figma</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Claude</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
          <div className="max-w-5xl mx-auto px-8">
            <Screenshot src={cover} alt="Madbox Design System documentation home" />
          </div>

          {/* Principles */}
          <div className="max-w-5xl mx-auto px-8 space-y-8">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
                Principles
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Every decision had to be intentional and scale across every
                internal tool: BI, UA Performance, Game Production and Tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {principles.map(([title, text]) => (
                <div
                  key={title}
                  className="border-l-4 p-8"
                  style={{ backgroundColor: `${ACCENT}0d`, borderColor: ACCENT }}
                >
                  <h4 className="text-2xl font-light text-gray-900 mb-2">{title}</h4>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Foundations */}
          <div className="max-w-5xl mx-auto px-8 space-y-8">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">
              Foundations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {foundations.map(([title, text]) => (
                <div key={title} className="bg-white border border-gray-100 rounded-lg p-8">
                  <h4 className="font-medium text-gray-900 mb-3">{title}</h4>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sections */}
          {sections.map((s, i) => (
            <div key={s.title} className="space-y-5 max-w-5xl mx-auto px-8">
              <div className="flex items-start gap-5">
                <div
                  className="w-1 h-20 rounded-full flex-shrink-0 mt-1"
                  style={{ background: `linear-gradient(to bottom, ${ACCENT}, ${ACCENT}33)` }}
                />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: ACCENT }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mb-1.5">{s.lead}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.detail}</p>
                </div>
              </div>
              <Screenshot src={s.image} alt={s.alt} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-16 mt-24">
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            <div className="text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
              >
                <span>↑</span>
                <span>Back to top</span>
              </button>
            </div>
            <div className="text-center text-sm text-gray-400">
              <p>© 2026 Sabrina Uderman</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
