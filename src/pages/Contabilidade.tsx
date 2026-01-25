import {
  Search,
  Settings,
  Clock,
  BarChart,
  ShieldCheck,
  CheckCircle2,
  FileSearch,
  UserCheck,
  Briefcase,
  ClipboardCheck
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Contabilidade = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Contabilidade"
        subtitle="Atuação completa nas áreas contábil, fiscal e trabalhista, garantindo segurança, conformidade e suporte técnico especializado."
        variant="black"
        backgroundImage="/contabilidade.jpg"
      />

      {/* BPO Contábil */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-4u-navy mb-4">BPO Contábil</h2>
            <div className="inline-block px-6 py-2 bg-4u-black/10 text-4u-black rounded-full text-sm font-bold">
              Contabilidade orientada à gestão estratégica
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Integração Total", desc: "Notas, pagamentos e recebimentos integrados.", icon: Settings },
              { title: "Classificação", desc: "Rigor técnico contábil e fiscal.", icon: Search },
              { title: "Conciliação Mensal", desc: "Precisão absoluta nos registros.", icon: Clock },
              { title: "Ativo Imobilizado", desc: "Controle patrimonial completo.", icon: Briefcase },
              { title: "Balanço e DRE", desc: "Demonstrativos atualizados para decisão.", icon: BarChart },
              { title: "Apuração Fiscal", desc: "Cálculo preciso de IRPJ e CSLL.", icon: ClipboardCheck },
              { title: "ECD e ECF", desc: "Conformidade digital rigorosa.", icon: ShieldCheck },
              { title: "Visão Analítica", desc: "Suporte especializado para auditorias.", icon: CheckCircle2 }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-muted/30 border border-border/50 hover:bg-background hover:shadow-xl hover:shadow-4u-black/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-4u-black/10 text-4u-black flex items-center justify-center mb-4 group-hover:bg-4u-black group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-4u-navy mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BPO Fiscal */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-4u-navy mb-4">BPO Fiscal</h2>
            <div className="inline-block px-6 py-2 bg-4u-black/10 text-4u-black rounded-full text-sm font-bold">
              Atuação preventiva e redução de riscos tributários
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Escrituração", desc: "Controle de Entradas, Saídas e Serviços.", icon: FileSearch },
              { title: "Apuração Impostos", desc: "ICMS, ISS, PIS e COFINS precisos.", icon: BarChart },
              { title: "Retenções", desc: "Gestão de IRRF, CSRF, INSS e ISS.", icon: Settings },
              { title: "SPED e GIA", desc: "Entrega rigorosa de obrigações acessórias.", icon: ClipboardCheck },
              { title: "Conformidade", desc: "Acompanhamento constante de prazos.", icon: ShieldCheck },
              { title: "Suporte Fiscal", desc: "Atendimento em fiscalizações e dúvidas.", icon: CheckCircle2 }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-background border border-border/50 hover:shadow-xl hover:shadow-4u-black/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-4u-black/10 text-4u-black flex items-center justify-center mb-4 group-hover:bg-4u-black group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-4u-navy mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BPO Folha de Pagamento */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-4u-navy mb-4">BPO Folha de Pagamento</h2>
            <div className="inline-block px-6 py-2 bg-4u-black/10 text-4u-black rounded-full text-sm font-bold">
              Gestão trabalhista segura e escalável
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Movimentação DP", desc: "Admissões, demissões e férias.", icon: UserCheck },
              { title: "Processamento", desc: "Salários, 13º, bônus e benefícios.", icon: Settings },
              { title: "Encargos", desc: "Gestão trabalhista e previdenciária.", icon: ShieldCheck },
              { title: "eSocial e DIRF", desc: "Envio das obrigações acessórias mensais.", icon: ClipboardCheck },
              { title: "CTPS Digital", desc: "Atualização de registros e informes.", icon: CheckCircle2 },
              { title: "Provisões", desc: "Relatórios mensais de custos fixos.", icon: BarChart }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-muted/30 border border-border/50 hover:bg-background hover:shadow-xl hover:shadow-4u-black/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-4u-black/10 text-4u-black flex items-center justify-center mb-4 group-hover:bg-4u-black group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-4u-navy mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-4u-black text-white relative overflow-hidden group mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-4u-green/10 rounded-full -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-4u-green/5 rounded-full -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Gestão Segura, Crescimento Sólido</h2>
          <p className="text-lg text-white/90 mb-12 leading-relaxed">
            Equilibre suas obrigações e foque na estratégia. Nossa expertise contábil e fiscal
            é a base que sua empresa precisa para escalar com segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20cont%C3%A1beis%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 bg-white text-4u-black rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Falar com Especialista
            </a>
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20os%20servi%C3%A7os%20cont%C3%A1beis%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 bg-white/10 text-white border border-white/20 rounded-full font-bold transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl"
            >
              Solicitar Proposta
            </a>
          </div>
        </div>
      </section>

      <Footer variant="black" />
    </div>
  );
};

export default Contabilidade;
