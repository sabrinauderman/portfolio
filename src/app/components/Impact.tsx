import React from "react";

import Iterations from "../../imports/Iterations";

export function Impact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-32">
      {/* Approach */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#b87673]">Approach</h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Who did we test with?
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-6">
            <div className="bg-[#ffef9c] rounded-2xl p-8 space-y-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg">
                Emerging creatives
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tested AI-match flows, task applications, and feedback clarity.
              </p>
            </div>

            <div className="bg-[#ffef9c] rounded-2xl p-8 space-y-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg">
                Industry pros
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tested project creation, collaborator vetting, and async
                workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Iterations */}
      <section className="space-y-10">
        <div className="max-w-6xl mx-auto">
          <Iterations />
        </div>
      </section>

      {/* Testing Results */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#b87673]">Testing Results</h2>

        <div className="space-y-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            We validated the final prototype with 12 users across both groups.
          </p>

          {/* What we measured */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700">What we measured …</p>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="bg-[#dbdee4] px-8 py-3 rounded-full flex items-center justify-center">
                <p className="font-semibold text-gray-900 text-sm text-center">
                  Task completion rates
                </p>
              </div>
              <div className="bg-[#dbdee4] px-8 py-3 rounded-full flex items-center justify-center">
                <p className="font-semibold text-gray-900 text-sm text-center">
                  Clarity of match reasoning
                </p>
              </div>
              <div className="bg-[#dbdee4] px-8 py-3 rounded-full flex items-center justify-center">
                <p className="font-semibold text-gray-900 text-sm text-center">
                  Confidence in applying/posting projects
                </p>
              </div>
              <div className="bg-[#dbdee4] px-8 py-3 rounded-full flex items-center justify-center">
                <p className="font-semibold text-gray-900 text-sm text-center">
                  Feedback loop satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="space-y-8 pt-8">
            <h3 className="font-semibold text-gray-900 text-lg text-center">
              Key Findings:
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#ffef9c] rounded-2xl p-8 shadow-sm">
                <p className="text-gray-800 leading-relaxed text-center">
                  <span className="font-semibold">Juniors felt empowered</span>{" "}
                  to apply, deliver, and grow their portfolios
                </p>
              </div>

              <div className="bg-[#ffef9c] rounded-2xl p-8 shadow-sm">
                <p className="text-gray-800 leading-relaxed text-center">
                  <span className="font-semibold">Seniors felt in control</span>
                  , not overwhelmed by collaboration requests
                </p>
              </div>

              <div className="bg-[#ffef9c] rounded-2xl p-8 shadow-sm">
                <p className="text-gray-800 leading-relaxed text-center">
                  <span className="font-semibold">
                    Everyone understood the system
                  </span>{" "}
                  and trusted the AI recommendations
                </p>
              </div>

              <div className="bg-[#ffef9c] rounded-2xl p-8 shadow-sm">
                <p className="text-gray-800 leading-relaxed text-center">
                  <span className="font-semibold">
                    92% said they would use this
                  </span>{" "}
                  over existing platforms
                </p>
              </div>
            </div>
          </div>

          {/* Quotes */}
          <div className="space-y-6 pt-8">
            <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
              <div className="absolute top-6 left-6 text-6xl text-[#b87673] opacity-20 font-serif">
                "
              </div>
              <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center relative z-10">
                This is the first platform that actually respects my time while
                still letting me support new designers.
              </p>
              <div className="absolute bottom-6 right-6 text-6xl text-[#b87673] opacity-20 font-serif">
                "
              </div>
            </div>

            <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
              <div className="absolute top-6 left-6 text-6xl text-[#b87673] opacity-20 font-serif">
                "
              </div>
              <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center relative z-10">
                I finally feel like I can get real experience without begging
                for opportunities.
              </p>
              <div className="absolute bottom-6 right-6 text-6xl text-[#b87673] opacity-20 font-serif">
                "
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
