// src/components/Depoimentos.tsx

import { motion } from "framer-motion";
import { Star, Quote, MessageCircle } from "lucide-react";

const depoimentos = [
  {
    nome: "Cláudia Kuligoski",
    comentario:
      "Excelente atendimento, qualidade e agilidade do serviço prestado. Recomendo a empresa RS Service Electric.",
  },
  {
    nome: "Oficina de Óculos",
    comentario:
      "Excelente empresa. Profissionais qualificados e ótimo atendimento prestado. Super recomendo.",
  },
  {
    nome: "Cliente Residencial",
    comentario:
      "Atendimento rápido, serviço organizado e tudo funcionando perfeitamente. Ficamos muito satisfeitos.",
  },
  {
    nome: "Cliente Comercial",
    comentario:
      "Pontualidade, profissionalismo e transparência do início ao fim do serviço.",
  },
  {
    nome: "Cliente Industrial",
    comentario:
      "Equipe extremamente competente. Resolveram o problema com rapidez e segurança.",
  },
];

export default function Depoimentos() {
  return (
    <section className="bg-gray-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={28}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            O Que Nossos Clientes Dizem
          </h2>

          <p className="text-gray-400 text-lg mt-6">
            A confiança é construída através de resultados.
            Veja o que nossos clientes relatam sobre nossos serviços.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {depoimentos.map((dep, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <Quote
                size={36}
                className="text-yellow-400 mb-5"
              />

              <p className="text-gray-300 leading-relaxed text-lg">
                "{dep.comentario}"
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="font-bold text-white">
                  {dep.nome}
                </h3>

                <p className="text-gray-500 text-sm">
                  Cliente Verificado
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bloco de confiança */}
        <div className="mt-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-10 text-center">

          <h3 className="text-3xl font-bold text-gray-900">
            Precisa de um Eletricista de Confiança?
          </h3>

          <p className="text-gray-800 mt-4 max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso e receba
            atendimento rápido e profissional.
          </p>

          <a
            href="https://wa.me/555184162970"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 bg-gray-900 text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition"
          >
            <MessageCircle size={22} />
            Solicitar Orçamento pelo WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}