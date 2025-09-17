"use client";
import { ArrowUpFromDot } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // 300px scroll করলেই button দেখাবে
      if (window.scrollY > 300) {
        setShowUp(true);
      } else {
        setShowUp(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-xl text-white transition-all duration-300 ${
        showUp ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
     <ArrowUpFromDot />
    </button>
  );
}
