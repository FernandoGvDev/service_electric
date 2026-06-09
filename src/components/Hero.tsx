// src/components/Hero.tsx

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";
import { useCallback } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Hero() {
  const gtagReportConversion = useCallback((url: string) => {
    const callback = () => {
      window.location.href = url;
    };

    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-17637361779/znIzCJeh-KkbEPOQk9pB",
        value: 1.0,
        currency: "BRL",
        event_callback: callback,
      });
    } else {
      callback();
    }

    return false;
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-30 md:pt-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/img/hero-bg.jpg"
          alt="Eletricista residencial e industrial"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* CTA Flutuante Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a
          href="https://wa.me/555184162970"
          onClick={(e) => {
            e.preventDefault();
            gtagReportConversion("https://wa.me/555184162970");
          }}
          className="flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 font-bold py-4 rounded-full shadow-2xl"
        >
          <MessageCircle size={22} />
          Solicitar Orçamento
        </a>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-52 lg:pt-64 pb-20 md:pb-32 flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
            ⚡ Atendimento Residencial e Industrial
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-5xl"
        >
          Eletricista Residencial e Industrial com
          <span className="text-yellow-400">
            {" "}
            Atendimento Rápido e Seguro
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
        >
          Instalações elétricas, manutenção preventiva e corretiva,
          troca de disjuntores, quadros elétricos, iluminação e soluções
          completas para residências, empresas e indústrias.
        </motion.p>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 md:mt-12 w-full flex flex-col items-center"
        >
          <a
            href="https://wa.me/555184162970"
            onClick={(e) => {
              e.preventDefault();
              gtagReportConversion("https://wa.me/555184162970");
            }}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-yellow-400 text-gray-900 font-bold text-base md:text-lg px-6 md:px-10 py-4 md:py-5 rounded-full shadow-2xl hover:scale-105 hover:bg-yellow-300 transition-all duration-300"
          >
            <MessageCircle size={24} />
            Solicitar Orçamento no WhatsApp
          </a>

          <p className="text-xs sm:text-sm text-gray-400 mt-4">
            Resposta rápida • Orçamento sem compromisso
          </p>
        </motion.div>

        {/* Benefícios */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-14 md:mt-20 w-full max-w-5xl"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6">
            <Clock3 className="text-yellow-400 mx-auto mb-4" size={34} />
            <h3 className="font-bold text-lg">
              Atendimento Ágil
            </h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Resposta rápida para atender sua necessidade com eficiência.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6">
            <ShieldCheck className="text-yellow-400 mx-auto mb-4" size={34} />
            <h3 className="font-bold text-lg">
              Segurança e Qualidade
            </h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Serviços executados seguindo padrões técnicos e normas elétricas.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6">
            <BadgeCheck className="text-yellow-400 mx-auto mb-4" size={34} />
            <h3 className="font-bold text-lg">
              Orçamento Sem Compromisso
            </h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Avaliação transparente para você decidir com tranquilidade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}