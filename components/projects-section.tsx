"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { siteConfig } from "@/lib/site-config"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const featured = siteConfig.projects.filter((p) => p.featured).slice(0, 3)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featured.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length)
  }

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, featured.length])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section id="projects" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <span className="text-sm text-primary font-medium">Portfolio Showcase</span>
              {isAutoPlaying && (
                <span className="flex items-center gap-1.5 text-xs text-primary/70">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Auto-playing
                </span>
              )}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my latest work showcasing innovative solutions
            </p>
          </div>

          {/* Project Slider */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Slider Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {featured.map((project, index) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="w-full flex-shrink-0"
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 mx-1 sm:mx-2">
                      <div className="flex flex-col md:flex-row min-h-[280px] sm:min-h-[350px] md:min-h-[400px]">
                        {/* Project Visual */}
                        <div className="w-full md:w-2/5 h-[180px] sm:h-[200px] md:h-auto relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20">
                          {project.images && project.images[0] ? (
                            <Image
                              src={project.images[0]}
                              alt={project.title}
                              fill
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-9xl font-bold text-primary/20 group-hover:scale-110 transition-transform duration-500">
                                {project.title.charAt(0)}
                              </div>
                            </div>
                          )}
                          <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1.5 text-xs rounded-full bg-primary/90 backdrop-blur-sm text-white font-medium border border-primary/30">
                              {index + 1} / {featured.length}
                            </span>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="md:w-3/5 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            
                            <p className="text-base sm:text-lg text-primary font-medium mb-3 sm:mb-4">{project.tagline}</p>
                            
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                              {project.tech.slice(0, 5).map((tech) => (
                                <span
                                  key={tech}
                                  className="text-sm text-foreground/70 px-3 py-1.5 rounded-lg bg-muted/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                            View Project Details
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => {
                prevSlide()
                setIsAutoPlaying(false)
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/10 transition-all shadow-lg"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={() => {
                nextSlide()
                setIsAutoPlaying(false)
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/10 transition-all shadow-lg"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {featured.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`relative h-2 rounded-full transition-all overflow-hidden ${
                    index === currentIndex
                      ? "w-8 bg-primary/20"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                >
                  {index === currentIndex && isAutoPlaying && (
                    <div 
                      className="absolute inset-0 bg-primary rounded-full origin-left animate-[progress_5s_linear_forwards]"
                      key={currentIndex}
                    />
                  )}
                  {index === currentIndex && !isAutoPlaying && (
                    <div className="absolute inset-0 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-accent to-primary text-white rounded-lg hover:opacity-90 transition-all hover:scale-105 font-semibold text-lg shadow-lg shadow-primary/30"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
