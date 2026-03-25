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
  Package,
  Sparkles,
  Zap,
  Cpu,
  Lock,
  TrendingUp,
  Rocket,
  Activity,
  Smartphone,
  Building2,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import {
  Briefcase, MessageCircle,
  HelpCircle,
  CalendarDays,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import ServiceDrawers from "@/components/ServiceDrawers";
import PartnersSection from "@/components/PartnersSection";

const ContabilidadeDigital = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero Fullscreen */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-4u-green">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contabilidade-digital.jpg"
            alt="Contabilidade Digital Banner"
            className="w-full h-full object-cover brightness-[0.8] contrast-[1.1] saturate-[1.2] hue-rotate-[15deg]"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-br from-4u-green/90 via-4u-green/20 to-black/95 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in tracking-tight">
            Contabilidade Digital para <span className="block mt-2 text-white/90">Prestadores de serviço</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            Contabilidade digital pensada para prestadores de serviços que buscam praticidade, controle e conformidade fiscal e atendimento humanizado.
          </p>

          {/* Botões CTA - Hierarquia Visual */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in px-4"
            style={{ animationDelay: "400ms" }}
          >
            {/* Primary CTA */}
            <a
              href="#planos"
              className="group w-[320px] sm:w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-white text-4u-green shadow-2xl shadow-white/30 border-2 border-white hover:shadow-white/50 hover:-translate-y-1 active:scale-95 relative overflow-hidden"
            >
              <Briefcase className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span className="relative z-10">
                Ver Planos
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-4u-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#servicos"
              className="group w-[320px] sm:w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 active:scale-95 backdrop-blur-sm relative overflow-hidden"
            >
              <Building2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span className="relative z-10">
                Ver Serviços
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 bg-4u-green/5 text-4u-green text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-green">
              Vantagens Exclusivas
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-4 tracking-tight">
              Nossos Diferenciais
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Tudo que você precisa para ter controle total do seu negócio com agilidade digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
            {[
              { icon: Zap, title: "Rapidez no atendimento", color: "from-amber-500 to-orange-500" },
              { icon: Cpu, title: "Aplicativo de gestão empresarial", color: "from-blue-500 to-cyan-500" },
              { icon: FileCheck, title: "Emissão de notas fiscais", color: "from-green-500 to-emerald-500" },
              { icon: TrendingUp, title: "Orientação sobre impostos", color: "from-4u-navy to-4u-navy-light" },
              { icon: Activity, title: "Análise mensal do faturamento", color: "from-pink-500 to-rose-500" },
              { icon: ShieldCheck, title: "Supervisão de certidões", color: "from-indigo-500 to-purple-500" },
              { icon: Users, title: "Análise do pró-labore dos sócios", color: "from-teal-500 to-cyan-500" },
              { icon: Sparkles, title: "Suporte especializado", color: "from-4u-green to-emerald-500" },
              { icon: Rocket, title: "Otimização tributária", color: "from-violet-500 to-purple-500" },
              { icon: Lock, title: "Conta PJ digital", color: "from-slate-600 to-slate-800" }
            ].map((diferencial, index) => {
              const IconComponent = diferencial.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-none bg-background border-2 border-border/50 hover:shadow-2xl hover:shadow-4u-green/20 hover:border-4u-green/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 w-2 h-0 bg-4u-green group-hover:h-full transition-all duration-500" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-4u-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Icon with gradient and 3D effect */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${diferencial.color} rounded-none p-3 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/10`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <p className="font-bold text-4u-black group-hover:text-4u-green transition-colors duration-300">{diferencial.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 bg-4u-green/5 text-4u-green text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-green">
              Passo a Passo
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-4 tracking-tight">
              Jornada do Cliente
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Do sonho à realização: 4 etapas estratégicas para o seu sucesso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Etapa 1 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 -ml-4 -mt-4 w-20 h-20 rounded-none bg-gradient-to-br from-4u-green to-emerald-600 flex items-center justify-center shadow-lg shadow-4u-green/20 group-hover:scale-110 transition-all duration-500">
                <span className="text-5xl font-bold text-white">1</span>
              </div>
              <div className="p-8 pt-16 rounded-none bg-muted/30 border-2 border-border/50 hover:shadow-2xl hover:shadow-4u-green/10 hover:border-4u-green/30 hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-4u-green group-hover:h-full transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-4u-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-4u-black mb-4 group-hover:text-4u-green transition-colors duration-300">Definição do Negócio</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Definição do modelo de negócio</li>
                    <li>• Consultoria inicial</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 -ml-4 -mt-4 w-20 h-20 rounded-none bg-gradient-to-br from-4u-green to-emerald-600 flex items-center justify-center shadow-lg shadow-4u-green/20 group-hover:scale-110 transition-all duration-500">
                <span className="text-5xl font-bold text-white">2</span>
              </div>
              <div className="p-8 pt-16 rounded-none bg-muted/30 border-2 border-border/50 hover:shadow-2xl hover:shadow-4u-green/10 hover:border-4u-green/30 hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-4u-green group-hover:h-full transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-4u-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-4u-black mb-4 group-hover:text-4u-green transition-colors duration-300">Documentação</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Criação e análise de documentos</li>
                    <li>• Assinatura digital</li>
                    <li>• Envio para Junta Comercial</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 -ml-4 -mt-4 w-20 h-20 rounded-none bg-gradient-to-br from-4u-green to-emerald-600 flex items-center justify-center shadow-lg shadow-4u-green/20 group-hover:scale-110 transition-all duration-500">
                <span className="text-5xl font-bold text-white">3</span>
              </div>
              <div className="p-8 pt-16 rounded-none bg-muted/30 border-2 border-border/50 hover:shadow-2xl hover:shadow-4u-green/10 hover:border-4u-green/30 hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-4u-green group-hover:h-full transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-4u-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-4u-black mb-4 group-hover:text-4u-green transition-colors duration-300">Aprovação</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Empresa aprovada</li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-4u-green" size={20} />
                      <strong className="text-4u-green">CNPJ ativo</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Etapa 4 - Featured */}
            <div className="group relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
              <div className="absolute top-0 left-0 -ml-4 -mt-4 w-20 h-20 rounded-none bg-gradient-to-br from-4u-green to-emerald-600 flex items-center justify-center shadow-xl shadow-4u-green/40 group-hover:scale-110 transition-all duration-500">
                <span className="text-5xl font-bold text-white">4</span>
              </div>
              <div className="p-8 pt-16 rounded-none bg-gradient-to-br from-4u-green/10 via-4u-green/5 to-transparent border-2 border-4u-green hover:shadow-2xl hover:shadow-4u-green/20 hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-4u-green" />
                <div className="absolute inset-0 bg-gradient-to-br from-4u-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-4u-green mb-4">Empresa Pronta!</h3>
                  <ul className="space-y-2 text-4u-black font-medium">
                    <li>• Conta digital gratuita</li>
                    <li>• Certificado digital gratuito</li>
                    <li>• Emissão de NF e boletos</li>
                    <li>• Gestão pós-abertura</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicativo 4U Connect Section */}
      <section className="py-32 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div className="scroll-reveal opacity-0 translate-x-[-2rem] transition-all duration-700">
                <span className="inline-block px-4 py-1.5 bg-4u-green/5 text-4u-green text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-green">
                  Tecnologia Móvel
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-6 tracking-tight">
                  Aplicativo 4U Connect
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A 4U Connect oferece um <strong>aplicativo exclusivo</strong>, onde o cliente tem o{" "}
                  <strong className="text-4u-green">controle da empresa na palma da mão</strong>, tornando a contabilidade:
                </p>
                <ul className="space-y-4">
                  {[
                    "Mais fácil",
                    "Mais rápida",
                    "Mais eficiente"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-none bg-4u-green flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-white" size={20} />
                      </div>
                      <span className="text-xl font-bold text-4u-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Imagem do App */}
              <div className="relative scroll-reveal opacity-0 translate-x-[2rem] transition-all duration-700">
                <div className="relative z-10 animate-float">
                  <img
                    src="/app.png"
                    alt="Aplicativo 4U Connect"
                    className="w-full max-w-[400px] mx-auto drop-shadow-[0_35px_35px_rgba(34,197,94,0.15)]"
                  />
                </div>
                {/* Decorative glow behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-4u-green/20 rounded-full blur-[100px] z-0" />
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Serviços Section */}
      <section id="servicos" className="py-24 bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 bg-4u-navy/5 text-4u-navy text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-navy">
              O QUE FAZEMOS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-6 tracking-tight">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12">
              Soluções inteligentes e consultoria especializada para o sucesso do seu negócio
            </p>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
            <ServiceDrawers />
          </div>
        </div>
      </section >

      <PartnersSection />

      <section id="planos" className="py-32 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 bg-4u-green/5 text-4u-green text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-green">
              Planos & Preços
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-4 tracking-tight">
              Escolha seu plano
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Todos os planos incluem abertura gratuita e acesso total ao App 4U Connect.
            </p>
          </div>

          {/* Benefícios Inclusos */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Abertura gratuita da empresa",
                "App 4U Connect",
                "Regularização para emissão de NF",
                "Certificado digital gratuito",
                "Conta em banco digital em 24h",
                "Relatórios contábeis anuais",
                "Gestão de documentos",
                "Atendimento via chat/email/WhatsApp",
                "Consultoria e planejamento tributário"
              ].map((beneficio, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-none bg-background border border-border/50">
                  <CheckCircle2 className="text-4u-green flex-shrink-0" size={20} />
                  <span className="text-sm text-muted-foreground">{beneficio}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch justify-center max-w-7xl mx-auto scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
            <PricingCard
              name="SMALL"
              price="R$ 259,00"
              features={[
                { text: "Até 5 notas fiscais/mês", icon: CheckCircle2 },
                { text: "Pró-labore até 2 sócios", icon: UserCheck },
                { text: "Faturamento até R$ 250k/ano", icon: BarChart },
                { text: "Folha de pagamento à parte", icon: Settings },
                { text: "Todos os benefícios inclusos", icon: CheckCircle2 },
              ]}
              delay={0}
              variant="green"
            />
            <PricingCard
              name="SMART"
              price="R$ 389,00"
              featured={true}
              features={[
                { text: "Tudo do Plano SMALL", icon: CheckCircle2 },
                { text: "Até 10 notas fiscais/mês", icon: CheckCircle2 },
                { text: "Pró-labore até 3 sócios", icon: UserCheck },
                { text: "Relatórios contábeis trimestrais", icon: BarChart },
                { text: "Entrega de CNDs", icon: ShieldCheck },
                { text: "Faturamento até R$ 720k/ano", icon: BarChart },
                { text: "Folha de pagamento à parte", icon: Settings },
              ]}
              delay={100}
              variant="green"
            />
            <PricingCard
              name="PREMIUM"
              price="R$ 699,00"
              features={[
                { text: "Tudo do Plano SMART", icon: CheckCircle2 },
                { text: "Até 20 notas fiscais/mês", icon: CheckCircle2 },
                { text: "Pró-labore até 4 sócios", icon: UserCheck },
                { text: "Relatórios contábeis mensais", icon: BarChart },
                { text: "Pesquisa de situação fiscal", icon: FileCheck },
                { text: "Folha até 5 funcionários", icon: Users },
                { text: "Faturamento até R$ 1.8M/ano", icon: BarChart },
              ]}
              delay={200}
              variant="green"
            />
          </div>
        </div>
      </section >

      {/* CTA Final */}
      <section id="contato" className="py-24 bg-4u-green text-white relative overflow-hidden group mb-12 border-y-2 border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-4u-black/10 rounded-none -mr-48 -mt-48 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-none -ml-48 -mb-48 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 opacity-0 animate-fade-in tracking-tight">
            Agilidade Digital para sua Empresa
          </h2>
          <p className="text-lg text-white/90 mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Abandone a burocracia e tenha o controle total do seu negócio na palma da mão.
            A <span className="text-4u-black font-bold">4U Connect</span> une tecnologia e consultoria para acelerar seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a
              href="https://wa.me/551530100009?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20contabilidade%20digital%20da%204U%20Connect."
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-center gap-2 px-8 py-5 bg-white text-4u-green rounded-none font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95 w-full sm:w-72"
            >
              <WhatsAppIcon size={20} className="transition-transform group-hover/btn:rotate-12" />
              Falar com Especialista
            </a>
            <a
              href="https://wa.me/551530100009?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20falar%20sobre%20os%20servi%C3%A7os%20de%20contabilidade%20digital%20da%204U%20Connect."
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

      <Footer variant="green" />
    </div >
  );
};

export default ContabilidadeDigital;
