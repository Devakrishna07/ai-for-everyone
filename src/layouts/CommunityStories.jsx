import React from 'react'
import StoriesGrid from '../components/common/StoriesGrid'

export const storiesData = [
  {
    name: "Priya, 16",
    role: "Young Maker",
    description:
      "Started curious about AI, now building projects that help my community understand technology better.",
    avatar: "https://ui-avatars.com/api/?name=Priya&background=random",
  },
  {
    name: "Ravi, 68",
    role: "Community Elder",
    description:
      "Never thought I could learn AI at my age. Now I'm helping others in my village navigate digital tools.",
    avatar: "https://ui-avatars.com/api/?name=Ravi&background=random",
  },
  {
    name: "Meera, 34",
    role: "Working Professional",
    description:
      "Responsible AI principles changed how I approach my work. Now I'm advocating for ethical AI in my organization.",
    avatar: "https://ui-avatars.com/api/?name=Meera&background=random",
  },
  {
    name: "Arjun, Teacher",
    role: "Educator Partner",
    description:
      "Using the AI curriculum to teach 200+ students. Seeing their excitement about AI makes it all worthwhile.",
    avatar: "https://ui-avatars.com/api/?name=Arjun&background=random",
  },
  {
    name: "Sahana, 22",
    role: "College Innovator",
    description:
      "AI tools helped me build my first startup prototype. I'm now mentoring juniors on responsible tech building.",
    avatar: "https://ui-avatars.com/api/?name=Sahana&background=random",
  },
  {
    name: "Kumar, 41",
    role: "Tech Volunteer",
    description:
      "I help rural communities understand AI misconceptions. It's rewarding to make advanced tech simple for everyone.",
    avatar: "https://ui-avatars.com/api/?name=Kumar&background=random",
  },
  {
    name: "Lalitha, 29",
    role: "Teacher",
    description:
      "I integrate AI into classroom activities. Students are now more curious, creative, and confident.",
    avatar: "https://ui-avatars.com/api/?name=Lalitha&background=random",
  },
  {
    name: "Vikram, 19",
    role: "Student Developer",
    description:
      "Started with simple AI projects, now contributing to open-source tools and building my career.",
    avatar: "https://ui-avatars.com/api/?name=Vikram&background=random",
  },
];


function CommunityStories() {
  return (
    <div className='w-full bg-gradient-to-br from-blue-900/40 to-black flex flex-col items-center justify-center text-white/40 font-UbuntuBold'>
        <StoriesGrid stories={storiesData} />
    </div>
  )
}

export default CommunityStories
