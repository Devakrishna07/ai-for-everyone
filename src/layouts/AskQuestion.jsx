import React from "react";
import { useNavigate } from "react-router-dom";
import RecentQuestions from "../components/common/RecentQuestions";

export const questionsList = [
  {
    question: "How does AI actually work?",
    answer:
      "AI works by analyzing large amounts of data and learning patterns from it. Using these patterns, AI can make predictions, answer questions, recognize images, or generate content.",
  },
  {
    question: "Is AI safe and can it be trusted?",
    answer:
      "AI is safe when it is built responsibly. It must be checked for bias, tested thoroughly, and monitored by humans. Transparency and ethical use ensure trust and safety.",
  },
  {
    question: "How is AI trained and why does bias happen?",
    answer:
      "AI is trained on datasets. If the dataset contains biased or unbalanced information, the AI may learn the same bias. Better datasets and fairness checks reduce these issues.",
  },
  {
    question: "Will AI replace human jobs?",
    answer:
      "AI changes how work is done, but it doesn’t replace all jobs. Instead, it automates repetitive tasks and creates new roles in creativity, problem-solving, and technology.",
  },
  {
    question: "Can I use AI for personal learning?",
    answer:
      "Yes! AI can recommend study material, explain concepts, summarize lessons, quiz you, and adapt to your learning speed—making learning more personalized.",
  },
  {
    question: "What are ethics in AI and why do they matter?",
    answer:
      "AI ethics focus on fairness, privacy, safety, transparency, and accountability. They ensure AI is used in a way that respects people’s rights and prevents harm.",
  }
];


function AskQuestion({ bulletPoints }) {
  const navigate = useNavigate();

  return (
    <div
      className="
      w-full 
      flex flex-col md:flex-row 
      items-center justify-between 
      bg-gradient-to-br from-blue-900/20 to-black 
      text-white/70 font-UbuntuBold
      p-6 sm:p-10
      transition-all duration-300
      hover:bg-blue-900/30
    "
    >
      {/* LEFT SIDE */}
      <div
        className="
        w-full md:w-1/2 
        flex flex-col 
        items-center md:items-start 
        justify-center 
        mb-8 md:mb-0
      "
      >
        <h1
          className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
          font-UbuntuBold text-white 
        "
        >
          Ask, Learn & Grow
        </h1>

        <h3
          className="
          font-Ubuntulight mt-4 
          text-xs sm:text-sm md:text-base lg:text-lg 
          text-white/70 max-w-lg
        "
        >
          Have questions about AI? Our community and experts are here to help
          you understand and explore responsibly.
        </h3>

        {/* BULLET POINTS */}
        <ul
          className="
          list-disc pl-5 
          text-white/60 
          mt-5
          text-base sm:text-lg md:text-xl lg:text-2xl
          font-Ubuntulight 
          space-y-3
          w-full max-w-lg
        "
        >
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* ASK QUESTION BUTTON */}
        <button
          onClick={() => navigate("/ask")}
          className="
          mt-8 px-7 py-3 rounded-full
          bg-gradient-to-r from-blue-600 to-blue-800
          text-white font-semibold text-lg
          shadow-md 
          hover:shadow-blue-500/40 
          hover:scale-105 active:scale-95
          transition-transform duration-300
        "
        >
          Ask a Question
        </button>
      </div>

      {/* RIGHT SIDE (Questions Box) */}
      <div
        className="
        w-full md:w-1/2 
        flex justify-center md:justify-end 
        mt-6 md:mt-0
      "
      >
        <RecentQuestions questions={questionsList} />
      </div>
    </div>
  );
}

export default AskQuestion;
