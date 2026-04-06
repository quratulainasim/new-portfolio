import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
