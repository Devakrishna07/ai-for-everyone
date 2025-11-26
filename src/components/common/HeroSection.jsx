import React from 'react'
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation';
import logo from '../../assets/logo.png';

function HeroSection() {
  return (
   <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <h1 className='text-8xl'>AI-For-Everyone</h1>
          <h2 className='text-2xl'>Join a movement making AI education accessible to students, elders, professionals, and communities.<br/> Learn, explore, and engage responsibly.</h2>
        </p>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default HeroSection
