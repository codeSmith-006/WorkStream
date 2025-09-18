"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sun, Moon } from "lucide-react";

export default function About() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="transition-colors duration-500 bg-white dark:bg-[#0d0b1f] text-black dark:text-white min-h-screen">
        {/* Theme Toggle Button */}
        <div className="absolute top-5 right-5 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:scale-105 transition-transform"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* About Section */}
        <section className="relative py-20 bg-gradient-to-b dark:from-[#0d0b1f] dark:via-[#131129] dark:to-[#0d0b1f] from-gray-100 via-gray-200 to-gray-100 text-black dark:text-white transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                About <span className="text-blue-500">WorkStream</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg transition-colors duration-500">
                WorkStream is a modern project management platform designed to help
                teams collaborate better, move faster, and deliver projects on time.
                With powerful features and an intuitive design, we simplify complex
                workflows into smart, easy-to-use tools.
              </p>

              <ul className="space-y-4">
                {[
                  "Seamless task & project tracking",
                  "Built-in team collaboration tools",
                  "Real-time analytics & reporting",
                  "Integrations with Slack, GitHub & more",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg font-medium transition">
                Learn More →
              </button>
            </div>

            {/* Right: Image / Illustration */}
            <div className="relative flex justify-center">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl transition-colors duration-500" />
              <img
                src="https://i.postimg.cc/26tYbjnm/group-2.webp"
                alt="Team Collaboration"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-20 bg-white dark:bg-[#0d0b1f] text-black dark:text-white overflow-hidden transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Mission */}
            <div>
              <h4 className="uppercase tracking-widest text-sm font-semibold text-blue-400 mb-4">
                Mission
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Our <span className="text-blue-500">mission.</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-500">
                At WorkStream, we believe productivity should be simple and
                powerful. Too many teams are stuck using disconnected tools,
                creating inefficiencies that slow progress.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-500">
                That’s why we built WorkStream — a platform to unify projects,
                people, and performance. Our goal is to make collaboration seamless
                and give teams back valuable time to focus on what truly matters.
              </p>
            </div>

            {/* Right Side - Animated Highlighted Statement */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-gray-100 dark:bg-white text-black dark:text-black rounded-2xl shadow-xl p-8 text-3xl md:text-4xl font-bold leading-snug transition-colors duration-500"
            >
              <span className="text-blue-500">Save teams</span>{" "}
              <span className="text-purple-600">time</span> by making{" "}
              <br />
              the world more <br />
              <span className="text-gray-900 dark:text-gray-900">productive.</span>
            </motion.div>
          </div>

          
        </section>
      </div>
    </div>
  );
}
