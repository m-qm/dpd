import type { Locale } from "@/lib/copy"

export type FAQItem = {
  id: string
  question: string
  answer: string
}

export const faqContent: Record<Locale, FAQItem[]> = {
  en: [
    {
      id: "whatsapp-pricing",
      question: "How much does WhatsApp automation cost?",
      answer:
        "Our WhatsApp automation service starts at €5,500 for the initial setup (API integration, chatbot design, CRM connection, testing, and training), plus €1,200 per month for ongoing support and optimization. The monthly retainer includes monitoring, updates, feature enhancements, and priority support to ensure your chatbot continues delivering value.",
    },
    {
      id: "retainer-included",
      question: "What's included in the monthly retainer?",
      answer:
        "The €1,200/month retainer covers continuous monitoring of your chatbot performance, regular content updates, small feature tweaks, optimization based on usage data, priority support, and monthly check-ins to discuss improvements. We ensure your automation stays effective as your business evolves.",
    },
    {
      id: "whatsapp-roi",
      question: "How long until WhatsApp automation pays for itself?",
      answer:
        "Most clients see ROI within 3 months. If you're currently handling 50+ WhatsApp inquiries daily, that's roughly 15-20 hours per week of staff time. Automating even 50% of those inquiries typically saves €1,500-€2,500/month in labor costs, making the investment self-funding quickly while improving response times.",
    },
    {
      id: "crm-erp",
      question: "Can you integrate with our existing CRM/ERP system?",
      answer:
        "Yes. Most of our work involves connecting to tools you already use—CRMs, ERPs, marketing platforms, or internal databases. We map your process first, then design integrations so data flows between systems without your team having to copy-paste or maintain extra spreadsheets.",
    },
    {
      id: "timeline-budget",
      question: "What's your typical project timeline and cost?",
      answer:
        "Smaller projects like a focused web experience or chatbot typically take 3–6 weeks. Larger custom software or event solutions can run 8–12 weeks or more, depending on scope. We always start with a short scoping phase and give you a clear range before writing any code.",
    },
    {
      id: "post-launch",
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. We can either hand over a well-documented project to your internal team, or stay on as a long-term partner. Many clients keep us on a light retainer for improvements, new features, and support around key events or launches.",
    },
    {
      id: "whatsapp-chatbots",
      question: "Can you build a chatbot for WhatsApp Business?",
      answer:
        "Yes. We design and build WhatsApp chatbots that can qualify leads, answer FAQs, route requests, and sync with your existing tools. We can work with official WhatsApp Business providers and help you choose the right setup for your use case.",
    },
    {
      id: "non-technical",
      question: "Do you work with non-technical clients?",
      answer:
        "Often. Many of our clients are operations, marketing, or event teams without an internal dev team. We keep language clear, focus on outcomes instead of jargon, and make sure there's always a simple way for your team to use and update what we build.",
    },
    {
      id: "specialisation",
      question: "What makes your approach different?",
      answer:
        "We focus on understanding your team's process first, then building software that fits how you actually work. Instead of forcing you into templates, we create custom solutions—from websites to interactive event displays—that reduce manual work and connect your systems seamlessly.",
    },
    {
      id: "chatbots-messaging",
      question: "How do chatbots and messaging integrations help my business?",
      answer:
        "They automate repetitive interactions and centralize communication. For example, a logistics company might use WhatsApp integration to send shipment updates automatically, or an event organizer could use a chatbot to answer attendee questions 24/7. We connect these tools to your existing systems so everything works together.",
    },
    {
      id: "event-projects",
      question: "What can interactive displays do for events?",
      answer:
        "They turn static booths into engaging experiences. Imagine a trade fair where visitors interact with a display that shows real-time product data, schedules meetings, or collects leads—all connected to your CRM. We've built displays that handle everything from registration to live data visualization, making events more interactive and data-driven.",
    },
    {
      id: "fast-execution",
      question: "How do you deliver projects quickly without cutting corners?",
      answer:
        "Speed comes from specialization and deep process understanding, not shortcuts. When we understand your workflow upfront, we can build exactly what you need—no unnecessary features, no rework. For urgent projects like event displays, we prioritize core functionality first, then iterate based on real usage.",
    },
    {
      id: "time-sensitive",
      question: "Can you handle projects with tight deadlines?",
      answer:
        "Yes. We've delivered interactive event displays in weeks, not months. The key is starting with a clear understanding of your process and what success looks like. Once we know that, we can move fast because we're building the right thing from day one, not guessing and iterating later.",
    },
    {
      id: "existing-systems",
      question: "Do you work with existing systems or only build new ones?",
      answer:
        "Both. We often extend what you already have—adding a chatbot to your website, connecting your CRM to WhatsApp, or building an interactive display that pulls data from your existing database. We integrate with your tools rather than replacing them, so your team doesn't have to learn new systems.",
    },
    {
      id: "barcelona-events",
      question: "What events have you worked on in Barcelona?",
      answer:
        "We've delivered interactive display solutions for trade shows and exhibitions in Barcelona, including work with event organizers and exhibitors. Our displays have been used at major Barcelona venues for lead capture, real-time data visualization, and attendee engagement. Each project is custom-built for the specific event and booth requirements.",
    },
    {
      id: "payment-plans",
      question: "Do you offer payment plans?",
      answer:
        "Yes. For both WhatsApp automation and event display projects, we typically structure payments as 50% upfront when starting and 50% upon delivery. For ongoing monthly retainers, payment is billed at the beginning of each month. We can discuss custom payment arrangements for larger projects.",
    },
    {
      id: "fast-event-delivery",
      question: "Can you deliver an event display in 2-3 weeks?",
      answer:
        "Yes, when needed. We've delivered interactive event displays on tight timelines for urgent trade shows. The key is starting with a clear understanding of your requirements upfront. For rush projects, we prioritize core functionality first and can iterate after the event. Contact us as soon as possible to discuss your event timeline.",
    },
  ],
  es: [
    {
      id: "whatsapp-pricing",
      question: "¿Cuánto cuesta la automatización de WhatsApp?",
      answer:
        "Nuestro servicio de automatización de WhatsApp comienza en €5.500 para la configuración inicial (integración API, diseño del chatbot, conexión CRM, pruebas y formación), más €1.200 al mes por soporte continuo y optimización. La cuota mensual incluye monitoreo, actualizaciones, mejoras de funcionalidades y soporte prioritario para asegurar que tu chatbot sigue generando valor.",
    },
    {
      id: "retainer-included",
      question: "¿Qué incluye la cuota mensual?",
      answer:
        "La cuota de €1.200/mes cubre el monitoreo continuo del rendimiento de tu chatbot, actualizaciones regulares de contenido, pequeños ajustes de funcionalidad, optimización basada en datos de uso, soporte prioritario y revisiones mensuales para discutir mejoras. Nos aseguramos de que tu automatización siga siendo efectiva a medida que tu negocio evoluciona.",
    },
    {
      id: "whatsapp-roi",
      question: "¿Cuánto tarda en amortizarse la automatización de WhatsApp?",
      answer:
        "La mayoría de clientes ven ROI en 3 meses. Si actualmente gestionas 50+ consultas diarias de WhatsApp, son aproximadamente 15-20 horas semanales de tiempo del equipo. Automatizar solo el 50% de esas consultas típicamente ahorra €1.500-€2.500/mes en costes laborales, haciendo que la inversión se autofinancie rápidamente mientras mejora los tiempos de respuesta.",
    },
    {
      id: "crm-erp",
      question: "¿Podéis integraros con nuestro CRM o ERP actual?",
      answer:
        "Sí. Gran parte de nuestro trabajo consiste en conectar las herramientas que ya usáis—CRMs, ERPs, plataformas de marketing o bases de datos internas. Primero mapeamos vuestro proceso y después diseñamos las integraciones para que los datos fluyan entre sistemas sin copias manuales ni excels extra.",
    },
    {
      id: "timeline-budget",
      question: "¿Cuál es vuestro plazo y coste típico de proyecto?",
      answer:
        "Proyectos más acotados, como una experiencia web concreta o un chatbot, suelen tardar entre 3 y 6 semanas. Soluciones de software a medida o para eventos más grandes pueden ir de 8 a 12 semanas o más, según el alcance. Siempre empezamos con una fase corta de definición y te damos un rango claro antes de escribir código.",
    },
    {
      id: "post-launch",
      question: "¿Ofrecéis soporte continuo después del lanzamiento?",
      answer:
        "Sí. Podemos entregar un proyecto bien documentado a tu equipo interno o seguir como partner a largo plazo. Muchos clientes nos mantienen con una bolsa de horas ligera para mejoras, nuevas funcionalidades y soporte alrededor de eventos o lanzamientos clave.",
    },
    {
      id: "whatsapp-chatbots",
      question: "¿Podéis crear un chatbot para WhatsApp Business?",
      answer:
        "Sí. Diseñamos y desarrollamos chatbots para WhatsApp que cualifican leads, responden preguntas frecuentes, enrutan solicitudes y se sincronizan con tus herramientas actuales. Trabajamos con proveedores oficiales de WhatsApp Business y te ayudamos a elegir la opción adecuada para tu caso.",
    },
    {
      id: "non-technical",
      question: "¿Trabajáis con equipos no técnicos?",
      answer:
        "A menudo. Muchos de nuestros clientes son equipos de operaciones, marketing o eventos sin equipo técnico propio. Usamos un lenguaje claro, nos centramos en resultados en lugar de jerga y nos aseguramos de que siempre haya una forma sencilla de usar y actualizar lo que construimos.",
    },
    {
      id: "specialisation",
      question: "¿Qué hace diferente vuestro enfoque?",
      answer:
        "Nos enfocamos en entender primero el proceso de tu equipo, luego construimos software que se adapta a cómo trabajáis realmente. En lugar de forzaros a usar plantillas, creamos soluciones a medida—desde sitios web hasta displays interactivos para eventos—que reducen trabajo manual y conectan vuestros sistemas sin problemas.",
    },
    {
      id: "chatbots-messaging",
      question: "¿Cómo ayudan los chatbots e integraciones de mensajería a mi negocio?",
      answer:
        "Automatizan interacciones repetitivas y centralizan la comunicación. Por ejemplo, una empresa logística podría usar integración con WhatsApp para enviar actualizaciones de envío automáticamente, o un organizador de eventos podría usar un chatbot para responder preguntas de asistentes 24/7. Conectamos estas herramientas con vuestros sistemas existentes para que todo funcione junto.",
    },
    {
      id: "event-projects",
      question: "¿Qué pueden hacer los displays interactivos para eventos?",
      answer:
        "Convierten stands estáticos en experiencias atractivas. Imagina una feria donde los visitantes interactúan con un display que muestra datos de productos en tiempo real, agenda reuniones o recopila leads—todo conectado a vuestro CRM. Hemos construido displays que manejan desde registro hasta visualización de datos en vivo, haciendo los eventos más interactivos y basados en datos.",
    },
    {
      id: "fast-execution",
      question: "¿Cómo entregáis proyectos rápidamente sin recortar calidad?",
      answer:
        "La velocidad viene de la especialización y entender en profundidad el proceso, no de atajos. Cuando entendemos vuestro flujo de trabajo desde el inicio, podemos construir exactamente lo que necesitáis—sin características innecesarias, sin rehacer. Para proyectos urgentes como displays para eventos, priorizamos la funcionalidad principal primero, luego iteramos basándonos en el uso real.",
    },
    {
      id: "time-sensitive",
      question: "¿Podéis manejar proyectos con plazos muy ajustados?",
      answer:
        "Sí. Hemos entregado displays interactivos para eventos en semanas, no meses. La clave es empezar con una comprensión clara de vuestro proceso y cómo se ve el éxito. Una vez que sabemos eso, podemos movernos rápido porque estamos construyendo lo correcto desde el primer día, no adivinando e iterando después.",
    },
    {
      id: "existing-systems",
      question: "¿Trabajáis con sistemas existentes o solo creáis nuevos?",
      answer:
        "Ambas cosas. A menudo ampliamos lo que ya tenéis—agregando un chatbot a vuestro sitio web, conectando vuestro CRM a WhatsApp, o construyendo un display interactivo que extrae datos de vuestra base de datos existente. Nos integramos con vuestras herramientas en lugar de reemplazarlas, para que vuestro equipo no tenga que aprender nuevos sistemas.",
    },
    {
      id: "barcelona-events",
      question: "¿En qué eventos de Barcelona habéis trabajado?",
      answer:
        "Hemos entregado soluciones de displays interactivos para ferias y exposiciones en Barcelona, incluyendo trabajo con organizadores de eventos y expositores. Nuestros displays se han usado en venues importantes de Barcelona para captura de leads, visualización de datos en tiempo real y engagement de asistentes. Cada proyecto se construye a medida para los requisitos específicos del evento y stand.",
    },
    {
      id: "payment-plans",
      question: "¿Ofrecéis planes de pago?",
      answer:
        "Sí. Para proyectos de automatización de WhatsApp y displays para eventos, típicamente estructuramos los pagos como 50% al inicio y 50% en la entrega. Para cuotas mensuales continuas, se factura al principio de cada mes. Podemos discutir arreglos de pago personalizados para proyectos más grandes.",
    },
    {
      id: "fast-event-delivery",
      question: "¿Podéis entregar un display para eventos en 2-3 semanas?",
      answer:
        "Sí, cuando es necesario. Hemos entregado displays interactivos para eventos con plazos ajustados para ferias urgentes. La clave es empezar con una comprensión clara de vuestros requisitos desde el inicio. Para proyectos urgentes, priorizamos la funcionalidad principal primero y podemos iterar después del evento. Contactadnos lo antes posible para discutir vuestro timeline de evento.",
    },
  ],
}

export function getFaqJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent[locale].map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}


