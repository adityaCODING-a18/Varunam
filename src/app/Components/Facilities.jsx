import React from 'react'
import Facilitycard from './Facilitycard'

const Facilities = () => {
    return (
        <div id='facility' className='w-[95vw] sm:w-[85vw] lg:w-[50vw] m-auto mt-16 bg-black rounded-3xl p-5 border-2'>
            <p className='text-3xl md:text-5xl font-poppins text-center font-extrabold'>Facilites that we provide</p>

            <br />
            <hr />

            <div className='p-4 flex gap-3 sm:gap-0'>
                <Facilitycard facImage="/facility.png" facilityType="Weekly Test Series" />
                <Facilitycard facImage="/facility (0).png" facilityType="Doubt Solving Session" />
            </div>
            <hr />
            <div className='p-4 flex gap-3 sm:gap-0'>
                <Facilitycard facImage="/facility (1).png" facilityType="Inaugurate 10th" />
                <Facilitycard facImage="/facility (2).png" facilityType="Inspiration by Sir" />
            </div>
            <hr />
        </div>
    )
}

export default Facilities
