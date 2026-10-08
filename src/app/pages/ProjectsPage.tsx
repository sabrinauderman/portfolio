import React from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { gameProjects } from "./GameDesignPage";

// Import project cover images
import testHubCover from "@/assets/test-hub/cover.jpg";
import cultiveCover from "@/assets/09319fc5b22c8317d7fc141ad4a210009295fbda.png";
import trackingToolCover from "@/assets/13ea1494f77e74c75cc4b6c229fae9de3e2ae247.png";
import remoteSettingsCover from "@/assets/remote-settings/baselines.jpg";

const projects = [
  {
    id: "remote-settings",
    title: "Remote Settings",
    description:
      "A redesign of Madbox's live configuration tool that brings QA into the flow and uses AI to decide how much review each change needs. Still in progress.",
    role: "PM & Product Designer",
    color: "#5b7fa6",
    image: remoteSettingsCover,
    isComponent: false,
    hasNDA: true,
  },
  {
    id: "test-hub",
    title: "Test Hub",
    description:
      "Madbox's internal platform for game tests: Game Managers see what's live, how it's performing and whether to ship, without opening Looker. Launched in four months.",
    role: "Product Designer & PM",
    color: "#3f8f8a",
    image: testHubCover,
    isComponent: false,
    hasNDA: true,
  },
  {
    id: "tracking-tool",
    title: "Tracking Tool",
    description:
      "An internal platform centralizing event tracking management at Madbox, streamlining QA processes across Analytics, Game Developers, and QA teams.",
    role: "Product Designer",
    color: "#d4834f",
    image: trackingToolCover,
    isComponent: false,
    hasNDA: true,
  },
];

const earlierProjects = [
  {
    id: "cultive",
    title: "Cultive",
    description:
      "An app to discover cultural activities in your neighborhood, easily accessed on foot, helping you learn more about where you live while caring for your well-being.",
    role: "UX Designer",
    color: "#6b8e6b",
    image: cultiveCover,
    isComponent: false,
    hasNDA: false,
  },
];

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <Link to={`/projects/${project.id}`} className="group space-y-6">
      {/* Project Image */}
      <div
        className="aspect-[4/3] rounded-2xl overflow-hidden transition-transform group-hover:scale-[1.02] relative bg-white shadow-lg"
        style={{ borderTop: `4px solid ${project.color}` }}
      >
        <ImageWithFallback
          src={project.image}
          alt={`${project.title} project preview`}
          className="w-full h-full object-cover"
        />

        {/* Privacy blur overlays for Tracking Tool names */}
        {project.id === "tracking-tool" && (
          <>
            {/* Blur overlay for the Assignee column names */}
            <div className="absolute left-[46%] top-[35.5%] w-[10%] h-[5%] privacy-blur bg-white/40" />
            <div className="absolute left-[46%] top-[42.5%] w-[10%] h-[5%] privacy-blur bg-white/40" />
            <div className="absolute left-[46%] top-[49.5%] w-[10%] h-[5%] privacy-blur bg-white/40" />
            <div className="absolute left-[46%] top-[56.5%] w-[10%] h-[5%] privacy-blur bg-white/40" />
            <div className="absolute left-[46%] top-[63.5%] w-[10%] h-[5%] privacy-blur bg-white/40" />
            <div className="absolute left-[46%] top-[70.5%] w-[10%] h-[5%] privacy-blur bg-white/40" />
            <div className="absolute left-[46%] top-[77.5%] w-[10%] h-[5%] privacy-blur bg-white/40" />
            <div className="absolute left-[46%] top-[84.5%] w-[10%] h-[5%] privacy-blur bg-white/40" />
          </>
        )}

        {/* NDA Badge */}
        {project.hasNDA && (
          <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
            NDA
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <div className="flex flex-col gap-2">
          <h2 className={`${compact ? "text-2xl" : "text-3xl"} font-light text-gray-900 group-hover:text-gray-600 transition-colors`}>
            {project.title}
          </h2>
          <span
            className="text-xs uppercase tracking-wider px-3 py-1 rounded-full self-start"
            style={{
              backgroundColor: `${project.color}20`,
              color: project.color,
            }}
          >
            {project.role}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-lg font-light tracking-tight text-gray-900"
          >
            Sabrina's portfolio
          </Link>
          <Link
            to="/projects"
            className="text-sm uppercase tracking-wider text-gray-900 border-b-2 border-gray-900"
          >
            Projects
          </Link>
        </div>
      </nav>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="space-y-16">
          <div>
            <h1 className="text-6xl font-light tracking-tight text-gray-900 mb-4">
              Projects
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Game Design folder: spans the full row and opens a page listing the game projects. */}
            <Link to="/projects/game-design" className="group space-y-6 md:col-span-2">
              <div className="relative aspect-[4/3] md:aspect-[21/8] transition-transform group-hover:scale-[1.01]">
                {/* Folder tab */}
                <div className="absolute top-0 left-0 h-6 w-2/5 md:w-1/5 rounded-t-2xl bg-[#f6cfa8]" />
                <div className="absolute inset-x-0 bottom-0 top-4 rounded-2xl rounded-tl-none bg-[#fde8d4] shadow-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center gap-[4%] px-[6%] py-[8%]">
                    {gameProjects.slice(0, 3).map((g, i) => (
                      <div
                        key={g.id}
                        className="h-full flex-1 min-w-0 rounded-xl overflow-hidden shadow-xl bg-white transition-transform group-hover:-translate-y-1"
                        style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
                      >
                        <ImageWithFallback
                          src={g.image}
                          alt={`${g.title} preview`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    {gameProjects.length} {gameProjects.length === 1 ? "project" : "projects"}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                    Game Design
                  </h2>
                  <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full self-start bg-[#e8741a20] text-[#e8741a]">
                    Folder · Game & UX/UI Design
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Games and playful learning apps: core loops, onboarding,
                  HUDs, controls and game feel, tested on real devices.
                </p>
              </div>
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-100 space-y-10">
            <h2 className="text-2xl font-light text-gray-900">Earlier work</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {earlierProjects.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
          <p>© 2026 Sabrina Uderman</p>
        </div>
      </footer>
    </div>
  );
}

