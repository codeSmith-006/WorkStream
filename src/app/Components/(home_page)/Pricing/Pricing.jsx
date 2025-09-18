"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function Pricing() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false }); // বারবার animation
  }, []);

  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="max-w-xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold lg:text-5xl sm:text-5xl">
            Pricing & Plans
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Choose the plan that fits your team’s workflow and scale your productivity.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden mt-16 lg:block" data-aos="fade-up" data-aos-delay="100">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-8 pr-4"></th>
                <th className="px-4 py-8 text-center">
                  <span className="text-base font-medium text-blue-600">Free</span>
                  <p className="mt-6 text-6xl font-bold">$0</p>
                  <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                </th>
                <th className="px-4 py-8 text-center">
                  <span className="text-base font-medium text-blue-600">Team</span>
                  <p className="mt-6 text-6xl font-bold">$99</p>
                  <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                </th>
                <th className="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                  <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full">
                    Popular
                  </span>
                  <p className="mt-6 text-6xl font-bold text-white">$150</p>
                  <p className="mt-2 text-base font-normal text-gray-200">Per month</p>
                </th>
                <th className="px-4 py-8 text-center">
                  <span className="text-base font-medium text-blue-600">Enterprise</span>
                  <p className="mt-6 text-6xl font-bold">$490</p>
                  <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Projects", "1", "10", "50", "Unlimited"],
                ["Team Members", "Up to 3", "Up to 20", "Up to 100", "Unlimited"],
                ["Task Management", "Basic", "Advanced", "Advanced + Automation", "Full Suite"],
                ["File Storage", "1 GB", "50 GB", "200 GB", "Unlimited"],
                ["Integrations", "Limited", "Slack, GitHub", "Slack, GitHub, Google Drive, Jira", "All"],
                ["Support", "Community", "Email", "Priority Chat", "24/7 Dedicated"],
              ].map((row, index) => (
                <tr
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 200} // staggered animation
                >
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`px-4 py-4 text-center border-b border-gray-200 ${i === 0 ? "text-left font-medium pr-4" : ""
                        } ${row[0] === "Support" && i === 3 ? "text-white bg-gray-900 border-b border-white/20" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}

              <tr data-aos="fade-up" data-aos-delay="1000">
                <td className="py-6 pr-4"></td>
                <td className="px-4 py-6 text-center">
                  <a
                    href="#"
                    className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Get Started →
                  </a>
                </td>
                <td className="px-4 py-6 text-center">
                  <a
                    href="#"
                    className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Get Started →
                  </a>
                </td>
                <td className="px-4 py-6 text-center text-white bg-yellow-500 rounded-b-xl">
                  <a
                    href="#"
                    className="inline-flex items-center font-semibold text-white"
                  >
                    Get Started →
                  </a>
                </td>
                <td className="px-4 py-6 text-center">
                  <a
                    href="#"
                    className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Get Started →
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
