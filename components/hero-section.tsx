"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone, Download } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedRole, setDisplayedRole] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = ["MERN Stack Developer", "MEAN Stack Developer", "UI-centric Engineer", "Full-Stack Developer"]

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 150)
    return () => clearTimeout(t)
  }, [])

  // Rotating role typewriter effect
  useEffect(() => {
    const currentRoleText = roles[currentRole]
    
    // Fast typing and deleting for dynamic feel
    const typeSpeed = isDeleting ? 30 : 60
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRoleText.length) {
          setDisplayedRole(currentRoleText.slice(0, displayedRole.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(displayedRole.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayedRole, isDeleting, currentRole])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-16 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Enhanced background with animated gradient blobs */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content with staggered animation */}
        <div
          className={`transition-all duration-700 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Hello greeting with wave animation */}
          <div className="mb-4 animate-fade-in">
            <span className="text-xl md:text-2xl text-muted-foreground inline-flex items-center gap-2">
              <span className="animate-wave inline-block">👋</span> Hello, I'm
            </span>
          </div>

          {/* Name without typewriter effect */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              {siteConfig.name}
            </span>
          </h1>

          {/* Rotating role with typewriter effect */}
          <div className="mb-6 min-h-[40px] sm:min-h-[48px]">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border border-primary/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {displayedRole}
                <span className="animate-blink">|</span>
              </span>
            </div>
          </div>

         
          {/* Description with character-by-character animation */}
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {siteConfig.summary}
          </p>

          {/* CTA Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Link
              href="/projects"
              className="group px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <a
              href="/Yugal_jakasaniya_resume (3).pdf"
              download="Yugal_Jakasaniya_Resume.pdf"
              className="group px-8 py-4 rounded-lg border-2 border-primary/50 text-foreground font-semibold hover:bg-primary/10 hover:border-primary transition-all hover:scale-105 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30"
            >
              <Download size={18} className="group-hover:animate-bounce" /> Download CV
            </a>
          </div>

          {/* Social Links with staggered animation */}
          <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-card/50 border border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-110 hover:rotate-6"
              aria-label="GitHub"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-card/50 border border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-110 hover:rotate-6"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group p-3 rounded-lg bg-card/50 border border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-110 hover:rotate-6"
              aria-label="Email"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="group p-3 rounded-lg bg-card/50 border border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-110 hover:rotate-6"
              aria-label="Phone"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
