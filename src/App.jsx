import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-[100vh] flex justify-center items-center   text-white ">
      <div>
      <h1 className='text-8xl text-blue-400 font-bold'>I am Pritam Dhar</h1>
     <p className='italic text-lg'>Me as a Front-end  developer solve problem for you </p>
      </div>
      <img src="vite.svg" alt="" className='w-32 h-32'/>
    
    </div>
  )
}

export default App
