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
    <div className='w-full bg-gradient-to-br from-blue-900/40 to-black p-4'>
      <CardGrid data={statsData} />
    </div>
  )
}

export default HomeTabs
