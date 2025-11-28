import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Why AI Literacy", to: "/why-ai-literacy" },
    { label: "Programs", to: "/programs" },
    { label: "Resources", to: "/resources" },
    { label: "Ask", to: "/ask" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/10 backdrop-blur-xl backdrop-saturate-150
        border-b border-white/20
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white font-bold text-xl">AI for Everyone</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white/80">
          {navItems.map((item, index) => (
            <li key={index} className="group">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative transition ${
                    isActive ? "text-purple-400" : "text-white/80"
                  }`
                }
              >
                {item.label}

                {/* Purple underline animation */}
                <span
                  className="
                    absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 
                    group-hover:w-full transition-all duration-300
                  "
                ></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden bg-white/10 backdrop-blur-xl
          border-t border-white/20
          transition-all duration-300
          ${open ? "max-h-60" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col text-center py-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="py-3 text-white/80 hover:text-purple-400 transition"
              onClick={() => setOpen(false)}
            >
              <NavLink to={item.to}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
