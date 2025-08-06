import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const page = () => {
  return (
    <>
      <div className='bg-[#D4FFFD] w-screen min-h-screen overflow-x-hidden text-black font-[poppins]'>
        <Navbar />

        {/* About Varunam Starts here! */}

        <p className='text-xl 2xl:text-3xl font-bold text-center text-[#09817F] font-[poppins] mt-10'>About Varunam</p>
        <p className='text-md 2xl:text-lg font-bold text-center font-[poppins] mt-2 p-4'>
            Varunam is more than just an educational platform — it’s a movement to ignite potential, unlock knowledge, and empower the next generation of learners, creators, and leaders. Founded with a mission to deliver high-quality education in a modern, accessible, and engaging format, Varunam blends technology with purpose to shape a brighter future.

Whether you're a student seeking clarity, a curious learner exploring your interests, or a parent who wants the best for their child — Varunam is built for you.
        </p>

        <p className='text-xl 2xl:text-3xl font-bold text-[#09817F] font-[poppins] mt-2 ml-5'>
            📚 What We Offer:
        </p>
        <ul className='text-md 2xl:text-lg font-[poppins] ml-10 p-2 list-disc'>
            <li>Expert-led classes and tutorials</li>
            <li>Conceptual clarity through simplified teaching methods</li>
            <li>Career guidance and personal mentorship</li>
            <li>A vibrant learning community for motivation and growth</li>
        </ul>

        <p className='text-xl 2xl:text-3xl font-bold text-[#09817F] font-[poppins] mt-2 ml-5'>🧠 Meet the Creator Behind the Website</p>
        <p className='text-md 2xl:text-lg font-[poppins] ml-10 p-2'>👋 Hey! I'm Aditya Raj, the developer behind the Varunam website. I specialize in crafting modern, high-performance websites with tools like Next.js, Next-Auth, TailwindCSS, React, and MongoDB — backed by real authentication and smooth UI/UX experiences.</p>
        <p className='text-md 2xl:text-lg font-[poppins] ml-10 p-2'>If you're looking to build your own website — whether it's for your business, personal brand, or startup — I’d be happy to help you bring your vision to life.</p>

        <p className='text-xl 2xl:text-3xl font-bold text-[#09817F] font-[poppins] mt-2 ml-5'>📩 Reach out to me:</p>
        <p className='text-md 2xl:text-lg font-[poppins] ml-10 p-2'>📱 Instagram: <a href="https://www.instagram.com/aditya.raj_official_/" className='underline'>@aditya.raj_official_</a></p>
        <p className='text-md 2xl:text-lg font-[poppins] ml-10 p-2'>🔗 LinkedIN: <a href="https://www.linkedin.com/in/aditya-raj-33a746372/" className='underline'>Aditya Raj - Full stack web developer</a></p>
        <p className='text-md 2xl:text-lg font-[poppins] ml-10 p-2'>📧 GitHub Profile 👉: <a href="https://github.com/adityaCODING-a18" className='underline'>adityaCODING-a18</a></p>

        <p className='text-xl 2xl:text-3xl font-bold text-[#09817F] font-[poppins] mt-2 ml-5'>🙏 Thank You for Being Part of Varunam</p>
        <p className='text-md 2xl:text-lg font-[poppins] ml-10 p-2 mb-56'>Every learner, every visitor, and every dreamer who interacts with Varunam contributes to its mission. This is just the beginning — and the best is yet to come.</p>

        <Footer />

      </div>
    </>
  )
}

export default page;

export const metadata = {
  title: 'About Varunam | Empowering Learners with Technology',
  description: 'Discover the mission and vision behind Varunam — an educational movement blending technology with purpose to support students, parents, and curious learners.',
  keywords: ['about Varunam', 'Aditya Raj', 'Varunam founder', 'educational platform', 'next-gen learning', 'Varunam mission'],
  openGraph: {
    title: 'About Varunam – Learn the Story Behind the Platform',
    description: 'Learn about Varunam’s purpose, creator, and offerings. Meet Aditya Raj and discover how this platform is built to empower the next generation.',
    url: 'https://varunam.com/aboutus',
    siteName: 'Varunam',
    type: 'website',
  },
};
