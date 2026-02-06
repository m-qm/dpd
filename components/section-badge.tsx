export function SectionBadge({ number, label }: { number: number; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8 md:mb-12">
      <div className="w-8 h-8 md:w-9 md:h-9 rounded-md border border-accent-blue/30 bg-accent-blue/5 flex items-center justify-center text-xs font-mono text-accent-blue">
        {number}
      </div>
      <span className="text-sm font-normal text-muted-foreground tracking-tight">{label}</span>
    </div>
  )
}
