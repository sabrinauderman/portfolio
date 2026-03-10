import React, { useState } from "react";
import { Link } from "react-router";
import { CountingLandHero } from "../components/counting-land/CountingLandHero";
import { CountingLandProjectOverview } from "../components/counting-land/CountingLandProjectOverview";
import { CountingLandResearch } from "../components/counting-land/CountingLandResearch";
import { CountingLandDesign } from "../components/counting-land/CountingLandDesign";
import { CountingLandImpact } from "../components/counting-land/CountingLandImpact";

export function CountingLandProjectPage() {
  const [activeSection, setActiveSection] = useState<
    "discovery" | "design" | "impact"
  >("discovery");

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
            className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors"
          >
            Projects
          </Link>
        </div>
      </nav>

      <div className="pt-20">
        <CountingLandHero />
        <CountingLandProjectOverview />

        {/* Tab Navigation */}
        <nav className="sticky top-[59px] z-40 bg-white border-y border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex gap-8">
              {(["discovery", "design", "impact"] as const).map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors pb-1 ${
                    activeSection === section
                      ? "text-[#8b6b87] border-b-2 border-[#8b6b87]"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          {activeSection === "discovery" && <CountingLandResearch />}
          {activeSection === "design" && <CountingLandDesign />}
          {activeSection === "impact" && <CountingLandImpact />}
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-16 mt-24">
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            {/* Back to Top */}
            <div className="text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
              >
                <span>↑</span>
                <span>Back to top</span>
              </button>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400">
              <p>© 2026 Sabrina Uderman</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
