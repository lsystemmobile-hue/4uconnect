import {
  TrendingUp,
  PieChart,
  BarChart,
  Target,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Briefcase,
  Search,
  Settings,
  Clock,
  ClipboardCheck
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const InteligenciaFinanceira = () => {
  const bpoProcesses = [
    { title: "Diagnóstico", desc: "Mapeamento completo do fluxo financeiro atual.", icon: Search },
    { title: "Personalização", desc: "Configuração de sistemas e integração bancária.", icon: Settings },
    { title: "Processamento", desc: "Conciliação diária e gestão de contas.", icon: Clock },
    { title: "Inteligência", desc: "Entrega de relatórios e indicadores estratégicos.", icon: BarChart }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Inteligência Financeira"
        subtitle="Vá além do controle de caixa. Transforme seus números em inteligência estratégica e impulsione a rentabilidade do seu negócio com nosso BPO Financeiro."
        variant="navy"
        backgroundImage="/inteligencia-financeira.jpg"
      />

      {/* BPO Financeiro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-4">BPO Financeiro</h2>
            <div className="inline-block px-6 py-2 bg-4u-navy/10 text-4u-navy rounded-full text-sm font-bold">
              Terceirização financeira de alta performance
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Gestão de Contas", desc: "Controle rigoroso de entradas e saídas.", icon: DollarSign },
              { title: "Fluxo de Caixa", desc: "Visibilidade total da sua saúde financeira.", icon: TrendingUp },
              { title: "Balanço Mensal", desc: "Relatórios precisos para decisão.", icon: PieChart },
              { title: "Faturamento", desc: "Emissão de notas e boletos otimizada.", icon: ClipboardCheck },
              { title: "Conciliação", desc: "Conformidade bancária diária.", icon: ShieldCheck },
              { title: "Indicadores", desc: "Dashboards personalizados (KPIs).", icon: BarChart },
              { title: "Consultoria", desc: "Suporte especializado em gestão.", icon: Briefcase },
              { text: "Previsibilidade", desc: "Segurança para planejar o futuro.", icon: Target }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-muted/30 border border-border/50 hover:bg-background hover:shadow-xl hover:shadow-4u-navy/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-4u-navy/10 text-4u-navy flex items-center justify-center mb-4 group-hover:bg-4u-navy group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-4u-navy mb-2">{item.title || (item as any).text}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-4">Como Funciona?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Implementamos uma jornada de excelência financeira em 4 etapas estruturadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {bpoProcesses.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-4u-navy text-white rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-4u-navy/20">
                  <p.icon size={32} />
                </div>
                <div className="inline-block px-3 py-1 bg-4u-navy/10 text-4u-navy rounded-full text-[10px] font-bold uppercase mb-3">0{i + 1} Passo</div>
                <h3 className="font-bold text-4u-navy mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-4">Planos BPO Financeiro</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluções escaláveis que se adaptam ao momento da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center max-w-7xl mx-auto">
            <PricingCard
              name="BPO Financeiro I"
              price="R$ 590,00"
              features={[
                "Conciliação bancária diária",
                "Gestão de Contas a Pagar",
                "Gestão de Contas a Receber",
                "Relatório de Fluxo de Caixa",
                "Atendimento via WhatsApp",
              ]}
              variant="navy"
              delay={0}
            />
            <PricingCard
              name="BPO Financeiro II"
              price="R$ 890,00"
              featured={true}
              features={[
                "Tudo do BPO I",
                "Agendamento de pagamentos",
                "Emissão de Notas Fiscais",
                "Conciliação bancária premium",
                "Reunião mensal de resultados",
              ]}
              variant="navy"
              delay={100}
            />
            <PricingCard
              name="BPO Financeiro III"
              price="Sob Consulta"
              features={[
                "Tudo do BPO II",
                "Gestão de cobrança ativa",
                "Dashboards personalizados",
                "Apoio na definição de KPIs",
                "Suporte estratégico avançado",
              ]}
              variant="navy"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-4u-navy text-white relative overflow-hidden group mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-4u-green/10 rounded-full -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-4u-green/5 rounded-full -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Decisões Guiadas por Dados</h2>
          <p className="text-lg text-white/90 mb-12 leading-relaxed">
            Vá além do controle de caixa. Transforme seus números em inteligência estratégica
            e impulsione a rentabilidade do seu negócio com nosso BPO Financeiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Intelig%C3%AAncia%20Financeira%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 bg-white text-4u-navy rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:shadow-4u-navy/10 hover:-translate-y-1"
            >
              Falar com Especialista
            </a>
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20os%20servi%C3%A7os%20de%20Intelig%C3%AAncia%20Financeira%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 bg-white/10 text-white border border-white/20 rounded-full font-bold transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl"
            >
              Solicitar Proposta
            </a>
          </div>
        </div>
      </section>

      <Footer variant="navy" />
    </div>
  );
};

export default InteligenciaFinanceira;
