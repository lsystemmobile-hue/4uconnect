import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Aguarda a página renderizar antes de rolar para a âncora
            const id = hash.substring(1);
            const attempt = (retries: number) => {
                const el = document.getElementById(id);
                if (el) {
                    const headerOffset = 110;
                    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                    window.scrollTo({ top, behavior: "smooth" });
                } else if (retries > 0) {
                    setTimeout(() => attempt(retries - 1), 100);
                }
            };
            setTimeout(() => attempt(5), 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
