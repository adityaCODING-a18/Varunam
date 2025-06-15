import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='w-[100vw] h-[10vh] bg-[#050F1F]/70 flex items-center px-4 backdrop-blur-lg'>
            <ul className='flex items-center justify-between w-full lg:w-[80vw] mx-auto'>
                <li className='flex items-center gap-2 grow-7'>
                    <img src="/favicon.png" alt="Logo" className='h-10 w-auto' />
                    <p className='text-3xl font-bold font-poppins text-white'>Varunam</p>
                </li>
                <li className='grow-1 hidden sm:block pt-1 h-[5vh] text-center mx-2 bg-linear-65 from-purple-500 to-pink-500 rounded-4xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 font-poppins border-2 border-double border-cyan-900 shadow-blue-500/50 hover:shadow-xl/30'>
                    <Link href="/">Home</Link>
                </li>
                <li className='grow-1 hidden sm:block pt-1 h-[5vh] text-center mx-2 bg-linear-to-t from-sky-500 to-indigo-500 hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 rounded-4xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 font-poppins border-2 border-double border-cyan-900 shadow-blue-500/50 hover:shadow-xl/30'>
                    <Link href="/course">Course</Link>
                </li>
                <li className='grow-1 hidden sm:block pt-1 h-[5vh] text-center mx-2 bg-linear-to-t from-sky-500 to-indigo-500 hover:bg-linear-65 hover:from-purple-500 hover:to-pink-500 rounded-4xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 font-poppins border-2 border-double border-cyan-900 shadow-blue-500/50 hover:shadow-xl/30'>
                    <Link href="/termsAndConditions">Terms & Conditions</Link>
                </li>
                {/* Menu button for Mobile screen */}
                <li className='sm:hidden relative'>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='w-[5vw] h-[5vh]'
                    >
                        <img src="/vector.png" alt="Menu" />
                    </button>

                    {/* Dropdown */}
                    {menuOpen && (
                        <ul className="absolute right-0 top-[6vh] bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50">
                            <li className="py-1"><Link href="/">Home</Link></li>
                            <li className="py-1"><Link href="/course">Course</Link></li>
                            <li className="py-1"><Link href="/termsAndConditions">Terms & Conditions</Link></li>
                        </ul>
                    )}
                </li>
            </ul>

        </div>
    );
};

export default Navbar;
