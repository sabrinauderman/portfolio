import React from "react";
import imgMoodboard from "@/assets/b0e7678b3da43a3419ebf445d11b14fb2a77d9c2.png";
import imgMoscow from "@/assets/0083b8764db051a8486e768edd3588ef52ecd9a3.png";

export function CultiveResearch() {
  return (
    <div className="space-y-32">
      {/* Project Origin */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">Project Origin</h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Cultive emerged from observing how people were disconnected from the
            cultural life happening in their own neighborhoods. With busy
            routines and digital distractions, many residents miss out on
            enriching cultural experiences available just steps from their
            homes.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our team at Apple Developer Academy wanted to create an app that
            would reconnect people with their local cultural scene, promoting
            walkable access to activities that enhance well-being and community
            connection.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-light text-[#6b8e6b]">Challenge</h2>
          <span className="text-2xl">🎭</span>
        </div>

        <div className="bg-[#e8f4e8] rounded-2xl p-8 space-y-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed">
                People often feel disconnected from their neighborhoods and miss
                local cultural opportunities because information is scattered
                across different platforms, making it hard to discover what's
                happening nearby.
              </p>
              <p className="font-semibold text-gray-900">
                How might we help people discover and engage with cultural
                activities in their neighborhood, promoting walkability and a
                deeper connection to where they live?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-light text-[#6b8e6b]">Context</h2>
          <span className="text-2xl">🏘️</span>
        </div>

        <div className="bg-[#e8f4e8] rounded-2xl p-8 space-y-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">🚶</span>
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed">
                Walkable neighborhoods with rich cultural life contribute
                significantly to well-being and community cohesion. However,
                existing platforms focus on city-wide events, overlooking the
                hyperlocal cultural activities that make neighborhoods unique.
              </p>
              <p className="font-semibold text-gray-900">
                How can we create a platform that highlights walkable cultural
                experiences and helps people learn about their own neighborhood?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Inspiration & Moodboard */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">
          Design Inspiration
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We explored visual directions that reflected the vibrant, diverse
            nature of local cultural activities while maintaining an
            approachable, welcoming aesthetic.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src={imgMoodboard}
              alt="Moodboard and design inspiration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* MoSCoW Prioritization */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">
          Feature Prioritization
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Using the MoSCoW method, we prioritized features to ensure the MVP
            focused on core discovery and walkability features.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src={imgMoscow}
              alt="MoSCoW prioritization matrix"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">Key Insights</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#e8f4e8] rounded-2xl p-6 space-y-3 shadow-sm">
            <h3 className="font-semibold text-gray-900">Proximity Matters</h3>
            <p className="text-gray-700 leading-relaxed">
              People are more likely to attend cultural activities they can walk
              to, but struggle to discover what's available in their immediate
              neighborhood.
            </p>
          </div>

          <div className="bg-[#e8f4e8] rounded-2xl p-6 space-y-3 shadow-sm">
            <h3 className="font-semibold text-gray-900">
              Well-being Connection
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Engaging with local culture enhances mental well-being and creates
              a sense of belonging to one's community.
            </p>
          </div>

          <div className="bg-[#e8f4e8] rounded-2xl p-6 space-y-3 shadow-sm">
            <h3 className="font-semibold text-gray-900">
              Scattered Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cultural events are promoted across multiple platforms, making it
              time-consuming to find relevant, nearby activities.
            </p>
          </div>

          <div className="bg-[#e8f4e8] rounded-2xl p-6 space-y-3 shadow-sm">
            <h3 className="font-semibold text-gray-900">
              Neighborhood Identity
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Users want to learn more about their neighborhood's cultural
              character and feel more connected to where they live.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

