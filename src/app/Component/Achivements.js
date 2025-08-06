'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import useDeviceType from '../../../hooks/useDeviceType'; // adjust the path as needed

const images = [
  '/studentone.png',
  '/studenttwo.png',
  '/studentthree.png',
  '/studentfour.png',
];

const AutoSlider = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const deviceType = useDeviceType();
  const isTv = deviceType === 'tv';

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  if (deviceType === 'unknown') return null;

  return (
    <>
      <p
        className={`font-extrabold text-black text-2xl text-center font-[poppins] ${
          isTv ? 'text-4xl mt-12 mb-6' : 'mt-4 mb-2 sm:mt-16'
        }`}
      >
        Varunam Achievements
      </p>

      <div
        className={`bg-gradient-to-r from-[#c8e0de] to-[#a9fff8] border-2 border-gray-400 rounded-2xl p-3 overflow-hidden
          ${isTv ? 'w-[30vw] min-h-[45vh]' : 'w-[80vw] sm:w-[60vw] 2xl:w-[30vw] min-h-[35vh]'}
          mx-auto`}
      >
        {/* Slider container */}
        <div className="w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full flex justify-center items-center"
              >
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  width={600}
                  height={400}
                  className={`object-contain ${
                    isTv ? 'w-[80%]' : 'w-[80%]'
                  } h-auto`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              window.location.href = '/gallery/images';
            }}
            className={`font-extrabold text-black px-4 py-2 rounded-2xl shadow-md transition
              bg-gradient-to-r from-white to-[#acfcf6] hover:bg-[#00ffec]
              ${isTv ? 'text-lg px-6 py-3' : ''}
            `}
          >
            Explore More
          </button>
        </div>
      </div>
    </>
  );
};

export default AutoSlider;