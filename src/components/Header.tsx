// src/components/Header.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-md shadow-xl py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <a
          href="#inicio"
          className="flex flex-col items-center text-center"
          aria-label="RS Service Electric"
        >
          <img
            src="/img/logo.png"
            alt="RS Service Electric - Eletricista Residencial e Industrial"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "w-14 h-14" : "w-24 h-24"
            }`}
          />

          <span
            className={`font-bold text-white transition-all duration-300 ${
              scrolled
                ? "text-lg tracking-wide"
                : "text-3xl md:text-4xl tracking-wider"
            }`}
          >
            RS SERVICE ELECTRIC
          </span>

          {!scrolled && (
            <span className="text-yellow-400 text-sm md:text-base font-medium mt-1">
              Eletricista Residencial e Industrial
            </span>
          )}
        </a>
      </div>
    </motion.header>
  );
}