// app/dashboard/Article/page.js

"use client";
export const dynamic = 'force-dynamic';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import { useForm } from 'react-hook-form';

function ArticleForm() {
  const searchParams = useSearchParams();
  const author = searchParams.get('author');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("/black screen.jpg");

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const onSubmit = async (data) => {
    if (!file) {
      alert("Please select an image.");
      return;
    }

    alert("Uploading your Article");
    setLoading(true);

    try {
      
      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("author", author);

      await axios.post("/api/blogPost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Article uploaded successfully!");
      setFile(null);
      setPreview("/black screen.jpg");
      setLoading(false);

    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
      setLoading(false);
    }
  };


  return (
    <>
      <p className="text-3xl text-center font-bold mt-10">
        From here you can post your article with the best explaination out there
      </p>
      <div className="mt-10 flex flex-col items-center justify-center h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-4">
          {/* Image preview & upload */}
          <div className="flex flex-col items-center gap-5">
            <img
              src={preview}
              alt="Preview"
              className="w-[80vw] max-w-[600px] object-cover mt-4 rounded-2xl"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="border-2 border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Title */}
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
            className="border-2 border-gray-300 rounded-md p-2 w-[60vw]"
          />
          {errors.title && <span className="text-red-500">Title is required</span>}

          {/* Description */}
          <textarea
            placeholder="Description"
            {...register("description", { required: true })}
            className="border-2 border-gray-300 rounded-md p-2 w-[80vw] h-[40vh]"
          />
          {errors.description && <span className="text-red-500">Description is required</span>}

          {/* Submit button */}
          {!loading && (
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00f4e9] to-[#09817F] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md"
            >
              Upload
            </button>
          )}
        </form>
      </div>
    </>
  );
}

const Article = () => {
  return (
    <div id="main-container" className="bg-[#D4FFFD] w-screen min-h-screen overflow-x-hidden m-0 p-0 text-black">
      <Navbar />
      <Suspense fallback={<p className="text-center mt-20">Loading...</p>}>
        <ArticleForm />
      </Suspense>
    </div>
  );
};

export default Article;
