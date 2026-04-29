import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ContabilidadeDigital from "./pages/ContabilidadeDigital";
import Contabilidade from "./pages/Contabilidade";
import InteligenciaFinanceira from "./pages/InteligenciaFinanceira";

import QuemSomos from "./pages/QuemSomos";
import SolucoesTecnologicas from "./pages/SolucoesTecnologicas";
import Stories from "./pages/Stories";
import Stories2 from "./pages/Stories2";
import NotFound from "./pages/NotFound";

import { useSmoothScroll } from "./hooks/use-smooth-scroll";

const queryClient = new QueryClient();

const App = () => {
  useSmoothScroll();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories2" element={<Stories2 />} />
            <Route path="*" element={
              <div className="relative overflow-x-hidden min-h-screen">
                <ScrollToTop />
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/contabilidade-digital" element={<ContabilidadeDigital />} />
                    <Route path="/contabilidade" element={<Contabilidade />} />
                    <Route path="/inteligencia-financeira" element={<InteligenciaFinanceira />} />
                    <Route path="/solucoes-tecnologicas" element={<SolucoesTecnologicas />} />
                    <Route path="/quem-somos" element={<QuemSomos />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <FloatingButtons />
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
