
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Loader2 } from "lucide-react";
import { sendMessageToGroq, Message } from "@/lib/groq";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

interface ChatAssistantProps {
    onOpenStateChange?: (isOpen: boolean) => void;
}

const ChatAssistant = ({ onOpenStateChange }: ChatAssistantProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        onOpenStateChange?.(isOpen);
    }, [isOpen, onOpenStateChange]);
    const [videoEnded, setVideoEnded] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
    const [viewportOffset, setViewportOffset] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.visualViewport) return;

        const handleResize = () => {
            if (window.visualViewport) {
                setViewportHeight(window.visualViewport.height);
                setViewportOffset(window.visualViewport.offsetTop);
            }
        };

        window.visualViewport.addEventListener("resize", handleResize);
        window.visualViewport.addEventListener("scroll", handleResize);

        return () => {
            window.visualViewport?.removeEventListener("resize", handleResize);
            window.visualViewport?.removeEventListener("scroll", handleResize);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const chatHistory = [...messages, userMessage];
            const response = await sendMessageToGroq(chatHistory);

            const assistantMessage: Message = { role: "assistant", content: response };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error: any) {
            toast.error(error.message || "Erro ao processar mensagem. Tente novamente.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative">
            {/* Backdrop Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] animate-in fade-in duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Chat Window - Modal centered */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                >
                    <div
                        className="w-full sm:w-[450px] h-[600px] max-h-[85vh] bg-background/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300 pointer-events-auto shadow-4u-navy/20"
                    >
                        {/* Header */}
                        <div className="p-4 bg-4u-navy text-white flex items-center justify-between flex-shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-4u-green/20 flex items-center justify-center">
                                    <Bot size={18} className="text-4u-green" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-white">Assistente 4U</h3>
                                    <p className="text-[10px] text-white/60">Online • Inteligência Artificial</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} className="text-white" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <ScrollArea className="flex-1 p-4 overflow-y-auto">
                            <div className="space-y-4 pb-4">
                                {messages.length === 0 && (
                                    <div className="text-center py-8 px-4">
                                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                                            <Bot size={24} className="text-muted-foreground" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Olá! Sou o assistente da 4U Connect. Como posso ajudar você hoje?
                                        </p>
                                    </div>
                                )}
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "flex gap-2 max-w-[85%]",
                                            msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                                        )}
                                    >
                                        <div className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                                            msg.role === "user" ? "bg-4u-green/10" : "bg-4u-navy/10"
                                        )}>
                                            {msg.role === "user" ? <User size={14} className="text-4u-green" /> : <Bot size={14} className="text-4u-navy" />}
                                        </div>
                                        <div className={cn(
                                            "p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere",
                                            msg.role === "user"
                                                ? "bg-4u-green text-white rounded-tr-none"
                                                : "bg-muted text-foreground rounded-tl-none border border-border"
                                        )}>
                                            {msg.role === "assistant" ? (
                                                msg.content.split(/(https?:\/\/[^\s]+)/g).map((part, i) => {
                                                    if (part.match(/https?:\/\/[^\s]+/)) {
                                                        return (
                                                            <a
                                                                key={i}
                                                                href={part}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="underline hover:opacity-80 transition-opacity break-all"
                                                            >
                                                                {part}
                                                            </a>
                                                        );
                                                    }
                                                    return part;
                                                })
                                            ) : (
                                                msg.content
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex gap-2 max-w-[85%]">
                                        <div className="w-8 h-8 rounded-full bg-4u-navy/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <Bot size={14} className="text-4u-navy" />
                                        </div>
                                        <div className="p-3 rounded-2xl bg-muted text-foreground rounded-tl-none border border-border flex items-center gap-2">
                                            <Loader2 size={14} className="animate-spin" />
                                            <span className="text-[12px]">Digitando...</span>
                                        </div>
                                    </div>
                                )}
                                <div ref={scrollRef} />
                            </div>
                        </ScrollArea>

                        {/* Input Area */}
                        <div className="p-4 border-t border-border bg-muted/30 flex-shrink-0">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Digite sua dúvida..."
                                    className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-4u-green/50 transition-all min-w-0"
                                />
                                <Button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="w-10 h-10 rounded-full p-0 bg-4u-navy hover:bg-4u-navy-light text-white flex-shrink-0 flex items-center justify-center"
                                >
                                    <Send size={18} />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button - Only visible when chat is closed */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl bg-4u-green pointer-events-auto overflow-hidden relative"
                    style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                    aria-label="Abrir assistente"
                >
                    <div className={cn(
                        "absolute inset-0 transition-opacity duration-700",
                        videoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
                    )}>
                        <video
                            src="/robo-flutuante.mp4"
                            autoPlay
                            muted
                            playsInline
                            onEnded={() => setVideoEnded(true)}
                            className="w-full h-full object-cover"
                            style={{
                                imageRendering: '-webkit-optimize-contrast',
                                WebkitBackfaceVisibility: 'hidden',
                                backfaceVisibility: 'hidden',
                                transform: 'translateZ(0)',
                                willChange: 'transform, opacity',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <div className={cn(
                        "transition-all duration-700 transform",
                        videoEnded ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    )}>
                        <Bot className="w-8 h-8" />
                    </div>
                </button>
            )}
        </div>
    );
};

export default ChatAssistant;
