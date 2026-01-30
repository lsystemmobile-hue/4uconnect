import {
  TrendingUp,
  PieChart,
  BarChart,
  Target,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Heart,
  HelpCircle,
  Landmark,
  Shield,
  ClipboardCheck,
  Building2,
  MessageCircle,
  Rocket,
  Award,
  Users2,
  Star,
  User,
  Zap,
  Lock,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PageHero from "@/components/PageHero";
import InlineCTA from "@/components/InlineCTA";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Contabilidade = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero Fullscreen - Enhanced with parallax layers */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-4u-black">
        {/* Background Image with parallax */}
        <div className="absolute inset-0 z-0">
          <img
            src="/fundo.jpg"
            alt=""
            className="w-full h-full object-cover scale-110 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-br from-black/90 via-black/75 to-black/95 backdrop-blur-[2px]" />

        {/* Animated accent elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-none rotate-12 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-none -rotate-12 blur-2xl animate-pulse-slower" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in tracking-tight">
            Contabilidade <span className="block mt-2 text-white/90">Especializada</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            Serviço contábil completo, preciso e estratégico para empresas de médio porte e grupos de alta complexidade do mercado financeiro.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in px-4"
            style={{ animationDelay: "400ms" }}
          >
            {/* Primary CTA */}
            <a
              href="#servicos"
              className="group w-[320px] sm:w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-white text-4u-navy shadow-2xl shadow-white/30 border-2 border-white hover:shadow-white/50 hover:-translate-y-1 active:scale-95 relative overflow-hidden"
            >
              <Building2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span className="relative z-10">
                Ver Serviços
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-4u-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-block px-4 py-1.5 bg-4u-black/5 text-4u-black text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-black">
              Quem Somos
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-8 tracking-tight">
              Excelência em Contabilidade <br className="hidden md:block" /> para o Mercado Financeiro
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-4u-black">4U Connect</strong> é uma empresa de <strong className="text-4u-black">Contabilidade e Tecnologia</strong>, especializada no atendimento a <strong className="text-4u-black">empresas de médio porte</strong> e <strong className="text-4u-black">grupos empresariais de alta complexidade</strong>, especialmente do <strong className="text-4u-black">mercado financeiro</strong>.
              </p>
              <p>
                Unimos <strong className="text-4u-black">expertise técnica, inteligência de dados e tecnologia avançada</strong> para entregar um serviço contábil completo, preciso e estratégico, alinhado às exigências regulatórias e às melhores práticas de governança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diretoria */}
      <section className="py-32 bg-4u-black/5 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-block px-4 py-1.5 bg-4u-black/5 text-4u-black text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-black">
              Liderança de Elite
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-4 tracking-tight">Nossa Diretoria</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Antônio Dias */}
            <div className="p-10 rounded-none bg-background border-2 border-border/50 hover:shadow-2xl hover:shadow-4u-black/10 hover:border-4u-black/30 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute top-0 left-0 w-2 h-0 bg-4u-black group-hover:h-full transition-all duration-500" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-16 h-16 bg-4u-black text-white flex items-center justify-center rounded-none group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <User size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-4u-black group-hover:text-4u-green transition-colors">Antônio Dias</h3>
                  <p className="text-4u-black/60 font-semibold uppercase tracking-widest text-xs">Diretor Executivo</p>
                </div>
              </div>
              <div className="space-y-6 text-muted-foreground relative z-10">
                <p>
                  Executivo com ampla experiência no atendimento a empresas do <strong className="text-4u-black">mercado financeiro</strong>, com atuação orientada à expansão, modernização empresarial e estruturação de soluções contábeis especializadas.
                </p>
                <p>
                  Sua trajetória inclui assessoramento a companhias listadas no <strong className="text-4u-black">G20 da XP</strong> e no <strong className="text-4u-black">Best da BTG Pactual</strong>, com atuação em processos de <strong className="text-4u-black">M&A</strong>, estruturação societária e compliance rigoroso.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="italic font-medium text-4u-black/80">
                    "Transformando a contabilidade em um pilar estratégico de alta performance."
                  </p>
                </div>
              </div>
            </div>

            {/* Fernando Alves */}
            <div className="p-10 rounded-none bg-background border-2 border-border/50 hover:shadow-2xl hover:shadow-4u-black/10 hover:border-4u-black/30 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
              <div className="absolute top-0 left-0 w-2 h-0 bg-4u-black group-hover:h-full transition-all duration-500" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-16 h-16 bg-4u-black text-white flex items-center justify-center rounded-none group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <User size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-4u-black group-hover:text-4u-green transition-colors">Fernando Alves</h3>
                  <p className="text-4u-black/60 font-semibold uppercase tracking-widest text-xs">Diretor de Operações</p>
                </div>
              </div>
              <div className="space-y-6 text-muted-foreground relative z-10">
                <p>
                  Profissional com sólida experiência em <strong className="text-4u-black">outsourcing, compliance, governança e estruturação de operações</strong> para empresas de médio e grande porte, especialmente nos setores de Serviços e Indústria.
                </p>
                <p>
                  Com formação em Consultoria de Grande Porte e atuação em multinacionais, é reconhecido pela visão estratégica orientada a resultados, modernização de processos, soluções digitais e <strong className="text-4u-black">otimização fiscal</strong>.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="italic font-medium text-4u-black/80">
                    "Elevando a contabilidade a um papel estratégico nos negócios."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            <div className="p-12 bg-4u-black text-white scroll-reveal opacity-0 translate-x-[-2rem] transition-all duration-700 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-none -mr-16 -mt-16 rotate-45 group-hover:scale-150 transition-transform duration-700" />
              <div className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 border-l-2 border-white">
                Foco no Cliente
              </div>
              <Rocket className="w-12 h-12 mb-8 text-white/50 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Missão</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Conectar empresas a <strong className="text-white">soluções contábeis digitais, inovadoras e acessíveis</strong>, promovendo eficiência, precisão e crescimento sustentável, com segurança e conformidade dos dados financeiros.
              </p>
            </div>
            <div className="p-12 border-2 border-4u-black scroll-reveal opacity-0 translate-x-[2rem] transition-all duration-700 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-4u-black/5 rounded-none -mr-16 -mt-16 rotate-45 group-hover:scale-150 transition-transform duration-700" />
              <div className="inline-block px-4 py-1.5 bg-4u-black/5 text-4u-black text-xs font-bold uppercase tracking-widest mb-8 border-l-2 border-4u-black">
                Nossa Direção
              </div>
              <Eye className="w-12 h-12 mb-8 text-4u-black/30 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold text-4u-black mb-6 tracking-tight">Visão</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser referência em <strong className="text-4u-black">contabilidade estratégica e digital</strong>, conectando empresas a soluções inovadoras e seguras, que impulsionam o crescimento sustentável e simplificam a gestão financeira.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-20">
            <div className="inline-block px-4 py-1.5 bg-4u-black/5 text-4u-black text-xs font-bold uppercase tracking-widest mb-8 border-l-2 border-4u-black">
              Nossa Cultura
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-4u-black mb-10 tracking-tight">Valores Inegociáveis</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {[
                { name: "Excelência", icon: Award },
                { name: "Integridade", icon: ShieldCheck },
                { name: "Inovação", icon: Zap },
                { name: "Segurança", icon: Lock },
                { name: "Crescimento contínuo", icon: TrendingUp },
                { name: "Responsabilidade social", icon: Heart }
              ].map((val, i) => (
                <div key={i} className="flex items-center gap-3 px-8 py-5 bg-background border-2 border-border/50 text-4u-black font-bold hover:border-4u-black/30 hover:shadow-xl transition-all duration-300">
                  <val.icon className="w-6 h-6 text-4u-black/70" />
                  <span>{val.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-32 bg-muted/30 border-y border-border/50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-block px-4 py-1.5 bg-4u-black/5 text-4u-black text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-black">
              Especializações
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-4 tracking-tight">
              Serviços por Segmento
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Atendimento personalizado com conformidade absoluta para cada tipo de instituição financeira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "AAI – Agente Autônomo",
                subtitle: "Conformidade CVM e Ancord",
                icon: TrendingUp,
                escopo: ["Gestão contábil de comissões", "Emissão de notas fiscais", "Conformidade CVM/Ancord"],
                diferenciais: ["Estruturação de receita variável", "Rastreabilidade de pagamentos", "Suporte em M&A"],
                delay: 100
              },
              {
                title: "Corretoras de Valores",
                subtitle: "CVM / BACEN",
                icon: Building2,
                escopo: ["Demonstrações auditadas", "Relatórios regulatórios", "Suporte ao Banco Central"],
                diferenciais: ["Gestão de indicadores regulatórios", "Escrituração IFRS / CPCs", "Conformidade COSIF"],
                delay: 200
              },
              {
                title: "Gestoras de Recursos",
                subtitle: "Asset Management",
                icon: PieChart,
                escopo: ["Controle de receitas", "Gestão de performance", "Estruturação fiscal dos sócios"],
                diferenciais: ["Fluxo vinculado à performance", "Planejamento tributário eficiente", "Registro CVM"],
                delay: 300
              },
              {
                title: "Administradoras de Fundos",
                subtitle: "Escrituração e Auditoria",
                icon: ClipboardCheck,
                escopo: ["Escrituração de fundos", "Auditoria de ativos", "Envio CVM"],
                diferenciais: ["Integração Controlador/Adm", "Consistência nos reportes", "Zero falhas de comunicação"],
                delay: 400
              },
              {
                title: "Bancos Múltiplos",
                subtitle: "Plano COSIF",
                icon: Landmark,
                escopo: ["Contabilidade COSIF", "Obrigações BACEN", "Suporte a auditorias"],
                diferenciais: ["Governança bancária", "Provisões IFRS 9", "Índices de Basileia"],
                delay: 500
              },
              {
                title: "Corretoras de Seguros",
                subtitle: "Reguladas SUSEP",
                icon: Shield,
                escopo: ["Contabilidade SUSEP", "Governança interna", "Precisão de dados"],
                diferenciais: ["Especialização em Seguros", "Provisões técnicas", "Processos automatizados"],
                delay: 600
              }
            ].map((servico, index) => (
              <div
                key={index}
                className="group p-8 rounded-none bg-background border-2 border-border/50 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:shadow-4u-black/10 hover:border-4u-black/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                style={{ transitionDelay: `${servico.delay}ms` }}
              >
                <div className="absolute top-0 left-0 w-2 h-0 bg-4u-black group-hover:h-full transition-all duration-500" />
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-none bg-4u-black text-white flex items-center justify-center flex-shrink-0 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    <servico.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-4u-black tracking-tight mb-1">{servico.title}</h3>
                    <p className="text-sm font-semibold text-4u-black/50 uppercase tracking-widest">{servico.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
                  <div>
                    <h4 className="text-xs font-bold text-4u-black uppercase tracking-wider mb-4 pb-2 border-b border-border/50">Escopo Principal</h4>
                    <ul className="space-y-2">
                      {servico.escopo.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-4u-black transition-colors">
                          <CheckCircle2 size={14} className="text-4u-black/30 group-hover:text-4u-black" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-4u-green uppercase tracking-wider mb-4 pb-2 border-b border-border/50">Diferenciais 4U</h4>
                    <ul className="space-y-2">
                      {servico.diferenciais.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-4u-black transition-colors">
                          <Zap size={14} className="text-4u-green/50 group-hover:text-4u-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-4u-black text-white relative overflow-hidden group mb-12 border-y-2 border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-4u-green/10 rounded-none -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-4u-green/5 rounded-none -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 opacity-0 animate-fade-in tracking-tight">
            Contabilidade que Conecta ao Futuro
          </h2>
          <p className="text-lg text-white/90 mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Unimos expertise técnica, inteligência de dados e tecnologia avançada para apoiar sua tomada de decisão. Entre em
            contato e descubra como elevar sua contabilidade a um ativo estratégico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Contabilidade%20Especializada%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-8 py-5 bg-white text-4u-black rounded-none font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95"
            >
              <WhatsAppIcon size={20} className="transition-transform group-hover/btn:rotate-12" />
              Falar com Especialista
            </a>
            <a
              href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20os%20servi%C3%A7os%20de%20Contabilidade%20Especializada%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-8 py-5 bg-white/10 text-white border-2 border-white/20 rounded-none font-bold transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 active:scale-95"
            >
              <MessageCircle size={20} className="transition-transform group-hover/btn:scale-110" />
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
