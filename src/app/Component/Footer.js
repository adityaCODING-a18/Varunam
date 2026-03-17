
import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="relative mt-4">
            <footer className="bg-gradient-to-b from-[#004D4D] to-[#003333] text-white pt-12 pb-8 font-poppins relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Independent Logo Section with Premium Effects */}
                    <div className="flex justify-center md:justify-start mb-10">
                        <Link href="/" className="group relative cursor-pointer">
                            {/* Layered Glow Background */}
                            <div className="absolute -inset-4 bg-[#3DF4FA]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700 scale-125 group-hover:scale-150"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#3DF4FA]/30 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>

                            {/* Logo Container with Shine Effect */}
                            <div className="relative overflow-hidden rounded-xl p-2 transform group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                {/* Shimmer Link Sweep */}
                                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                    <div className="absolute top-0 -left-[150%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
                                </div>

                                <Image
                                    src="/footerlogo.png"
                                    alt="Varunam Logo"
                                    width={240}
                                    height={90}
                                    className="relative object-contain drop-shadow-[0_10px_15px_rgba(61,244,250,0.3)] brightness-125 transition-all duration-500"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 text-center md:text-left">
                        {/* Brand Section Info (Logo moved out) */}
                        <div className="lg:col-span-2 flex flex-col items-center md:items-start">
                            <div className="space-y-4 text-gray-200 text-base font-bold">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                                    <span className="font-bold text-[#3DF4FA] min-w-[70px] uppercase tracking-wider text-sm">Address</span>
                                    <p>Varunam Institute,<br />Mallahchak more, Jehanabad,<br />Bihar, India</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3">
                                    <span className="font-bold text-[#3DF4FA] min-w-[70px] uppercase tracking-wider text-sm">Email</span>
                                    <a href="mailto:varunamforvictory@gmail.com" className="hover:text-[#3DF4FA] transition-colors border-b border-transparent hover:border-[#3DF4FA]">
                                        varunamforvictory@gmail.com
                                    </a>
                                </div>
                                <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3">
                                    <span className="font-bold text-[#3DF4FA] min-w-[70px] uppercase tracking-wider text-sm">Phone</span>
                                    <div className="flex gap-2">
                                        <a href="tel:+917004221123" className="hover:text-[#3DF4FA] transition-colors">7004221123</a>
                                        <span className="text-[#3DF4FA]">•</span>
                                        <a href="tel:+919128847256" className="hover:text-[#3DF4FA] transition-colors">9128847256</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Links Grid */}
                        <div className="md:pl-8">
                            <h3 className="text-xl font-black mb-6 text-[#3DF4FA] uppercase tracking-widest after:content-[''] after:block after:w-12 after:h-0.5 after:bg-[#3DF4FA] after:mt-2 after:mx-auto md:after:mx-0">Products</h3>
                            <ul className="space-y-3 text-base font-bold text-gray-200">
                                <li><Link href="/courses#pre-foundation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Pre-Foundation (6 & 7)</Link></li>
                                <li><Link href="/courses#foundation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Foundation (8, 9 & 10)</Link></li>
                                <li><Link href="/courses#physics" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Physics (11 & 12)</Link></li>
                                <li><Link href="/freeclasses" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Free Classes</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-black mb-6 text-[#3DF4FA] uppercase tracking-widest after:content-[''] after:block after:w-12 after:h-0.5 after:bg-[#3DF4FA] after:mt-2 after:mx-auto md:after:mx-0">Company</h3>
                            <ul className="space-y-3 text-base font-bold text-gray-200">
                                <li><Link href="/aboutus" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">About us</Link></li>
                                <li><Link href="/#get-in-touch" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Contact us</Link></li>
                                <li><Link href="/#achievements" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Achievements</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-black mb-6 text-[#3DF4FA] uppercase tracking-widest after:content-[''] after:block after:w-12 after:h-0.5 after:bg-[#3DF4FA] after:mt-2 after:mx-auto md:after:mx-0">Help & Support</h3>
                            <ul className="space-y-3 text-base font-bold text-gray-200">
                                <li><Link href="/#facilities" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Why Choose Us</Link></li>
                                <li><Link href="/terms&conditions" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Privacy Policy</Link></li>
                                <li><Link href="/terms&conditions" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Terms & Conditions</Link></li>
                                <li><Link href="/#get-in-touch" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Support</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 mt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-base font-bold text-gray-300 order-2 md:order-1">
                                &copy; 2025 Varunam. All Rights Reserved.
                            </p>

                            <div className="flex items-center gap-6 order-1 md:order-2">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#1877F2] transform hover:scale-125 transition-all duration-300">
                                    <FaFacebook size={30} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#E4405F] transform hover:scale-125 transition-all duration-300">
                                    <FaInstagram size={30} />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF0000] transform hover:scale-125 transition-all duration-300">
                                    <FaYoutube size={30} />
                                </a>
                            </div>

                            <p className="text-base font-bold text-gray-300 order-3 flex items-center gap-1">
                                Designed by <span className="text-[#3DF4FA] font-black hover:underline cursor-pointer">Aditya Raj</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
