"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProgramCardGrid({ cards }) {
  const navigate = useNavigate();

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              rounded-2xl p-8 backdrop-blur-xl bg-white/10 border border-white/20
              shadow-lg transition-all duration-500
              hover:shadow-purple-500/40 hover:shadow-2xl hover:bg-white/20
            "
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{card.icon}</div>

            {/* Title */}
            <h2 className="text-white text-2xl font-bold">{card.title}</h2>
            <p className="text-white/70 mb-6">{card.subtitle}</p>

            {/* Feature list */}
            <ul className="space-y-3 mb-6">
              {card.features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/90">
                  <span className="text-purple-300 text-xl">›</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => navigate(card.link)}
              className="
                w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800
                text-white font-semibold text-lg shadow-md
                hover:shadow-xl hover:shadow-blue-500/40
                transition-all duration-300
              "
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
