import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { SectionBadge } from "@/components/section-badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, MessageCircle, Zap, TrendingUp, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Automatización WhatsApp y Chatbots para PYMEs Españolas | Dual Perspective",
  description:
    "Automatiza interacciones de WhatsApp para PYMEs españolas. Ahorra 15-20 horas semanales con chatbots inteligentes que gestionan FAQs, cualifican leads y se sincronizan con tu CRM.",
}

export default function AutomatizacionWhatsAppPage() {
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
            background: "radial-gradient(circle at 50% 50%, rgba(46, 88, 255, 0.15), transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.6,
          }}
        />
        <div className="dpd-container relative z-10">
          <Breadcrumbs 
            items={[
              { label: "Servicios", href: "/es#capabilities" },
              { label: "Automatización WhatsApp" }
            ]}
            locale="es"
          />
          <SectionBadge number={1} label="Automatización WhatsApp" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight">
            Deja de Ahogarte en Consultas de WhatsApp
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Nuestros chatbots inteligentes gestionan FAQs, cualifican leads y se sincronizan con tu CRM—automáticamente. 
            Ahorra 15-20 horas semanales en interacciones manuales mientras mejoras los tiempos de respuesta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-normal bg-foreground text-background hover:bg-foreground/90 transition-all duration-200"
            >
              Evaluación Gratuita de 30 Minutos
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
            El Problema del WhatsApp Manual
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="space-y-4">
              <h3 className="text-xl font-normal text-foreground">Tu equipo está saturado</h3>
              <p className="text-muted-foreground">
                Más de 50 consultas diarias de WhatsApp. Las mismas preguntas repetidas. El personal pasa horas 
                respondiendo manualmente en lugar de trabajo de alto valor. Tiempos de respuesta de horas o incluso días.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-normal text-foreground">Los clientes están frustrados</h3>
              <p className="text-muted-foreground">
                Las respuestas lentas pierden ventas. Los clientes esperan respuestas instantáneas. Los procesos 
                manuales no escalan. Pierdes oportunidades mientras tu competencia automatiza.
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
            WhatsApp Automatizado Que Realmente Funciona
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-12">
            Construimos chatbots inteligentes de WhatsApp que se integran con tus sistemas existentes—CRM, bases de datos, 
            sitios web—para que los datos del cliente fluyan automáticamente. Sin copiar manualmente. Sin excels.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <MessageCircle className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Respuestas Instantáneas a FAQs</h3>
              <p className="text-sm text-muted-foreground">
                Tu chatbot responde preguntas comunes al instante—horarios, precios, disponibilidad. 
                Los clientes obtienen respuestas inmediatas, 24/7.
              </p>
            </div>
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <Zap className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Cualificación de Leads</h3>
              <p className="text-sm text-muted-foreground">
                Recopila información clave automáticamente, cualifica leads y enrútalos a la persona correcta. 
                Tu equipo solo gestiona prospectos calientes.
              </p>
            </div>
            <div className="p-6 border border-border/60 bg-black/[0.02]">
              <TrendingUp className="w-10 h-10 text-foreground/80 mb-4" />
              <h3 className="text-lg font-normal text-foreground mb-3">Integración con CRM</h3>
              <p className="text-sm text-muted-foreground">
                Cada interacción se sincroniza automáticamente con tu CRM. Historial completo de conversaciones. 
                Sin entrada de datos. Solo insights.
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
            Cómo Implementamos Tu Automatización de WhatsApp
          </h2>
          <div className="space-y-8 max-w-3xl">
            {[
              {
                step: "01",
                title: "Descubrimiento del Proceso",
                description: "Analizamos tu flujo actual de WhatsApp, consultas comunes y puntos de dolor. Llamada de evaluación de 30 minutos para entender tus necesidades."
              },
              {
                step: "02",
                title: "Diseño del Chatbot",
                description: "Diseñamos flujos de conversación que manejan tus casos de uso específicos. Apruebas los flujos antes de que comience cualquier desarrollo."
              },
              {
                step: "03",
                title: "Integración y Configuración",
                description: "Conectamos la API de WhatsApp Business, integramos con tu CRM/sistemas, probamos exhaustivamente y formamos a tu equipo."
              },
              {
                step: "04",
                title: "Lanzamiento y Optimización",
                description: "Lanzamos, monitorizamos el rendimiento y optimizamos continuamente basándonos en datos de uso real. Revisiones mensuales incluidas."
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
            Precios Transparentes
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12">
            Sin costes ocultos. Sin sorpresas. Precios claros que reflejan el valor que obtienes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="border-2 border-border p-8">
              <h3 className="text-2xl font-normal text-foreground mb-4">Configuración Inicial</h3>
              <div className="mb-6">
                <span className="text-4xl font-normal text-foreground">€5.500</span>
                <span className="text-muted-foreground ml-2">pago único</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Configuración API WhatsApp Business</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Diseño de flujo de chatbot personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Integración con CRM (1 sistema)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Pruebas y formación del equipo</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-foreground p-8 bg-foreground/5">
              <h3 className="text-2xl font-normal text-foreground mb-4">Soporte Mensual</h3>
              <div className="mb-6">
                <span className="text-4xl font-normal text-foreground">€1.200</span>
                <span className="text-muted-foreground ml-2">al mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Monitoreo y optimización continua</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Actualizaciones regulares de contenido y flujos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Soporte prioritario</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Revisiones mensuales de rendimiento</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 max-w-2xl">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-normal text-foreground mb-2">ROI Típico: 3 Meses</h4>
                <p className="text-sm text-muted-foreground">
                  Si gestionas 50+ consultas diarias de WhatsApp, son ~20 horas semanales de tiempo del equipo. 
                  Automatizar el 50% ahorra €1.500-€2.500/mes en costes laborales. La inversión se autofinancia rápidamente.
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
            Perfecto Para PYMEs Españolas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-normal text-foreground mb-3">Comercio y E-commerce</h3>
              <p className="text-sm text-muted-foreground">
                Responde preguntas sobre productos, verifica disponibilidad de stock, gestiona consultas de pedidos, 
                envía actualizaciones de envío automáticamente.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-normal text-foreground mb-3">Inmobiliaria</h3>
              <p className="text-sm text-muted-foreground">
                Cualifica consultas de propiedades, agenda visitas, responde preguntas comunes sobre listados, 
                envía recomendaciones de propiedades.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-normal text-foreground mb-3">Hostelería y Servicios</h3>
              <p className="text-sm text-muted-foreground">
                Gestiona consultas de reservas, responde FAQs sobre servicios/horarios, envía confirmaciones, 
                recopila feedback automáticamente.
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
          <SectionBadge number={2} label="Empezar" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-8 md:mb-12 leading-[1.1] tracking-tight">
            ¿Listo Para Automatizar Tu WhatsApp?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 md:mb-16 leading-relaxed font-normal max-w-3xl">
            Reserva una evaluación gratuita de 30 minutos. Analizaremos tu flujo de trabajo de WhatsApp y te mostraremos 
            exactamente cómo la automatización puede ahorrar tiempo a tu equipo—sin compromiso.
          </p>
          <ContactForm locale="es" />
        </div>
      </section>
    </main>
  )
}

