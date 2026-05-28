import { Helmet } from "react-helmet-async";
import PillarCircle from "@/components/PillarCircle";

const Index = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center lg:justify-center pt-20 sm:pt-24 lg:pt-28 pb-12 px-4 overflow-hidden bg-black text-white">
      <Helmet>
        <title>4U Connect – Contabilidade Digital e Inteligência Financeira</title>
        <meta name="description" content="Contabilidade digital, BPO financeiro e soluções tecnológicas para empresas em Barueri e Sorocaba." />
        <meta property="og:title" content="4U Connect – Contabilidade Digital e Inteligência Financeira" />
        <meta property="og:description" content="Contabilidade digital, BPO financeiro e soluções tecnológicas para empresas em Barueri e Sorocaba." />
        <meta property="og:url" content="https://4uconnect.com.br/" />
      </Helmet>
      <h1 className="sr-only">4U Connect - Inteligência Financeira, Contabilidade Digital e Soluções Tecnológicas</h1>
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/fundo.jpg"
          className="w-full h-full object-cover bg-black"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure visibility */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row items-start justify-center gap-x-4 gap-y-12 sm:gap-x-12 sm:gap-y-16 lg:gap-6 mt-8 md:mt-0">
        <PillarCircle
          title="Contabilidade Digital"
          subtitle="Modernize sua contabilidade com agilidade e autonomia"
          variant="green"
          to="/contabilidade-digital"
          hoverImage="/1.png"
          delay={400}
        />
        <PillarCircle
          title="Contabilidade"
          subtitle="BPO completo para empresas em crescimento"
          variant="black"
          to="/contabilidade"
          hoverImage="/2.png"
          delay={600}
        />
        <PillarCircle
          title="Inteligência Financeira"
          subtitle="Mais do que um BPO. Ecossistema financeiro completo"
          variant="navy"
          to="/inteligencia-financeira"
          hoverImage="/3.png"
          delay={800}
        />
        <PillarCircle
          title="Soluções Tecnológicas"
          subtitle="Sites profissionais e atendimento inteligente para o seu negócio"
          variant="orange"
          to="/solucoes-tecnologicas"
          hoverImage="/4.png"
          delay={1000}
        />
      </div>
    </main>
  );
};

export default Index;
