import React from 'react'
import { pic, eye, lock } from '../utils/index.js'

const CourseCard = ({ chapter, duration, isLocked }) => {
  return (
    <div className="card1 lg:max-w-[170px]   xl:max-w-[235px] 2xl:max-w-[350px] 3xl:max-w-[400px] w-[90%]  mx-auto xl:mx-0">
      <div className={`flex  relative flex-col  border-2 border-primary_gold rounded-[21px] xl:rounded-2xl  md:rounded-[38px] 2xl:rounded-[20px] lg:rounded-xl  `}>
        <div className={`w-full ${isLocked ? 'opacity-50' : ''}`}><img className='w-full h-full object-cover' src={pic} alt="" /></div>
        <div className={`flex ${isLocked ? 'opacity-50' : ''} flex-col leading-tight rounded-b-2xl bg-shaded-gray py-2 px-1`}>
          <div className='px-1 pt-2'><h4 className='text-sm leading-tight text-secondary-gray'>UX Design course</h4></div>
          <div className='px-1'><h4 className='text-base font-semibold text-primary_gold'>{chapter}</h4></div>
          <div className='mt-1.5'>

          </div>
          <div className={`flex ${isLocked ? 'opacity-50' : ''} items-center p-1`}>
            <div className='flex-1 '>
              <p className='text-secondary-gray text-sm leading-tight'>Duration</p>
              <h1 className='font-semibold text-base'>{duration}</h1>

            </div>
            <div className='w-8'><img className='w-6 hover:scale-105 duration-200 cursor-pointer h-full object-contain' src={eye} alt="" /></div>
          </div>
        </div>
        {isLocked && (<div className="absolute top-1/2 right-[40%]  lg:right-[30%] xl:right-[37%] 2xl:right-[40%] transform -translate-y-1/2">
          <img src={lock} alt="" />
        </div>)}
      </div>
    </div>
  )
}

export default CourseCard