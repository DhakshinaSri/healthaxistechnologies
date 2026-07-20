import HeroSection from "@/components/home-components/HeroSection";
import ServiceSection from "@/components/home-components/ServiceSection";
import CTASection from "@/components/home-components/CTASection";

export default function Home() {
  return (
    <div className="pt-12">
      <HeroSection />
      <ServiceSection />
      <CTASection />
    </div>
  );
}