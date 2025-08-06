import React from 'react'

const Tools = (Props) => {
    return (
        <>
            <p className='text-center font-[poppins] text-2xl'>Use this Tools to manage this Institute</p>
            <div className='mx-auto flex flex-col items-center justify-center mt-4 mb-4 gap-4 bg-white p-5 rounded-xl shadow-md w-full max-w-md min-w-[40vw]'>
                <div className="m-2">
                    <button className='flex items-center gap-2' onClick={() => { window.location.href = `/dashboard/GalleryImage?author=${Props.author}` }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                        </svg>
                        <p>Upload Chearful Memories on Gallery</p>
                    </button>
                </div>
                <div className="m-2">
                    <button className='flex items-center gap-2' onClick={() => { window.location.href = `/dashboard/GalleryVideo?author=${Props.author}` }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
                            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                        </svg>
                        <p>Upload Victory Video Memories on Gallery</p>
                    </button>
                </div>
                <div className="m-2">
                    <button className='flex items-center gap-2' onClick={() => { window.location.href = `/dashboard/Article?author=${Props.author}` }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
                            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                        <p>Upload an Article on Blog</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Tools
