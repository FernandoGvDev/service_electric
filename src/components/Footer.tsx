// src/components/Footer.tsx
import { Instagram, Facebook, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Logo + Nome */}
        <div className="flex items-center space-x-4">
          <img src="/img/logo.png" alt="Logo Service Electric" className="w-16 h-16"/>
          <span className="text-2xl font-bold text-yellow-400">RS Service Electric</span>
        </div>

        {/* Contato */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">Contato</h3>
          <p>Telefone: +55 51 98416-2970</p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/555184162970"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              Clique aqui
            </a>
          </p>
          <p>Email: contato@rsserviceelectric.com.br</p>
        </div>

        {/* Endereço + Mapa */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">Endereço</h3>
          <p>Rua José Stortti 521 Centro Guaíba - RS</p>
          <div className="mt-2">
            <iframe
              title="Mapa RS Service Electric"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.8340085676!2d-51.32651647155703!3d-30.11319653831995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197ff54a7fc257%3A0xdb363c50f61cc6b6!2sTrav.%20Jose%20Stortti%20-%20Centro%2C%20Gua%C3%ADba%20-%20RS%2C%2092500-000!5e0!3m2!1spt-BR!2sbr!4v1759233950024!5m2!1spt-BR!2sbr"
              className="w-full h-40 rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Redes sociais */}
      <div className="mt-8 border-t border-gray-700 pt-6 flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/rs_servicelectric?igsh=OTlrbHZuMDJuYzM1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          <Instagram size={28} />
        </a>
        <a
          href="https://www.facebook.com/share/1BsM9FuzWB/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          <Facebook size={28} />
        </a>
        <a
          href="https://wa.me/555184162970"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          <Zap size={28} />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm pb-6">
        © {new Date().getFullYear()} RS Service Electric. Todos os direitos reservados.
      </div>
    </footer>
  );
}
