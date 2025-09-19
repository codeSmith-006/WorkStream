"use client";

import { motion } from "framer-motion";
import Button from "../UI/Button";
import { PlayCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { StarsBackground } from "../Animate-Ui/StarsBackground";
import { Carousel } from "react-responsive-carousel";

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
    "CodeCrafters",
  ];

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      {/* Stars Background */}
      <StarsBackground className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto py-22 px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Left Side */}
          <div className="flex flex-col justify-center space-y-8 md:text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight lg:text-left"
            >
              Streamline Your Work.{" "}
              <span className="text-primary">Empower Your Team.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 md:text-center lg:text-left"
            >
              WorkStream helps teams plan, track, and collaborate on projects
              efficiently with task management, timelines, and real-time
              communication.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {/* Get start Button */}
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground lg:px-8 lg:py-6 text-lg flex items-center justify-center md:px-8 md:py-6 px-4 py-3 "
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {/* Book a Demo button */}
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary lg:px-8 lg:py-6 md:px-8 md:py-6 text-lg flex items-center justify-center px-6 py-3"
                >
                  <PlayCircle className="mr-2 w-5 h-5" />
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Marquee / Trust Companies */}
            <motion.div
              className="overflow-hidden w-full mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-sm text-muted-foreground mb-4 text-center lg:text-left">
                Trusted by teams at:
              </p>

              <div className="overflow-hidden relative w-full">
                <motion.div
                  className="flex gap-12 whitespace-nowrap"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {trustCompanies.concat(trustCompanies).map((name, i) => (
                    <div
                      key={i}
                      className="text-lg font-semibold text-foreground"
                    >
                      {name}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
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

              {/* Carousel Section */}
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                className="rounded-lg overflow-hidden"
              >
                <div>
                  <img
                    src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/a8a3a78d-9cf7-4d45-82f2-dd4ad51ba3d4.png"
                    alt="Dashboard Preview"
                    className="h-64 md:h-80 object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://blog.hubspot.com/hs-fs/hubfs/Doodle%20full%20width%20dashboard%20demo%20in%20dark%20skin.jpg?width=2250&name=Doodle%20full%20width%20dashboard%20demo%20in%20dark%20skin.jpg"
                    alt="Slide 2"
                    className="h-64 md:h-80 object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.shopify.com/app-store/listing_images/6347e264c8d3e24d7b2e8687c58213a8/desktop_screenshot/CLT6pamm8PICEAE=.png?height=1800&width=3200"
                    alt="Slide 3"
                    className="h-64 md:h-80 object-cover"
                  />
                </div>
              </Carousel>
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
               Real-time Analytics
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
