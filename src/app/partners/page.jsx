"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
export default function Partners() {
  return (

    
    <section className="relative bg-[#0d0b1f] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Circle Avatars */}
          <div className="relative flex justify-center">
            <div className="w-64 h-64 rounded-full border border-purple-500/40 flex items-center justify-center relative">
              {/* Circle Avatars */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
               <img
                  src="https://i.ibb.co.com/cSx0pkbg/girl1.jpg

"
                  alt="Partner"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div className="absolute top-1/2 -left-6 -translate-y-1/2">
               <img
                  src="https://i.ibb.co.com/C56NdR7Y/men2.jpg"
                  alt="Partner"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div className="absolute top-1/2 -right-6 -translate-y-1/2">
               <img
                  src="https://i.ibb.co.com/ycLXy6Qj/men1.jpg"
                  alt="Partner"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
               <img
                  src="https://i.ibb.co.com/ycLXy6Qj/men1.jpg"
                  alt="Partner"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-white"
                />
              </div>
            </div>
          </div>

          {/* Right: Text + CTA */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Contact To Become a Partner Today
            </h2>
            <p className="text-gray-300 mb-6">
              We believe in building strong, long-lasting relationships with our
              partners, and we’re committed to providing the best possible
              experience. Let’s achieve success together!
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition">
              Reach Us Here →
            </button>
          </div>
        </div>

        {/* Bottom Section: Why Partner */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="bg-[#16142d] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Why Partner With Us</h3>
            <p className="text-gray-300 mb-6">
              By partnering with us, you’ll gain access to powerful software
              solutions that help you manage projects, teams, and clients more
              efficiently.
            </p>
            <ul className="space-y-3">
              {[
                "Extranet/Intranet Software",
                "Project Management Software",
                "CRM Management Software",
                "HR Management Software",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
         <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
        </div>
      </div>
    </section>
  );
}
