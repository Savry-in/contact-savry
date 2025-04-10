// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import FounderPage from './components/FounderPage'


function App() {

  return (
    <Routes>
      <Route path="/:foundername" element={<FounderPage />} />
      </Routes>
  )
}

export default App
