import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhyFailSection from "../components/WhyFailSection";
import JourneyTimeline from "../components/JourneyTimeline";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyFailSection />
      <JourneyTimeline />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default LandingPage;
