"use client"

import { useEffect, useRef, useState } from "react"

export function CursorSpark() {
  const [isReady, setIsReady] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Array<{
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
    size: number
  }>>([])
  const animationFrameRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  // Defer heavy canvas work and skip entirely for bots/crawlers
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent.toLowerCase()
      if (ua.includes("googlebot") || ua.includes("bingbot") || ua.includes("duckduckbot") || ua.includes("baiduspider")) {
        return
      }
    }

    const timer = setTimeout(() => setIsReady(true), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isReady) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    resizeCanvas()

    // Track mouse position - create subtle spark particles
    let lastParticleTime = 0
    const particleInterval = 30 // Create particles every 30ms for smoother effect
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      
      const now = Date.now()
      if (now - lastParticleTime < particleInterval) return
      lastParticleTime = now
      
      // Create subtle spark particles (more frequent but still subtle)
      const particleCount = Math.random() > 0.4 ? 1 : 0 // 60% chance of creating a particle
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 0.4 + Math.random() * 0.6 // Slightly faster for visibility
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 1.5,
          y: e.clientY + (Math.random() - 0.5) * 1.5,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 10 + Math.random() * 15, // Longer lifetime
          size: 0.8 + Math.random() * 1.2, // Slightly larger size
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles - much more subtle
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.92 // More friction for slower movement
        particle.vy *= 0.92
        particle.life++

        const alpha = 1 - (particle.life / particle.maxLife)
        const progress = particle.life / particle.maxLife

        // Draw subtle spark core (increased opacity for visibility)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.5})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw subtle glow around spark
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.3})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw subtle spark trail (only for first part of life)
        if (progress < 0.3) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.3})`
          ctx.lineWidth = 0.6
          ctx.lineCap = "round"
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(
            particle.x - particle.vx * 3,
            particle.y - particle.vy * 3
          )
          ctx.stroke()
        }

        return particle.life < particle.maxLife
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isReady])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ mixBlendMode: "difference" }}
    />
  )
}

