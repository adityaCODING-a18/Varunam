'use client';

import Image from 'next/image';
import React from 'react';
import useDeviceType from '../../../hooks/useDeviceType'; // adjust path if needed

const Material = () => {
  const deviceType = useDeviceType();
  const isTv = deviceType === 'tv';

  if (deviceType === 'unknown') return null; // Wait for hydration

  const pagesDict = {
    "question.png": "PreviousYearQuestions",
    "sample.png": "SamplePapers",
    "study.png": "StudyNotes",
    "formula.png": "NotesAndFormulas",
    "assignment.png": "Assignments",
  }

  return (
    <>
      <div
        className={`
          mx-auto rounded-2xl bg-[#ebdede] p-4
          w-screen
          ${isTv ? 'w-[60vw]' : 'sm:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw]'}
        `}
      >
        <p
          className={`
            font-extrabold text-center font-[poppins] mb-4
            ${isTv ? 'text-4xl mt-6' : 'text-2xl mt-2'}
          `}
        >
          Study Material:
        </p>

        <div
          className={`
            flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-2 pb-6
          `}
        >
          {[
            'question.png',
            'sample.png',
            'study.png',
            'formula.png',
            'assignment.png',
          ].map((src, i) => (
            <div
              key={i}
              className={`
                snap-start flex-shrink-0 rounded-xl shadow-md mb-2 bg-[#ebdede] p-3 transition-transform active:scale-95
                ${isTv ? 'min-w-[40vw] max-w-[40vw]' : 'min-w-[70vw] max-w-[70vw] sm:min-w-[50vw] 2xl:min-w-[30vw]'}
              `}
            >
              <button onClick={() => (window.location.href = '/resources/'+pagesDict[src].toLowerCase())}>
                <Image
                  src={`/${src}`}
                  alt={`Material ${i + 1}`}
                  width={isTv ? 700 : 500}
                  height={isTv ? 700 : 500}
                  className='w-full h-auto object-contain rounded-xl mx-auto hover:scale-90 transition duration-300'
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Material;