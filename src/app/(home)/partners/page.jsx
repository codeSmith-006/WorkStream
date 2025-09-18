"use client";

import { BarChart3, Users } from "lucide-react";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Lightbulb,
  Rocket,
  BarChart,
  Shield,
  CheckCircle,
} from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PartnersStats from "../../Components/PartnersStats/PartnersStats";
import CircularCarousel from "../../Components/PartnersStats/CircularCarousel";
import PartnerCards from "../../Components/PartnersStats/PartnerCards";

const partners = [
  {
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    title: "Project Consultants",
    description:
      "Experts guiding teams with strategies and workflows tailored to your projects.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
    title: "Solution Partners",
    description:
      "Organizations providing plugins, integrations, and tools to boost productivity.",
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "Collaboration Partners",
    description:
      "Companies helping you foster teamwork and improve communication.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-indigo-600" />,
    title: "Innovation Partners",
    description:
      "Startups bringing cutting-edge solutions to project management.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-indigo-600" />,
    title: "Analytics Partners",
    description:
      "Experts in data visualization to track and optimize your workflows.",
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-600" />,
    title: "Security Partners",
    description:
      "Providers keeping your data and workflows secure & compliant.",
  },
];

export default function Partners() {
   const data = [
    { year: "On-time", value: 40, color: "#3b82f6" },
    { year: "Within Budget", value: 35, color: "#06b6d4" },
    { year: "High Quality", value: 25, color: "#facc15" },
  ];

  const size = 140; // smaller chart
  const stroke = 16;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  let offsetStart = 0;
  return (
    <section className="relative py-20 bg-background text-foreground">
      
      <section className="relative w-full bg-[var(--background)]  text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* --- Hero text & image --- */}
          <motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="lg:col-span-2 relative rounded-xl overflow-hidden h-[360px] sm:h-[420px]"
>
  <Carousel
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    autoPlay
    interval={6000}
    className="h-full"
  >
    <div>
      <img
        src="https://i.ibb.co.com/5h6dbVMg/hero02-img02.jpg"
        alt="Team collaborating"
        className="object-cover w-full h-[360px] sm:h-[420px] opacity-60"
      />
    </div>
    <div>
      <img
        src="https://i.ibb.co.com/Rpt7jXCr/aaaa.jpg"
        alt="Team working"
        className="object-cover w-full h-[360px] sm:h-[420px] opacity-60"
      />
    </div>
  </Carousel>

  {/* Text + Button Overlay */}
  <div className="absolute inset-0 flex w-xl flex-col items-start justify-center p-8 sm:p-12 z-10 text-left">
  <h1 className="text-3xl w- sm:text-4xl font-bold mb-3">
    Manage Projects with the Right Partners
  </h1>
  <p className="text-[var(--muted-foreground)] mb-5 max-w-xl text-sm sm:text-base">
    WorkStream helps you connect with certified project managers and
    collaborators so every task stays on track, on budget, and on time.
  </p>
  <button className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--accent-foreground)] px-5 py-2 rounded-md font-medium hover:bg-yellow-300 transition text-sm">
    Explore Solutions
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</div>

</motion.div>


          {/* --- Stats Cards --- */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[var(--card)] p-5 rounded-xl shadow-sm border border-[var(--border)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-6 h-6 text-[var(--primary)]" />
                <h3 className="font-semibold text-base">Performance Boost</h3>
              </div>
              <p className="text-sm text-[var(--muted-foreground)]">
                Teams using WorkStream report faster delivery and better
                alignment across departments.
              </p>
              <div className="mt-3 text-xs flex items-center gap-2 text-[var(--muted-foreground)]">
                <Users className="w-4 h-4" />
                <span>Data by ProjectOps • 2025</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[var(--card)] p-5 rounded-xl shadow-sm border border-[var(--border)]"
            >
              <h3 className="font-semibold mb-3 text-base">Project Success</h3>
              <div className="flex justify-center items-center h-44">
                <svg width={size} height={size}>
                  <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
                    {data.map((d, idx) => {
                      const dash = (d.value / 100) * circumference;
                      const circle = (
                        <motion.circle
                          key={idx}
                          cx={size / 2}
                          cy={size / 2}
                          r={radius}
                          stroke={d.color}
                          strokeWidth={stroke}
                          strokeDasharray={`${dash} ${circumference - dash}`}
                          strokeDashoffset={circumference - offsetStart}
                          fill="transparent"
                          initial={{ strokeDashoffset: circumference }}
                          animate={{
                            strokeDashoffset: circumference - dash - offsetStart,
                          }}
                          transition={{ duration: 1, delay: idx * 0.25 }}
                          strokeLinecap="round"
                        />
                      );
                      offsetStart += dash;
                      return circle;
                    })}
                  </g>
                </svg>
              </div>
              <div className="flex justify-center gap-4 mt-3 text-xs">
                {data.map((d) => (
                  <span key={d.year} className="flex items-center gap-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ background: d.color }}
                    ></span>
                    {d.year}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <PartnersStats></PartnersStats>

    
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top: Avatars + CTA */}
        <div className="grid grid-cols-1 py-18 md:grid-cols-2 gap-12 items-center">
          {/* Avatars */}
          <CircularCarousel></CircularCarousel>

          {/* CTA */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Become a WorkStream Partner Today
            </h2>
            <p className="text-muted-foreground mb-6">
              Build long-lasting relationships with us. We support our partners
              with the tools, visibility, and community they need to succeed.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground hover:bg-secondary rounded-md font-medium transition">
              Contact Us →
            </button>
          </div>
        </div>

        {/* Partner Cards */}
        {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-50 mx-auto">
                {partner.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {partner.title}
              </h3>
              <p className="mt-4 text-gray-600 text-sm">
                {partner.description}
              </p>
              <button className="mt-6 text-indigo-600 font-medium hover:underline">
                Learn more →
              </button>
            </div>
          ))}
        </div> */}
        <PartnerCards></PartnerCards>

        {/* Why Partner Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="bg-card text-card-foreground p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-2xl font-semibold mb-4">Why Partner With WorkStream</h3>
            <p className="text-muted-foreground mb-6">
              Get access to our ecosystem of project management tools and grow
              your business with us.
            </p>
            <ul className="space-y-3">
              {[
                "Project & Team Management Tools",
                "CRM Integrations",
                "Workflow Automation",
                "Advanced Security Features",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            className="relative bg-card rounded-2xl shadow-2xl p-4 border border-border"
          >
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
                  alt="Analytics"
                  className="h-64 md:h-80 object-cover"
                />
              </div>
              <div>
                <img
                  src="https://cdn.shopify.com/app-store/listing_images/6347e264c8d3e24d7b2e8687c58213a8/desktop_screenshot/CLT6pamm8PICEAE=.png?height=1800&width=3200"
                  alt="Collaboration"
                  className="h-64 md:h-80 object-cover"
                />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
