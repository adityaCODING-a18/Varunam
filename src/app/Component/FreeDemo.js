import React from 'react'

const FreeDemo = (props) => {
    return (
        <>
            <div className="bg-[#EBDEDE] w-screen p-3 text-black mt-5">
                <p className="text-2xl text-center font-[poppins]">
                    {props.title}
                    <span className="text-[#09817F] font-extrabold"> {props.lighted} </span>
                    {props.subtitle}
                </p>
                <p className="font-[poppins] text-center m-4 font-bold">
                    {props.disc}
                </p>
                <div className="flex justify-center">
                    <button onClick={() => { window.location.href = props.link }} className="text-black border-2 border-gray-500 px-10 py-1 rounded-4xl font-bold drop-shadow-xl/20 text-lg bg-gradient-to-r from-[#d9d9d9] to-white hover:from-[#abfdf6] inset-shadow-sm hover:to-gray-100 transition duration-300 hover:text-black mb-10">
                        {props.btntext}
                    </button>
                </div>
            </div>
        </>
    )
}

export default FreeDemo
