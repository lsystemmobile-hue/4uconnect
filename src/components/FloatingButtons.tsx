import { useState, useEffect, useRef } from "react";
import ChatAssistant from "./ChatAssistant";
import StickyWhatsApp from "./StickyWhatsApp";
import { useLocation, useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";

const LP_WHATSAPP_MESSAGES: Record<string, string> = {
    "/inteligencia-financeira": "Olá! Vim pelo anúncio e gostaria de saber mais sobre os serviços de Inteligência Financeira da 4U Connect.",
};

const FloatingButtons = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const lastCall = useRef(0);

    const isLP = searchParams.get("lp") === "1";
    const customMessage = isLP ? LP_WHATSAPP_MESSAGES[location.pathname] : undefined;

    useEffect(() => {
        const handleScroll = () => {
            // Throttle: executa no máximo 1x a cada 100ms
            const now = Date.now();
            if (now - lastCall.current < 100) return;
            lastCall.current = now;

            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    // Não exibe os botões na página Home
    if (location.pathname === "/") return null;

    return (
        <div className={cn(
            "fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-4 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
        )}>
            {/* WhatsApp Button - Esconde quando o chat está aberto */}
            {!isChatOpen && (
                <StickyWhatsApp message={customMessage} />
            )}

            {/* Chat Assistant */}
            <ChatAssistant onOpenStateChange={setIsChatOpen} />
        </div>
    );
};

export default FloatingButtons;
