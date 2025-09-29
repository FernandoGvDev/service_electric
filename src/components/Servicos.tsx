// src/components/Servicos.tsx
import { motion } from "framer-motion";
import { Zap, Lightbulb, Plug, Wrench, Shield, Factory } from "lucide-react";

const servicos = [
  {
    icon: <Zap size={36} />,
    title: "Instalações Elétricas",
    desc: "Montagem e manutenção de instalações residenciais e comerciais.",
  },
  {
    icon: <Lightbulb size={36} />,
    title: "Iluminação",
    desc: "Projetos e instalação de iluminação interna e externa.",
  },
  {
    icon: <Plug size={36} />,
    title: "Tomadas e Disjuntores",
    desc: "Instalação e reparo de tomadas, quadros e disjuntores.",
  },
  {
    icon: <Wrench size={36} />,
    title: "Manutenção Preventiva",
    desc: "Inspeções regulares para evitar falhas elétricas.",
  },
  {
    icon: <Shield size={36} />,
    title: "Segurança Elétrica",
    desc: "Instalação de dispositivos de proteção contra choques e surtos.",
  },
  {
    icon: <Factory size={36} />,
    title: "Serviços Industriais",
    desc: "Manutenção elétrica em ambientes industriais.",
  },
];

export default function Servicos() {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Nossos <span className="text-yellow-500">Serviços</span>
        </motion.h2>

        {/* Grid de serviços */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition"
            >
              <div className="text-yellow-500 mb-4">{servico.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {servico.title}
              </h3>
              <p className="text-gray-600">{servico.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
