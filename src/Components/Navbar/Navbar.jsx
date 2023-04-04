import React from 'react'
import "./Navbar"

function Navbar() {
  return (
    <div className='h-[3rem] bg-gray-700 flex justify-center items-center align-center gradient '>
        <div className=''>
            <img src="vite.svg" alt="" />
        </div>
        <div className=' '>
        <ul className='text-white text-xl flex gap-6 p-[15rem] '>
            <li className='hover:cursor-pointer'>Home</li>
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