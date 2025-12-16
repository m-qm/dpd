export function SectionBadge({ number, label }: { number: number; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8 md:mb-12">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-foreground text-background flex items-center justify-center text-xs md:text-sm font-normal">
        <span className="font-mono">{number}</span>
      </div>
      <span className="text-sm md:text-base font-normal text-foreground tracking-tight">{label}</span>
    </div>
  )
}

