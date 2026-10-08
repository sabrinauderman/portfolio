import React, { useState } from "react";
import { Link } from "react-router";
import desktopGameplay from "@/assets/tiny-rush/desktop-gameplay.jpg";
import { ACCENT, GAME_URL } from "./shared";

export function TinyRushHero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="space-y-6">
        <Link
          to="/projects/game-design"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>←</span>
          <span>Back to Game Design</span>
        </Link>

        <div className="space-y-2">
          <h1 className="text-6xl font-light tracking-tight text-gray-900">
            Tiny Rush
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          A 60-second casual race for mobile and desktop browsers. Collect
          apples, bring them home, and beat the blue truck. I designed it to be
          understood in under 10 seconds, with no tutorial, and to feel built
          for each screen instead of stretched to fit it.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={GAME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white text-sm uppercase tracking-wider transition-opacity hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            ▶ Play full screen
          </a>
          <span className="inline-flex items-center text-sm text-gray-500">
            Works on phone (joystick) and desktop (WASD / arrow keys)
          </span>
        </div>
      </div>

      {/* Playable embed: loads only when asked, so the page stays light. */}
      <div className="mt-12 hidden md:block">
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
          {playing ? (
            <iframe
              src={GAME_URL}
              title="Tiny Rush, playable"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 w-full h-full"
              aria-label="Play Tiny Rush here"
            >
              <img
                src={desktopGameplay}
                alt="Tiny Rush on desktop: score panels flank a square farm arena"
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-gray-900/25 group-hover:bg-gray-900/35 transition-colors" />
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-8 py-4 text-white text-lg tracking-wide shadow-lg transition-transform group-hover:scale-105"
                style={{ backgroundColor: ACCENT }}
              >
                ▶ Play here
              </span>
            </button>
          )}
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Click inside the game once so it receives your keyboard. Esc pauses.
        </p>
      </div>
    </section>
  );
}
