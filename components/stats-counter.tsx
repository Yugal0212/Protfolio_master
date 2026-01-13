"use client"

import { useEffect, useState, useRef } from "react"
import { siteConfig } from "@/lib/site-config"
import { Award, Rocket, Code } from "lucide-react"

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, isInView: boolean = false) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || hasAnimated) return
    
    setHasAnimated(true)
    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Ease out cubic for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOutCubic * (end - startValue) + startValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isInView, hasAnimated])

  return count
}

export function StatsCounter() {
  const [isInView, setIsInView] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  const yearsCount = useCountUp(siteConfig.stats?.yearsOfCoding || 3, 2000, isInView)
  const projectsCount = useCountUp(siteConfig.stats?.projectsShipped || 15, 2500, isInView)
  const techCount = useCountUp(siteConfig.stats?.technologiesUsed || 30, 2800, isInView)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <section ref={statsRef} className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            My Journey in Numbers
          </h2>
          <p className="text-muted-foreground">Delivering impactful results through dedication and expertise</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Years of Coding */}
          <div className="group relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-4 bg-primary/20 rounded-2xl group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Award className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="px-3 py-1 bg-primary/20 rounded-full text-xs font-semibold text-primary">
                  Experience
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {yearsCount}+
                </div>
                <div className="text-base font-medium text-foreground/80">Years of Coding</div>
                <div className="text-sm text-muted-foreground">Building innovative solutions</div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          {/* Projects Shipped */}
          <div className="group relative bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-8 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:scale-105 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-4 bg-accent/20 rounded-2xl group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Rocket className="w-8 h-8 text-accent group-hover:translate-y-[-4px] transition-transform duration-300" />
                </div>
                <div className="px-3 py-1 bg-accent/20 rounded-full text-xs font-semibold text-accent">
                  Portfolio
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                  {projectsCount}+
                </div>
                <div className="text-base font-medium text-foreground/80">Projects Completed</div>
                <div className="text-sm text-muted-foreground">Production-ready applications</div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          {/* Technologies */}
          <div className="group relative bg-gradient-to-br from-secondary/5 via-secondary/10 to-secondary/5 backdrop-blur-sm border-2 border-secondary/30 rounded-2xl p-8 hover:border-secondary/60 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 hover:scale-105 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-4 bg-secondary/20 rounded-2xl group-hover:bg-secondary/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Code className="w-8 h-8 text-secondary group-hover:rotate-6 transition-transform duration-300" />
                </div>
                <div className="px-3 py-1 bg-secondary/20 rounded-full text-xs font-semibold text-secondary">
                  Expertise
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
                  {techCount}+
                </div>
                <div className="text-base font-medium text-foreground/80">Technologies Mastered</div>
                <div className="text-sm text-muted-foreground">Full-stack expertise</div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
