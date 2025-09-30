// src/components/CTA.tsx
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* Ícones flutuantes */}
      <motion.div
        className="absolute top-10 left-10 text-yellow-400"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Zap size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-yellow-400"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Zap size={40} />
      </motion.div>

      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Precisa de um eletricista agora? <br />
          <span className="text-yellow-400">Fale com a RS Service Electric!</span>
        </motion.h2>

        <motion.a
          href="https://wa.me/555184162970"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-8 py-4 text-lg font-semibold rounded-full bg-yellow-400 text-gray-900 shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
        >
          Chamar no WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
