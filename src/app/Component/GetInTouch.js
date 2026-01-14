'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const templateParams = {
            from_name: data.name,
            phone: data.phone,
            gmail: data.gmail,
            message: data.message,
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE,
                process.env.NEXT_PUBLIC_TEMPLATE,
                templateParams,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('✅ Message sent successfully!');
                    reset();
                },
                (err) => {
                    console.log('FAILED...', err);
                    alert('❌ Failed to send message. Try again.');
                }
            );
    };

    return (
        <div id="get-in-touch" className="mt-8 mb-4 p-6 w-[95vw] max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 scroll-mt-24">
            <p className="font-extrabold font-[poppins] text-2xl mb-2">Get In Touch</p>
            <p className="text-sm font-[poppins] mb-4">
                Feel free to share any queries, feedback, complaints, or concerns. We&apos;re here to help and improve your experience.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 font-[poppins]">
                <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    className="border border-gray-300 p-2 rounded-md"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

                <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter a valid 10-digit number"
                        }
                    })}
                    className="border border-gray-300 p-2 rounded-md"
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}

                <input
                    type="email"
                    placeholder="Your Gmail"
                    {...register("gmail", {
                        required: "Gmail is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                            message: "Only Gmail addresses allowed"
                        }
                    })}
                    className="border border-gray-300 p-2 rounded-md"
                />
                {errors.gmail && <span className="text-red-500 text-sm">{errors.gmail.message}</span>}

                <textarea
                    placeholder="Your Message"
                    {...register("message", { required: "Message is required" })}
                    className="border border-gray-300 p-2 rounded-md h-28"
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}

                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#f2f2f2] to-[#00f4e9] text-black font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-all w-[25%] border-2 border-gray-400 font-[poppins]"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default GetInTouch;