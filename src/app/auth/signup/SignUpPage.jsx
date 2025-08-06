  "use client"
  import React from 'react'
  import axios from 'axios'
  import { useRouter } from 'next/navigation'
  import { useForm } from 'react-hook-form'
  import { zodResolver } from '@hookform/resolvers/zod'
  import { signUpSchema } from '@/schemas/signUpSchema'
  import { useState } from 'react'

  const SignUpPage = () => {

    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm({ resolver: zodResolver(signUpSchema) });

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState("/defaultImage.webp");

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(reader.result);
          setValue("avatar", reader.result);
        }
        reader.readAsDataURL(file);
      }
    };

    const onSubmit = async (data) => {

      console.log(data);

      if (data.signUpAs == "teamMember") {
        const ask = prompt("Enter your team name: ");
        if (ask == "developerlegacy") {
          alert("You are registering as a Team Member of Varunam for Victory.");
        } else {
          data.signUpAs = "student";
          alert("You are registering as a Student of Varunam for Victory.");
        }
      }

      alert("Registering you to Our Institute");
      setLoading(true);
      await axios
        .post("/api/signUp", {
          username: data.username,
          fullname: data.fullname,
          email: data.email,
          standard: data.standard,
          avatar: data.avatar,
          signUpAs: data.signUpAs
        }, { headers: { "Content-Type": "application/json" } })
        .then(() => {
          alert("Congrats! You are registered successfully");
          router.push("/auth/signin");
        })
        .catch((error) => {
          alert("Registeration failed!");
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }


    return (
      <>
        <div className="min-h-screen w-screen bg-gradient-to-b from-[#D4FFFD] to-[#BFF7F5] flex justify-center items-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 sm:p-10 flex flex-col gap-6">

            {/* Logo */}
            <div className="flex justify-center">
              <img
                src="/signin logo.png"
                alt="Varunam Logo"
                className="w-[70vw] sm:w-[50vw] lg:w-[30vw]"
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#09817F] font-[poppins]">
              Register Your Account on Varunam
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

              {/* Profile Picture Upload */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={preview}
                  alt="User Preview"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#09817F] shadow-md"
                />
                <label className="text-sm font-semibold text-gray-700 font-[poppins]">
                  Upload Your Display Picture:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border border-gray-300 rounded-lg p-1 text-sm text-black focus:ring-2 focus:ring-[#09817F] outline-none"
                />
                <p className="text-red-500 text-sm">{errors.avatar?.message}</p>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Username */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    {...register("username")}
                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#09817F] outline-none text-black font-[lato]"
                  />
                  <p className="text-red-500 text-xs">{errors.username?.message}</p>
                </div>

                {/* Fullname */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    {...register("fullname")}
                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#09817F] outline-none text-black font-[lato]"
                  />
                  <p className="text-red-500 text-xs">{errors.fullname?.message}</p>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#09817F] outline-none text-black font-[lato]"
                  />
                  <p className="text-red-500 text-xs">{errors.email?.message}</p>
                </div>

                {/* Standard */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Standard</label>
                  <input
                    type="number"
                    {...register("standard")}
                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#09817F] outline-none text-black font-[lato]"
                  />
                  <p className="text-xs text-gray-500">
                    If you are a team member, enter any class between 6 to 12.
                    It will not be saved.
                  </p>
                  <p className="text-red-500 text-xs">{errors.standard?.message}</p>
                </div>

                {/* Signup As */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Sign Up As</label>
                  <select
                    defaultValue="student"
                    {...register("signUpAs")}
                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#09817F] outline-none text-black font-[lato]"
                  >
                    <option value="student">Student</option>
                    <option value="teamMember">Team Member</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              {!loading && (
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#00f4e9] to-[#09817F] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md"
                >
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      </>

    )
  }

  export default SignUpPage
