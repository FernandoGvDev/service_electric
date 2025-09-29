// src/components/FAQ.tsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    pergunta: "Atendem em finais de semana?",
    resposta: "Sim! A Service Electric oferece atendimento emergencial aos finais de semana.",
  },
  {
    pergunta: "Vocês emitem nota fiscal?",
    resposta: "Sim, todos os serviços realizados contam com nota fiscal para sua segurança.",
  },
  {
    pergunta: "Qual o prazo para orçamento?",
    resposta: "Normalmente enviamos orçamento em até 24 horas após avaliação do serviço.",
  },
  {
    pergunta: "Oferecem manutenção preventiva?",
    resposta: "Sim, realizamos inspeções regulares para evitar falhas elétricas futuras.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Perguntas <span className="text-yellow-500">Frequentes</span>
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-semibold hover:bg-gray-50 transition"
              >
                {faq.pergunta}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-700"
                  >
                    {faq.resposta}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
