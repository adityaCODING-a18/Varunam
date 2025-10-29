"use client";
import React from 'react';
import { useState } from 'react';
import Navbar from '../Component/Navbar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const DeleteContent = () => {

  // Form to select content type
  const { register, handleSubmit, watch } = useForm();
  const [isSelected, setIsSelected] = useState(false);

  // Form for Query parameter input
  const {
    register: registerQuery,
    handleSubmit: handleQuerySubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSelected(true);
    console.log(data.content_type);
  }

  const onQuerySubmit = async (data) => {
    if (isSelected) {
      if (watch("content_type") === "image") {
        try {
          const response = await axios.delete('/api/ImageDelete', {
            data: {
              content_type: 'image',
              query: data.query
            }
          });
          console.log('Delete Response:', response.data);
          alert('Content deleted successfully!');
        } catch (error) {
          console.error('Error deleting content:', error);
          alert('Failed to delete content.');
        }
      }
      else if (watch("content_type") === "video") {
        try {
          const response = await axios.delete('/api/VideoDelete', {
            data: {
              content_type: 'video',
              query: data.query
            }
          });
          console.log('Delete Response:', response.data);
          alert('Content deleted successfully!');
        } catch (error) {
          console.error('Error deleting content:', error);
          alert('Failed to delete content.');
        }
      }
      else if (watch("content_type") === "article") {
        try {
          const response = await axios.delete('/api/ArticleDelete', {
            data: {
              content_type: 'article',
              query: data.query
            }
          });
          console.log('Delete Response:', response.data);
          alert('Content deleted successfully! Now you leave this page.');
        } catch (error) {
          console.error('Error deleting content:', error);
          alert('Failed to delete content.');
        }
      }
    }
  };

  // watch correct field name
  const selectedType = watch("content_type");

  return (
    <div className="bg-[#D4FFFD] w-screen min-h-screen overflow-x-hidden text-black font-[poppins]">
      <Navbar />
      <div className="flex justify-center items-center m-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="content_type">Select your content type:&nbsp;</label>
          <select
            id="content_type"
            {...register("content_type", { required: true })}
          >
            <option value="">-- Select your content type --</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="article">Article</option>
          </select>

          <p>Selected: {selectedType}</p>

          {!isSelected && (<input
            type="submit"
            value="Submit"
            className="mt-3 border px-4 py-1 cursor-pointer bg-white hover:bg-gray-200 rounded"
          />)}
        </form>
      </div>

      <h2 className="text-2xl font-bold text-center mb-4">Instructions to Delete Content</h2>
      <ul className="list-disc list-inside mb-4 px-10">
        <li>Make sure you have selected the correct content type.</li>
        <li>Remember that if your deleting Image or Video then type caption in query parameter or if deleting an Article then type title of that article in query parameter.</li>
      </ul>
      <p></p>

      <form onSubmit={handleQuerySubmit(onQuerySubmit)} className="flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="type your query of caption or title here..."
            {...registerQuery("query", { required: true })}
            className="border-2 border-gray-300 rounded-md p-2 w-[60vw] inline"
          />
        </div>
      </form>

    </div>
  );
};

export default DeleteContent;
