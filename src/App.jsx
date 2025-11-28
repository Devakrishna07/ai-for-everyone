import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/common/GlassNavbar'

export default function App() {
  return (
    <BrowserRouter>
       <div className='overflow-x-hidden hide-scrollbar '>
        <Navbar / >
        <Routes>
        <Route path='/' element={<Home />} />
       </Routes>
       </div>
    </BrowserRouter>
  )
}
