// src/components/Sobre.tsx

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Wrench,
  MessageCircle,
} from "lucide-react";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.KeqOhyMVIKTR0ytngBcNNQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Eletricista profissional realizando manutenção elétrica"
              className="rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-6 left-6 bg-yellow-400 text-gray-900 px-6 py-4 rounded-2xl shadow-xl">
              <p className="font-bold text-lg">
                Atendimento Residencial,
                Comercial e Industrial
              </p>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-5">
              SEGURANÇA • EXPERIÊNCIA • CONFIANÇA
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Por Que Escolher a
              <span className="text-yellow-500">
                {" "}RS Service Electric?
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Quando o assunto é eletricidade,
              não existe espaço para improvisos.

              Trabalhamos com foco total em
              segurança, qualidade e eficiência,
              oferecendo soluções elétricas para
              residências, empresas e indústrias.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Cada serviço é executado com atenção aos detalhes,
              utilizando técnicas adequadas e seguindo padrões
              que garantem mais segurança para você, sua família
              ou seu negócio.
            </p>

            {/* Benefícios */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex gap-4">
                <ShieldCheck
                  className="text-yellow-500 shrink-0"
                  size={28}
                />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Segurança em Primeiro Lugar
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Serviços realizados com responsabilidade e atenção.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <BadgeCheck
                  className="text-yellow-500 shrink-0"
                  size={28}
                />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Serviço de Qualidade
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Acabamento profissional e soluções duradouras.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3
                  className="text-yellow-500 shrink-0"
                  size={28}
                />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Atendimento Ágil
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Resposta rápida para sua necessidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Wrench
                  className="text-yellow-500 shrink-0"
                  size={28}
                />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Soluções Completas
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Da manutenção à instalação elétrica.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <a
              href="https://wa.me/555184162970"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105"
            >
              <MessageCircle size={22} />
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}