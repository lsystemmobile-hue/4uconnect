import { useState } from "react";
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
  Building2,
  Landmark,
  Shield,
  Eye,
  Heart,
  HelpCircle,
  MessageCircle,
  AlertTriangle,
  XCircle,
  Zap,
  ArrowRight,
  User,
  Users2,
  Rocket,
  Award,
  Star,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PricingCard from "@/components/PricingCard";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const InteligenciaFinanceira = () => {
  // Tab state management
  const [activeTab, setActiveTab] = useState<'bpo' | 'contabilidade'>('bpo');
  useScrollReveal();

  const bpoProcesses = [
    { title: "Diagnóstico", desc: "Mapeamento completo do fluxo financeiro atual.", icon: Search },
    { title: "Personalização", desc: "Configuração de sistemas e integração bancária.", icon: Settings },
    { title: "Processamento", desc: "Conciliação diária e gestão de contas.", icon: Clock },
    { title: "Inteligência", desc: "Entrega de relatórios e indicadores estratégicos.", icon: BarChart },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Fullscreen - Enhanced */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-4u-navy">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/fundo.jpg"
            alt=""
            className="w-full h-full object-cover scale-110 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-br from-4u-navy/90 via-black/75 to-black/95 backdrop-blur-[2px]" />

        {/* Animated accent elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-4u-green/5 rounded-none rotate-12 blur-3xl animate-pulse-slow z-0" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-4u-green/3 rounded-none -rotate-12 blur-2xl animate-pulse-slower z-0" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in tracking-tight">
            Inteligência Financeira <span className="block mt-2 text-white/90">&amp; Contabilidade</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            Soluções completas em gestão financeira e contabilidade para empresas de alta complexidade
          </p>

          {/* Tab Selector Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto opacity-0 animate-fade-in px-4"
            style={{ animationDelay: "400ms" }}
          >
            <button
              onClick={() => {
                setActiveTab('bpo');
                setTimeout(() => {
                  document.getElementById('bpo-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
              className={`group w-full max-w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden ${activeTab === 'bpo'
                ? 'bg-white text-4u-navy shadow-2xl shadow-white/30 border-2 border-white'
                : 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white hover:shadow-xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95 backdrop-blur-sm'
                }`}
            >
              <Briefcase className={`w-5 h-5 transition-transform duration-300 ${activeTab === 'bpo' ? 'scale-110' : 'group-hover:scale-110'}`} />
              <span className="relative">
                BPO Financeiro &amp; Inteligência
                {activeTab !== 'bpo' && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                )}
              </span>
            </button>
            <button
              onClick={() => {
                setActiveTab('contabilidade');
                setTimeout(() => {
                  document.getElementById('contabilidade-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
              className={`group w-full max-w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden ${activeTab === 'contabilidade'
                ? 'bg-white text-4u-navy shadow-2xl shadow-white/30 border-2 border-white'
                : 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white hover:shadow-xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95 backdrop-blur-sm'
                }`}
            >
              <Building2 className={`w-5 h-5 transition-transform duration-300 ${activeTab === 'contabilidade' ? 'scale-110' : 'group-hover:scale-110'}`} />
              <span className="relative">
                Contabilidade &amp; Tecnologia
                {activeTab !== 'contabilidade' && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                )}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* TAB 1: BPO FINANCEIRO & INTELIGÊNCIA FINANCEIRA */}
      {activeTab === 'bpo' && (
        <div id="bpo-content" key="bpo-content" className="animate-in fade-in duration-500 scroll-mt-20">
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
                  <div className="absolute top-0 right-0 w-32 h-32 bg-4u-navy/5 -mr-16 -mt-16 rotate-45" />
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
          <section className="py-24 bg-background">
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
          <section className="py-24 bg-background">
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

          {/* Pricing Section */}
          <section id="planos-bpo" className="py-24 bg-background">
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
                  price="R$ 1.587,00"
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
                  name="PERFORMANCE"
                  price="R$ 2.227,00"
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
                    "Todos os serviços do Plano PERFORMANCE",
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
                  href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Intelig%C3%AAncia%20Financeira%20da%204U%20Connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-8 py-5 bg-white text-4u-navy rounded-none font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95"
                >
                  <WhatsAppIcon size={20} className="transition-transform group-hover/btn:rotate-12" />
                  Falar com Especialista
                </a>
                <a
                  href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20os%20servi%C3%A7os%20de%20Intelig%C3%AAncia%20Financeira%20da%204U%20Connect."
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
        </div>
      )}

      {/* TAB 2: CONTABILIDADE & TECNOLOGIA */}
      {activeTab === 'contabilidade' && (
        <div id="contabilidade-content" key="contabilidade-content" className="animate-in fade-in duration-500 scroll-mt-20">
          {/* Quem Somos - Intro */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                <div className="inline-block px-4 py-1.5 bg-4u-navy/5 text-4u-navy text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-navy">
                  Quem Somos
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-6 tracking-tight">
                  Contabilidade & Tecnologia
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    A <strong className="text-4u-navy">4U Connect</strong> é uma empresa de <strong className="text-4u-navy">Contabilidade e Tecnologia</strong>, especializada no atendimento a <strong className="text-4u-navy">prestadoras de serviços</strong> e <strong className="text-4u-navy">empresas em crescimento</strong>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Atuamos de forma integrada nas áreas <strong className="text-4u-navy">contábil, fiscal, trabalhista e financeira</strong>, unindo processos, tecnologia e visão estratégica para apoiar a <strong className="text-4u-navy">tomada de decisão</strong> e a <strong className="text-4u-navy">expansão sustentável dos negócios</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Diretoria */}
          <section className="py-24 bg-muted/30 border-y border-border/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                <h2 className="text-3xl font-bold text-4u-navy mb-4 tracking-tight">Diretoria</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Antônio Dias */}
                <div className="bg-white p-8 border-2 border-border/50 hover:border-4u-navy/30 transition-all duration-500 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-4u-navy text-white flex items-center justify-center rounded-none">
                      <User size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-4u-navy">Antônio Dias</h3>
                      <p className="text-sm text-4u-navy font-semibold uppercase tracking-wider">Diretor Executivo</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Executivo com ampla experiência no atendimento a empresas do <strong className="text-4u-navy">mercado financeiro</strong>, com atuação orientada à expansão, modernização e entrega de soluções contábeis especializadas.
                    </p>
                    <p>
                      Sua trajetória inclui assessoramento a companhias listadas no <strong className="text-4u-navy">G20 da XP</strong> e no <strong className="text-4u-navy">Best da BTG Pactual</strong>, oferecendo suporte em <strong className="text-4u-navy">processos de M&A</strong>, <strong className="text-4u-navy">estruturação societária</strong> e <strong className="text-4u-navy">compliance rigoroso</strong>.
                    </p>
                    <p className="italic font-medium border-l-2 border-4u-navy/20 pl-4">
                      Reconhecido pela precisão técnica, visão consultiva e capacidade de elevar a contabilidade a um pilar estratégico e de alta performance.
                    </p>
                  </div>
                </div>

                {/* Fernando Alves */}
                <div className="bg-white p-8 border-2 border-border/50 hover:border-4u-navy/30 transition-all duration-500 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-4u-navy text-white flex items-center justify-center rounded-none">
                      <User size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-4u-navy">Fernando Alves</h3>
                      <p className="text-sm text-4u-navy font-semibold uppercase tracking-wider">Diretor de Operações</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Profissional com sólida experiência em <strong className="text-4u-navy">outsourcing, compliance, governança e estruturação de operações</strong> para empresas de médio e grande porte, especialmente nos setores de <strong className="text-4u-navy">Serviços e Indústria</strong>.
                    </p>
                    <p>
                      Com formação desenvolvida em <strong className="text-4u-navy">Consultoria de Grande Porte</strong> e atuação em <strong className="text-4u-navy">multinacionais</strong>, é reconhecido pela visão estratégica orientada a resultados, modernização de processos e otimização fiscal.
                    </p>
                    <p className="italic font-medium border-l-2 border-4u-navy/20 pl-4">
                      Transformando a contabilidade em um ativo estratégico para negócios de alta performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Missão e Visão */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="p-10 bg-4u-navy text-white scroll-reveal opacity-0 translate-x-[-2rem] transition-all duration-700">
                  <Rocket className="w-12 h-12 mb-6 text-4u-green" />
                  <h3 className="text-3xl font-bold mb-6">Missão</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Conectar empresas a <strong className="text-white">soluções contábeis digitais, inovadoras e acessíveis</strong>, promovendo eficiência, precisão e crescimento sustentável, garantindo a conformidade e a segurança dos dados financeiros.
                  </p>
                </div>
                <div className="p-10 border-2 border-4u-navy scroll-reveal opacity-0 translate-x-[2rem] transition-all duration-700">
                  <Eye className="w-12 h-12 mb-6 text-4u-navy" />
                  <h3 className="text-3xl font-bold text-4u-navy mb-6">Visão</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ser referência em <strong className="text-4u-navy">contabilidade digital e estratégica</strong>, conectando empresas a soluções inovadoras e seguras, que impulsionam o crescimento sustentável e simplificam a gestão financeira.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div className="mt-16 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                <h3 className="text-2xl font-bold text-4u-navy mb-8 uppercase tracking-widest">Nossos Valores</h3>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  {[
                    "Excelência", "Integridade", "Inovação",
                    "Segurança", "Crescimento contínuo", "Responsabilidade social"
                  ].map((value, i) => (
                    <div key={i} className="px-6 py-3 bg-muted border border-border/50 text-4u-navy font-bold text-sm">
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Serviços Modulares - BPO */}
          <section id="servicos-modulares" className="py-24 bg-background scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-4 tracking-tight">
                  Nossos Serviços
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Soluções <strong className="text-4u-navy">modulares, integradas e adaptadas</strong> à realidade de cada empresa.
                </p>
              </div>

              <div className="space-y-6 max-w-6xl mx-auto">
                {/* BPO Contábil */}
                <details className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group" style={{ transitionDelay: '100ms' }}>
                  <summary className="cursor-pointer list-none p-8 rounded-none bg-muted/30 border-2 border-border/50 hover:shadow-2xl hover:border-4u-navy/30 transition-all duration-500 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-none bg-4u-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <BarChart size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-4u-navy">BPO Contábil</h3>
                          <p className="text-sm text-muted-foreground">Contabilidade orientada à gestão</p>
                        </div>
                      </div>
                      <HelpCircle className="text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="p-8 pt-6 mt-4 border-t border-border/50 bg-background rounded-b-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Escopo Essencial</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Integração de notas fiscais, pagamentos e recebimentos ao sistema contábil</li>
                          <li>• Classificação contábil e fiscal das operações</li>
                          <li>• Conciliações contábeis mensais com análise de saldos</li>
                          <li>• Controle do ativo imobilizado</li>
                          <li>• Elaboração de balancetes, balanço patrimonial e DRE</li>
                          <li>• Apuração de IRPJ e CSLL</li>
                          <li>• Entrega das obrigações ECD e ECF</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Diferencial</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Contabilidade orientada à gestão, com visão analítica, relatórios claros e suporte contínuo a auditorias e decisões estratégicas.
                        </p>
                      </div>
                    </div>
                  </div>
                </details>

                {/* BPO Fiscal */}
                <details className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group" style={{ transitionDelay: '200ms' }}>
                  <summary className="cursor-pointer list-none p-8 rounded-none bg-muted/30 border-2 border-border/50 hover:shadow-2xl hover:border-4u-navy/30 transition-all duration-500 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-none bg-4u-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ClipboardCheck size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-4u-navy">BPO Fiscal</h3>
                          <p className="text-sm text-muted-foreground">Conformidade fiscal e redução de riscos</p>
                        </div>
                      </div>
                      <HelpCircle className="text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="p-8 pt-6 mt-4 border-t border-border/50 bg-background rounded-b-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Escopo Essencial</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Conferência de notas fiscais de entradas, saídas e serviços tomados</li>
                          <li>• Escrituração dos livros fiscais (Entradas, Saídas e Serviços)</li>
                          <li>• Apuração de ICMS, ISS, PIS e COFINS, com emissão das guias</li>
                          <li>• Apuração de retenções: IRRF, CSRF, INSS e ISS</li>
                          <li>• Entrega das obrigações acessórias: SPED Fiscal, EFD Contribuições, GIA, DCTF e DIRF</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Diferencial</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Atuação preventiva e estruturada, garantindo conformidade fiscal, redução de riscos e suporte técnico em fiscalizações e auditorias.
                        </p>
                      </div>
                    </div>
                  </div>
                </details>

                {/* BPO Folha de Pagamentos */}
                <details className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group" style={{ transitionDelay: '300ms' }}>
                  <summary className="cursor-pointer list-none p-8 rounded-none bg-muted/30 border-2 border-border/50 hover:shadow-2xl hover:border-4u-navy/30 transition-all duration-500 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-none bg-4u-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle2 size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-4u-navy">BPO Folha de Pagamentos</h3>
                          <p className="text-sm text-muted-foreground">Gestão trabalhista segura e atualizada</p>
                        </div>
                      </div>
                      <HelpCircle className="text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="p-8 pt-6 mt-4 border-t border-border/50 bg-background rounded-b-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Escopo Essencial</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Processos de admissão, demissão, férias e controle de experiência</li>
                          <li>• Processamento da folha (salários, 13º, bônus, PLR e benefícios)</li>
                          <li>• Encargos trabalhistas e previdenciários</li>
                          <li>• Emissão de SEFIP, eSocial, CAGED, DIRF e informes de rendimentos</li>
                          <li>• Atualização de CTPS e registros de funcionários</li>
                          <li>• Relatórios de provisões de férias e 13º salário</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Diferencial</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Gestão trabalhista segura e atualizada, com foco em conformidade legal, redução de passivos e suporte técnico em fiscalizações.
                        </p>
                      </div>
                    </div>
                  </div>
                </details>

                {/* BPO Financeiro */}
                <details className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group" style={{ transitionDelay: '400ms' }}>
                  <summary className="cursor-pointer list-none p-8 rounded-none bg-muted/30 border-2 border-border/50 hover:shadow-2xl hover:border-4u-navy/30 transition-all duration-500 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-none bg-4u-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <DollarSign size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-4u-navy">BPO Financeiro</h3>
                          <p className="text-sm text-muted-foreground">Estrutura financeira de ponta a ponta</p>
                        </div>
                      </div>
                      <HelpCircle className="text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="p-8 pt-6 mt-4 border-t border-border/50 bg-background rounded-b-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Escopo Essencial</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Gestão de contas a pagar e a receber</li>
                          <li>• Conciliação bancária diária</li>
                          <li>• Gestão e análise do fluxo de caixa</li>
                          <li>• Relatórios financeiros e projeções</li>
                          <li>• Dashboards financeiros (BI) com indicadores em tempo real</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Diferencial</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Estrutura financeira de ponta a ponta, com processos automatizados, integração ao ERP do cliente e suporte direto à gestão estratégica.
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Serviços Especializados */}
          <section className="py-24 bg-muted/30 border-y border-border/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-4 tracking-tight">
                  Serviços Especializados por Segmento
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Atendimento personalizado para cada tipo de instituição financeira.
                </p>
              </div>

              <div className="space-y-6 max-w-6xl mx-auto">
                {/* AAI */}
                <details className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group" style={{ transitionDelay: '100ms' }}>
                  <summary className="cursor-pointer list-none p-8 rounded-none bg-background border-2 border-border/50 hover:shadow-2xl hover:border-4u-navy/30 transition-all duration-500 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-none bg-4u-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <TrendingUp size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-4u-navy">AAI – Agente Autônomo de Investimentos</h3>
                          <p className="text-sm text-muted-foreground">Conformidade CVM e Ancord</p>
                        </div>
                      </div>
                      <HelpCircle className="text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="p-8 pt-6 mt-4 border-t border-border/50 bg-background rounded-b-none">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Escopo</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Gestão contábil de comissões</li>
                          <li>• Emissão de notas fiscais</li>
                          <li>• Conformidade com CVM e Ancord</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Necessidades Contábeis</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Emissão de notas fiscais de comissão</li>
                          <li>• Controle de comissões por produto e cliente</li>
                          <li>• Gestão societária e tributária</li>
                          <li>• Obrigações acessórias (ECD, ECF, DCTF)</li>
                          <li>• Organização para fiscalizações CVM e Ancord</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Diferenciais 4U</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Estruturação de modelos de receita variável</li>
                          <li>• Centros de custo por assessor</li>
                          <li>• Rastreabilidade de pagamentos</li>
                          <li>• Compliance em demonstrações contábeis</li>
                          <li>• Suporte em M&amp;A</li>
                          <li>• Correta tributação de rebates e comissões</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>

                {/* Corretoras */}
                <details className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group" style={{ transitionDelay: '200ms' }}>
                  <summary className="cursor-pointer list-none p-8 rounded-none bg-background border-2 border-border/50 hover:shadow-2xl hover:border-4u-navy/30 transition-all duration-500 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-none bg-4u-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Building2 size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-4u-navy">Corretoras de Valores – CVM / BACEN</h3>
                          <p className="text-sm text-muted-foreground">Demonstrações e relatórios regulatórios</p>
                        </div>
                      </div>
                      <HelpCircle className="text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="p-8 pt-6 mt-4 border-t border-border/50 bg-background rounded-b-none">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Escopo</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Demonstrações contábeis auditadas</li>
                          <li>• Relatórios regulatórios</li>
                          <li>• Suporte ao Banco Central e CVM</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Necessidades Contábeis</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Escrituração IFRS / CPCs</li>
                          <li>• Plano contábil COSIF</li>
                          <li>• DEROP e DIMOF</li>
                          <li>• Controle de comissões e taxas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Diferenciais 4U</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Estruturação de controles internos</li>
                          <li>• Indicadores regulatórios</li>
                          <li>• Segurança e compliance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>

                {/* Bancos */}
                <details className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group" style={{ transitionDelay: '300ms' }}>
                  <summary className="cursor-pointer list-none p-8 rounded-none bg-background border-2 border-border/50 hover:shadow-2xl hover:border-4u-navy/30 transition-all duration-500 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-none bg-4u-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Landmark size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-4u-navy">Bancos Múlt iplos</h3>
                          <p className="text-sm text-muted-foreground">Contabilidade COSIF e suporte a auditorias</p>
                        </div>
                      </div>
                      <HelpCircle className="text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="p-8 pt-6 mt-4 border-t border-border/50 bg-background rounded-b-none">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Escopo</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Contabilidade COSIF</li>
                          <li>• Obrigações ao Banco Central</li>
                          <li>• Suporte a auditorias</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Necessidades Contábeis</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Escrituração COSIF</li>
                          <li>• SCR, DFP, DEROP, EAC, RAS</li>
                          <li>• Controle provisões IFRS 9</li>
                          <li>• Índices prudenciais (Basileia)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Diferenciais 4U</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Governança e compliance bancário</li>
                          <li>• Precisão nas provisões</li>
                          <li>• Integridade nos reportes</li>
                          <li>• Confiabilidade junto ao Bacen</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>

                {/* Corretoras de Seguros */}
                <details className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group" style={{ transitionDelay: '400ms' }}>
                  <summary className="cursor-pointer list-none p-8 rounded-none bg-background border-2 border-border/50 hover:shadow-2xl hover:border-4u-navy/30 transition-all duration-500 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-none bg-4u-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Shield size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-4u-navy">Corretoras de Seguros</h3>
                          <p className="text-sm text-muted-foreground">Regulada pela SUSEP</p>
                        </div>
                      </div>
                      <HelpCircle className="text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="p-8 pt-6 mt-4 border-t border-border/50 bg-background rounded-b-none">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Escopo</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Contabilidade regulada SUSEP</li>
                          <li>• Foco em governança</li>
                          <li>• Precisão contábil</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Necessidades Contábeis</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Escrituração conforme legislação</li>
                          <li>• Obrigações SUSEP e Receita Federal</li>
                          <li>• Demonstrações auditadas</li>
                          <li>• Provisões técnicas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-4u-navy mb-3">Diferenciais 4U</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Especialização em seguros</li>
                          <li>• Governança e controles internos</li>
                          <li>• Processos automatizados</li>
                          <li>• Soluções personalizadas</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-24 bg-4u-navy text-white relative overflow-hidden group mb-12 border-y-2 border-white/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-4u-green/10 rounded-none -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-4u-green/5 rounded-none -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

            <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 opacity-0 animate-fade-in tracking-tight">Contabilidade que Conecta ao Futuro</h2>
              <p className="text-lg text-white/90 mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Unimos processos, tecnologia e visão estratégica para apoiar o seu crescimento. Entre em
                contato e descubra como transformar sua contabilidade em um ativo estratégico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <a
                  href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Contabilidade%20Especializada%20da%204U%20Connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-8 py-5 bg-white text-4u-navy rounded-none font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95"
                >
                  <WhatsAppIcon size={20} className="transition-transform group-hover/btn:rotate-12" />
                  Falar com Especialista
                </a>
                <a
                  href="#servicos-modulares"
                  className="group/btn inline-flex items-center gap-2 px-8 py-5 bg-white/10 text-white border-2 border-white/20 rounded-none font-bold transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 active:scale-95"
                >
                  <MessageCircle size={20} className="transition-transform group-hover/btn:scale-110" />
                  Ver Serviços
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      <Footer variant="navy" />
    </div>
  );
};

export default InteligenciaFinanceira;
