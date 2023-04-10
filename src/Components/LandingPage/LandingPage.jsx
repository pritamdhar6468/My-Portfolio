import React from 'react'
import "./LandingPage.css"

function LandingPage() {
  return (
    <div className='h-[100vh] bakkground  flex justify-center gap-10 items-center align-center'>
        <div className='text-white'>
            <h1 className='pb-8 text-6xl text-blue-200 honetag '>Hello This is Pritam Dhar</h1>
            <h3 className='pb-8 text-3xl text-orange-300 hthree'>I am a Frontend Developer.</h3>
            <p className='pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Reiciendis sit quam porro autem repudiandae natus!</p>
         <div className='flex gap-8'>
         <button className=' border-orange-500 shadow-md p-4 bg-yellow-400 rounded-lg hover:bg-orange-300 hover:-translate-y-4 transition-all'>About me</button>
            <button className='pl-4 border-orange-500 shadow-md p-4 bg-green-400 rounded-lg hover:bg-orange-300 hover:-translate-y-4 transition-all'><a href="pritamdhar (2).pdf" download="resume" >Download resume</a></button>
         </div>
        </div>

        <div className=' h-96 bg-yellow-300  rounded-full'>
            <img src="pritam.png" alt="" className='rounded-full h-96 ' />
        </div>
    </div>
  )
}

export default LandingPage