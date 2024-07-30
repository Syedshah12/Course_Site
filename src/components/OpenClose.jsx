import React,{useState} from 'react'
import {rowImg,up,edit,down,del,video } from '../utils/index.js'


const OpenClose = ({chapter,vid_quantity,description,videos}) => {
    const [show,setShow]=useState(false);
  return (

    <div className="w-full py-3 px-8">
    <div className=' bg-purplish-gray rounded-lg p-1 '>  
        <div className='w-full flex p-4 items-start  '>
            <div className="flex flex-col  gap-y-3 w-full">
                <div><img className='object-cover ' src={rowImg} alt="" /></div>
                <div><h1 className='font-Roboto-Flex text-xl text-primary_gold'>{chapter}</h1></div>
            </div>
       <div className='flex mr-12 gap-x-8 items-center'>
    <img className='cursor-pointer hover:scale-105 duration-200 transition-all' src={edit} alt="" />
    <img className='cursor-pointer hover:scale-105 duration-200 transition-all' src={del} alt="" />
    <img onClick={()=>setShow(!show)} className='cursor-pointer hover:scale-105 duration-200 transition-all' src={
    show?up:down
    } alt="" />
       </div>
        </div>
        {/* //open close */}
        <div className={`${show?'block':"hidden"}`}>
    
    <div className='py-2 px-1 flex flex-col gap-y-0.5'>
        <h1 className='text-white font-semibold text-lg'>Description</h1>
        <p className='text-secondary-gray text-sm'>{description}</p>
    </div>
    
    <div className='text-secondary-gray text-base px-1 py-2'>
        <p>{`Total ${vid_quantity} videos`}</p>
    </div>
    
    {
videos.map((item,index)=>(

    <div key={index}  className='flex gap-x-2 px-1 py-2'>
    <div className="flex">
        <div><img src={video} alt="" /></div>
    </div>
    <div >
    <h1 className=' text-white font-semibold'>{item.videoname}</h1>
    <p className='text-secondary-gray text-sm'>{item.duration}</p>
    </div>
    </div>

))

    }


   
    
    
    
        </div>
    </div>
    
          </div>
    
  )
}

export default OpenClose