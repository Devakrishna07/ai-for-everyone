// src/components/PageHeader.jsx
import React from "react";

export default function PageHeader({ title, subtitle, highlights = [] }) {
  return (
    <header className="text-center md:text-left space-y-4">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h1>
      <p className="max-w-2xl text-sm sm:text-base text-slate-100/80 mx-auto md:mx-0">
        {subtitle}
      </p>

      {Array.isArray(highlights) && highlights.length > 0 && (
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {highlights.map((item) => (
            <span
              key={item}
              className="
                rounded-full border border-white/20
                bg-white/10 px-3 py-1 text-xs
                text-purple-100/90 backdrop-blur-lg
              "
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
