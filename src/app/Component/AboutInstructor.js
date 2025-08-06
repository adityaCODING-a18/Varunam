'use client';

import React from 'react';
import Image from 'next/image';
import useDeviceType from '../../../hooks/useDeviceType'; // Adjust the path to your actual hook

const AboutInstructor = () => {
  const deviceType = useDeviceType();
  const isTv = deviceType === 'tv';

  if (deviceType === 'unknown') return null; // Wait for hydration

  return (
    <>
      {/* Title */}
      <p
        className={`font-extrabold text-center mt-10 font-[poppins] ${
          isTv ? 'text-4xl mb-10' : 'text-2xl mb-15'
        }`}
      >
        About Instructor
      </p>

      {/* Card Container */}
      <div
        className={`mx-auto mb-10 rounded-2xl border-2 border-gray-400 drop-shadow-sm bg-gradient-to-r from-[#aafef7] to-[#c8e0de] 
          ${isTv ? 'w-[60vw] h-[83vh]' : 'w-[80vw] lg:w-[60vw] 2xl:w-[40vw] h-[40vh] lg:h-[85vh] xl:h-[65vh] 2xl:h-[70vh]'}
        `}
      >
        {/* Instructor Image */}
        <Image
          src="/standedbanner.png"
          alt="Abhishek Sir"
          width={isTv ? 600 : 500}
          height={isTv ? 600 : 500}
          className={`relative bottom-10 mx-auto transition duration-300 hover:scale-105`}
        />

        {/* Description Box */}
        <div
          className={`bg-gradient-to-r from-[#116363] to-[#22c9c8] relative bottom-10 mx-auto text-center rounded-2xl px-4 py-3 
            ${isTv ? 'w-[70%] text-lg' : 'w-[80%] text-sm'}
          `}
        >
          <p className='font-extrabold font-[poppins]'>
            ABHISHEK SIR
          </p>
          <p className='font-[poppins]'>
            ( Director and Founder of Varunam )
          </p>
          <p className='font-extrabold font-[poppins]'>
            Ex. Naval Engg. (I.Navy)
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutInstructor;