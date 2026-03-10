import React from "react";

export function TrackingToolImpact() {
  return (
    <div className="space-y-16">
      {/* Definition of Success */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Definition of Success
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          The Tracking Tool aims to transform how Madbox manages event tracking
          across all games, creating a more efficient, reliable, and scalable
          system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Centralization */}
          <div className="bg-white border border-gray-100 rounded-lg p-8 space-y-4">
            <div className="w-12 h-12 bg-[#d4834f]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-light text-gray-900">
              Centralized Repository
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              All company events consolidated in a single, accessible repository
              that's connected to analytics tools and can be consumed by other
              systems, including AI.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs uppercase tracking-wider text-[#d4834f] mb-2">
                Benefits
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Better self-service capabilities</li>
                <li>• Reduced onboarding costs</li>
                <li>• System-wide integration</li>
              </ul>
            </div>
          </div>

          {/* Efficiency */}
          <div className="bg-white border border-gray-100 rounded-lg p-8 space-y-4">
            <div className="w-12 h-12 bg-[#d4834f]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-light text-gray-900">
              Reduced Redundancies
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Eliminate manual work and duplicate effort in tracking updates,
              saving time across Game Developers, QA, and Analytics teams.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs uppercase tracking-wider text-[#d4834f] mb-2">
                Benefits
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Time savings across teams</li>
                <li>• Structured information</li>
                <li>• Less communication overhead</li>
              </ul>
            </div>
          </div>

          {/* Quality */}
          <div className="bg-white border border-gray-100 rounded-lg p-8 space-y-4">
            <div className="w-12 h-12 bg-[#d4834f]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-light text-gray-900">
              Automated Testing
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Games can run automated checks on tracking events, catching
              problems before they reach production and improving data quality.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs uppercase tracking-wider text-[#d4834f] mb-2">
                Benefits
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fewer event problems</li>
                <li>• Proactive issue detection</li>
                <li>• Better data reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Expected Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#d4834f]/5 border-l-4 border-[#d4834f] p-8">
            <h4 className="text-2xl font-light text-gray-900 mb-2">
              Time Saved
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Significant reduction in manual work for QA testing and event
              verification. Dashboard setup that previously took minutes per
              event now happens instantly.
            </p>
          </div>

          <div className="bg-[#d4834f]/5 border-l-4 border-[#d4834f] p-8">
            <h4 className="text-2xl font-light text-gray-900 mb-2">
              Reduced Errors
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Automated testing catches issues like missing parameters or
              implementation problems before they impact data quality or game
              analytics.
            </p>
          </div>

          <div className="bg-[#d4834f]/5 border-l-4 border-[#d4834f] p-8">
            <h4 className="text-2xl font-light text-gray-900 mb-2">
              Better Collaboration
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Single source of truth eliminates confusion between teams and
              reduces the communication overhead required for tracking updates.
            </p>
          </div>

          <div className="bg-[#d4834f]/5 border-l-4 border-[#d4834f] p-8">
            <h4 className="text-2xl font-light text-gray-900 mb-2">
              Scalable System
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Ability to test and verify events from any version, eliminating
              blind spots and helping teams maintain data quality over time.
            </p>
          </div>
        </div>
      </div>

      {/* Learnings */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          Key Learnings
        </h2>
        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-lg p-8">
            <h4 className="font-medium text-gray-900 mb-3">
              Phased Approach Was Essential
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Breaking the project into three phases allowed us to deliver value
              quickly while managing complexity. Phase 1 provided immediate
              benefits to QA teams, building trust and momentum for future
              phases.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-8">
            <h4 className="font-medium text-gray-900 mb-3">
              Cross-Team Alignment is Critical
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Success required deep understanding of workflows across Analytics,
              Game Developers, and QA. Regular check-ins with all three teams
              ensured the tool actually solved their problems rather than adding
              new ones.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-8">
            <h4 className="font-medium text-gray-900 mb-3">
              Automation Enables Scale
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Manual processes that worked for a few games became unsustainable
              as Madbox scaled. Building automation from the start positioned
              the company to grow without proportionally increasing team size.
            </p>
          </div>
        </div>
      </div>

      {/* User Feedback */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-8">
          User Feedback
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          After implementing the Tracking Tool, team members across QA, Game
          Developers, and Analytics shared their experiences with the new
          workflow.
        </p>
        <div className="space-y-6">
          {/* Quote 1 - QA */}
          <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
            <div className="absolute top-6 left-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
            <div className="relative z-10 space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400 text-center">
                QA Team
              </p>
              <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center">
                The new tracking tool made the DQA process much smoother. What
                previously took around a full day can now be completed in half a
                day or less.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
          </div>

          {/* Quote 2 - QA */}
          <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
            <div className="absolute top-6 left-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
            <div className="relative z-10 space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400 text-center">
                QA Team
              </p>
              <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center">
                The process will likely be 100% faster, since the most
                time-consuming step — setting up filters — has been removed.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
          </div>

          {/* Quote 3 - QA */}
          <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
            <div className="absolute top-6 left-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
            <div className="relative z-10 space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400 text-center">
                QA Team
              </p>
              <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center">
                Comparing the new tool with the old way we used to do it, the
                process is about 80–85% faster.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
          </div>

          {/* Quote 4 - Analytics */}
          <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
            <div className="absolute top-6 left-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
            <div className="relative z-10 space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400 text-center">
                Analytics Team
              </p>
              <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center">
                Having everything centralized in one place, with clearer
                descriptions and tracking updates, makes the workflow much
                easier to follow.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
          </div>

          {/* Quote 5 - QA */}
          <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
            <div className="absolute top-6 left-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
            <div className="relative z-10 space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400 text-center">
                QA Team
              </p>
              <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center">
                The biggest friction point in the old DQA pipeline was manually
                setting up attributes as filters. Most human errors happened
                because one attribute could easily be missed.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
          </div>

          {/* Quote 6 - QA */}
          <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
            <div className="absolute top-6 left-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
            <div className="relative z-10 space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400 text-center">
                QA Team
              </p>
              <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center">
                Now that the process is automated, this issue disappears. The
                workflow is significantly more accurate than before.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
          </div>

          {/* Quote 7 - Game Devs */}
          <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
            <div className="absolute top-6 left-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
            <div className="relative z-10 space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400 text-center">
                Game Developers
              </p>
              <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center">
                By automating the most conflict-prone step in the app, we
                managed to reduce human error and make the process much safer
                and more efficient.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
          </div>

          {/* Quote 8 - Analytics */}
          <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative">
            <div className="absolute top-6 left-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
            <div className="relative z-10 space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400 text-center">
                Analytics Team
              </p>
              <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center">
                Merging the step of checking events in Looker into the tool
                simplified the workflow — now everything can be done in the same
                place.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-[#7a9b7c] opacity-20 font-serif">
              "
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
