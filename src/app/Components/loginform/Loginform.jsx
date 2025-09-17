"use client";
import { useEffect } from "react";
// import "particles.js";
import Lottie from "lottie-react";
import rocketAnim from "../../../assets/signin.json";
import "./LoginForm.css";
export default function LoginForm() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#00d4ff" },
          shape: { type: "circle" },
          opacity: { value: 0.8, random: true },
          size: { value: 5, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00d4ff",
            opacity: 0.6,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 2,
            random: true,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen  bg-white/10 backdrop-blur-xl flex items-center justify-center">
      {/* Particles Background */}
      <div id="particles-js" className="absolute inset-0"></div>

      {/* Glassy Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-[90%] max-w-5xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Left Side - Lottie */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-gradient-to-br from-cyan-500/60 to-blue-700/20">
          <Lottie animationData={rocketAnim} loop={true} className="w-72 h-72" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold  text-center">Sign In</h2>
          <p className="text-center text-gray-600 mb-6">Welcome Back</p>

          <form className="space-y-5">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-gray-600 dark:text-gray-200 text-sm mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter your username"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-600 dark:text-gray-200 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="••••••••"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex  justify-end">
              <a href="#" className="text-sm forgot text-cyan-400 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 login-btn rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg transition"
            >
              SIGN IN
            </button>

            {/* Register */}
            <p className="text-center signup-link text-gray-600 dark:text-gray-200 text-sm">
              Don’t have an account?{" "}
              <a href="#" className="text-cyan-400 hover:underline font-medium">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
