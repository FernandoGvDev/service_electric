// src/components/Footer.tsx
import { Instagram, Facebook, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Logo + Nome */}
        <div className="flex items-center space-x-4">
          <img src="/img/logo.png" alt="Logo Service Electric" className="w-16 h-16"/>
          <span className="text-2xl font-bold text-yellow-400">Service Electric</span>
        </div>

        {/* Contato */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">Contato</h3>
          <p>Telefone: +55 51 8416-2970</p>
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
          <p>Email: contato@serviceelectric.com.br</p>
        </div>

        {/* Endereço + Mapa */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">Endereço</h3>
          <p>Rua Exemplo, 123, Bairro Central, Porto Alegre - RS</p>
          <div className="mt-2">
            <iframe
              title="Mapa Service Electric"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1234567890!2d-51.229999!3d-30.034567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977abcdef123%3A0xabcdef123456789!2sRua%20Exemplo%2C%20123%20-%20Porto%20Alegre%20RS!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
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
        © {new Date().getFullYear()} Service Electric. Todos os direitos reservados.
      </div>
    </footer>
  );
}
