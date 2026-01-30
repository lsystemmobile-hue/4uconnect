import { Check, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
  icon?: LucideIcon;
}

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: (string | PricingFeature)[];
  featured?: boolean;
  delay?: number;
  variant?: "green" | "black" | "navy";
}

const PricingCard = ({
  name,
  price,
  period = "/mês",
  features,
  featured = false,
  delay = 0,
  variant = "green",
}: PricingCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "navy":
        return {
          icon: "text-4u-navy",
          button: featured
            ? "bg-white text-4u-navy hover:shadow-xl"
            : "bg-4u-navy text-white hover:shadow-xl",
          price: featured ? "text-white" : "text-4u-navy",
          featuredBg: "bg-4u-navy text-white",
          hoverBorder: "hover:border-4u-navy/50"
        };
      case "black":
        return {
          icon: "text-4u-black",
          button: featured
            ? "bg-white text-4u-black hover:shadow-xl"
            : "bg-4u-black text-white hover:shadow-xl",
          price: featured ? "text-white" : "text-4u-black",
          featuredBg: "bg-4u-black text-white",
          hoverBorder: "hover:border-4u-black/50"
        };
      default: // green
        return {
          icon: "text-4u-green",
          button: featured
            ? "bg-white text-4u-green hover:shadow-xl"
            : "bg-4u-green text-white hover:shadow-xl",
          price: featured ? "text-white" : "text-4u-green",
          featuredBg: "bg-4u-green text-white",
          hoverBorder: "hover:border-4u-green/50"
        };
    }
  };

  const getFeaturedStyles = () => {
    switch (variant) {
      case "navy":
        return "bg-gradient-to-br from-4u-navy to-4u-navy-light shadow-navy hover:shadow-4u-navy/40";
      case "black":
        return "bg-gradient-to-br from-4u-black to-4u-navy shadow-black hover:shadow-4u-black/40";
      default: // green
        return "bg-gradient-to-br from-4u-green to-4u-green-light shadow-green hover:shadow-4u-green/40";
    }
  };

  const styles = getVariantStyles();
  const featuredBgClass = getFeaturedStyles();

  return (
    <div
      className={cn(
        "p-8 rounded-none transition-all duration-500 opacity-0 animate-fade-in group hover:-translate-y-3 relative flex flex-col h-full overflow-hidden",
        featured
          ? cn(featuredBgClass, "pricing-card-featured text-white shadow-2xl border-4 border-transparent md:scale-105 z-10")
          : cn("pricing-card bg-card border-2 border-border", styles.hoverBorder)
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Accent Bar - sempre presente */}
      <div className={cn(
        "absolute left-0 top-0 w-2 transition-all duration-500",
        featured
          ? "h-full opacity-100"
          : "h-0 group-hover:h-full opacity-100",
        variant === 'green' ? 'bg-4u-green' : variant === 'navy' ? 'bg-4u-navy' : 'bg-4u-black'
      )} />

      {/* Gradient Overlay on Hover */}
      {!featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-4u-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {featured && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-6 py-2 rounded-none uppercase tracking-wider z-20 shadow-lg ${styles.featuredBg}`}>
          ⭐ Mais Popular
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <h3
          className={`text-2xl font-bold mb-3 transition-colors duration-300 ${featured ? "text-white" : `text-foreground ${variant === 'green' ? "group-hover:text-4u-green" : variant === 'navy' ? "group-hover:text-4u-navy" : "group-hover:text-4u-black"}`
            }`}
        >
          {name}
        </h3>
        <div className="flex items-baseline gap-1 mb-8">
          <span
            className={`text-5xl font-bold transition-all duration-300 ${styles.price}`}
          >
            {price}
          </span>
          {period && (
            <span
              className={`text-base ${featured ? "text-white/70" : "text-muted-foreground"
                }`}
            >
              {period}
            </span>
          )}
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => {
            const isObject = typeof feature === 'object';
            const text = isObject ? feature.text : feature;
            const Icon = isObject && feature.icon ? feature.icon : Check;

            return (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className={cn(
                  "mt-0.5 flex-shrink-0 transition-all duration-500",
                  "group-hover:rotate-12 group-hover:scale-110" // Tilt effect on card hover
                )}>
                  <Icon
                    size={18}
                    className={cn(
                      "transition-transform duration-500",
                      featured ? "text-white" : styles.icon
                    )}
                  />
                </div>
                <span
                  className={`text-sm transition-colors duration-300 ${featured ? "text-white/90" : "text-muted-foreground group-hover/item:text-foreground"
                    }`}
                >
                  {text}
                </span>
              </li>
            );
          })}
        </ul>
        <a
          href="https://wa.me/5515998230619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20[NOME_DO_PLANO]."
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "block w-full py-5 rounded-none text-center font-bold text-base transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-xl mt-auto",
            styles.button
          )}
          onClick={(e) => {
            (e.currentTarget as HTMLAnchorElement).href = (e.currentTarget as HTMLAnchorElement).href.replace("[NOME_DO_PLANO]", encodeURIComponent(name));
          }}
        >
          Começar Agora
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
