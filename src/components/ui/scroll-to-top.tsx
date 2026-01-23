"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = ({ threshold = 300 }: { threshold?: number }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed z-50 bottom-6 right-6 transform transition-all duration-200 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary/40">
        <ArrowUp className="w-5 h-5" />
      </div>
    </button>
  );
};

export default ScrollToTop;
