"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function InstantSupportForm() {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0b1f] text-black dark:text-white transition-colors duration-500 py-24 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Instant <span className="text-blue-500">Support</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Get in touch with our expert support team today to boost your powerful SaaS experience! Share your queries and one of our fantastic support specialists will respond shortly.
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
      >
        {/* Support Type */}
        <div>
          <label className="block text-sm font-medium mb-1">How can we help?*</label>
          <select className="w-full px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
            <option>Pre-Sales Question</option>
            <option>Technical Issue</option>
            <option>General Inquiry</option>
          </select>
        </div>

        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name*</label>
            <input type="text" className="w-full px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name*</label>
            <input type="text" className="w-full px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email*</label>
          <input type="email" className="w-full px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium mb-1">Summary*</label>
          <input type="text" className="w-full px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description*</label>
          <textarea className="w-full px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none" rows={5}></textarea>
        </div>

        {/* Attachments */}
        <div>
          <label className="block text-sm font-medium mb-1">Attachments</label>
          <label className="flex items-center justify-between px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <span>{fileName}</span>
            <span className="text-blue-500 font-medium">Select files</span>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Max. file size: 256 MB, Max. files: 2
          </p>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg font-medium transition-all duration-300"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
}
