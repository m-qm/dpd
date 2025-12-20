"use client"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"

export default function CookiesPageEs() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-20 py-20 md:py-24" lang="es">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs 
          items={[{ label: "Cookies" }]} 
          locale="es"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
          Cookies
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
          Este sitio web no utiliza cookies para seguimiento o análisis. Utilizamos análisis del lado del servidor 
          (Vercel Analytics) que no requiere cookies ni consentimiento del usuario, garantizando pleno cumplimiento 
          del GDPR sin ningún banner de cookies.
        </p>

        <div className="border-t border-border/60 pt-10">
          <h2 className="text-xl md:text-2xl tracking-tight mb-4">Nuestro Enfoque de Privacidad</h2>

          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="text-muted-foreground">
              Creemos en la privacidad por diseño. Este sitio web utiliza <strong>solo análisis del lado del servidor</strong>, 
              lo que significa:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li><strong>No se requieren cookies:</strong> No establecemos cookies de seguimiento en tu dispositivo</li>
              <li><strong>No se necesita consentimiento:</strong> Los análisis del lado del servidor son compatibles con GDPR por defecto</li>
              <li><strong>Privacidad primero:</strong> Solo recopilamos datos agregados y anonimizados</li>
              <li><strong>Mejor rendimiento:</strong> Sin seguimiento JavaScript = páginas más rápidas</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-3">Qué Rastreamos (Solo del Lado del Servidor)</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Visualizaciones de página (agregadas)</li>
              <li>Visitantes únicos (anonimizados)</li>
              <li>Referencias (de dónde viene el tráfico)</li>
              <li>Datos geográficos (a nivel de país, anonimizados)</li>
            </ul>
            <p className="text-muted-foreground mt-6">
              Todos los análisis se procesan del lado del servidor por Vercel y no involucran ningún seguimiento del lado del cliente ni cookies.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
