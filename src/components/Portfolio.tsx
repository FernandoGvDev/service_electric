// src/components/Portfolio.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";

const imagens = [
  "img/servicos/instalacao1.jpeg",
  "img/servicos/instalacao2.jpeg",
  "img/servicos/instalacao3.jpeg",
  "img/servicos/instalacao4.jpeg",
  "img/servicos/instalacao5.jpeg",
  "img/servicos/instalacao6.jpeg",
  "img/servicos/instalacao7.jpeg",
  "img/servicos/instalacao8.jpeg",
  "img/servicos/instalacao9.jpeg",
  "img/servicos/instalacao10.jpeg",
];

export default function Portfolio() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-10"
        >
          Serviços <span className="text-yellow-400">Realizados</span>
        </motion.h2>

        {/* Carrossel */}
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-gray-100 flex items-center justify-center">
          <motion.img
            key={current}
            src={imagens[current]}
            alt={`Serviço ${current + 1}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-h-[500px] object-contain"
          />

          {/* Botão Esquerda */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 text-gray-900 p-2 rounded-full shadow transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Botão Direita */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 text-gray-900 p-2 rounded-full shadow transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* CTA Instagram */}
        <motion.a
          href="https://www.instagram.com/rs_servicelectric?igsh=OTlrbHZuMDJuYzM1"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition"
        >
          <Instagram size={24} />
          Veja mais no Instagram
        </motion.a>
      </div>
    </section>
  );
}
