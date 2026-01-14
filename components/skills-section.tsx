"use client"

import { useInView } from "react-intersection-observer"
import { siteConfig } from "@/lib/site-config"

// Technology data with icons and details
const technologiesData = {
  languages: [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
      level: "Advanced",
      description: "Core language for web development"
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
      level: "Intermediate",
      description: "Type-safe JavaScript superset"
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
      level: "Intermediate",
      description: "AI/ML and backend development"
    },
    {
      name: "C Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      color: "#A8B9CC",
      level: "Intermediate",
      description: "System programming"
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      color: "#239120",
      level: "Intermediate",
      description: ".NET development"
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#007396",
      level: "Intermediate",
      description: "Enterprise applications"
    },
    
  ],
  frontend: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
      level: "Advanced",
      description: "Modern UI library"
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000",
      level: "Advanced",
      description: "React framework for production"
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
      color: "#DD0031",
      level: "Intermediate",
      description: "Enterprise web applications"
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
      level: "Advanced",
      description: "Markup language"
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
      level: "Advanced",
      description: "Styling and layouts"
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "#06B6D4",
      level: "Advanced",
      description: "Utility-first CSS framework"
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      color: "#7952B3",
      level: "Intermediate",
      description: "Responsive UI framework"
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      color: "#764ABC",
      level: "Intermediate",
      description: "State management"
    }
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
      level: "Advanced",
      description: "JavaScript runtime"
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#000000",
      level: "Advanced",
      description: "Fast web framework"
    },
    {
      name: "Nest.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      color: "#E0234E",
      level: "Intermediate",
      description: "Progressive Node.js framework"
    },
    {
      name: "REST API",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      color: "#009688",
      level: "Intermediate",
      description: "RESTful web services"
    }
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
      level: "Advanced",
      description: "NoSQL database"
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "#336791",
      level: "Intermediate",
      description: "Relational database"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
      level: "Intermediate",
      description: "Popular SQL database"
    },
    
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
      level: "Advanced",
      description: "Version control system"
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
      level: "Advanced",
      description: "Code hosting platform"
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      color: "#007ACC",
      level: "Advanced",
      description: "Code editor"
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
      level: "Beginner",
      description: "Containerization platform"
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      color: "#000000",
      level: "Advanced",
      description: "Deployment platform"
    },
    {
      name: "Netlify",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      color: "#00C7B7",
      level: "Advanced",
      description: "Web hosting"
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      color: "#FF6C37",
      level: "Advanced",
      description: "API testing"
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "#F24E1E",
      level: "Intermediate",
      description: "Design tool"
    }
  ],
  other: [
    {
      name: "Socket.io",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      color: "#010101",
      level: "Intermediate",
      description: "Real-time communication"
    },
    {
      name: "JWT",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#000000",
      level: "Advanced",
      description: "Authentication tokens"
    },
    {
      name: "Webpack",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      color: "#8DD6F9",
      level: "Intermediate",
      description: "Module bundler"
    },
    {
      name: "NPM",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      color: "#CB3837",
      level: "Advanced",
      description: "Package manager"
    }
  ]
}

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const categories = [
    { key: "languages", title: "Languages", gradient: "from-yellow-500 to-orange-500" },
    { key: "frontend", title: "Frontend", gradient: "from-cyan-500 to-blue-500" },
    { key: "backend", title: "Backend", gradient: "from-green-500 to-emerald-500" },
    { key: "databases", title: "Databases", gradient: "from-purple-500 to-pink-500" },
    { key: "tools", title: "Tools & Platforms", gradient: "from-red-500 to-rose-500" },
    { key: "other", title: "Other Technologies", gradient: "from-indigo-500 to-violet-500" }
  ]

  return (
    <section id="skills" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
         

          {/* Technology Categories */}
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {categories.map((category, categoryIdx) => {
              const techs = technologiesData[category.key as keyof typeof technologiesData]
              
              return (
                <div
                  key={category.key}
                  className={`transition-all duration-1000 delay-${categoryIdx * 100}`}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(30px)",
                    transitionDelay: `${categoryIdx * 0.2}s`
                  }}
                >
                  {/* Category Header */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent inline-block`}>
                      {category.title}
                    </h3>
                    <div className={`h-1 w-24 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                  </div>

                  {/* Technology Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                    {techs.map((tech, techIdx) => (
                      <div
                        key={tech.name}
                        className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-5 md:p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                        style={{
                          animation: inView ? `fadeInUp 0.5s ease-out ${(categoryIdx * 0.2) + (techIdx * 0.05)}s` : "none",
                          opacity: inView ? 1 : 0
                        }}
                      >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-secondary/10 transition-all duration-500"></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                          {/* Icon Container */}
                          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-background/80 rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <img 
                              src={tech.icon} 
                              alt={tech.name}
                              className="w-full h-full object-contain"
                              style={{ 
                                filter: 'brightness(1) contrast(1)',
                              }}
                            />
                          </div>
                          
                          {/* Technology Name */}
                          <div>
                            <h4 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                              {tech.name}
                            </h4>
                            
                            {/* Skill Level Badge */}
                            <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                              tech.level === "Advanced" ? "bg-primary/20 text-primary" :
                              tech.level === "Intermediate" ? "bg-accent/20 text-accent" :
                              "bg-secondary/20 text-secondary"
                            }`}>
                              {tech.level}
                            </span>
                          </div>
                          
                          {/* Description - Shows on hover */}
                          <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-16 left-0 right-0 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-2 shadow-xl z-20">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {Object.values(technologiesData).flat().length}+
              </div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">
                {Object.values(technologiesData).flat().filter(t => t.level === "Advanced").length}+
              </div>
              <div className="text-muted-foreground">Advanced Level Skills</div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">3+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}