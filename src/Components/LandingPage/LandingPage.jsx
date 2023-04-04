import React from 'react'
import "./LandingPage.css"

function LandingPage() {
  return (
    <div className=' gradient bg-gray-700 p-[8rem] flex justify-center gap-10 items-center align-center'>
        <div className='text-white'>
            <h1 className='pb-8 text-5xl text-blue-200 '>Hello This is Pritam Dhar</h1>
            <h3 className='pb-8 text-3xl text-orange-300'>I am a Frontend Developer.</h3>
            <p className='pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Reiciendis sit quam porro autem repudiandae natus!</p>
            <button className=' border-orange-500 shadow-md p-4 bg-orange-400 rounded-lg hover:bg-orange-300 hover:-translate-y-4 transition-all'>click me</button>
        </div>

        <div className=' h-96 bg-yellow-300  rounded-full'>
            <img src="pritam.png" alt="" className='rounded-full h-96 ' />
        </div>
    </div>
  )
}

export default LandingPage