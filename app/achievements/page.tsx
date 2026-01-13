"use client"

import { useInView } from "react-intersection-observer"
import { Award, Trophy, Star, Medal, Target, Home } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"

export default function AchievementsPage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const achievementIcons = [Trophy, Award, Medal, Star, Target]

  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 w-full overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen w-full">
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
            <span className="text-foreground">Achievements</span>
          </nav>

          <div className="text-center mb-8">
            <div className="inline-block mb-5 relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary blur-2xl opacity-40 animate-pulse"></div>
              <Trophy className="w-16 h-16 text-accent relative animate-bounce [animation-duration:3s]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Achievements & Awards
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Milestones, recognitions, and accomplishments throughout my journey
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {siteConfig.achievements.map((achievement, idx) => {
              const Icon = achievementIcons[idx % achievementIcons.length]
              const colors = [
                { 
                  gradient: "from-accent to-pink-600",
                  border: "border-accent/30",
                  text: "text-accent",
                  bg: "bg-accent/10",
                  glow: "shadow-accent/20"
                },
                { 
                  gradient: "from-primary to-cyan-600",
                  border: "border-primary/30",
                  text: "text-primary",
                  bg: "bg-primary/10",
                  glow: "shadow-primary/20"
                },
                { 
                  gradient: "from-secondary to-purple-600",
                  border: "border-secondary/30",
                  text: "text-secondary",
                  bg: "bg-secondary/10",
                  glow: "shadow-secondary/20"
                },
                { 
                  gradient: "from-yellow-500 to-orange-600",
                  border: "border-yellow-500/30",
                  text: "text-yellow-500",
                  bg: "bg-yellow-500/10",
                  glow: "shadow-yellow-500/20"
                },
                { 
                  gradient: "from-emerald-500 to-teal-600",
                  border: "border-emerald-500/30",
                  text: "text-emerald-500",
                  bg: "bg-emerald-500/10",
                  glow: "shadow-emerald-500/20"
                }
              ]
              const color = colors[idx % colors.length]

              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl border ${color.border} bg-background/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                    inView ? 'animate-[fadeInUp_0.6s_ease-out_forwards]' : 'opacity-0'
                  }`}
                  style={inView ? { animationDelay: `${idx * 0.15}s` } : {}}
                >
                  {/* Decorative glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`}></div>

                  {/* Icon */}
                  <div className={`${color.bg} ${color.border} border-2 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${color.text}`} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:${color.text} transition-colors">
                        {achievement.title}
                      </h3>
                      {achievement.badge && (
                        <span className={`px-3 py-1 rounded-full ${color.bg} ${color.text} text-xs font-semibold border ${color.border} whitespace-nowrap`}>
                          {achievement.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground mb-4 font-semibold">{achievement.org}</p>
                    {achievement.description && (
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {achievement.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      <div className={`inline-block px-4 py-2 rounded-lg ${color.bg} ${color.text} text-sm font-semibold border ${color.border}`}>
                        📅 {achievement.date}
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${color.gradient} opacity-10 rounded-bl-full`}></div>
                  <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${color.gradient} opacity-10 rounded-tr-full`}></div>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">More To Come!</h3>
              <p className="text-muted-foreground mb-6 max-w-xl">
                I'm constantly pushing boundaries and taking on new challenges. Stay tuned for more achievements!
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-all hover:scale-105"
              >
                <Star className="w-5 h-5" />
                View My Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
    </>
  )
}
