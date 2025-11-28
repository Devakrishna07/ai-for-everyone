import React, { useState } from "react";

function RecentQuestions({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="
        w-full
        bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-2xl p-6 md:p-8 text-white
      "
    >
      {/* Header */}
      <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-white/90">
        <span className="text-blue-400 text-2xl">❓</span>
        Recent Questions
      </h2>

      {/* Questions */}
      <div className="mt-6 space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="
              bg-white/5 border border-white/10 rounded-xl 
              transition-all duration-300
            "
          >
            {/* Question Row */}
            <button
              onClick={() => toggle(index)}
              className="
                w-full px-4 py-3 text-left text-sm sm:text-base 
                text-white/80 flex justify-between items-center
                hover:bg-white/10 hover:border-blue-400/20 
                transition-all
              "
            >
              {item.question}

              <span className="text-blue-300 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer (Expandable) */}
            <div
              className={`
                overflow-hidden transition-all duration-500 
                ${openIndex === index ? "max-h-40 opacity-100 p-4" : "max-h-0 opacity-0 p-0"}
              `}
            >
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentQuestions;
