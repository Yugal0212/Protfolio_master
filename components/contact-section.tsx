"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Mail, Linkedin, Github } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Store form reference before async operation
    const form = e.currentTarget

    try {
      const formData = new FormData(form)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage("✅ Message sent successfully! Check your email for confirmation.")
        form.reset()
        setTimeout(() => {
          setSubmitStatus("idle")
          setStatusMessage("")
        }, 5000)
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.")
      setTimeout(() => {
        setSubmitStatus("idle")
        setStatusMessage("")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 md:mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (Optional)"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && statusMessage && (
                <div className="p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 animate-fade-in shadow-lg shadow-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center animate-bounce">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-green-600 mb-2">Message Sent Successfully! 🎉</h4>
                      <p className="text-sm text-green-700 leading-relaxed">
                        Thank you for reaching out! I've received your message and sent a confirmation to your email. 
                        I'll get back to you within 24-48 hours.
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-green-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Confirmation email sent to your inbox</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {submitStatus === "error" && statusMessage && (
                <div className="p-6 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/50 animate-fade-in shadow-lg shadow-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-red-600 mb-2">Oops! Something went wrong</h4>
                      <p className="text-sm text-red-700">{statusMessage}</p>
                      <p className="text-xs text-red-600 mt-2">Please try again or contact me directly via email.</p>
                    </div>
                  </div>
                </div>
              )}
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-background/50 p-6">
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Linkedin className="text-primary" size={20} />
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Github className="text-primary" size={20} />
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Follow on GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-accent/20 bg-accent/5 p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether you're interested in discussing a project, have a question, or just want to say hello, feel
                  free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
