import { Headset, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const StickyWhatsApp = () => {
    const [tooltipStep, setTooltipStep] = useState(0);
    const whatsappNumber = "5515998230619";
    const whatsappMessage = encodeURIComponent(
        "Olá! Vim pelo site e gostaria de saber mais sobre os serviços da 4U Connect."
    );

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setTooltipStep(1);
        }, 5000); // 5 segundos para a primeira mensagem

        const timer2 = setTimeout(() => {
            setTooltipStep(2);
        }, 15000); // 15 segundos para sumir tudo

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="flex flex-col items-end gap-3 group">
            {/* Tooltip/Badge */}
            <div
                className={`transition-all duration-700 ${tooltipStep < 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                    }`}
            >
                <div className="bg-white/90 backdrop-blur-md text-4u-navy px-5 py-2.5 border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.15)] relative overflow-hidden group min-w-[200px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-4u-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 h-6 overflow-hidden">
                        <div
                            className={`transition-all duration-700 transform flex items-center justify-center ${tooltipStep === 0 ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                                }`}
                        >
                            <p className="text-sm font-bold tracking-tight flex items-center gap-2 whitespace-nowrap">
                                <Headset size={16} className="text-4u-green" />
                                Suporte Online
                            </p>
                        </div>
                        <div
                            className={`absolute inset-0 transition-all duration-700 transform flex items-center justify-center ${tooltipStep === 1 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                                }`}
                        >
                            <p className="text-sm font-bold tracking-tight flex items-center gap-2 whitespace-nowrap">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-4u-green opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-4u-green"></span>
                                </span>
                                Consultoria Online
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white border-r border-b border-white/20 transform rotate-45"></div>
                </div>
            </div>

            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
            >
                {/* Pulse Animation Ring */}
                <div className="absolute inset-0 rounded-full bg-4u-green animate-ping opacity-40"></div>

                {/* Main Button */}
                <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-110 hover:shadow-white/30 hover:-rotate-12 active:scale-95 group overflow-hidden border border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-4u-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <WhatsAppIcon size={32} className="text-4u-green transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Online Badge */}
                <div className="absolute -top-0 -right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow-lg">
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
                </div>
            </a>
        </div>
    );
};

export default StickyWhatsApp;
