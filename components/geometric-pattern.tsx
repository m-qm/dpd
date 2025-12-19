export function GeometricPattern() {
  return (
    <div className="w-full h-24 md:h-32 lg:h-40 bg-[#0b0b0b] relative overflow-hidden">
      {/* Simple gradient fade */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 0%, transparent 100%)"
        }}
      />
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </div>
  )
}

