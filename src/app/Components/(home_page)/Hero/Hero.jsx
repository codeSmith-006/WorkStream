"use client";

import { motion } from "framer-motion";
import Button from "../UI/Button";
import { PlayCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { StarsBackground } from "../Animate-Ui/StarsBackground";

export function Hero() {
  const trustCompanies = [
    "TechCorp",
    "StartupXYZ",
    "UniverSity",
    "InnoWorks",
    "DevHub",
    "CloudNine",
    "AlphaTeam",
    "NextGen",
    "ByteMasters",
    "CodeCrafters"
  ];
  return (
    <section className="relative min-h-screen py-22 md:pt-36 md:pb-20 overflow-hidden">
      <StarsBackground className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Streamline Your Work. <span className="text-primary">Empower Your Team.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
              WorkStream helps teams plan, track, and collaborate on projects efficiently...
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground px-8 py-6 text-lg">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary px-8 py-6 text-lg flex items-center">
                <PlayCircle className="mr-2 w-5 h-5" /> Book a Demo
              </Button>
            </div>

            {/* Marquee */}
            <div className="overflow-hidden w-full mt-8">
              <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }
                }}
              >
                {trustCompanies.concat(trustCompanies).map((name, i) => (
                  <div key={i} className="text-lg font-semibold text-foreground">{name}</div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              className="relative bg-card rounded-2xl shadow-2xl p-4 border border-border"
            >
              {/* Browser-like header */}
              <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-border">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-muted-foreground ml-4">
                  app.workstream.com
                </div>
              </div>

              <ImageWithFallback
                src="https://i.postimg.cc/QMjWCx8v/dashboard-preview.jpg"
                alt="WorkStream Dashboard Preview"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              ✨ AI-Powered
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              📊 Real-time Analytics
            </motion.div>
          </div>
        </div>
      </div>
    </section>

  );
}
