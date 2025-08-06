"use client";
export const dynamic = 'force-dynamic';

import Navbar from "../Component/Navbar";
import React, { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const GalleryForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const searchParams = useSearchParams();
  const author = searchParams.get("author");

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("/black screen.jpg");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        setValue("photo", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    alert("Uploading your image");
    setLoading(true);
    await axios.post("/api/ImagePost", {
      image: data.photo,
      caption: data.caption,
      author: author,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => alert("Image uploaded successfully!"))
    .catch(() => alert("Image upload failed!"))
    .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-5 mt-10">
      <div className="flex flex-col items-center gap-5">
        <img src={preview} alt="Preview" className="w-64 h-96 object-cover mt-4 rounded-2xl" />
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="border-2 border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <input
          type="text"
          placeholder="Caption"
          {...register("caption")}
          className="border-2 border-gray-300 rounded-md p-2 mx-5 w-[80vw] h-[10vh]"
        />
      </div>
      {!loading && (
        <button type="submit" className="bg-gradient-to-r from-[#00f4e9] to-[#09817F] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md">
          Upload
        </button>
      )}
    </form>
  );
};

const Page = () => {
  return (
    <div className="bg-[#D4FFFD] w-screen min-h-screen overflow-x-hidden text-black font-[poppins]">
      <Navbar />
      <p className="text-3xl text-center font-bold mt-10">From here you can post your photos to our gallery</p>
      <Suspense fallback={<p className="text-center">Loading form...</p>}>
        <GalleryForm />
      </Suspense>
    </div>
  );
};

export default Page;