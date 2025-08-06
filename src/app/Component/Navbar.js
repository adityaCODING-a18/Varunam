'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="z-50 w-[95vw] 2xl:w-[85vw] h-[6vh] sm:h-[8vh] lg:h-[13vh] 2xl:h-[8vh] p-0.5 py-1 m-auto mt-2 flex items-center justify-between bg-white text-black drop-shadow-lg/50 rounded-md relative">
                <div className="flex items-center grow-2 ">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <Image
                            src="/menu.png"
                            alt="menu"
                            width={32}
                            height={22}
                            quality={100}
                            priority
                            className="w-8 h-6 object-contain sm:w-20 sm:h-12 xl:h-8 cursor-pointer"
                        />
                    </button>
                    <div className='flex flex-center items-center gap-2 sm:gap-4'>
                        <Image
                            src="/icon.png"
                            alt="icon"
                            width={48}
                            height={48}
                            quality={100}
                            priority
                            className="w-12 h-12 object-cover mb-1 ml-0 2xl:pl-8 sm:w-20 sm:h-20 xl:h-14"
                        />
                        <Image
                            src="/line 1.png"
                            alt="line"
                            width={2}
                            height={12}
                            quality={100}
                            className="object-contain h-10 m-0 p-0 sm:h-14 sm:w-1 xl:h-12"
                        />
                        <p className="text-[#1B2440] text-3xl font-extrabold font-[rowdies] pt-1 sm:text-5xl xl:text-4xl">
                            Varunam
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-1 mr-2 sm:gap-5 sm:mr-4">
                    <a href="tel:+919128847256">
                        <Image
                            src="/phone.png"
                            alt="phone"
                            width={24}
                            height={24}
                            quality={100}
                            className="object-contain sm:w-10 sm:h-10 xl:h-8 cursor-pointer"
                        />
                    </a>
                    <button className='' onClick={() => router.push('auth/signin')}>
                        <p className='font-light text-xs border rounded-lg p-0.5 sm:p-2 xl:p-1 sm:border-2 cursor-pointer'>sign in</p>
                    </button>
                </div>

                {/* Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[60vw] h-[40vh] bg-[#D4FFFD] shadow-lg rounded-lg p-2 z-50 animate-slideDown overflow-auto">
                        <div id='pages' className='w-full h-full drop-shadow-2xl bg-white rounded-lg p-3 overflow-auto'>
                            {["Home", "Dashboard", "Blog", "Gallery", "Courses", "FreeClasses", "AboutUs", "Terms&Conditions"].map((item, index) => (
                                <div key={index} className='w-full'>
                                    <p className='m-5 mb-5 font-[poppins] font-bold'>
                                        <Link href={item == "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
                                    </p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Animation for dropdown */}
            <style jsx>{`
                .animate-slideDown {
                    animation: slideDown 0.3s ease forwards;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0px);
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
