// src/components/FAQ.tsx
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    pergunta: "Quais serviços elétricos a RS Service Electric realiza?",
    resposta:
      "Realizamos instalações elétricas, manutenção preventiva e corretiva, troca de disjuntores, instalação de tomadas, iluminação, montagem de quadros elétricos e serviços elétricos residenciais, comerciais e industriais.",
  },
  {
    pergunta: "Vocês atendem residências, empresas e indústrias?",
    resposta:
      "Sim. A RS Service Electric atende clientes residenciais, comerciais e industriais, oferecendo soluções elétricas adequadas para cada necessidade.",
  },
  {
    pergunta: "Quanto tempo leva para receber um orçamento?",
    resposta:
      "Na maioria dos casos, o orçamento é enviado rapidamente após a avaliação das necessidades do serviço.",
  },
  {
    pergunta: "Vocês realizam troca de disjuntores e quadros elétricos?",
    resposta:
      "Sim. Fazemos substituição de disjuntores, manutenção e montagem de quadros elétricos, sempre priorizando segurança e funcionamento adequado da instalação.",
  },
  {
    pergunta: "Quando devo contratar uma manutenção elétrica preventiva?",
    resposta:
      "A manutenção preventiva é recomendada periodicamente para identificar desgastes, evitar curtos-circuitos, reduzir riscos e aumentar a segurança da instalação elétrica.",
  },
  {
    pergunta: "Vocês emitem nota fiscal?",
    resposta:
      "Sim. Os serviços podem ser realizados com emissão de nota fiscal, oferecendo mais segurança e transparência para o cliente.",
  },
  {
    pergunta: "Como solicitar um orçamento com a RS Service Electric?",
    resposta:
      "Basta entrar em contato pelo WhatsApp. Nossa equipe irá entender sua necessidade e orientar sobre os próximos passos.",
  },
  {
    pergunta: "Vocês atendem emergências elétricas?",
    resposta:
      "Sim. Entre em contato pelo WhatsApp para verificar a disponibilidade de atendimento conforme sua localização e necessidade.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Criar script JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        name: faq.pergunta,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.resposta,
        },
      })),
    });
    document.head.appendChild(script);

    // Limpar script quando o componente desmonta
    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
