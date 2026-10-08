import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import gameplayVideo from "@/assets/tiny-rush/gameplay.mp4";
import gameplayPoster from "@/assets/tiny-rush/gameplay-poster.jpg";
import { ACCENT, GAME_URL } from "./shared";

export function TinyRushHero() {
  const [playing, setPlaying] = useState(false);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const videoRef = useRef<HTMLVideoElement>(null);

  // React sets `muted` only as a property; iOS Safari also wants the attribute to autoplay.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.setAttribute("muted", "");
    v.muted = true;
    if (!reduceMotion) v.play().catch(() => {});
  }, [playing, reduceMotion]);

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

      {/* Gameplay loop on every screen; on desktop it doubles as the entry to the playable embed. */}
      <div className="mt-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
          {playing ? (
            <iframe
              src={GAME_URL}
              title="Tiny Rush, playable"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
            />
          ) : (
            <>
              <video
                ref={videoRef}
                src={gameplayVideo}
                poster={gameplayPoster}
                autoPlay={!reduceMotion}
                controls={reduceMotion}
                muted
                loop
                playsInline
                aria-label="Tiny Rush gameplay: collecting apples, a full cargo, deliveries and a win"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 w-full h-full hidden md:block"
                aria-label="Play Tiny Rush here"
              >
                <span
                  className="absolute right-6 bottom-6 rounded-full px-6 py-3 text-white text-base tracking-wide shadow-lg transition-transform group-hover:scale-105"
                  style={{ backgroundColor: ACCENT }}
                >
                  ▶ Play here
                </span>
              </button>
            </>
          )}
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Gameplay capture of a full match, cut to the opening and the final
          rush. The orange truck is driven by a copy of the rival AI.
          <span className="hidden md:inline">
            {" "}Click to play it yourself; click inside the game once so it
            receives your keyboard. Esc pauses.
          </span>
        </p>
      </div>
    </section>
  );
}
