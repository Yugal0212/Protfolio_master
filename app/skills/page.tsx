"use client"

import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site-config"
import { ChevronRight, Home, Code, Database, Wrench, Layers, Terminal, Zap } from "lucide-react"
import Link from "next/link"

export default function SkillsPage() {
  const totalSkills = 30 // Updated count based on new skills section
  
  const categoryIcons = {
    languages: Terminal,
    frontend: Layers,
    backend: Code,
    databases: Database,
    tools: Wrench,
  }

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
      <Navbar />
      
      {/* Page Header with Breadcrumb */}
      <div className="pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Skills</span>
          </nav>
          
          {/* Page Title */}
          <div className="space-y-4 text-center">
            <div className="inline-block mb-4 relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-2xl opacity-50 animate-pulse"></div>
              <Zap className="w-16 h-16 text-primary relative" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Skills & Technologies
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              A comprehensive showcase of {totalSkills}+ technologies I've mastered across the full development stack
            </p>
          </div>
          
          {/* Tech Stack Highlight */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  MERN Stack Specialist
                </span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold text-foreground">MongoDB</span> • 
                <span className="font-semibold text-foreground"> Express.js</span> • 
                <span className="font-semibold text-foreground"> React</span> • 
                <span className="font-semibold text-foreground"> Node.js</span>
                <br />
                Full-stack expertise in modern JavaScript ecosystem
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-xl hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                <span className="bg-gradient-to-r from-accent to-pink-400 bg-clip-text text-transparent">
                  MEAN Stack Developer
                </span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold text-foreground">MongoDB</span> • 
                <span className="font-semibold text-foreground"> Express.js</span> • 
                <span className="font-semibold text-foreground"> Angular</span> • 
                <span className="font-semibold text-foreground"> Node.js</span>
                <br />
                Enterprise-grade application development
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <SkillsSection />
      <Footer />
      </div>
    </main>
  )
}
