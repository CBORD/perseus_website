import Image from "next/image";

const LOGOS = [
  { name: "L'Oréal", src: "/logos/loreal-white-transparent.png" },
  { name: "Sia Partners", src: "/logos/sia-partners.png" },
  { name: "Neo4j", src: "/logos/neo4j.png" },
  { name: "AWS", src: "/logos/aws.png" },
  { name: "Apollo Tyres", src: "/logos/apollo-tyres-white-transparent.png" }
];

export function TrustStrip() {
  const marqueeItems = [...LOGOS, ...LOGOS];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-white/10 bg-slate-900/45 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Trusted by product and AI teams</p>
        </div>

        <div className="logo-fade-mask mt-5 overflow-hidden">
          <div className="logo-marquee gap-4 py-2">
            {marqueeItems.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-14 min-w-[180px] items-center justify-center bg-transparent px-5"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={44}
                  className={`w-auto object-contain opacity-90 grayscale brightness-0 invert ${
                    logo.name === "Apollo Tyres" ? "h-18" : "h-8"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
