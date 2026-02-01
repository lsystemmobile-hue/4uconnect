import React, { useState } from "react";
import {
    Building2,
    Users2,
    FileText,
    Repeat,
    Award,
    X,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
    icon: React.ElementType;
    title: string;
    shortDescription: string;
    fullDescription: string;
    note?: string;
    color: string;
}

const services: ServiceItem[] = [
    {
        icon: Building2,
        title: "Abertura de empresa grátis",
        shortDescription: "Transforme sua ideia em realidade sem custos de abertura.",
        fullDescription: "Na 4U_Connect, você não apenas abre sua empresa de forma gratuita, mas também recebe todo o apoio necessário para definir a melhor forma de tributação, escolher a atividade que mais combina com o seu negócio e tirar todas as suas dúvidas. Estamos ao seu lado em cada passo, para que você comece a sua jornada empreendedora com toda a confiança e segurança.",
        note: "Observação: Abertura grátis mediante a contratação de 12 meses de serviços de contabilidade.",
        color: "bg-emerald-500"
    },
    {
        icon: Repeat,
        title: "Trocar de contador",
        shortDescription: "Descubra o poder de uma contabilidade moderna e digital.",
        fullDescription: "Trocar de contador é mais simples do que você imagina, e na 4U_Connect estamos aqui para facilitar todo o processo. Oferecemos suporte completo, incluindo uma pesquisa detalhada para identificar possíveis problemas, garantindo uma transição tranquila e sem preocupações. Você ganha mais tempo para focar no crescimento do seu negócio enquanto cuidamos de tudo com eficiência.",
        color: "bg-blue-500"
    },
    {
        icon: FileText,
        title: "Contabilidade Completa",
        shortDescription: "Deixe para trás as preocupações contábeis, fiscais e trabalhistas.",
        fullDescription: "Nossa equipe cuida de tudo, garantindo que seu negócio esteja sempre em conformidade, para que você possa focar no que realmente importa – crescer de forma sustentável e com segurança. Gestão completa de obrigações para que você tenha paz de espírito.",
        color: "bg-4u-navy"
    },
    {
        icon: Users2,
        title: "Migrar de MEI para ME",
        shortDescription: "Transforme seu MEI para ME de forma simples e sem burocracia!",
        fullDescription: "Nossa equipe técnica é especialista em processos legais e administrativos. Cuidamos e acompanhamos todo o processo de migração, desde a conferência de todos os documentos necessários até os trâmites legais com a Receita Federal, Junta Comercial e Prefeitura.",
        color: "bg-amber-500"
    },
    {
        icon: Award,
        title: "Certificado Digital",
        shortDescription: "Ative agora o seu certificado digital e garanta segurança.",
        fullDescription: "Soluções completas em certificados digitais para todos os tipos de negócios. Garanta a segurança das suas transações e a autenticidade dos seus documentos digitais com agilidade.",
        color: "bg-rose-500"
    }
];

const ServiceDrawers = () => {
    const [selectedService, setSelectedService] = useState<number | null>(null);

    const closeDrawer = () => setSelectedService(null);

    return (
        <>
            {/* Service Cards Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-3">
                {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <button
                            key={index}
                            onClick={() => setSelectedService(index)}
                            className="group relative overflow-hidden transition-all duration-300 border-2 border-border/50 bg-background hover:border-4u-green hover:bg-4u-green/5 hover:shadow-xl text-left w-full"
                        >
                            <div className="p-5 md:p-6 flex items-center gap-4 md:gap-6">
                                {/* Icon */}
                                <div className={cn(
                                    "w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                                    service.color,
                                    "text-white"
                                )}>
                                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                                </div>

                                {/* Content */}
                                <div className="flex-grow min-w-0">
                                    <h3 className="text-lg md:text-xl font-bold text-4u-black mb-1 group-hover:text-4u-green transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground font-medium line-clamp-1">
                                        {service.shortDescription}
                                    </p>
                                </div>

                                {/* Arrow Icon */}
                                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-4u-green group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </div>

                            {/* Accent Bar */}
                            <div className="absolute left-0 top-0 w-1 h-full bg-border group-hover:bg-4u-green group-hover:w-1.5 transition-all" />
                        </button>
                    );
                })}
            </div>

            {/* Drawer Overlay */}
            {selectedService !== null && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] animate-in fade-in duration-300"
                        onClick={closeDrawer}
                    />

                    {/* Drawer Panel */}
                    <div className="fixed inset-y-0 right-0 w-full md:w-[600px] bg-background border-l-2 border-4u-green z-[9999] shadow-2xl animate-in slide-in-from-right duration-500">
                        <div className="h-full flex flex-col">
                            {/* Header */}
                            <div className={cn(
                                "p-6 md:p-8 text-white relative overflow-hidden",
                                services[selectedService].color
                            )}>
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        {React.createElement(services[selectedService].icon, {
                                            className: "w-12 h-12 flex-shrink-0"
                                        })}
                                        <button
                                            onClick={closeDrawer}
                                            className="p-2 hover:bg-white/20 transition-colors -mr-2 -mt-2"
                                            aria-label="Fechar"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">
                                        {services[selectedService].title}
                                    </h2>
                                </div>
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8">
                                <div className="space-y-6">
                                    {/* Short Description */}
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-4u-green mb-2">
                                            Resumo
                                        </h3>
                                        <p className="text-base text-muted-foreground font-medium">
                                            {services[selectedService].shortDescription}
                                        </p>
                                    </div>

                                    {/* Full Description */}
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-4u-green mb-3">
                                            Detalhes
                                        </h3>
                                        <p className="text-lg text-4u-black/90 leading-relaxed">
                                            {services[selectedService].fullDescription}
                                        </p>
                                    </div>

                                    {/* Note */}
                                    {services[selectedService].note && (
                                        <div className="p-5 bg-4u-green/5 border-l-4 border-4u-green">
                                            <p className="text-sm italic text-muted-foreground leading-relaxed">
                                                {services[selectedService].note}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Footer CTA */}
                            <div className="p-6 md:p-8 border-t border-border bg-muted/30">
                                <a
                                    href="https://wa.me/5515998230619"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-3 w-full py-4 px-6 bg-4u-green hover:bg-4u-green-dark text-white font-bold text-lg transition-all duration-300 hover:gap-5"
                                >
                                    Saiba mais sobre este serviço
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ServiceDrawers;
