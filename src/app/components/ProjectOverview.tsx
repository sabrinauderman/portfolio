import React from "react";

import imgO7SFQpds9TclnKbcnAsNyEr4Mp4 from "@/assets/0157d7204cc8742bd42d1befd4c6d95e87e3f92f.png";

export function ProjectOverview() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Role
            </h3>
            <p className="text-gray-900">UX Researcher</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Date
            </h3>
            <p className="text-gray-900">June 2025</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Type
            </h3>
            <p className="text-gray-900">Master's Final Project</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">
                Figma
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                Miro
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Maze
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

