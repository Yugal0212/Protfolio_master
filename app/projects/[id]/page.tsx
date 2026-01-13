import { siteConfig } from "@/lib/site-config"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ArrowLeft, ExternalLink, Github, Calendar, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = siteConfig.projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{project.title}</span>
          </nav>

          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>{project.tech.length} Technologies</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-all hover:scale-105 font-semibold shadow-lg shadow-primary/30"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/40 text-foreground rounded-lg hover:bg-primary/10 transition-colors font-semibold"
              >
                <Github className="w-5 h-5" />
                View Source
              </a>
            </div>
          </div>

          {/* Project Images Gallery */}
          <div className="mb-12">
            {project.images && project.images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Main large image */}
                <div className="md:col-span-2 rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 aspect-video relative">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} - Main`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Additional images */}
                {project.images.slice(1).map((image, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 aspect-video relative"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - ${idx + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 aspect-video flex items-center justify-center">
                <div className="text-9xl font-bold text-primary/20">
                  {project.title.charAt(0)}
                </div>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">About This Project</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.highlights && project.highlights.length > 0 ? (
                    project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Modern and responsive design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Optimized performance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Clean and maintainable code</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Technical Highlights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This project demonstrates advanced implementation of {project.tech[0]} along with {project.tech[1]} 
                  to create a powerful and scalable solution. The architecture focuses on performance, maintainability, 
                  and user experience.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Preview Image */}
              {project.images && project.images[0] && (
                <div className="rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="relative aspect-video">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-muted/80 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Project Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <span className="ml-2 text-foreground font-medium">
                      {project.featured ? "Featured" : "Active"}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <span className="ml-2 text-foreground font-medium">
                      {project.tags[0]}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Year:</span>
                    <span className="ml-2 text-foreground font-medium">2024</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="text-xl font-bold mb-3">Interested?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check out the live demo or explore the source code to see how it works!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
                >
                  Get in Touch
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">More Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {siteConfig.projects
                .filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {relatedProject.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {relatedProject.tagline}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      View Project
                      <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
