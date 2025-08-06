'use client';

import React from 'react';
import Image from 'next/image';
import useDeviceType from '../../../hooks/useDeviceType'; // Adjust path to your project

const FreeClasses = () => {
  const deviceType = useDeviceType();
  const isTv = deviceType === 'tv';

  if (deviceType === 'unknown') return null; // Wait for device type to resolve

  return (
    <div
      className={`
        mx-auto p-5 mt-5 rounded-2xl border-2 border-gray-400
        bg-gradient-to-r from-[#c8e0de] to-[#a9fffd] drop-shadow-sm
        ${isTv ? 'w-[85vw]' : 'w-[90vw] sm:w-[70vw] 2xl:w-[80vw]'}
      `}
    >
      {/* Heading */}
      <p
        className={`font-extrabold font-[poppins] text-center mb-4 transition duration-500 ${
          isTv ? 'text-4xl' : 'text-2xl hover:text-4xl duration-5000'
        }`}
      >
        Free Classes
      </p>

      {/* Images */}
      <div
        className={`flex flex-wrap justify-center gap-4 ${
          isTv ? 'gap-y-10' : '2xl:flex-col'
        }`}
      >
        {[
          '/electricity thumbnail01.png',
          '/reflection of light 02.png',
          '/Magnetic effect of electric current.png',
          '/magnification.png',
        ].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Free Class ${i + 1}`}
            width={500}
            height={500}
            className={`
              mx-auto hover:transform hover:scale-105 transition duration-300 rounded-xl
              ${isTv ? 'w-[40%]' : 'w-[95%] 2xl:w-[45%]'}
            `}
          />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-6 hover:transform hover:scale-105 transition duration-300">
        <button
          onClick={() =>
            (window.location.href = 'https://www.youtube.com/@varunamforvictory')
          }
          className={`
            text-black font-bold rounded-full flex items-center gap-2 px-4 py-2
            bg-gradient-to-r from-[#d9d9d9] to-white transition duration-300
            hover:bg-[#a9fffd]
            ${isTv ? 'text-lg' : 'text-xs'}
          `}
        >
          <Image
            src="/click.png"
            alt="click"
            width={isTv ? 48 : 40}
            height={isTv ? 48 : 40}
          />
          Click Here
        </button>
      </div>
    </div>
  );
};

export default FreeClasses;
  