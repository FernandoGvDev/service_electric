// src/components/Servicos.tsx

import { motion } from "framer-motion";
import {
  Zap,
  Lightbulb,
  Plug,
  Wrench,
  Factory,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const servicos = [
  {
    icon: <Plug size={34} />,
    title: "Troca de Tomadas e Interruptores",
    desc: "Instalação e substituição com total segurança.",
  },
  {
    icon: <Zap size={34} />,
    title: "Troca de Disjuntores",
    desc: "Correção de quedas de energia e sobrecargas.",
  },
  {
    icon: <Lightbulb size={34} />,
    title: "Instalação de Iluminação",
    desc: "Luminárias, refletores, LED e iluminação externa.",
  },
  {
    icon: <Wrench size={34} />,
    title: "Manutenção Elétrica",
    desc: "Diagnóstico e reparo de falhas elétricas.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Quadros Elétricos",
    desc: "Montagem, organização e adequação às normas.",
  },
  {
    icon: <Factory size={34} />,
    title: "Serviços Industriais",
    desc: "Manutenção e instalações em ambientes industriais.",
  },
];

export default function Servicos() {
  return (
    <section
      id="services"
      className="bg-white py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-4"
          >
            SOLUÇÕES ELÉTRICAS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Quais Serviços Elétricos Você Precisa?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-600"
          >
            Atendimento residencial, comercial e industrial com
            qualidade, segurança e rapidez.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-gray-900 flex items-center justify-center mb-6">
                {servico.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {servico.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {servico.desc}
              </p>

              <div className="flex items-center gap-2 mt-5 text-green-600 font-medium">
                <CheckCircle2 size={18} />
                Atendimento especializado
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefícios rápidos */}
        <div className="mt-20 bg-gray-900 rounded-3xl p-10 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-yellow-400">
                ✓
              </h4>
              <p className="mt-2">Atendimento Rápido</p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-yellow-400">
                ✓
              </h4>
              <p className="mt-2">Orçamento Sem Compromisso</p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-yellow-400">
                ✓
              </h4>
              <p className="mt-2">Serviço Garantido</p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-yellow-400">
                ✓
              </h4>
              <p className="mt-2">Segurança e Qualidade</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/555184162970"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl transition-all hover:scale-105"
          >
            <MessageCircle size={24} />
            Solicitar Orçamento pelo WhatsApp
          </a>

          <p className="mt-4 text-gray-500">
            Resposta rápida • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}