// src/components/Header.tsx
import { useState } from "react";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#services" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo + Nome */}
        <div className="flex items-center space-x-3">
          <img
            src="/img/logo.png"
            alt="Service Electric Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold text-yellow-400 tracking-wide">
            RS Service Electric
          </span>
        </div>

        {/* Links desktop */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-lg font-medium"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Ícones redes sociais */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://wa.me/555184162970"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition"
          >
            <Phone size={20} />
          </a>
          <a
            href="https://www.instagram.com/rs_servicelectric?igsh=OTlrbHZuMDJuYzM1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/share/1BsM9FuzWB/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition"
          >
            <Facebook size={20} />
          </a>
        </div>

        {/* Botão menu mobile */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 px-6 py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-yellow-400 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Ícones sociais no mobile */}
            <div className="flex space-x-4 pt-3">
              <a
                href="https://wa.me/555184162970"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://www.instagram.com/rs_servicelectric?igsh=OTlrbHZuMDJuYzM1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1BsM9FuzWB/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
