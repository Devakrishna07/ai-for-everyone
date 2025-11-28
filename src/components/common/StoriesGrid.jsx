"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function StoriesGrid({ stories }) {
  const navigate = useNavigate();

  // Show only the top 4
  const topStories = stories.slice(0, 4);

  return (
    <div className="w-full py-12 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl px-6">
        {topStories.map((story, index) => (
          <div
            key={index}
            className="
              flex items-start gap-4 p-6 rounded-2xl 
              bg-white/5 backdrop-blur-xl border border-white/10 
              transition-all duration-300
              hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/20
            "
          >
            {/* Avatar */}
            <img
              src={story.avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Content */}
            <div>
              <h3 className="text-white text-xl font-semibold">{story.name}</h3>
              <p className="text-blue-300 text-sm mb-3">{story.role}</p>

              <p className="text-white/80 leading-relaxed">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <button
        onClick={() => navigate("/stories")}
        className="
          mt-10 px-8 py-3 rounded-full text-white font-semibold
          bg-gradient-to-r from-blue-500 to-blue-700
          shadow-md hover:shadow-blue-400/40
          transition-all duration-500
          hover:scale-105 active:scale-95
          flex items-center gap-2
        "
      >
        See More
        <span className="text-xl animate-bounce">🔗</span>
      </button>
    </div>
  );
}
