import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="relative w-screen md:pt-60 lg:pt-96">
                <div id="main-footer" className="relative z-10 w-screen bg-black pt-44 lg:pt-80">
                    <p className="text-center text-white font-extrabold text-3xl font-poppins sm:text-4xl lg:text-6xl">" Varunam for Victory "</p>
                    <p className="text-center text-white font-bold text-2xl font-poppins sm:text-4xl lg:text-5xl">Join us</p>

                    <p className='text-center pt-8 p-2 font-lato text-2xl'>Checkout out Our Social Media Accounts</p>

                    <dl className='mt-10 mb-20'>
                        <dt className='font-lato text-xl p-2 sm:pl-10 md:pl-40 lg:text-center lg:pr-80'>
                            <span>
                                <img className='inline' src="/line 13.png" alt="" />
                            </span>
                            On Youtube
                            <span className='w-screen mx-10'>
                                <img className='inline' src="/vector (0).png" alt="youtuelogo" />
                            </span>
                        </dt>
                        <dd className='text-center'>
                            <a href="https://www.youtube.com/@varunamforvictory">
                                https://www.youtube.com/@varunamforvictory
                            </a>
                        </dd>

                        <dt className='font-lato text-xl p-2 sm:pl-10 md:pl-40 lg:text-center lg:pr-80'>
                            <span>
                                <img className='inline' src="/line 13.png" alt="" />
                            </span>
                            On Instagram
                            <span className='w-screen mx-7'>
                                <img className='inline' src="/vector (1).png" alt="youtuelogo" />
                            </span>
                        </dt>
                        <dd className='text-center'>
                            <a href="https://www.instagram.com/varunam_for_victory/">
                                https://www.instagram.com/varunam_for_victory/
                            </a>
                        </dd>

                        <dt className='font-lato text-xl p-2 sm:pl-10 md:pl-40 lg:text-center lg:pr-80'>
                            <span>
                                <img className='inline' src="/line 13.png" alt="" />
                            </span>
                            On Telegram
                            <span className='w-screen mx-9'>
                                <img className='inline' src="/vector (2).png" alt="youtuelogo" />
                            </span>
                        </dt>
                        <dd className='text-center'>
                            <a href="https://web.telegram.org/k/#@varunamforvictory">
                                https://web.telegram.org/k/#@varunamforvictory
                            </a>
                        </dd>

                        <dt className='font-lato text-xl p-2 sm:pl-10 md:pl-40 lg:text-center lg:pr-80'>
                            <span>
                                <img className='inline' src="/line 13.png" alt="" />
                            </span>
                            On FaceBook
                            <span className='w-screen mx-7'>
                                <img className='inline' src="/vector (3).png" alt="youtuelogo" />
                            </span>
                        </dt>
                        <dd className='text-center'>
                            <a href="https://www.facebook.com/profile.php?id=100071083179594">
                                https://www.facebook.com/profile.php?id=100071083179594
                            </a>
                        </dd>
                    </dl>

                    <p className='text-center font-poppins  mb-20'>Address: Mallahchak More Jehanabad , Bihar
                        Call: +91 9128847256 , 70004221123
                        Email: varunamforvictory@gmail.com
                    </p>

                    <p className='text-center font-poppins text-xl mb-20'>Copyright © by VARUNAM
                        all right reserved </p>
                    <p className='text-center font-orbitron tracking-wider mb-40'>This Website is Designed and Code by student of Varunam - Aditya Raj</p>
                    <hr />
                </div>
                <img
                    src="/varunamlogo 3.png"
                    alt="Varunam Logo"
                    className="absolute top-0 md:top-60 lg:top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 md:w-48 md:h-48 lg:w-80 lg:h-80"
                />
            </div>

        </>
    )
}

export default Footer
