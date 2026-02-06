import { Headset, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const StickyWhatsApp = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const whatsappNumber = "551530100009";
    const whatsappMessage = encodeURIComponent(
        "Olá! Vim pelo site e gostaria de saber mais sobre os serviços da 4U Connect."
    );

    useEffect(() => {
        // Mostra o tooltip após 3 segundos
        const showTimer = setTimeout(() => {
            setShowTooltip(true);
        }, 3000);

        // Esconde o tooltip após 8 segundos (3s + 5s de exibição)
        const hideTimer = setTimeout(() => {
            setShowTooltip(false);
        }, 8000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <div className="flex flex-col items-center gap-3 group">
            {/* Tooltip - Centralizado */}
            <div className={`transition-all duration-500 pointer-events-none ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                <div className="bg-white/95 backdrop-blur-md text-4u-navy px-4 py-2 border border-white/20 shadow-xl relative">
                    <p className="text-xs font-bold tracking-tight flex items-center gap-2 whitespace-nowrap">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-4u-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-4u-green"></span>
                        </span>
                        Online
                    </p>
                    {/* Setinha centralizada */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-white/20 transform rotate-45"></div>
                </div>
            </div>

            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
            >
                {/* Main Button - Tamanho consistente 56px */}
                <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:shadow-xl active:scale-95 group overflow-hidden border border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-4u-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <WhatsAppIcon size={32} className="text-4u-green transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Online Badge - Sutil */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-md">
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-75"></div>
                </div>
            </a>
        </div>
    );
};

export default StickyWhatsApp;
