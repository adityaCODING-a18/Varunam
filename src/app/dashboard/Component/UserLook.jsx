import React from 'react';
import Image from 'next/image';

const UserLook = ({ img, username, fullname, teamMember }) => {
    return (
        <div className="mx-auto 2xl:mx-[10vw] m-5 2xl:m-10 2xl:pl-20 flex items-center gap-4 2xl:gap-14 bg-white p-4 rounded-xl shadow-md w-full max-w-md min-w-[80vw]">
            {img && (
                <div className="w-56 h-56 relative rounded-full overflow-hidden border border-gray-300">
                    <Image
                        src={img}
                        alt={`${username}'s avatar`}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="flex flex-col">
                <p className="text-2xl 2xl:text-4xl font-semibold text-black">{fullname} {teamMember && <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-6 inline">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                </span>}</p>
                <span className="text-lg text-gray-600">@{username}</span>
            </div>
        </div>
    );
};

export default UserLook;
