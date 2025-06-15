import React from 'react'
import "./specialbutton.css"

const Course = (props) => {
    return (
        <div id='course' className='w-[95vw] sm:w-[70vw] lg:w-[40vw] rounded-3xl font-poppins bg-[#A64CED]/10 backdrop-blur-lg border-4 m-auto mt-10 p-5 text-center flex flex-col gap-4'>
            <p className='font-lato'>Section {props.section}</p>
            <p className='font-roboto bg-[#3DF4FA] rounded-4xl text-black text-2xl font-bold'>{props.batch}</p>
            {(props.classLevel == "senior") && (<p className='font-poppins text-2xl font-bold'>For class: {props.lowerClass} to {props.upperClass}:---</p>)}
            <p className='font-poppins'>
                <span>
                    <img className='inline' src="/line 13.png" alt="" />
                </span>
                {props.disc}
            </p>
            {(props.classLevel == "junior") && (<p className='font-poppins'>Features: Fun learning, basics to advance, live mentorship</p>)}
            {(props.classLevel == "senior") && (
                <div id='special-icons'>
                    <span>
                        <p className='inline font-lato pr-3'>notes</p>
                        <img className='inline' src="/notes.png" alt="notes" />
                    </span>
                    <span>
                        <img className='inline m-2' src="/line 21.png" alt="line" />
                    </span>
                    <span>
                        <p className='inline font-lato pr-3'>exam</p>
                        <img className='inline' src="/exam.png" alt="exam" />
                    </span>
                    <span>
                        <img className='inline m-2' src="/line 21.png" alt="line" />
                    </span>
                    <span>
                        <p className='inline font-lato pr-3'>video lecture</p>
                        <img className='inline' src="/videolecture.png" alt="video" />
                    </span>
                </div>
            )}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScos1Yh5IyJP5KuIqFVGWZphPZD0-ahquKdbjs7Mg2OlL4EZg/viewform">
                <button className="bg-black px-6 py-2 w-full sm:w-[20vw] mx-auto text-white font-semibold rounded-xl btn">
                    Enquiry
                </button>
            </a>

        </div>
    )
}

export default Course
