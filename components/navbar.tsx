"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") !== "light"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    localStorage.setItem("theme", newDark ? "dark" : "light")
    if (newDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    // Dispatch custom event for theme change
    window.dispatchEvent(new Event("theme-change"))
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-background/70 border-b border-border/40 ${scrolled ? "bg-background/80 shadow-lg" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="relative">
              <svg className="w-8 h-8 text-primary group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link 
              href="/" 
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === "/" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === "/about" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="/skills"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === "/skills" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname.startsWith("/projects") 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/achievements"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === "/achievements" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Achievements
            </Link>
            <Link
              href="/contact"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === "/contact" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-all duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up backdrop-blur-xl bg-background/50 rounded-lg mt-2 p-4">
            <Link 
              href="/" 
              className={`block text-base font-medium transition-colors px-3 py-3 rounded-lg ${
                pathname === "/" 
                  ? "text-primary font-semibold bg-primary/10" 
                  : "text-foreground/80 hover:text-primary hover:bg-primary/10"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block text-base font-medium transition-colors px-3 py-3 rounded-lg ${
                pathname === "/about" 
                  ? "text-primary font-semibold bg-primary/10" 
                  : "text-foreground/80 hover:text-primary hover:bg-primary/10"
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/skills"
              className={`block text-base font-medium transition-colors px-3 py-3 rounded-lg ${
                pathname === "/skills" 
                  ? "text-primary font-semibold bg-primary/10" 
                  : "text-foreground/80 hover:text-primary hover:bg-primary/10"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className={`block text-base font-medium transition-colors px-3 py-3 rounded-lg ${
                pathname.startsWith("/projects") 
                  ? "text-primary font-semibold bg-primary/10" 
                  : "text-foreground/80 hover:text-primary hover:bg-primary/10"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/achievements"
              className={`block text-base font-medium transition-colors px-3 py-3 rounded-lg ${
                pathname === "/achievements" 
                  ? "text-primary font-semibold bg-primary/10" 
                  : "text-foreground/80 hover:text-primary hover:bg-primary/10"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Achievements
            </Link>
            <Link
              href="/contact"
              className={`block text-base font-medium transition-colors px-3 py-3 rounded-lg ${
                pathname === "/contact" 
                  ? "text-primary font-semibold bg-primary/10" 
                  : "text-foreground/80 hover:text-primary hover:bg-primary/10"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
