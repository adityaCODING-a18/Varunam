"use client";
import Navbar from "../Component/Navbar";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { set } from "mongoose";

const Page = (Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const searchParams = useSearchParams()
  const author = searchParams.get('author')

  const [loading, setLoading] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [preview, setPreview] = useState("/black screen.jpg");

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
    }
  };

  useEffect(() => {
    return () => {
      if (preview && preview !== "/black screen.jpg") {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("caption", data.caption);
    formData.append("author", author);

    try {
      await axios.post("/api/VideoPost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Uploaded successfully");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="bg-[#D4FFFD] w-screen min-h-screen overflow-x-hidden text-black font-[poppins]">
      <Navbar />

      <p className="text-3xl text-center font-bold mt-10">
        From here you can post your video to our gallery
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5 mt-10"
      >
        {/* Image preview & upload */}
        <div className="flex flex-col items-center gap-5">
          <video
            controls
            src={preview}
            className="border-2 border-gray-300 rounded-md p-2 w-[80vw] max-w-[600px]"
          />
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="border-2 border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Caption */}
        <div className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="Caption"
            {...register("caption")}
            className="border-2 border-gray-300 rounded-md p-2 mx-5 w-[80vw] h-[10vh]"
          />
        </div>

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
  );
};

export default Page;