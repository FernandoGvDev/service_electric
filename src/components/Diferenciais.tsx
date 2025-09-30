// src/components/Diferenciais.tsx
import { motion } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const diferenciais = [
  {
    icon: <Shield size={36} />,
    title: "Segurança Garantida",
    desc: "Trabalhamos seguindo todas as normas técnicas para a sua segurança.",
  },
  {
    icon: <Clock size={36} />,
    title: "Atendimento Rápido",
    desc: "Agilidade no atendimento para resolver seus problemas elétricos.",
  },
  {
    icon: <Award size={36} />,
    title: "Profissional Certificado",
    desc: "Equipe qualificada com certificações e experiência comprovada.",
  },
  {
    icon: <ThumbsUp size={36} />,
    title: "Serviço de Qualidade",
    desc: "Compromisso com excelência em cada detalhe do serviço prestado.",
  },
];

export default function Diferenciais() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Por que escolher a{" "}
          <span className="text-yellow-400">RS Service Electric?</span>
        </motion.h2>

        {/* Grid de diferenciais */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition"
            >
              <div className="text-yellow-400 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
