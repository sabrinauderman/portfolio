import React from "react";

export const ACCENT = "#e8741a";
export const RIVAL = "#2f6fd6";
export const GAME_URL = `${import.meta.env.BASE_URL}games/tiny-rush/index.html`;

export function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 mb-8">
      {eyebrow && (
        <p className="text-xs uppercase tracking-wider" style={{ color: ACCENT }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-light tracking-tight text-gray-900">
        {children}
      </h2>
    </div>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">{children}</p>
  );
}

/** A phone screenshot shown in a simple device frame. */
export function Phone({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="space-y-3">
      <div className="mx-auto w-full max-w-[260px] rounded-[2.2rem] bg-gray-900 p-2 shadow-xl">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto block rounded-[1.7rem]"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-gray-500 text-center leading-relaxed max-w-[280px] mx-auto">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** A desktop / tablet screenshot in a light browser frame. */
export function Browser({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="space-y-3">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        </div>
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
      </div>
      {caption && (
        <figcaption className="text-sm text-gray-500 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Card({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "default" | "accent";
}) {
  return (
    <div
      className="bg-white border rounded-lg p-6 space-y-2"
      style={{ borderColor: tone === "accent" ? `${ACCENT}55` : "#f3f4f6" }}
    >
      <h3 className="text-lg text-gray-900">{title}</h3>
      <div className="text-gray-600 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 space-y-3">
      <p className="text-3xl font-light tracking-tight" style={{ color: ACCENT }}>
        {value}
      </p>
      <p className="text-sm text-gray-600 leading-relaxed">{label}</p>
    </div>
  );
}
