"use client";
import { Navbar } from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/educationSection";
import ContactSection from "@/components/contact";
import FooterSection from "@/components/Footer";
import ExperienceSection from "@/components/Experience";
import ProjectsSection from "@/components/projects";

export default function Home() {
  // Enhanced animations
 const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};


  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/95">
      <Navbar />

      {/* Hero Section - Enhanced with better animations and gradients */}
      <HeroSection />

      {/* About Section - Enhanced with better background and animations */}
        <AboutSection/>

      {/* Projects Section - Enhanced with better spacing and animations */}
     <ProjectsSection/>

      {/* Experience Section - Enhanced with better timeline styling */}
     <ExperienceSection/>

      {/* Education Section - Enhanced with better design elements */}
     <EducationSection/>

      {/* Contact Section with enhanced animations and gradients */}
     <ContactSection/>

      {/* Enhanced Footer with better spacing and gradients */}
    <FooterSection/>
    </main>
  );
}
