import React from "react";
import ContainerTrackingUpdate from "../../../imports/Container-20-8210";
import BasicInfoContextCreate from "../../../imports/BasicInfoContextCreate-20-12110";
import DetailsContextCreate from "../../../imports/DetailsContextCreate-20-12114";
import Tq from "../../../imports/Tq";
import TrackingUpdateDetail from "../../../imports/Container-20-12106";

export function TrackingToolDesign() {
  return (
    <div className="space-y-16">
      {/* Key Workflows */}
      <div className="space-y-12">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
            Key Workflows
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I designed a comprehensive interface system for three distinct user
            groups: Analytics teams managing event taxonomies, Game Developers
            implementing tracking updates, and QA teams validating
            implementations. Each workflow was crafted to streamline
            collaboration and reduce friction across the tracking lifecycle.
          </p>
        </div>

        {/* Create Tracking Update */}
        <div className="space-y-5 max-w-5xl mx-auto px-8">
          <div className="flex items-start gap-5">
            <div className="w-1 h-20 bg-gradient-to-b from-[#d4834f] to-[#d4834f]/20 rounded-full flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-2xl font-light text-gray-900 mb-2">
                Create Tracking Update
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-1.5">
                Step-by-step flow for creating new tracking updates with clear
                progression.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Guides Analytics and Game Dev teams through three steps: Basic
                Information (game, team, priority), Context Details (name,
                description), and Events & Attributes selection.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Basic Information */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-[#d4834f] text-white rounded-full flex items-center justify-center text-sm font-medium shadow-md">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Basic Information
                  </h4>
                  <p className="text-sm text-gray-500">
                    Select game, assign team members, set priority and version
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center -mt-64 -mb-[416px]">
                  <div className="transform scale-[0.7] origin-center">
                    <BasicInfoContextCreate />
                  </div>
                </div>
              </div>
            </div>

            {/* Context Details */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-[#d4834f]/80 text-white rounded-full flex items-center justify-center text-sm font-medium shadow-md">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Context Details
                  </h4>
                  <p className="text-sm text-gray-500">
                    Define context name and description for the database
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center -my-8">
                  <div className="transform scale-[0.7] origin-center">
                    <DetailsContextCreate />
                  </div>
                </div>
              </div>
            </div>

            {/* Events & Attributes */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-[#d4834f]/60 text-white rounded-full flex items-center justify-center text-sm font-medium shadow-md">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Events & Attributes
                  </h4>
                  <p className="text-sm text-gray-500">
                    Select events and attributes, add explanations and files
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center -mt-[100px] -mb-20">
                  <div className="transform scale-[0.7] origin-center">
                    <Tq />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
