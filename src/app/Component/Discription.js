import React from 'react'

const Discription = (props) => {
  return (
    <>
      <div className="bg-[#EBDEDE] mx-auto w-screen sm:w-[95vw] 2xl:w-[98vw] p-3 text-black">
        <p className="text-2xl text-center font-[poppins] 2xl:text-4xl">
          {props.title}
          <span className="text-[#09817F] font-extrabold"> {props.lighted} </span>
        </p>
        <p className="font-[poppins] text-center m-4 text-xs font-bold 2xl:text-lg">
          <span className="text-[#09817F] font-bold">“Varunam”</span> {props.disc}
        </p>

        {/* Centered Button */}
        <div className="flex justify-center hover:transform hover:scale-105 transition duration-300">
          <button onClick={() => { window.location.href = props.link }} className="text-[#09817F] px-10 py-1 rounded-4xl font-bold drop-shadow-xl/20 text-xs bg-gradient-to-r from-[#09817f38] to-white hover:from-[#05625f] hover:to-gray-100 transition duration-300 hover:text-black">
            {props.btntext}
          </button>
        </div>
      </div>

    </>
  )
}

export default Discription
