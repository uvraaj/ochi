import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-NeueMontreal text-[4vw] leading-none tracking-tighter'><h1>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
    <div className='w-full border-t-[2px] border-[#99AD53] mt-20 pt-20 flex gap-5'>
        <div className='w-1/2 '>
            <h1 className='text-7xl'>Our approach:</h1>
            <button className=' flex px-5 py-6 bg-zinc-900 rounded-full text-white uppercase text-[14px] items-center justify-center gap-10 mt-4'>read more
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-red-600 rounded-3xl flex items-center justify-center'></div>
    </div>
    </div>

  )
}

export default About