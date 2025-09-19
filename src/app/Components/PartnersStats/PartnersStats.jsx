"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function PartnersStats() {
  const stats = [
    {
      id: 1,
      value: 240,
      suffix: "%",
      title: "Project Efficiency",
      desc: "Optimizing workflows to deliver projects faster and smarter.",
    },
    {
      id: 2,
      value: 625,
      suffix: "+",
      title: "Active Projects",
      desc: "Managing multiple live projects across different teams effectively.",
    },
    {
      id: 3,
      value: 99,
      suffix: "%",
      title: "Client Satisfaction",
      desc: "Ensuring our clients are happy with project outcomes consistently.",
    },
  ];

  return (
    <section className="relative py-6">
      {/* Background design */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-indigo-900 dark:via-gray-900 dark:to-teal-900" /> */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-200/30 dark:bg-indigo-900/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="backdrop-blur bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/30 shadow-md rounded-2xl p-6 flex items-center justify-start gap-6"
            >
              {/* Horizontal layout */}
              <div className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
                <CountUp start={0} end={stat.value} duration={2} suffix={stat.suffix} />
              </div>
              <div>
                <p className="font-semibold text-lg text-gray-700 dark:text-gray-300">{stat.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
