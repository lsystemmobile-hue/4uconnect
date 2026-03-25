import {
  Globe,
  Smartphone,
  MessageSquare,
  Users,
  Clock,
  CheckCircle2,
  Zap,
  Star,
  Bot,
  PhoneCall,
  TrendingUp,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const WHATSAPP_SITE =
  "https://wa.me/551530100009?text=Ol%C3%A1!%20Quero%20criar%20um%20site%20profissional%20com%20a%204U%20Connect!";
const WHATSAPP_AI =
  "https://wa.me/551530100009?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Atendimento%20Inteligente%20para%20WhatsApp!";
const WHATSAPP_GENERAL =
  "https://wa.me/551530100009?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Solu%C3%A7%C3%B5es%20Tecnol%C3%B3gicas%20da%204U%20Connect!";

const siteFeatures = [
  {
    icon: Globe,
    title: "Sites Modernos e Responsivos",
    description: "Funciona perfeitamente no celular e no computador, com design profissional e atual.",
  },
  {
    icon: CheckCircle2,
    title: "Domínio .com e .com.br",
    description: "Seu endereço profissional na internet, incluído no plano para passar mais credibilidade.",
  },
  {
    icon: WhatsAppIcon,
    title: "Botão de WhatsApp (CTA)",
    description: "Botão estratégico de WhatsApp para converter visitantes em contatos diretos.",
  },
  {
    icon: Bot,
    title: "Assistente no Site 24h",
    description: "Responde visitantes automaticamente, mesmo quando você não está disponível.",
  },
];

const siteBenefits = [
  { icon: Star, text: "Mais credibilidade para sua empresa" },
  { icon: TrendingUp, text: "Mais contatos e oportunidades" },
  { icon: Clock, text: "Seu negócio funcionando 24h" },
];

const aiFeatures = [
  {
    icon: MessageSquare,
    title: "Responde Automaticamente",
    description: "Atende clientes em tempo real, sem você precisar estar presente.",
  },
  {
    icon: Users,
    title: "Conversa de Forma Natural",
    description: "Parece humano — treinado com a linguagem e o jeito do seu negócio.",
  },
  {
    icon: Smartphone,
    title: "Treinado com Seu Negócio",
    description: "Conhece seus produtos, serviços, preços e responde com precisão.",
  },
  {
    icon: PhoneCall,
    title: "Qualifica e Direciona",
    description: "Filtra clientes e te aciona somente quando realmente necessário.",
  },
  {
    icon: Clock,
    title: "Funciona 24h por dia",
    description: "Nunca dorme, nunca falta — seu atendimento sempre ativo.",
  },
  {
    icon: Zap,
    title: "Atendimento Imediato",
    description: "Zero espera: o cliente é atendido na hora, todo dia, o ano todo.",
  },
];

const aiTransformations = [
  {
    before: "Clientes perdidos por demora no atendimento",
    after: "Nunca mais perder um cliente por tempo de resposta",
  },
  {
    before: "Fila de mensagens acumulando no WhatsApp",
    after: "Atendimento imediato, sem espera, o dia todo",
  },
  {
    before: "Horas gastas respondendo perguntas repetidas",
    after: "Menos trabalho manual — foco no que importa",
  },
  {
    before: "Oportunidades de venda que escapam por falta de resposta",
    after: "Mais chances reais de fechar vendas todos os dias",
  },
];

const SolucoesTecnologicas = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{ backgroundColor: "hsl(var(--4u-orange))" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/solucoes-tecnologicas.jpg"
            alt="Soluções Tecnológicas e Assistente IA 4U Connect"
            className="w-full h-full object-cover brightness-[0.7] saturate-[1.3]"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-1 backdrop-blur-[2px]"
          style={{
            background:
              "linear-gradient(135deg, hsl(24 95% 53% / 0.92) 0%, hsl(24 95% 40% / 0.25) 50%, hsl(0 0% 0% / 0.94) 100%)",
          }}
        />

        {/* Hero content */}
        <div className="container relative z-10 mx-auto px-4 text-center">


          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in tracking-tight leading-tight"
            style={{ animationDelay: "100ms" }}
          >
            Soluções Tecnológicas
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-2 text-white/80">
              para o seu negócio crescer
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: "250ms" }}
          >
            Especialistas em{" "}
            <span className="font-bold text-white">sites modernos</span> e{" "}
            <span className="font-bold text-white">agentes inteligentes</span> para
            atender, qualificar e vender pelo seu WhatsApp — 24h por dia.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in px-4"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href={WHATSAPP_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-[320px] sm:w-[360px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-white shadow-2xl border-2 border-white hover:shadow-white/50 hover:-translate-y-1 active:scale-95 relative overflow-hidden"
              style={{ color: "hsl(var(--4u-orange))" }}
            >
              <Globe className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span className="relative z-10">Quero um Site Profissional</span>
            </a>

            <a
              href={WHATSAPP_AI}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-[320px] sm:w-[360px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-xl active:scale-95 backdrop-blur-sm"
            >
              <WhatsAppIcon size={20} className="transition-transform group-hover:rotate-12" />
              <span className="relative z-10">Atendimento Inteligente</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CRIAÇÃO DE SITES ──────────────────────────────────── */}
      <section className="py-32 bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <span
              className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4 border-l-2"
              style={{
                backgroundColor: "hsl(var(--4u-orange) / 0.08)",
                color: "hsl(var(--4u-orange))",
                borderColor: "hsl(var(--4u-orange))",
              }}
            >
              Criação de Sites Profissionais
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-4 tracking-tight">
              Transforme visitantes em clientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Seu site trabalhando por você todos os dias — moderno, rápido e
              preparado para vender.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {siteFeatures.map((feat, i) => (
              <div
                key={i}
                className="group p-8 rounded-none bg-card border-2 border-border/50 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  ["--hover-border" as string]: "hsl(var(--4u-orange) / 0.3)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-none flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg text-white"
                  style={{ backgroundColor: "hsl(var(--4u-orange))" }}
                >
                  {feat.icon === WhatsAppIcon ? (
                    <WhatsAppIcon size={32} className="text-white" />
                  ) : (
                    <feat.icon size={32} />
                  )}
                </div>
                <h3
                  className="text-xl font-bold text-4u-black mb-3 transition-colors duration-300 group-hover:text-[hsl(var(--4u-orange))]"
                >
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits strip */}
          <div
            className="rounded-none p-8 md:p-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-700"
            style={{ backgroundColor: "hsl(var(--4u-orange) / 0.06)", border: "2px solid hsl(var(--4u-orange) / 0.2)" }}
          >
            <h3 className="text-2xl font-bold text-4u-black mb-8 text-center">
              Benefícios do Site Profissional
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {siteBenefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-4u-black">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                    style={{ backgroundColor: "hsl(var(--4u-orange))" }}
                  >
                    <b.icon size={20} />
                  </div>
                  <span className="font-semibold">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ATENDIMENTO INTELIGENTE ───────────────────────────── */}
      <section className="py-32 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <span
              className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4 border-l-2"
              style={{
                backgroundColor: "hsl(var(--4u-orange) / 0.08)",
                color: "hsl(var(--4u-orange))",
                borderColor: "hsl(var(--4u-orange))",
              }}
            >
              Atendimento Inteligente para WhatsApp
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-4 tracking-tight">
              Muito além de um robô:{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(var(--4u-orange)), hsl(24 95% 38%))",
                }}
              >
                um assistente inteligente
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Não é chatbot simples — é um assistente treinado com o seu negócio,
              que atende, qualifica e vende.
            </p>
          </div>

          {/* AI Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {aiFeatures.map((feat, i) => (
              <div
                key={i}
                className="group p-8 rounded-none bg-background border-2 border-border/50 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500"
                  style={{ backgroundColor: "hsl(var(--4u-orange))" }}
                />
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-none flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500 text-white"
                    style={{ backgroundColor: "hsl(var(--4u-orange))" }}
                  >
                    <feat.icon size={28} />
                  </div>
                  <h3
                    className="text-lg font-bold text-4u-black mb-2 transition-colors duration-300 group-hover:text-[hsl(var(--4u-orange))]"
                  >
                    {feat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Transformações */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-4u-black mb-2 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              A transformação que o assistente causa
            </h3>
            <p className="text-center text-muted-foreground mb-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              Veja o antes e o depois de ter um assistente inteligente no seu WhatsApp
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {aiTransformations.map((t, i) => (
                <div
                  key={i}
                  className="group rounded-none border-2 border-border/50 overflow-hidden scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Antes */}
                  <div className="flex items-start gap-3 px-6 py-4 bg-muted/40">
                    <span className="mt-0.5 text-lg leading-none text-muted-foreground">✕</span>
                    <p className="text-sm text-muted-foreground leading-snug">{t.before}</p>
                  </div>
                  {/* Divisor */}
                  <div
                    className="h-0.5 w-full"
                    style={{ backgroundColor: "hsl(var(--4u-orange) / 0.3)" }}
                  />
                  {/* Depois */}
                  <div
                    className="flex items-start gap-3 px-6 py-4"
                    style={{ backgroundColor: "hsl(var(--4u-orange) / 0.06)" }}
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "hsl(var(--4u-orange))" }}
                    />
                    <p className="text-sm font-semibold text-4u-black leading-snug">{t.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── PLANOS ──────────────────────────────────────────────── */}
      <section id="planos-tecnologia" className="py-32 bg-background border-b border-border/50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <span
              className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4 border-l-2"
              style={{
                backgroundColor: "hsl(var(--4u-orange) / 0.08)",
                color: "hsl(var(--4u-orange))",
                borderColor: "hsl(var(--4u-orange))",
              }}
            >
              Planos e Investimento
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-4 tracking-tight">
              Escolha o Plano Ideal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Soluções flexíveis para cada momento da sua empresa — do site ao atendimento inteligente completo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center max-w-6xl mx-auto">
            <PricingCard
              name="Somente Site"
              price="R$1.497,00"
              period="Pagamento Único"
              features={[
                "Site moderno e responsivo (mobile + desktop)",
                "Domínio .com e .com.br incluído",
                "Botão de WhatsApp (CTA) integrado",
                "Assistente no Site 24h",
                "Entrega em até 7 dias úteis",
                "Manutenção mensal: R$ 149,00/mês",
              ]}
              variant="orange"
              delay={0}
            />
            <PricingCard
              name="Plano Completo"
              price="R$2.097,00"
              period="Pagamento Único"
              featured={true}
              features={[
                "Tudo do Plano Somente Site",
                "Assistente inteligente avançado para WhatsApp",
                "Treinado com seus produtos e serviços",
                "Conversa natural — linguagem humanizada",
                "Qualificação e direcionamento de leads",
                "Atendimento 24h sem intervenção manual",
                "Manutenção mensal: R$ 199,00/mês",
              ]}
              variant="orange"
              delay={100}
            />
            <PricingCard
              name="Somente Assistente IA"
              price="Sob Consulta"
              period=""
              features={[
                "Assistente inteligente para WhatsApp",
                "Treinado com seus produtos e serviços",
                "Conversa natural, linguagem humanizada",
                "Qualificação e direcionamento de clientes",
                "Funciona 24h por dia, 7 dias por semana",
                "Manutenção mensal: R$ 150,00/mês",
              ]}
              variant="orange"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* ── RESULTADO FINAL ──────────────────────────────────── */}
      <section
        className="py-24 text-white relative overflow-hidden group mb-12 border-y-2 border-white/10"
        style={{ backgroundColor: "hsl(var(--4u-orange))" }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150 rounded-full bg-black/10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150 rounded-full bg-white/10" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            Tecnologia que trabalha por você
          </h2>
          <p className="text-lg text-white/90 mb-12 leading-relaxed">
            Site moderno + atendimento inteligente = seu negócio operando 24h, gerando
            contatos e vendas enquanto você foca no que importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-8 py-5 bg-white rounded-none font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95"
              style={{ color: "hsl(var(--4u-orange))" }}
            >
              <Zap size={20} className="transition-transform group-hover/btn:rotate-12" />
              Quero Soluções Tecnológicas
            </a>
            <a
              href={WHATSAPP_AI}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-8 py-5 bg-white/10 text-white border-2 border-white/20 rounded-none font-bold transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              <WhatsAppIcon size={20} className="transition-transform group-hover/btn:scale-110" />
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      <Footer variant="orange" />
    </div>
  );
};

export default SolucoesTecnologicas;
