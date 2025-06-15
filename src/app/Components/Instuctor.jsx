import React from 'react'

const Instuctor = () => {
    return (
        <>
            <div id='about-sir-box' className='flex flex-col gap-3 w-[95vw] sm:w-[85vw] lg:w-[55vw] m-auto mt-5 my-10 p-5 pb-10 bg-[#A64CED]/10 min-h-80 backdrop-blur-lg border-4 rounded-3xl'>
                <p className='text-center text-2xl font-light font-montserrat'>
                    About Instructor
                </p>
                <div id='dp-name'>
                    <img src="/instructor.png" alt="" className='mx-auto w-[60vw] sm:w-[55vw] md:w-[50vw] lg:w-[25vw]' />
                    <p className='text-center mt-4 lg:mt-10 text-3xl lg:text-5xl font-lato font-bold'>
                        Abhishek Kumar
                    </p>
                    <p className='text-center mt-4 lg:mb-10 text-xl font-poppins lg:text-2xl'>
                        Ex - SSR (Indian Navy)
                    </p>
                </div>
                <div id='discription' className='font-poppins'>
                    <p className='text-xl font-light'>{`Hello Dear Student,\n`}</p>
                    <p className='font-extralight'>
                        {`\nThis is Abhishek Sir Here to Provide you the best Quality education which supports you to find your goal or ambition you have taken an important steps towards the achievement of your goals and we will put in our best efforts in helping you fulfill them.\n`}
                    </p>
                    <p className="whitespace-pre-line">
                        {`10 year + Experience\nMsc. + B.Ed\nCTET + STET Qualified`}
                    </p>
                    <p>
                        {`\n"A decorated ex-Indian Navy Engg, our founder brings the courage of the seas and the discipline of a soldier into every lesson taught at Varunam Institute. His vision is simple — to create a generation of young warriors, equipped with knowledge, leadership, and unbreakable mindset. What once guarded our nation at sea now builds its future on land. Every student here doesn’t just study — they train to lead."`}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Instuctor
