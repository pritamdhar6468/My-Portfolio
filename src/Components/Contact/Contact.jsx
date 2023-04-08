import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <section className='p-[10rem] bg-gray-300 flex justify-between align-center item-center'>
        <div className=''>
            <img src="contact.jpg" alt="" className='h-96 w-96 rounded shadow-md' />
        </div>
        <div className='  p-6 shadow-lg rounded-xl'>
            <div className='flex p-4 justify-center items-center text-7xl '><h1 >Contact me</h1></div>
           
            <p className='para p-2 overflow-hidden '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione quibusdam in velit<br/> sit tempore maiores! Numquam quod impedit magni, fuga quia optio facilis minima? </p>
            <p className='para p-2  overflow-hidden '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione quibusdam in velit<br/> sit tempore maiores! Numquam quod impedit magni, fuga quia optio facilis minima? </p>
            <div className='pt-10 flex justify-center  items-center '>
                <button className='w-56 bg-gray-700 text-white text-xl p-5 rounded-md'>Contact</button>
            </div>
        </div>
    </section>
  )
}

export default Contact