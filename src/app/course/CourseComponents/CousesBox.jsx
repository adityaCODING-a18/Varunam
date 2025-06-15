import React from 'react'
import Course from './Course'

const CousesBox = () => {
  return (
    <>
        <div id="couseBox" className='m-auto pt-10 mb-10'>
            <Course section="ONE" batch="Pre-Foundation Batch" classLevel="junior" disc="“Laying the first stones of excellence. Math & Science concepts for Class 6 & 7.”"  />
            <Course section="ONE" batch="Pre-Foundation Batch" classLevel="senior" lowerClass='8' upperClass='10' disc="“Sharpen your fundamentals. Elite-level Math, Physics, Chemistry and Biology”"  />
            <Course section="ONE" batch="Physics" classLevel="senior" lowerClass='11' upperClass='12' disc="“Command the most powerful subject in science. Conceptual clarity with tactical problem-solving.”"  />
        </div>
    </>
  )
}

export default CousesBox