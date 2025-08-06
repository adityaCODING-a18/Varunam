'use client';

import Image from 'next/image';
import React from 'react';
import useDeviceType from '../../../hooks/useDeviceType'; // adjust the path as needed

const OfferedCourse = () => {
  const deviceType = useDeviceType();
  const isTv = deviceType === 'tv';

  if (deviceType === 'unknown') return null; // Wait for device type detection

  return (
    <div
      className={`
        bg-gradient-to-r from-[#c8e0de] to-[#a9fff8] border-2 border-gray-400 rounded-2xl drop-shadow-md overflow-hidden
        ${isTv ? 'w-[70vw] min-h-[40vh] mt-12' : 'w-[80vw] sm:w-[60vw] 2xl:w-[40vw] min-h-[32vh] mt-3 sm:mt-16'}
        m-auto p-3
      `}
    >
      {/* Title */}
      <p
        className={`font-extrabold font-[poppins] text-center mb-2 ${
          isTv ? 'text-4xl' : 'text-2xl'
        }`}
      >
        Offered Course
      </p>

      {/* Scrollable Container */}
      <div className='flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-2'>
        {['course1.png', 'course2.png', 'course3.png', 'course4.png'].map(
          (src, i) => (
            <div
              key={i}
              className={`
                flex-shrink-0 rounded-xl shadow-md
                ${isTv ? 'min-w-[35vw] max-w-[35vw]' : 'min-w-[70vw] sm:min-w-[30vw] max-w-[70vw]'}
              `}
            >
              <button
                onClick={() => {
                  window.location.href = `/courses`;
                }}
              >
                <Image
                  src={`/${src}`}
                  alt={`Course ${i + 1}`}
                  width={600}
                  height={400}
                  className={`
                    w-full h-auto object-contain rounded-xl
                    hover:transform hover:scale-90 transition duration-300
                  `}
                />
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OfferedCourse;