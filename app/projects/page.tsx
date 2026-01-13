"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { ProjectsSection } from "@/components/projects-section"
import { ProjectDetailCard } from "@/components/project-detail-card"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site-config"
import { Home, Code2, Filter, Grid3x3, LayoutList, FolderGit2 } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  
  // Get all unique tags
  const allTags = ["All", ...new Set(siteConfig.projects.flatMap(p => p.tags))]
  
  // Filter projects
  const filteredProjects = selectedTag === "All" 
    ? siteConfig.projects 
    : siteConfig.projects.filter(p => p.tags.includes(selectedTag))

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10 w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 relative">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]"></div>
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
            <span className="text-foreground">Projects</span>
          </nav>

          <div className="text-center mb-8">
            <div className="inline-block mb-5 relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary blur-2xl opacity-40 animate-pulse"></div>
              <FolderGit2 className="w-16 h-16 text-accent relative animate-bounce [animation-duration:3s]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              My Projects
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              A showcase of {siteConfig.projects.length} projects across different technologies and domains
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters Section */}
      <div className="px-4 sm:px-6 py-8 sm:py-10 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {/* Filter Tags */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-primary" />
                <span className="text-base font-semibold text-foreground">Filter by Technology:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedTag === tag
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                        : "bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Project Count */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border/50">
              <Code2 className="w-4 h-4" />
              <span>Showing <strong className="text-primary">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" : "space-y-4"}>
            {filteredProjects.map((project) => (
              <ProjectDetailCard key={project.id} project={project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Code2 className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">No projects found for this filter</p>
              <button
                onClick={() => setSelectedTag("All")}
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />      </div>    </main>
  )
}
