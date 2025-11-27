import React from 'react'

function GlassBtn({text="click me"}) {
  return (
   <button
      className="
        px-5 py-2 my-3 sm:mx-3
        text-sm 
        rounded-2xl
        backdrop-blur-xl 
        bg-white/30 
        border border-white/40
        shadow-md shadow-black/20
        text-black/40
        transition-all duration-500
        hover:shadow-purple-500/60 hover:shadow-2xl
        hover:bg-purple-500/30 
        hover:border-purple-400
        md:px-5 md:py-2
        md:text-2xl
        lg:px-4 lg:py-2
        xl:text-2xl "
    >
      {text}
    </button>

  )
}

export default GlassBtn
