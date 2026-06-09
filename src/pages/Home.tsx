// src/pages/Home.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Sobre from "../components/Sobre";
import CTA from "../components/CTA";
import Depoimentos from "../components/Depoimentos";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Emergencia from "../components/Emergencia";
import WhatsappFloat from "../components/WhatsappFloat";

export default function Home() {
  return (
    <div className=" bg-gray-100">
      <Header />

      <main>
            <div id="inicio"><Hero /></div>
            <Emergencia />
            <div id="services"><Servicos /></div>
            <div id="sobre"><Sobre /></div>
            <Depoimentos />
            <Portfolio />
            <FAQ />
            <CTA />
            <div id="contact"><Footer /></div>
            <WhatsappFloat />
      </main>

    </div>
  );
}
