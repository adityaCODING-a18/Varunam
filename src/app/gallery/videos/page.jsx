"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Component/Navbar";
import useDeviceType from "../../../../hooks/useDeviceType";

const Page = () => {
  const [data, setData] = useState([]);
  const deviceType = useDeviceType();
  const isTv = deviceType === "tv";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/VideoGet");
        setData(res.data.video);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  if (deviceType === "unknown") return null;

  return (
    <div className="bg-[#D4FFFD] w-screen min-h-screen overflow-x-hidden text-black">
      <Navbar />

      <p className="text-xl 2xl:text-3xl font-bold text-center text-[#09817F] font-[poppins] mt-10 p-2">
        Welcome to Our Beautiful Memorizes Collection of Varunam
      </p>

      {/* Buttons */}
      <div className="p-5 rounded-2xl flex justify-center mt-5 gap-5 bg-white/80 backdrop-sepia-0 max-w-[80vw] 2xl:max-w-[40vw] mx-auto">
        <button onClick={() => (window.location.href = "/gallery/images")} className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-400 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline">
  <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
</svg>
 <span className="ml-2 font-[poppins]">View Images</span>
        </button>

        <button
          className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-400 rounded"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline">
  <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
</svg>
 <span className="ml-2 font-[poppins]">View Videos</span>
        </button>
      </div>

      <div className="flex flex-wrap justify-center mt-10 gap-5 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white/80 backdrop-sepia-0 p-5 rounded-3xl hover:scale-105 transition duration-300
              ${isTv ? "max-w-[60vw] max-h-[40vh]" : "max-w-[90vw]"} 2xl:max-w-[40vw]`}
          >
            <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden">
              <video
                controls
                src={item.video}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <p className="text-sm font-[lato] text-black mt-2">{item.caption}</p>
            <p className="text-sm font-[lato] mt-2 text-center">{item.author}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline">
  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>
</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
