"use client"
import React from 'react'
import Navbar from './CourseComponents/Navbar'
import Herosection from './CourseComponents/Herosection'
import CousesBox from './CourseComponents/CousesBox'
import Footer from './CourseComponents/Footer'
import MainFooter from '../Components/Footer'

const page = () => {
    return (
        <>
            <div id="full-page" className="overflow-x-hidden bg-[#050F1F]">
                <div
                    id="hero-section"
                    style={{ backgroundImage: "url('/hero2.png')" }}
                    className="w-screen h-screen bg-cover bg-center bg-no-repeat rounded-b-[20px] object-contain"
                >
                    <Navbar />
                    <Herosection />
                </div>
                <hr className='mb-10'/>
                <CousesBox />
                <Footer />
                <MainFooter />
            </div>
        </>
    )
}

export default page
