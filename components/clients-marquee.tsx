"use client"

import Image from "next/image"

const clients = [
  { name: "PRO EXPO", src: "/clients/proexpo.webp", alt: "PRO EXPO logo — experiential events partner" },
  { name: "DAIKIN", src: "/clients/daikin.svg", alt: "Daikin logo — HVAC manufacturer client" },
  { name: "Maersk", src: "/clients/maersk.png", alt: "Maersk logo — global logistics and shipping client" },
  { name: "Eseme", src: "/clients/eseme.png", alt: "Eseme logo — digital agency client" },
]

export function ClientsMarquee() {
  // Duplicate items multiple times for seamless infinite scroll
  // Need enough duplicates to ensure smooth looping without visible gaps
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients]

  return (
    <div className="relative w-full overflow-hidden border-y border-border/40 py-8 md:py-10">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none" 
        style={{
          background: 'linear-gradient(to right, var(--background) 0%, transparent 100%)'
        }}
      />
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none" 
        style={{
          background: 'linear-gradient(to left, var(--background) 0%, transparent 100%)'
        }}
      />
      <div className="flex animate-marquee-reverse whitespace-nowrap" style={{ width: 'fit-content' }}>
        {duplicatedClients.map((client, index) => {
          const isMaersk = client.name === "Maersk"
          const isDaikin = client.name === "DAIKIN"
          const width = isMaersk ? 260 : isDaikin ? 110 : 180
          const height = isMaersk ? 120 : isDaikin ? 60 : 90
          const maxHeight = isMaersk
            ? "max-h-16 md:max-h-24"
            : isDaikin
              ? "max-h-8 md:max-h-12"
              : "max-h-12 md:max-h-18"

          return (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center px-12 md:px-16 flex-shrink-0"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={width}
                height={height}
                loading="lazy"
                className={`${maxHeight} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

