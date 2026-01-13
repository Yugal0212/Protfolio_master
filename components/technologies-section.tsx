"use client"

import { useInView } from "react-intersection-observer"

export function TechnologiesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const technologies = [
    { name: "TypeScript", icon: "TS", color: "bg-blue-500" },
    { name: "Next.js", icon: "▲", color: "bg-gray-800" },
    { name: "Angular", icon: "A", color: "bg-red-600" },
    { name: "Express.js", icon: "Ex", color: "bg-green-600" },
    { name: "Nest.js", icon: "N", color: "bg-red-500" },
    { name: "Vercel", icon: "▲", color: "bg-black" },
    { name: "GitHub", icon: "⚡", color: "bg-purple-600" },
    { name: "Tailwind", icon: "T", color: "bg-cyan-500" },
    { name: "React", icon: "⚛", color: "bg-cyan-400" },
    { name: "Node.js", icon: "N", color: "bg-green-500" },
    { name: "MongoDB", icon: "M", color: "bg-green-600" },
    { name: "PostgreSQL", icon: "🐘", color: "bg-blue-600" },
  ]

  return (
    <section ref={ref} className="py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies I Work With</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Horizontal scrolling container */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll-x hover:pause">
              {/* Duplicate array for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm whitespace-nowrap flex-shrink-0 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <div className={`w-6 h-6 ${tech.color} rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
