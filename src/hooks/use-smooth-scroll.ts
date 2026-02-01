import { useEffect } from "react";

export const useSmoothScroll = () => {
    useEffect(() => {
        const smoothScrollTo = (targetY: number, duration: number = 800) => {
            const startY = window.pageYOffset;
            const distance = targetY - startY;
            const startTime = performance.now();

            // Desabilita pointer-events durante scroll
            document.body.style.pointerEvents = 'none';

            const easeInOutCubic = (t: number): number => {
                return t < 0.5
                    ? 4 * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
            };

            const scroll = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = easeInOutCubic(progress);

                window.scrollTo(0, startY + distance * easeProgress);

                if (progress < 1) {
                    requestAnimationFrame(scroll);
                } else {
                    // Re-habilita pointer-events após scroll completo
                    setTimeout(() => {
                        document.body.style.pointerEvents = '';
                    }, 100);
                }
            };

            requestAnimationFrame(scroll);
        };

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");

            if (anchor && anchor.hash && anchor.hash.startsWith("#") && anchor.origin === window.location.origin) {
                e.preventDefault();

                const id = anchor.hash.substring(1);
                const element = document.getElementById(id);

                if (element) {
                    const headerOffset = 110;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

                    smoothScrollTo(offsetPosition);

                    // Atualiza a URL
                    window.history.pushState(null, "", anchor.hash);
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
        };
    }, []);
};
