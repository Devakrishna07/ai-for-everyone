import React from 'react'
import { useNavigate } from 'react-router-dom'

function GlassBtn({ 
  text = "click me", 
  onClick, 
  navigateTo, 
  scrollTo, 
  type = "button" 
}) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }
    
    if (navigateTo) {
      navigate(navigateTo)
    }
    
    if (scrollTo) {
      if (scrollTo === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (scrollTo === 'bottom') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      } else {
        const element = document.querySelector(scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className="
        relative
        px-8 py-4 my-4 sm:mx-4
        text-sm 
        rounded-2xl
        backdrop-blur-2xl 
        bg-gradient-to-br from-white/15 via-white/8 to-white/3
        border border-white/35
        shadow-2xl shadow-black/40
        text-white
        font-semibold
        tracking-widest
        transition-all duration-600 ease-out
        hover:shadow-purple-500/50 hover:shadow-2xl
        hover:bg-gradient-to-br hover:from-purple-500/25 hover:via-pink-500/15 hover:to-blue-500/20
        hover:border-purple-200/60
        hover:scale-105
        hover:-translate-y-1
        active:scale-95
        active:translate-y-0
        md:px-10 md:py-4
        md:text-lg
        lg:px-12 lg:py-4
        xl:text-xl
        overflow-hidden
        group
        cursor-pointer
        select-none
      "
    >
      {/* Animated gradient border */}
      <div 
        className="absolute inset-0 rounded-2xl p-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.4), rgba(255,255,255,0.2), transparent)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }} 
      />
      
      {/* Dynamic shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent 
                      -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] 
                      transition-transform duration-1200 ease-in-out" />
      
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-purple-400/0 to-pink-400/0 
                      group-hover:from-white/5 group-hover:via-purple-400/10 group-hover:to-pink-400/5
                      transition-all duration-700" />
      
      {/* Subtle pulse animation */}
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/10 
                      transition-all duration-500" />
      
      {/* Button content with enhanced styling */}
      <span className="relative z-10 uppercase tracking-widest drop-shadow-lg flex items-center justify-center gap-2">
        {text}
        {/* Animated arrow for certain actions */}
        {(scrollTo === 'bottom' || navigateTo) && (
          <svg 
            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
        {scrollTo === 'top' && (
          <svg 
            className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-y-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        )}
      </span>
      
      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-white/0 group-active:bg-white/10 transition-colors duration-200" />
      </div>
    </button>
  )
}

export default GlassBtn