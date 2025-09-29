// src/pages/Home.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Sobre from "../components/Sobre";
import CTA from "../components/CTA";
import Depoimentos from "../components/Depoimentos";
import Diferenciais from "../components/Diferenciais";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main>
            <Hero />
            <Servicos />
            <Sobre />
            <Diferenciais />
            <Depoimentos />
            <FAQ />
            <CTA />
            <Footer />
      </main>

    </div>
  );
}
