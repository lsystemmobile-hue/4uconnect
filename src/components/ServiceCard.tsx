import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  variant?: "green" | "navy" | "black";
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  variant = "green",
}: ServiceCardProps) => {
  const colorClasses = {
    green: "text-4u-green",
    navy: "text-4u-navy",
    black: "text-4u-black",
  };

  const bgClasses = {
    green: "bg-4u-green/10 group-hover:bg-4u-green/20",
    navy: "bg-4u-navy/10 group-hover:bg-4u-navy/20",
    black: "bg-4u-black/10 group-hover:bg-4u-black/20",
  };

  const glowClasses = {
    green: "rgba(34, 197, 94, 0.5)",
    navy: "rgba(10, 31, 64, 0.6)", // Very dark blue for navy
    black: "rgba(0, 0, 0, 0.7)",
  };

  const hoverClasses = {
    green: "group-hover:text-4u-green",
    navy: "group-hover:text-4u-navy",
    black: "group-hover:text-4u-black",
  };

  return (
    <div
      className="service-card group opacity-0 animate-fade-in"
      style={{
        animationDelay: `${delay}ms`,
        ["--icon-glow-color" as any]: glowClasses[variant]
      }}
    >
      <div className={`w-14 h-14 rounded-none flex items-center justify-center mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 ${bgClasses[variant]}`}
        style={{ boxShadow: '0 0 20px transparent', ['--tw-shadow-color' as any]: glowClasses[variant] }}
      >
        <Icon size={28} className={`${colorClasses[variant]} transition-transform duration-500 icon-modern`} />
      </div>
      <h3 className={`text-xl font-bold text-foreground mb-3 transition-colors duration-300 ${hoverClasses[variant]}`}>{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-muted-foreground/80">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
