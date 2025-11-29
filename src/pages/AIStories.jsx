// src/pages/AIStoriesPage.jsx
import React, { useMemo, useState } from "react";
import { AI_STORIES, AGE_GROUPS } from "../data/aiStories";
import PageHeader from "../components/common/PageHeader";
import FilterSearchBar from "../components/common/FilterSearchBar";
import StoryGrid from "../components/common/StoryGrid";
import StoryModal from "../components/common/StoryModal";

// 👇 ADD THIS
import { useNavigate } from "react-router-dom";

export default function AIStoriesPage() {
  // 👇 ADD THIS
  const navigate = useNavigate();

  const [selectedAgeGroup, setSelectedAgeGroup] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStory, setActiveStory] = useState(null);

  const storiesWithLabels = useMemo(() => {
    const labelMap = AGE_GROUPS.reduce((acc, group) => {
      acc[group.id] = group.label;
      return acc;
    }, {});
    return AI_STORIES.map((story) => ({
      ...story,
      ageGroupLabel: labelMap[story.ageGroup] || story.ageGroup,
    }));
  }, []);

  const filteredStories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return storiesWithLabels.filter((story) => {
      const matchesAge =
        selectedAgeGroup === "all" || story.ageGroup === selectedAgeGroup;

      if (!q) return matchesAge;

      const searchable = [
        story.name,
        story.title,
        story.role,
        story.location,
        story.story,
        ...(story.toolsUsed || []),
      ]
        .filter(Boolean)
        .map((v) => String(v).toLowerCase());

      const matchesSearch = searchable.some((field) =>
        field.includes(q)
      );

      return matchesAge && matchesSearch;
    });
  }, [storiesWithLabels, selectedAgeGroup, searchQuery]);

  return (
    <div
      className="
      min-h-screen w-full 
      bg-gradient-to-br from-blue-900 to-black 
      text-slate-50
      "
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div
          className="
          relative rounded-[2rem] 
          border border-white/15
          bg-black/40 backdrop-blur-2xl
          shadow-[0_0_35px_rgba(15,23,42,0.7)]
          p-6 sm:p-10
          "
        >
          <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-purple-600/40 blur-3xl"></div>

          <PageHeader
            title="AI Stories — Real People, Real Impact"
            subtitle="Explore how AI has changed lives across different age groups. Search or filter to find relatable stories."
            highlights={[
              "Community Experiences",
              "Life-changing Moments",
              "Age Group Filters",
            ]}
          />

          <FilterSearchBar
            ageGroups={AGE_GROUPS}
            selectedAgeGroup={selectedAgeGroup}
            onAgeChange={setSelectedAgeGroup}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <StoryGrid stories={filteredStories} onCardClick={setActiveStory} />

          {/* CTA */}
          <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-200/80 text-sm text-center sm:text-left">
              Have a personal AI story to share with the world?
            </p>

            {/* 👇 UPDATED BUTTON WITH NAVIGATION */}
            <button
              onClick={() => navigate("/form")}
              className="
                rounded-full border border-purple-400/80 
                bg-purple-500/30 
                px-6 py-2 text-sm 
                hover:bg-purple-500/50 
                hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]
                transition-all backdrop-blur-xl
              "
            >
              Share Your Story ✨
            </button>
          </div>
        </div>
      </div>

      <StoryModal
        isOpen={!!activeStory}
        story={activeStory}
        onClose={() => setActiveStory(null)}
      />
    </div>
  );
}
