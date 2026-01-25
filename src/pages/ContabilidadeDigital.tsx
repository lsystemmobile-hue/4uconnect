import {
  CheckCircle2,
  UserCheck,
  ShieldCheck,
  Users,
  BarChart,
  Settings,
  FileText,
  BarChart3,
  Calculator,
  FileCheck,
  RefreshCw,
  Package
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ContabilidadeDigital = () => {
  const services = [
    {
      icon: FileText,
      title: "Integração de Notas Fiscais",
      description:
        "Integração automática de notas fiscais e pagamentos para maior agilidade e precisão.",
    },
    {
      icon: BarChart3,
      title: "Balancetes e DRE",
      description:
        "Balancetes, Balanço Patrimonial e Demonstração de Resultados sempre atualizados.",
    },
    {
      icon: Calculator,
      title: "Apuração de IRPJ e CSLL",
      description:
        "Cálculo preciso e entrega dentro dos prazos de todas as obrigações tributárias.",
    },
    {
      icon: FileCheck,
      title: "Entrega de ECD e ECF",
      description:
        "Escrituração Contábil Digital e Escrituração Contábil Fiscal em conformidade.",
    },
    {
      icon: RefreshCw,
      title: "Conciliações Contábeis",
      description:
        "Conciliações mensais para garantir a integridade dos dados contábeis.",
    },
    {
      icon: Package,
      title: "Controle de Ativo Imobilizado",
      description:
        "Gestão completa do patrimônio com depreciação e controle de ativos.",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Contabilidade Digital"
        subtitle="Contabilidade digital pensada para prestadores de serviços e empresas que buscam praticidade, controle e conformidade fiscal por meio da tecnologia."
        variant="green"
        backgroundImage="/contabilidade-digital.jpg"
      />

      {/* Serviços Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-6">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tecnologia e expertise contábil para transformar sua gestão financeira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
                variant="green"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-4u-green/10 text-4u-green rounded-full text-sm font-bold mb-4 tracking-widest uppercase">
              Planos e Preços
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black">
              Escolha o plano ideal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center max-w-7xl mx-auto">
            <PricingCard
              name="Plano SMALL"
              price="R$ 259,00"
              features={[
                { text: "Até 5 notas fiscais/mês", icon: CheckCircle2 },
                { text: "Pró-labore até 2 sócios", icon: UserCheck },
                { text: "Até R$ 250k/ano", icon: BarChart },
                { text: "Folha à parte", icon: Settings },
              ]}
              delay={0}
              variant="green"
            />
            <PricingCard
              name="Plano SMART"
              price="R$ 389,00"
              featured={true}
              features={[
                { text: "Tudo do Plano SMALL", icon: CheckCircle2 },
                { text: "Até 10 notas/mês", icon: CheckCircle2 },
                { text: "Até 3 sócios", icon: UserCheck },
                { text: "Relatórios trimestrais", icon: BarChart },
                { text: "Entrega de CNDs", icon: ShieldCheck },
                { text: "Até R$ 720k/ano", icon: BarChart },
              ]}
              delay={100}
              variant="green"
            />
            <PricingCard
              name="Plano PERFORMANCE"
              price="R$ 699,00"
              features={[
                { text: "Tudo do Plano SMART", icon: CheckCircle2 },
                { text: "Até 20 notas/mês", icon: CheckCircle2 },
                { text: "Até 4 sócios", icon: UserCheck },
                { text: "Relatórios mensais", icon: BarChart },
                { text: "Folha até 5 func.", icon: Users },
                { text: "Até R$ 1.8M/ano", icon: BarChart },
              ]}
              delay={200}
              variant="green"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-4u-green text-white relative overflow-hidden group mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-4u-black/10 rounded-full -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Agilidade Digital para sua Empresa</h2>
          <p className="text-lg text-white/90 mb-12 leading-relaxed">
            Abandone a burocracia e tenha o controle total do seu negócio na palma da mão.
            A <span className="text-4u-black font-bold">4U Connect</span> une tecnologia e consultoria para acelerar seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20contabilidade%20digital%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 bg-white text-4u-green rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Falar com Especialista
            </a>
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20os%20servi%C3%A7os%20de%20contabilidade%20digital%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 bg-white/10 text-white border border-white/20 rounded-full font-bold transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl"
            >
              Solicitar Proposta
            </a>
          </div>
        </div>
      </section>

      <Footer variant="green" />
    </div>
  );
};

export default ContabilidadeDigital;
