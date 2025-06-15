import React from 'react'
import Image from 'next/image'

const Performers = () => {
    return (
        <div className='w-[95vw] sm:w-[85vw] lg:w-[55vw] bg-black border-4 mx-auto mt-10 mb-10 p-5 rounded-4xl'>
            <p className='font-poppins text-center font-extrabold text-xl sm:text-4xl lg:text-6xl'>Our Top Performers in 10th board</p>
            <div className='bg-[#A64CED]/10 backdrop-blur-lg mt-10 p-2 rounded-4xl grid grid-cols-2 text-black border-4 border-gray-700'>
                <div className='border-2 border-gray-300 rounded-3xl p-2 m-2'>
                    <img className='mx-auto object-cover w-full h-full' src="/rectangle 2.png" alt=""/>
                </div>
                <div className='border-2 border-gray-300 rounded-3xl p-2 m-2'>
                    <img className='mx-auto object-cover w-full h-full' src="/rectangle 3.png" alt=""/>
                </div>
                <div className='border-2 border-gray-300 rounded-3xl p-2 m-2'>
                    <img className='mx-auto object-cover w-full h-full' src="/rectangle 4.png" alt=""/>
                </div>
                <div className='border-2 border-gray-300 rounded-3xl p-2 m-2'>
                    <img className='mx-auto object-cover w-full h-full' src="/rectangle 5.png" alt=""/>
                </div>
                <div className='border-2 border-gray-300 rounded-3xl p-2 m-2'>
                    <img className='mx-auto object-cover w-full h-full' src="/rectangle 6.png" alt=""/>
                </div>
                <div className='border-2 border-gray-300 rounded-3xl p-2 m-2'>
                    <img className='mx-auto object-cover w-full h-full' src="/rectangle 7.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Performers
