import React from 'react'
import cancel from '../assets/cancel.png'
import {Link} from'react-router-dom'


const Cancel = () => {
  return (
    <div className='grid place-items-center w-full lg:h-screen h-full font-raleway bg-[#f7f7f7]'>
      <div className='max-w-5xl rounded flex flex-col'>
        <span className='text-red-600 text-5xl font-raleway'>Something went wrong!!</span>
        <span className='text-red-400 text-2xl font-bold text-center mt-8'>Please try again later!!</span>
        <div className='flex justify-end items-center mx-auto my-12 w-96'>
          <img src={cancel} alt='' />
        </div>
        <div className='my-10 mx-auto'>
          <Link to='/' className='underline text-xl underline-offset-4'>Go Back to Home Page</Link>
        </div>
      </div>
    </div>
  )
}

export default Cancel