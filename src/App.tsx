import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import FeatureDetail from "./pages/FeatureDetail";
import HowItWorks from "./pages/HowItWorks";
import UseCases from "./pages/UseCases";
import UseCaseDetail from "./pages/UseCaseDetail";
import Demo from "./pages/Demo";
import Pricing from "./pages/Pricing";
import Security from "./pages/Security";
import Developers from "./pages/Developers";
import CaseStudies from "./pages/CaseStudies";
import Investors from "./pages/Investors";
import Team from "./pages/Team";
import Roadmap from "./pages/Roadmap";
import Ethics from "./pages/Ethics";
import Transparency from "./pages/Transparency";
import Moat from "./pages/Moat";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/:slug" element={<FeatureDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/use-cases/:slug" element={<UseCaseDetail />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/security" element={<Security />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/why-different" element={<Moat />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
