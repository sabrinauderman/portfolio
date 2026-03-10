import React from "react";

import imgNVzmVuxf27Ibaqu0BaJxYvfGyPng from "@/assets/a9924b34a6e4a245fe268cd5b7a1c3c85ac622e4.png";
import imgRFCvnSj2YOxia2KCtFxGmqqgAPng from "@/assets/959ff0a24d36547e13bc6e06d84d680d15c2152c.png";
import imgP6AlDtMiisgtGeCtJlskdvcv00Png from "@/assets/51d96bf3c8e8f7f809dd8c1bb9da0ecac2b068af.png";
import imgO7SFQpds9TclnKbcnAsNyEr4Mp4 from "@/assets/0157d7204cc8742bd42d1befd4c6d95e87e3f92f.png";
import imgViUtbIv3GBoDIjo60NkYaWLx13AMp4 from "@/assets/173b8f1f9ce0d2b52955e0c1729f861224ed0fe8.png";
import imgIrNx6YShQAyj821BG1W9H2WrCyoMp4 from "@/assets/dd48db70ea5da1cd457b05c8e143dba956a43b0b.png";
import img8LpqNqs5L746AuZaPrVeIhWmMp4 from "@/assets/87edd58ee2ed96d9d88dea3bb952b34382c7b8a1.png";

export function Design() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-32">
      {/* Strategic Pivot */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#b87673]">Strategic Pivot</h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Early concept work explored mentorship features, forums, and events.
            But value mapping revealed these were high-effort, low-return.
          </p>

          <div className="space-y-4 bg-gray-50 rounded-2xl p-12">
            <p className="text-2xl italic text-gray-800 font-light leading-relaxed">
              We didn't need to replicate mentorship.
            </p>
            <p className="text-2xl italic text-gray-800 font-light leading-relaxed">
              We needed to replace it with proof-of-work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="bg-white rounded-2xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#FA6161]"></div>
                <h3 className="font-semibold text-gray-900">Cut</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Mentorship matching, discussion forums, networking events
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#87D494]"></div>
                <h3 className="font-semibold text-gray-900">Prioritized</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                AI-based project matching, task-based collaboration hub,
                lightweight feedback tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideation & Prioritization */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#b87673]">
          Ideation & Prioritization
        </h2>

        <div className="space-y-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Through rapid sketching and prioritization frameworks, four themes
            emerged:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#ffef9c] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg text-center">
                Smart Matching
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                AI recommends collaborators based on skills, availability, and
                goals, not just portfolios.
              </p>
            </div>

            <div className="bg-[#ffef9c] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg text-center">
                Project Flows
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Clear pathways for creating, applying, and managing projects,
                tailored by role.
              </p>
            </div>

            <div className="bg-[#ffef9c] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg text-center">
                Role-Based Dashboards
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Seniors and juniors see different actions and statuses based on
                their involvement.
              </p>
            </div>

            <div className="bg-[#ffef9c] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg text-center">
                Feedback That Fits
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Lightweight feedback tied to tasks. No pressure, just progress.
              </p>
            </div>
          </div>

          <div className="pt-8 space-y-10">
            <p className="text-lg text-gray-700">
              We mapped features into three value levels:
            </p>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-[#dbdee4] px-8 py-3 rounded-full">
                  <p className="font-semibold text-gray-900">
                    1. Transformational
                  </p>
                </div>
                <p className="text-center text-gray-700 leading-relaxed">
                  Career momentum, fair access, async collaboration
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-block bg-[#dbdee4] px-8 py-3 rounded-full">
                  <p className="font-semibold text-gray-900">2. Functional</p>
                </div>
                <p className="text-center text-gray-700 leading-relaxed">
                  AI matching, task dashboard, feedback system
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-block bg-[#dbdee4] px-8 py-3 rounded-full">
                  <p className="font-semibold text-gray-900">3. Baseline</p>
                </div>
                <p className="text-center text-gray-700 leading-relaxed">
                  Clear roles, transparency, no tool overload
                </p>
              </div>
            </div>

            <p className="text-gray-700 pt-6">
              This ensured every design decision solved a real user need.
            </p>
          </div>
        </div>
      </section>

      {/* Early Testing & Iteration */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#b87673]">
          Early Testing & Iteration
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We tested lo-fi wireframes with both user groups. Three critical
            issues surfaced:
          </p>

          <div className="space-y-6 pt-6">
            <div className="bg-[#f5f6f6] rounded-2xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#b87673] text-white text-xl font-light">
                  1
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-sm text-gray-500">Issue 1</p>
                  <p className="text-lg font-semibold text-gray-900">
                    "What does involvement mean?"
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed pl-16">
                Added tooltips, clearer labels, and custom input fields
              </p>
            </div>

            <div className="bg-[#f5f6f6] rounded-2xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#b87673] text-white text-xl font-light">
                  2
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-sm text-gray-500">Issue 2</p>
                  <p className="text-lg font-semibold text-gray-900">
                    "Projects are everywhere. What's what?"
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed pl-16">
                Simplified navigation, cleaned preview cards, reorganized
                dashboards
              </p>
            </div>

            <div className="bg-[#f5f6f6] rounded-2xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#b87673] text-white text-xl font-light">
                  3
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-sm text-gray-500">Issue 3</p>
                  <p className="text-lg font-semibold text-gray-900">
                    "Can I revise my feedback?"
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed pl-16">
                Added progressive task states and editable feedback loops
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#b87673]">Design System</h2>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Our visual language reflects the platform's core promise:
            </p>
            <p className="text-2xl italic text-gray-800 font-light">
              clarity without clutter.
            </p>
          </div>

          <div className="space-y-16 pt-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={imgNVzmVuxf27Ibaqu0BaJxYvfGyPng}
                  alt="Calm by Default"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Calm by Default
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Grayscale system highlights work, not interface
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={imgRFCvnSj2YOxia2KCtFxGmqqgAPng}
                  alt="Commitment Through Contrast"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Commitment Through Contrast
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Color appears only when users take action
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={imgP6AlDtMiisgtGeCtJlskdvcv00Png}
                  alt="Clarity Through Structure"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Clarity Through Structure
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hierarchy, visual tone, and role-based content create
                  confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Designs */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#b87673]">Final Designs</h2>

        <div className="space-y-12">
          {/* User Flows */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="inline-block bg-[#dbdee4] px-8 py-3 rounded-full">
                <p className="font-semibold text-gray-900">
                  Junior Designer Flow
                </p>
              </div>
              <ul className="space-y-3 text-gray-700 pl-4">
                <li>• Browse AI-matched projects</li>
                <li>• Apply with portfolio + custom message</li>
                <li>• Collaborate via task dashboard</li>
                <li>• Receive structured feedback</li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="inline-block bg-[#dbdee4] px-8 py-3 rounded-full">
                <p className="font-semibold text-gray-900">
                  Senior Designer Flow
                </p>
              </div>
              <ul className="space-y-3 text-gray-700 pl-4">
                <li>• Create project with scope, timeline, skills needed</li>
                <li>• Review AI-ranked applicants</li>
                <li>• Assign tasks and provide feedback</li>
                <li>• Manage multiple collaborations</li>
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-semibold text-gray-900 text-lg">
              Key Features
            </h3>
            <ul className="space-y-3 text-gray-700 pl-4">
              <li>
                • AI match transparency (shows why matches are 92%, 85%, etc.)
              </li>
              <li>• Task-based project structure</li>
              <li>• Feedback states (draft, submitted, revision)</li>
              <li>• Progress indicators</li>
              <li>• Notification system</li>
            </ul>
          </div>

          {/* Prototype Videos in Grid */}
          <div className="space-y-8 pt-8">
            <h3 className="font-semibold text-gray-900 text-lg text-center">
              Interactive Prototypes
            </h3>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <img
                    src={imgO7SFQpds9TclnKbcnAsNyEr4Mp4}
                    alt="Create a Project"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-gray-900">
                    Create a Project
                  </p>
                  <p className="text-sm text-gray-500">
                    Senior Designer Profile
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <img
                    src={imgViUtbIv3GBoDIjo60NkYaWLx13AMp4}
                    alt="Apply to a Project"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-gray-900">
                    Apply to a Project
                  </p>
                  <p className="text-sm text-gray-500">
                    Junior Designer Profile
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <img
                    src={imgIrNx6YShQAyj821BG1W9H2WrCyoMp4}
                    alt="Project Management"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-gray-900">
                    Project Management
                  </p>
                  <p className="text-sm text-gray-500">
                    Senior Designer Profile
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <img
                    src={img8LpqNqs5L746AuZaPrVeIhWmMp4}
                    alt="Project Management"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="text-center space-y-1">
                  <p className="font-semibold text-gray-900">
                    Project Management
                  </p>
                  <p className="text-sm text-gray-500">
                    Junior Designer Profile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

