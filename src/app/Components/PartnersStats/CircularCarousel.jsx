"use client";

import { motion } from "framer-motion";

const images = [
  "https://i.ibb.co.com/PqGgyvv/Screenshot-2025-09-19-025209.png",
  "https://i.ibb.co.com/nNyzxJSK/Screenshot-2025-09-19-025242.png",
  "https://i.ibb.co.com/cc4ftVby/Screenshot-2025-09-19-025304.png",
  "https://i.ibb.co.com/TMC1W1NQ/Screenshot-2025-09-19-025345.png",
];

export default function AnimatedCircle() {
  return (
    <div className="flex justify-center items-center mt-12 relative w-80 h-80">
      {/* Animated spinning border behind images */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-t-transparent border-b-transparent animate-spin"
        style={{
          borderRightColor: "var(--border-spin)",
          borderLeftColor: "var(--border-spin)",
          boxShadow: "0 0 20px var(--border-spin), 0 0 40px var(--border-spin)",
        }}
      />

      {/* Partner Images */}
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((src, index) => {
          const angle = (360 / images.length) * index;
          return (
            <div
              key={index}
              className="absolute top-1/3 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`,
              }}
            >
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="w-48 h-48 rounded-full border-2 shadow-md object-cover"
                style={{
                  borderColor: "var(--img-border)",
                  boxShadow: "0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.3)",
                //   boxShadow: "0 0 20px var(--img-glow), 0 0 40px var(--img-glow)",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
