import imgMockup from "@/assets/a1227e919c9cc1a5b6e06ba38854d14808539b8f.png";

export function CultiveImpact() {
  return (
    <div className="space-y-32">
      {/* Testing & Validation */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">
          Testing & Validation
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We conducted extensive usability testing with residents from
            different neighborhoods, validating both the walkability concept and
            the app's ability to surface relevant local cultural experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#e8f4e8] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg">
                User Feedback
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Testers appreciated the walking-distance filter and felt more
                connected to their neighborhoods after discovering previously
                unknown cultural venues.
              </p>
            </div>

            <div className="bg-[#e8f4e8] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg">
                Behavioral Changes
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Users reported walking more often and feeling more engaged with
                their local community through attending nearby cultural
                activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Mockup */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">Final Product</h2>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            The final Cultive app brings together all the research insights and
            design iterations into a cohesive, user-friendly experience that
            helps people discover and engage with their neighborhood's cultural
            life.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
            <img
              src={imgMockup}
              alt="Cultive app final mockup"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">Key Outcomes</h2>

        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-5xl font-light text-[#6b8e6b]">Walkable</div>
              <p className="text-gray-700 leading-relaxed">
                Promoting foot exploration and reducing reliance on cars for
                cultural engagement
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="text-5xl font-light text-[#6b8e6b]">
                Connected
              </div>
              <p className="text-gray-700 leading-relaxed">
                Helping people feel more connected to their neighborhood and
                local culture
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="text-5xl font-light text-[#6b8e6b]">
                Well-being
              </div>
              <p className="text-gray-700 leading-relaxed">
                Supporting mental and physical health through cultural
                engagement and walking
              </p>
            </div>
          </div>

          {/* Additional outcomes */}
          <div className="space-y-6 mt-12">
            <div className="bg-[#e8f4e8] rounded-2xl p-8 shadow-sm">
              <p className="text-gray-800 leading-relaxed">
                <span className="font-semibold">Hyperlocal discovery:</span> The
                app successfully surfaces cultural opportunities that users
                would have otherwise missed, enriching their understanding of
                their own neighborhood.
              </p>
            </div>

            <div className="bg-[#e8f4e8] rounded-2xl p-8 shadow-sm">
              <p className="text-gray-800 leading-relaxed">
                <span className="font-semibold">Sustainable mobility:</span> By
                focusing on walkable activities, Cultive encourages more
                sustainable patterns of cultural engagement and reduces urban
                transportation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings & Reflections */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">Reflections</h2>

        <div className="space-y-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                What worked well
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#6b8e6b] mt-1">✓</span>
                  <span>
                    The walking-distance filter resonated strongly with users
                    and became the defining feature
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6b8e6b] mt-1">✓</span>
                  <span>
                    Map-first design made spatial discovery intuitive and
                    engaging
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6b8e6b] mt-1">✓</span>
                  <span>
                    Connecting culture with well-being helped users see the
                    app's broader value beyond event listings
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Challenges overcome
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#6b8e6b] mt-1">⚡</span>
                  <span>
                    Balancing hyperlocal focus with enough content to keep the
                    app useful required careful curation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6b8e6b] mt-1">⚡</span>
                  <span>
                    Defining "cultural activity" broadly enough to be inclusive
                    while maintaining relevance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6b8e6b] mt-1">⚡</span>
                  <span>
                    Ensuring the walking-distance calculation was accurate
                    across different neighborhood types
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#6b8e6b]">Looking Forward</h2>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Cultive taught me the power of designing for hyperlocal experiences
            and how technology can strengthen rather than replace physical
            community connections. By emphasizing walkability and neighborhood
            culture, the app encourages more sustainable and meaningful ways of
            engaging with our surroundings.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            This project reinforced my belief that good design considers not
            just usability, but broader impacts on well-being, sustainability,
            and community. Creating tools that help people rediscover and
            appreciate their immediate environment is an exciting direction for
            location-based design.
          </p>

          {/* Quote */}
          <div className="bg-[#f5f6f6] rounded-2xl p-10 shadow-sm relative mt-12">
            <div className="absolute top-6 left-6 text-6xl text-[#6b8e6b] opacity-20 font-serif">
              "
            </div>
            <p className="text-2xl italic text-gray-800 font-light leading-relaxed text-center relative z-10">
              The best neighborhoods are those we truly know—where we walk to
              cultural venues, recognize faces, and feel a sense of belonging.
              Technology should help us cultivate that connection, not replace
              it.
            </p>
            <div className="absolute bottom-6 right-6 text-6xl text-[#6b8e6b] opacity-20 font-serif">
              "
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
