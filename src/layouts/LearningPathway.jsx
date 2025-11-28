import React from 'react'
import ProgramCardGrid from '../components/common/ProgramCardGrid'

const programData = [
  {
    icon: "🎨",
    title: "KuttyMakers",
    subtitle: "Young Learners (6–12)",
    features: [
      "Interactive AI games",
      "Creative projects",
      "Age-appropriate concepts",
    ],
    buttonText: "Explore Program",
    link: "/kuttymakers",
  },
  {
    icon: "⚡",
    title: "Young Makers",
    subtitle: "Students & Professionals (13+)",
    features: [
      "Project-based learning",
      "Real-world applications",
      "Skill development",
    ],
    buttonText: "Explore Program",
    link: "/youngmakers",
  },
  {
    icon: "🌟",
    title: "Friends of the Movement",
    subtitle: "Educators & Leaders",
    features: [
      "Teaching frameworks",
      "Community building",
      "Resource access",
    ],
    buttonText: "Explore Program",
    link: "/friends",
  },
];


function LearningPathway() {
  return (
    <div className='w-full flex flex-col bg-gradient-to-br from-blue-900/40 to-black items-center justify-center font-UbuntuBold text-white/70 p-8 '>
        <h1 className='text-7xl font-bold m-4'>Learning Pathways</h1>
        <h3 className='font-Ubuntulight'>Choose the program that fits your journey</h3>
      <ProgramCardGrid cards={programData} />
    </div>
  )
}

export default LearningPathway
