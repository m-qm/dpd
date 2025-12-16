"use client"

import { useEffect, useRef } from "react"

export function AnimatedD() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = 30
    const height = 60 // Fixed height for two D's stacked
    const dpr = window.devicePixelRatio || 1

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    const drawD = (centerX: number, centerY: number, radius: number, inverted: boolean = false) => {
      ctx.save()
      
      if (inverted) {
        // Flip horizontally for bottom D
        ctx.translate(centerX, centerY)
        ctx.scale(-1, 1)
        ctx.translate(-centerX, -centerY)
      }
      
      ctx.beginPath()
      
      // Left vertical line
      const leftX = centerX - radius
      ctx.moveTo(leftX, centerY - radius)
      ctx.lineTo(leftX, centerY + radius)
      
      // Right curve
      ctx.arc(
        centerX, 
        centerY, 
        radius, 
        Math.PI * 1.5, 
        Math.PI * 0.5, 
        false
      )
      
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Set style - white stroke
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      const centerX = width / 2
      const radius = 12
      
      // Draw first D (top) - normal
      const topCenterY = height / 2 - 15
      drawD(centerX, topCenterY, radius, false)

      // Draw second D (bottom) - inverted
      const bottomCenterY = height / 2 + 15
      drawD(centerX, bottomCenterY, radius, true)

      // No animation needed, but keep the frame for potential future use
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="block flex-shrink-0"
      style={{ 
        display: "block",
        width: "30px",
        height: "60px",
        minHeight: "60px"
      }}
    />
  )
}

