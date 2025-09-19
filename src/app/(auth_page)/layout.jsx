"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import register from "../../assets/register.json";
import login2 from "../../assets/login2.json";

export default function AuthLayout({ children }) {
  const [showFirst, setShowFirst] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setShowFirst((prev) => !prev); // switch animation
        setFade(true); // fade in
      }, 500); // fade duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* LEFT: Form area */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          {children}
        </div>
      </div>

      {/* RIGHT: Animation area */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 opacity-60 flex items-center justify-center p-6 transition-opacity duration-500">
          <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"} w-full h-full flex items-center justify-center`}>
            {showFirst ? (
              <Lottie animationData={register} loop={true} />
            ) : (
              <Lottie animationData={login2} loop={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
