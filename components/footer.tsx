import { siteConfig } from "@/lib/site-config"
import { Github, Linkedin, Mail, MapPin, Phone, Code2, Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-card/50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">{siteConfig.name}</h3>
                <p className="text-sm text-primary">{siteConfig.role}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/achievements", label: "Achievements" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Call
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Open for opportunities</p>
              <Link
                href="/contact"
                className="text-sm font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                Let's work together
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} {siteConfig.name}</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">All rights reserved</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
              <span>using Next.js & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
