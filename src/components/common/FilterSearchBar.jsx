// src/components/FilterSearchBar.jsx
import React from "react";

export default function FilterSearchBar({
  ageGroups = [],
  selectedAgeGroup,
  onAgeChange,
  searchQuery,
  onSearchChange,
}) {
  return (
    <section className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Search input */}
      <div className="relative w-full md:max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder="Search by name, role, story, or tool..."
          className="
            w-full rounded-2xl border border-white/20
            bg-white/10 px-4 py-2.5 pr-10
            text-sm text-slate-50
            placeholder:text-slate-300/60
            backdrop-blur-xl
            focus:border-purple-400 focus:outline-none
            focus:ring-2 focus:ring-purple-500/60
          "
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-200/70">
          🔍
        </span>
      </div>

      {/* Age group filter buttons */}
      <div className="flex flex-wrap gap-2">
        {ageGroups.map((group) => {
          const isActive = selectedAgeGroup === group.id;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => onAgeChange?.(group.id)}
              className={`
                rounded-full border px-3.5 py-1.5 text-xs sm:text-sm
                backdrop-blur-xl transition-all duration-200
                ${
                  isActive
                    ? "border-purple-400 bg-purple-500/40 text-white shadow-[0_0_20px_rgba(168,85,247,0.9)]"
                    : "border-white/20 bg-white/10 text-slate-100 hover:border-purple-300 hover:bg-purple-500/25 hover:shadow-[0_0_18px_rgba(168,85,247,0.7)]"
                }
              `}
            >
              {group.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
