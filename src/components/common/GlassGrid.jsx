"use client";
import React from "react";

export default function GlassGrid({ cards, count = 4 }) {
  const topCards = cards.slice(0, count); // dynamically limit cards

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">

        {topCards.map((card) => (
          <div key={card.id} className="relative flex justify-center">

            {/* Floating Logo */}
            <div className="absolute -top-0.1 left-2 z-20">
              <img
                src={card.logo}
                alt="logo"
                className="w-16 h-16 rounded-full object-fit shadow-xl"
              />
            </div>

            {/* Card */}
            <div
              className="
                mt-12 w-full aspect- bg-white/20 backdrop-blur-xl 
                border border-white/30 rounded-2xl shadow-lg p-5
                transition-all duration-500
                hover:shadow-purple-500/50 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center
              "
            >
              {/* Header */}
              <h2 className="text-4xl font-semibold text-center text-purple-300 mb-3 mt-6">
                {card.title}
              </h2>

              {/* Body */}
              <p className="text-white/70 text-sm text-center mb-4 max-w-xs">
                {card.description}
              </p>

              {/* Footer */}
              <div className="flex justify-center">
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
