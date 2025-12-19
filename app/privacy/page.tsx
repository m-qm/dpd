import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Privacy Policy — Dual Perspective Digital",
  description:
    "Privacy policy for dualperspective.digital. Learn how we handle personal data submitted through our contact form and analytics (with consent).",
  alternates: {
    canonical: "/privacy",
    languages: { en: "/privacy", es: "/es/privacy" },
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-20 py-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs 
          items={[{ label: "Privacy Policy" }]} 
          locale="en"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-10">
          This policy explains how we process personal data when you use this website and contact us.
        </p>

        <div className="space-y-10">
          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Controller</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Dual Perspective Digital (Barcelona, Spain). For privacy requests, contact{" "}
              <a className="text-foreground hover:opacity-70 transition-opacity" href="mailto:hello@dualperspective.digital">
                hello@dualperspective.digital
              </a>
              .
            </p>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">What we collect</h2>
            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>Contact form data (name, email, message, and language preference).</li>
              <li>Basic website analytics data (only if you consent to cookies/analytics).</li>
            </ul>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Purposes</h2>
            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>To respond to enquiries and discuss projects.</li>
              <li>To operate and secure the website.</li>
              <li>To measure and improve performance (with consent).</li>
            </ul>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Legal basis</h2>
            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>Legitimate interest to respond to your request.</li>
              <li>Consent for analytics/cookies (where applicable).</li>
            </ul>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Processors</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We use service providers to operate this website and deliver emails (e.g. contact form delivery). These
              providers process data under our instructions.
            </p>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Retention</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We keep contact enquiries only as long as needed to respond and follow up, and as required for legal or
              accounting purposes.
            </p>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Your rights</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              You may request access, correction, deletion, or restriction of your personal data. Email{" "}
              <a className="text-foreground hover:opacity-70 transition-opacity" href="mailto:hello@dualperspective.digital">
                hello@dualperspective.digital
              </a>{" "}
              to exercise these rights.
            </p>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Cookies</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              See our{" "}
              <a className="text-foreground hover:opacity-70 transition-opacity" href="/cookies">
                Cookie Policy
              </a>{" "}
              for details and to update your preferences.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


