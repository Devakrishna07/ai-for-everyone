// src/components/StoryGrid.jsx
import React from "react";
import StoryCard from "./StoryCard";

export default function StoryGrid({ stories, onCardClick }) {
  if (!Array.isArray(stories) || stories.length === 0) {
    return (
      <div className="mt-10 text-center text-sm sm:text-base text-slate-200/70">
        No stories found. Try a different search or age filter.
      </div>
    );
  }

  return (
    <section
      className="
        w-full
        mt-8 grid gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3
      "
    >
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          story={story}
          onClick={onCardClick}
        />
      ))}
    </section>
  );
}
