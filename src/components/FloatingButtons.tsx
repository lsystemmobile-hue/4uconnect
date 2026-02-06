import { useState, useEffect } from "react";
import ChatAssistant from "./ChatAssistant";
import StickyWhatsApp from "./StickyWhatsApp";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const FloatingButtons = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            // Mostra os botões após 400px de scroll (geralmente passa o hero)
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Verifica posição inicial
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]); // Reinicia ou verifica ao mudar de rota

    // Não exibe os botões na página Home
    if (location.pathname === "/") return null;

    return (
        <div className={cn(
            "fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-4 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
        )}>
            {/* WhatsApp Button - Esconde quando o chat está aberto */}
            {!isChatOpen && (
                <StickyWhatsApp />
            )}

            {/* Chat Assistant */}
            <ChatAssistant onOpenStateChange={setIsChatOpen} />
        </div>
    );
};

export default FloatingButtons;
