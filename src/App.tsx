// import { useState } from 'react'
import Pfp from './components/Pfp.tsx'
import Name from './components/Name.tsx'  
import Url from './components/Url.tsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div id='main' className="bg-[#E0FAEE] min-h-screen flex flex-col items-center pt-16">
        <Pfp />
        <Name />
        <Url />
      </div>
    </>
  )
}

export default App
