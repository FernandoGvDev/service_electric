// src/components/Footer.tsx

import {
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/img/logo.png"
            alt="RS Service Electric"
            className="w-16 h-16 mb-4"
          />

          <h3 className="text-2xl font-bold text-yellow-400">
            RS Service Electric
          </h3>

          <p className="mt-3 max-w-xl text-gray-400">
            Instalações elétricas, manutenção preventiva,
            quadros elétricos, iluminação e soluções para
            residências, comércios e indústrias.
          </p>
        </div>

        {/* Contato */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 text-center">
          <a
            href="tel:+5551984162970"
            className="hover:text-yellow-400 transition"
          >
            📞 (51) 98416-2970
          </a>

          <span className="hidden md:block text-gray-600">•</span>

          <a
            href="https://wa.me/555184162970"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            WhatsApp
          </a>

          <span className="hidden md:block text-gray-600">•</span>

          <span>
            Guaíba - RS
          </span>
        </div>

        {/* Redes */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.instagram.com/rs_servicelectric?igsh=OTlrbHZuMDJuYzM1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:scale-110 transition"
          >
            <Instagram size={26} />
          </a>

          <a
            href="https://www.facebook.com/share/1BsM9FuzWB/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:scale-110 transition"
          >
            <Facebook size={26} />
          </a>
        </div>

        {/* Voltar ao topo */}
        <div className="flex justify-center mt-8">
          <a
            href="#top"
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-5 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            <ArrowUp size={18} />
            Voltar ao topo
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} RS Service Electric. Todos os direitos reservados.
        </div>

        {/* Desenvolvedor */}
        <div className="text-center mt-3 pb-2">
          <a
            href="https://codificaweb.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-yellow-400 transition text-sm"
          >
            Desenvolvido por CodificaWeb
          </a>
        </div>

      </div>
    </footer>
  );
}