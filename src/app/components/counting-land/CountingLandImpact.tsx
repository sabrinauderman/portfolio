import imgScreenshot1 from "@/assets/82501225b201f9ad872a149226a078a83874605f.png";
import imgScreenshot2 from "@/assets/1596e24d8ea64f97d040db32dd558f92a2278579.png";
import imgScreenshot3 from "@/assets/3891c7a01643a6b53de63bad33fbf7441c15c16b.png";

export function CountingLandImpact() {
  return (
    <div className="space-y-32">
      {/* Testing & Validation */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">
          Testing & Validation
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We conducted extensive user testing sessions with children with Down
            Syndrome and their families to validate our design decisions and
            gather real-world feedback.
          </p>

          {/* User Testing Photos */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={imgScreenshot1}
                alt="User testing session 1"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={imgScreenshot2}
                alt="User testing session 2"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={imgScreenshot3}
                alt="User testing session 3"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#f3eef2] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg">
                Usability Testing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Children were able to navigate the app independently and
                completed counting tasks with minimal guidance.
              </p>
            </div>

            <div className="bg-[#f3eef2] rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg">
                Educational Value
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Educators confirmed the app aligned with curriculum goals and
                supported diverse learning styles effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">Key Outcomes</h2>

        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-5xl font-light text-[#8b6b87]">100%</div>
              <p className="text-gray-700 leading-relaxed">
                Children successfully completed counting activities without
                adult assistance
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="text-5xl font-light text-[#8b6b87]">95%</div>
              <p className="text-gray-700 leading-relaxed">
                Parents reported increased engagement with math learning at home
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="text-5xl font-light text-[#8b6b87]">Free</div>
              <p className="text-gray-700 leading-relaxed">
                Accessible educational tool for all families, removing financial
                barriers
              </p>
            </div>
          </div>

          {/* Additional outcomes */}
          <div className="space-y-6 mt-12">
            <div className="bg-[#f3eef2] rounded-2xl p-8 shadow-sm">
              <p className="text-gray-800 leading-relaxed">
                <span className="font-semibold">Inclusive by design:</span> The
                app works equally well for neurotypical children and children
                with Down Syndrome, promoting inclusive learning environments.
              </p>
            </div>

            <div className="bg-[#f3eef2] rounded-2xl p-8 shadow-sm">
              <p className="text-gray-800 leading-relaxed">
                <span className="font-semibold">Real-world connection:</span>{" "}
                Using familiar objects helped children transfer counting skills
                to everyday situations outside the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings & Reflections */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">Reflections</h2>

        <div className="space-y-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                What worked well
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#8b6b87] mt-1">✓</span>
                  <span>
                    Collaborative approach between UX design and development led
                    to a technically feasible and user-friendly solution
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b6b87] mt-1">✓</span>
                  <span>
                    Early involvement of parents and educators ensured the app
                    met real educational needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b6b87] mt-1">✓</span>
                  <span>
                    Iterative testing with children helped us refine
                    interactions to be age-appropriate and engaging
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
                  <span className="text-[#8b6b87] mt-1">⚡</span>
                  <span>
                    Balancing educational rigor with playful design required
                    constant iteration and stakeholder feedback
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b6b87] mt-1">⚡</span>
                  <span>
                    Testing during the pandemic required creative remote testing
                    methods to engage young participants
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8b6b87] mt-1">⚡</span>
                  <span>
                    Designing for diverse cognitive abilities while keeping the
                    interface simple and uncluttered
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">Looking Forward</h2>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            It is also important to highlight that this project was carried out
            during the pandemic. Therefore, finding users and executing tests
            online, making sure they would understand the message in testing,
            was certainly a challenge. In the end, the application was
            successful, thanks to the resilience and persistence of the team.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            This project reinforced my belief that inclusive design benefits
            everyone. By designing for children with Down Syndrome, we created
            an educational tool that works beautifully for all young learners,
            proving that accessibility and great design go hand in hand.
          </p>
        </div>
      </section>

      {/* User Feedback - Quote Cards */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">What Users Said</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quote 1 */}
          <div className="bg-[#f5f6f6] rounded-2xl p-8 shadow-sm relative">
            <div className="absolute top-4 left-6 text-4xl text-[#8b6b87] opacity-20 font-serif">
              "
            </div>
            <p className="text-lg italic text-gray-800 leading-relaxed relative z-10 pt-4">
              My daughter was super happy, it is a very nice game!
            </p>
            <p className="text-sm text-gray-600 mt-4 font-semibold">
              — Anna Yamato
            </p>
            <div className="absolute bottom-4 right-6 text-4xl text-[#8b6b87] opacity-20 font-serif">
              "
            </div>
          </div>

          {/* Quote 2 */}
          <div className="bg-[#f5f6f6] rounded-2xl p-8 shadow-sm relative">
            <div className="absolute top-4 left-6 text-4xl text-[#8b6b87] opacity-20 font-serif">
              "
            </div>
            <p className="text-lg italic text-gray-800 leading-relaxed relative z-10 pt-4">
              I loved it!!! We need it for our kids with Down Syndrome
            </p>
            <p className="text-sm text-gray-600 mt-4 font-semibold">
              — Neusa Tabaka
            </p>
            <div className="absolute bottom-4 right-6 text-4xl text-[#8b6b87] opacity-20 font-serif">
              "
            </div>
          </div>

          {/* Quote 3 */}
          <div className="bg-[#f5f6f6] rounded-2xl p-8 shadow-sm relative">
            <div className="absolute top-4 left-6 text-4xl text-[#8b6b87] opacity-20 font-serif">
              "
            </div>
            <p className="text-lg italic text-gray-800 leading-relaxed relative z-10 pt-4">
              Very interesting app. This tip was amazing
            </p>
            <p className="text-sm text-gray-600 mt-4 font-semibold">
              — Marcia Cristine Coelho
            </p>
            <div className="absolute bottom-4 right-6 text-4xl text-[#8b6b87] opacity-20 font-serif">
              "
            </div>
          </div>

          {/* Quote 4 */}
          <div className="bg-[#f5f6f6] rounded-2xl p-8 shadow-sm relative">
            <div className="absolute top-4 left-6 text-4xl text-[#8b6b87] opacity-20 font-serif">
              "
            </div>
            <p className="text-lg italic text-gray-800 leading-relaxed relative z-10 pt-4">
              Let's hurry into making an Android version!
            </p>
            <p className="text-sm text-gray-600 mt-4 font-semibold">
              — Camila de Moura Chagas
            </p>
            <div className="absolute bottom-4 right-6 text-4xl text-[#8b6b87] opacity-20 font-serif">
              "
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

