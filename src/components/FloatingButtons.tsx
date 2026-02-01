import { useState, useEffect } from "react";
import ChatAssistant from "./ChatAssistant";
import StickyWhatsApp from "./StickyWhatsApp";
import { useLocation } from "react-router-dom";

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

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-4 pointer-events-none">
            {/* WhatsApp Button - Esconde quando o chat está aberto */}
            {!isChatOpen && (
                <div className="pointer-events-auto">
                    <StickyWhatsApp />
                </div>
            )}

            {/* Chat Assistant */}
            <div className="pointer-events-auto">
                <ChatAssistant onOpenStateChange={setIsChatOpen} />
            </div>
        </div>
    );
};

export default FloatingButtons;
