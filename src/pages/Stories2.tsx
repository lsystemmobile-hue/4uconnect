import {
  Zap, Smartphone, UserCheck, TrendingUp, ShieldCheck,
  CreditCard, BarChart3, RefreshCw, FileText,
  Check, Globe, Cpu, MessageCircle,
  Star, Heart, Lock, Award, Leaf,
  Building2, Briefcase, BarChart, MapPin, Phone, Instagram,
  MessageSquare, ClipboardCheck, PieChart, Landmark,
  AlertCircle, ArrowRight, Users, DollarSign, Settings,
  Layers, BarChart2, BookOpen, Calculator, Network,
  CheckCircle2, Download
} from "lucide-react";
import html2canvas from "html2canvas";

// ─── Download helper ──────────────────────────────────────────────────────────

async function downloadCard(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const btns = el.querySelectorAll<HTMLElement>(".dl-btn");
  btns.forEach(b => (b.style.display = "none"));
  const canvas = await html2canvas(el, { scale: 2, useCORS: true, allowTaint: true });
  btns.forEach(b => (b.style.display = ""));
  const link = document.createElement("a");
  link.download = `${id}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

// ─── Base Components ──────────────────────────────────────────────────────────

interface StoryCardProps {
  id: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

function StoryCard({ id, children, style, className = "" }: StoryCardProps) {
  return (
    <div
      id={id}
      className={`relative flex flex-col overflow-hidden font-poppins ${className}`}
      style={{ width: 390, aspectRatio: "9/16", ...style }}
    >
      {children}
      <button
        className="dl-btn absolute bottom-12 right-3 z-30 flex items-center gap-1 rounded-full px-3 py-1.5"
        style={{ background: "rgba(0,0,0,0.6)", color: "#fff", backdropFilter: "blur(4px)", fontSize: 11, fontWeight: 700 }}
        onClick={() => downloadCard(id)}
      >
        <Download size={11} />
        Baixar
      </button>
    </div>
  );
}

function Logo({ size = 100 }: { size?: number }) {
  return (
    <div className="absolute top-6 left-6 z-20">
      <img src="/logo-branca.png" alt="4U Connect" style={{ width: size }} />
    </div>
  );
}

function Tag({ children, color = "rgba(255,255,255,0.6)" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{ color }}>
      {children}
    </span>
  );
}

function Footer({ handle = "@4u.connect" }: { handle?: string }) {
  return (
    <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-1 z-20">
      <Instagram size={11} color="rgba(255,255,255,0.4)" />
      <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>{handle}</span>
    </div>
  );
}

function BgImage({ src, opacity = 0.2 }: { src: string; opacity?: number }) {
  return (
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})`, opacity }} />
  );
}

function Overlay({ gradient }: { gradient: string }) {
  return <div className="absolute inset-0 z-10" style={{ background: gradient }} />;
}

function IconItem({ icon: Icon, text, sub, color = "#fff" }: { icon: React.ElementType; text: string; sub?: string; color?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex items-center justify-center rounded-full flex-shrink-0 mt-0.5" style={{ width: 32, height: 32, background: "rgba(255,255,255,0.15)" }}>
        <Icon size={15} color={color} />
      </div>
      <div>
        <span className="text-[13px] font-semibold text-white leading-tight block">{text}</span>
        {sub && <span className="text-[11px] leading-tight block" style={{ color: "rgba(255,255,255,0.55)" }}>{sub}</span>}
      </div>
    </div>
  );
}

function CheckItem({ text, color = "#fff" }: { text: string; color?: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 size={14} color={color} className="flex-shrink-0 mt-0.5" />
      <span className="text-[12px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.85)" }}>{text}</span>
    </div>
  );
}

function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="col-span-full flex items-center gap-4 mt-10 mb-2">
      <div className="h-px flex-1" style={{ background: color }} />
      <span className="font-bold uppercase tracking-widest text-sm" style={{ color }}>{children}</span>
      <div className="h-px flex-1" style={{ background: color }} />
    </div>
  );
}

// ─── CONTABILIDADE DIGITAL ────────────────────────────────────────────────────

function CD2_1() {
  return (
    <StoryCard id="s2-cd-1">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#1a4509,#3a8320)" }} />
      <BgImage src="/contabilidade-digital.jpg" opacity={0.22} />
      <Overlay gradient="linear-gradient(145deg,rgba(26,69,9,0.88),rgba(58,131,32,0.78))" />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-end h-full px-7 pb-16 pt-28">
        <Tag>Contabilidade Digital</Tag>
        <h1 className="text-white font-bold mt-2 leading-tight" style={{ fontSize: 33 }}>
          Contabilidade Digital para Prestadores de Serviço
        </h1>
        <p className="mt-3 font-medium leading-snug" style={{ fontSize: 14, color: "rgba(255,255,255,0.82)" }}>
          Praticidade, controle, conformidade fiscal e atendimento humanizado para quem presta serviços.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          {["Sem burocracia", "Com app exclusivo", "Contador dedicado"].map(t => (
            <div key={t} className="flex items-center gap-2">
              <Check size={13} color="#7ed45a" />
              <span className="text-white/80 text-[13px]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function CD2_2() {
  const items = [
    { icon: Zap, text: "Rapidez no atendimento", sub: "Respostas rápidas e suporte ágil" },
    { icon: Smartphone, text: "Aplicativo de gestão empresarial", sub: "Controle na palma da mão" },
    { icon: FileText, text: "Emissão de notas fiscais", sub: "Simples e sem complicação" },
    { icon: TrendingUp, text: "Orientação sobre impostos", sub: "Planejamento tributário contínuo" },
    { icon: BarChart3, text: "Análise mensal do faturamento", sub: "Visão clara da sua receita" },
  ];
  return (
    <StoryCard id="s2-cd-2">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#163a09,#2d6e18)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Diferenciais — Parte 1 de 2</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 24 }}>
          O que a 4U Connect oferece
        </h2>
        <div className="flex flex-col gap-4">
          {items.map(item => <IconItem key={item.text} {...item} />)}
        </div>
      </div>
    </StoryCard>
  );
}

function CD2_3() {
  const items = [
    { icon: ClipboardCheck, text: "Supervisão de certidões", sub: "Regularidade garantida" },
    { icon: UserCheck, text: "Análise do pró-labore dos sócios", sub: "Distribuição correta de remuneração" },
    { icon: ShieldCheck, text: "Suporte especializado", sub: "Equipe técnica disponível" },
    { icon: Calculator, text: "Otimização tributária", sub: "Pague menos impostos legalmente" },
    { icon: CreditCard, text: "Conta PJ Digital", sub: "Abertura em 24h, sem taxas" },
  ];
  return (
    <StoryCard id="s2-cd-3">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#1e5010,#4a9429)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Diferenciais — Parte 2 de 2</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 24 }}>
          Mais vantagens exclusivas
        </h2>
        <div className="flex flex-col gap-4">
          {items.map(item => <IconItem key={item.text} {...item} />)}
        </div>
      </div>
    </StoryCard>
  );
}

function CD2_4() {
  const steps = [
    { n: "01", title: "Definição do Negócio", desc: "Modelo de negócio e consultoria inicial personalizada" },
    { n: "02", title: "Documentação", desc: "Criação e análise de documentos, assinatura digital e envio aos órgãos" },
    { n: "03", title: "Aprovação", desc: "Empresa aprovada com CNPJ ativo" },
    { n: "04", title: "Empresa Pronta!", desc: "Conta digital, certificado, emissão de NF e gestão pós-abertura" },
  ];
  return (
    <StoryCard id="s2-cd-4">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#0f2e06,#2a6015)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Jornada do Cliente</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 26 }}>
          Da ideia à empresa pronta
        </h2>
        <div className="flex flex-col gap-3">
          {steps.map(s => (
            <div key={s.n} className="flex gap-3 items-start rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <span className="font-extrabold flex-shrink-0" style={{ fontSize: 22, color: "#7ed45a" }}>{s.n}</span>
              <div>
                <p className="text-white font-bold" style={{ fontSize: 13 }}>{s.title}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function CD2_5() {
  return (
    <StoryCard id="s2-cd-5">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#163a09,#2d6e18)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Plano</Tag>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-white font-extrabold" style={{ fontSize: 38 }}>SMALL</span>
          <span className="font-bold" style={{ fontSize: 28, color: "#7ed45a" }}>R$ 259/mês</span>
        </div>
        <p className="mt-1 mb-5 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>Ideal para quem está começando</p>
        <div className="flex flex-col gap-2 mb-5">
          {[
            "Até 5 notas fiscais por mês",
            "Pró-labore para até 2 sócios",
            "Faturamento até R$ 250.000/ano",
            "Folha de pagamento à parte",
          ].map(t => <CheckItem key={t} text={t} color="#7ed45a" />)}
        </div>
        <p className="font-semibold text-white mb-2" style={{ fontSize: 11, letterSpacing: 2 }}>INCLUSO EM TODOS OS PLANOS:</p>
        <div className="flex flex-col gap-1.5">
          {[
            "Abertura de empresa com planejamento estratégico",
            "App 4U Connect com controle total da sua empresa",
            "Certificado digital incluso e sem complicação",
            "Conta PJ digital integrada em até 24h",
            "Atendimento ágil e multicanal",
          ].map(t => <CheckItem key={t} text={t} color="rgba(255,255,255,0.5)" />)}
        </div>
      </div>
    </StoryCard>
  );
}

function CD2_6() {
  return (
    <StoryCard id="s2-cd-6">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#1e5010,#3d8520)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-20 pb-14">
        <div className="mb-3 self-start rounded-full px-3 py-1 font-bold text-[10px] tracking-widest" style={{ background: "#7ed45a", color: "#0f2e06" }}>MAIS POPULAR</div>
        <Tag>Plano</Tag>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-white font-extrabold" style={{ fontSize: 38 }}>SMART</span>
          <span className="font-bold" style={{ fontSize: 28, color: "#b8f080" }}>R$ 389/mês</span>
        </div>
        <p className="mt-1 mb-4 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>Tudo do Small, mais:</p>
        <div className="flex flex-col gap-2">
          {[
            "Até 10 notas fiscais por mês",
            "Pró-labore para até 3 sócios",
            "Relatórios contábeis trimestrais",
            "Entrega de CNDs (Certidões Negativas)",
            "Faturamento até R$ 720.000/ano",
          ].map(t => <CheckItem key={t} text={t} color="#b8f080" />)}
        </div>
        <div className="mt-4 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <p className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
            + Todos os benefícios do Plano Small inclusos
          </p>
        </div>
      </div>
    </StoryCard>
  );
}

function CD2_7() {
  return (
    <StoryCard id="s2-cd-7">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#0a2004,#163a09)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-20 pb-14">
        <div className="mb-3 self-start rounded-full px-3 py-1 font-bold text-[10px] tracking-widest" style={{ background: "rgba(255,215,100,0.25)", color: "#ffd764", border: "1px solid rgba(255,215,100,0.4)" }}>MAIS COMPLETO</div>
        <Tag>Plano</Tag>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-white font-extrabold" style={{ fontSize: 34 }}>PREMIUM</span>
          <span className="font-bold" style={{ fontSize: 26, color: "#ffd764" }}>R$ 699/mês</span>
        </div>
        <p className="mt-1 mb-4 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>Tudo do Smart, mais:</p>
        <div className="flex flex-col gap-2">
          {[
            "Até 20 notas fiscais por mês",
            "Pró-labore para até 4 sócios",
            "Relatórios contábeis mensais",
            "Pesquisa de situação fiscal",
            "Folha de pagamento para até 5 funcionários",
            "Faturamento até R$ 1.800.000/ano",
          ].map(t => <CheckItem key={t} text={t} color="#ffd764" />)}
        </div>
      </div>
    </StoryCard>
  );
}

function CD2_8() {
  const benefits = [
    "Especialistas em prestadores de serviços PJ",
    "App 4U Connect com controle total da sua empresa",
    "Empresa pronta para faturar com rapidez",
    "Certificado digital incluso e sem complicação",
    "Conta PJ digital integrada em até 24h",
    "Relatórios contábeis para tomada de decisão",
    "Gestão inteligente de documentos",
    "Atendimento ágil e multicanal",
    "Planejamento tributário contínuo",
    "Abertura de empresa com planejamento estratégico",
  ];
  return (
    <StoryCard id="s2-cd-8">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#1e5010,#2d6e18)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Benefícios — Todos os Planos</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 22 }}>
          Incluso em qualquer plano escolhido
        </h2>
        <div className="flex flex-col gap-2.5">
          {benefits.map(b => <CheckItem key={b} text={b} color="#7ed45a" />)}
        </div>
      </div>
    </StoryCard>
  );
}

function CD2_9() {
  return (
    <StoryCard id="s2-cd-9">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#0a1f05,#163a09)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-7 text-center pb-14">
        <div className="rounded-full flex items-center justify-center mb-5" style={{ width: 68, height: 68, background: "rgba(255,255,255,0.12)" }}>
          <MessageSquare size={32} color="#7ed45a" />
        </div>
        <Tag>Fale Conosco</Tag>
        <h2 className="text-white font-bold mt-3 leading-tight" style={{ fontSize: 28 }}>
          Comece sua contabilidade digital hoje
        </h2>
        <p className="mt-3 leading-snug" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
          Fale com nosso time e receba uma proposta personalizada para o seu negócio.
        </p>
        <div className="mt-7 rounded-full px-7 py-3 font-bold" style={{ background: "#4a9429", fontSize: 15, color: "#fff" }}>
          (15) 3010-0009
        </div>
        <p className="mt-2 text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>WhatsApp · comercial@4uconnect.com.br</p>
      </div>
    </StoryCard>
  );
}

// ─── INTELIGÊNCIA FINANCEIRA ──────────────────────────────────────────────────

function IF2_1() {
  return (
    <StoryCard id="s2-if-1">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#060e20,#172a55)" }} />
      <BgImage src="/inteligencia-financeira.jpg" opacity={0.2} />
      <Overlay gradient="linear-gradient(145deg,rgba(6,14,32,0.9),rgba(23,42,85,0.8))" />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-end h-full px-7 pb-16 pt-28">
        <Tag>BPO Financeiro & Inteligência</Tag>
        <h1 className="text-white font-bold mt-2 leading-tight" style={{ fontSize: 30 }}>
          Ecossistema de Inteligência Financeira
        </h1>
        <p className="mt-3 leading-snug" style={{ fontSize: 13, color: "rgba(255,255,255,0.78)" }}>
          A 4U Connect une Inteligência Financeira, Tecnologia e Segurança para transformar a gestão do seu negócio.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          {["Controle total", "Previsibilidade de caixa", "Crescimento sustentável"].map(t => (
            <div key={t} className="flex items-center gap-2">
              <Check size={12} color="#6ea8fe" />
              <span className="text-white/75 text-[12px]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function IF2_2() {
  const problems = [
    "Falta de transparência nas entradas e saídas",
    "Empresário focado na operação, não na estratégia",
    "Pagamentos atrasados ou duplicados",
    "Processos manuais e burocráticos",
    "Falta de previsibilidade financeira mensal",
    "Surpresas financeiras evitáveis",
  ];
  return (
    <StoryCard id="s2-if-2">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#0a1530,#172a55)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Problemas que Resolvemos</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 24 }}>
          Reconhece algum desses problemas?
        </h2>
        <div className="flex flex-col gap-3">
          {problems.map(p => (
            <div key={p} className="flex items-start gap-2">
              <AlertCircle size={14} color="#f87171" className="flex-shrink-0 mt-0.5" />
              <span className="text-[12px] leading-snug" style={{ color: "rgba(255,255,255,0.8)" }}>{p}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl px-4 py-3" style={{ background: "rgba(110,168,254,0.12)", border: "1px solid rgba(110,168,254,0.25)" }}>
          <p className="text-[12px] font-semibold" style={{ color: "#6ea8fe" }}>A 4U Connect resolve tudo isso para você.</p>
        </div>
      </div>
    </StoryCard>
  );
}

function IF2_3() {
  const services = [
    { icon: CreditCard, text: "Contas a Pagar", sub: "Gestão e agendamento de pagamentos" },
    { icon: DollarSign, text: "Contas a Receber", sub: "Controle de recebimentos e inadimplência" },
    { icon: RefreshCw, text: "Conciliação Bancária Diária", sub: "Conferência automática de extratos" },
    { icon: BarChart3, text: "Gestão de Fluxo de Caixa", sub: "Visão completa das entradas e saídas" },
    { icon: Layers, text: "Dashboard BI (4U Digital)", sub: "Indicadores em tempo real" },
  ];
  return (
    <StoryCard id="s2-if-3">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#060e20,#1a3060)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Serviços BPO — Parte 1 de 2</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 24 }}>
          BPO Financeiro Completo
        </h2>
        <div className="flex flex-col gap-4">
          {services.map(s => <IconItem key={s.text} {...s} />)}
        </div>
      </div>
    </StoryCard>
  );
}

function IF2_4() {
  const services = [
    { icon: MessageCircle, text: "Comunicação Financeira", sub: "Relatórios claros para decisões rápidas" },
    { icon: Settings, text: "Automação de Rotinas", sub: "Processos automatizados ponta a ponta" },
    { icon: Network, text: "Integração ERP (Omie)", sub: "Conexão com seu sistema de gestão" },
    { icon: FileText, text: "Relatórios de Desempenho", sub: "Análises mensais e indicadores" },
    { icon: UserCheck, text: "Atendimento Consultivo", sub: "Time especializado à disposição" },
  ];
  return (
    <StoryCard id="s2-if-4">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#0a1530,#1e3a70)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Serviços BPO — Parte 2 de 2</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 24 }}>
          Tecnologia e Suporte Ativo
        </h2>
        <div className="flex flex-col gap-4">
          {services.map(s => <IconItem key={s.text} {...s} />)}
        </div>
      </div>
    </StoryCard>
  );
}

function IF2_5() {
  return (
    <StoryCard id="s2-if-5">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#060e20,#172a55)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-20 pb-14">
        <Tag>Plano</Tag>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-white font-extrabold" style={{ fontSize: 30 }}>ESSENCIAL</span>
          <span className="font-bold" style={{ fontSize: 22, color: "#6ea8fe" }}>R$ 1.997/mês</span>
        </div>
        <p className="mt-1 mb-4 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>Solução completa para empresas em organização</p>
        <div className="flex flex-col gap-2">
          {[
            "ERP Omie incluso",
            "Até 40 recebimentos / mês (NF ou Boleto)",
            "Até 80 pagamentos / mês (NF ou Boleto)",
            "Conciliação bancária: até 2 contas",
            "BI Financeiro — 4U Digital",
            "Vídeo mensal com apresentação de resultados",
            "Atendimento via WhatsApp",
            "Envio de documentos à contabilidade",
            "Conciliação de cartão: 1 máquina",
          ].map(t => <CheckItem key={t} text={t} color="#6ea8fe" />)}
        </div>
      </div>
    </StoryCard>
  );
}

function IF2_6() {
  return (
    <StoryCard id="s2-if-6">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#040b18,#0e1e40)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-20 pb-14">
        <div className="mb-3 self-start rounded-full px-3 py-1 font-bold text-[10px] tracking-widest" style={{ background: "rgba(255,215,100,0.2)", color: "#ffd764", border: "1px solid rgba(255,215,100,0.35)" }}>RECOMENDADO</div>
        <Tag>Plano</Tag>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-white font-extrabold" style={{ fontSize: 30 }}>PREMIUM</span>
          <span className="font-bold" style={{ fontSize: 22, color: "#ffd764" }}>R$ 2.597/mês</span>
        </div>
        <p className="mt-1 mb-4 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>Tudo do Essencial, mais:</p>
        <div className="flex flex-col gap-2">
          {[
            "Até 80 recebimentos por mês",
            "Até 160 pagamentos por mês",
            "Conciliação bancária: até 3 contas",
            "Reunião mensal online (1 hora)",
            "Indicadores de performance financeira",
            "Report de volumetria mensal",
          ].map(t => <CheckItem key={t} text={t} color="#ffd764" />)}
        </div>
        <div className="mt-4 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>
            Plano ESTRATÉGICO disponível para grandes volumes — sob consulta
          </p>
        </div>
      </div>
    </StoryCard>
  );
}

function IF2_7() {
  const views = [
    { title: "Painel Gerencial", desc: "Visão macro: Receita, EBITDA, Lucro e Fluxo de Caixa" },
    { title: "DRE – Resultado", desc: "Demonstrativo de resultado mensal detalhado" },
    { title: "Resumo DRE", desc: "Faturamento, composição e maiores receitas" },
    { title: "Previsto x Realizado", desc: "Controle orçamentário: receitas e despesas" },
  ];
  return (
    <StoryCard id="s2-if-7">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#0a1530,#172a55)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Dashboard 4U Digital</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 26 }}>
          Indicadores financeiros em tempo real
        </h2>
        <div className="flex flex-col gap-3">
          {views.map((v, i) => (
            <div key={v.title} className="rounded-xl px-4 py-3 flex gap-3 items-start" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <span className="font-extrabold flex-shrink-0" style={{ fontSize: 20, color: "#6ea8fe" }}>0{i + 1}</span>
              <div>
                <p className="text-white font-semibold" style={{ fontSize: 13 }}>{v.title}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function IF2_8() {
  return (
    <StoryCard id="s2-if-8">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#030810,#0a1530)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-7 text-center pb-14">
        <div className="rounded-full flex items-center justify-center mb-5" style={{ width: 68, height: 68, background: "rgba(110,168,254,0.15)" }}>
          <BarChart3 size={32} color="#6ea8fe" />
        </div>
        <Tag>Fale Conosco</Tag>
        <h2 className="text-white font-bold mt-3 leading-tight" style={{ fontSize: 26 }}>
          Decisões guiadas por dados
        </h2>
        <p className="mt-3 leading-snug" style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
          Transforme seus números em inteligência estratégica. Previsibilidade total de caixa.
        </p>
        <div className="mt-7 rounded-full px-7 py-3 font-bold" style={{ background: "#172a55", border: "2px solid rgba(110,168,254,0.4)", fontSize: 15, color: "#fff" }}>
          (15) 3010-0009
        </div>
        <p className="mt-2 text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>comercial@4uconnect.com.br</p>
      </div>
    </StoryCard>
  );
}

// ─── CONTABILIDADE ESPECIALIZADA ─────────────────────────────────────────────

function CE2_1() {
  return (
    <StoryCard id="s2-ce-1" className="bg-black">
      <BgImage src="/contabilidade.jpg" opacity={0.22} />
      <Overlay gradient="linear-gradient(145deg,rgba(0,0,0,0.9),rgba(18,18,18,0.8))" />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-end h-full px-7 pb-16 pt-28">
        <Tag>Mercado Financeiro</Tag>
        <h1 className="text-white font-bold mt-2 leading-tight" style={{ fontSize: 30 }}>
          Contabilidade Especializada para o Mercado Financeiro
        </h1>
        <p className="mt-3 leading-snug" style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
          Serviço contábil completo, preciso e estratégico para empresas de médio porte e grupos de alta complexidade.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          {["Expertise regulatória", "Conformidade CVM/BACEN/SUSEP", "Tecnologia avançada"].map(t => (
            <div key={t} className="flex items-center gap-2">
              <Check size={12} color="rgba(255,255,255,0.6)" />
              <span className="text-white/70 text-[12px]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function CE2_2() {
  return (
    <StoryCard id="s2-ce-2" className="bg-black">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#000,#141414)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Segmento</Tag>
        <div className="flex items-center gap-3 mt-2 mb-4">
          <TrendingUp size={28} color="#fff" />
          <h2 className="text-white font-bold leading-tight" style={{ fontSize: 24 }}>AAI — Agente Autônomo de Investimentos</h2>
        </div>
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>Conformidade CVM e Ancord</p>
        <div className="mb-4">
          <p className="text-white/60 text-[11px] uppercase tracking-wider mb-2">Escopo</p>
          <div className="flex flex-col gap-1.5">
            {["Gestão de comissões e rebates", "Emissão de notas fiscais", "Conformidade CVM/Ancord"].map(t => <CheckItem key={t} text={t} color="rgba(255,255,255,0.5)" />)}
          </div>
        </div>
        <div>
          <p className="text-white/60 text-[11px] uppercase tracking-wider mb-2">Diferenciais</p>
          <div className="flex flex-col gap-1.5">
            {["Receita variável com rastreabilidade", "Suporte em processos de M&A", "Planejamento tributário eficiente"].map(t => <CheckItem key={t} text={t} color="#fff" />)}
          </div>
        </div>
      </div>
    </StoryCard>
  );
}

function CE2_3() {
  return (
    <StoryCard id="s2-ce-3" className="bg-black">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#050505,#111)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14 gap-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BarChart size={18} color="#fff" />
            <p className="text-white font-bold" style={{ fontSize: 15 }}>Corretoras de Valores — CVM/BACEN</p>
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            {["Demonstrações financeiras auditadas", "Relatórios regulatórios (COSIF)", "Suporte CVM e Banco Central", "Indicadores regulatórios e IFRS/CPCs"].map(t => <CheckItem key={t} text={t} color="rgba(255,255,255,0.65)" />)}
          </div>
        </div>
        <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.1)" }} />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <PieChart size={18} color="#fff" />
            <p className="text-white font-bold" style={{ fontSize: 15 }}>Gestoras de Recursos — Asset Management</p>
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            {["Controle de receitas e gestão de performance", "Estruturação fiscal dos sócios", "Registro e conformidade CVM", "Fluxo vinculado à performance"].map(t => <CheckItem key={t} text={t} color="rgba(255,255,255,0.65)" />)}
          </div>
        </div>
      </div>
    </StoryCard>
  );
}

function CE2_4() {
  return (
    <StoryCard id="s2-ce-4" className="bg-black">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#000,#0d0d0d)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14 gap-4">
        {[
          { icon: ClipboardCheck, title: "Administradoras de Fundos", sub: "Escrituração e Auditoria", items: ["Escrituração de fundos", "Auditoria de ativos", "Envio CVM", "Integração Controlador/Adm"] },
          { icon: Landmark, title: "Bancos Múltiplos", sub: "Plano COSIF", items: ["Contabilidade COSIF", "Obrigações BACEN", "IFRS 9 e Basileia", "Governança bancária"] },
          { icon: ShieldCheck, title: "Corretoras de Seguros", sub: "Reguladas SUSEP", items: ["Contabilidade SUSEP", "Provisões técnicas", "Processos automatizados"] },
        ].map((s, i) => (
          <div key={s.title}>
            {i > 0 && <div className="h-px w-full mb-4" style={{ background: "rgba(255,255,255,0.08)" }} />}
            <div className="flex items-center gap-2 mb-1">
              <s.icon size={16} color="#fff" />
              <p className="text-white font-bold" style={{ fontSize: 13 }}>{s.title}</p>
            </div>
            <p className="text-[10px] tracking-wider uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>{s.sub}</p>
            <div className="flex flex-col gap-1">
              {s.items.map(t => <CheckItem key={t} text={t} color="rgba(255,255,255,0.55)" />)}
            </div>
          </div>
        ))}
      </div>
    </StoryCard>
  );
}

function CE2_5() {
  const modules = [
    { title: "BPO Contábil", items: ["Balancetes e Balanços", "DRE mensal", "IRPJ/CSLL", "ECD/ECF"] },
    { title: "BPO Fiscal", items: ["Escrituração fiscal", "ICMS, ISS, PIS, COFINS", "SPED e obrigações acessórias"] },
    { title: "BPO Folha", items: ["Admissões e Rescisões", "eSocial e CAGED", "Benefícios e Encargos"] },
  ];
  return (
    <StoryCard id="s2-ce-5" className="bg-black">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#050505,#111)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>BPO Corporativo</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 24 }}>
          Módulos disponíveis
        </h2>
        <div className="flex flex-col gap-4">
          {modules.map(m => (
            <div key={m.title} className="rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-white font-bold mb-2" style={{ fontSize: 13 }}>{m.title}</p>
              <div className="flex flex-col gap-1">
                {m.items.map(t => <CheckItem key={t} text={t} color="rgba(255,255,255,0.5)" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function CE2_6() {
  return (
    <StoryCard id="s2-ce-6" className="bg-black">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#000,#0a0a0a)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-7 text-center pb-14">
        <div className="rounded-full flex items-center justify-center mb-5" style={{ width: 68, height: 68, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <Award size={32} color="#fff" />
        </div>
        <Tag>Fale Conosco</Tag>
        <h2 className="text-white font-bold mt-3 leading-tight" style={{ fontSize: 26 }}>
          Seu parceiro estratégico no mercado financeiro
        </h2>
        <p className="mt-3 leading-snug" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
          Expertise técnica, inteligência de dados e tecnologia avançada para quem não pode errar.
        </p>
        <div className="mt-7 rounded-full px-7 py-3 font-bold" style={{ background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.25)", fontSize: 15, color: "#fff" }}>
          (15) 3010-0009
        </div>
      </div>
    </StoryCard>
  );
}

// ─── SOLUÇÕES TECNOLÓGICAS ────────────────────────────────────────────────────

function ST2_1() {
  return (
    <StoryCard id="s2-st-1">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#7a2d00,#f97316)" }} />
      <BgImage src="/solucoes-tecnologicas.jpg" opacity={0.18} />
      <Overlay gradient="linear-gradient(145deg,rgba(122,45,0,0.88),rgba(249,115,22,0.78))" />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-end h-full px-7 pb-16 pt-28">
        <Tag>Soluções Tecnológicas</Tag>
        <h1 className="text-white font-bold mt-2 leading-tight" style={{ fontSize: 30 }}>
          Sites Profissionais e IA para o seu WhatsApp
        </h1>
        <p className="mt-3 leading-snug" style={{ fontSize: 13, color: "rgba(255,255,255,0.82)" }}>
          Especialistas em sites modernos e agentes inteligentes para atender, qualificar e vender 24h por dia.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          {["Design moderno e responsivo", "Entrega em até 7 dias úteis", "Atendimento automatizado 24h"].map(t => (
            <div key={t} className="flex items-center gap-2">
              <Check size={12} color="#fdb07a" />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function ST2_2() {
  const features = [
    { icon: Globe, text: "Design moderno e responsivo", sub: "Mobile + desktop em todos os dispositivos" },
    { icon: Check, text: "Domínio .com e .com.br", sub: "Incluso no plano, sem custo extra" },
    { icon: MessageSquare, text: "Botão de WhatsApp integrado", sub: "CTA estratégico para gerar contatos" },
    { icon: Zap, text: "Entrega em até 7 dias úteis", sub: "Rápido, sem burocracia" },
    { icon: Smartphone, text: "Assistente no site 24h", sub: "Atendimento automatizado sempre disponível" },
  ];
  return (
    <StoryCard id="s2-st-2">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#7a2d00,#c25d0a)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Sites Profissionais</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 24 }}>
          Transforme visitantes em clientes
        </h2>
        <div className="flex flex-col gap-4">
          {features.map(f => <IconItem key={f.text} {...f} />)}
        </div>
      </div>
    </StoryCard>
  );
}

function ST2_3() {
  const features = [
    { icon: Cpu, text: "Treinado com o seu negócio", sub: "Conhece seus produtos, serviços e preços" },
    { icon: MessageCircle, text: "Conversa natural e humanizada", sub: "Não é chatbot simples — é IA avançada" },
    { icon: UserCheck, text: "Qualifica e direciona leads", sub: "Filtra e encaminha para o time certo" },
    { icon: Zap, text: "Atendimento imediato", sub: "Zero fila de espera, resposta instantânea" },
    { icon: Lock, text: "Disponível 24h, 7 dias/semana", sub: "Seu negócio nunca fecha" },
  ];
  return (
    <StoryCard id="s2-st-3">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#6b2800,#b84e00)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Assistente IA — WhatsApp</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 24 }}>
          Muito além de um robô
        </h2>
        <div className="flex flex-col gap-4">
          {features.map(f => <IconItem key={f.text} {...f} />)}
        </div>
      </div>
    </StoryCard>
  );
}

function ST2_4() {
  const before = ["Clientes perdidos por demora", "Fila de mensagens acumulando", "Horas gastas em respostas repetidas", "Oportunidades de venda que escapam"];
  const after = ["Nunca mais perder um cliente", "Atendimento imediato, sem espera", "Menos trabalho manual", "Mais chances reais de fechar vendas"];
  return (
    <StoryCard id="s2-st-4">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#5a2000,#9c3d00)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-6 pt-24 pb-14">
        <Tag>Antes e Depois da IA</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 22 }}>
          O que muda com o Assistente IA
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl p-3" style={{ background: "rgba(248,113,113,0.12)", border: "1px solid rgba(248,113,113,0.25)" }}>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: "#f87171" }}>Antes</p>
            <div className="flex flex-col gap-2">
              {before.map(t => (
                <div key={t} className="flex items-start gap-1">
                  <span style={{ color: "#f87171", fontSize: 12 }}>✕</span>
                  <span className="text-[11px] leading-tight text-white/70">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-3" style={{ background: "rgba(253,176,122,0.12)", border: "1px solid rgba(253,176,122,0.25)" }}>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: "#fdb07a" }}>Depois</p>
            <div className="flex flex-col gap-2">
              {after.map(t => (
                <div key={t} className="flex items-start gap-1">
                  <span style={{ color: "#fdb07a", fontSize: 12 }}>✓</span>
                  <span className="text-[11px] leading-tight text-white/70">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StoryCard>
  );
}

function ST2_5() {
  return (
    <StoryCard id="s2-st-5">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#7a2d00,#c25d0a)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-20 pb-14">
        <Tag>Plano</Tag>
        <div className="mt-2 mb-1">
          <span className="text-white font-extrabold" style={{ fontSize: 28 }}>SOMENTE SITE</span>
        </div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-extrabold" style={{ fontSize: 34, color: "#fdb07a" }}>R$ 1.497</span>
          <span className="text-white/60 text-[13px]">pagamento único</span>
        </div>
        <p className="text-[12px] mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>+ Manutenção: R$ 149,00/mês</p>
        <div className="flex flex-col gap-2">
          {[
            "Site moderno e responsivo",
            "Domínio .com e .com.br incluso",
            "Botão de WhatsApp integrado",
            "Assistente no site 24h",
            "Entrega em até 7 dias úteis",
            "Otimizado para Google (SEO básico)",
          ].map(t => <CheckItem key={t} text={t} color="#fdb07a" />)}
        </div>
      </div>
    </StoryCard>
  );
}

function ST2_6() {
  return (
    <StoryCard id="s2-st-6">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#5a2000,#9c3d00)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-20 pb-14">
        <div className="mb-3 self-start rounded-full px-3 py-1 font-bold text-[10px] tracking-widest" style={{ background: "rgba(253,176,122,0.25)", color: "#fdb07a", border: "1px solid rgba(253,176,122,0.4)" }}>MAIS COMPLETO</div>
        <Tag>Plano</Tag>
        <div className="mt-1 mb-1">
          <span className="text-white font-extrabold" style={{ fontSize: 24 }}>SITE + IA WHATSAPP</span>
        </div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="font-extrabold" style={{ fontSize: 32, color: "#fdb07a" }}>R$ 2.097</span>
          <span className="text-white/60 text-[13px]">pagamento único</span>
        </div>
        <p className="text-[12px] mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>+ Manutenção: R$ 199,00/mês</p>
        <p className="text-white/60 text-[11px] uppercase tracking-wider mb-2">Tudo do Plano Site, mais:</p>
        <div className="flex flex-col gap-2">
          {[
            "Assistente inteligente para WhatsApp",
            "Treinado com seus produtos e serviços",
            "Conversa natural e linguagem humanizada",
            "Qualificação e direcionamento de leads",
            "Atendimento 24h sem intervenção manual",
          ].map(t => <CheckItem key={t} text={t} color="#fdb07a" />)}
        </div>
      </div>
    </StoryCard>
  );
}

function ST2_7() {
  return (
    <StoryCard id="s2-st-7">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#4a1a00,#7a2d00)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-7 text-center pb-14">
        <div className="rounded-full flex items-center justify-center mb-5" style={{ width: 68, height: 68, background: "rgba(253,176,122,0.15)" }}>
          <Cpu size={32} color="#fdb07a" />
        </div>
        <Tag>Fale Conosco</Tag>
        <h2 className="text-white font-bold mt-3 leading-tight" style={{ fontSize: 26 }}>
          Tecnologia que trabalha por você
        </h2>
        <p className="mt-3 leading-snug" style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
          Site moderno + atendimento inteligente = seu negócio operando 24 horas por dia.
        </p>
        <div className="mt-7 rounded-full px-7 py-3 font-bold" style={{ background: "#f97316", fontSize: 15, color: "#fff" }}>
          (15) 3010-0009
        </div>
        <p className="mt-2 text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>comercial@4uconnect.com.br</p>
      </div>
    </StoryCard>
  );
}

// ─── QUEM SOMOS ───────────────────────────────────────────────────────────────

function QS2_1() {
  return (
    <StoryCard id="s2-qs-1">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#060e20,#172a55)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Quem Somos</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 26 }}>
          Contabilidade & Tecnologia
        </h2>
        <p className="leading-relaxed mb-5" style={{ fontSize: 13, color: "rgba(255,255,255,0.78)" }}>
          A 4U Connect é uma empresa de Contabilidade e Tecnologia, especializada no atendimento a empresas prestadoras de serviço e do mercado financeiro.
        </p>
        <p className="leading-relaxed" style={{ fontSize: 13, color: "rgba(255,255,255,0.78)" }}>
          Atuamos de forma integrada nas áreas contábil, fiscal, trabalhista e financeira, com foco em visão estratégica e modernização de processos para empresas em crescimento.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Contabilidade Digital", "BPO Financeiro", "Mercado Financeiro", "Soluções Tecnológicas"].map(t => (
            <span key={t} className="rounded-full px-3 py-1 text-[11px] font-medium text-white/80" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>{t}</span>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

function QS2_2() {
  return (
    <StoryCard id="s2-qs-2">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#0a1530,#172a55)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Diretoria</Tag>
        <h2 className="text-white font-bold mt-2 mb-7 leading-tight" style={{ fontSize: 24 }}>Antônio Dias</h2>
        <div className="flex items-start gap-4 mb-5">
          <img src="/antonio-neno.jpeg" alt="Antônio Dias" className="rounded-2xl object-cover flex-shrink-0" style={{ width: 90, height: 110, border: "2px solid rgba(255,255,255,0.2)", objectPosition: "top center" }} />
          <div>
            <p className="text-white font-bold" style={{ fontSize: 15 }}>Antônio Dias</p>
            <p className="text-[11px] tracking-wide uppercase mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Sócio-Diretor</p>
            <p className="leading-snug" style={{ fontSize: 12, color: "rgba(255,255,255,0.72)" }}>
              Ampla experiência no atendimento a empresas do mercado financeiro, com atuação em processos de M&A, estruturação societária e compliance rigoroso.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {["Experiência com companhias do G20 da XP", "Atendimento às Bests da BTG Pactual", "Especialista em M&A e compliance"].map(t => <CheckItem key={t} text={t} color="#6ea8fe" />)}
        </div>
        <div className="mt-5 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <p className="italic text-[12px]" style={{ color: "rgba(255,255,255,0.65)" }}>
            "Transformando a contabilidade em um pilar estratégico de alta performance."
          </p>
        </div>
      </div>
    </StoryCard>
  );
}

function QS2_3() {
  return (
    <StoryCard id="s2-qs-3">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#060e20,#1a3060)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Diretoria</Tag>
        <h2 className="text-white font-bold mt-2 mb-7 leading-tight" style={{ fontSize: 24 }}>Fernando Alves</h2>
        <div className="flex items-start gap-4 mb-5">
          <img src="/antonio.jpg" alt="Fernando Alves" className="rounded-2xl object-cover flex-shrink-0" style={{ width: 90, height: 110, border: "2px solid rgba(255,255,255,0.2)" }} />
          <div>
            <p className="text-white font-bold" style={{ fontSize: 15 }}>Fernando Alves</p>
            <p className="text-[11px] tracking-wide uppercase mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Sócio-Diretor</p>
            <p className="leading-snug" style={{ fontSize: 12, color: "rgba(255,255,255,0.72)" }}>
              Sólida experiência em outsourcing, compliance, governança e estruturação de operações. Especialista nos setores de Serviços e Indústria.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {["Modernização de processos contábeis", "Especialista em visão estratégica", "Otimização fiscal para empresas"].map(t => <CheckItem key={t} text={t} color="#6ea8fe" />)}
        </div>
        <div className="mt-5 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <p className="italic text-[12px]" style={{ color: "rgba(255,255,255,0.65)" }}>
            "Elevando a contabilidade a um papel estratégico nos negócios."
          </p>
        </div>
      </div>
    </StoryCard>
  );
}

function QS2_4() {
  return (
    <StoryCard id="s2-qs-4">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#060e20,#172a55)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Missão & Visão</Tag>
        <div className="flex flex-col gap-5 mt-4">
          <div className="rounded-2xl px-5 py-5" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(110,168,254,0.2)" }}>
            <p className="font-bold text-[11px] uppercase tracking-widest mb-2" style={{ color: "#6ea8fe" }}>MISSÃO</p>
            <p className="leading-relaxed" style={{ fontSize: 13, color: "rgba(255,255,255,0.82)" }}>
              Conectar empresas a soluções contábeis e financeiras digitais, inovadoras e acessíveis, promovendo eficiência, precisão, segurança e crescimento sustentável.
            </p>
          </div>
          <div className="rounded-2xl px-5 py-5" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(110,168,254,0.2)" }}>
            <p className="font-bold text-[11px] uppercase tracking-widest mb-2" style={{ color: "#6ea8fe" }}>VISÃO</p>
            <p className="leading-relaxed" style={{ fontSize: 13, color: "rgba(255,255,255,0.82)" }}>
              Ser referência em contabilidade estratégica e inteligência financeira, simplificando a gestão e impulsionando empresas por meio de soluções seguras e tecnológicas.
            </p>
          </div>
        </div>
      </div>
    </StoryCard>
  );
}

function QS2_5() {
  const values = [
    { icon: Star, text: "Excelência", desc: "Padrão de alta performance em tudo que fazemos" },
    { icon: Heart, text: "Integridade", desc: "Transparência e ética em todas as relações" },
    { icon: Zap, text: "Inovação", desc: "Tecnologia e processos em constante evolução" },
    { icon: Lock, text: "Segurança", desc: "Conformidade e proteção total dos seus dados" },
    { icon: TrendingUp, text: "Crescimento Contínuo", desc: "Aprendizado e evolução permanentes" },
    { icon: Leaf, text: "Responsabilidade Social", desc: "Impacto positivo na sociedade" },
  ];
  return (
    <StoryCard id="s2-qs-5">
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg,#060e20,#172a55)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col justify-center h-full px-7 pt-24 pb-14">
        <Tag>Nossos Valores</Tag>
        <h2 className="text-white font-bold mt-2 mb-5 leading-tight" style={{ fontSize: 26 }}>
          O que nos guia todos os dias
        </h2>
        <div className="flex flex-col gap-3">
          {values.map(v => (
            <div key={v.text} className="flex items-start gap-3">
              <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: 30, height: 30, background: "rgba(110,168,254,0.15)" }}>
                <v.icon size={14} color="#6ea8fe" />
              </div>
              <div>
                <p className="text-white font-semibold" style={{ fontSize: 13 }}>{v.text}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StoryCard>
  );
}

// ─── CONTATOS ─────────────────────────────────────────────────────────────────

function CT2_1() {
  return (
    <StoryCard id="s2-ct-1">
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#0f2e06,#2a6015)" }} />
      <Logo />
      <Footer />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-7 text-center pb-14 gap-4">
        <img src="/logo-branca.png" alt="4U Connect" style={{ width: 130 }} />
        <div>
          <Tag>Fale Conosco</Tag>
          <h2 className="text-white font-bold mt-1 leading-tight" style={{ fontSize: 24 }}>
            Estamos prontos para te atender
          </h2>
        </div>
        <div className="flex flex-col gap-2.5 w-full">
          <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.14)" }}>
            <Phone size={16} color="#7ed45a" />
            <div className="text-left">
              <p className="text-white font-bold" style={{ fontSize: 14 }}>(15) 3010-0009</p>
              <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>WhatsApp e Ligações</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.08)" }}>
            <MessageSquare size={15} color="rgba(255,255,255,0.6)" />
            <p className="text-[12px] text-white/75">comercial@4uconnect.com.br</p>
          </div>
          <div className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.08)" }}>
            <MapPin size={15} color="rgba(255,255,255,0.6)" className="flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <p className="text-white/80 font-semibold text-[12px]">Barueri — Alphaville</p>
              <p className="text-[11px] text-white/55">Al. Mamoré, 687 – 3º Andar, Sala 304</p>
              <p className="text-[11px] text-white/55">Edifício Amazônia, Barueri/SP</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.08)" }}>
            <MapPin size={15} color="rgba(255,255,255,0.6)" className="flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <p className="text-white/80 font-semibold text-[12px]">Sorocaba</p>
              <p className="text-[11px] text-white/55">Rua Fernando Silva, 190 – 3º Andar, Sala 308</p>
              <p className="text-[11px] text-white/55">Jardim Astro, Sorocaba/SP</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl px-4 py-2.5" style={{ background: "rgba(255,255,255,0.08)" }}>
            <Instagram size={15} color="rgba(255,255,255,0.6)" />
            <p className="text-[12px] text-white/75">@4u.connect</p>
          </div>
        </div>
      </div>
    </StoryCard>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Stories2() {
  return (
    <div className="min-h-screen font-poppins" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1400px] mx-auto px-8 py-10">
        <div className="mb-8">
          <img src="/logo-branca.png" alt="4U Connect" style={{ width: 140 }} />
          <h1 className="text-white font-bold mt-4 text-3xl">Instagram Stories — Versão Completa</h1>
          <p className="text-white/50 mt-1 text-sm">
            {[
              "CD (9)", "IF (8)", "CE (6)", "ST (7)", "QS (5)", "CT (1)"
            ].join(" · ")} — Total: 36 cards
          </p>
          <p className="text-white/40 mt-2 text-xs">
            Para salvar: F12 → Inspecionar elemento → clique direito no div → "Capturar screenshot do nó"
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, 390px)" }}>

          <SectionLabel color="#4a9429">Contabilidade Digital — 9 cards</SectionLabel>
          <CD2_1 /><CD2_2 /><CD2_3 /><CD2_4 />
          <CD2_5 /><CD2_6 /><CD2_7 /><CD2_8 /><CD2_9 />

          <SectionLabel color="#3a6abf">Inteligência Financeira — 8 cards</SectionLabel>
          <IF2_1 /><IF2_2 /><IF2_3 /><IF2_4 />
          <IF2_5 /><IF2_6 /><IF2_7 /><IF2_8 />

          <SectionLabel color="#888">Contabilidade Especializada — 6 cards</SectionLabel>
          <CE2_1 /><CE2_2 /><CE2_3 /><CE2_4 /><CE2_5 /><CE2_6 />

          <SectionLabel color="#f97316">Soluções Tecnológicas — 7 cards</SectionLabel>
          <ST2_1 /><ST2_2 /><ST2_3 /><ST2_4 /><ST2_5 /><ST2_6 /><ST2_7 />

          <SectionLabel color="#3a6abf">Quem Somos — 5 cards</SectionLabel>
          <QS2_1 /><QS2_2 /><QS2_3 /><QS2_4 /><QS2_5 />

          <SectionLabel color="#4a9429">Contatos — 1 card</SectionLabel>
          <CT2_1 />

        </div>
      </div>
    </div>
  );
}
