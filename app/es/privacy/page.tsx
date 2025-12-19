import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Política de privacidad — Dual Perspective Digital",
  description:
    "Política de privacidad de dualperspective.digital. Cómo tratamos los datos personales enviados a través del formulario de contacto y la analítica (con consentimiento).",
  alternates: {
    canonical: "/es/privacy",
    languages: { en: "/privacy", es: "/es/privacy" },
  },
}

export default function PrivacyPageEs() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-20 py-20 md:py-24" lang="es">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs 
          items={[{ label: "Política de privacidad" }]} 
          locale="es"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
          Política de privacidad
        </h1>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-10">
          Esta política explica cómo tratamos los datos personales cuando usas esta web y contactas con nosotros.
        </p>

        <div className="space-y-10">
          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Responsable</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Dual Perspective Digital (Barcelona, España). Para solicitudes de privacidad, escribe a{" "}
              <a className="text-foreground hover:opacity-70 transition-opacity" href="mailto:hello@dualperspective.digital">
                hello@dualperspective.digital
              </a>
              .
            </p>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Qué datos recopilamos</h2>
            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>Datos del formulario de contacto (nombre, email, mensaje y preferencia de idioma).</li>
              <li>Datos básicos de analítica web (solo si aceptas cookies/analítica).</li>
            </ul>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Finalidades</h2>
            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>Responder a consultas y valorar proyectos.</li>
              <li>Operar y proteger el sitio web.</li>
              <li>Medir y mejorar el rendimiento (con consentimiento).</li>
            </ul>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Base legal</h2>
            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>Interés legítimo para responder a tu solicitud.</li>
              <li>Consentimiento para cookies/analítica (cuando aplique).</li>
            </ul>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Encargados</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Usamos proveedores para operar esta web y entregar emails (por ejemplo, el envío del formulario de
              contacto). Estos proveedores tratan datos bajo nuestras instrucciones.
            </p>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Conservación</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Conservamos las consultas el tiempo necesario para responder y hacer seguimiento, y lo que exijan
              obligaciones legales o contables.
            </p>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Tus derechos</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Puedes solicitar acceso, rectificación, supresión o limitación del tratamiento. Escribe a{" "}
              <a className="text-foreground hover:opacity-70 transition-opacity" href="mailto:hello@dualperspective.digital">
                hello@dualperspective.digital
              </a>{" "}
              para ejercerlos.
            </p>
          </section>

          <section className="border-t border-border/60 pt-8">
            <h2 className="text-xl md:text-2xl tracking-tight mb-3">Cookies</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Consulta nuestra{" "}
              <a className="text-foreground hover:opacity-70 transition-opacity" href="/es/cookies">
                política de cookies
              </a>{" "}
              para más detalles y para actualizar tus preferencias.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


