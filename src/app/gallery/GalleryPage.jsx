"use client"
import React from 'react'
import Navbar from '../Component/Navbar'


const page = () => {
  return (
    <>
      <div className="bg-[#D4FFFD] w-screen h-screen overflow-x-hidden m-0 p-0 text-black">
        <Navbar />
        <p className='text-xl 2xl:text-3xl font-bold text-center text-[#09817F] font-[poppins] mt-10'>
          Welcome to Our Beautiful Memorizes Collection of Varunam
        </p>
        <div className="p-5 rounded-2xl flex justify-center mt-5 gap-10 bg-white/80 backdrop-sepia-0 max-w-[80vw] 2xl:max-w-[40vw] mx-auto">
          <button onClick={() => { window.location.href = "/gallery/images" }} className='bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-400 rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 inline">
              <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
            </svg>
            <span className='ml-2'>
              <p className='font-[poppins] inline'>View Images</p>
            </span>
          </button>
          <button onClick={() => { window.location.href = "/gallery/videos" }} className='bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-400 rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 inline">
              <path d="M3.25 4A2.25 2.25 0 0 0 1 6.25v7.5A2.25 2.25 0 0 0 3.25 16h7.5A2.25 2.25 0 0 0 13 13.75v-7.5A2.25 2.25 0 0 0 10.75 4h-7.5ZM19 4.75a.75.75 0 0 0-1.28-.53l-3 3a.75.75 0 0 0-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 0 0 1.28-.53V4.75Z" />
            </svg>

            <span className='ml-2'>
              <p className='font-[poppins] inline'>View Videos</p>
            </span>
          </button>
        </div>

        <p className='text-md 2xl:text-lg font-bold text-center font-[poppins] mt-10'>Please select on them so that, you can view what you want</p>

      </div>
    </>
  )
}

export default page
