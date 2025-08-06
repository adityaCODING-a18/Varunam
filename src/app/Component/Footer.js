import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#004D4D] text-white px-4 py-8 font-poppins">
            <Image
                src="/footerlogo.png"
                alt="Picture of the author"
                width={500}
                height={500}
                className='w-[40%]'
            />
            {/* Top Grid */}
            <div className="max-w-[95vw] sm:max-w-[80vw] 2xl:max-w-[60vw] mx-auto grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
                <div>
                    <h3 className="font-bold text-lg">Varunam</h3>
                    <p className="mt-2 text-xs">Address :</p>
                    <p>Varunam Institute,<br />Mallahchak more , Jehanabad , Bihar, India</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Products</h3>
                    <ul className="mt-2 space-y-1">
                        <li>Pre-Foundation (6 & 7)</li>
                        <li>Foundation (8, 9 & 10)</li>
                        <li>Physics (11 & 12)</li>
                        <li>Free Classes</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Company</h3>
                    <ul className="mt-2 space-y-1">
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Help & Support</h3>
                    <ul className="mt-2 space-y-1">
                        <li>FAQ’s</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Refund/Cancellation</li>
                    </ul>
                </div>
            </div>


            {/* Contact & Social */}
            <div className="mt-60 border-t border-white pt-4 text-center text-sm space-y-2">
                <Image
                    src="/footericons.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className='h-[30%] w-[30%] 2xl:h-[8%] 2xl:w-[8%] mx-auto'
                />
                <p>Email : varunamforvictory@gmail.com</p>
                <p>Phone : 7004221123, 9128847256</p>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-4 text-center text-xs text-white">
                <p>Varunam &copy; All Rights Reserved, 2025</p>
            </div>
            <p className="text-center text-white text-sm mt-6 font-semibold">
                This website is designed and developed by <span className="text-[#3DF4FA] underline">Aditya Raj</span>
            </p>

        </footer>
    );
};

export default Footer;
