import { SectionBadge } from "@/components/section-badge"

export function CTASection({ inverted = false }: { inverted?: boolean }) {
  return (
    <section 
      id="contact"
      className={`py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 border-t border-border transition-colors duration-500 ${
        inverted ? "section-inverted" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <SectionBadge number={5} label="Contact" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-8 md:mb-12 leading-[1.1] tracking-tight">
          For brands that value precision, craft, and enduring design.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 md:mb-20 leading-relaxed font-normal max-w-3xl">
          We collaborate with discerning clients who understand that exceptional digital experiences require both vision and restraint.
        </p>

        <a
          href="mailto:hello@dualperspective.digital"
          className={`inline-block px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-normal tracking-tight transition-all duration-300 ${
            inverted 
              ? "bg-foreground text-background hover:opacity-90" 
              : "bg-foreground text-background hover:opacity-90"
          }`}
        >
          Start a conversation
        </a>
      </div>
    </section>
  )
}
