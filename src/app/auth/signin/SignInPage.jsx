"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignInPage() {

  return (
    <>
      <div className="min-h-screen w-screen bg-gradient-to-b from-[#D4FFFD] to-[#BFF7F5] flex justify-center items-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 sm:p-12 flex flex-col items-center gap-8">

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
            Welcome Back to Varunam
          </h1>
          <p className="text-center text-gray-600 text-sm sm:text-base">
            Sign in to access your dashboard and continue your journey.
          </p>

          {/* Google Sign-In Button */}
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#00f4e94d] to-[#ffffff] hover:from-[#00f4e9] hover:to-[#e0fffe] text-[#05625f] font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full"
          >
            <img
              src="/google.png"
              alt="Google Logo"
              width={24}
              height={24}
              className="inline-block"
            />
            Sign in with Google
          </button>

          {/* Note */}
          <p className="text-center text-sm text-gray-700">
            Don’t have an account yet?{" "}
            <Link
              href="/auth/signup"
              className="text-[#09817F] font-bold underline hover:text-[#05625f] transition-colors duration-300"
            >
              Sign Up here
            </Link>
          </p>
        </div>
      </div>
    </>

  );
}
