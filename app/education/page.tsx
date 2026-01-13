"use client"

import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { EducationSection } from "@/components/education-section"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site-config"
import { ChevronRight, Home, GraduationCap, Award, Trophy, Calendar } from "lucide-react"
import Link from "next/link"

export default function EducationPage() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
      <Navbar />
      
      {/* Page Header with Breadcrumb */}
      <div className="pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Education</span>
          </nav>
          
          {/* Page Title */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in-up">
              Education & Achievements
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              My academic journey and notable accomplishments in tech and innovation
            </p>
          </div>
          
          {/* Quick Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{siteConfig.education.length}</div>
                  <div className="text-sm text-muted-foreground">Education Levels</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Trophy className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">{siteConfig.achievements.length}</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-secondary/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">2027</div>
                  <div className="text-sm text-muted-foreground">Expected Graduation</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured Achievement */}
          <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Latest Achievement</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {siteConfig.achievements[0]?.title} - {siteConfig.achievements[0]?.org}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <EducationSection />
      <Footer />
      </div>
    </main>
  )
}
