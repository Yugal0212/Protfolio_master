"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Define colorful circles data - reduced and smaller
  const circles = [
    { color: '#ec4899', x: 15, y: 25, size: 12 },
    { color: '#00d9ff', x: 45, y: 15, size: 14 },
    { color: '#7c3aed', x: 85, y: 20, size: 13 },
    { color: '#fbbf24', x: 25, y: 80, size: 11 },
    { color: '#f43f5e', x: 88, y: 75, size: 12 },
    { color: '#10b981', x: 60, y: 50, size: 13 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Colorful circles with floating animation */}
      {circles.map((circle, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            backgroundColor: circle.color,
            opacity: 0.4,
            boxShadow: `0 0 ${circle.size * 2}px ${circle.color}`,
            filter: 'blur(1px)',
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${10 + (i % 3)}s`,
          }}
        />
      ))}
      
      {/* Tiny star particles - very small and limited */}
      {[...Array(15)].map((_, i) => {
        const colors = ['#ec4899', '#00d9ff', '#7c3aed', '#fbbf24', '#f43f5e', '#10b981']
        const color = colors[i % colors.length]
        return (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${(i * 17 + 8) % 90}%`,
              top: `${(i * 13 + 5) % 85}%`,
              width: '2px',
              height: '2px',
              backgroundColor: color,
              opacity: 0.5,
              boxShadow: `0 0 3px ${color}`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 2)}s`,
            }}
          />
        )
      })}
    </div>
  )
}
