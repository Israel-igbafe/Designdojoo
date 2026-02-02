import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhyFailSection from "../components/WhyFailSection";
import JourneyTimeline from "../components/JourneyTimeline";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import HallOfCertificates from "../components/HallOfCertificates";
import DontJustGraduateSection from "../components/DontJustGraduateSection"; 





function LandingPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection /> 
      <WhyFailSection />
      <JourneyTimeline />
      <HallOfCertificates />
      <DontJustGraduateSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default LandingPage;
