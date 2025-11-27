import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
       <div className='overflow-x-hidden'>
        <Routes>
        <Route path='/' element={<Home />} />
       </Routes>
       </div>
    </BrowserRouter>
  )
}
