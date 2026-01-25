import {
  Building,
  FileKey,
  CreditCard,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AberturaEmpresa = () => {
  const benefits = [
    {
      icon: Building,
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
      <PageHero
        title="Abertura de Empresa"
        subtitle="Abra sua empresa 100% grátis com a 4U Connect. Rápido, simples e sem burocracia."
        variant="green"
        backgroundImage="/contabilidade-digital.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-4u-green/10 text-4u-green rounded-full text-sm font-medium mb-4">
              100% GRATUITO
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              O que está incluso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-card border border-border opacity-0 animate-fade-in hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-4u-green/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-4u-green group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                  <benefit.icon size={32} className="text-4u-green group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-4u-green transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Jornada de Abertura
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <span className="text-5xl font-bold text-4u-green/20">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={24}
                      className="hidden md:block absolute top-8 -right-4 text-4u-green/30"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-4u-green text-white relative overflow-hidden group mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-4u-black/10 rounded-full -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Abra sua Empresa Sem Custos</h2>
          <p className="text-lg text-white/90 mb-12 leading-relaxed">
            Comece sua jornada empreendedora com o pé direito. Processo 100% digital,
            rápido e gratuito com a expertise da <span className="text-4u-black font-bold">4U Connect</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20abrir%20minha%20empresa%20gr%C3%A1tis%20com%20a%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 bg-white text-4u-green rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CheckCircle2 size={20} />
              Abrir Minha Empresa Grátis
            </a>
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20abertura%20de%20empresa%20gratuita%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 bg-white/10 text-white border border-white/20 rounded-full font-bold transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl"
            >
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
