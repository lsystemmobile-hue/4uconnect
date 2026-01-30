import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface PillarCircleProps {
  title: string;
  subtitle: string;
  variant: "green" | "black" | "navy";
  to: string;
  hoverImage?: string;
  delay?: number;
}

const PillarCircle = ({
  title,
  subtitle,
  variant,
  to,
  hoverImage,
  delay = 0,
}: PillarCircleProps) => {
  const variantClasses = {
    green: "pillar-green",
    black: "pillar-black",
    navy: "pillar-navy",
  };

  return (
    <Link
      to={to}
      className="flex flex-col items-center group opacity-0 animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`pillar-circle ${variantClasses[variant]} mb-6 flex items-center justify-center p-8 transition-transform duration-300 group-hover:scale-110`}>
        {hoverImage && (
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full animate-spin-360"
            style={{
              backgroundImage: `url(${hoverImage})`,
              margin: '1.5rem'
            }}
          />
        )}
        <img
          src="/logo-branca.png"
          alt=""
          className="relative z-10 w-full h-auto object-contain transition-opacity duration-500 group-hover:opacity-0"
        />
      </div>

      <div className="text-center max-w-[250px] md:max-w-[250px]">
        <h3 className="text-xl md:text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-4u-green tracking-tight">
          {title}
        </h3>
        <p className="text-sm md:text-sm text-white/70 leading-relaxed font-medium">
          {subtitle}
        </p>
      </div>
    </Link>
  );
};

export default PillarCircle;
