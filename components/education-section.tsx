"use client"

import { useInView } from "react-intersection-observer"
import { siteConfig } from "@/lib/site-config"
import { BookOpen, GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function EducationSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-xs sm:text-sm font-semibold text-primary mb-4 sm:mb-6 animate-fade-in">
              <GraduationCap className="w-4 h-4" />
              Academic Journey
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Building a strong foundation in computer science and technology
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Animated Timeline Line */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary via-accent to-secondary overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse"></div>
            </div>

            <div className="space-y-10 sm:space-y-12 md:space-y-16">
              {siteConfig.education.map((edu, idx) => (
                <div
                  key={edu.school}
                  className={`relative ${idx % 2 === 0 ? 'md:pr-[calc(50%+3rem)] md:text-right' : 'md:pl-[calc(50%+3rem)]'}`}
                  style={{
                    animation: inView ? `fadeInUp 0.8s ease-out ${idx * 0.3}s forwards` : "none",
                    opacity: inView ? 1 : 0,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 w-12 h-12 rounded-full bg-gradient-to-br ${idx % 2 === 0 ? 'from-primary to-cyan-500' : 'from-accent to-pink-500'} flex items-center justify-center border-4 border-background shadow-2xl ${idx % 2 === 0 ? 'shadow-primary/50' : 'shadow-accent/50'} group-hover:scale-125 transition-all duration-300 z-10`}>
                    <BookOpen className="w-6 h-6 text-white animate-pulse" />
                  </div>

                  {/* Education Card */}
                  <div className="group ml-20 md:ml-0">
                    <div className={`relative p-8 rounded-2xl border-2 ${idx % 2 === 0 ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-cyan-500/5' : 'border-accent/30 bg-gradient-to-br from-accent/5 to-pink-500/5'} backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl ${idx % 2 === 0 ? 'hover:shadow-primary/20 hover:border-primary/60' : 'hover:shadow-accent/20 hover:border-accent/60'} overflow-hidden`}>
                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${idx % 2 === 0 ? 'from-primary/0 to-primary/20' : 'from-accent/0 to-accent/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      {/* Animated Corner Decorations */}
                      <div className={`absolute -top-10 -right-10 w-32 h-32 ${idx % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
                      
                      <div className="relative z-10">
                        {/* Program Name */}
                        <h3 className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${idx % 2 === 0 ? 'from-primary to-cyan-500' : 'from-accent to-pink-500'} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                          {edu.program}
                        </h3>

                        {/* School Name with Icon */}
                        <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <div className={`p-2 rounded-lg ${idx % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'}`}>
                            <GraduationCap className={`w-5 h-5 ${idx % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                          </div>
                          <p className={`text-xl font-semibold ${idx % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                            {edu.school}
                          </p>
                        </div>

                        {/* Details Grid */}
                        <div className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} gap-4 mb-4`}>
                          {/* Period */}
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${idx % 2 === 0 ? 'bg-primary/10 border border-primary/30' : 'bg-accent/10 border border-accent/30'}`}>
                            <Calendar className={`w-4 h-4 ${idx % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                            <span className={`text-sm font-semibold ${idx % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                              {edu.period}
                            </span>
                          </div>

                          {/* Location */}
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${idx % 2 === 0 ? 'bg-primary/10 border border-primary/30' : 'bg-accent/10 border border-accent/30'}`}>
                            <MapPin className={`w-4 h-4 ${idx % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                            <span className={`text-sm font-semibold ${idx % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                              {edu.location}
                            </span>
                          </div>
                        </div>

                        {/* Achievement Badge (if applicable) */}
                        {edu.period.includes('%') && (
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30`}>
                            <Award className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-semibold text-yellow-500">
                              Outstanding Achievement
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Gradient Line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${idx % 2 === 0 ? 'from-transparent via-primary to-transparent' : 'from-transparent via-accent to-transparent'} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">2023-2027</div>
              <div className="text-sm text-muted-foreground">Current Studies</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all hover:scale-105">
              <div className="text-4xl font-bold text-accent mb-2">B.Sc. CS</div>
              <div className="text-sm text-muted-foreground">Honors Degree</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105">
              <div className="text-4xl font-bold text-secondary mb-2">96.89%</div>
              <div className="text-sm text-muted-foreground">HSC Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
