"use client";
import React from 'react';
import Image from 'next/image';
import useDeviceType from '../../../hooks/useDeviceType'; // Adjust path if needed

const Facilities = () => {
  const deviceType = useDeviceType();
  const isTv = deviceType === 'tv';

  if (deviceType === 'unknown') return null;

  return (
    <>
      <p className={`font-extrabold text-black text-2xl text-center font-[poppins] ${isTv ? 'mt-10 mb-6 text-4xl' : 'mt-2 mb-2 sm:mt-6 xl:mt-16'}`}>
        Why choose Varunam
      </p>

      <div
        id='container'
        className={`flex flex-wrap gap-2 ${isTv ? 'justify-center gap-12 px-10' : 'sm:justify-between sm:px-12 2xl:justify-center 2xl:gap-12 2xl:px-3'} p-5 mx-auto bg-[linear-gradient(to_right,rgba(121,253,242,0.7),rgba(178,168,168,0.3))] border-2 border-gray-400 rounded-2xl drop-shadow-xl/50
          ${isTv ? 'w-[90vw] h-auto min-h-[40vh]' : 'w-[80vw] sm:w-[70vw] lg:w-[60vw] 2xl:w-[90vw] lg:h-[70vh] 2xl:h-[40vh]'}
        `}
      >
        {[
          { src: "/teaching.png", alt: "Teaching", text: "Strong Conceptual Teaching" },
          { src: "/doubt.png", alt: "Doubt", text: "Personal Mentorship & Doubt Session" },
          { src: "/result.png", alt: "Result", text: "Result Oriented Strategy" },
          { src: "/education.png", alt: "Education", text: "Affordable Quality Education" }
        ].map((item, idx) => (
          <div
            key={idx}
            className={`bg-white font-black font-[poppins] rounded-2xl drop-shadow-xs/25 hover:scale-105 transition duration-300
              ${isTv ? 'w-[20%] min-h-[23vh]' : 'w-[48%] sm:w-[40%] 2xl:w-[15%] max-h-[15vh] lg:min-h-[28vh] 2xl:min-h-[35vh]'}
            `}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
              quality={100}
              priority
              className={`mx-auto w-[80%] object-contain ${
                isTv ? 'h-[60%] mt-6 mb-4' : 'h-[50%] m-2 2xl:mt-10'
              }`}
            />
            <p className={`text-center font-[poppins] ${isTv ? 'text-base mt-1 m-2' : 'text-xs'}`}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Facilities;