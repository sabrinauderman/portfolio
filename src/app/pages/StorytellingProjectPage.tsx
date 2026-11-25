import React from "react";
import { Link } from "react-router";

import rs1 from "@/assets/storytelling/rs/slide-1.jpg";
import rs2 from "@/assets/storytelling/rs/slide-2.jpg";
import rs3 from "@/assets/storytelling/rs/slide-3.jpg";
import rs4 from "@/assets/storytelling/rs/slide-4.jpg";
import rs5 from "@/assets/storytelling/rs/slide-5.jpg";
import rs6 from "@/assets/storytelling/rs/slide-6.jpg";
import rsOnePager from "@/assets/storytelling/rs/one-pager.jpg";
import th1 from "@/assets/storytelling/testhub/slide-1.jpg";
import th2 from "@/assets/storytelling/testhub/slide-2.jpg";
import th3 from "@/assets/storytelling/testhub/slide-3.jpg";
import th4 from "@/assets/storytelling/testhub/slide-4.jpg";
import th5 from "@/assets/storytelling/testhub/slide-5.jpg";
import th6 from "@/assets/storytelling/testhub/slide-6.jpg";
import thOnePager from "@/assets/storytelling/testhub/one-pager.jpg";
import tt1 from "@/assets/storytelling/tracking/slide-1.jpg";
import tt2 from "@/assets/storytelling/tracking/slide-2.jpg";
import tt3 from "@/assets/storytelling/tracking/slide-3.jpg";
import tt4 from "@/assets/storytelling/tracking/slide-4.jpg";
import tt5 from "@/assets/storytelling/tracking/slide-5.jpg";
import ttOnePager from "@/assets/storytelling/tracking/one-pager.jpg";

const ACCENT = "#7a5ba6";
const BASE = import.meta.env.BASE_URL;

type Slide = { image: string; step: string; title: string; text: string };
type Piece = {
  tag: string;
  title: string;
  intro: string[];
  caseLink: string;
  caseName: string;
  deckPdf: string;
  slides: Slide[];
  onePager: { image: string; pdf: string; alt: string; notes: [string, string][] };
};

// Each project is told twice: a deck for the meeting, a one-pager for everyone who missed it.
const pieces: Piece[] = [
  {
    tag: "Piece 01 · Business case",
    title: "Remote Settings: getting a redesign prioritized",
    intro: [
      "Abstract pain points didn’t move priorities. Tracing real war rooms back to specific gaps in the tool turned a redesign into a business case. Six slides, one argument: changing a live game has to become safe without becoming slow.",
      "It started as a written pitch: five risks and ten incidents, each with its own story. For leadership I cut it to four numbers and one pattern, because ten incidents read as bad luck, not as a problem worth funding.",
    ],
    caseLink: "/projects/remote-settings",
    caseName: "Remote Settings",
    deckPdf: "RemoteSettings_BusinessCase_Deck.pdf",
    slides: [
      { image: rs1, step: "Hook", title: "Lead with the consequence, not the tool", text: "Leadership doesn’t care about baselines or modules. They remember war rooms, so the title starts there." },
      { image: rs2, step: "Cost", title: "Four numbers, nothing else", text: "From everything in the postmortems, I kept the four that each show a different kind of damage: frequency, duration, engagement and reach." },
      { image: rs3, step: "Pattern", title: "Turn incidents into a pattern", text: "Each incident on its own looked like bad luck. Lined up in one table, with what would have caught it, they show the same gap every time." },
      { image: rs4, step: "Root cause", title: "Name the real problem", text: "The obvious ask was “add a QA step”. The slide shows why that already failed twice, so the proposal can’t be read as more of the same." },
      { image: rs5, step: "Proposal", title: "One diagram, one decision", text: "The whole solution fits a single flow: review in proportion to risk, with no bypass. The three principles underneath answer the objections before they come up." },
      { image: rs6, step: "Result", title: "End on the proof", text: "One before-and-after closes the argument better than a list of promises. The project hasn’t shipped, so the proof comes from testing on real issues." },
    ],
    onePager: {
      image: rsOnePager,
      pdf: "RemoteSettings_OnePager.pdf",
      alt: "Remote Settings one-pager for leadership",
      notes: [
        ["The deck, for people who missed the meeting", "Same headline, same four numbers. Anyone forwarded the page gets the argument without the presenter."],
        ["The result gets the only dark block", "Below the header, the 4 → 26 comparison is the one block in black, so it is read right after the cost."],
        ["Honest about the status", "The page says the project hasn’t shipped and that the 26 / 30 comes from testing, not production."],
      ],
    },
  },
  {
    tag: "Piece 02 · Launch story",
    title: "Test Hub: explaining a data tool to leadership",
    intro: [
      "A launched data tool needed to be understood by people who would never open it. The deck tells how it was built in four months; the one-pager answers “why should I care” in under a minute.",
    ],
    caseLink: "/projects/test-hub",
    caseName: "Test Hub",
    deckPdf: "TestHub_Deck.pdf",
    slides: [
      { image: th1, step: "Hook", title: "Start with the question, not the tool", text: "Game Managers don’t care about dashboards. They care about whether to ship, so the title starts there." },
      { image: th2, step: "Cost", title: "Show what one bottleneck costs", text: "Every routine question went through Analytics. The slide shows what that meant for each test, every day." },
      { image: th3, step: "Insight", title: "Two findings, one design brief", text: "Trust explains why the old dashboard died. The calendar explains how people actually think about tests." },
      { image: th4, step: "Product", title: "Describe features as answers", text: "Each part of the product is named by the question it answers, not by the screen it lives on." },
      { image: th5, step: "Trade-off", title: "Say what you left out", text: "Naming what stayed in Looker is what makes a four-month launch believable." },
      { image: th6, step: "Result", title: "End on speed and a voice", text: "Three before-and-afters and one stakeholder quote. The quote does what a number can’t: it says this was unusual." },
    ],
    onePager: {
      image: thOnePager,
      pdf: "TestHub_OnePager.pdf",
      alt: "Test Hub one-pager for leadership",
      notes: [
        ["Headline as the message", "If the reader stops after one line, they still know what Test Hub changed: one link instead of a stack of dashboards."],
        ["Results before explanation", "The four numbers sit right under the headline, so they are read first. Problem and solution come after, for whoever wants the why."],
        ["A chart that shows trust, not just data", "The rollout chart reuses Test Hub’s own pattern: unbalanced days are shaded instead of hidden, so a non-analyst can see which days are safe to decide on."],
        ["Proof from the people who use it", "A stakeholder quote closes the page, turning a status update into a reason to keep investing."],
      ],
    },
  },
  {
    tag: "Piece 03 · Impact review",
    title: "Tracking Tool: proving impact after launch",
    intro: [
      "The Remote Settings deck asks for a decision before anything ships. This one closes the loop after launch: feedback from QA, Game Developers and Analytics, turned into a story of what changed.",
    ],
    caseLink: "/projects/tracking-tool",
    caseName: "Tracking Tool",
    deckPdf: "TrackingTool_Deck.pdf",
    slides: [
      { image: tt1, step: "Hook", title: "Lead with the fix", text: "The whole story fits one sentence: one manual step broke tracking, and it’s gone." },
      { image: tt2, step: "Problem", title: "Show where information gets lost", text: "Three teams, two handoffs. Drawing the flow makes the problem visible before any number." },
      { image: tt3, step: "Root cause", title: "Make the error concrete", text: "One missed filter is easier to picture than “an error-prone process”. The mock-up is illustrative." },
      { image: tt4, step: "Solution", title: "Before and after, not features", text: "Each change is written as the manual step it removed, so the reader sees the work that disappeared." },
      { image: tt5, step: "Result", title: "Let the teams say it", text: "The ~50% is the QA team’s own estimate, so it is labelled that way, and each team gets one quote." },
    ],
    onePager: {
      image: ttOnePager,
      pdf: "TrackingTool_OnePager.pdf",
      alt: "Tracking Tool one-pager for leadership",
      notes: [
        ["Lead with the time saved", "Of everything the teams reported, half a day back per QA round is what a manager feels. It becomes the headline; the rest supports it."],
        ["Before and after, not features", "Each change is written as the manual step it removed, not as a list of screens."],
        ["One voice per team", "A quote from QA, Game Developers and Analytics shows the tool helped all three, not one team at the others’ expense."],
      ],
    },
  },
];

const process = [
  ["01", "Find the decision", "Before any layout: who is in the room, and what do they need to decide by the end? For Remote Settings, it was whether the redesign deserved to move up the priority list."],
  ["02", "Gather, then cut", "I traced real incidents from Slack threads and war room postmortems. Most of what I found didn’t make it in: the story needs the strongest evidence, not all of it."],
  ["03", "Sequence for tension", "Consequence, pattern, root cause, proposal, outcome. Each slide earns the next one, so the solution arrives when the audience is already asking for it."],
  ["04", "Design so it lands in seconds", "One message per slide, written as the headline. If someone only reads the titles, they still get the argument."],
];

const ai = [
  ["Synthesis", "Claude clustered two years of scattered feedback into themes, so my time went to choosing the story, not copy-pasting threads."],
  ["Production", "Every deck and one-pager here is built in HTML with Claude Code, on one small layout system, so the next deck starts from components, not a blank file."],
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

function SlideRow({ slide, index }: { slide: Slide; index: number }) {
  const stacked = slide.step === "Result";
  return (
    <div className={stacked ? "flex flex-col-reverse gap-6" : "grid md:grid-cols-5 gap-8 items-center"}>
      <a
        href={slide.image}
        target="_blank"
        rel="noreferrer"
        className={`${stacked ? "md:w-3/5" : "md:col-span-3"} block rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow`}
      >
        <img src={slide.image} alt={`Slide ${index + 1}: ${slide.title}`} className="w-full h-auto block" loading="lazy" />
      </a>
      <div className={`${stacked ? "max-w-3xl" : "md:col-span-2"} space-y-3`}>
        <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>
          {String(index + 1).padStart(2, "0")} · {slide.step}
        </p>
        <h3 className="text-2xl font-light text-gray-900">{slide.title}</h3>
        <p className="text-gray-600 leading-relaxed">{slide.text}</p>
      </div>
    </div>
  );
}

function PieceSection({ piece }: { piece: Piece }) {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <PieceTag>{piece.tag}</PieceTag>
        <h2 className="text-4xl font-light text-gray-900">{piece.title}</h2>
        {piece.intro.map((p) => (
          <p key={p} className="text-lg text-gray-600 max-w-3xl leading-relaxed">{p}</p>
        ))}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <PdfLink file={piece.deckPdf}>Open the deck (PDF) →</PdfLink>
          <PdfLink file={piece.onePager.pdf}>Open the one-pager (PDF) →</PdfLink>
          <Link
            to={piece.caseLink}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            See the {piece.caseName} case →
          </Link>
        </div>
      </div>

      <div className="space-y-16">
        {piece.slides.map((s, i) => (
          <SlideRow key={s.step} slide={s} index={i} />
        ))}
      </div>

      <div className="space-y-6 pt-4">
        <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>
          And the one-pager
        </p>
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <a
            href={piece.onePager.image}
            target="_blank"
            rel="noreferrer"
            className="md:col-span-3 block rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={piece.onePager.image} alt={piece.onePager.alt} className="w-full h-auto block" loading="lazy" />
          </a>
          <div className="md:col-span-2 space-y-8">
            {piece.onePager.notes.map(([title, text]) => (
              <div key={title} className="border-l-2 pl-5" style={{ borderColor: ACCENT }}>
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-relaxed mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
              Turning complex product work into narratives people can decide on.
              Three real Madbox projects, each told twice: a deck for the meeting,
              and a one-pager for everyone who wasn’t in it.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Formats</h3>
                <p className="text-gray-900">Presentation decks, one-pagers, data visualization</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Audience</h3>
                <p className="text-gray-900">Leadership, Game Managers, cross-team stakeholders</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Source projects</h3>
                <p className="text-gray-900">
                  {pieces.map((p, i) => (
                    <React.Fragment key={p.caseLink}>
                      {i > 0 && " · "}
                      <Link to={p.caseLink} className="underline underline-offset-4 hover:text-gray-600">
                        {p.caseName}
                      </Link>
                    </React.Fragment>
                  ))}
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
              shipped products, except where something is marked as illustrative
              or as a team’s own estimate.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16 space-y-28">
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

          {pieces.map((piece) => (
            <PieceSection key={piece.tag} piece={piece} />
          ))}

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
