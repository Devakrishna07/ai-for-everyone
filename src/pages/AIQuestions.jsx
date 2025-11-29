// src/pages/AIQuestions.jsx
import { useState } from "react";
import aiQuestions from "../data/questions";
import AIChatbox from "../components/ui/AIChatbox";

export default function AIQuestions() {
  const [expanded, setExpanded] = useState(false);
  const [expandedAnswer, setExpandedAnswer] = useState(null);

  const firstFive = aiQuestions.slice(0, 5);
  const nextTen = aiQuestions.slice(5, 15);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 to-black text-white px-6 py-10 pt-10">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* LEFT SIDE — QUESTIONS */}
        <div className="w-full lg:w-2/3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 pt-8 shadow-xl">

          <h1 className="text-3xl font-bold text-center mb-6">
            Common AI Doubts
          </h1>

          {/* FIRST 5 QUESTIONS */}
          <div className="space-y-4 mb-6">
            {firstFive.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/5 border border-white/10 
                hover:shadow-purple-500/40 hover:shadow-md transition-all cursor-pointer"
                onClick={() =>
                  setExpandedAnswer(expandedAnswer === index ? null : index)
                }
              >
                <h2 className="text-lg font-semibold">{item.question}</h2>

                {expandedAnswer === index && (
                  <p className="text-sm opacity-80 mt-2">{item.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* EXPAND BUTTON */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full py-3 bg-purple-700 hover:bg-purple-900 rounded-xl transition-all"
          >
            {expanded ? "Show Less" : "Show More Questions"}
          </button>

          {/* EXPANDED SECTION */}
          <div
            className={`transition-all overflow-hidden ${
              expanded ? "max-h-[400px] mt-6" : "max-h-0"
            }`}
          >
            <div className="max-h-[380px] overflow-y-scroll no-scrollbar space-y-4">
              {nextTen.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 
                  hover:shadow-purple-500/40 hover:shadow-md transition-all cursor-pointer"
                  onClick={() =>
                    setExpandedAnswer(
                      expandedAnswer === `extra-${index}` ? null : `extra-${index}`
                    )
                  }
                >
                  <h2 className="text-lg font-semibold">{item.question}</h2>

                  {expandedAnswer === `extra-${index}` && (
                    <p className="text-sm opacity-80 mt-2">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mailto */}
          <button
            onClick={() =>
              (window.location.href = "mailto:team@ai-for-everyone.org")
            }
            className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-xl transition-all"
          >
            Ask the AI-For-Everyone Team
          </button>
        </div>

        {/* RIGHT SIDE — CHAT BOX */}
        <div className="w-full lg:w-1/3">
          <AIChatbox />
        </div>
      </div>
    </div>
  );
}
