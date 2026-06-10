import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { smoothScrollToId } from "@/lib/utils";
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
  ClipboardCheck,
  Landmark,
  HelpCircle,
  MessageCircle,
  XCircle,
  Zap,
  ArrowRight,
  User,
  CalendarDays,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PricingCard from "@/components/PricingCard";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const InteligenciaFinanceira = () => {
  const [lightboxImg, setLightboxImg] = useState<{ src: string; label: string; desc: string } | null>(null);
  useScrollReveal([]);

  const dashboardImages = [
    { src: "/dashboard-3.jpeg", label: "Painel Gerencial", desc: "Visão macro: Receita, EBITDA, Lucro e fluxo de caixa." },
    { src: "/dashboard-2.jpeg", label: "DRE – Resultado", desc: "Demonstrativo de resultado mensal detalhado." },
    { src: "/dashboard-4.jpeg", label: "Resumo DRE", desc: "Faturamento, composição e maiores receitas." },
    { src: "/dashboard-1.jpeg", label: "Previsto x Realizado", desc: "Controle orçamentário: receitas e despesas." },
  ];

  const bpoProcesses = [
    { title: "Diagnóstico", desc: "Mapeamento completo do fluxo financeiro atual.", icon: Search },
    { title: "Personalização", desc: "Configuração de sistemas e integração bancária.", icon: Settings },
    { title: "Processamento", desc: "Conciliação diária e gestão de contas.", icon: Clock },
    { title: "Inteligência", desc: "Entrega de relatórios e indicadores estratégicos.", icon: BarChart },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Inteligência Financeira e BPO | 4U Connect</title>
        <meta name="description" content="Gestão financeira estratégica, fluxo de caixa, dashboards BI e planejamento para empresas em crescimento." />
        <meta property="og:title" content="Inteligência Financeira e BPO | 4U Connect" />
        <meta property="og:description" content="Gestão financeira estratégica, fluxo de caixa, dashboards BI e planejamento para empresas em crescimento." />
        <meta property="og:url" content="https://4uconnect.com.br/inteligencia-financeira" />
      </Helmet>
      {/* Hero Fullscreen - Enhanced */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-4u-navy">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/inteligencia-financeira.jpg"
            alt="Inteligência Financeira e BPO 4U Connect"
            className="w-full h-full object-cover scale-105 brightness-[0.7] contrast-[1.2] transition-transform duration-1000 ease-out"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-br from-4u-navy/90 via-4u-navy/40 to-black/95 backdrop-blur-[2px]" />

        {/* Animated accent elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-4u-green/5 rounded-none rotate-12 blur-3xl animate-pulse-slow z-0" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-4u-green/3 rounded-none -rotate-12 blur-2xl animate-pulse-slower z-0" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in tracking-tight">
            Inteligência Financeira
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            Soluções completas em gestão financeira e contabilidade para empresas de alta complexidade
          </p>

          {/* CTA Button */}
          <div
            className="flex justify-center max-w-4xl mx-auto opacity-0 animate-fade-in px-4"
            style={{ animationDelay: "400ms" }}
          >
            <button
              onClick={() => smoothScrollToId('bpo-content')}
              className="group w-full max-w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-white text-4u-navy shadow-2xl shadow-white/30 border-2 border-white hover:-translate-y-1 active:scale-95"
            >
              <Briefcase className="w-5 h-5 scale-110" />
              BPO Financeiro &amp; Inteligência
            </button>
          </div>
        </div>
      </section>

      {/* BPO FINANCEIRO & INTELIGÊNCIA FINANCEIRA */}
      <div id="bpo-content" className="scroll-mt-20">
          {/* Quem Somos - Intro */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                <div className="inline-block px-4 py-1.5 bg-4u-navy/5 text-4u-navy text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-navy">
                  Quem Somos
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-4 tracking-tight">
                  Ecossistema de Inteligência Financeira
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A 4U Connect une <span className="text-4u-navy font-bold">Inteligência Financeira</span>, <span className="text-4u-navy font-bold">Tecnologia</span> e <span className="text-4u-navy font-bold">Segurança</span> para transformar a gestão do seu negócio.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
                {[
                  { title: "Inteligência Financeira", icon: TrendingUp, desc: "Análise profunda para decisões estratégicas." },
                  { title: "Tecnologia", icon: Zap, desc: "Automações e integrações de última geração." },
                  { title: "Segurança", icon: ShieldCheck, desc: "Conformidade e proteção total dos seus dados." },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-muted/30 border-2 border-border/50 hover:border-4u-navy/30 transition-all duration-300 group">
                    <item.icon className="w-10 h-10 text-4u-navy mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-4u-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
                <p className="text-xl text-4u-navy font-medium italic">
                  "Foco em controle, previsibilidade e crescimento sustentável."
                </p>
              </div>
            </div>
          </section>

          {/* Problemas Financeiros Mais Comuns */}
          <section className="py-24 bg-4u-navy/5 border-y border-border/50 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                <div className="scroll-reveal opacity-0 translate-x-[-2rem] transition-all duration-700">
                  <h2 className="text-3xl md:text-4xl font-bold text-4u-navy mb-8 leading-tight">
                    Problemas Financeiros <br /> Mais Comuns
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Empresas enfrentam diariamente desafios que travam o crescimento e geram insegurança.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Falta de transparência nas entradas e saídas de dinheiro",
                      "Empresários focados na operação, não na estratégia",
                      "Pagamentos atrasados ou duplicados",
                      "Processos manuais e burocráticos",
                      "Falta de previsibilidade financeira mensal",
                      "Falta de instruções claras e diretrizes",
                      "Surpresas financeiras evitáveis",
                    ].map((prob, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-medium">{prob}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 md:p-12 border-2 border-border/50 shadow-2xl relative scroll-reveal opacity-0 translate-x-[2rem] transition-all duration-700">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-4u-navy/5 md:-mr-16 -mr-8 -mt-16 rotate-45" />
                  <h3 className="text-2xl font-bold text-4u-navy mb-6">O Que Se Perde Quando o Financeiro Trava</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      "Oportunidades de crescimento",
                      "Tempo do dono e da equipe",
                      "Dinheiro para investir",
                      "Segurança financeira",
                      "Credibilidade com fornecedores",
                      "Metas e projeções",
                      "Controles financeiros",
                      "Poder de negociação",
                    ].map((loss, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-4u-navy rounded-none" />
                        <span className="text-sm text-muted-foreground">{loss}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 bg-red-50 border-l-4 border-red-500">
                    <p className="text-red-700 font-bold leading-tight">
                      A falta de controle financeiro sai caro — e é difícil reverter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BPO Financeiro Completo */}
          <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-4 tracking-tight">BPO Financeiro Completo</h2>
                <div className="inline-block px-6 py-2 bg-4u-navy/10 text-4u-navy rounded-none text-sm font-bold border-l-2 border-4u-navy">
                  Serviços Essenciais (Ponta a Ponta)
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {[
                  { title: "Contas a Pagar", desc: "Gestão completa de obrigações.", icon: ArrowRight },
                  { title: "Contas a Receber", desc: "Controle de faturamentos e recebíveis.", icon: ArrowRight },
                  { title: "Conciliação Bancária", desc: "Conformidade bancária diária.", icon: Landmark },
                  { title: "Fluxo de Caixa", desc: "Gestão e análise detalhada.", icon: TrendingUp },
                  { title: "Dashboard BI", desc: "Indicadores em tempo real (4U Digital).", icon: BarChart },
                  { title: "Comunicação", desc: "Atendimento centralizado e ágil.", icon: MessageCircle },
                  { title: "Personalização", desc: "Atendimento consultivo e próximo.", icon: User },
                  { title: "Automação", desc: "Rotinas financeiras automatizadas.", icon: Zap },
                  { title: "Relatórios", desc: "Projeções e análises mensais.", icon: ClipboardCheck },
                  { title: "Integração ERP", desc: "Conexão total com seu sistema.", icon: Settings },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group p-6 rounded-none bg-muted/30 border-2 border-border/50 hover:shadow-xl hover:border-4u-navy/30 relative overflow-hidden"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 rounded-none bg-4u-navy/10 text-4u-navy flex items-center justify-center mb-4 mx-auto group-hover:bg-4u-navy group-hover:text-white transition-all duration-500">
                        {item.icon ? <item.icon size={24} /> : <CheckCircle2 size={24} />}
                      </div>
                      <h3 className="font-bold text-4u-navy mb-2 text-sm">{item.title}</h3>
                      <p className="text-[10px] text-muted-foreground leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Não Somos Apenas um BPO & Diferenciais */}
          <section className="py-24 bg-4u-navy text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 skew-x-[-12deg] translate-x-[20%]" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                  <h2 className="text-3xl font-bold mb-8 border-l-4 border-white pl-6">Não Somos Apenas um BPO</h2>
                  <p className="text-white/80 mb-8 text-lg">
                    Somos um <span className="text-white font-bold">ecossistema financeiro</span> que proporciona liberdade para você focar no que importa.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Automações financeiras inteligentes",
                      "Integrações contábeis nativas",
                      "BI financeiro próprio (4U Digital)",
                      "Processos padronizados e certificados",
                      "Segurança e compliance rigorosos",
                      "Soluções integradas ao seu ERP",
                      "Atendimento consultivo (não apenas operacional)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white/40 flex-shrink-0" />
                        <span className="text-white/90 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
                  <h2 className="text-3xl font-bold mb-8 border-l-4 border-white pl-6">Nossos Diferenciais</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { title: "Impulso de Crescimento", desc: "Indicadores financeiros que guiam seu sucesso." },
                      { title: "Zero Preocupação", desc: "Cuidamos de todas as rotinas para você." },
                      { title: "Suporte Ativo", desc: "Atendimento consultivo e especializado." },
                      { title: "Integração Total", desc: "Time financeiro integrado ao contábil." },
                      { title: "Alta Tecnologia", desc: "Otimização máxima através de tecnologia." },
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-white/70">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Processo Section */}
          <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-4 tracking-tight">Como Funciona o Processo</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Em 4 etapas, seu financeiro entra em modo performance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {[
                  { title: "Diagnóstico Inicial", desc: "Mapeamento de processos, contas e rotinas atuais." },
                  { title: "Organização", desc: "Configuração de sistemas, integrações e implantação." },
                  { title: "Primeiros 30 Dias", desc: "Conciliação, testes, ajustes e validação de relatórios." },
                  { title: "Operação Contínua", desc: "Financeiro com previsibilidade, performance e indicadores." },
                ].map((p, i) => (
                  <div key={i} className="text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="w-20 h-20 bg-4u-navy text-white rounded-none flex items-center justify-center mx-auto mb-6 shadow-xl relative group">
                      <div className="absolute inset-0 border-2 border-4u-navy group-hover:scale-125 group-hover:opacity-0 transition-all duration-500" />
                      <span className="text-2xl font-bold">0{i + 1}</span>
                    </div>
                    <h3 className="font-bold text-4u-navy mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Antes x Depois */}
          <section className="py-24 bg-muted/30 border-y border-border/50">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                  <h2 className="text-3xl font-bold text-4u-navy mb-4 tracking-tight">A Transformação do seu Financeiro</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-border/50 shadow-2xl bg-background scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                  <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border/50">
                    <h3 className="text-xl font-bold text-red-600 mb-8 flex items-center gap-2">
                      <XCircle /> Antes
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Planilhas manuais e confusas",
                        "Fluxo de caixa imprevisível",
                        "Falta de controle financeiro real",
                        "Dificuldade na tomada de decisões",
                        "Acúmulo de tarefas operacionais",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-1 h-1 bg-red-400" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 md:p-12 bg-4u-navy text-white">
                    <h3 className="text-xl font-bold text-4u-green mb-8 flex items-center gap-2">
                      <CheckCircle2 /> Depois
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Financeiro organizado e profissional",
                        "Indicadores claros em tempo real",
                        "Previsibilidade total de caixa",
                        "Rotinas 100% automatizadas",
                        "Mais tempo para focar no crescimento",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/90">
                          <div className="w-1 h-1 bg-4u-green" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard Interativo */}
          <section className="py-24 bg-4u-navy/5 border-y border-border/50 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                <div className="inline-block px-4 py-1.5 bg-4u-navy/5 text-4u-navy text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-navy">
                  Dashboard
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-4 tracking-tight">
                  Dashboard Interativo
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Indicadores financeiros em tempo real, organizados para decisões estratégicas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {dashboardImages.map((img, i) => (
                  <div
                    key={i}
                    className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group relative overflow-hidden border-2 border-border/50 hover:border-4u-navy/40 hover:shadow-2xl transition-all duration-500 cursor-zoom-in"
                    style={{ transitionDelay: `${i * 100}ms` }}
                    onClick={() => setLightboxImg(img)}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-4u-navy/0 group-hover:bg-4u-navy/70 transition-all duration-500 flex items-end">
                      <div className="translate-y-full group-hover:translate-y-0 transition-all duration-500 p-6 w-full">
                        <h3 className="font-bold text-white text-lg mb-1">{img.label}</h3>
                        <p className="text-sm text-white/80">{img.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lightbox */}
            {lightboxImg && (
              <div
                className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setLightboxImg(null)}
              >
                <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
                  <button
                    className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
                    onClick={() => setLightboxImg(null)}
                  >
                    ✕ Fechar
                  </button>
                  <img
                    src={lightboxImg.src}
                    alt={lightboxImg.label}
                    className="w-full max-h-[85vh] object-contain shadow-2xl border border-white/10"
                  />
                  <p className="text-center text-white/70 text-sm mt-3 font-medium">{lightboxImg.label}</p>
                </div>
              </div>
            )}
          </section>

          {/* Pricing Section */}
          <section id="planos-bpo" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-4 tracking-tight">Planos BPO Financeiro</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Soluções escaláveis que se adaptam ao momento da sua empresa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center max-w-7xl mx-auto">
                <PricingCard
                  name="ESSENCIAL"
                  price="R$ 1.997,00"
                  features={[
                    "ERP: OMIE",
                    "Gestão de recebimentos (Faturamento com NF e Boleto): até 40",
                    "Gestão de pagamentos (Faturamento com NF e Boleto): até 80",
                    "Conciliação bancária: até 2 contas",
                    "BI Financeiro – 4U Digital",
                    "Relatório de desempenho financeiro mensal",
                    "Atendimento via WhatsApp",
                    "Vídeo mensal com apresentação dos resultados",
                    "Conciliação e classificação da fatura do cartão de crédito: 1",
                    "Envio de documentos à contabilidade",
                    "Report de volumetria",
                  ]}
                  variant="navy"
                  delay={0}
                />
                <PricingCard
                  name="PREMIUM"
                  price="R$ 2.597,00"
                  featured={true}
                  features={[
                    "Tudo do Plano ESSENCIAL",
                    "Gestão de recebimentos: até 80",
                    "Gestão de pagamentos (Recebimento de faturas e Agendamento bancário): até 160",
                    "Conciliação bancária: até 3 contas",
                    "Reunião mensal online (1 hora)",
                    "Report de volumetria",
                    "Indicadores de performance",
                  ]}
                  variant="navy"
                  delay={100}
                />
                <PricingCard
                  name="ESTRATÉGICO"
                  price="Sob Consulta"
                  features={[
                    "Todos os serviços do Plano PREMIUM",
                    "Volumes de recebimentos: sob consulta",
                    "Volumes de pagamentos: sob consulta",
                    "Conciliação bancária: sob consulta",
                    "Conciliação de cartão de crédito: sob consulta",
                    "Plano estratégico personalizado",
                  ]}
                  variant="navy"
                  delay={200}
                />
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-24 bg-4u-navy text-white relative overflow-hidden group mb-12 border-y-2 border-white/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-4u-green/10 rounded-none -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-4u-green/5 rounded-none -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

            <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 opacity-0 animate-fade-in tracking-tight">Decisões Guiadas por Dados</h2>
              <p className="text-lg text-white/90 mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Vá além do controle de caixa. Transforme seus números em inteligência estratégica
                e impulsione a rentabilidade do seu negócio com nosso BPO Financeiro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <a
                  href="https://wa.me/551530100009?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Intelig%C3%AAncia%20Financeira%20da%204U%20Connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 px-8 py-5 bg-white text-4u-navy rounded-none font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95 w-full sm:w-72"
                >
                  <WhatsAppIcon size={20} className="transition-transform group-hover/btn:rotate-12" />
                  Falar com Especialista
                </a>
                <a
                  href="https://wa.me/551530100009?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20falar%20sobre%20os%20servi%C3%A7os%20de%20Intelig%C3%AAncia%20Financeira%20da%204U%20Connect."
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
      </div>

      <Footer variant="navy" />
    </div>
  );
};

export default InteligenciaFinanceira;
