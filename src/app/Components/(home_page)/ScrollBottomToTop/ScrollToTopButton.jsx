import { ArrowUpFromDot } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function ScrollToTopButton() {   
    const [showUp, setShowUp] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 300) {
                setShowUp(true);
            } else {
                setShowUp(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)

    }, []);

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <button
            onClick={scrollTop}
            className={`fixed right-6 bottom-8 z-50 flex items-center justify-center cursor-pointer w-14 h-14 rounded-full bg-[#1e40af] shadow-xl text-white transition-all duration-300 ${showUp ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
           <ArrowUpFromDot />
        </button>
    )
}
