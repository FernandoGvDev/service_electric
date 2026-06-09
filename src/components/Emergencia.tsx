// src/components/Emergencia.tsx

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Zap,
  ShieldAlert,
  MessageCircle,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function Emergencia() {
  return (
    <section className="bg-red-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Alerta */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-5 py-2 rounded-full font-semibold">
            <AlertTriangle size={18} />
            ATENDIMENTO PARA SITUAÇÕES URGENTES
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Está Com Algum
            <span className="text-red-600">
              {" "}Problema Elétrico Agora?
            </span>
          </h2>

          <p className="text-xl text-gray-700 mt-8 leading-relaxed">
            Falta de energia, cheiro de queimado,
            disjuntor desarmando, curto-circuito ou
            qualquer outro problema elétrico podem representar
            riscos para sua família, empresa e patrimônio.
          </p>
        </motion.div>

        {/* Problemas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {[
            "Falta de energia em parte do imóvel",
            "Disjuntor desarmando constantemente",
            "Cheiro de queimado em tomadas",
            "Faíscas ou aquecimento excessivo",
            "Quadro elétrico com falhas",
            "Curto-circuito inesperado",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-red-100"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-red-500 flex-shrink-0 mt-1"
                  size={22}
                />
                <span className="text-gray-800 font-medium">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bloco principal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-3xl shadow-2xl p-10 md:p-14"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Texto */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Não Ignore os Sinais
              </h3>

              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                Problemas elétricos podem evoluir rapidamente e
                causar danos em equipamentos, interrupções nas
                atividades e até riscos mais graves.
              </p>

              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                Quanto antes a situação for avaliada, menores
                costumam ser os riscos e os prejuízos.
              </p>
            </div>

            {/* Benefícios */}
            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
                <Clock3 className="text-yellow-500" size={28} />
                <div>
                  <h4 className="font-bold text-gray-900">
                    Resposta Rápida
                  </h4>
                  <p className="text-gray-600">
                    Atendimento ágil conforme disponibilidade.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
                <ShieldAlert className="text-yellow-500" size={28} />
                <div>
                  <h4 className="font-bold text-gray-900">
                    Segurança em Primeiro Lugar
                  </h4>
                  <p className="text-gray-600">
                    Avaliação cuidadosa da instalação elétrica.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
                <Zap className="text-yellow-500" size={28} />
                <div>
                  <h4 className="font-bold text-gray-900">
                    Soluções Elétricas Profissionais
                  </h4>
                  <p className="text-gray-600">
                    Residencial, comercial e industrial.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <h3 className="text-3xl font-bold text-gray-900">
              Precisa de Ajuda Agora?
            </h3>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Fale diretamente pelo WhatsApp e informe o problema.
              Nossa equipe irá orientar você sobre os próximos passos.
            </p>

            <a
              href="https://wa.me/555184162970"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 rounded-full shadow-xl transition-all hover:scale-105"
            >
              <MessageCircle size={24} />
              Solicitar Atendimento Agora
            </a>

            <p className="mt-4 text-sm text-gray-500">
              Atendimento residencial, comercial e industrial.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}