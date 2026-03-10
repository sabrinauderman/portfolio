import React from "react";

import imgLoFiTelas from "@/assets/b1c753d4ed281d87f29200536a10cc6a9cdcbe8f.png";
import imgPrototipoFinal from "@/assets/9c359b521abb2b146e903e24b9308fdb15260569.png";
import imgPrototipoFinal2 from "@/assets/0e3d4dab781740ac2bffa8fb5493bdae65e15523.png";
import imgEvolucaoLogo from "@/assets/08dcf60749fd45a62dcc55ad5be7f066f69ebcbe.png";
import imgCores from "@/assets/e2b7679f175000a21ce72aece0999d5c38f23e32.png";
import imgSecondaryColor from "@/assets/3d63493d25c5c349decab93fc881d4109de6212b.png";

export function CultiveDesign() {
  return (
    <div className="space-y-32">
      {/* Design Principles */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">
          Design Principles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#e8f4e8] flex items-center justify-center">
              <span className="text-2xl">🚶</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">
              Walkability First
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Prioritize activities within walking distance, encouraging foot
              exploration and reducing carbon footprint.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#e8f4e8] flex items-center justify-center">
              <span className="text-2xl">🏘️</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">
              Hyperlocal Focus
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Surface neighborhood-specific cultural experiences that help users
              truly know where they live.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#e8f4e8] flex items-center justify-center">
              <span className="text-2xl">💚</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">
              Well-being Centered
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Connect cultural engagement with mental and physical well-being
              through walking and community connection.
            </p>
          </div>
        </div>
      </section>

      {/* Wireframes & Low-Fidelity */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">
          Wireframes & Early Concepts
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We started with low-fidelity wireframes to rapidly test different
            interaction patterns and validate our hyperlocal discovery concept
            with users.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src={imgLoFiTelas}
              alt="Low-fidelity wireframes"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* High-Fidelity Prototypes */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">
          High-Fidelity Prototypes
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            The final designs feature a clean, map-first interface with vibrant
            imagery showcasing local cultural venues and activities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <img
                src={imgPrototipoFinal}
                alt="Final prototype screens set 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4">
              <img
                src={imgPrototipoFinal2}
                alt="Final prototype screens set 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Branding & Visual Identity */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">
          Branding & Visual Identity
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            The branding reflects growth, nature, and community connection
            through earthy greens and a friendly, approachable visual language.
          </p>

          {/* Logo Evolution */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-lg">
              Logo Evolution
            </h3>
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
              <img
                src={imgEvolucaoLogo}
                alt="Cultive logo evolution"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Color System */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                Primary Colors
              </h3>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <img
                  src={imgCores}
                  alt="Primary color palette"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                Secondary Colors
              </h3>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <img
                  src={imgSecondaryColor}
                  alt="Secondary color palette"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">Key Features</h2>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#e8f4e8] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg">
                Walking Distance Filter
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Automatically shows only cultural activities within comfortable
                walking distance (5-15 minutes on foot), promoting sustainable
                mobility and spontaneous discovery.
              </p>
            </div>

            <div className="bg-[#e8f4e8] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg">
                Neighborhood Map
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Visual map highlighting cultural venues, events, and points of
                interest in your neighborhood, helping you discover hidden gems
                nearby.
              </p>
            </div>

            <div className="bg-[#e8f4e8] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg">
                Activity Categories
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Browse by type of cultural activity—art exhibitions, live music,
                theater, workshops, community events—tailored to your interests.
              </p>
            </div>

            <div className="bg-[#e8f4e8] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg">
                Well-being Tracker
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Track your cultural walks and see how engaging with your
                neighborhood enriches your well-being and connection to place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

