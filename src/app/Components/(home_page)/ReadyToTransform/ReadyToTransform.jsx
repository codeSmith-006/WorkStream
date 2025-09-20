"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../UI/Button";

export function ReadyToTransform() {
  const trustItems = [
    "14-day free trial",
    "No credit card required",
    "Set up in 2 minutes",
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern with floating circles */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rounded-full"
        animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border border-gray-400 rounded-full"
        animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-12 h-12 border border-gray-400 rounded-full"
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 border border-gray-400 rounded-full"
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Sparkles + small text */}
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles className="w-8 h-8 text-white mr-3" />
            </motion.div>
            <span className="text-white/90 text-lg">
              Ready to transform your workflow?
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Ready to transform the way{" "}
            <span className="text-accent">your team works?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of teams who have already revolutionized their
            productivity with WorkStream. Start your free trial today – no
            credit card required.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white flex items-center lg:h-18 h-18 px-3 rounded text-black hover:bg-white/90 lg:px-8 lg:py-6 text-lg font-semibold group shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-white flex items-center lg:h-18 h-18 px-3 rounded text-white lg:px-8 lg:py-6 text-lg font-semibold group shadow-lg"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Trust Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8">
            {trustItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx, type: "spring", stiffness: 100 }}
                className="flex items-center space-x-2 text-white/80"
              >
                <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-xs text-green-900">✓</span>
                </div>
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
