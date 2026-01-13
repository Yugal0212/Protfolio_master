"use client"

import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site-config"
import { Home, Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10 w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 relative">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse [animation-delay:0.75s]"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Contact</span>
          </nav>

          <div className="text-center mb-8">
            <div className="inline-block mb-5 relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent blur-2xl opacity-40 animate-pulse"></div>
              <MessageSquare className="w-16 h-16 text-secondary relative animate-bounce [animation-duration:3s]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              I'm always interested in hearing about new projects, opportunities, and collaborations
            </p>
          </div>
          
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium text-foreground truncate">{siteConfig.email}</div>
                </div>
              </div>
            </a>
            
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-accent/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <div className="text-sm font-medium text-foreground">{siteConfig.phone}</div>
                </div>
              </div>
            </a>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-sm font-medium text-foreground">{siteConfig.location}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="font-medium">Connect with me on social media</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
      </div>
    </main>
  )
}
