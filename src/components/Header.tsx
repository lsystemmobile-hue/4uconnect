import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Cpu, Calculator, TrendingUp, Users, Zap } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Contabilidade Digital", path: "/contabilidade-digital", icon: Cpu },
    { name: "Contabilidade", path: "/contabilidade", icon: Calculator },
    { name: "Inteligência Financeira", path: "/inteligencia-financeira", icon: TrendingUp },
    { name: "Soluções Tecnológicas", path: "/solucoes-tecnologicas", icon: Zap },
    { name: "Quem somos", path: "/quem-somos", icon: Users },
  ];

  const getHeaderBg = () => {
    switch (location.pathname) {
      case "/":
        return "bg-black/90";
      case "/contabilidade-digital":
        return "bg-4u-green/90";
      case "/contabilidade":
        return "bg-black/90";
      case "/inteligencia-financeira":
        return "bg-4u-navy/90";

      case "/solucoes-tecnologicas":
        return "bg-[hsl(var(--4u-orange))]/90";
      case "/quem-somos":
        return "bg-4u-navy/90";
      default:
        return "bg-black/90";
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 backdrop-blur-xl border-b border-white/10 ${getHeaderBg()}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/logo-branca.png"
              alt="4U Connect - Inteligência Financeira e Contabilidade"
              className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${isActive(item.path)
                  ? "text-white after:scale-x-100"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                <item.icon size={16} />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 relative z-[1001] bg-white/5 rounded-lg active:scale-95 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 border-t border-white/10 transition-all duration-300 overflow-hidden shadow-xl backdrop-blur-xl ${isOpen ? "max-h-[80vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          } ${getHeaderBg()}`}
      >
        <nav className="relative z-10 container mx-auto px-4 py-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 text-lg font-medium py-3 px-4 rounded-xl transition-all duration-300 ${isActive(item.path)
                ? "bg-white/10 text-white"
                : "text-white/90 hover:bg-white/5"
                }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header >
  );
};

export default Header;
