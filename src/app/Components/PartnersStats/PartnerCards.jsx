"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    title: "Verified Consultants",
    description: "Get the best practices, coaching, and help that fits your budget and needs.",
    image: "/Screenshot 2025-09-19 041257.png",
    icon: "👨‍💼",
  },
  {
    title: "SEO Optimization",
    description: "Organizations providing plugins, integrations, and tools to boost productivity.",
    image: "/Screenshot 2025-09-19 041257.png",
    icon: "🛠️",
  },
  {
    title: "Solution Partners",
    description: "Improve time-to-value with services & solutions tailored to your specific business needs.",
    image: "/Screenshot 2025-09-19 041257.png",
    icon: "🤝",
  },
  {
    title: "Alliance Partners",
    description: "Get more value by integrating ClickUp with other critical platforms in your tech stack",
    image: "/Screenshot 2025-09-19 041257.png",
    icon: "🚀",
  },
  {
    title: "Analytics Partners",
    description: "Experts in data visualization to track and optimize your workflows.",
    image: "/Screenshot 2025-09-19 041257.png",
    icon: "📊",
  },
  {
    title: "Security Partners",
    description: "Providers keeping your data and workflows secure & compliant.",
    image: "/Screenshot 2025-09-19 041257.png",
    icon: "🔒",
  },
];

export default function PartnerServices() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Partner Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }} // modern hover animation
              className="relative rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-2xl"
            >
              {/* Background image */}
              <Image
                src={partner.image}
                alt={partner.title}
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient overlay (top transparent → bottom navy blue) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {partner.icon}
                </div>

                <h3 className="text-white text-xl font-semibold">
                  {partner.title}
                </h3>
                <p className="text-sm text-gray-200 mt-2">
                  {partner.description}
                </p>
              </div>

              {/* Bottom button */}
              <div className="absolute bottom-0 inset-x-0 flex justify-center">
                <button className="bg-white text-gray-900 text-sm font-medium px-6 py-2 rounded-tr-2xl rounded-tl-2xl flex items-center gap-2 shadow-md group-hover:shadow-xl transition-all duration-300">
                  VIEW MORE <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
