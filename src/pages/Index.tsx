import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <CatalogSection selectedDesign={selectedDesign} onSelect={setSelectedDesign} />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQSection />
      <OrderSection selectedDesign={selectedDesign} onSelectDesign={() => {}} />
      <Footer />
    </main>
  );
};

export default Index;
