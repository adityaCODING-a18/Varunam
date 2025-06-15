"use client"
import Banner from "./Components/Banner";
import Facilities from "./Components/Facilities";
import Footer from "./Components/Footer";
import Herosection from "./Components/Herosection";
import Instuctor from "./Components/Instuctor";
import Navbar from "./Components/Navbar";
import Performers from "./Components/Performers";
import Whyvarunam from "./Components/Whyvarunam";

export default function Home() {
  return (
    <>
      <div id="full-page" className="overflow-x-hidden bg-[#050F1F]">
        <div
          id="hero-section"
          className="w-screen h-screen bg-cover bg-center bg-no-repeat rounded-b-[50px] bg-[url(/hero.png)] sm:bg-[url(/heroforbigscreen.jpg)]"
        >

          <Navbar type="login" />
          <Herosection />
          <hr />
          <Instuctor />
          <hr />
          <Facilities />
          <hr />
          <Banner />
          <hr />
          <Whyvarunam />
          <hr />
          <Performers />
          <hr />
          <br /><br /><br /><br /><br /><br /><br />
          <Footer />
        </div>
      </div>
    </>
  );
}
