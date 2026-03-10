import imgGroup1 from "@/assets/652cce5e30f6784938f463ead04f0255ec50f7c5.png";
import imgScreenshot from "@/assets/4ffafd2e2e4138d855f963f97a2a0d2a617c69c3.png";
import imgMoscow from "@/assets/a4b0233755205a3bb1d3cf424f7bf07d009d7f33.png";
import imgLowFidelity from "@/assets/caef2232e758050986e8f63c721b598c18abbe58.png";
import imgGroup521 from "@/assets/ab0f4b863854bd728d5b76cf342eb0eebf79a85c.png";
import imgFluxoFigma from "@/assets/59368b6ed50d45faede184355d379acd97639e1a.png";
import imgGroup524 from "@/assets/086527bb5316a9b4a2dee4536351206e09b5b62d.png";
import imgTucano from "@/assets/55b48afed90e893de367a609a0fa2829dc0a5b1c.png";
import imgAtivo from "@/assets/5dadbdaa955ee82c49cd347b30493b2a6dc0352c.png";
import imgGroup523 from "@/assets/a460adee4273e946f408829921007cb566753fd8.png";
import imgGroup359 from "@/assets/5561332392a68f1bb9983eb2244b1127d405eb67.png";

export function CountingLandDesign() {
  return (
    <div className="space-y-32">
      {/* Design Principles */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">
          Design Principles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#f3eef2] flex items-center justify-center">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">
              Playful Learning
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Transform math education into an engaging game experience that
              motivates children to explore and learn.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#f3eef2] flex items-center justify-center">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">
              Visual Clarity
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Use clear, recognizable objects from children's daily lives to
              make abstract concepts concrete and understandable.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#f3eef2] flex items-center justify-center">
              <span className="text-2xl">♿</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">
              Inclusive Interface
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Design for diverse cognitive abilities while maintaining appeal
              for all children learning to count.
            </p>
          </div>
        </div>
      </section>

      {/* User Flow Diagram */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">
          Information Architecture
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            We mapped out the entire user journey, ensuring each step was
            intuitive and age-appropriate for our target audience.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src={imgGroup1}
              alt="Information architecture diagram"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* MoSCoW Prioritization */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">
          Feature Prioritization
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Using the MoSCoW method, we prioritized features to ensure the MVP
            focused on core learning objectives.
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

      {/* Wireframes & Low-Fidelity Prototypes */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">
          Wireframes & Early Concepts
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We started with low-fidelity wireframes to rapidly test different
            interaction patterns and validate our concepts with users.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <img
                src={imgLowFidelity}
                alt="Low-fidelity wireframes"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4">
              <img
                src={imgGroup521}
                alt="Wireframe iterations"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* High-Fidelity Designs */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">
          High-Fidelity Designs
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            The final designs feature colorful, engaging interfaces with
            familiar objects that children can easily recognize and count.
          </p>

          {/* User Flow */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Complete User Flow
            </h3>
            <img
              src={imgFluxoFigma}
              alt="Complete user flow in Figma"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Key Screens Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <img
                  src={imgGroup524}
                  alt="Main game interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Main counting activity interface
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <img
                  src={imgScreenshot}
                  alt="Onboarding experience"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Welcome and onboarding experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Elements */}
      <section className="space-y-10">
        <h2 className="text-3xl font-light text-[#8b6b87]">
          Countable Elements
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We designed a variety of countable objects from children's everyday
            reality, making math relatable and fun.
          </p>

          {/* Objects showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
              <img
                src={imgTucano}
                alt="Toucan counting element"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
              <img
                src={imgAtivo}
                alt="Another counting element"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
              <img
                src={imgGroup523}
                alt="Counting game element"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
              <img
                src={imgGroup359}
                alt="Interactive counting object"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

