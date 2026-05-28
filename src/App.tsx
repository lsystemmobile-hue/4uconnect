import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";
import { useSmoothScroll } from "./hooks/use-smooth-scroll";

// Lazy loading: cada página só é baixada quando o usuário navegar até ela
const Index                 = lazy(() => import("./pages/Index"));
const ContabilidadeDigital  = lazy(() => import("./pages/ContabilidadeDigital"));
const Contabilidade         = lazy(() => import("./pages/Contabilidade"));
const InteligenciaFinanceira = lazy(() => import("./pages/InteligenciaFinanceira"));
const SolucoesTecnologicas  = lazy(() => import("./pages/SolucoesTecnologicas"));
const QuemSomos             = lazy(() => import("./pages/QuemSomos"));
const NotFound              = lazy(() => import("./pages/NotFound"));
const PresentationMode      = lazy(() => import("./components/PresentationMode"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-4u-green/30 border-t-4u-green rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  useSmoothScroll();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative overflow-x-hidden min-h-screen">
            <ScrollToTop />
            <Header />
            <main>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/contabilidade-digital" element={<ContabilidadeDigital />} />
                  <Route path="/contabilidade" element={<Contabilidade />} />
                  <Route path="/inteligencia-financeira" element={<InteligenciaFinanceira />} />
                  <Route path="/solucoes-tecnologicas" element={<SolucoesTecnologicas />} />
                  <Route path="/quem-somos" element={<QuemSomos />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <FloatingButtons />
            <Suspense fallback={null}>
              <PresentationMode />
            </Suspense>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
