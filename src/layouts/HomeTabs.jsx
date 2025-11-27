import React from 'react'
import CardGrid from '../components/common/CardGrid'

const statsData = [
  { value: "2,450+", label: "Stories Shared" },
  { value: "15K+", label: "Active Learners" },
  { value: "500+", label: "Learning Resources" },
  { value: "50+", label: "Partner Organizations" },
  { value: "120+", label: "Projects Completed" }, // Won’t show, only top 4
];

function HomeTabs() {
  return (
    <div className='flex flex-col w-full bg-gradient-to-br from-blue-900/40 to-black p-4 text-center'>
      <CardGrid data={statsData} />
      <div className='w-full flex flex-col items-center justify-center py-4 m-2'>
        <h1 className='text-white text-8xl sm:text-6xl md:text-8xl font-bold text-white/70 border-white '>Why AI Literacy Matters </h1>
        <span className='text-white text-2xl md:text-xl my-3 text-white/50'>AI is reshaping our world.<br/>Everyone deserves to understand it, not just technologists.</span>
      </div>
    </div>
  )
}

export default HomeTabs
