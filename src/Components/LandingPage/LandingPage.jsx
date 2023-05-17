import React from 'react'
import "./LandingPage.css"

function LandingPage() {
  return (
    <div className='h-[100vh] p-4 bakkground  grid grid-cols-2 justify-center gap-10 items-center align-center'>
        <div className='text-black grid grid-row-3'>
            <h1 className=' text-3xl text-blue-700 honetag '>Hello This is Pritam Dhar</h1>
            <h3 className=' text-xl  hthree'>I am a Frontend Developer.</h3>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Reiciendis sit quam porro autem repudiandae natus!</p>
        
        </div>

        
    </div>
  )
}

export default LandingPage