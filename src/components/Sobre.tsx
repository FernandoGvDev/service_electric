// src/components/Sobre.tsx
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.KeqOhyMVIKTR0ytngBcNNQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Eletricista trabalhando"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Sobre a <span className="text-yellow-500">RS Service Electric</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Somos especialistas em <strong>instalações e manutenções elétricas</strong>, 
            oferecendo soluções seguras, rápidas e de alta qualidade. 
            Atendemos residências, comércios e indústrias, sempre com foco 
            em eficiência e confiança.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Com anos de experiência e certificações profissionais, garantimos 
            serviços de excelência, respeitando as normas técnicas e prezando 
            pela segurança dos nossos clientes.
          </p>

          <a
            href="#services"
            className="inline-block px-6 py-3 text-lg font-semibold rounded-full bg-yellow-400 text-gray-900 shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
          >
            Conheça nossos serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
}
