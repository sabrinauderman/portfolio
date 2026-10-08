import React from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import tinyRushCover from "@/assets/tiny-rush/cover.jpg";

export const gameProjects = [
  {
    id: "tiny-rush",
    title: "Tiny Rush",
    description:
      "A 60-second casual race for mobile and desktop browsers, designed to be understood in under 10 seconds. Playable prototype built by directing AI-assisted development.",
    role: "Game & UX/UI Designer",
    tags: ["Casual", "Mobile + Desktop", "Playable"],
    color: "#e8741a",
    image: tinyRushCover,
  },
];

export function GameDesignPage() {
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

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="space-y-16">
          <div className="space-y-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>←</span>
              <span>All projects</span>
            </Link>
            <h1 className="text-6xl font-light tracking-tight text-gray-900">
              Game Design
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Playable prototypes and game UX studies: core loops, onboarding,
              HUDs, controls and game feel, tested on real devices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {gameProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/game-design/${project.id}`}
                className="group space-y-6"
              >
                <div
                  className="aspect-[4/3] rounded-2xl overflow-hidden transition-transform group-hover:scale-[1.02] relative bg-white shadow-lg"
                  style={{ borderTop: `4px solid ${project.color}` }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} gameplay`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    ▶ Playable
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
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
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
          <p>© 2026 Sabrina Uderman</p>
        </div>
      </footer>
    </div>
  );
}
