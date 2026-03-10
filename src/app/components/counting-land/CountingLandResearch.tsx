import imgGroup367 from "@/assets/efeebaf014546719e9b94eb0b2275f71e53611e7.png";
import imgGroup366 from "@/assets/4edbefbef20817dcba56a5aec4a1ad9bf227c7bf.png";

export function CountingLandResearch() {
  return (
    <div className="space-y-32">
      {/* Project Origin */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">Project Origin</h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            This project was inspired by the winning math-related playground of
            WWDC21 challenge by one of the team's developers, Matheus, and my
            proposal for Down Syndrome children socialization. We combined
            proposals because we believe education is a means to socialization,
            given that the school environment is one of the first social
            interactions in a person's life.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Therefore, once <span className="italic">Terra da Contagem</span>{" "}
            was created, we could approach one's socialization through
            education, in a way that content learning could be taught the same
            way for kids, whether or not they have Down Syndrome. Thus,
            promoting inclusivity and, consequently, socialization of kids with
            Down Syndrome.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-light text-[#8b6b87]">Challenge</h2>
          <span className="text-2xl">💪</span>
        </div>

        <div className="bg-[#f3eef2] rounded-2xl p-8 space-y-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed">
                Many traditional schools are not keen on modernizing their
                teaching methodologies, which results in rejection of kids with
                intellectual disability. Parents, therefore, try methods and
                alternatives on their own, adapting what neurotypical children
                have at their disposal, which is often way cheaper than the
                adapted solutions available.
              </p>
              <p className="font-semibold text-gray-900">
                How can we propose a free app for everyone to learn basic
                counting, that's adjusted to kids with Down Syndrome cognitive
                capabilities?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-light text-[#8b6b87]">Context</h2>
          <span className="text-2xl">🔧</span>
        </div>

        <div className="bg-[#f3eef2] rounded-2xl p-8 space-y-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">📚</span>
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed">
                Many traditional schools are not keen on modernizing their
                teaching methodologies, which results in rejection of kids with
                intellectual disability. Parents, therefore, try methods and
                alternatives on their own, adapting what neurotypical children
                have at their disposal.
              </p>
              <p className="font-semibold text-gray-900">
                Thus, we asked ourselves, "Why does the teaching method matter?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">User Research</h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We interviewed specialists, parents, and educators to understand the
            learning challenges and opportunities for children with Down
            Syndrome.
          </p>

          {/* Research Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <img
                src={imgGroup367}
                alt="User research insights"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4">
              <img
                src={imgGroup366}
                alt="Research methodology"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-[#f3eef2] rounded-2xl p-6 space-y-3 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Learning Through Play
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Children with Down Syndrome learn best through interactive,
                playful activities that connect to their everyday experiences.
              </p>
            </div>

            <div className="bg-[#f3eef2] rounded-2xl p-6 space-y-3 shadow-sm">
              <h3 className="font-semibold text-gray-900">Visual & Tangible</h3>
              <p className="text-gray-700 leading-relaxed">
                Using countable objects from their reality helps bridge abstract
                mathematical concepts with concrete understanding.
              </p>
            </div>

            <div className="bg-[#f3eef2] rounded-2xl p-6 space-y-3 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Repetition Matters
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Consistent practice with varied contexts reinforces learning and
                builds confidence in mathematical skills.
              </p>
            </div>

            <div className="bg-[#f3eef2] rounded-2xl p-6 space-y-3 shadow-sm">
              <h3 className="font-semibold text-gray-900">Inclusive Design</h3>
              <p className="text-gray-700 leading-relaxed">
                What works for children with Down Syndrome often works well for
                all children, promoting universal access to education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

