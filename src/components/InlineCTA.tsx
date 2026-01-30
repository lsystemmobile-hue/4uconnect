import { ArrowRight } from "lucide-react";

interface InlineCTAProps {
    title: string;
    subtitle: string;
    primaryText?: string;
    primaryLink: string;
    secondaryText?: string;
    secondaryLink?: string;
    variant?: "green" | "navy" | "black";
}

const InlineCTA = ({
    title,
    subtitle,
    primaryText = "Falar com Especialista",
    primaryLink,
    secondaryText = "Ver Mais Detalhes",
    secondaryLink,
    variant = "navy",
}: InlineCTAProps) => {
    const gradients = {
        green: "from-4u-green via-4u-green/90 to-4u-navy",
        navy: "from-4u-navy via-4u-navy/90 to-4u-green/80",
        black: "from-4u-black via-4u-black/90 to-4u-navy/80",
    };

    return (
        <div className="my-16 md:my-20">
            <div
                className={`relative overflow-hidden rounded-none border-2 border-white/10 bg-gradient-to-br ${gradients[variant]} p-8 md:p-12 text-white shadow-2xl group transition-all duration-500 hover:border-white/20`}
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-none -mr-32 -mt-32 blur-3xl transition-all duration-700 group-hover:scale-150"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-none -ml-24 -mb-24 blur-2xl transition-all duration-700 group-hover:scale-150"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                        {title}
                    </h3>
                    <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={primaryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-2 px-8 py-4 bg-white text-4u-navy rounded-none font-bold text-base shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-4u-green hover:text-white"
                        >
                            {primaryText}
                            <ArrowRight
                                size={20}
                                className="transition-transform duration-300 group-hover/btn:translate-x-1"
                            />
                        </a>

                        {secondaryLink && (
                            <a
                                href={secondaryLink}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-none font-bold text-base backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:-translate-y-1"
                            >
                                {secondaryText}
                                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InlineCTA;
