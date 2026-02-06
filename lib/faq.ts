import type { Locale } from "@/lib/copy"

export type FAQItem = {
  id: string
  question: string
  answer: string
}

export const faqContent: Record<Locale, FAQItem[]> = {
  en: [
    {
      id: "code-ownership",
      question: "Do we own the code?",
      answer:
        "Yes, 100%. Once the project is delivered and paid for, all source code, assets, and documentation belong to you. No vendor lock-in, no licensing fees.",
    },
    {
      id: "whatsapp-pricing",
      question: "How much does WhatsApp automation cost?",
      answer:
        "Most WhatsApp automation projects range from \u20ac5,500\u2013\u20ac15,000 for initial setup, with optional monthly support from \u20ac1,200/month. We tailor pricing to your needs and provide a transparent quote during your free 30-minute assessment.",
    },
    {
      id: "timeline",
      question: "What's the typical timeline?",
      answer:
        "Most projects: 6\u201312 weeks from kickoff to launch. Small automations: 3\u20136 weeks. Event displays can be delivered in 2\u20133 weeks when needed. Clear scope and pricing before we start.",
    },
    {
      id: "existing-systems",
      question: "Can you work with our existing systems?",
      answer:
        "Absolutely. We integrate with CRMs (Salesforce, HubSpot), ERPs, databases, and custom APIs. Data flows automatically\u2014no manual copy-pasting, no extra spreadsheets.",
    },
    {
      id: "changes-later",
      question: "What if we need changes later?",
      answer:
        "We offer ongoing support packages and are always available for updates. Your business evolves\u2014your software should too. Most clients opt for a monthly retainer for continuous improvements.",
    },
    {
      id: "whats-included",
      question: "What's included in a project?",
      answer:
        "Strategy, design, development, testing, deployment, team training, and 3-month post-launch support. Everything you need to go live with confidence.",
    },
    {
      id: "event-displays",
      question: "What can event displays do?",
      answer:
        "Turn static booths into interactive experiences. Real-time data, automated lead capture, meeting scheduling\u2014all connected to your CRM. Built for MWC, ISE, and Barcelona's biggest events.",
    },
  ],
  es: [
    {
      id: "code-ownership",
      question: "\u00bfSomos due\u00f1os del c\u00f3digo?",
      answer:
        "S\u00ed, 100%. Una vez entregado y pagado el proyecto, todo el c\u00f3digo fuente, recursos y documentaci\u00f3n os pertenecen. Sin dependencias de proveedor, sin licencias.",
    },
    {
      id: "whatsapp-pricing",
      question: "\u00bfCu\u00e1nto cuesta la automatizaci\u00f3n de WhatsApp?",
      answer:
        "La mayor\u00eda de proyectos de automatizaci\u00f3n WhatsApp van de \u20ac5.500\u2013\u20ac15.000 para la configuraci\u00f3n inicial, con soporte mensual opcional desde \u20ac1.200/mes. Ajustamos el precio a tus necesidades con un presupuesto transparente en tu evaluaci\u00f3n gratuita de 30 minutos.",
    },
    {
      id: "timeline",
      question: "\u00bfCu\u00e1l es el plazo t\u00edpico?",
      answer:
        "La mayor\u00eda de proyectos: 6\u201312 semanas desde el inicio hasta el lanzamiento. Automatizaciones peque\u00f1as: 3\u20136 semanas. Los displays para eventos pueden entregarse en 2\u20133 semanas si es necesario. Alcance y precio claros antes de empezar.",
    },
    {
      id: "existing-systems",
      question: "\u00bfPod\u00e9is trabajar con nuestros sistemas?",
      answer:
        "Por supuesto. Integramos con CRMs (Salesforce, HubSpot), ERPs, bases de datos y APIs personalizadas. Los datos fluyen autom\u00e1ticamente\u2014sin copias manuales, sin excels extra.",
    },
    {
      id: "changes-later",
      question: "\u00bfY si necesitamos cambios despu\u00e9s?",
      answer:
        "Ofrecemos paquetes de soporte continuo y siempre estamos disponibles para actualizaciones. Vuestro negocio evoluciona\u2014vuestro software tambi\u00e9n. La mayor\u00eda de clientes optan por un retainer mensual para mejoras continuas.",
    },
    {
      id: "whats-included",
      question: "\u00bfQu\u00e9 incluye un proyecto?",
      answer:
        "Estrategia, dise\u00f1o, desarrollo, testing, despliegue, formaci\u00f3n del equipo y 3 meses de soporte post-lanzamiento. Todo lo que necesit\u00e1is para lanzar con confianza.",
    },
    {
      id: "event-displays",
      question: "\u00bfQu\u00e9 pueden hacer los displays para eventos?",
      answer:
        "Convertir stands est\u00e1ticos en experiencias interactivas. Datos en tiempo real, captura autom\u00e1tica de leads, programaci\u00f3n de reuniones\u2014todo conectado a vuestro CRM. Construido para MWC, ISE y los grandes eventos de Barcelona.",
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
