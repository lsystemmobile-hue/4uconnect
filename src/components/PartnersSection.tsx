import React from "react";
import { MoveRight } from "lucide-react";

interface Partner {
    name: string;
    logo: string;
    description: string;
    offer: string;
    bgImage: string;
    link?: string;
}

const partners: Partner[] = [
    {
        name: "SEBRAE",
        logo: "/sebrae.svg",
        description: "Sua ideia em realidade com apoio especialista e educação empreendedora de ponta.",
        offer: "Cliente 4U Connect garante 20% de desconto nos cursos da Faculdade Sebrae. Em pagamentos parcelados você garante +5% e +10% à vista.",
        bgImage: "/faculdade-sebrae.jpg"
    },
    {
        name: "CORA",
        logo: "/cora.svg",
        description: "Banco digital PJ completo, focado em simplificar a gestão financeira do seu negócio.",
        offer: "Conta digital PJ sem taxas. Abra sua conta gratuitamente e aproveite a integração com a plataforma da 4U Connect.",
        bgImage: "/cora.png"
    },
    {
        name: "COMPANY HERO",
        logo: "/company.svg",
        description: "Soluções de endereço fiscal e escritórios virtuais para empresas modernas.",
        offer: "Clientes 4U Connect garantem descontos exclusivos para escritórios virtuais. Sua empresa com endereço privilegiado.",
        bgImage: "/company.jpeg"
    }
];

const PartnersSection = () => {
    return (
        <section className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
            {/* Simplified Background Decor - Removed heavy blur */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-4u-green/10 rounded-full -mr-48 -mt-48 opacity-50" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-4u-green/10 rounded-full -ml-48 -mb-48 opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
                    <span className="inline-block px-4 py-1.5 bg-4u-green text-white text-xs font-bold uppercase tracking-widest mb-4 border-l-4 border-white/20">
                        Ecossistema de Parcerias
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Parceiros Estratégicos
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                        A 4U Connect nasceu com o objetivo de conectar nossos clientes a parceiros estratégicos,
                        oferecendo soluções completas que facilitam o dia a dia, otimizam resultados e aceleram o crescimento dos negócios.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group relative p-10 bg-black/40 border border-white/10 hover:border-4u-green/50 transition-all duration-300 flex flex-col items-center text-center overflow-hidden min-h-[480px]"
                            style={{
                                willChange: 'border-color, box-shadow',
                                transform: 'translateZ(0)'
                            }}
                        >
                            {/* Optimized Background Image - No scale transform */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={partner.bgImage}
                                    alt={`Parceria 4U Connect com ${partner.name}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                                    style={{
                                        transform: 'translateZ(0)',
                                        backfaceVisibility: 'hidden'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
                            </div>

                            {/* Simplified Hover Accent */}
                            <div className="absolute inset-0 bg-4u-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]" />

                            {/* Logo Container - Removed scale transform */}
                            <div className="h-20 w-full flex items-center justify-center mb-8 relative z-10">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    loading="lazy"
                                    className="max-h-full max-w-[180px] object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex-1">
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-4u-green transition-colors duration-200">
                                    #{partner.name}
                                </h3>
                                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                                    {partner.description}
                                </p>

                                {/* Simplified Offer Box - Removed backdrop-blur */}
                                <div className="p-5 bg-white/5 border-l-2 border-4u-green text-gray-200 text-left relative overflow-hidden">
                                    <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-4u-green mb-2">Benefício Exclusivo</span>
                                    <p className="text-sm font-medium leading-relaxed italic">
                                        {partner.offer}
                                    </p>
                                </div>
                            </div>

                            {/* Simplified Action Link */}
                            <div className="mt-8 relative z-10 flex items-center justify-center gap-2 text-4u-green font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Aproveitar Benefício <MoveRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
