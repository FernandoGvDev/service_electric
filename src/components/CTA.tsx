// src/components/CTA.tsx

import { motion } from "framer-motion";
import { Zap, MessageCircle, ShieldCheck, Clock3 } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-gray-950 text-white py-24 overflow-hidden">
      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-10 left-10 text-yellow-400/20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Zap size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-yellow-400/20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Zap size={80} />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-5 py-2 rounded-full text-sm font-semibold mb-8">
          ⚡ ORÇAMENTO SEM COMPROMISSO
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Precisa de um
          <span className="text-yellow-400">
            {" "}Eletricista de Confiança?
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed"
        >
          Solicite seu orçamento agora mesmo e receba atendimento
          rápido para instalações elétricas, manutenção, quadros
          elétricos, disjuntores e soluções residenciais,
          comerciais e industriais.
        </motion.p>

        {/* Benefícios */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <Clock3
              size={30}
              className="mx-auto text-yellow-400 mb-3"
            />
            <p className="font-semibold">
              Atendimento Ágil
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <ShieldCheck
              size={30}
              className="mx-auto text-yellow-400 mb-3"
            />
            <p className="font-semibold">
              Serviço Seguro
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <Zap
              size={30}
              className="mx-auto text-yellow-400 mb-3"
            />
            <p className="font-semibold">
              Orçamento Sem Compromisso
            </p>
          </div>
        </div>

        {/* CTA */}
        <motion.a
          href="https://wa.me/555184162970"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-full bg-yellow-400 text-gray-900 shadow-2xl hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
        >
          <MessageCircle size={26} />
          Solicitar Atendimento no WhatsApp
        </motion.a>

        {/* Redução de objeção */}
        <p className="text-gray-400 mt-6">
          Atendimento residencial, comercial e industrial.
        </p>
      </div>
    </section>
  );
}