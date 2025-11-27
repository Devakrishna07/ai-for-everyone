import React from 'react'
import CardGrid from '../components/common/CardGrid'


const statsData = [
  { value: "Understand AI", label: "Learn the concepts, how it works, and its applications in real life" },
  { value: "Build with Ai", label: "Create projects, experiment, and develop practical skills hands-on" },
  { value: "Mentor and Teach", label: "Share knowledge, guide others, and build community responsibility" },
  { value: "50+", label: "Partner Organizations" },
  { value: "120+", label: "Projects Completed" }, // Won’t show, only top 4
];

function OurApproach() {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/40 to-black p-4'>
        <h1 className='text-white/70 text-6xl sm:text-7xl font-semibold my-3 '>Our Approach </h1>
        <span className='text-white/60 text-2xl m-2 mb-6'>A holistic framework for AI literacy</span><br />
        <CardGrid data={statsData} count={3} />
      
    </div>
  )
}

export default OurApproach
