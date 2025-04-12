// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import FounderPage from './components/FounderPage'
import DefaultPage from './components/DefaultPage'


function App() {

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#E0FAEE]"> 
    <Routes>
      <Route path="/" element={<DefaultPage />} />
      <Route path="/:foundername" element={<FounderPage />} />
    </Routes>
  </div>
  )
}

export default App
