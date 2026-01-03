import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { SectionBadge } from "@/components/section-badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, Sparkles, Users, BarChart3, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Interactive Event Displays for Barcelona Trade Shows | Dual Perspective",
  description:
    "Transform your trade show booth with custom interactive displays for Barcelona events. Capture leads, showcase real-time data, create memorable experiences. From €2,000 per event. MWC, ISE, trade expos.",
}

export default function EventDisplaysPage() {
  return (
    <main className="min-h-screen" lang="en">
      {/* Hero Section */}
      <section data-theme="dark" className="dpd-section dpd-theme-owner pt-32 md:pt-40 relative overflow-hidden">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 hero-gradient" />
        <div className="pointer-events-none absolute inset-0 hero-grid" />
        <div 
          className="pointer-events-none absolute inset-x-0 top-1/4 h-[60vh]"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(184, 160, 255, 0.12), transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.6,
          }}
        />
        <div className="dpd-container relative z-10">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/#capabilities" },
              { label: "Interactive Event Displays" }
            ]}
            locale="en"
          />
          <SectionBadge number={1} label="Interactive Event Displays" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight">
            Interactive Displays That Stop Traffic
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Transform your trade show booth from static to stunning. Our custom interactive displays capture leads, 
            showcase real-time data, and create memorable experiences that stand out at Barcelona's biggest events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-normal bg-foreground text-background hover:bg-foreground/90 transition-all duration-200"
            >
              Plan Your Event Display
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-normal border-2 border-border hover:border-foreground transition-all duration-200"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section data-theme="light" className="dpd-section dpd-theme-owner relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="dpd-container relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-8 tracking-tight">
            Static Booths Don't Engage
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="space-y-4">
              <h3 className="text-xl font-normal text-foreground">You're invisible in the crowd</h3>
              <p className="text-muted-foreground">
                Hundreds of exhibitors competing for attention. Static posters and brochures blend into the noise. 
                Attendees walk past without stopping. You're spending thousands on booth space but not getting noticed.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-normal text-foreground">Lead capture is manual chaos</h3>
              <p className="text-muted-foreground">
                Business cards get lost. Spreadsheets lag behind. Follow-ups take weeks. You have no real-time data 
                on booth engagement or which demos worked. Valuable leads slip through the cracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section data-theme="dark" className="dpd-section dpd-theme-owner relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
        <div 
          className="pointer-events-none absolute inset-x-0 top-0 h-[50vh]"
          style={{
            background: "radial-gradient(circle at 70% 30%, rgba(160, 200, 255, 0.1), transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div className="dpd-container relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-6 tracking-tight">
            Interactive Experiences That Attract & Convert
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-12">
            We build custom interactive displays tailored to your event goals—touchscreens that showcase products, 
            capture leads automatically, pull live data from your systems, and create photo-worthy moments that attendees share.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <Sparkles className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Eye-Catching Visuals</h3>
              <p className="text-sm text-muted-foreground">
                Large touchscreens with stunning visuals that make attendees stop and explore. Motion, color, 
                and interactivity that demands attention in a crowded hall.
              </p>
            </div>
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <Users className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Instant Lead Capture</h3>
              <p className="text-sm text-muted-foreground">
                Attendees interact with your display and their info flows directly to your CRM. No manual entry. 
                Full engagement data. Follow up while the event is still happening.
              </p>
            </div>
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <BarChart3 className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Real-Time Data Integration</h3>
              <p className="text-sm text-muted-foreground">
                Display live inventory, product specs, case studies, or social feeds. Pull data from your 
                existing systems so information is always current and accurate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section data-theme="light" className="dpd-section dpd-theme-owner relative overflow-hidden">
        <div 
          className="pointer-events-none absolute left-0 top-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
        <div className="dpd-container relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-12 tracking-tight">
            Built for Barcelona's Major Events
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div>
              <h3 className="text-xl font-normal text-foreground mb-6">Perfect For</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Mobile World Congress (MWC)</strong>
                    <p className="text-sm text-muted-foreground mt-1">Show off tech innovation with interactive product demos and live data</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">ISE Barcelona</strong>
                    <p className="text-sm text-muted-foreground mt-1">Demonstrate AV/tech capabilities with immersive touchscreen experiences</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Industry Trade Shows</strong>
                    <p className="text-sm text-muted-foreground mt-1">Showcase complex products, configurators, or case studies interactively</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-normal text-foreground mb-6">What We Build</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Multi-touch displays with custom UI/UX design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Lead capture forms integrated with your CRM</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Real-time data pulls from databases/APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Social media integration and live feeds</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Product configurators and interactive catalogs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Post-event analytics dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section data-theme="dark" className="dpd-section dpd-theme-owner relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" />
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-1/4 h-[50vh]"
          style={{
            background: "radial-gradient(circle at 40% 60%, rgba(46, 88, 255, 0.1), transparent 65%)",
            filter: "blur(90px)",
          }}
        />
        <div className="dpd-container relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-12 tracking-tight">
            From Concept to On-Site Support
          </h2>
          <div className="space-y-8 max-w-3xl">
            {[
              {
                step: "01",
                title: "Event Briefing",
                description: "We discuss your event goals, booth layout, target audience, and key messages. 30-minute consultation to understand your vision."
              },
              {
                step: "02",
                title: "Concept & Design",
                description: "We design the interactive experience with mockups and flow diagrams. You approve the concept before development starts."
              },
              {
                step: "03",
                title: "Build & Integration",
                description: "We develop the display software, integrate with your data sources, and test on event-grade hardware. Rehearsal before the event."
              },
              {
                step: "04",
                title: "On-Site Setup & Support",
                description: "We deliver and set up the display at your booth. On-site support during the event. Post-event analytics report with engagement metrics."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-4xl font-normal text-foreground/20 flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-normal text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 max-w-2xl">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-normal text-foreground mb-2">Rush Timelines Available</h4>
                <p className="text-sm text-muted-foreground">
                  We can deliver event displays in 2-3 weeks when needed. Contact us as soon as you have your booth 
                  confirmed to ensure we can accommodate your timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" data-theme="light" className="dpd-section dpd-theme-owner relative overflow-hidden">
        <div 
          className="pointer-events-none absolute right-0 bottom-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        />
        <div className="dpd-container relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-6 tracking-tight">
            Transparent Event Pricing
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12">
            Pricing depends on complexity and scope. Here are typical ranges to help you plan.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            <div className="border-2 border-border p-8">
              <h3 className="text-xl font-normal text-foreground mb-4">Standard</h3>
              <div className="mb-6">
                <span className="text-3xl font-normal text-foreground">From €2,000</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Single touchscreen display</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Custom UI design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Lead capture form</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Basic data integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Setup & on-site support</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-foreground p-8 bg-foreground/5">
              <h3 className="text-xl font-normal text-foreground mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-3xl font-normal text-foreground">From €4,000</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Multiple screens/kiosks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Advanced custom design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>CRM integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Real-time data displays</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Extended on-site support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Analytics dashboard</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-border p-8">
              <h3 className="text-xl font-normal text-foreground mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-3xl font-normal text-foreground">From €8,000</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Multi-booth experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Complex integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Custom hardware</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Advanced animations/3D</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Full event tech support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Reusable for multiple events</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8 max-w-2xl">
            Pricing includes design, development, testing, on-site setup, and a post-event analytics report. 
            Hardware rental available separately if needed. 50% deposit required to start, balance due before event.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" data-theme="dark" className="dpd-section dpd-theme-owner relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-gradient" />
        <div 
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(184, 160, 255, 0.12), transparent 50%)",
            filter: "blur(90px)",
            opacity: 0.7,
          }}
        />
        <div className="dpd-container relative z-10">
          <SectionBadge number={2} label="Get Started" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-8 md:mb-12 leading-[1.1] tracking-tight">
            Ready to Stand Out at Your Next Event?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 md:mb-16 leading-relaxed font-normal max-w-3xl">
            Schedule a consultation to discuss your upcoming event. We'll outline what's possible for your booth, 
            timeline, and budget—with no commitment.
          </p>
          <ContactForm locale="en" />
        </div>
      </section>
    </main>
  )
}

