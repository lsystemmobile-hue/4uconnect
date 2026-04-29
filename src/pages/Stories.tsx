import {
  Zap, Smartphone, UserCheck, TrendingUp, ShieldCheck,
  CreditCard, BarChart3, RefreshCw, FileText,
  Check, Globe, Cpu, MessageCircle,
  Star, Heart, Lock, Award, Users, Leaf,
  Building2, Briefcase, BarChart, MapPin, Phone, Instagram,
  MessageSquare
} from "lucide-react";

// ─── Story Card Base ─────────────────────────────────────────────────────────

interface StoryCardProps {
  id: string;
  bg: string;
  children: React.ReactNode;
}

function StoryCard({ id, bg, children }: StoryCardProps) {
  return (
    <div
      id={id}
      className={`relative flex flex-col overflow-hidden font-poppins ${bg}`}
      style={{ width: 390, aspectRatio: "9/16" }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute top-6 left-6 z-20">
      <img src="/logo-branca.png" alt="4U Connect" style={{ width: 110 }} />
    </div>
  );
}

function Tag({ children, color = "white" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="text-[11px] font-semibold tracking-[3px] uppercase"
      style={{ color: color === "white" ? "rgba(255,255,255,0.65)" : color }}
    >
      {children}
    </span>
  );
}

function Footer() {
  return (
    <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-1 z-20">
      <Instagram size={12} color="rgba(255,255,255,0.45)" />
      <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
        @4u.connect
      </span>
    </div>
  );
}

function BgImage({ src, opacity = 0.18 }: { src: string; opacity?: number }) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${src})`, opacity }}
    />
  );
}

function IconItem({ icon: Icon, text, color = "#fff" }: { icon: React.ElementType; text: string; color?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex items-center justify-center rounded-full flex-shrink-0"
        style={{ width: 36, height: 36, background: "rgba(255,255,255,0.15)" }}
      >
        <Icon size={18} color={color} />
      </div>
      <span className="text-[14px] font-medium text-white leading-tight">{text}</span>
    </div>
  );
}

// ─── Contabilidade Digital ────────────────────────────────────────────────────

function CD1() {
  return (
    <StoryCard id="story-cd-1" bg="bg-[#2d6e18]" style={{ background: "linear-gradient(145deg,#1e4d0f,#3a8320)" }}>
      <BgImage src="/contabilidade-digital.jpg" opacity={0.22} />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(145deg,rgba(30,77,15,0.85),rgba(58,131,32,0.75))" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-end h-full px-7 pb-16 pt-28">
        <Tag>Contabilidade Digital</Tag>
        <h1 className="text-white font-bold mt-2 leading-tight" style={{ fontSize: 34 }}>
          Contabilidade Digital para Prestadores de Serviço
        </h1>
        <p className="mt-3 font-medium leading-snug" style={{ fontSize: 15, color: "rgba(255,255,255,0.8)" }}>
          Praticidade. Controle. Conformidade fiscal. Atendimento humanizado.
        </p>
        <div
          className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2 font-semibold"
          style={{ background: "rgba(255,255,255,0.2)", fontSize: 13, color: "#fff", width: "fit-content" }}
        >
          <Zap size={14} /> Conheça os planos
        </div>
      </div>
    </StoryCard>
  );
}

function CD2() {
  const items = [
    { icon: Zap, text: "Rapidez no atendimento" },
    { icon: Smartphone, text: "Aplicativo exclusivo de gestão" },
    { icon: UserCheck, text: "Contador dedicado ao seu negócio" },
    { icon: TrendingUp, text: "Assessoria e otimização tributária" },
    { icon: ShieldCheck, text: "Conformidade fiscal garantida" },
  ];
  return (
    <StoryCard id="story-cd-2" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#1e4d0f,#4a9429)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Nossos Diferenciais</Tag>
        <h2 className="text-white font-bold mt-2 mb-7 leading-tight" style={{ fontSize: 28 }}>
          Por que escolher a 4U Connect?
        </h2>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <IconItem key={item.text} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function CD3() {
  return (
    <StoryCard id="story-cd-3" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#163a09,#2d6e18)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-6 pt-24 pb-14">
        <Tag>Nossos Planos</Tag>
        <h2 className="text-white font-bold mt-2 mb-6 leading-tight" style={{ fontSize: 26 }}>
          Escolha o plano ideal
        </h2>
        <div className="flex flex-col gap-3">
          {[
            { name: "SMALL", price: "R$ 259", tag: null, border: "rgba(255,255,255,0.2)" },
            { name: "SMART", price: "R$ 389", tag: "MAIS POPULAR", border: "#fff" },
            { name: "PREMIUM", price: "R$ 699", tag: null, border: "rgba(255,215,100,0.5)" },
          ].map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl px-5 py-4 flex items-center justify-between"
              style={{ background: plan.tag ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)", border: `1.5px solid ${plan.border}` }}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold" style={{ fontSize: 16 }}>{plan.name}</span>
                  {plan.tag && (
                    <span className="rounded-full px-2 py-0.5 font-semibold" style={{ background: "#4a9429", fontSize: 9, color: "#fff", letterSpacing: 1 }}>
                      {plan.tag}
                    </span>
                  )}
                </div>
                <span className="text-white/60 text-[12px]">por mês</span>
              </div>
              <span className="text-white font-extrabold" style={{ fontSize: 26 }}>{plan.price}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>
          Todos incluem App 4U, Certificado Digital e Conta PJ
        </p>
      </div>
    </StoryCard>
  );
}

function CD4() {
  return (
    <StoryCard id="story-cd-4" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#0f2e06,#1e5010)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-7 text-center pb-14">
        <div className="rounded-full flex items-center justify-center mb-6" style={{ width: 72, height: 72, background: "rgba(255,255,255,0.15)" }}>
          <MessageSquare size={36} color="#fff" />
        </div>
        <Tag>Fale Conosco</Tag>
        <h2 className="text-white font-bold mt-3 leading-tight" style={{ fontSize: 30 }}>
          Pronto para começar?
        </h2>
        <p className="mt-3 font-medium leading-snug" style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
          Fale com nosso time agora e comece sua contabilidade digital
        </p>
        <div className="mt-8 rounded-full px-7 py-3 font-bold text-white" style={{ background: "#4a9429", fontSize: 15 }}>
          (15) 3010-0009
        </div>
        <p className="mt-3 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>WhatsApp / Ligação</p>
      </div>
    </StoryCard>
  );
}

// ─── Inteligência Financeira ──────────────────────────────────────────────────

function IF1() {
  return (
    <StoryCard id="story-if-1" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#0a1530,#172a55)" }} />
      <BgImage src="/inteligencia-financeira.jpg" opacity={0.2} />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(145deg,rgba(10,21,48,0.85),rgba(23,42,85,0.75))" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-end h-full px-7 pb-16 pt-28">
        <Tag>BPO Financeiro</Tag>
        <h1 className="text-white font-bold mt-2 leading-tight" style={{ fontSize: 32 }}>
          Inteligência Financeira para o seu Negócio
        </h1>
        <p className="mt-3 font-medium leading-snug" style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
          Gestão financeira estratégica com visão de CFO para empresas em crescimento.
        </p>
      </div>
    </StoryCard>
  );
}

function IF2() {
  const items = [
    { icon: CreditCard, text: "Contas a Pagar e Receber" },
    { icon: BarChart3, text: "Fluxo de Caixa e DRE" },
    { icon: RefreshCw, text: "Conciliação Bancária Diária" },
    { icon: FileText, text: "Relatório Gerencial Mensal" },
    { icon: TrendingUp, text: "Dashboard BI em Tempo Real" },
  ];
  return (
    <StoryCard id="story-if-2" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#0a1530,#1e3a70)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Nossos Serviços</Tag>
        <h2 className="text-white font-bold mt-2 mb-7 leading-tight" style={{ fontSize: 28 }}>
          O que está incluso no BPO
        </h2>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <IconItem key={item.text} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function IF3() {
  return (
    <StoryCard id="story-if-3" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#060e20,#172a55)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-6 pt-24 pb-14">
        <Tag>Planos BPO</Tag>
        <h2 className="text-white font-bold mt-2 mb-6 leading-tight" style={{ fontSize: 26 }}>
          Investimento
        </h2>
        <div className="flex flex-col gap-4">
          {[
            { name: "ESSENCIAL", price: "R$ 1.997", sub: "ERP Omie incluso · até 2 contas", tag: null, border: "rgba(255,255,255,0.2)" },
            { name: "PREMIUM", price: "R$ 2.597", sub: "Reunião mensal · até 3 contas", tag: "RECOMENDADO", border: "rgba(255,215,100,0.6)" },
            { name: "ESTRATÉGICO", price: "Sob Consulta", sub: "Personalizado para grandes volumes", tag: null, border: "rgba(255,255,255,0.15)" },
          ].map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl px-5 py-4"
              style={{ background: plan.tag ? "rgba(255,215,100,0.12)" : "rgba(255,255,255,0.08)", border: `1.5px solid ${plan.border}` }}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold" style={{ fontSize: 14 }}>{plan.name}</span>
                  {plan.tag && (
                    <span className="rounded-full px-2 py-0.5 font-semibold" style={{ background: "rgba(255,215,100,0.3)", fontSize: 9, color: "#ffd764", letterSpacing: 1 }}>
                      {plan.tag}
                    </span>
                  )}
                </div>
                <span className="text-white font-extrabold" style={{ fontSize: plan.price === "Sob Consulta" ? 14 : 20 }}>{plan.price}</span>
              </div>
              <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>{plan.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function IF4() {
  return (
    <StoryCard id="story-if-4" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#040b18,#0e1e40)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-7 text-center pb-14">
        <div className="rounded-full flex items-center justify-center mb-6" style={{ width: 72, height: 72, background: "rgba(255,255,255,0.1)" }}>
          <BarChart3 size={36} color="#fff" />
        </div>
        <Tag>Fale Conosco</Tag>
        <h2 className="text-white font-bold mt-3 leading-tight" style={{ fontSize: 28 }}>
          Transforme sua gestão financeira
        </h2>
        <p className="mt-3 font-medium leading-snug" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
          Decisões guiadas por dados. Previsibilidade total de caixa.
        </p>
        <div className="mt-8 rounded-full px-7 py-3 font-bold text-white" style={{ background: "#172a55", border: "2px solid rgba(255,255,255,0.3)", fontSize: 15 }}>
          (15) 3010-0009
        </div>
      </div>
    </StoryCard>
  );
}

// ─── Contabilidade Especializada ─────────────────────────────────────────────

function CE1() {
  return (
    <StoryCard id="story-ce-1" bg="bg-black">
      <BgImage src="/contabilidade.jpg" opacity={0.25} />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(145deg,rgba(0,0,0,0.88),rgba(20,20,20,0.78))" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-end h-full px-7 pb-16 pt-28">
        <Tag>Mercado Financeiro</Tag>
        <h1 className="text-white font-bold mt-2 leading-tight" style={{ fontSize: 32 }}>
          Contabilidade Especializada para o Mercado Financeiro
        </h1>
        <p className="mt-3 font-medium leading-snug" style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
          Expertise regulatória para quem não pode errar.
        </p>
      </div>
    </StoryCard>
  );
}

function CE2() {
  const segments = [
    { icon: TrendingUp, name: "Agentes Autônomos (AAI)" },
    { icon: BarChart, name: "Corretoras de Valores" },
    { icon: Briefcase, name: "Gestoras de Recursos" },
    { icon: Building2, name: "Adm. de Fundos" },
    { icon: CreditCard, name: "Bancos Múltiplos" },
    { icon: ShieldCheck, name: "Corretoras de Seguros" },
  ];
  return (
    <StoryCard id="story-ce-2" bg="bg-black">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#000,#1a1a1a)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-6 pt-24 pb-14">
        <Tag>Segmentos Atendidos</Tag>
        <h2 className="text-white font-bold mt-2 mb-6 leading-tight" style={{ fontSize: 26 }}>
          Especializados em:
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {segments.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl px-4 py-4 flex flex-col items-center text-center gap-2"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <s.icon size={22} color="rgba(255,255,255,0.85)" />
              <span className="text-white font-medium leading-tight" style={{ fontSize: 12 }}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function CE3() {
  return (
    <StoryCard id="story-ce-3" bg="bg-black">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#000,#111)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-7 text-center pb-14">
        <div className="rounded-full flex items-center justify-center mb-6" style={{ width: 72, height: 72, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <Award size={36} color="#fff" />
        </div>
        <Tag>Fale Conosco</Tag>
        <h2 className="text-white font-bold mt-3 leading-tight" style={{ fontSize: 28 }}>
          Seu parceiro no mercado financeiro
        </h2>
        <p className="mt-3 font-medium leading-snug" style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
          Expertise técnica, inteligência de dados e tecnologia avançada.
        </p>
        <div className="mt-8 rounded-full px-7 py-3 font-bold text-white" style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.3)", fontSize: 15 }}>
          (15) 3010-0009
        </div>
      </div>
    </StoryCard>
  );
}

// ─── Soluções Tecnológicas ────────────────────────────────────────────────────

function ST1() {
  return (
    <StoryCard id="story-st-1" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#a33d00,#f97316)" }} />
      <BgImage src="/solucoes-tecnologicas.jpg" opacity={0.2} />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(145deg,rgba(163,61,0,0.82),rgba(249,115,22,0.72))" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-end h-full px-7 pb-16 pt-28">
        <Tag>Tecnologia</Tag>
        <h1 className="text-white font-bold mt-2 leading-tight" style={{ fontSize: 32 }}>
          Sites Profissionais e IA para WhatsApp
        </h1>
        <p className="mt-3 font-medium leading-snug" style={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
          Sua presença digital completa — site moderno + atendimento inteligente 24h.
        </p>
      </div>
    </StoryCard>
  );
}

function ST2() {
  const items = [
    { icon: Globe, text: "Design moderno e responsivo" },
    { icon: Check, text: "Domínio .com e .com.br incluso" },
    { icon: Smartphone, text: "Perfeito no celular e desktop" },
    { icon: Zap, text: "Entrega em até 7 dias úteis" },
    { icon: MessageSquare, text: "Botão de WhatsApp integrado" },
  ];
  return (
    <StoryCard id="story-st-2" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#7a2d00,#c25d0a)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Sites Profissionais</Tag>
        <h2 className="text-white font-bold mt-2 mb-7 leading-tight" style={{ fontSize: 28 }}>
          Seu site que converte visitantes em clientes
        </h2>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <IconItem key={item.text} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function ST3() {
  const items = [
    { icon: Cpu, text: "Treinado com o seu negócio" },
    { icon: MessageCircle, text: "Conversa natural e humanizada" },
    { icon: Zap, text: "Atendimento imediato, sem espera" },
    { icon: UserCheck, text: "Qualifica e direciona leads" },
    { icon: Lock, text: "Funciona 24h, 7 dias por semana" },
  ];
  return (
    <StoryCard id="story-st-3" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#6b2800,#b84e00)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Assistente IA</Tag>
        <h2 className="text-white font-bold mt-2 mb-7 leading-tight" style={{ fontSize: 28 }}>
          IA no seu WhatsApp 24/7
        </h2>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <IconItem key={item.text} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function ST4() {
  return (
    <StoryCard id="story-st-4" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#7a2d00,#f97316)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-6 pt-24 pb-14">
        <Tag>Investimento</Tag>
        <h2 className="text-white font-bold mt-2 mb-6 leading-tight" style={{ fontSize: 26 }}>
          Escolha o plano ideal
        </h2>
        <div className="flex flex-col gap-4">
          {[
            { name: "SOMENTE SITE", price: "R$ 1.497", sub: "Pagamento único · Manutenção R$149/mês", tag: null, border: "rgba(255,255,255,0.2)" },
            { name: "PLANO COMPLETO", price: "R$ 2.097", sub: "Site + IA WhatsApp · Manutenção R$199/mês", tag: "MAIS COMPLETO", border: "#fff" },
            { name: "SOMENTE IA", price: "Sob Consulta", sub: "Assistente IA para WhatsApp", tag: null, border: "rgba(255,255,255,0.15)" },
          ].map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl px-5 py-4"
              style={{ background: plan.tag ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)", border: `1.5px solid ${plan.border}` }}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold" style={{ fontSize: 12 }}>{plan.name}</span>
                  {plan.tag && (
                    <span className="rounded-full px-2 py-0.5 font-semibold" style={{ background: "rgba(255,255,255,0.25)", fontSize: 8, color: "#fff", letterSpacing: 1 }}>
                      {plan.tag}
                    </span>
                  )}
                </div>
                <span className="text-white font-extrabold" style={{ fontSize: plan.price === "Sob Consulta" ? 13 : 20 }}>{plan.price}</span>
              </div>
              <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>{plan.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function ST5() {
  return (
    <StoryCard id="story-st-5" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#5a2000,#9c3d00)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-7 text-center pb-14">
        <div className="rounded-full flex items-center justify-center mb-6" style={{ width: 72, height: 72, background: "rgba(255,255,255,0.15)" }}>
          <Cpu size={36} color="#fff" />
        </div>
        <Tag>Fale Conosco</Tag>
        <h2 className="text-white font-bold mt-3 leading-tight" style={{ fontSize: 28 }}>
          Tecnologia que trabalha por você
        </h2>
        <p className="mt-3 font-medium leading-snug" style={{ fontSize: 14, color: "rgba(255,255,255,0.72)" }}>
          Site moderno + atendimento inteligente = seu negócio operando 24h
        </p>
        <div className="mt-8 rounded-full px-7 py-3 font-bold text-white" style={{ background: "#f97316", fontSize: 15 }}>
          (15) 3010-0009
        </div>
      </div>
    </StoryCard>
  );
}

// ─── Quem Somos ───────────────────────────────────────────────────────────────

function QS1() {
  return (
    <StoryCard id="story-qs-1" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#060e20,#172a55)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Quem Somos</Tag>
        <h2 className="text-white font-bold mt-2 mb-8 leading-tight" style={{ fontSize: 30 }}>
          Nossa Missão & Visão
        </h2>
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl px-5 py-5" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <p className="font-bold text-white mb-2" style={{ fontSize: 13, letterSpacing: 2 }}>MISSÃO</p>
            <p className="text-white/80 leading-snug" style={{ fontSize: 14 }}>
              Conectar empresas a soluções contábeis e financeiras digitais, inovadoras e acessíveis, promovendo eficiência e crescimento sustentável.
            </p>
          </div>
          <div className="rounded-2xl px-5 py-5" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <p className="font-bold text-white mb-2" style={{ fontSize: 13, letterSpacing: 2 }}>VISÃO</p>
            <p className="text-white/80 leading-snug" style={{ fontSize: 14 }}>
              Ser referência em contabilidade estratégica e inteligência financeira, simplificando a gestão por meio de soluções tecnológicas.
            </p>
          </div>
        </div>
      </div>
    </StoryCard>
  );
}

function QS2() {
  return (
    <StoryCard id="story-qs-2" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#0a1530,#1e3a70)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Nossa Diretoria</Tag>
        <h2 className="text-white font-bold mt-2 mb-8 leading-tight" style={{ fontSize: 28 }}>
          Liderança 4U Connect
        </h2>
        <div className="flex flex-col gap-5">
          {[
            {
              img: "/antonio-neno.jpeg",
              name: "Antônio Dias",
              role: "Diretor Executivo",
              desc: "Especialista em M&A, compliance e estruturação societária para o mercado financeiro.",
            },
            {
              img: "/antonio.jpg",
              name: "Fernando Alves",
              role: "Diretor de Operações",
              desc: "Expertise em outsourcing, governança e otimização fiscal para empresas em crescimento.",
            },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-4">
              <img
                src={p.img}
                alt={p.name}
                className="rounded-full object-cover flex-shrink-0"
                style={{ width: 72, height: 72, border: "2px solid rgba(255,255,255,0.3)" }}
              />
              <div>
                <p className="text-white font-bold" style={{ fontSize: 15 }}>{p.name}</p>
                <p className="text-white/60 font-medium" style={{ fontSize: 11, letterSpacing: 1 }}>{p.role}</p>
                <p className="text-white/70 mt-1 leading-snug" style={{ fontSize: 12 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function QS3() {
  const values = [
    { icon: Star, text: "Excelência" },
    { icon: Heart, text: "Integridade" },
    { icon: Zap, text: "Inovação" },
    { icon: Lock, text: "Segurança" },
    { icon: TrendingUp, text: "Crescimento Contínuo" },
    { icon: Leaf, text: "Responsabilidade Social" },
  ];
  return (
    <StoryCard id="story-qs-3" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#060e20,#172a55)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-6 pt-24 pb-14">
        <Tag>Nossos Valores</Tag>
        <h2 className="text-white font-bold mt-2 mb-6 leading-tight" style={{ fontSize: 28 }}>
          O que nos guia
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {values.map((v) => (
            <div
              key={v.text}
              className="rounded-2xl px-4 py-4 flex flex-col items-center text-center gap-2"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <v.icon size={22} color="rgba(255,255,255,0.8)" />
              <span className="text-white font-medium leading-tight" style={{ fontSize: 12 }}>{v.text}</span>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

// ─── Contatos ─────────────────────────────────────────────────────────────────

function CT1() {
  return (
    <StoryCard id="story-ct-1" bg="">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#163a09,#2d6e18)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-7 text-center pb-14 gap-5">
        <img src="/logo-branca.png" alt="4U Connect" style={{ width: 140 }} />
        <Tag>Fale Conosco</Tag>
        <h2 className="text-white font-bold leading-tight" style={{ fontSize: 26 }}>
          Estamos prontos para te atender
        </h2>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.12)" }}>
            <Phone size={18} color="#fff" />
            <span className="text-white font-semibold" style={{ fontSize: 15 }}>(15) 3010-0009</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.08)" }}>
            <MapPin size={16} color="rgba(255,255,255,0.7)" />
            <span className="text-white/80 text-left leading-tight" style={{ fontSize: 12 }}>Al. Mamoré, 687 – Sala 304, Alphaville, Barueri/SP</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.08)" }}>
            <MapPin size={16} color="rgba(255,255,255,0.7)" />
            <span className="text-white/80 text-left leading-tight" style={{ fontSize: 12 }}>Rua Fernando Silva, 190 – Sala 308, Sorocaba/SP</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.08)" }}>
            <Instagram size={16} color="rgba(255,255,255,0.7)" />
            <span className="text-white/80" style={{ fontSize: 13 }}>@4u.connect</span>
          </div>
        </div>
      </div>
    </StoryCard>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="col-span-full flex items-center gap-4 mt-8 mb-2">
      <div className="h-px flex-1" style={{ background: color }} />
      <span className="font-bold uppercase tracking-widest text-sm" style={{ color }}>
        {children}
      </span>
      <div className="h-px flex-1" style={{ background: color }} />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Stories() {
  return (
    <div className="min-h-screen font-poppins" style={{ background: "#111" }}>
      <div className="max-w-[1400px] mx-auto px-8 py-10">
        <div className="mb-8">
          <img src="/logo-branca.png" alt="4U Connect" style={{ width: 140 }} />
          <h1 className="text-white font-bold mt-4 text-3xl">Instagram Stories — 4U Connect</h1>
          <p className="text-white/50 mt-2 text-sm">
            Para salvar cada story: clique com o botão direito → "Inspecionar" → clique direito no elemento → "Capturar screenshot do nó". Ou use a extensão GoFullPage/FireShot no Chrome.
          </p>
        </div>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, 390px)" }}
        >
          <SectionLabel color="#4a9429">Contabilidade Digital</SectionLabel>
          <CD1 /><CD2 /><CD3 /><CD4 />

          <SectionLabel color="#3a6abf">Inteligência Financeira</SectionLabel>
          <IF1 /><IF2 /><IF3 /><IF4 />

          <SectionLabel color="#888">Contabilidade Especializada</SectionLabel>
          <CE1 /><CE2 /><CE3 />

          <SectionLabel color="#f97316">Soluções Tecnológicas</SectionLabel>
          <ST1 /><ST2 /><ST3 /><ST4 /><ST5 />

          <SectionLabel color="#3a6abf">Quem Somos</SectionLabel>
          <QS1 /><QS2 /><QS3 />

          <SectionLabel color="#4a9429">Contatos</SectionLabel>
          <CT1 />
        </div>
      </div>
    </div>
  );
}
