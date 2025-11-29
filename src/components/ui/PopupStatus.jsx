import React from "react";
import { IoReload } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

export default function PopupStatus({ state }) {
  return (
    <div className="
      fixed inset-0 z-[9999] flex items-center justify-center 
      bg-black/50 backdrop-blur-md
    ">
      <div
        className="
        p-8 rounded-3xl bg-gray-900/80 border border-white/10 text-center 
        shadow-2xl backdrop-blur-xl animate-fadeIn
        "
      >
        {state === "loading" && (
          <div className="flex flex-col items-center gap-4">
            <IoReload className="text-purple-400 animate-spin" size={60} />
            <p className="text-white/90 text-lg">Submitting your story...</p>
          </div>
        )}

        {state === "success" && (
          <div className="flex flex-col items-center gap-4 animate-popIn">
            <FaCheckCircle className="text-green-400" size={70} />
            <p className="text-green-300 text-xl font-semibold">
              Story Submitted Successfully!
            </p>
            <p className="text-white/60 text-sm">Redirecting...</p>
          </div>
        )}
      </div>
    </div>
  );
}
