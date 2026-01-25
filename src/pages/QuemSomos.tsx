import { useState } from "react";
import {
    MapPin,
    Globe,
    Instagram,
    MessageCircle,
    Send,
    CheckCircle2,
    Users,
    Target,
    ShieldCheck,
    Linkedin,
    Search,
    Settings,
    Clock,
    BarChart,
    Zap,
    Smartphone,
    Scale,
    CreditCard,
    Lightbulb,
    FileText,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const QuemSomos = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast({
            title: "Mensagem enviada!",
            description: "Em breve entraremos em contato.",
        });

        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setIsSubmitting(false);
    };

    const whatsappNumber = "5515998230619";
    const whatsappMessage = encodeURIComponent(
        "Olá! Gostaria de solicitar uma proposta personalizada da 4U Connect."
    );

    return (
        <div className="min-h-screen">
            <PageHero
                title="Quem Somos"
                subtitle="Conheça a 4U Connect: inteligência, tecnologia e compromisso com o seu crescimento."
                variant="navy"
                backgroundImage="/quem-somos.jpg"
            />

            {/* About Section */}
            <section className="py-20 bg-background overflow-hidden border-b border-border/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="animate-fade-in">
                            <h2 className="text-3xl md:text-5xl font-bold text-4u-navy mb-8 leading-tight">
                                Mais do que uma contabilidade, <span className="text-4u-green">seu parceiro estratégico</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    A <span className="text-4u-navy font-bold">4U Connect</span> é uma empresa onde a <span className="text-4u-green font-bold">Contabilidade e a Tecnologia</span> convergem para <span className="text-4u-navy font-semibold italic">modernizar a gestão contábil e financeira</span> de empresas prestadoras de serviço.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-4u-green pl-6 py-2 bg-muted/30 rounded-r-xl">
                                    Atuamos de forma integrada nas áreas contábil, fiscal, trabalhista e financeira, conectando processos e dados para apoiar a sua <span className="text-4u-navy font-bold">tomada de decisões</span> estratégicas.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Somos um <span className="text-4u-navy font-bold underline decoration-4u-green underline-offset-4">ecossistema financeiro completo</span>, focado em alta performance, controle e previsibilidade para impulsionar o crescimento sustentável do seu negócio.
                                </p>
                            </div>
                        </div>
                        <div className="relative animate-scale-in">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-border">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                                    alt="4U Connect Team"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-4u-navy/80 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                        <p className="text-white font-bold text-lg mb-1">Tecnologia & Estratégia</p>
                                        <p className="text-white/70 text-sm">O futuro da contabilidade já chegou na 4U Connect.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-4u-green rounded-2xl -z-0 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-4u-navy rounded-full -z-0 opacity-20"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="group p-8 rounded-2xl bg-muted/50 border border-border text-center hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-4u-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-4u-green group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                <Target className="text-4u-green group-hover:text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Missão</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Conectar empresas a <span className="text-foreground font-semibold">soluções contábeis e financeiras digitais, inovadoras e acessíveis</span>, promovendo eficiência, precisão, segurança e crescimento sustentável.
                            </p>
                        </div>
                        <div className="group p-8 rounded-2xl bg-muted/50 border border-border text-center hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-4u-navy/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-4u-navy group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                <Globe className="text-4u-navy group-hover:text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Visão</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Ser referência em <span className="text-foreground font-semibold">contabilidade estratégica e inteligência financeira</span>, simplificando a gestão e impulsionando empresas por meio de soluções seguras e tecnológicas.
                            </p>
                        </div>
                        <div className="group p-8 rounded-2xl bg-muted/50 border border-border text-center hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-4u-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-4u-green group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                <ShieldCheck className="text-4u-green group-hover:text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Valores</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                <span className="text-foreground font-semibold">Excelência, Integridade, Inovação, Segurança, Crescimento contínuo</span> e Responsabilidade Social.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentials Section */}
            <section className="py-24 bg-4u-navy text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-4u-green via-4u-navy to-4u-green"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Nossos <span className="text-4u-green">Diferenciais</span>
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed">
                            O que nos torna o parceiro ideal para a transformação e segurança do seu negócio.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Atendimento Ágil",
                                desc: "Suporte especializado e respostas rápidas via WhatsApp e canais exclusivos.",
                                icon: Zap
                            },
                            {
                                title: "App de Gestão",
                                desc: "Todo o seu financeiro e contábil na palma da mão com nosso app exclusivo.",
                                icon: Smartphone
                            },
                            {
                                title: "Emissão de Notas",
                                desc: "Processo otimizado e seguro para emissão de notas fiscais de serviço e produtos.",
                                icon: FileText
                            },
                            {
                                title: "Estratégia Tributária",
                                desc: "Planejamento constante para garantir o menor impacto fiscal dentro da lei.",
                                icon: Scale
                            },
                            {
                                title: "Banking Digital",
                                desc: "Integração direta com as principais contas PJ digitais do mercado.",
                                icon: CreditCard
                            },
                            {
                                title: "Visão Consultiva",
                                desc: "Não apenas números, mas insights que geram valor para sua tomada de decisão.",
                                icon: Lightbulb
                            }
                        ].map((diff, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-4u-green/50 transition-all duration-500 group">
                                <div className="w-14 h-14 rounded-2xl bg-4u-green/20 text-4u-green flex items-center justify-center mb-6 group-hover:bg-4u-green group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                    <diff.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                                <p className="text-sm text-white/60 leading-relaxed">{diff.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Directorate Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Nossa Diretoria
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Liderança experiente impulsionando a inovação e a excelência na contabilidade digital.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Antônio Dias */}
                        <div className="p-8 rounded-3xl bg-background border border-border hover:shadow-2xl hover:shadow-4u-navy/5 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-4u-navy/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                            <div className="flex items-center gap-6 mb-8 relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-4u-navy flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-4u-navy/20 group-hover:bg-4u-green transition-colors duration-500">
                                    AD
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-4u-navy">Antônio Dias</h3>
                                    <p className="text-4u-green font-semibold tracking-wide uppercase text-xs">Sócio-Diretor Estratégico</p>
                                    <a href="#" className="inline-flex items-center gap-2 mt-2 text-muted-foreground hover:text-4u-navy transition-colors text-sm">
                                        <Linkedin size={16} />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-4 relative z-10">
                                <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-4u-green transition-colors duration-500 group-hover:border-4u-navy italic">
                                    Executivo com ampla experiência no <span className="text-foreground font-bold italic">mercado financeiro</span>, focado em expansão e soluções contábeis estratégicas.
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Histórico de assessoramento a empresas do <span className="text-foreground font-semibold">G20 da XP</span> e <span className="text-foreground font-semibold">Best da BTG Pactual</span>. Especialista em M&A e compliance, transformando a contabilidade em pilar de alta performance.
                                </p>
                            </div>
                        </div>

                        {/* Fernando Alves */}
                        <div className="p-8 rounded-3xl bg-background border border-border hover:shadow-2xl hover:shadow-4u-navy/5 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-4u-green/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                            <div className="flex items-center gap-6 mb-8 relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-4u-navy flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-4u-navy/20 group-hover:bg-4u-navy transition-colors duration-500">
                                    FA
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-4u-navy">Fernando Alves</h3>
                                    <p className="text-4u-green font-semibold tracking-wide uppercase text-xs">Sócio-Diretor Operacional</p>
                                    <a href="#" className="inline-flex items-center gap-2 mt-2 text-muted-foreground hover:text-4u-navy transition-colors text-sm">
                                        <Linkedin size={16} />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-4 relative z-10">
                                <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-4u-green transition-colors duration-500 group-hover:border-4u-navy italic">
                                    Sólida experiência em <span className="text-foreground font-bold italic">outsourcing e governança</span> para empresas de médio e grande porte.
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Atuação consolidada em <span className="text-foreground font-semibold">multinacionais e consultorias</span>, com foco em digitalização e eficiência operacional, elevando o papel estratégico da contabilidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Journey Section */}
            <section className="py-20 bg-muted/10 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Jornada do Cliente
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Um processo estruturado para garantir controle total e performance desde o primeiro dia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto relative group">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-0.5 bg-4u-green/10 z-0"></div>

                        {[
                            {
                                step: "01",
                                title: "Diagnóstico Inicial",
                                desc: "Mapeamento completo de processos e rotinas da sua empresa.",
                                icon: Search
                            },
                            {
                                step: "02",
                                title: "Personalização",
                                desc: "Configuração de sistemas, integrações e automações de acordo com sua necessidade.",
                                icon: Settings
                            },
                            {
                                step: "03",
                                title: "Primeiros 30 dias",
                                desc: "Conciliações, testes e validações para garantir precisão e confiança.",
                                icon: Clock
                            },
                            {
                                step: "04",
                                title: "Operação Contínua",
                                desc: "Financeiro previsível, performático e orientado por indicadores estratégicos.",
                                icon: BarChart
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative z-10 p-8 rounded-3xl bg-background border border-border text-center shadow-sm hover:shadow-2xl hover:shadow-4u-green/5 transition-all duration-500 group/item">
                                <div className="w-20 h-20 bg-muted/50 text-4u-navy rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 transform group-hover/item:scale-110 group-hover/item:bg-4u-green group-hover/item:text-white group-hover/item:rotate-6">
                                    <item.icon size={32} />
                                </div>
                                <div className="text-4u-green font-bold text-xs uppercase tracking-widest mb-2">Passo {item.step}</div>
                                <h3 className="font-bold text-4u-navy text-lg mb-3">{item.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Partners */}
            <section className="py-12 bg-background border-y border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Parceiros & Ecossistema
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using placeholders as I don't have actual partner assets yet */}
                        <div className="h-8 md:h-10 flex items-center gap-2">
                            <Globe size={24} />
                            <span className="font-bold">Conta Azul</span>
                        </div>
                        <div className="h-8 md:h-10 flex items-center gap-2">
                            <Globe size={24} />
                            <span className="font-bold">Omie</span>
                        </div>
                        <div className="h-8 md:h-10 flex items-center gap-2">
                            <Globe size={24} />
                            <span className="font-bold">RD Station</span>
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
                        {/* Contact Form Container */}
                        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                            <div className="p-8 md:p-12 rounded-[2.5rem] bg-4u-navy text-white border border-white/10 shadow-2xl shadow-4u-navy/20 relative group">
                                <h2 className="text-3xl font-bold mb-2">Envie uma Mensagem</h2>
                                <p className="text-white/70 mb-10">Solicite uma proposta personalizada ou tire suas dúvidas com nosso time.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">Nome Completo *</label>
                                            <Input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Como podemos te chamar?"
                                                required
                                                className="h-14 rounded-2xl border-none bg-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white/15 transition-all shadow-inner"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">E-mail Corporativo *</label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="seu@empresa.com"
                                                required
                                                className="h-14 rounded-2xl border-none bg-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white/15 transition-all shadow-inner"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">Telefone / WhatsApp</label>
                                            <Input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="(00) 00000-0000"
                                                className="h-14 rounded-2xl border-none bg-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white/15 transition-all shadow-inner"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">Nome da Empresa</label>
                                            <Input
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Sua empresa"
                                                className="h-14 rounded-2xl border-none bg-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white/15 transition-all shadow-inner"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">Mensagem *</label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Descreva brevemente sua necessidade..."
                                            required
                                            rows={4}
                                            className="rounded-2xl border-none bg-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white/15 transition-all resize-none shadow-inner"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 bg-4u-green hover:bg-4u-black text-white rounded-2xl font-bold text-lg shadow-lg shadow-4u-green/20 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        {isSubmitting ? "Enviando..." : <><Send size={20} className="mr-2" /> Enviar Mensagem Agora</>}
                                    </Button>
                                </form>
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
                                    className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-gradient-to-br from-white to-muted/30 border border-4u-green/20 hover:border-4u-green shadow-xl shadow-4u-green/5 transition-all duration-500 hover:scale-[1.02] group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-4u-green flex items-center justify-center shadow-lg shadow-4u-green/20 group-hover:rotate-[360deg] transition-transform duration-700">
                                        <WhatsAppIcon size={32} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-4u-navy text-xl group-hover:text-4u-green transition-colors">WhatsApp Oficial</h3>
                                        <p className="text-muted-foreground font-medium">Fale agora com um especialista</p>
                                    </div>
                                </a>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                                <div className="p-6 rounded-3xl bg-muted/20 border border-border/50 group hover:bg-white hover:shadow-xl transition-all duration-500">
                                    <div className="w-12 h-12 rounded-2xl bg-4u-green/10 text-4u-green flex items-center justify-center mb-6 group-hover:bg-4u-green group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                        <MapPin size={24} />
                                    </div>
                                    <h4 className="font-bold text-4u-navy mb-2 text-lg">Unidade Barueri</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Al. Mamoré, 687 – 3º Andar<br />
                                        Sala 304, Alphaville<br />
                                        <span className="italic opacity-70">Edifício Amazônia</span>
                                    </p>
                                </div>
                                <div className="p-6 rounded-3xl bg-muted/20 border border-border/50 group hover:bg-white hover:shadow-xl transition-all duration-500">
                                    <div className="w-12 h-12 rounded-2xl bg-4u-navy/10 text-4u-navy flex items-center justify-center mb-6 group-hover:bg-4u-navy group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
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
                                        className="w-14 h-14 bg-white border border-border rounded-2xl flex items-center justify-center text-4u-navy hover:bg-4u-navy hover:text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                                    >
                                        <Instagram size={24} />
                                    </a>
                                    <a
                                        href="https://4uconnect.com.br"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 bg-white border border-border rounded-2xl flex items-center justify-center text-4u-navy hover:bg-4u-green hover:text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                                    >
                                        <Globe size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer variant="navy" />
        </div>
    );
};

export default QuemSomos;
