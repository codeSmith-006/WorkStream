"use client";

// import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0d0b1f] via-[#131129] to-[#0d0b1f] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            About <span className="text-blue-500">WorkStream</span>
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
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
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
          <img
            src="https://i.ibb.co.com/vx8N4bRT/grp1.jpg"
            alt="Team Collaboration"
            width={500}
            height={400}
            className="rounded-xl shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
