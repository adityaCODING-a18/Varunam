import React from 'react'
import "./herostyle.css";

const Herosection = () => {
    return (
        <div>
            {/* Hero Content Section */}
            <div className="flex flex-col items-center justify-start pt-[10vh] text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-oswald font-extrabold text-white">Varunam</div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mb-5 font-oswald text-white">for Victory</div>
                <p className="mt-2 text-white font-bold font-poppins sm:text-2xl">
                    An Institute run by an Ex-Navy Engineer
                </p>

                <img
                    className="mt-[6vh] w-[150px] h-auto"
                    src="/varunamlogo 2.png"
                    alt="Varunam Logo"
                />

                <div className="mt-[5vh] w-[80vw] p-4 font-lato text-white text-center">
                    <p className="text-lg font-semibold">
                        "Unleash the Warrior Within"
                    </p>
                    <p className="text-md mt-1">
                        Join the Legacy of Discipline, Strength, and Victory at Varunam Institute
                    </p>
                </div>
                <a href="tel:+919128847256">
                    <button className="bg-black p-5 rounded-3xl font-bold font-poppins btn">Call Now</button>
                </a>
            </div>

            {/* Hero Video */}
            <div className="bg-black border-4 border-white w-[90vw] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:w-[80vw] lg:h-[65vh] m-5 mx-auto rounded-3xl overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/S-gaiXFzPB0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default Herosection
