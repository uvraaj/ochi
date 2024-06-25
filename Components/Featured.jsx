import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl font-NeueMontreal tracking-tight'>Featured Projects</h1>
        </div>

            <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-20'>
    
                <div className='cardContainer w-1/2 h-[75vh] relative'>
                <h1 className="absolute z-[9] text-8xl leading-none tracking-tighter right-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68]">{'FYDE'.split('').map((item,index)=><span>{item}</span>)}</h1>
                    <div className="card w-full h-full bg-green-600 rounded-xl overflow-hidden">
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"></img>
                    </div>
                </div>
                <div className='cardContainer w-1/2 h-[75vh] relative'>
                    <div className="card w-full h-full bg-green-600 rounded-xl overflow-hidden">
                    <h1 className="absolute z-[9] text-8xl leading-none tracking-tighter right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68]">{'VISE'.split('').map((item,index)=><span>{item}</span>)}</h1>
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"></img>
                    </div>
                </div>            
            </div>
            </div>
        
    </div>
  )
}

export default Featured 