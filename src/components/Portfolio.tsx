// src/components/Portfolio.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  MessageCircle,
} from "lucide-react";

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
    setCurrent((prev) =>
      prev === 0 ? imagens.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === imagens.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="portfolio" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-5"
        >
          TRABALHOS REALIZADOS
        </motion.span>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Veja Alguns Serviços Executados
          <span className="text-yellow-500">
            {" "}Pela Nossa Equipe
          </span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 mb-14"
        >
          Cada imagem representa um serviço realizado pela
          RS Service Electric com foco em qualidade,
          segurança e acabamento profissional.
        </motion.p>

        {/* Carrossel */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-2xl flex items-center justify-center">
          <motion.img
            key={current}
            src={imagens[current]}
            alt={`Serviço elétrico realizado pela RS Service Electric ${
              current + 1
            }`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-h-[600px] object-contain"
          />

          {/* Botão Esquerda */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Botão Direita */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronRight size={28} />
          </button>

          {/* Contador */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold">
            {current + 1} de {imagens.length}
          </div>
        </div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900">
            Gostou dos Resultados?
          </h3>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso e receba
            atendimento rápido para seu projeto residencial,
            comercial ou industrial.
          </p>

          <a
            href="https://wa.me/555184162970"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-full shadow-xl transition-all hover:scale-105"
          >
            <MessageCircle size={24} />
            Solicitar Orçamento no WhatsApp
          </a>
        </motion.div>

        {/* Instagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-gray-500 mb-5">
            Quer acompanhar mais serviços e projetos realizados?
          </p>

          <a
            href="https://www.instagram.com/rs_servicelectric?igsh=OTlrbHZuMDJuYzM1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all"
          >
            <Instagram size={22} />
            Ver Mais Projetos no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}