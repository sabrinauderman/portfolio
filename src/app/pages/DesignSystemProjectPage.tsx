import React from "react";
import { Link } from "react-router";

const ACCENT = "#ff6347";

// Madbox Design System tokens, rendered live on this page.
const primary: [string, string][] = [
  ["50", "#fff5f3"], ["100", "#ffe8e3"], ["200", "#ffd5cc"], ["300", "#ffb8a8"], ["400", "#ff8a73"],
  ["500", "#ff6347"], ["600", "#ff4526"], ["700", "#e63312"], ["800", "#c72b0f"], ["900", "#a32610"],
];
const neutral: [string, string][] = [
  ["50", "#fafafa"], ["100", "#f5f5f5"], ["200", "#e5e5e5"], ["300", "#d4d4d4"], ["400", "#a3a3a3"],
  ["500", "#737373"], ["600", "#525252"], ["700", "#404040"], ["800", "#262626"], ["900", "#171717"],
];
const semantic: [string, string][] = [
  ["Success", "#10b981"], ["Error", "#ef4444"], ["Warning", "#f59e0b"], ["Info", "#3b82f6"],
];
const typeScale: [string, number, number][] = [
  ["h1", 32, 600], ["h2", 24, 600], ["h3", 20, 600], ["body", 16, 400], ["label", 14, 500], ["small", 12, 400],
];

const principles = [
  ["Fast", "Token-based, so a theme changes in minutes, not hours."],
  ["Accessible", "WCAG AA color contrast and built-in focus states on every interactive element."],
  ["Minimal", "Three color groups, a clear text scale and an 8px grid: simple to learn and to maintain."],
];

const foundations = [
  ["Color", "Madbox Orange (#ff6347) as primary, a 10-step neutral scale and four semantic colors."],
  ["Type", "System font stack on a 16px root and a rem scale, from 32px headings to 12px captions."],
  ["Space & radius", "An 8px grid (2 to 32) and four radius steps, from 4px to 12px, plus full."],
  ["Coverage", "30+ components across inputs, navigation, layout and feedback, including skeletons, spinners, dialogs and snackbars."],
];

const SYSTEM_FONT =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

function DemoFrame({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
      <div
        className="flex items-center gap-1.5 px-4 py-3 border-b"
        style={{ background: dark ? "#171717" : "#ffffff", borderColor: dark ? "#262626" : "#f3f4f6" }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: dark ? "#404040" : "#e5e7eb" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: dark ? "#404040" : "#e5e7eb" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: dark ? "#404040" : "#e5e7eb" }} />
      </div>
      <div
        className="p-6 md:p-8 overflow-x-auto"
        style={{ background: dark ? "#0a0a0a" : "#fafafa", fontFamily: SYSTEM_FONT }}
      >
        {children}
      </div>
    </div>
  );
}

function SwatchRow({ title, colors }: { title: string; colors: [string, string][] }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <div className="flex gap-2 min-w-max">
        {colors.map(([name, hex]) => (
          <div key={name} className="w-16 md:w-[72px] rounded-md overflow-hidden border border-gray-200 bg-white">
            <div className="h-10" style={{ background: hex }} />
            <div className="px-2 py-1.5">
              <p className="text-[11px] font-medium text-gray-900">
                {name}
                {hex === ACCENT ? " ★" : ""}
              </p>
              <p className="text-[10px] text-gray-500 font-mono">{hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DsButton({
  children,
  variant = "default",
  size = "md",
  disabled = false,
}: {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}) {
  const styles: Record<string, React.CSSProperties> = {
    default: { background: ACCENT, color: "#fff" },
    secondary: { background: "#f5f5f5", color: "#171717" },
    outline: { background: "#fff", color: "#171717", border: "1px solid #e5e5e5" },
    ghost: { background: "transparent", color: "#171717" },
    link: { background: "transparent", color: ACCENT, textDecoration: "underline", textUnderlineOffset: 4 },
    destructive: { background: "#ef4444", color: "#fff" },
  };
  const pad = { sm: "6px 12px", md: "8px 16px", lg: "10px 24px" }[size];
  const font = { sm: 12, md: 14, lg: 16 }[size];
  return (
    <span
      className="inline-flex items-center gap-2 rounded-md font-medium whitespace-nowrap select-none"
      style={{ ...styles[variant], padding: pad, fontSize: font, opacity: disabled ? 0.5 : 1 }}
    >
      {children}
    </span>
  );
}

function Spinner() {
  return (
    <span
      className="inline-block w-3.5 h-3.5 rounded-full border-2 animate-spin"
      style={{ borderColor: "rgba(255,255,255,0.4)", borderTopColor: "#fff" }}
    />
  );
}

function FilterBar() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-lg px-4 py-3 min-w-[480px]">
        <div className="flex items-center gap-2 text-sm">
          <span style={{ color: "#3b82f6" }}>Mini Ants Empire</span>
          <span style={{ color: "#3b82f6" }}>•</span>
          <span className="text-gray-900 rounded px-1.5 py-0.5" style={{ background: "#fff5f3", outline: `1px solid ${ACCENT}55` }}>
            Last 30 days
          </span>
          <span style={{ color: "#3b82f6" }}>•</span>
          <span className="text-gray-900">iOS, Android</span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-gray-900" style={{ background: "#f5f5f5" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill={ACCENT} aria-hidden="true">
            <path d="M3 4h18l-7 9v6l-4 2v-8z" />
          </svg>
          Filters
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] text-white" style={{ background: ACCENT }}>
            3
          </span>
        </span>
      </div>
      <p className="text-xs text-gray-500">Active filters stay inline as chips. Click one to edit it in place.</p>
    </div>
  );
}

function AppShell({ dark = false }: { dark?: boolean }) {
  const c = dark
    ? { side: "#171717", main: "#0a0a0a", bar: "#171717", border: "#262626", text: "#fafafa", muted: "#a3a3a3", tint: "#ff634726", input: "#262626" }
    : { side: "#ffffff", main: "#fafafa", bar: "#ffffff", border: "#e5e5e5", text: "#171717", muted: "#737373", tint: "#ff63471a", input: "#ffffff" };
  return (
    <div className="flex rounded-lg overflow-hidden min-w-[560px]" style={{ border: `1px solid ${c.border}`, background: c.main }}>
      <div className="w-44 flex-shrink-0 flex flex-col" style={{ background: c.side, borderRight: `1px solid ${c.border}` }}>
        <div className="px-4 pt-4 pb-3">
          <p className="text-lg font-bold leading-none tracking-tight">
            <span style={{ color: "#ec4899" }}>MAD</span>
            <span style={{ color: "#f59e0b" }}>BO</span>
            <span style={{ color: ACCENT }}>X</span>
          </p>
          <p className="text-[9px] tracking-[0.2em] mt-1" style={{ color: c.muted }}>DESIGN SYSTEM</p>
        </div>
        <div className="mx-3 mb-3 rounded-md px-2 py-1.5 text-xs" style={{ border: `1px solid ${c.border}`, color: c.muted, background: c.input }}>
          Search
        </div>
        <div className="px-3 space-y-1 text-xs flex-1">
          <p className="px-2 pb-1 text-[10px] tracking-wider" style={{ color: c.muted }}>COMPONENTS</p>
          {["Button", "Card", "Input", "Select"].map((item, i) => (
            <p
              key={item}
              className="px-2 py-1.5 rounded-md font-medium"
              style={i === 0 ? { background: c.tint, color: ACCENT } : { color: c.text }}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="m-3 rounded-md px-2 py-2 text-xs" style={{ background: c.tint, color: c.text }}>
          John Doe
          <span className="block text-[10px]" style={{ color: c.muted }}>Admin</span>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between px-4 py-3" style={{ background: c.bar, borderBottom: `1px solid ${c.border}` }}>
          <p className="text-sm font-semibold" style={{ color: c.text }}>Dashboard</p>
          <span className="text-xs rounded-md px-2 py-1" style={{ border: `1px solid ${c.border}`, color: c.text }}>
            Game: Scroll Adventures ▾
          </span>
        </div>
        <div className="flex gap-5 px-4 text-[11px] tracking-wider" style={{ background: c.bar, borderBottom: `1px solid ${c.border}` }}>
          {["OVERVIEW", "PERFORMANCE", "CREATIVES"].map((t, i) => (
            <span
              key={t}
              className="py-2"
              style={i === 0 ? { color: ACCENT, borderBottom: `2px solid ${ACCENT}` } : { color: c.muted }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="p-4 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md p-3 space-y-2" style={{ background: c.bar, border: `1px solid ${c.border}` }}>
              <div className="h-2 w-12 rounded" style={{ background: c.border }} />
              <div className="h-4 w-16 rounded" style={{ background: i === 0 ? ACCENT : c.border, opacity: i === 0 ? 0.85 : 1 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({
  index,
  title,
  lead,
  detail,
  children,
}: {
  index: number;
  title: string;
  lead: string;
  detail: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-5 max-w-5xl mx-auto px-8">
      <div className="flex items-start gap-5">
        <div
          className="w-1 h-20 rounded-full flex-shrink-0 mt-1"
          style={{ background: `linear-gradient(to bottom, ${ACCENT}, ${ACCENT}33)` }}
        />
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: ACCENT }}>
            {String(index).padStart(2, "0")}
          </p>
          <h3 className="text-2xl font-light text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-[15px] mb-1.5">{lead}</p>
          <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

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
              iteration. Everything below is rendered live from its tokens.
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
          {/* Principles */}
          <div className="max-w-5xl mx-auto px-8 space-y-8">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">Principles</h2>
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
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Foundations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {foundations.map(([title, text]) => (
                <div key={title} className="bg-white border border-gray-100 rounded-lg p-8">
                  <h4 className="font-medium text-gray-900 mb-3">{title}</h4>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <Section
            index={1}
            title="Tokens first"
            lead="Every color, size and radius is a named token."
            detail="Components never hardcode values. That is what makes dark mode and future rebrands a token change instead of a redesign."
          >
            <DemoFrame>
              <div className="space-y-6">
                <SwatchRow title="Primary — Madbox Orange" colors={primary} />
                <SwatchRow title="Neutral" colors={neutral} />
                <SwatchRow title="Semantic" colors={semantic} />
              </div>
            </DemoFrame>
          </Section>

          <Section
            index={2}
            title="A type scale people can remember"
            lead="Six steps, one font stack."
            detail="A 16px root and a rem scale keep hierarchy predictable across dense dashboards, from page titles to table captions."
          >
            <DemoFrame>
              <div className="space-y-3">
                {typeScale.map(([name, size, weight]) => (
                  <div key={name} className="flex items-baseline gap-6">
                    <span className="w-28 flex-shrink-0 text-[11px] font-mono text-gray-500">
                      {name} · {size}px · {weight}
                    </span>
                    <span className="text-gray-900 truncate" style={{ fontSize: size, fontWeight: weight }}>
                      The quick brown fox jumps over the lazy dog
                    </span>
                  </div>
                ))}
              </div>
            </DemoFrame>
          </Section>

          <Section
            index={3}
            title="Components with every state"
            lead="Variants for priority, states for real use."
            detail="Buttons come in six variants, three sizes, with icons, disabled and loading states, so engineers never have to invent the missing one."
          >
            <DemoFrame>
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-gray-500">Variants</p>
                  <div className="flex flex-wrap gap-3">
                    <DsButton>Default</DsButton>
                    <DsButton variant="secondary">Secondary</DsButton>
                    <DsButton variant="outline">Outline</DsButton>
                    <DsButton variant="ghost">Ghost</DsButton>
                    <DsButton variant="link">Link</DsButton>
                    <DsButton variant="destructive">Destructive</DsButton>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-gray-500">Sizes</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <DsButton size="sm">Small</DsButton>
                    <DsButton>Default</DsButton>
                    <DsButton size="lg">Large</DsButton>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-gray-500">States</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <DsButton disabled>Disabled</DsButton>
                    <DsButton variant="outline" disabled>Disabled</DsButton>
                    <DsButton>
                      <Spinner />
                      Loading...
                    </DsButton>
                  </div>
                </div>
              </div>
            </DemoFrame>
          </Section>

          <Section
            index={4}
            title="Madbox patterns, not just components"
            lead="The recurring problems of internal dashboards, solved once."
            detail="The filter bar shows active filters as inline, editable chips, with a Filters button that opens a panel of operators, multi-select lists and toggles. The same pattern works across every dashboard."
          >
            <DemoFrame>
              <FilterBar />
            </DemoFrame>
          </Section>

          <Section
            index={5}
            title="One app shell, two themes"
            lead="The chrome every internal tool sits in, with dark mode built in."
            detail="Collapsible sidebar with the tri-color wordmark, search and navigation, plus a title bar with the game selector and tabs. The active nav item and tab share the same 10% orange tint. Because everything is tokenized, dark mode comes from the system itself, not from a second set of screens."
          >
            <div className="grid grid-cols-1 gap-6">
              <DemoFrame>
                <AppShell />
              </DemoFrame>
              <DemoFrame dark>
                <AppShell dark />
              </DemoFrame>
            </div>
          </Section>
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
