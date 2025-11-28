import React from 'react'
import CardGrid from '../components/common/CardGrid'
import GlassGrid from '../components/common/GlassGrid';
import OurApproach from './OurApproach';

const statsData = [
  { value: "2,450+", label: "Stories Shared" },
  { value: "15K+", label: "Active Learners" },
  { value: "500+", label: "Learning Resources" },
  { value: "50+", label: "Partner Organizations" },
  { value: "120+", label: "Projects Completed" }, // Won’t show, only top 4
];

const cardsData = [
  {
    id: 1,
    logo: "https://th.bing.com/th/id/OIP.7pS6M13OfxMFWbP8Gi1SqwHaHa?w=214&h=214&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" ,
    title: "Students",
    description: "Gain the skills for tomorrow's job market and understand AI's role in society",
  },
  {
    id: 2,
    logo: "https://static.vecteezy.com/system/resources/previews/010/149/042/original/people-icon-sign-symbol-design-free-png.png",
    title: "Elders",
    description: "Stay connected, understand how AI impacts daily life, and navigate it confidently",
  },
  {
    id: 3,
    logo: "https://tse1.mm.bing.net/th/id/OIP.ruCWoH6S7L9gkkbz4nfsTAHaHU?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Communities",
    description: "Build collective understanding and advocate for responsible AI in your region",
  },
];


function HomeTabs() {
  return (
    <div className='flex flex-col w-full bg-gradient-to-br from-blue-900/40 to-black p-4 text-center font-UbuntuBold text-white/50 p-8 '>
      <CardGrid data={statsData} />
      <div className='w-full flex flex-col items-center justify-center py-4 m-2'>
        <h1 className='text-white text-8xl sm:text-6xl md:text-8xl font-bold text-white/80 '>Why AI Literacy Matters </h1>
        <span className='text-white text-2xl md:text-xl my-3 text-white/50'>AI is reshaping our world.<br/>Everyone deserves to understand it, not just technologists.</span>
      </div>
      <GlassGrid cards={cardsData} count={3} />
      <OurApproach />
    </div>
  )
}

export default HomeTabs
