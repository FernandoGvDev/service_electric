// src/components/Depoimentos.tsx
import { motion } from "framer-motion";

const depoimentos = [
  {
    nome: "João Silva",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    comentario:
      "Excelente serviço! Resolveu meu problema elétrico com rapidez e profissionalismo.",
  },
  {
    nome: "Cláudia kuligosk",
    foto: "/img/depoimento/claudiaKuligoski.jpeg",
    comentario:"Excelente atendimento, qualidade e agilidade do serviço prestado. Recomendo a empresa RS Service Electric "
  },
  {
    nome: "Maria Oliveira",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
    comentario:
      "Muito confiável e detalhista. Recomendo a Service Electric para qualquer serviço elétrico.",
  },
  {
    nome: "Carlos Souza",
    foto: "https://randomuser.me/api/portraits/men/77.jpg",
    comentario:
      "Equipe muito profissional, atendimento impecável e preços justos.",
  },
];

export default function Depoimentos() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-gray-900"
        >
          Depoimentos de <span className="text-yellow-500">Clientes</span>
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((dep, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition"
            >
              <img
                src={dep.foto}
                alt={dep.nome}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {dep.nome}
              </h3>
              <p className="text-gray-600 italic">"{dep.comentario}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
