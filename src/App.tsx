// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import FounderPage from './components/FounderPage'
import DefaultPage from './components/DefaultPage'


function App() {

  return (
    <Routes>
      <Route path="/:foundername" element={<FounderPage />} />
      <Route path="/" element={<DefaultPage />} />
      </Routes>
  )
}

export default App
