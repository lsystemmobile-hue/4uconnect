import {
  TrendingUp,
  PieChart,
  Target,
  CheckCircle2,
  Landmark,
  Shield,
  ClipboardCheck,
  Building2,
  Zap,
  BarChart2,
  CalendarDays,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PageHero from "@/components/PageHero";
import InlineCTA from "@/components/InlineCTA";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const BPO_SERVICES = [
  {
    nome: "Contábil",
    escopo: [
      "Integração das notas fiscais, pagamentos e recebimentos ao sistema contábil",
      "Classificação contábil e fiscal das operações",
      "Conciliações contábeis mensais com análise de saldos",
      "Controle contábil do ativo imobilizado",
      "Elaboração de balancetes, balanço patrimonial e DRE",
      "Apuração de IRPJ e CSLL",
      "Entrega das obrigações ECD e ECF",
    ],
    diferencial: "Contabilidade orientada à gestão, com visão analítica, relatórios claros e suporte contínuo a auditorias externas e tomadas de decisão estratégicas.",
    bg: "bg-background",
  },
  {
    nome: "Fiscal",
    escopo: [
      "Conferência de notas fiscais de entradas, saídas e serviços tomados",
      "Escrituração dos livros fiscais (Entradas, Saídas e Serviços)",
      "Apuração de ICMS, ISS, PIS e COFINS, com emissão das guias",
      "Apuração de retenções: IRRF, CSRF, INSS e ISS",
      "Entrega das obrigações acessórias (SPED Fiscal, EFD Contribuições, GIA, DCTF e DIRF)",
    ],
    diferencial: "Atuação preventiva e estruturada, garantindo conformidade fiscal, redução de riscos e suporte técnico em fiscalizações e auditorias.",
    bg: "bg-muted/30",
  },
  {
    nome: "Folha de pagamentos",
    escopo: [
      "Processos de admissão, demissão, férias e controle de experiência",
      "Processamento da folha (salários, 13°, bônus, PLR e benefícios)",
      "Encargos trabalhistas e previdenciários",
      "Emissão de SEFIP, eSocial, CAGED, DIRF e informes de rendimentos",
      "Atualização de CTPS e registros de funcionários",
      "Relatórios de provisões de férias e 13° salário",
    ],
    diferencial: "Gestão trabalhista segura e atualizada, com foco em conformidade legal, redução de passivos e suporte técnico em fiscalizações do Ministério do Trabalho e Previdência.",
    bg: "bg-background",
  },
  {
    nome: "Financeiro",
    escopo: [
      "Gestão de contas a pagar e a receber",
      "Conciliação bancária diária",
      "Gestão e análise do fluxo de caixa",
      "Relatórios financeiros e projeções",
      "Dashboards financeiros (BI) com indicadores em tempo real",
    ],
    diferencial: "Estrutura financeira de ponta a ponta, com processos automatizados, comunicação centralizada, integração ao ERP do cliente e suporte direto à gestão estratégica do negócio.",
    bg: "bg-muted/30",
  },
];

function BpoSectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 bg-gradient-to-br from-4u-green to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-4u-green/20">
        <span className="text-2xl font-bold text-white">{num}</span>
      </div>
      <h3 className="text-2xl font-bold text-4u-black">{title}</h3>
    </div>
  );
}

const Contabilidade = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero Fullscreen - Enhanced with parallax layers */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-4u-black">
        {/* Background Image with parallax */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contabilidade.jpg"
            alt="Contabilidade Especializada e Consultiva 4U Connect"
            className="w-full h-full object-cover scale-105 brightness-[0.5] contrast-[1.3] grayscale-[0.2] transition-transform duration-1000 ease-out"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-br from-black/95 via-4u-black/40 to-black/98 backdrop-blur-[3px]" />

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
                Contabilidade
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-4u-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>

            {/* Mercado Financeiro CTA */}
            <a
              href="#servicos-mercado"
              className="group w-[320px] sm:w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white/70 hover:bg-white/10 hover:border-white hover:shadow-white/20 hover:shadow-xl hover:-translate-y-1 active:scale-95 relative overflow-hidden"
            >
              <BarChart2 className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="relative z-10">
                Mercado Financeiro
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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



      <section id="servicos" className="py-32 bg-4u-black border-y border-white/5 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-block px-4 py-1.5 bg-white/5 text-white text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-green">
              Serviços BPO
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Nossos <strong className="text-4u-green">serviços</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {BPO_SERVICES.map((bpo, index) => (
              <div
                key={bpo.nome}
                className="group relative overflow-hidden p-8 bg-white/5 border-2 border-white/10 hover:border-4u-green/40 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-4u-green/10 transition-all duration-500 scroll-reveal opacity-0 translate-y-8"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute left-0 top-0 w-1 h-0 bg-4u-green group-hover:h-full transition-all duration-500" />
                <p className="text-4u-green text-3xl font-bold mb-1">BPO</p>
                <p className="text-white text-xl font-semibold">{bpo.nome}</p>
              </div>
            ))}
          </div>

          <p
            className="text-white/70 text-center text-lg scroll-reveal opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: "500ms" }}
          >
            Soluções modulares, integradas e adaptadas à realidade de cada empresa.
          </p>
        </div>
      </section>

      {BPO_SERVICES.map((bpo) => (
        <section key={bpo.nome} className={`py-24 ${bpo.bg} border-b border-border/50`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr] gap-12 items-start max-w-7xl mx-auto">
              <div
                className="p-10 bg-4u-black flex flex-col items-center justify-center min-h-[200px] border-2 border-border/50 relative overflow-hidden scroll-reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: "100ms" }}
              >
                <p className="text-4u-green text-4xl font-bold mb-1">BPO</p>
                <p className="text-white text-2xl font-semibold text-center">{bpo.nome}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-4u-green/30" />
              </div>

              <div
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: "200ms" }}
              >
                <BpoSectionHeader num="01" title="Escopo essencial" />
                <ul className="space-y-3">
                  {bpo.escopo.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 size={16} className="text-4u-green/60 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: "300ms" }}
              >
                <BpoSectionHeader num="02" title="Diferenciais" />
                <p className="text-muted-foreground leading-relaxed text-base">{bpo.diferencial}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="servicos-mercado" className="py-32 bg-muted/30 border-y border-border/50 scroll-mt-20">
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
      <section id="contato" className="py-24 bg-4u-black text-white relative overflow-hidden group mb-12 border-y-2 border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-4u-green/10 rounded-none -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-4u-green/5 rounded-none -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

        <div className="absolute inset-0 bg-4u-black/60 backdrop-blur-[2px]"></div>
        <img
          src="/contabilidade.jpg"
          alt="Serviços de Contabilidade 4U Connect"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in tracking-tight">
            Contabilidade que Conecta ao Futuro
          </h1>
          <p className="text-lg text-white/90 mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Unimos expertise técnica, inteligência de dados e tecnologia avançada para apoiar sua tomada de decisão. Entre em
            contato e descubra como elevar sua contabilidade a um ativo estratégico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a
              href="https://wa.me/551530100009?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Contabilidade%20Especializada%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-center gap-2 px-8 py-5 bg-white text-4u-black rounded-none font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95 w-full sm:w-72"
            >
              <WhatsAppIcon size={20} className="transition-transform group-hover/btn:rotate-12" />
              Falar com Especialista
            </a>
            <a
              href="https://wa.me/551530100009?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20falar%20sobre%20os%20servi%C3%A7os%20de%20Contabilidade%20Especializada%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/10 text-white border-2 border-white/20 rounded-none font-bold transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 active:scale-95 w-full sm:w-72"
            >
              <CalendarDays size={20} className="transition-transform group-hover/btn:scale-110" />
              Agendar Reunião
            </a>
          </div>
        </div>
      </section>

      <Footer variant="black" />
    </div>
  );
};

export default Contabilidade;
