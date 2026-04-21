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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ServiceItem {
    icon: React.ElementType;
    title: string;
    shortDescription: string;
    fullDescription: string;
    note?: string;
    color: string;
    hoverComment?: string;
    hoverLabel?: string;
}

const services: ServiceItem[] = [
    {
        icon: Building2,
        title: "Abertura de empresa com planejamento estratégico",
        shortDescription: "Transforme sua ideia em realidade com estrutura e segurança.",
        fullDescription: "Na 4U_Connect, você abre sua empresa com todo o apoio necessário para definir a melhor forma de tributação, escolher a atividade que mais combina com o seu negócio e tirar todas as suas dúvidas. Estamos ao seu lado em cada passo, para que você comece a sua jornada empreendedora com toda a confiança e segurança.",
        color: "bg-emerald-500",
        hoverLabel: "Planejamento estratégico",
        hoverComment: "Estruturamos seu negócio corretamente desde o início, com enquadramento ideal e segurança tributária."
    },
    {
        icon: Repeat,
        title: "Trocar de contador",
        shortDescription: "Descubra o poder de uma contabilidade moderna e digital.",
        fullDescription: "Trocar de contador é mais simples do que você imagina, e na 4U_Connect estamos aqui para facilitar todo o processo. Oferecemos suporte completo, incluindo uma pesquisa detalhada para identificar possíveis problemas, garantindo uma transição tranquila e sem preocupações. Você ganha mais tempo para focar no crescimento do seu negócio enquanto cuidamos de tudo com eficiência.",
        color: "bg-blue-500",
        hoverLabel: "Troca sem complicação",
        hoverComment: "Fazemos a transição completa com levantamento de pendências, sem burocracia e sem dor de cabeça para você."
    },
    {
        icon: FileText,
        title: "Contabilidade Completa",
        shortDescription: "Deixe para trás as preocupações contábeis, fiscais e trabalhistas.",
        fullDescription: "Nossa equipe cuida de tudo, garantindo que seu negócio esteja sempre em conformidade, para que você possa focar no que realmente importa – crescer de forma sustentável e com segurança. Gestão completa de obrigações para que você tenha paz de espírito.",
        color: "bg-4u-navy",
        hoverLabel: "Gestão completa",
        hoverComment: "Cuidamos de todas as obrigações fiscais, trabalhistas e contábeis para que você foque no crescimento do seu negócio."
    },
    {
        icon: Users2,
        title: "Migrar de MEI para ME",
        shortDescription: "Transforme seu MEI para ME de forma simples e sem burocracia!",
        fullDescription: "Nossa equipe técnica é especialista em processos legais e administrativos. Cuidamos e acompanhamos todo o processo de migração, desde a conferência de todos os documentos necessários até os trâmites legais com a Receita Federal, Junta Comercial e Prefeitura.",
        color: "bg-amber-500",
        hoverLabel: "Migração assistida",
        hoverComment: "Acompanhamos cada etapa da migração junto à Receita Federal, Junta Comercial e Prefeitura, do início ao fim."
    },
    {
        icon: Award,
        title: "Certificado Digital",
        shortDescription: "Ative agora o seu certificado digital e garanta segurança.",
        fullDescription: "Soluções completas em certificados digitais para todos os tipos de negócios. Garanta a segurança das suas transações e a autenticidade dos seus documentos digitais com agilidade.",
        color: "bg-rose-500",
        hoverLabel: "Segurança digital",
        hoverComment: "Emitimos seu certificado digital com agilidade, garantindo autenticidade e segurança em todas as suas transações."
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

                    const cardButton = (
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

                    if (service.hoverComment) {
                        return (
                            <TooltipProvider key={index} delayDuration={200}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        {cardButton}
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side="top"
                                        sideOffset={10}
                                        className={cn(
                                            "max-w-lg w-96 p-5 rounded-xl border-2 border-4u-green/30",
                                            "bg-gradient-to-br from-4u-green/10 to-emerald-50",
                                            "shadow-xl shadow-4u-green/10",
                                            "text-left"
                                        )}
                                    >
                                        <div className="flex gap-3 items-start">
                                            <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-4u-green/20 flex items-center justify-center">
                                                <Icon className="w-4 h-4 text-4u-green" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-4u-green uppercase tracking-wide mb-1">{service.hoverLabel}</p>
                                                <p className="text-sm text-4u-black/80 leading-relaxed font-medium">
                                                    {service.hoverComment}
                                                </p>
                                            </div>
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        );
                    }

                    return React.cloneElement(cardButton, { key: index });
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
                                    href="https://wa.me/551530100009"
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
