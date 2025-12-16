import { GeometricPattern } from "@/components/geometric-pattern"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      {/* Contact Section */}
      <div className="py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
            <div>
              <h3 className="text-xl md:text-2xl font-normal text-foreground mb-6 tracking-tight">Dual Perspective Digital</h3>
              <a
                href="mailto:hello@dualperspective.digital"
                className="text-lg md:text-xl text-foreground hover:opacity-60 transition-opacity font-normal block"
              >
                hello@dualperspective.digital
              </a>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-normal text-foreground mb-6 tracking-tight">Connect</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-base md:text-lg text-foreground hover:opacity-60 transition-opacity font-normal">
                  LinkedIn
                </a>
                <a href="#" className="text-base md:text-lg text-foreground hover:opacity-60 transition-opacity font-normal">
                  Instagram
                </a>
                <a href="#" className="text-base md:text-lg text-foreground hover:opacity-60 transition-opacity font-normal">
                  Behance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom with Geometric Pattern - Norgram style */}
      <div className="bg-background">
        {/* Text Row */}
        <div className="px-6 md:px-12 lg:px-20 py-6 md:py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex gap-6 md:gap-8">
              <a href="#" className="text-sm md:text-base text-foreground hover:opacity-60 transition-opacity font-normal underline underline-offset-4">
                LinkedIn
              </a>
              <a href="#" className="text-sm md:text-base text-foreground hover:opacity-60 transition-opacity font-normal underline underline-offset-4">
                Instagram
              </a>
            </div>
            {/* <div className="text-sm md:text-base text-foreground font-normal">
              VAT No—00000000
            </div> */}
            <div className="text-sm md:text-base text-foreground font-normal">
              © 2024—{new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Geometric Pattern Canvas */}
        <GeometricPattern />
      </div>
    </footer>
  )
}
