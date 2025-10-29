"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import useDeviceType from '../../../hooks/useDeviceType'; // <-- Adjust path if needed

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Page = () => {
  const [data, setData] = useState([]);
  const deviceType = useDeviceType();
  const isTv = deviceType === "tv";

  const getData = async () => {
    try {
      const res = await axios.get("/api/blogGet");
      console.log(res.data.posts[0].description);
      setData(res.data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (deviceType === "unknown") return null;

  return (
    <div className="bg-[#D4FFFD] w-screen min-h-screen overflow-x-hidden m-0 p-0 text-black">
      <Navbar />
      <p className='text-xl 2xl:text-3xl font-bold text-center text-[#09817F] font-[poppins] mt-10 p-2'>
        Welcome to Our Blog Section of Varunam
      </p>

      <div className="flex flex-wrap justify-center gap-6 px-4 py-10">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-lg max-w-[90vw] w-full flex flex-col gap-4"
            >
              {/* Title */}
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold font-[lato] text-center text-gray-800">
                {item.title}
              </h2>

              {/* Image (TV-aware width) */}
              <div className={`mx-auto aspect-[16/9] w-full ${isTv ? "2xl:w-[50%] max-h-[40%]" : "2xl:w-[80%]"} rounded-2xl overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover
              ${isTv ? "mx-auto max-w-[70vw] max-h-full rounded-3xl" : "max-w-[90vw] max-h-full"} 2xl:max-w-[60vw]`}
                />
              </div>

              {/* Description */}
              <div className="text-base sm:text-lg font-[lato] text-gray-800 text-justify">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {item.description}
                </ReactMarkdown>
              </div>

              {/* Author */}
              <p className="text-sm sm:text-base font-[lato] text-gray-600 text-center flex items-center justify-center gap-1">
                {item.author}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;