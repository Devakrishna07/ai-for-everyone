// src/components/StoryCard.jsx
import React from "react";

export default function StoryCard({ story, onClick }) {
  if (!story) return null;

  const preview =
    story.story && story.story.length > 180
      ? story.story.slice(0, 177) + "..."
      : story.story;

  return (
    <button
      type="button"
      onClick={() => onClick?.(story)}
      className="
        group relative flex flex-col justify-between text-left
        w-full
        rounded-3xl border border-white/15
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl backdrop-saturate-150
        p-5 sm:p-6
        shadow-lg shadow-black/30
        transition-all duration-300
        hover:-translate-y-1
        hover:border-purple-400/80
        hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-purple-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-slate-900
      "
    >
      {/* Age pill */}
      <div className="absolute right-4 top-4">
        <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-purple-200">
          {story.ageGroupLabel || ""}
        </span>
      </div>

      <header className="space-y-1 pr-16">
        <h3 className="text-lg sm:text-xl font-semibold text-white">
          {story.title}
        </h3>
        <p className="text-sm text-purple-100/80">
          {story.name} · {story.role}
        </p>
        {story.location && (
          <p className="text-xs text-slate-200/70">{story.location}</p>
        )}
      </header>

      <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-100/90">
        {preview}
      </p>

      {Array.isArray(story.toolsUsed) && story.toolsUsed.length > 0 && (
        <footer className="mt-4 flex flex-wrap gap-2">
          {story.toolsUsed.map((tool) => (
            <span
              key={tool}
              className="
                rounded-full border border-white/20
                bg-white/10 px-3 py-1
                text-xs text-purple-100/90
                backdrop-blur-lg
              "
            >
              {tool}
            </span>
          ))}
        </footer>
      )}

      {/* CTA hint */}
      <div
        className="
          mt-5 inline-flex items-center gap-1 text-xs sm:text-sm
          text-purple-200/80
        "
      >
        <span className="group-hover:underline">Tap to read full story</span>
        <span className="text-base leading-none group-hover:translate-x-0.5 transition-transform">
          ↗
        </span>
      </div>
    </button>
  );
}
