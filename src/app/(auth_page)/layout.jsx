import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* LEFT: Form area */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          {children}
        </div>
      </div>

      {/* RIGHT: Static info/animation area */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden items-center justify-center p-12">
        {/* gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 animate-pulse opacity-60" />

        {/* overlay content */}
        <div className="relative z-10 text-center space-y-4">
          <h2 className="text-4xl font-extrabold">Welcome to WorkStream</h2>
          <p className="text-lg text-gray-200 max-w-sm mx-auto">
            Manage your projects, collaborate with your team, and stay
            productive — all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}
