// src/components/Hero.tsx
import { motion } from "framer-motion";
import { Zap, Lightbulb, Bolt } from "lucide-react";
import { useCallback } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}


export default function Hero() {

  // Função de rastreamento de conversão
  const gtagReportConversion = useCallback((url: string) => {
    const callback = () => {
      if (typeof url !== "undefined") {
        window.location.href = url;
      }
    };

    // Se o gtag estiver disponível, envia o evento
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-17637361779/znIzCJeh-KkbEPOQk9pB", // 🔹 substitua aqui
        value: 1.0,
        currency: "BRL",
        event_callback: callback,
      });
    } else {
      callback(); // fallback caso o gtag não tenha carregado
    }

    return false;
  }, []);
  
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Novo conceito em{" "}
            <span className="text-yellow-400">instalação</span> e{" "}
            <span className="text-yellow-400">manutenção elétrica</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-lg">
            Serviços profissionais com qualidade, agilidade e segurança para sua
            casa ou empresa.
          </p>

          <a
            href="https://wa.me/555184162970"
            onClick={(e) => {
              e.preventDefault();
              gtagReportConversion("https://wa.me/555184162970");
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-semibold rounded-full bg-yellow-400 text-gray-900 shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
          >
            Falar no WhatsApp
          </a>

        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://img.freepik.com/fotos-premium/eletricista-trabalhando-no-painel-eletrico-banner-com-espaco-de-copia_106035-2275.jpg?w=2000"
            alt="Eletricista"
            className="rounded-2xl shadow-2xl"
          />

          {/* Ícones flutuando */}
          <motion.div
            className="absolute top-6 left-6 text-yellow-400"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Zap size={36} />
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-8 text-yellow-400"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Lightbulb size={36} />
          </motion.div>
          <motion.div
            className="absolute top-20 right-1/3 text-yellow-400"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Bolt size={36} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
