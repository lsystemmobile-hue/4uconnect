import PillarCircle from "@/components/PillarCircle";

const Index = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center lg:justify-center pt-28 pb-12 px-4 overflow-hidden bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover bg-black"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure visibility */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-4 lg:gap-6">
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
      </div>
    </main>
  );
};

export default Index;
