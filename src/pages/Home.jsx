import React from 'react'
import HeroSection from '../components/common/HeroSection'
import StatsCard from '../components/common/StatsCard'
import HomeTabs from '../layouts/HomeTabs'
import LearningPathway from '../layouts/LearningPathway'
import CommunityStories from '../layouts/CommunityStories'

const Home = () => {
  return (
    <div className='flex w-screen min-h-screen items-center justify-center flex-col overflow-x-hidden bg-black'>
      <HeroSection />
      <HomeTabs />
      <LearningPathway />
      <CommunityStories />
    </div>
  )
}

export default Home
