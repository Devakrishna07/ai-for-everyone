// src/components/StoryModal.jsx
import React from "react";

export default function StoryModal({ isOpen, story, onClose }) {
  if (!isOpen || !story) return null;

  return (
    <div
      className="
        w-screen
        fixed inset-0 z-50 flex items-center justify-center sm:px-6
      "
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative max-h-[85vh] w-full max-w-xl
          rounded-3xl border border-white/20
          bg-white/10
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(168,85,247,0.6)]
          px-5 py-5 sm:px-6 sm:py-6
          overflow-hidden
        "
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute right-4 top-4 rounded-full
            bg-black/40 px-2 py-1 text-xs
            text-slate-100
            hover:bg-black/70
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-purple-400
          "
        >
          ✕
        </button>

        <div className="pr-3 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="space-y-2 mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              {story.title}
            </h2>
            <p className="text-sm text-purple-100/90">
              {story.name} · {story.role}
            </p>
            {story.location && (
              <p className="text-xs text-slate-200/70">{story.location}</p>
            )}

            {story.ageGroupLabel && (
              <span className="inline-flex mt-1 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-purple-200">
                {story.ageGroupLabel}
              </span>
            )}
          </div>

          {/* Full story */}
          <p className="text-sm sm:text-base leading-relaxed text-slate-100/90 whitespace-pre-line">
            {story.story}
          </p>

          {/* Tools */}
          {Array.isArray(story.toolsUsed) && story.toolsUsed.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
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
            </div>
          )}

          {/* Footer button */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="
                inline-flex items-center gap-2
                rounded-full border border-purple-400/80
                bg-purple-500/30 px-4 py-2
                text-xs sm:text-sm font-medium text-white
                backdrop-blur-xl
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]
                hover:bg-purple-500/50
              "
            >
              Close
              <span className="text-base leading-none">💜</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
