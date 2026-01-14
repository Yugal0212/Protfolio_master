"use client"

import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { HeroSection } from "@/components/hero-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { AboutSection } from "@/components/about-section"
import { StatsCounter } from "@/components/stats-counter"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsCounter />
      <ProjectsSection />
      <TechnologiesSection />
      <Footer />
      </div>
    </main>
  )
}
