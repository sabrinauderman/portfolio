import React from "react";

import imgO7SFQpds9TclnKbcnAsNyEr4Mp4 from "@/assets/0157d7204cc8742bd42d1befd4c6d95e87e3f92f.png";

export function Research() {
  return (
    <div className="max-w-5xl mx-auto space-y-32">
      {/* The Opportunity */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-[#b87673]">The Opportunity</h2>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="text-lg">
            Competitive research revealed a broken pattern: on platforms like
            LinkedIn and Behance, users spent more time searching and filtering
            than actually collaborating.
          </p>

          <div className="bg-gray-50 rounded-2xl p-10 space-y-6">
            <p className="text-gray-600">This led us to ask …</p>
            <p className="text-3xl italic text-gray-900 font-light">
              What if the platform did the matchmaking?
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <p>From that point, we designed CTRL+Z with AI at the core.</p>
            <p>
              Not as a gimmick, but as infrastructure that evaluates skills,
              availability, and project goals to generate ranked matches.
            </p>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-[#b87673]">User Research</h2>

        <div className="space-y-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            We interviewed emerging and established designers to understand
            what's blocking creative collaboration.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <p className="font-medium text-gray-900">The pattern:</p>
            </div>
            <p className="text-2xl italic text-gray-800 font-light">
              What if the platform did the matchmaking?
            </p>
          </div>

          {/* User Quotes */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="bg-[#ffef9c] rounded-2xl p-8 space-y-6 shadow-sm relative">
              <div className="absolute top-6 left-6 text-6xl text-[#b87673] opacity-20 font-serif">
                "
              </div>
              <p className="text-xl italic text-gray-900 leading-relaxed relative z-10">
                I'd love help. But I don't have time to search and 'teach.'
              </p>
              <p className="text-sm text-gray-600 relative z-10">
                — Senior Designer
              </p>
              <div className="absolute bottom-6 right-6 text-6xl text-[#b87673] opacity-20 font-serif">
                "
              </div>
            </div>

            <div className="bg-[#ffef9c] rounded-2xl p-8 space-y-6 shadow-sm relative">
              <div className="absolute top-6 left-6 text-6xl text-[#b87673] opacity-20 font-serif">
                "
              </div>
              <p className="text-xl italic text-gray-900 leading-relaxed relative z-10">
                It's hard to prove what I can do without someone trusting me
                first.
              </p>
              <p className="text-sm text-gray-600 relative z-10">
                — Junior Designer
              </p>
              <div className="absolute bottom-6 right-6 text-6xl text-[#b87673] opacity-20 font-serif">
                "
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6 mt-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <p className="font-medium text-gray-900">The insight:</p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Both groups wanted to work together, but were held back by trust
              gaps, unclear roles, and mentorship burnout.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Definition */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#b87673]">
          Problem Definition
        </h2>

        <p className="text-lg text-gray-700">Three core tensions emerged:</p>

        <div className="space-y-12 pt-6">
          {/* Tension 1: Access */}
          <div className="space-y-6">
            <div className="inline-block bg-[#dbdee4] px-8 py-3 rounded-full">
              <p className="font-medium text-gray-900">1. Access</p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed pl-4">
              Juniors lacked visible entry points. Seniors struggled to find
              trusted collaborators without heavy vetting.
            </p>
          </div>

          {/* Tension 2: Clarity */}
          <div className="space-y-6">
            <div className="inline-block bg-[#dbdee4] px-8 py-3 rounded-full">
              <p className="font-medium text-gray-900">2. Clarity</p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed pl-4">
              Ambiguous roles created anxiety. Users needed clear cues for
              progress, ownership, and expectations.
            </p>
          </div>

          {/* Tension 3: Feedback */}
          <div className="space-y-6">
            <div className="inline-block bg-[#dbdee4] px-8 py-3 rounded-full">
              <p className="font-medium text-gray-900">3. Feedback</p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed pl-4">
              Juniors wanted actionable input. Seniors wanted to support growth
              without draining their time and energy.
            </p>
          </div>
        </div>

        {/* Journey Map */}
        <div className="bg-gray-50 rounded-2xl p-10 space-y-8 mt-16">
          <h3 className="text-xl font-medium text-gray-900">Journey Map:</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <h4 className="font-semibold text-gray-900">Discovery</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Laura discovers the Collab Hub.</li>
                <li>• Mark posts a project brief.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <h4 className="font-semibold text-gray-900">
                Matching & Onboarding
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• AI matches based on skills and goals.</li>
                <li>• Mark shortlists and selects a junior.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <h4 className="font-semibold text-gray-900">Collaboration</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • Laura receives structured deliverables and starts working.
                </li>
                <li>• Mark reviews output at his convenience.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <h4 className="font-semibold text-gray-900">Reflection</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Mark leaves quick feedback.</li>
                <li>
                  • Laura reflects and documents the project for her portfolio.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Validation */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#b87673]">
          Market Validation
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-4">
            <h4 className="font-semibold text-gray-900 text-lg">TAM</h4>
            <p className="text-gray-600 leading-relaxed">
              30M+ global creative roles tied to growth and collaboration
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-4">
            <h4 className="font-semibold text-gray-900 text-lg">SAM</h4>
            <p className="text-gray-600 leading-relaxed">
              8.7M creatives in Europe in project-based contexts
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-4">
            <h4 className="font-semibold text-gray-900 text-lg">SOM</h4>
            <p className="text-gray-600 leading-relaxed">
              800K+ professionals and juniors actively seeking mentorship,
              portfolio reviews, or collaborators
            </p>
          </div>
        </div>
      </section>

      {/* Design Direction */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#b87673]">Design Direction</h2>

        <div className="grid md:grid-cols-2 gap-6 pt-4">
          <div className="bg-[#ffef9c] rounded-2xl p-8 space-y-4 shadow-sm">
            <span className="text-3xl">💭</span>
            <h3 className="font-semibold text-gray-900 text-lg">Juniors</h3>
            <p className="text-gray-700 leading-relaxed">
              need real-world, low-barrier projects to gain experience and grow
              their portfolios.
            </p>
          </div>

          <div className="bg-[#ffef9c] rounded-2xl p-8 space-y-4 shadow-sm">
            <span className="text-3xl">💭</span>
            <h3 className="font-semibold text-gray-900 text-lg">Seniors</h3>
            <p className="text-gray-700 leading-relaxed">
              need efficient ways to delegate creative tasks, without the time
              drain of traditional mentorship.
            </p>
          </div>
        </div>

        <div className="space-y-8 pt-8">
          <p className="text-center text-gray-700">
            From our research, we identified what users actually need:
          </p>

          <div className="space-y-4 bg-gray-50 rounded-2xl p-12">
            <p className="text-2xl italic text-gray-800 text-center font-light leading-relaxed">
              How might we help juniors build confidence through real work?
            </p>
            <p className="text-2xl italic text-gray-800 text-center font-light leading-relaxed">
              How might we reduce effort for seniors to delegate tasks?
            </p>
            <p className="text-2xl italic text-gray-800 text-center font-light leading-relaxed">
              How might we make experience more accessible?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
