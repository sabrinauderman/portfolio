import imgPageIcon from "@/assets/58a92523a8ea50c19a5a5c799e02995e6a68be42.png";
import { Link } from "react-router";

export function CountingLandHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="space-y-6">
        {/* Back to Projects Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>←</span>
          <span>Back to Projects</span>
        </Link>

        <div className="space-y-2">
          <h1 className="text-6xl font-light tracking-tight text-gray-900">
            Counting Land
          </h1>
          <p className="text-sm italic text-gray-500">Terra da Contagem</p>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          An iPad educational application designed to teach mathematics to
          children with Down Syndrome through playful, interactive activities
          centered around countable elements from their everyday reality.
        </p>
      </div>
    </section>
  );
}

