import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AccreditationsSection } from "@/components/AccreditationsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <BeforeAfterGallery />
      <TeamSection />
      <TestimonialsSection />
      <AccreditationsSection />
    </>
  );
}
