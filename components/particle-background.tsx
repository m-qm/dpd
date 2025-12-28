"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

// Cloud particle component
function CloudParticles({ particleCount = 4000, opacity = 0.2, size = 0.08 }: { particleCount?: number; opacity?: number; size?: number }) {
  const cloudRef = useRef<THREE.Points>(null)
  
  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Create cloud-like distribution
      const radius = Math.random() * 20 + 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = (Math.random() - 0.5) * 12
      positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
      
      // Vary particle sizes slightly for more natural look
      sizes[i] = size * (0.8 + Math.random() * 0.4)
      
      // Galaxy-like color palette: purples, pinks, blues, whites
      const colorType = Math.random()
      const brightness = Math.random() * 0.3 + 0.5 // Subtle brightness
      
      if (colorType < 0.3) {
        // Deep purple/magenta
        colors[i3] = brightness * 0.8 // R
        colors[i3 + 1] = brightness * 0.4 // G
        colors[i3 + 2] = brightness * 1.0 // B
      } else if (colorType < 0.55) {
        // Pink/magenta
        colors[i3] = brightness * 1.0 // R
        colors[i3 + 1] = brightness * 0.6 // G
        colors[i3 + 2] = brightness * 0.9 // B
      } else if (colorType < 0.75) {
        // Blue/cyan
        colors[i3] = brightness * 0.3 // R
        colors[i3 + 1] = brightness * 0.7 // G
        colors[i3 + 2] = brightness * 1.0 // B
      } else if (colorType < 0.9) {
        // Purple-blue
        colors[i3] = brightness * 0.6 // R
        colors[i3 + 1] = brightness * 0.5 // G
        colors[i3 + 2] = brightness * 1.0 // B
      } else {
        // Soft white/blue-white
        colors[i3] = brightness * 0.95 // R
        colors[i3 + 1] = brightness * 0.95 // G
        colors[i3 + 2] = brightness * 1.0 // B
      }
    }
    
    return { positions, colors, sizes }
  }, [particleCount, size])
  
  
  useFrame((state) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })
  
  return (
    <points ref={cloudRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={`
          attribute float size;
          varying vec3 vColor;
          varying float vSize;
          
          void main() {
            vColor = color;
            vSize = size;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          precision mediump float;
          varying vec3 vColor;
          varying float vSize;
          
          void main() {
            vec2 center = gl_PointCoord - vec2(0.5);
            float dist = length(center);
            
            // Create perfect circular shape with smooth edges
            float radius = 0.5;
            float edgeSoftness = 0.1;
            float alpha = 1.0 - smoothstep(radius - edgeSoftness, radius, dist);
            
            // Discard pixels outside the circle for perfect circular shape
            if (dist > radius) {
              discard;
            }
            
            gl_FragColor = vec4(vColor, alpha);
          }
        `}
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        vertexColors
        uniforms={{}}
      />
    </points>
  )
}

// Multiple cloud layers for depth
function CloudLayers({ isMobile = false }: { isMobile?: boolean }) {
  const particleCount = isMobile ? 1200 : 4000
  const opacity = isMobile ? 0.12 : 0.2
  const size = isMobile ? 0.06 : 0.08
  
  return (
    <>
      <CloudParticles particleCount={particleCount} opacity={opacity} size={size} />
      {!isMobile && (
        <group position={[6, 1, -4]} scale={0.6}>
          <CloudParticles particleCount={Math.floor(particleCount * 0.6)} opacity={opacity * 0.8} size={size} />
        </group>
      )}
    </>
  )
}

export function ParticleBackground({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 25], fov: 75 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={75} />
      
      {/* Lighting - Galaxy colors */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#b8a0ff" />
      <pointLight position={[-10, -10, -5]} intensity={0.25} color="#ffa0d0" />
      <pointLight position={[5, -8, 3]} intensity={0.2} color="#a0c8ff" />
      <pointLight position={[-5, 8, -3]} intensity={0.2} color="#d0a0ff" />
      
      {/* Cloud layers */}
      <CloudLayers isMobile={isMobile} />
      
      {/* Controls for interaction */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  )
}

