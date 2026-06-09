// src/components/WhatsappFloat.tsx

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsappFloat() {
  return (
    <motion.a
      href="https://wa.me/5551984162970?text=Olá! Preciso de um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      className="fixed bottom-5 right-5 z-[9999] group"
    >
      {/* Texto */}
      <div className="hidden md:flex absolute right-20 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg whitespace-nowrap font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
        Atendimento rápido no WhatsApp
      </div>

      {/* Pulsação */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

      {/* Botão */}
      <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
        <MessageCircle size={32} className="text-white" />
      </div>
    </motion.a>
  );
}