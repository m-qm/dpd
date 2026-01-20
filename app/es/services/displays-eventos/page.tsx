import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { SectionBadge } from "@/components/section-badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, Sparkles, Users, BarChart3, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Displays Interactivos para Ferias de Barcelona | Dual Perspective",
  description:
    "Transforma tu stand de feria con displays interactivos personalizados para eventos de Barcelona. Captura leads, muestra datos en tiempo real, crea experiencias memorables. MWC, ISE, ferias comerciales.",
}

export default function DisplaysEventosPage() {
  return (
    <main className="min-h-screen" lang="es">
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
              { label: "Servicios", href: "/es#capabilities" },
              { label: "Displays Interactivos para Eventos" }
            ]}
            locale="es"
          />
          <SectionBadge number={1} label="Displays Interactivos para Eventos" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight">
            Displays Interactivos Que Atraen Miradas
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Transforma tu stand de feria de estático a impresionante. Nuestros displays interactivos personalizados 
            capturan leads, muestran datos en tiempo real y crean experiencias memorables que destacan en los grandes eventos de Barcelona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-normal bg-foreground text-background hover:bg-foreground/90 transition-all duration-200"
            >
              Planifica Tu Display para Eventos
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-normal border-2 border-border hover:border-foreground transition-all duration-200"
            >
              Ver Precios
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
            Los Stands Estáticos No Enganchan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="space-y-4">
              <h3 className="text-xl font-normal text-foreground">Eres invisible entre la multitud</h3>
              <p className="text-muted-foreground">
                Cientos de expositores compitiendo por atención. Pósters estáticos y folletos se pierden en el ruido. 
                Los asistentes pasan de largo sin detenerse. Gastas miles en espacio de stand pero no te notan.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-normal text-foreground">La captura de leads es caos manual</h3>
              <p className="text-muted-foreground">
                Las tarjetas de visita se pierden. Los excels van con retraso. Los seguimientos tardan semanas. 
                No tienes datos en tiempo real sobre el engagement del stand ni qué demos funcionaron. Los leads valiosos se escapan.
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
            Experiencias Interactivas Que Atraen y Convierten
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-12">
            Construimos displays interactivos personalizados adaptados a tus objetivos de evento—pantallas táctiles que 
            muestran productos, capturan leads automáticamente, extraen datos en vivo de tus sistemas y crean momentos dignos de foto que los asistentes comparten.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <Sparkles className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Visuales Llamativos</h3>
              <p className="text-sm text-muted-foreground">
                Pantallas táctiles grandes con visuales impresionantes que hacen que los asistentes se detengan y exploren. 
                Movimiento, color e interactividad que exige atención en un salón abarrotado.
              </p>
            </div>
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <Users className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Captura Instantánea de Leads</h3>
              <p className="text-sm text-muted-foreground">
                Los asistentes interactúan con tu display y su información fluye directamente a tu CRM. Sin entrada manual. 
                Datos completos de engagement. Haz seguimiento mientras el evento aún está sucediendo.
              </p>
            </div>
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <BarChart3 className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Integración de Datos en Tiempo Real</h3>
              <p className="text-sm text-muted-foreground">
                Muestra inventario en vivo, especificaciones de productos, casos de estudio o feeds sociales. Extrae datos 
                de tus sistemas existentes para que la información esté siempre actualizada y precisa.
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
            Construido para los Grandes Eventos de Barcelona
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div>
              <h3 className="text-xl font-normal text-foreground mb-6">Perfecto Para</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Mobile World Congress (MWC)</strong>
                    <p className="text-sm text-muted-foreground mt-1">Muestra innovación tecnológica con demos de productos interactivos y datos en vivo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">ISE Barcelona</strong>
                    <p className="text-sm text-muted-foreground mt-1">Demuestra capacidades AV/tech con experiencias táctiles inmersivas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Ferias Comerciales Industriales</strong>
                    <p className="text-sm text-muted-foreground mt-1">Muestra productos complejos, configuradores o casos de estudio interactivamente</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-normal text-foreground mb-6">Qué Construimos</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Displays multitáctiles con diseño UI/UX personalizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Formularios de captura de leads integrados con tu CRM</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Extracción de datos en tiempo real de bases de datos/APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Integración con redes sociales y feeds en vivo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Configuradores de productos y catálogos interactivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Dashboard de análisis post-evento</span>
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
            Del Concepto al Soporte On-Site
          </h2>
          <div className="space-y-8 max-w-3xl">
            {[
              {
                step: "01",
                title: "Briefing del Evento",
                description: "Discutimos los objetivos de tu evento, distribución del stand, audiencia objetivo y mensajes clave. Consulta de 30 minutos para entender tu visión."
              },
              {
                step: "02",
                title: "Concepto y Diseño",
                description: "Diseñamos la experiencia interactiva con mockups y diagramas de flujo. Apruebas el concepto antes de que comience el desarrollo."
              },
              {
                step: "03",
                title: "Construcción e Integración",
                description: "Desarrollamos el software del display, integramos con tus fuentes de datos y probamos en hardware de grado profesional. Ensayo antes del evento."
              },
              {
                step: "04",
                title: "Instalación y Soporte On-Site",
                description: "Entregamos e instalamos el display en tu stand. Soporte on-site durante el evento. Informe de análisis post-evento con métricas de engagement."
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
                <h4 className="text-lg font-normal text-foreground mb-2">Plazos Urgentes Disponibles</h4>
                <p className="text-sm text-muted-foreground">
                  Podemos entregar displays para eventos en 2-3 semanas cuando es necesario. Contáctanos en cuanto 
                  tengas tu stand confirmado para asegurar que podemos acomodar tu timeline.
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
            Precios Transparentes para Eventos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12">
            El precio depende de la complejidad y alcance. Aquí hay rangos típicos para ayudarte a planificar.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            <div className="border-2 border-border p-8">
              <h3 className="text-xl font-normal text-foreground mb-4">Estándar</h3>
              <div className="mb-6">
                <span className="text-3xl font-normal text-foreground">Desde €2.000</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Display táctil individual</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Diseño UI personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Formulario de captura de leads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Integración básica de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Instalación y soporte on-site</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-foreground p-8 bg-foreground/5">
              <h3 className="text-xl font-normal text-foreground mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-3xl font-normal text-foreground">Desde €4.000</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Múltiples pantallas/kioscos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Diseño personalizado avanzado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Integración con CRM</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Displays de datos en tiempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Soporte on-site extendido</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Dashboard de análisis</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-border p-8">
              <h3 className="text-xl font-normal text-foreground mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-3xl font-normal text-foreground">Desde €8.000</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Experiencias multi-stand</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Integraciones complejas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Hardware personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Animaciones/3D avanzadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Soporte técnico completo del evento</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Reutilizable para múltiples eventos</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8 max-w-2xl">
            El precio incluye diseño, desarrollo, pruebas, instalación on-site y un informe de análisis post-evento. 
            Alquiler de hardware disponible por separado si es necesario. Se requiere depósito del 50% para empezar, balance antes del evento.
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
          <SectionBadge number={2} label="Empezar" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-8 md:mb-12 leading-[1.1] tracking-tight">
            ¿Listo Para Destacar en Tu Próximo Evento?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 md:mb-16 leading-relaxed font-normal max-w-3xl">
            Agenda una consulta para discutir tu próximo evento. Describiremos qué es posible para tu stand, 
            timeline y presupuesto—sin compromiso.
          </p>
          <ContactForm locale="es" />
        </div>
      </section>
    </main>
  )
}

