"use client"

import { Breadcrumbs } from "@/components/breadcrumbs"

export default function CookiesPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-20 py-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs 
          items={[{ label: "Cookies" }]} 
          locale="en"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
          Cookies
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
          This website does not use cookies for tracking or analytics. We use server-side analytics (Vercel Analytics) 
          that does not require cookies or user consent, ensuring full GDPR compliance without any cookie banners.
        </p>

        <div className="border-t border-border/60 pt-10">
          <h2 className="text-xl md:text-2xl tracking-tight mb-4">Our Approach to Privacy</h2>

          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="text-muted-foreground">
              We believe in privacy by design. This website uses <strong>server-side analytics only</strong>, 
              which means:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li><strong>No cookies required:</strong> We don't set any tracking cookies on your device</li>
              <li><strong>No consent needed:</strong> Server-side analytics are GDPR compliant by default</li>
              <li><strong>Privacy-first:</strong> We collect only aggregated, anonymized data</li>
              <li><strong>Better performance:</strong> No JavaScript tracking = faster page loads</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-3">What We Track (Server-Side Only)</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Page views (aggregated)</li>
              <li>Unique visitors (anonymized)</li>
              <li>Referrers (where traffic comes from)</li>
              <li>Geographic data (country-level, anonymized)</li>
            </ul>
            <p className="text-muted-foreground mt-6">
              All analytics are processed server-side by Vercel and do not involve any client-side tracking or cookies.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
