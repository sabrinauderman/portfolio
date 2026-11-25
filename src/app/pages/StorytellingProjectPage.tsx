import React from "react";
import { Link } from "react-router";

import slide1 from "@/assets/storytelling/slide-1.jpg";
import slide2 from "@/assets/storytelling/slide-2.jpg";
import slide3 from "@/assets/storytelling/slide-3.jpg";
import slide4 from "@/assets/storytelling/slide-4.jpg";
import slide5 from "@/assets/storytelling/slide-5.jpg";
import slide6 from "@/assets/storytelling/slide-6.jpg";
import onePager from "@/assets/storytelling/one-pager.jpg";

const ACCENT = "#7a5ba6";
const BASE = import.meta.env.BASE_URL;

// Each slide has one job in the argument; the caption explains the choice behind it.
const slides = [
  {
    image: slide1,
    step: "Hook",
    title: "Lead with the consequence, not the tool",
    text: "Leadership doesn’t care about baselines or modules. They remember war rooms, so the title starts there.",
  },
  {
    image: slide2,
    step: "Cost",
    title: "Four numbers, nothing else",
    text: "From everything in the postmortems, I kept the four that each show a different kind of damage: frequency, duration, engagement and reach.",
  },
  {
    image: slide3,
    step: "Pattern",
    title: "Turn incidents into a pattern",
    text: "Each incident on its own looked like bad luck. Lined up in one table, with what would have caught it, they show the same gap every time.",
  },
  {
    image: slide4,
    step: "Root cause",
    title: "Name the real problem",
    text: "The obvious ask was “add a QA step”. The slide shows why that already failed twice, so the proposal can’t be read as more of the same.",
  },
  {
    image: slide5,
    step: "Proposal",
    title: "One diagram, one decision",
    text: "The whole solution fits a single flow: review in proportion to risk, with no bypass. The three principles underneath answer the objections before they come up.",
  },
  {
    image: slide6,
    step: "Result",
    title: "End on the proof",
    text: "One before-and-after closes the argument better than a list of promises. The project hasn’t shipped, so the proof comes from testing on real issues.",
  },
];

const process = [
  ["01", "Find the decision", "Before any layout: who is in the room, and what do they need to decide by the end? For Remote Settings, it was whether the redesign deserved to move up the priority list."],
  ["02", "Gather, then cut", "I traced real incidents from Slack threads and war room postmortems. Most of what I found didn’t make it in: the story needs the strongest evidence, not all of it."],
  ["03", "Sequence for tension", "Consequence, pattern, root cause, proposal, outcome. Each slide earns the next one, so the solution arrives when the audience is already asking for it."],
  ["04", "Design so it lands in seconds", "One message per slide, written as the headline. If someone only reads the titles, they still get the argument."],
];

const onePagerNotes = [
  ["Headline as the message", "If the reader stops after one line, they still know what Test Hub changed: one link instead of a stack of dashboards."],
  ["Results before explanation", "The four numbers sit above the fold, on a dark band, so they are read first. Problem and solution come after, for whoever wants the why."],
  ["A chart that shows trust, not just data", "The rollout chart reuses Test Hub’s own pattern: unbalanced days are shaded instead of hidden, so a non-analyst can see which days are safe to decide on."],
  ["Proof from the people who use it", "A stakeholder quote and the next milestone close the page, turning a status update into a reason to keep investing."],
];

const ai = [
  ["Synthesis", "Claude clustered two years of scattered feedback into themes, so my time went to choosing the story, not copy-pasting threads."],
  ["Production", "The deck and one-pager are built in HTML with Claude Code, on one small layout system, so the next deck starts from components, not a blank file."],
  ["Judgment stays mine", "What to cut, what to lead with and what to claim are decisions I make. AI makes the iterations faster; it doesn’t pick the message."],
];

function PieceTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-xs uppercase tracking-wider px-3 py-1 rounded-full inline-block"
      style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
    >
      {children}
    </span>
  );
}

function PdfLink({ file, children }: { file: string; children: React.ReactNode }) {
  return (
    <a
      href={`${BASE}storytelling/${file}`}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
      style={{ color: ACCENT }}
    >
      {children}
    </a>
  );
}

export function StorytellingProjectPage() {
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
              Strategic Storytelling
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Turning complex product work into narratives people can decide on: a
              business-case deck for leadership and a one-pager that explains a
              data tool in under a minute. Both are built from real Madbox projects.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Formats</h3>
                <p className="text-gray-900">Presentation deck, one-pager, data visualization</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Audience</h3>
                <p className="text-gray-900">Leadership, Game Managers, cross-team stakeholders</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Source projects</h3>
                <p className="text-gray-900">
                  <Link to="/projects/remote-settings" className="underline underline-offset-4 hover:text-gray-600">
                    Remote Settings
                  </Link>
                  {" · "}
                  <Link to="/projects/test-hub" className="underline underline-offset-4 hover:text-gray-600">
                    Test Hub
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Claude Code</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Figma</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">Notion</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-10 max-w-3xl leading-relaxed">
              Recreated for this portfolio from the original project material. Game
              names are removed; the numbers come from the real incidents and the
              shipped product, except where a chart is marked as illustrative.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
          {/* Approach */}
          <section className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-light text-gray-900">How I build a story</h2>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                The design is the last step. Most of the work is deciding what the
                message is, and what to leave out.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {process.map(([n, title, text]) => (
                <div
                  key={n}
                  className="rounded-2xl p-8 border"
                  style={{ backgroundColor: `${ACCENT}0d`, borderColor: `${ACCENT}33` }}
                >
                  <p className="text-sm font-semibold" style={{ color: ACCENT }}>{n}</p>
                  <h3 className="text-xl font-medium text-gray-900 mt-2">{title}</h3>
                  <p className="text-gray-600 leading-relaxed mt-3">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Piece 1: deck */}
          <section className="space-y-10">
            <div className="space-y-4">
              <PieceTag>Piece 01 · Presentation</PieceTag>
              <h2 className="text-4xl font-light text-gray-900">The business case for Remote Settings</h2>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                Abstract pain points didn’t move priorities. Tracing real war rooms
                back to specific gaps in the tool turned a redesign into a business
                case. Six slides, one argument: changing a live game has to become
                safe without becoming slow.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                It started as a written pitch: five risks and ten incidents, each
                with its own story. For leadership I cut it to four numbers and one
                pattern, because ten incidents read as bad luck, not as a problem
                worth funding.
              </p>
              <PdfLink file="RemoteSettings_BusinessCase_Deck.pdf">Open the full deck (PDF) →</PdfLink>
            </div>
            <div className="space-y-16">
              {slides.map((s, i) => (
                <div
                  key={s.step}
                  className={s.step === "Result" ? "flex flex-col-reverse gap-6" : "grid md:grid-cols-5 gap-8 items-center"}
                >
                  <a
                    href={s.image}
                    target="_blank"
                    rel="noreferrer"
                    className={`${s.step === "Result" ? "md:w-3/5" : "md:col-span-3"} block rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <img src={s.image} alt={`Slide ${i + 1}: ${s.title}`} className="w-full h-auto block" loading="lazy" />
                  </a>
                  <div className={`${s.step === "Result" ? "max-w-3xl" : "md:col-span-2"} space-y-3`}>
                    <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>
                      {String(i + 1).padStart(2, "0")} · {s.step}
                    </p>
                    <h3 className="text-2xl font-light text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Piece 2: one-pager */}
          <section className="space-y-10">
            <div className="space-y-4">
              <PieceTag>Piece 02 · One-pager &amp; data visualization</PieceTag>
              <h2 className="text-4xl font-light text-gray-900">Test Hub, explained in one page</h2>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                A leadership one-pager for a launched data tool: the headline answers
                “why should I care”, the dark band carries the four results that
                matter, and everything below is there for the reader who wants proof.
              </p>
              <PdfLink file="TestHub_OnePager.pdf">Open the one-pager (PDF) →</PdfLink>
            </div>
            <div className="grid md:grid-cols-5 gap-10 items-start">
              <a
                href={onePager}
                target="_blank"
                rel="noreferrer"
                className="md:col-span-3 block rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={onePager} alt="Test Hub one-pager for leadership" className="w-full h-auto block" loading="lazy" />
              </a>
              <div className="md:col-span-2 space-y-8">
                {onePagerNotes.map(([title, text]) => (
                  <div key={title} className="border-l-2 pl-5" style={{ borderColor: ACCENT }}>
                    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                    <p className="text-gray-600 leading-relaxed mt-2">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI in the process */}
          <section className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-light text-gray-900">AI in the process</h2>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                I use AI to move faster and to build things other people can reuse,
                not to decide what the story is.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {ai.map(([title, text]) => (
                <div key={title} className="rounded-2xl p-8 bg-gray-50">
                  <h3 className="text-xl font-medium text-gray-900">{title}</h3>
                  <p className="text-gray-600 leading-relaxed mt-3">{text}</p>
                </div>
              ))}
            </div>
          </section>
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
