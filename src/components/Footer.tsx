import { Link } from "react-router-dom";
import { Instagram, MapPin, Globe } from "lucide-react";

interface FooterProps {
  variant?: "green" | "navy" | "black" | "orange";
}

const Footer = ({ variant = "black" }: FooterProps) => {
  const bgClasses = {
    green: "bg-4u-green",
    navy: "bg-4u-navy",
    black: "bg-4u-black",
    orange: "bg-[hsl(var(--4u-orange))]",
  };

  const iconColor = "text-white";

  return (
    <footer className={`${bgClasses[variant]} text-white py-16`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              4U Connect
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Mais do que uma contabilidade. Somos inteligência financeira e
              tecnologia para o seu crescimento.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contabilidade-digital"
                  className="text-white/70 transition-colors text-sm"
                >
                  Contabilidade Digital
                </Link>
              </li>
              <li>
                <Link
                  to="/contabilidade"
                  className="text-white/70 transition-colors text-sm"
                >
                  Contabilidade
                </Link>
              </li>
              <li>
                <Link
                  to="/inteligencia-financeira"
                  className="text-white/70 transition-colors text-sm"
                >
                  Inteligência Financeira
                </Link>
              </li>

              <li>
                <Link
                  to="/solucoes-tecnologicas"
                  className="text-white/70 transition-colors text-sm"
                >
                  Soluções Tecnológicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Endereços</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin size={16} className={`mt-1 ${iconColor} flex-shrink-0`} />
                <div className="flex flex-col">
                  <span className="text-white/90 text-sm font-bold">Barueri – SP</span>
                  <span className="text-white/60 text-[10px] leading-tight mt-1">Al. Mamoré, 687 – Sala 304, Alphaville</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className={`mt-1 ${iconColor} flex-shrink-0`} />
                <div className="flex flex-col">
                  <span className="text-white/90 text-sm font-bold">Sorocaba – SP</span>
                  <span className="text-white/60 text-[10px] leading-tight mt-1">Rua Fernando Silva, 190 – Sala 308, Jardim Astro</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Globe size={16} className={iconColor} />
                <a
                  href="https://4uconnect.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors text-sm"
                >
                  4uconnect.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className={iconColor} />
                <a
                  href="https://instagram.com/4uconnectoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors text-sm"
                >
                  @4uconnectoficial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} 4U Connect. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
