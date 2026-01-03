import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { SectionBadge } from "@/components/section-badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, MessageCircle, Zap, TrendingUp, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "WhatsApp Automation & Chatbot Integration for Spanish Businesses | Dual Perspective",
  description:
    "Automate WhatsApp customer interactions for Spanish SMEs. Save 15-20 hours/week with intelligent chatbots that handle FAQs, qualify leads, and sync with your CRM. From €5,500 + €1,200/month support.",
}

export default function WhatsAppAutomationPage() {
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
            background: "radial-gradient(circle at 50% 50%, rgba(46, 88, 255, 0.15), transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.6,
          }}
        />
        <div className="dpd-container relative z-10">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/#capabilities" },
              { label: "WhatsApp Automation" }
            ]}
            locale="en"
          />
          <SectionBadge number={1} label="WhatsApp Automation" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight">
            Stop Drowning in WhatsApp Inquiries
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Our intelligent chatbots handle FAQs, qualify leads, and sync with your CRM—automatically. 
            Save 15-20 hours per week on manual customer interactions while improving response times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-normal bg-foreground text-background hover:bg-foreground/90 transition-all duration-200"
            >
              Get Free 30-Minute Assessment
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
            The Manual WhatsApp Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="space-y-4">
              <h3 className="text-xl font-normal text-foreground">Your team is overwhelmed</h3>
              <p className="text-muted-foreground">
                50+ daily WhatsApp inquiries. Same questions repeated. Staff spending hours on manual replies 
                instead of high-value work. Response times stretching to hours or even days.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-normal text-foreground">Customers are frustrated</h3>
              <p className="text-muted-foreground">
                Slow responses lose sales. Customers expect instant answers. Manual processes can't scale. 
                You're missing opportunities while your competitors automate.
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
            background: "radial-gradient(circle at 30% 20%, rgba(46, 88, 255, 0.1), transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div className="dpd-container relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-6 tracking-tight">
            Automated WhatsApp That Actually Works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-12">
            We build intelligent WhatsApp chatbots that integrate with your existing systems—CRM, databases, 
            websites—so customer data flows automatically. No manual copying. No spreadsheets.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <MessageCircle className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Instant FAQ Responses</h3>
              <p className="text-sm text-muted-foreground">
                Your chatbot answers common questions instantly—hours, pricing, availability. 
                Customers get immediate answers, 24/7.
              </p>
            </div>
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <Zap className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Lead Qualification</h3>
              <p className="text-sm text-muted-foreground">
                Automatically collect key information, qualify leads, and route them to the right person. 
                Your team only handles hot prospects.
              </p>
            </div>
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <TrendingUp className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">CRM Integration</h3>
              <p className="text-sm text-muted-foreground">
                Every interaction syncs to your CRM automatically. Full conversation history. 
                No data entry. Just insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section data-theme="light" className="dpd-section dpd-theme-owner relative overflow-hidden">
        <div 
          className="pointer-events-none absolute right-0 top-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <div className="dpd-container relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-12 tracking-tight">
            How We Implement Your WhatsApp Automation
          </h2>
          <div className="space-y-8 max-w-3xl">
            {[
              {
                step: "01",
                title: "Process Discovery",
                description: "We analyze your current WhatsApp workflow, common inquiries, and pain points. 30-minute assessment call to understand your needs."
              },
              {
                step: "02",
                title: "Chatbot Design",
                description: "We design conversation flows that handle your specific use cases. You approve the flows before any development starts."
              },
              {
                step: "03",
                title: "Integration & Setup",
                description: "We connect WhatsApp Business API, integrate with your CRM/systems, test thoroughly, and train your team."
              },
              {
                step: "04",
                title: "Launch & Optimize",
                description: "We go live, monitor performance, and continuously optimize based on real usage data. Monthly reviews included in retainer."
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
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" data-theme="dark" className="dpd-section dpd-theme-owner relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" />
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh]"
          style={{
            background: "radial-gradient(circle at 70% 80%, rgba(46, 88, 255, 0.12), transparent 65%)",
            filter: "blur(100px)",
          }}
        />
        <div className="dpd-container relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-6 tracking-tight">
            Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12">
            No hidden fees. No surprises. Clear pricing that reflects the value you get.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="border-2 border-border p-8">
              <h3 className="text-2xl font-normal text-foreground mb-4">Initial Setup</h3>
              <div className="mb-6">
                <span className="text-4xl font-normal text-foreground">€5,500</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">WhatsApp Business API setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Custom chatbot flow design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">CRM integration (1 system)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Testing & team training</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-foreground p-8 bg-foreground/5">
              <h3 className="text-2xl font-normal text-foreground mb-4">Monthly Support</h3>
              <div className="mb-6">
                <span className="text-4xl font-normal text-foreground">€1,200</span>
                <span className="text-muted-foreground ml-2">per month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Continuous monitoring & optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Regular content & flow updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Monthly performance reviews</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 max-w-2xl">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-normal text-foreground mb-2">Typical ROI: 3 Months</h4>
                <p className="text-sm text-muted-foreground">
                  If you handle 50+ WhatsApp inquiries daily, that's ~20 hours/week of staff time. 
                  Automating 50% saves €1,500-€2,500/month in labor costs. Investment pays for itself quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section data-theme="light" className="dpd-section dpd-theme-owner relative overflow-hidden">
        <div 
          className="pointer-events-none absolute left-0 bottom-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        />
        <div className="dpd-container relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-12 tracking-tight">
            Perfect For Spanish SMEs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-normal text-foreground mb-3">Retail & E-commerce</h3>
              <p className="text-sm text-muted-foreground">
                Answer product questions, check stock availability, handle order status inquiries, 
                send shipping updates automatically.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-normal text-foreground mb-3">Real Estate</h3>
              <p className="text-sm text-muted-foreground">
                Qualify property inquiries, schedule viewings, answer common questions about listings, 
                send property recommendations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-normal text-foreground mb-3">Hospitality & Services</h3>
              <p className="text-sm text-muted-foreground">
                Handle booking inquiries, answer FAQs about services/hours, send confirmations, 
                collect feedback automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" data-theme="dark" className="dpd-section dpd-theme-owner relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-gradient" />
        <div 
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(46, 88, 255, 0.15), transparent 50%)",
            filter: "blur(90px)",
            opacity: 0.7,
          }}
        />
        <div className="dpd-container relative z-10">
          <SectionBadge number={2} label="Get Started" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-8 md:mb-12 leading-[1.1] tracking-tight">
            Ready to Automate Your WhatsApp?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 md:mb-16 leading-relaxed font-normal max-w-3xl">
            Book a free 30-minute assessment. We'll analyze your WhatsApp workflow and show you exactly 
            how automation can save your team time—with no commitment.
          </p>
          <ContactForm locale="en" />
        </div>
      </section>
    </main>
  )
}

