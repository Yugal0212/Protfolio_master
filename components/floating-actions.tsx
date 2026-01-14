"use client"

import { useState, useEffect } from "react"
import { ArrowUp, Share2 } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showSocials, setShowSocials] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const whatsappNumber = siteConfig.phone.replace(/\D/g, "")
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in discussing a project with you."
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const socialLinks = [
    {
      name: "WhatsApp",
      url: whatsappUrl,
      color: "bg-[#25D366]",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      )
    },
    {
      name: "Email",
      url: `mailto:${siteConfig.email}`,
      color: "bg-[#EA4335]",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      name: "GitHub",
      url: siteConfig.socials.github,
      color: "bg-[#333]",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: siteConfig.socials.linkedin,
      color: "bg-[#0077b5]",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      )
    }
  ]

  return (
    <>
  {/* Social Menu */}
<div className="fixed bottom-6 left-6 z-40">
  {socialLinks.map((social, index) => {
    // Wider upward fan for better spacing
    const angleDeg = -95 + index * 30
    const angle = (angleDeg * Math.PI) / 180

    const radius =
      typeof window !== "undefined" && window.innerHeight < 700 ? 60 : 78

    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    return (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute p-3 ${social.color} text-white rounded-full shadow-2xl transition-all duration-500 ease-out hover:scale-125 ${
          showSocials
            ? "opacity-100 scale-100"
            : "opacity-0 scale-50 pointer-events-none"
        }`}
        style={{
          transform: showSocials
            ? `translate(${x}px, ${y}px)`
            : "translate(0,0)",
          transitionDelay: `${index * 80}ms`
        }}
        onClick={() => setShowSocials(false)}
        aria-label={social.name}
      >
        {social.icon}
      </a>
    )
  })}

  {/* Toggle Button */}
  <button
    onClick={() => setShowSocials(!showSocials)}
    className={`relative p-4 rounded-full shadow-2xl transition-all duration-500 ${
      showSocials
        ? "bg-red-600 rotate-[135deg] scale-110"
        : "bg-gradient-to-br from-primary via-accent to-secondary hover:scale-110"
    } text-white`}
    aria-label="Toggle social menu"
  >
    <Share2 className="w-6 h-6" />
  </button>
</div>



      {/* Back To Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-4 bg-gradient-to-br from-secondary via-purple-600 to-purple-700 text-white rounded-full shadow-2xl hover:scale-110 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  )
}