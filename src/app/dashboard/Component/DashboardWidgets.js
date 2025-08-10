"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Component/Navbar";
import { motion } from "framer-motion";
import useDeviceType from "../../../../hooks/useDeviceType";

const Page = () => {
    const [data, setData] = useState([]);

    const deviceType = useDeviceType();
    const isTv = deviceType === "tv";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/ImageGet");
                setData(res.data.image);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    if (deviceType === "unknown") return null;

    return (
        <div className="bg-[#D4FFFD] w-screen overflow-x-hidden text-black">

            <p className="text-center mt-10 font-bold font-[lato] text-[#09817F] text-2xl">
                Latest Post 📸
            </p>

            {/* Images */}
            <div className="flex flex-wrap justify-center mt-10 gap-5">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`relative bg-white/80 backdrop-sepia-0 p-5 rounded-3xl
              ${isTv ? "max-w-[40vw]" : "max-w-[90vw]"}
              2xl:max-w-[40vw] hover:scale-105 transition duration-300 ease-in-out`}
                    >
                        <div className="relative aspect-[3/4] lg:aspect-[3/2] w-full rounded-3xl overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.caption || "Gallery Image"}
                                className="w-full h-full object-cover rounded-3xl"
                            />
                            <p className="absolute bottom-4 left-4 text-sm font-[lato] text-white bg-black/50 px-2 py-1 rounded z-30">
                                {item.caption}
                            </p>
                        </div>

                        <p className="text-sm font-[lato] mt-2 text-center">
                            {item.author}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline">
                                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg>

                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Page;