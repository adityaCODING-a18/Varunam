import React from 'react'

const Facilitycard = (props) => {
    return (
        <div className="relative w-[40vw] h-[30vh] sm:w-[30vw] sm:h-[40vh] lg:w-[20vw] lg:h-[50vh] mx-auto">
            {/* Outer Card */}
            <div className='absolute bg-[#A64CED]/10 backdrop-blur-lg w-full h-full rounded-3xl border-4 z-0'></div>
            {/* Inner Card */}
            <div className='relative bg-[#A64CED]/20 backdrop-blur-lg w-full h-full rounded-3xl border-2 z-10 flex flex-col gap-4 items-center justify-center text-white font-semibold p-1'>
                <img className='sm:w-[20vw]' src={props.facImage} alt="facility" />
                <p className='font-lato p-2 sm:text-2xl'>{props.facilityType}</p>
            </div>
        </div>
    )
}

export default Facilitycard
