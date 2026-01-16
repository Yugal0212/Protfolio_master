"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-center">
            {/* Text Section */}
            <div className="order-2 lg:order-1 space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed text-center">
              <p>
                I'm a <span className="text-foreground font-semibold">Full-Stack Web Developer</span> studying Computer
                Science at Darshan University. With expertise in <span className="text-primary">MERN</span> and{" "}
                <span className="text-primary">MEAN</span> stacks, I build scalable, high-performance applications that
                solve real-world problems.
              </p>

              <p>
                My passion lies in creating{" "}
                <span className="text-foreground font-semibold">elegant, performant solutions</span> that combine
                intuitive user interfaces with robust backend architecture. I thrive on challenges that push me to learn
                new technologies and refine my craft.
              </p>

              <p>
                As a <span className="text-accent">Hackathon Participant</span> at CodeArena 1.0, I developed an{" "}
                <span className="text-foreground font-semibold">AI-powered Language Learning System</span> that demonstrates 
                my ability to innovate and create practical solutions. Whether it's building ERP systems, real-time chat 
                applications, or AI-driven platforms, I approach each project with meticulous attention to detail and a 
                commitment to excellence.
              </p>
            </div>

            {/* Professional Photo Box */}
            <div className="order-1 lg:order-2 mx-auto lg:mx-0 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
              <div className="relative group w-full lg:w-[360px]">
                {/* Decorative background */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Photo container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-2xl shadow-primary/20 group-hover:border-accent/60 transition-all duration-500 bg-card">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="/images/my_image.png"
                      alt="Yugal Jakasaniya - Full Stack Developer"
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      priority
                    />
                  </div>
                  
                  {/* Professional overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4">
                    <h3 className="font-bold text-lg text-foreground">Yugal Jakasaniya</h3>
                    <p className="text-sm text-primary font-medium">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
