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
      question: "What kind of software do you specialise in?",
      answer:
        "Bespoke web applications, internal dashboards, and process-focused tools tailored to how your team works.",
    },
    {
      id: "integrations",
      question: "Can you build integrations with external platforms and tools?",
      answer:
        "Yes. We connect software with external services to centralise communication and reduce manual work.",
    },
    {
      id: "automation",
      question: "Do you handle process automation?",
      answer:
        "We identify repetitive steps and automate them with custom logic and integrations so your team focuses on what matters.",
    },
    {
      id: "existing-systems",
      question: "Do you only build new products, or can you extend existing systems?",
      answer:
        "Both. We take teams from idea to first product, and we extend existing systems with new modules, APIs, and integrations.",
    },
    {
      id: "getting-started",
      question: "How do projects usually start?",
      answer:
        "We start with focused sessions to understand your processes and goals. Then we define scope, technical approach, and roadmap.",
    },
  ],
  es: [
    {
      id: "specialisation",
      question: "¿En qué tipo de software estáis especializados?",
      answer:
        "Aplicaciones web a medida, paneles internos y herramientas orientadas a procesos, adaptadas a cómo trabaja tu equipo.",
    },
    {
      id: "integrations",
      question: "¿Podéis crear integraciones con plataformas y herramientas externas?",
      answer:
        "Sí. Conectamos el software con servicios externos para centralizar comunicación y reducir trabajo manual.",
    },
    {
      id: "automation",
      question: "¿Os encargáis también de automatizar procesos?",
      answer:
        "Detectamos tareas repetitivas y las automatizamos con lógica a medida e integraciones para que tu equipo se centre en lo que aporta valor.",
    },
    {
      id: "existing-systems",
      question: "¿Solo creáis productos nuevos o también ampliáis sistemas existentes?",
      answer:
        "Ambas cosas. Pasamos de idea a primer producto, y ampliamos sistemas existentes con nuevos módulos, APIs e integraciones.",
    },
    {
      id: "getting-started",
      question: "¿Cómo empieza normalmente un proyecto?",
      answer:
        "Empezamos con sesiones enfocadas para entender tus procesos y objetivos. Luego definimos alcance, enfoque técnico y hoja de ruta.",
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


