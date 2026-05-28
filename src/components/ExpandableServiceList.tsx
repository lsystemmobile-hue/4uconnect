import React, { useState } from "react";
import {
    Building2,
    Users2,
    FileText,
    Repeat,
    Award,
    ChevronDown
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
        title: "Abertura de empresa",
        shortDescription: "Transforme sua ideia em realidade com apoio especializado.",
        fullDescription: "Na 4U Connect, você recebe todo o apoio necessário para definir a melhor forma de tributação, escolher a atividade que mais combina com o seu negócio e tirar todas as suas dúvidas. Estamos ao seu lado em cada passo, para que você comece a sua jornada empreendedora com toda a confiança e segurança.",
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

const ExpandableServiceList = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
            {services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredIndex === index;

                return (
                    <div
                        key={index}
                        className={cn(
                            "group relative overflow-hidden transition-[border-color,background-color,shadow] duration-500 ease-in-out border-2 transform-gpu backface-hidden antialiased",
                            isHovered ? "border-4u-green bg-4u-green/5 shadow-2xl" : "border-border/50 bg-background"
                        )}
                        style={{
                            willChange: isHovered ? 'transform, box-shadow' : 'auto',
                            transform: 'translateZ(0)'
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                            {/* Icon */}
                            <div className={cn(
                                "w-12 h-12 flex-shrink-0 flex items-center justify-center p-2.5 transition-transform duration-500 group-hover:scale-110",
                                service.color,
                                "text-white"
                            )}>
                                <Icon className="w-full h-full" />
                            </div>

                            {/* Title & Short Desc */}
                            <div className="flex-grow">
                                <h3 className={cn(
                                    "text-xl md:text-2xl font-bold mb-1 transition-colors duration-300",
                                    isHovered ? "text-4u-green" : "text-4u-black"
                                )}>
                                    {service.title}
                                </h3>
                                <p className={cn(
                                    "text-muted-foreground font-medium transition-all duration-300",
                                    isHovered ? "max-h-0 opacity-0 overflow-hidden" : "max-h-20 opacity-100"
                                )}>
                                    {service.shortDescription}
                                </p>
                            </div>

                            {/* Hint Icon */}
                            {!isHovered && (
                                <div className="hidden md:block text-muted-foreground animate-bounce-subtle">
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            )}
                        </div>

                        {/* Expanded Content */}
                        <div
                            className={cn(
                                "px-6 md:px-8 pb-8 transition-all duration-500 ease-in-out overflow-hidden origin-top",
                                isHovered ? "max-h-[500px] opacity-100 mt-[-1rem]" : "max-h-0 opacity-0 pointer-events-none"
                            )}
                        >
                            <div className="pl-0 md:pl-18 flex flex-col gap-4">
                                <p className="text-lg text-4u-black/80 leading-relaxed font-medium">
                                    {service.fullDescription}
                                </p>
                                {service.note && (
                                    <div className="p-4 bg-white border-l-4 border-4u-green shadow-sm">
                                        <p className="text-sm italic text-muted-foreground">
                                            {service.note}
                                        </p>
                                    </div>
                                )}
                                <div className="mt-4 pt-4 border-t border-4u-green/20">
                                    <a
                                        href="https://wa.me/551530100009"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-4u-green font-bold hover:gap-4 transition-all duration-300"
                                    >
                                        Saiba mais sobre este serviço
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Accent strip */}
                        <div className={cn(
                            "absolute top-0 left-0 w-1.5 h-full transition-all duration-500",
                            isHovered ? "bg-4u-green opacity-100" : "bg-border opacity-0"
                        )} />
                    </div>
                );
            })}
        </div>
    );
};

export default ExpandableServiceList;
