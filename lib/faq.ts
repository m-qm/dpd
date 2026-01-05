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
        "€5,500 setup + €1,200/month. Includes API integration, chatbot design, CRM connection, and ongoing support. Most clients see ROI within 3 months.",
    },
    {
      id: "crm-erp",
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes. We connect to your CRMs, ERPs, and databases. Data flows automatically—no copy-pasting, no extra spreadsheets.",
    },
    {
      id: "timeline-budget",
      question: "Timeline and cost?",
      answer:
        "Small projects: 3–6 weeks. Larger solutions: 8–12 weeks. Clear scope and pricing before we start.",
    },
    {
      id: "specialisation",
      question: "What makes you different?",
      answer:
        "We understand your process first, then build software that fits how you actually work. No templates, no compromises.",
    },
    {
      id: "event-projects",
      question: "What can event displays do?",
      answer:
        "Turn static booths into interactive experiences. Real-time data, lead capture, meeting scheduling—all connected to your systems.",
    },
  ],
  es: [
    {
      id: "whatsapp-pricing",
      question: "¿Cuánto cuesta la automatización de WhatsApp?",
      answer:
        "€5.500 configuración + €1.200/mes. Incluye integración API, diseño del chatbot, conexión CRM y soporte continuo. ROI típico en 3 meses.",
    },
    {
      id: "crm-erp",
      question: "¿Podéis integraros con nuestros sistemas?",
      answer:
        "Sí. Conectamos con vuestros CRMs, ERPs y bases de datos. Los datos fluyen automáticamente—sin copias manuales, sin excels extra.",
    },
    {
      id: "timeline-budget",
      question: "¿Plazo y coste?",
      answer:
        "Proyectos pequeños: 3–6 semanas. Soluciones grandes: 8–12 semanas. Alcance y precio claros antes de empezar.",
    },
    {
      id: "specialisation",
      question: "¿Qué os hace diferentes?",
      answer:
        "Entendemos vuestro proceso primero, luego construimos software que se adapta a cómo trabajáis realmente. Sin plantillas, sin compromisos.",
    },
    {
      id: "event-projects",
      question: "¿Qué pueden hacer los displays para eventos?",
      answer:
        "Convertir stands estáticos en experiencias interactivas. Datos en tiempo real, captura de leads, programación de reuniones—todo conectado a vuestros sistemas.",
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
