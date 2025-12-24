"use client";
export const dynamic = 'force-dynamic';

import React, { useState, useRef } from 'react'
import Navbar from '../Component/Navbar'
import { useForm } from 'react-hook-form';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const AiArticleForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState([]);
  const [article, setArticle] = useState({});
  const [isgenerated, setIsgenerated] = useState(false);
  const [primeLoading, setPrimeLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const primeLoader = useRef(null);
  const banner = useRef(null);

  const searchParams = useSearchParams();
  const author = searchParams.get('author');

  const onSubmit = async (kwords) => {
    setIsLoading(true);
    try {
      const prompt = `You are an expert content strategist and SEO researcher.
Your task is to generate highly specific, deeply insightful, non-obvious hook-style content titles related to the keyword "${kwords.keyword}".

Go three layers deeper than surface-level or introductory content.
Avoid broad, generic, or repetitive topics.

Focus on fresh intersections, emerging debates, and contrarian or underexplored frameworks within or around the keyword.

Each title must sound like a compelling, standalone article idea that would intrigue experts and serious readers.

Titles should feel like what a top-tier science, tech, or thought-leadership publication (e.g., Nautilus, Wired, Aeon, Quanta, or Noēma) would publish.

Formatting requirement:

Return the output as a valid JavaScript array of strings.

Each title should be wrapped in double quotes.

Do not include any numbering, explanations, or extra text.`;

      await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      }).then(res => res.json()).then(data => {
        const output = data.choices[0].message.content;
        try {
          const parsedTopics = JSON.parse(output);
          setTopics(parsedTopics);
        } catch {
          console.error("Failed to parse topics. Response:", output);
          setTopics([]);
        }
        setValue("keyword", "");
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 3000);
  };

  const base64ToFile = async (base64, filename) => {
    const res = await fetch(base64);
    const blob = await res.blob();
    return new File([blob], filename, { type: blob.type });
  };


  const generateArticleImage = async (title) => {
    try {
      const prompt = `Create a visually captivating and thematically relevant image that encapsulates the essence of the article titled: "${title}". The image should be designed to engage readers and complement the article's content effectively.`;
      const response = await fetch("/api/imagegenerator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Prompt: prompt
        })
      });
      const url = await response.json();

      const imageBase64 = "data:image/png;base64," + url.image_url;

      const imageFile = await base64ToFile(imageBase64, "article.png");

      setArticle(prev => ({
        ...prev,
        image: imageBase64,
      }));

      setFile(imageFile);


    } catch (err) {
      console.error(err);
    }
  }

  const generateArticle = async (topic) => {
    setPrimeLoading(true);
    setTimeout(() => {
      primeLoader.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    const prompt = `Write a deeply informative and engaging article on the topic: "${topic}".

Use simple, natural, and easy-to-understand English while keeping the content rich in knowledge, accuracy, and depth.
Begin directly with the main subject — no introductions, no calls to action — just dive straight into clear, well-structured explanations.

Focus on these points:

Explain key ideas and facts with precision and logic.

Use real-world examples, comparisons, or analogies to make complex ideas easy to grasp.

Keep sentences concise and transitions smooth, so the text flows naturally.

Maintain a neutral, factual, and professional tone — no opinions or fluff.

Make the reading experience enjoyable and vivid, using clarity and rhythm to hold attention.

At the end, include a short, insightful summary that neatly wraps up the core ideas — no repetition, just a clean, satisfying conclusion.

The final result should feel like it was written by a world-class expert who can teach complex topics in plain, fascinating language — direct, deep, and fun to read.`;

    // Logic to generate article based on the topic aka Api call has been done here
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      setIsgenerated(true);
      setArticle(prev => ({
        ...prev,
        title: topic,
        content: data.choices?.[0]?.message?.content || "No response",
      }));

      await generateArticleImage(topic);
      console.log("✨ Generated Article Successfully");

    } finally {
      setPrimeLoading(false);
    }
  }

  const uploadArticle = async () => {
    if (!file) return alert("Please select an image");

    setLoading(true);
    alert("Uploading your article");

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", article.title);
      formData.append("description", article.content);
      formData.append("author", author);

      await axios.post("/api/blogPost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Article uploaded successfully!");
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
      setLoading(false);
    }

  }

  return (
    <div className='bg-[#D4FFFD] w-screen min-h-screen overflow-x-hidden text-black font-[poppins]'>
      <Navbar />
      <div className="mt-10 flex flex-col items-center justify-center h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col items-center gap-5">
            <label className="mx-5 sm:m-0 text-gray-600 self-start">Enter keyword of your topic. so, that varunam's Ai can help you to give you best and unique ideas for your article</label>
            <div>
              <FaSearch className='inline mr-2' />
              <input
                type="text"
                placeholder="type your keyword here..."
                {...register("keyword", { required: true })}
                className="border-2 border-gray-300 rounded-md p-2 w-[60vw] inline"
              />
            </div>
            {errors.keyword && <span className="text-red-500">Keyword is required</span>}
            {/* ⚡ Cyber Glow AI Thinking Animation */}
            {isLoading && (
              <div className="relative flex flex-col items-center justify-center mt-8 space-y-4">

                {/* Moving gradient background glow */}
                <div className="absolute w-40 h-40 bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 
                    rounded-full blur-3xl opacity-60 animate-[spin_6s_linear_infinite]"></div>

                {/* Core AI pulse */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-16 h-16 bg-blue-400 rounded-full opacity-70 blur-sm animate-ping"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-400 
                      rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse"></div>
                </div>

                {/* Typing dots (AI processing effect) */}
                <div className="flex space-x-2 mt-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                </div>

                {/* Text below */}
                <p className="text-blue-700 font-semibold tracking-wide animate-pulse">
                  ⚡ Varunam’s AI is decoding your keyword...
                </p>
              </div>
            )}
          </div>
        </form>

        {/* 👇 Show Generated Topics (Responsive) */}
        <div className="mt-10 w-[90vw] sm:w-[80vw] max-w-3xl px-2">
          {topics.length > 0 && (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-700">
                Generated Article Ideas ✨
              </h2>

              <ul className="list-disc list-inside space-y-3">
                {topics.map((topic, index) => (
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between 
                       text-gray-800 bg-white/70 p-3 rounded-md shadow-sm 
                       hover:shadow-lg transition-all duration-300"
                  >
                    {/* Topic text */}
                    <span className="mb-2 sm:mb-0 sm:mr-3 text-sm sm:text-base break-words">
                      {topic}
                    </span>

                    {/* Buttons section */}
                    <div className="flex flex-wrap gap-2 justify-end">
                      <button
                        onClick={() => generateArticle(topic)}
                        className="text-xs sm:text-sm bg-blue-500 hover:bg-blue-600 text-white 
                           px-3 py-1 rounded-md transition"
                      >
                        Generate ✨
                      </button>

                      <button
                        onClick={() => copyToClipboard(topic, index)}
                        className="text-xs sm:text-sm bg-blue-500 hover:bg-blue-600 text-white 
                           px-3 py-1 rounded-md transition"
                      >
                        {copiedIndex === index ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* ⚡ Cyber Glow AI Thinking Animation */}
        {primeLoading && (
          <div ref={primeLoader} className="relative flex flex-col items-center justify-center mt-20 space-y-4">

            {/* Moving gradient background glow */}
            <div className="absolute w-40 h-40 bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 
                    rounded-full blur-3xl opacity-60 animate-[spin_6s_linear_infinite]"></div>

            {/* Core AI pulse */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 bg-blue-400 rounded-full opacity-70 blur-sm animate-ping"></div>
              <div className="relative w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-400 
                      rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse"></div>
            </div>

            {/* Typing dots (AI processing effect) */}
            <div className="flex space-x-2 mt-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
            </div>

            {/* Text below */}
            <p className="text-blue-700 font-semibold tracking-wide animate-pulse">
              ⚡ Varunam’s AI is Generating your Legendary Article...
            </p>
          </div>
        )}

        <hr className="m-5 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse border-0" />

        {/* 👇 Show Generated Article */}
        {isgenerated && !primeLoading && (
          <div className="mt-40 w-[90vw] sm:w-[80vw] max-w-3xl px-2 mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-700">
              {article.title}
            </h2>
            {/* Ai Generated Article Banner */}
            {article.image && (
              <div className="relative w-full h-80 mb-8 overflow-hidden rounded-xl shadow-lg group">
                <img
                  loading="lazy"
                  ref={banner}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Optional gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                {/* Optional text overlay (you can remove this if not needed) */}
                <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                  <h2 className="text-lg font-semibold">{article.title}</h2>
                </div>
              </div>
            )}

            <div className="bg-white/70 p-5 rounded-md shadow-md whitespace-pre-line text-gray-800">
              {article.content}
            </div>
          </div>
        )}

        {/* ⚡ Cyber Glow AI Thinking Animation */}
        {loading && (
          <div className="relative flex flex-col items-center justify-center mt-2 space-y-4">

            {/* Moving gradient background glow */}
            <div className="absolute w-40 h-40 bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 
                    rounded-full blur-3xl opacity-60 animate-[spin_6s_linear_infinite]"></div>

            {/* Core AI pulse */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 bg-blue-400 rounded-full opacity-70 blur-sm animate-ping"></div>
              <div className="relative w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-400 
                      rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse"></div>
            </div>

            {/* Typing dots (AI processing effect) */}
            <div className="flex space-x-2 mt-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
            </div>

            {/* Text below */}
            <p className="text-blue-700 font-semibold tracking-wide animate-pulse">
              ⚡ Uploading your Article to Varunam...
            </p>
          </div>
        )}

        {!loading && (<button className="m-10 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => uploadArticle()}>
          Upload
        </button>)}

      </div>
    </div>
  )
}

export default AiArticleForm