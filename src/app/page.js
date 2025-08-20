"use client"
import Achivements from "./Component/Achivements";
import AboutInstructor from "./Component/AboutInstructor";
import Discription from "./Component/Discription";
import Facilities from "./Component/Facilities";
import FreeClasses from "./Component/FreeClasses";
import FreeDemo from "./Component/FreeDemo";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import OfferedCourse from "./Component/OfferedCourse";
import Material from "./Component/Material";
import GetInTouch from "./Component/GetInTouch";
import Footer from "./Component/Footer";


// now we are done with landing page and from now we will work on sign up, sign in and login with mongodb and from now we will make this landing site to full functional working app of varunam where user and onwer and data all will work with database api authentication and guide me how do i make this functionallity

export default function Home() {
  return (
    <>
      <div id="main-container" className="bg-[#D4FFFD] w-screen h-screen overflow-x-hidden m-0 p-0 text-black">
        <Navbar />
        <HeroSection />
        <Discription link="/aboutus" title="About" lighted="Varunam" disc="is a leading coaching institute in Jehanabad, Bihar, helping students from Class 6th to 12th achieve excellence in school boards and competitive exams. With expert faculty, innovative teaching methods, and personal attention — we’re here to shape winners." btntext="Know more about us"/>
        <Facilities />
        <Achivements />
        <OfferedCourse />
        <FreeDemo link="https://docs.google.com/forms/d/e/1FAIpQLScos1Yh5IyJP5KuIqFVGWZphPZD0-ahquKdbjs7Mg2OlL4EZg/viewform?pli=1" title="Book Your" lighted="Free Demo" subtitle="session" disc="Get a free academic counselling session" btntext="Book a Free Demo"/>
        <FreeClasses />
        <AboutInstructor />
        <Material />
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
}
