import type { Locale } from "@/lib/copy"

export type FAQItem = {
  id: string
  question: string
  answer: string
}

export const faqContent: Record<Locale, FAQItem[]> = {
  en: [
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
  ],
  es: [
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


