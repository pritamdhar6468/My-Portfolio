import React from 'react'

function Contact() {
  return (
    <section className='p-[10rem] bg-gray-300 flex justify-between align-center item-center'>
        <div className=''>
            <img src="vite.svg" alt="" className='h-96 ' />
        </div>
        <div className=' border-2 shadow-lg rounded-md'>
            <h1 className='flex  justify-center align-center items-center text-7xl pb-10'>Contact me</h1>
            <hr />
            <p className='pl-[4rem] overflow-hidden '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione quibusdam in velit<br/> sit tempore maiores! Numquam quod impedit magni, fuga quia optio facilis minima? </p>
            <p className='pl-[4rem] pr-[4rem] overflow-hidden '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ratione quibusdam in velit<br/> sit tempore maiores! Numquam quod impedit magni, fuga quia optio facilis minima? </p>
            <div className='pt-4 flex justify-center  items-center '>
                <button className='bg-yellow-500 p-4 rounded-md'>click</button>
            </div>
        </div>
    </section>
  )
}

export default Contact