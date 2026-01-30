import {
  Building2,
  FileKey,
  CreditCard,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";

const AberturaEmpresa = () => {
  useScrollReveal();
  const benefits = [
    {
      icon: Building2,
      title: "Abertura da Empresa",
      description: "Todo o processo de constituição da sua empresa sem custo.",
    },
    {
      icon: FileKey,
      title: "Certificado Digital",
      description: "Certificado digital para assinaturas e obrigações fiscais.",
    },
    {
      icon: CreditCard,
      title: "Conta PJ Digital",
      description: "Conta bancária empresarial digital para começar a operar.",
    },
    {
      icon: Smartphone,
      title: "Gestão via App",
      description: "Acompanhe tudo pelo aplicativo 4U Connect.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Definição do Modelo",
      description: "Analisamos seu negócio e definimos a melhor estrutura.",
    },
    {
      number: "02",
      title: "Registro na Junta",
      description: "Cuidamos de toda a documentação e registro comercial.",
    },
    {
      number: "03",
      title: "Liberação Fiscal",
      description: "Obtemos as licenças para emissão de notas fiscais.",
    },
    {
      number: "04",
      title: "Gestão via App",
      description: "Sua empresa pronta para gerenciar pelo aplicativo.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Fullscreen */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-4u-green">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/fundo.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-br from-4u-green/85 via-black/60 to-black/90 backdrop-blur-[1px]" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in tracking-tight">
            Abertura de Empresa
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            Abra sua empresa 100% grátis com a 4U Connect. <span className="block mt-2">Rápido, simples e sem burocracia.</span>
          </p>

          {/* Botões CTA - Hierarquia Visual */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in px-4"
            style={{ animationDelay: "400ms" }}
          >
            {/* Primary CTA */}
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Quero%20abrir%20minha%20empresa%20gr%C3%A1tis%20com%20a%204U%20Connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-[320px] sm:w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-white text-4u-green shadow-2xl shadow-white/30 border-2 border-white hover:shadow-white/50 hover:-translate-y-1 active:scale-95 relative overflow-hidden"
            >
              <Building2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span className="relative z-10">
                Abrir Empresa Grátis
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-4u-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20abertura%20de%20empresa%20gratuita%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-[320px] sm:w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 active:scale-95 backdrop-blur-sm relative overflow-hidden"
            >
              <WhatsAppIcon size={20} className="transition-transform group-hover:rotate-12" />
              <span className="relative z-10">
                Falar com Especialista
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 bg-4u-green/5 text-4u-green text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-green">
              100% GRATUITO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-4 tracking-tight">
              O que está incluso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-none bg-card border-2 border-border/50 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:shadow-4u-green/20 hover:border-4u-green/30 hover:-translate-y-2 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-none bg-4u-green text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-4u-green/20">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-4u-black mb-3 group-hover:text-4u-green transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center text-4u-black mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            Jornada de Abertura
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-none bg-muted/30 border-2 border-border/50 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:bg-background hover:border-4u-green/30 transition-all duration-500 relative overflow-hidden"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-4u-green group-hover:h-full transition-all duration-500" />
                  <div className="relative z-10">
                    <span className="text-5xl font-bold text-4u-green/20 group-hover:text-4u-green/40 transition-colors duration-500">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-4u-black mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-4u-green text-white relative overflow-hidden group mb-12 border-y-2 border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-4u-black/10 rounded-none -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-none -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight tracking-tight">Abra sua Empresa Sem Custos</h2>
          <p className="text-lg text-white/90 mb-12 leading-relaxed">
            Comece sua jornada empreendedora com o pé direito. Processo 100% digital,
            rápido e gratuito com a expertise da <span className="text-4u-black font-bold">4U Connect</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Quero%20abrir%20minha%20empresa%20gr%C3%A1tis%20com%20a%204U%20Connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-8 py-5 bg-white text-4u-green rounded-none font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95"
            >
              <CheckCircle2 size={20} className="transition-transform group-hover/btn:rotate-12" />
              Abrir Minha Empresa Grátis
            </a>
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20abertura%20de%20empresa%20gratuita%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-8 py-5 bg-white/10 text-white border-2 border-white/20 rounded-none font-bold transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 active:scale-95"
            >
              <WhatsAppIcon size={20} className="transition-transform group-hover/btn:scale-110" />
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      <Footer variant="green" />
    </div>
  );
};

export default AberturaEmpresa;
