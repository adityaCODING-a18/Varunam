import React from 'react'
import "./herostyle.css";

const Herosection = () => {
    return (
        <>
            <div className="w-screen flex flex-col items-center gap-28 pt-[10vh] text-center">
                <div className="text-6xl font-oswald font-extrabold text-white sm:text-7xl md:text-8xl lg:text-9xl">Select your Mission</div>

                <p className="mt-2 lg:pl-9 lg:pr-9 text-gray-50 font-poppins sm:text-3xl lg:text-5xl">
                    Begin your academic training with the discipline of a Ex. Naval engg.
                </p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLScos1Yh5IyJP5KuIqFVGWZphPZD0-ahquKdbjs7Mg2OlL4EZg/viewform">
                    <button className="bg-black p-5 rounded-3xl font-bold font-poppins btn">Explore COURSES</button>
                </a>
            </div>
        </>
    )
}

export default Herosection
