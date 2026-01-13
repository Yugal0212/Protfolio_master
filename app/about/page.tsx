"use client"

import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site-config"
import { Home, Award, Target, Rocket, User } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10 w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 relative">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-pulse [animation-delay:0.75s]"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">About</span>
          </nav>

          <div className="text-center mb-8">
            <div className="inline-block mb-5 relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-2xl opacity-40 animate-pulse"></div>
              <User className="w-16 h-16 text-primary relative animate-bounce [animation-duration:3s]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              About Me
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Full-Stack Developer passionate about building scalable applications and solving complex problems
            </p>
          </div>
          
          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 sm:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">{siteConfig.stats?.yearsOfCoding || 3}+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Coding</div>
                </div>
              </div>
            </div>
            
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 sm:p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">{siteConfig.stats?.projectsShipped || 15}+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects</div>
                </div>
              </div>
            </div>
            
            <Link href="/skills" className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 sm:p-6 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">{siteConfig.stats?.technologiesUsed || 30}+</div>
                  <div className="text-sm text-muted-foreground mt-1">Technologies</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <EducationSection />
      <Footer />
      </div>
    </main>
  )
}
