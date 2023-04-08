import React from 'react'
import "./Navbar"

function Navbar() {
  return (
    <div className='h-[4rem] w-[100%] bg-black shadow-lg fixed flex justify-around items-center align-center gradient1 '>
        <div className=''>
            <img src="vite.svg" alt="" />
        </div>
        <div className=' '>
        <ul className='text-white className=" justify-around text-xl flex gap-6  '>
            
            <li className='hover:cursor-pointer'>About</li>
            <li className='hover:cursor-pointer'>Contact</li>
            <li className="hover:cursor-pointer">Project</li>
        </ul>
        </div>
        <div className=''>
            <img src="vite.svg" alt="" />
        </div>
    </div>
  )
}

export default Navbar