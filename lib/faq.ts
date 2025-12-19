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
      question: "What kind of software and solutions do you specialize in?",
      answer:
        "We specialize in custom websites, interactive TV displays for events and fairs, chatbots, messaging platform integrations (WhatsApp, Telegram), and highly specialized digital solutions that require fast execution and exceptional visual design.",
    },
    {
      id: "chatbots-messaging",
      question: "Do you build chatbots and messaging integrations?",
      answer:
        "Yes. We build intelligent chatbots and conversational interfaces, as well as integrations with WhatsApp, Telegram, and other messaging platforms. These solutions connect your systems with where your users communicate, automating interactions and centralizing communication.",
    },
    {
      id: "event-projects",
      question: "Do you work on event-specific projects?",
      answer:
        "Yes. We frequently work on interactive displays and screens for events, fairs, and exhibitions. These projects require specialized expertise, fast execution, and visually striking design to create engaging experiences for event attendees.",
    },
    {
      id: "fast-execution",
      question: "How fast can you deliver custom solutions?",
      answer:
        "Speed is one of our core strengths. We're built for fast execution on specialized projects, especially time-sensitive ones like event displays. We quickly understand requirements, design visually striking solutions, and deliver with technical excellence—all while maintaining the quality and customization your project demands.",
    },
    {
      id: "time-sensitive",
      question: "What makes your approach different for time-sensitive projects?",
      answer:
        "We combine rapid execution with specialized expertise and visual excellence. Our approach prioritizes understanding your needs quickly, designing solutions that are both visually striking and technically sound, and executing with precision—even under tight deadlines. This makes us ideal for event projects, launches, and other time-sensitive initiatives.",
    },
    {
      id: "existing-systems",
      question: "Do you only build new products, or can you extend existing systems?",
      answer:
        "Both. We take teams from idea to first product, and we extend existing systems with new modules, APIs, and integrations. Whether it's a new custom website, an interactive display system, or integrating chatbots into your existing platform, we adapt to your needs.",
    },
  ],
  es: [
    {
      id: "specialisation",
      question: "¿En qué tipo de software y soluciones estáis especializados?",
      answer:
        "Estamos especializados en sitios web a medida, displays interactivos para eventos y ferias, chatbots, integraciones con plataformas de mensajería (WhatsApp, Telegram), y soluciones digitales altamente especializadas que requieren ejecución rápida y diseño visual excepcional.",
    },
    {
      id: "chatbots-messaging",
      question: "¿Construís chatbots e integraciones de mensajería?",
      answer:
        "Sí. Construimos chatbots inteligentes e interfaces conversacionales, así como integraciones con WhatsApp, Telegram y otras plataformas de mensajería. Estas soluciones conectan tus sistemas con donde se comunican tus usuarios, automatizando interacciones y centralizando la comunicación.",
    },
    {
      id: "event-projects",
      question: "¿Trabajáis en proyectos específicos para eventos?",
      answer:
        "Sí. Trabajamos frecuentemente en displays interactivos y pantallas para eventos, ferias y exposiciones. Estos proyectos requieren experiencia especializada, ejecución rápida y diseño visualmente impactante para crear experiencias atractivas para los asistentes.",
    },
    {
      id: "fast-execution",
      question: "¿Qué tan rápido podéis entregar soluciones a medida?",
      answer:
        "La velocidad es una de nuestras fortalezas principales. Estamos construidos para ejecución rápida en proyectos especializados, especialmente aquellos con plazos ajustados como displays para eventos. Entendemos rápidamente los requisitos, diseñamos soluciones visualmente impactantes y entregamos con excelencia técnica—todo mientras mantenemos la calidad y personalización que tu proyecto requiere.",
    },
    {
      id: "time-sensitive",
      question: "¿Qué hace diferente vuestro enfoque para proyectos con plazos ajustados?",
      answer:
        "Combinamos ejecución rápida con experiencia especializada y excelencia visual. Nuestro enfoque prioriza entender tus necesidades rápidamente, diseñar soluciones que sean tanto visualmente impactantes como técnicamente sólidas, y ejecutar con precisión—incluso bajo plazos ajustados. Esto nos hace ideales para proyectos de eventos, lanzamientos y otras iniciativas con plazos ajustados.",
    },
    {
      id: "existing-systems",
      question: "¿Solo creáis productos nuevos o también ampliáis sistemas existentes?",
      answer:
        "Ambas cosas. Pasamos de idea a primer producto, y ampliamos sistemas existentes con nuevos módulos, APIs e integraciones. Ya sea un nuevo sitio web a medida, un sistema de displays interactivos, o integrar chatbots en tu plataforma existente, nos adaptamos a tus necesidades.",
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


