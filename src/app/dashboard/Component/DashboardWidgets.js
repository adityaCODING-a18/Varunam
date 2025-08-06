'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DashboardWidgets = ({ isTeamMember }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    const getData = async () => {
        try {
            const res = await axios.get("/api/ImageGet");
            setData(res.data.image || []);
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="bg-[#D4FFFD] px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Latest Posts Card */}
            <div className="bg-white rounded-lg shadow-md p-4 col-span-1 md:col-span-2">
                <h2 className="text-[#09817F] text-xl font-bold font-[lato] text-center mb-4">📸 Latest Posts</h2>

                {error ? (
                    <p className="text-center text-red-600">Failed to load posts.</p>
                ) : data.length === 0 ? (
                    <p className="text-center text-gray-500">No posts available.</p>
                ) : (
                    <div className="flex flex-wrap justify-center gap-4">
                        {data.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                key={index}
                                className="relative bg-white/80 backdrop-sepia-0 p-5 rounded-3xl max-w-[90vw] 2xl:max-w-[40vw]"
                            >
                                {/* Image container */}
                                <div className="relative aspect-[3/4] 2xl:aspect-[3/2] w-full rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 transition-ease-in-out">
                                    <Image
                                        src={item.image}
                                        alt={item.caption || 'Dashboard image'}
                                        fill
                                        className="object-cover rounded-3xl"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    {/* Text overlay */}
                                    <p className="absolute bottom-4 left-4 text-sm font-[lato] text-white bg-black/50 px-2 py-1 rounded z-30">
                                        {item.caption}
                                    </p>
                                </div>
                                <p className="text-sm font-[lato] mt-2 text-center">
                                    {item.author}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 inline ml-1">
                                        <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                                    </svg>
                                </p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default DashboardWidgets;