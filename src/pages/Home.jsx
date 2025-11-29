import React from 'react'
import HeroSection from '../components/common/HeroSection'
import StatsCard from '../components/common/StatsCard'
import HomeTabs from '../layouts/HomeTabs'
import LearningPathway from '../layouts/LearningPathway'
import CommunityStories from '../layouts/CommunityStories'
import AskQuestion from '../layouts/AskQuestion'
import AIFEFooter from '../components/common/AIFEFooter'

export const askQuestionPoints = [
  "Ask questions in our community forum",
  "Join Live AI Q&A sessions with experts",
  "Access the FAQ and learning guides",
  "Get support from mentors and volunteers",
  "Learn from previously answered questions",
  "Explore real-world examples and solutions",
];


const Home = () => {
  return (
    <div className='flex w-screen min-h-screen items-center justify-center flex-col overflow-x-hidden bg-black'>
      <HeroSection />
      <section id='HomeTabs'>
        <HomeTabs />
      </section>
      <LearningPathway />
      <CommunityStories />
      <AskQuestion bulletPoints={askQuestionPoints} />
    </div>
  )
}

export default Home
