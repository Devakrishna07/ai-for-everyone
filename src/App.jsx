import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/common/GlassNavbar'
import AIStoriesPage from './pages/AIStories'
import SubmitStoryForm from './layouts/SubmitStoryForm'
import StorySubmit from './pages/StorySubmit'

export default function App() {
  return (
    <BrowserRouter>
       <div className='overflow-x-hidden hide-scrollbar '>
        <Navbar / >
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stories' element={<AIStoriesPage />} />
        <Route path='/Form' element={<StorySubmit />} />
       </Routes>
       </div>
    </BrowserRouter>
  )
}
