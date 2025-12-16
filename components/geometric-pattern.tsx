"use client"

import { useEffect, useRef } from "react"

export function GeometricPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const drawPattern = () => {
      // Get container dimensions
      const container = canvas.parentElement
      if (!container) return

      const containerWidth = container.clientWidth || window.innerWidth
      const containerHeight = container.clientHeight || 96
      
      const dpr = window.devicePixelRatio || 1
      
      // Set canvas size accounting for device pixel ratio
      canvas.width = containerWidth * dpr
      canvas.height = containerHeight * dpr
      
      // Scale context to handle high DPI displays
      ctx.scale(dpr, dpr)
      
      // Set display size
      canvas.style.width = `${containerWidth}px`
      canvas.style.height = `${containerHeight}px`

      // Clear canvas with black background
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, containerWidth, containerHeight)

      // Draw alternating vertical lines - Norgram style
      const lineWidth = 2
      let x = 0
      let isBlack = true

      while (x < containerWidth) {
        ctx.fillStyle = isBlack ? "#000000" : "#ffffff"
        ctx.fillRect(x, 0, lineWidth, containerHeight)
        x += lineWidth
        isBlack = !isBlack
      }
    }

    // Initial draw
    const timeoutId = setTimeout(drawPattern, 50)

    // Resize observer
    const resizeObserver = new ResizeObserver(drawPattern)
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    window.addEventListener("resize", drawPattern)
    
    return () => {
      clearTimeout(timeoutId)
      resizeObserver.disconnect()
      window.removeEventListener("resize", drawPattern)
    }
  }, [])

  return (
    <div className="w-full h-24 md:h-32 lg:h-40 bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  )
}

