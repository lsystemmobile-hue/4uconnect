import { useState, useEffect } from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  variant?: "green" | "navy" | "black";
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, variant = "navy", backgroundImage }: PageHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loading state when backgroundImage changes
  useEffect(() => {
    setIsLoaded(false);
  }, [backgroundImage]);

  const bgClasses = {
    green: "bg-4u-green",
    navy: "bg-4u-navy",
    black: "bg-4u-black",
  };

  const overlayClasses = {
    green: "from-4u-green/85 via-black/60 to-black/90",
    black: "from-black/85 via-black/70 to-black/95",
    navy: "from-4u-navy/85 via-black/60 to-black/90",
  };

  return (
    <section className={`relative overflow-hidden pt-32 pb-24 min-h-[400px] flex items-center ${bgClasses[variant]}`}>
      {backgroundImage && (
        <>
          <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
          {/* Color-coded gradient overlay */}
          <div className={`absolute inset-0 z-1 bg-gradient-to-br transition-all duration-700 ${overlayClasses[variant]} backdrop-blur-[1px]`} />
        </>
      )}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 opacity-0 animate-fade-in">
          {title}
        </h1>
        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
