import React from "react";

import ctrlZImage from "@/assets/9485a0016410605ce824e62572d37418cbfccffd.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

export function Hero() {
  console.log("CTRL+Z Image:", ctrlZImage);
  console.log("CTRL+Z Image type:", typeof ctrlZImage);

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
            CTRL+Z
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          A collaborative platform built for the design community, using AI to
          connect senior and junior designers for real-world project
          collaborations.
        </p>

        {/* Project Image */}
        <div className="pt-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ImageWithFallback
              src={ctrlZImage}
              alt="CTRL+Z project preview showing Find a Project interface"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

