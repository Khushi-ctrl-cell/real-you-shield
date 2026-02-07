import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrustScoreSection from "@/components/TrustScoreSection";
import UseCasesSection from "@/components/UseCasesSection";
import MagicMomentSection from "@/components/MagicMomentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TrustScoreSection />
      <UseCasesSection />
      <MagicMomentSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
