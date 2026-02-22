import { Building2, Home, Palette, Box } from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Commercial Interiors",
    who: "Offices, restaurants, retail & hospitality",
    description:
      "The Northeast&apos;s commercial fabric is dense with character &mdash; post-industrial lofts, adaptive reuse buildings, neighborhood anchor spots. We work with that grain, not against it. Spaces that communicate something true about who runs them.",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Residential Design",
    who: "Primary homes, townhouses & multi-unit",
    description:
      "Whether it&apos;s a Victorian triple-decker in Somerville or a pre-war apartment in Crown Heights, we design around the full texture of your life &mdash; your heirlooms and habits, your need for stillness and for gathering &mdash; not a curated version of it.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Wellness & Community Spaces",
    who: "Clinics, studios, cultural & civic organizations",
    description:
      "In a region where community institutions are under constant development pressure, the spaces where people heal and gather carry enormous weight. We design with sensory load, material safety, acoustic threshold, and community dignity as primary constraints.",
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "FF&E & Finishing",
    who: "Materials, sourcing & installation",
    description:
      "We source from Northeast craftspeople and mission-aligned makers wherever possible. Every fixture and finish is specified with transparency, durability, and the cultural intelligence of your project &mdash; not just the current issue of a trade publication.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        <p className="text-[11px] tracking-[0.45em] uppercase font-medium mb-8" style={{ color: '#D4622A' }}>
          What We Do
        </p>
        <h2 className="font-display font-light italic leading-[1.05] mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#160C04' }}>
          Every project is different.
          <span className="not-italic font-semibold"> So is our approach to it.</span>
        </h2>
        <p className="text-[18px] leading-[2] font-light mb-16 max-w-xl" style={{ color: '#3D2510' }}>
          A repurposed textile mill in Lowell requires entirely different thinking than
          a Harlem brownstone or a Boston wellness clinic. We don&apos;t bring
          a formula &mdash; we bring experience with all of it.
        </p>

        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(212,98,42,0.2)' }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 lg:p-10"
              style={{ backgroundColor: '#FFFAF5' }}
            >
              <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-5" style={{ borderColor: 'rgba(212,98,42,0.35)', color: '#D4622A' }}>
                {s.icon}
              </div>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-2 font-medium" style={{ color: '#9A6030' }}>{s.who}</p>
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: '#160C04' }}>{s.title}</h3>
              <p className="text-[15px] leading-[1.9]" style={{ color: '#3D2510' }}>{s.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

