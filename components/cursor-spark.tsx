"use client"

import { useEffect, useRef } from "react"

export function CursorSpark() {
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
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
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

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      
      // Create new spark particles at cursor position
      const particleCount = 4 + Math.floor(Math.random() * 3)
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.8
        const speed = 1 + Math.random() * 2
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 4,
          y: e.clientY + (Math.random() - 0.5) * 4,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 15 + Math.random() * 25,
          size: 1.5 + Math.random() * 2.5
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.92 // Friction
        particle.vy *= 0.92
        particle.life++

        const alpha = 1 - (particle.life / particle.maxLife)
        const progress = particle.life / particle.maxLife

        // Draw bright spark core
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw glow around spark
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.8})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw spark trail (only for first part of life)
        if (progress < 0.4) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.6})`
          ctx.lineWidth = 1
          ctx.lineCap = "round"
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(
            particle.x - particle.vx * 4,
            particle.y - particle.vy * 4
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
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  )
}

