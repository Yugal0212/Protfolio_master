"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2, ExternalLink } from "lucide-react"
import { useInView } from "react-intersection-observer"
import type { Project } from "@/lib/site-config"

interface ProjectDetailCardProps {
  project: Project
}

export function ProjectDetailCard({ project }: ProjectDetailCardProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <Link
      href={`/projects/${project.id}`}
      ref={ref}
      className={`group relative block rounded-2xl border border-border/30 bg-background/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Decorative glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

      {/* Project Visual */}
      <div className="relative w-full h-56 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 overflow-hidden">
        {project.images && project.images[0] ? (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl font-bold text-primary/20 group-hover:scale-125 transition-transform duration-700">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-3 py-1.5 text-xs rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/50 animate-pulse">
              ⭐ Featured
            </span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
        
        {/* View Icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="p-4 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
            <ExternalLink className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium hover:bg-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent border border-accent/20 font-medium">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-primary font-semibold mb-2 line-clamp-1">{project.tagline}</p>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{project.description}</p>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-md bg-secondary/10 text-secondary border border-secondary/20 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-border/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Code2 className="w-4 h-4" />
              <span>{project.tech.length} Technologies</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm group-hover:bg-primary group-hover:text-white transition-all">
              View Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent opacity-20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/20 via-accent/20 to-transparent opacity-20 rounded-tr-full"></div>
    </Link>
  )
}
