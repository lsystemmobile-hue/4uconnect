import { Helmet } from "react-helmet-async";
import {
    MapPin,
    Globe,
    Instagram,
    MessageCircle,
    CheckCircle2,
    Users,
    Linkedin,
    Target,
    ShieldCheck,
    Zap,
    Heart,
    Lock,
    Award,
    TrendingUp,
    Mail,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useSearchParams } from "react-router-dom";

const QuemSomos = () => {
    useScrollReveal();
    const [searchParams] = useSearchParams();
    const isLP = searchParams.get("lp") === "1";

    const whatsappNumber = "551530100009";
    const whatsappMessage = encodeURIComponent(
        "Olá! Gostaria de solicitar uma proposta personalizada da 4U Connect."
    );

    return (
        <div className="min-h-screen">
            <Helmet>
              <title>Quem Somos | 4U Connect – Contabilidade e Tecnologia</title>
              <meta name="description" content="Conheça a equipe e a história da 4U Connect, especialistas em contabilidade estratégica e inteligência financeira." />
              <meta property="og:title" content="Quem Somos | 4U Connect – Contabilidade e Tecnologia" />
              <meta property="og:description" content="Conheça a equipe e a história da 4U Connect, especialistas em contabilidade estratégica e inteligência financeira." />
              <meta property="og:url" content="https://4uconnect.com.br/quem-somos" />
            </Helmet>
            {/* Hero Fullscreen */}
            <section className="relative overflow-hidden min-h-screen flex items-center bg-4u-navy">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/quem-somos.jpg"
                        alt="Equipe 4U Connect - Consultoria e Contabilidade"
                        className="w-full h-full object-cover brightness-[0.7] contrast-[1.2] saturate-[0.8]"
                        fetchPriority="high"
                        loading="eager"
                        decoding="async"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 z-1 bg-gradient-to-br from-4u-navy/95 via-4u-navy/30 to-black/95 backdrop-blur-[2px]" />

                {/* Content */}
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in tracking-tight">
                        Quem Somos
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 opacity-0 animate-fade-in leading-relaxed"
                        style={{ animationDelay: "200ms" }}
                    >
                        Conheça a 4U Connect: inteligência, tecnologia e compromisso com o seu crescimento.
                    </p>

                    {/* Botões CTA - Hierarquia Visual */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in px-4"
                        style={{ animationDelay: "400ms" }}
                    >
                        {/* Primary CTA */}
                        <a
                            href="#sobre"
                            className="group w-[320px] sm:w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-white text-4u-navy shadow-2xl shadow-white/30 border-2 border-white hover:shadow-white/50 hover:-translate-y-1 active:scale-95 relative overflow-hidden"
                        >
                            <Users className="w-5 h-5 transition-transform group-hover:rotate-12" />
                            <span className="relative z-10">
                                Ver Nossa História
                                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-4u-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </span>
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-[320px] sm:w-[350px] px-8 py-4 rounded-none font-bold text-sm md:text-base transition-all duration-500 flex items-center justify-center gap-3 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 active:scale-95 backdrop-blur-sm relative overflow-hidden"
                        >
                            <WhatsAppIcon size={20} className="transition-transform group-hover:rotate-12" />
                            <span className="relative z-10">
                                Falar com o Time
                                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="sobre" className="py-24 bg-background overflow-hidden border-b border-border/50 scroll-mt-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="scroll-reveal opacity-0 translate-x-[-2rem] transition-all duration-700">
                            <span className="inline-block px-4 py-1.5 bg-4u-green/5 text-4u-green text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-green">
                                NOSSA ESSÊNCIA
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-8 leading-tight tracking-tight">
                                Mais do que uma contabilidade, <span className="text-4u-green">seu parceiro estratégico</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    A <span className="text-4u-navy font-bold">4U Connect</span> é uma empresa onde a <span className="text-4u-green font-bold">Contabilidade e a Tecnologia</span> convergem para <span className="text-4u-navy font-semibold italic">modernizar a gestão contábil e financeira</span> de empresas prestadoras de serviço.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-4u-green pl-6 py-2 bg-muted/30 rounded-none">
                                    Atuamos de forma integrada nas áreas contábil, fiscal, trabalhista e financeira, conectando processos e dados para apoiar a sua <span className="text-4u-navy font-bold">tomada de decisões</span> estratégicas.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Somos um <span className="text-4u-navy font-bold underline decoration-4u-green underline-offset-4">ecossistema financeiro completo</span>, focado em alta performance, controle e previsibilidade para impulsionar o crescimento sustentável do seu negócio.
                                </p>
                            </div>
                        </div>
                        <div className="relative scroll-reveal opacity-0 translate-x-[2rem] transition-all duration-700">
                            <div className="aspect-square rounded-none overflow-hidden shadow-2xl relative z-10 border-2 border-border/50">
                                <img
                                    src="/reuniao.jpg"
                                    alt="4U Connect Team Meeting"
                                    loading="lazy"
                                    className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-4u-navy/80 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-none border border-white/20">
                                        <p className="text-white font-bold text-lg mb-1">Tecnologia & Estratégia</p>
                                        <p className="text-white/70 text-sm">O futuro da contabilidade já chegou na 4U Connect.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-4u-green rounded-none -z-0 animate-pulse-slow"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-4u-navy rounded-none -z-0 opacity-20"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {/* Missão */}
                        <div className="group p-8 rounded-none bg-background border-2 border-border/50 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:shadow-4u-green/20 hover:border-4u-green/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-0 bg-4u-green group-hover:h-full transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-br from-4u-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-16 h-16 bg-gradient-to-br from-4u-green to-emerald-600 rounded-none flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/10">
                                <Target className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-4u-navy">Missão</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                                Conectar empresas a <span className="text-foreground font-semibold">soluções contábeis e financeiras digitais, inovadoras e acessíveis</span>, promovendo eficiência, precisão, segurança e crescimento sustentável.
                            </p>
                        </div>

                        {/* Visão */}
                        <div className="group p-8 rounded-none bg-background border-2 border-border/50 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:shadow-4u-navy/20 hover:border-4u-navy/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden" style={{ transitionDelay: '150ms' }}>
                            <div className="absolute top-0 left-0 w-2 h-0 bg-4u-navy group-hover:h-full transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-br from-4u-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-16 h-16 bg-gradient-to-br from-4u-navy to-4u-navy-light rounded-none flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/10">
                                <Globe className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-4u-navy">Visão</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                                Ser referência em <span className="text-foreground font-semibold">contabilidade estratégica e inteligência financeira</span>, simplificando a gestão e impulsionando empresas por meio de soluções seguras e tecnológicas.
                            </p>
                        </div>

                        {/* Valores */}
                        <div className="group p-8 rounded-none bg-background border-2 border-border/50 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:shadow-4u-green/20 hover:border-4u-green/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden" style={{ transitionDelay: '300ms' }}>
                            <div className="absolute top-0 left-0 w-2 h-0 bg-4u-green group-hover:h-full transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-br from-4u-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-16 h-16 bg-gradient-to-br from-4u-green to-emerald-600 rounded-none flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/10">
                                <Heart className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-4u-navy">Valores</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                                Atuar com <span className="text-foreground font-semibold">integridade, transparência e excelência</span>, cultivando relações de confiança e entregando soluções que geram valor real para clientes, colaboradores e parceiros.
                            </p>
                        </div>

                    </div>

                    {/* Valores Inegociáveis */}
                    <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-20 text-center">
                        <div className="inline-block px-4 py-1.5 bg-4u-navy/5 text-4u-navy text-xs font-bold uppercase tracking-widest mb-8 border-l-2 border-4u-navy">
                            Nossa Cultura
                        </div>
                        <h3 className="text-2xl font-bold text-4u-navy mb-12 tracking-widest">Valores Inegociáveis</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
                            {[
                                { name: "Excelência", icon: Award },
                                { name: "Integridade", icon: ShieldCheck },
                                { name: "Inovação", icon: Zap },
                                { name: "Segurança", icon: Lock },
                                { name: "Crescimento contínuo", icon: TrendingUp },
                                { name: "Responsabilidade social", icon: Heart }
                            ].map((val, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 px-6 py-8 bg-background border-2 border-border/50 text-4u-navy font-bold hover:border-4u-navy/30 hover:shadow-xl transition-all duration-300 group">
                                    <val.icon className="w-8 h-8 text-4u-navy/70 group-hover:scale-110 group-hover:text-4u-navy transition-all duration-300" />
                                    <span className="text-base md:text-lg">{val.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Directorate Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                        <span className="inline-block px-4 py-1.5 bg-4u-navy/5 text-4u-navy text-xs font-bold uppercase tracking-widest mb-4 border-l-2 border-4u-navy">
                            LIDERANÇA
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-4u-black mb-6 tracking-tight">
                            Nossa Diretoria
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Liderança experiente impulsionando a inovação e a excelência na contabilidade digital.
                        </p>
                    </div>

                    <div className="space-y-12 max-w-6xl mx-auto">
                        {/* Antônio Dias - Editorial Card */}
                        <div className="group relative bg-background border border-border/40 overflow-hidden hover:border-4u-green/30 transition-all duration-700 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                                {/* Portrait Container */}
                                <div className="lg:col-span-4 relative aspect-[4/5] lg:aspect-auto min-h-[400px] overflow-hidden">
                                    <div className="absolute inset-0 bg-4u-navy/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                                    <img
                                        src="/antonio-neno.jpeg"
                                        alt="Antônio Dias"
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                    />
                                    {/* Geometric Accent */}
                                    <div className="absolute bottom-0 left-0 w-full h-2 bg-4u-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20"></div>
                                </div>

                                {/* Content Container */}
                                <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col justify-center relative bg-gradient-to-br from-white to-muted/20">
                                    {/* Floating Index */}
                                    <div className="absolute top-4 right-8 text-8xl font-black text-4u-navy/[0.03] select-none pointer-events-none">01</div>

                                    <div className="relative z-10">
                                        <span className="inline-block px-3 py-1 bg-4u-green/10 text-4u-green text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border-l-2 border-4u-green">
                                            Sócio-Diretor
                                        </span>
                                        <h3 className="text-4xl lg:text-5xl font-bold text-4u-navy mb-6 tracking-tighter">
                                            Antônio <span className="text-4u-green">Dias</span>
                                        </h3>

                                        <div className="space-y-6 text-muted-foreground relative z-10">
                                            <p className="text-lg leading-relaxed">
                                                Executivo com ampla experiência no atendimento a empresas do <strong className="text-4u-black">mercado financeiro</strong>, com atuação orientada à expansão, modernização empresarial e estruturação de soluções contábeis especializadas.
                                            </p>
                                            <p className="text-lg leading-relaxed">
                                                Sua trajetória inclui assessoramento a companhias listadas no <strong className="text-4u-black">G20 da XP</strong> e no <strong className="text-4u-black">Best da BTG Pactual</strong>, com atuação em processos de <strong className="text-4u-black">M&A</strong>, estruturação societária e compliance rigoroso.
                                            </p>
                                            <div className="pt-4 border-t border-border/50">
                                                <p className="italic font-medium text-4u-black/80">
                                                    "Transformando a contabilidade em um pilar estratégico de alta performance."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fernando Alves - Editorial Card (Reversed Layout) */}
                        <div className="group relative bg-background border border-border/40 overflow-hidden hover:border-4u-navy/30 transition-all duration-700 scroll-reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
                            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                                {/* Content Container - First on desktop */}
                                <div className="lg:col-span-8 order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center relative bg-gradient-to-bl from-white to-muted/20 text-right lg:text-left">
                                    {/* Floating Index */}
                                    <div className="absolute top-4 left-8 text-8xl font-black text-4u-navy/[0.03] select-none pointer-events-none">02</div>

                                    <div className="relative z-10">
                                        <span className="inline-block px-3 py-1 bg-4u-navy/10 text-4u-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-4 lg:border-l-2 border-4u-navy border-r-2 lg:border-r-0">
                                            Sócio-Diretor
                                        </span>
                                        <h3 className="text-4xl lg:text-5xl font-bold text-4u-navy mb-6 tracking-tighter">
                                            Fernando <span className="text-4u-green">Alves</span>
                                        </h3>

                                        <div className="space-y-6 text-muted-foreground relative z-10 text-right lg:text-left">
                                            <p className="text-lg leading-relaxed">
                                                Profissional com sólida experiência em <strong className="text-4u-black">outsourcing, compliance, governança e estruturação de operações</strong> para empresas de médio e grande porte, especialmente nos setores de Serviços e Indústria.
                                            </p>
                                            <p className="text-lg leading-relaxed">
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

                                {/* Portrait Container */}
                                <div className="lg:col-span-4 order-1 lg:order-2 relative aspect-[4/5] lg:aspect-auto min-h-[400px] overflow-hidden">
                                    <div className="absolute inset-0 bg-4u-navy/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                                    <img
                                        src="/antonio.jpg"
                                        alt="Fernando Alves"
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                    />
                                    {/* Geometric Accent */}
                                    <div className="absolute bottom-0 right-0 w-full h-2 bg-4u-navy transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* Contact Section Integrated */}
            <section className="py-24 bg-background relative overflow-hidden" id="contato">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-4u-green/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-4u-navy/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        {/* Contato direto */}
                        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                            <div className="p-8 md:p-12 rounded-none bg-4u-navy text-white border-2 border-white/10 shadow-2xl shadow-4u-navy/20 relative group h-full flex flex-col justify-center">
                                <div className="absolute top-0 right-0 w-2 h-0 bg-4u-green group-hover:h-full transition-all duration-500" />

                                <h2 className="text-3xl font-bold mb-3">Fale com um Especialista</h2>
                                <p className="text-white/70 mb-10 text-lg leading-relaxed">
                                    Solicite uma proposta personalizada ou tire suas dúvidas diretamente com nosso time pelo WhatsApp ou e-mail.
                                </p>

                                <div className="flex flex-col gap-4">
                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn flex items-center gap-4 w-full px-8 py-5 bg-4u-green rounded-none font-bold text-lg transition-all duration-300 hover:bg-white hover:text-4u-green hover:-translate-y-1 hover:shadow-xl hover:shadow-4u-green/20 active:scale-95"
                                    >
                                        <WhatsAppIcon size={24} className="transition-transform group-hover/btn:rotate-12 flex-shrink-0" />
                                        <span>Chamar no WhatsApp</span>
                                    </a>

                                    <a
                                        href="mailto:comercial@4uconnect.com.br"
                                        className="group/btn flex items-center gap-4 w-full px-8 py-5 bg-white/10 border-2 border-white/20 rounded-none font-bold text-lg transition-all duration-300 hover:bg-white hover:text-4u-navy hover:border-white hover:-translate-y-1 hover:shadow-xl active:scale-95"
                                    >
                                        <Mail size={24} className="transition-transform group-hover/btn:scale-110 flex-shrink-0" />
                                        <span>comercial@4uconnect.com.br</span>
                                    </a>
                                </div>

                                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-3">
                                    {[
                                        "Retorno em até 1 hora em horário comercial",
                                        "Atendimento personalizado para o seu negócio",
                                        "Sem compromisso na primeira conversa",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-white/80">
                                            <CheckCircle2 size={16} className="text-4u-green flex-shrink-0" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="flex flex-col justify-center opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-4u-navy mb-6">Canais de Atendimento</h2>
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 p-6 rounded-none bg-gradient-to-br from-white to-muted/30 border-2 border-4u-green/20 hover:border-4u-green shadow-xl shadow-4u-green/5 transition-all duration-500 hover:scale-[1.02] group hover:-translate-y-1 active:scale-95"
                                >
                                    <div className="w-16 h-16 rounded-none bg-4u-green flex items-center justify-center shadow-lg shadow-4u-green/20 group-hover:rotate-12 transition-transform duration-500">
                                        <WhatsAppIcon size={32} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-4u-navy text-xl group-hover:text-4u-green transition-colors">WhatsApp Oficial</h3>
                                        <p className="text-muted-foreground font-medium">Fale agora com um especialista</p>
                                    </div>
                                </a>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                                <div className="p-6 rounded-none bg-muted/20 border-2 border-border/50 group hover:bg-white hover:shadow-xl hover:border-4u-green/30 transition-all duration-500 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-none bg-4u-green/10 text-4u-green flex items-center justify-center mb-6 group-hover:bg-4u-green group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                        <MapPin size={24} />
                                    </div>
                                    <h4 className="font-bold text-4u-navy mb-2 text-lg">Unidade Barueri</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Al. Mamoré, 687 – 3º Andar<br />
                                        Sala 304, Alphaville<br />
                                        <span className="italic opacity-70">Edifício Amazônia</span>
                                    </p>
                                </div>
                                <div className="p-6 rounded-none bg-muted/20 border-2 border-border/50 group hover:bg-white hover:shadow-xl hover:border-4u-navy/30 transition-all duration-500 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-none bg-4u-navy/10 text-4u-navy flex items-center justify-center mb-6 group-hover:bg-4u-navy group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                        <MapPin size={24} />
                                    </div>
                                    <h4 className="font-bold text-4u-navy mb-2 text-lg">Unidade Sorocaba</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Rua Fernando Silva, 190<br />
                                        3º Andar, Sala 308<br />
                                        <span className="italic opacity-70">Jardim Astro</span>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold text-4u-navy mb-4 ml-1">Nossa presença digital</h4>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com/4u.connect"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 bg-white border-2 border-border rounded-none flex items-center justify-center text-4u-navy hover:bg-4u-navy hover:text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 active:scale-95"
                                    >
                                        <Instagram size={24} />
                                    </a>
                                    <a
                                        href="https://4uconnect.com.br"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 bg-white border-2 border-border rounded-none flex items-center justify-center text-4u-navy hover:bg-4u-green hover:text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 active:scale-95"
                                    >
                                        <Globe size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {!isLP && <Footer variant="navy" />}
        </div>
    );
};

export default QuemSomos;
