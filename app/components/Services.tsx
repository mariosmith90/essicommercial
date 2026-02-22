import { Building2, Home, Palette, Box } from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Commercial Interiors",
    who: "Offices, corporate HQ, retail & hospitality",
    description:
      "We design offices and commercial environments around how organizations actually operate &mdash; how teams move, collaborate, and need to focus. Space planning, adjacency mapping, and environmental branding are tools we use to make sure the layout earns its square footage.",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Residential Design",
    who: "Primary homes, townhouses & multi-unit",
    description:
      "Residential work gets the same rigor as commercial. Full FF&amp;E coordination, material specifications, and site presence through installation. We&apos;re interested in how you actually live &mdash; not just how the space photographs.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Wellness & Community Spaces",
    who: "Clinics, studios, cultural & civic organizations",
    description:
      "In wellness and community settings, the stakes of getting acoustics, lighting, and material selection wrong are higher. We treat sensory comfort and ergonomic planning as primary constraints from the first sketch &mdash; not adjustments made at the end.",
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "FF&E & Construction Documents",
    who: "Specs, sourcing, Revit & ArchiCAD production",
    description:
      "Complete FF&amp;E packages, procurement coordination, and full construction document production in Revit and ArchiCAD. We take the documentation side seriously because that&apos;s where most projects quietly lose time and budget.",
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
          <span className="not-italic font-semibold"> The process isn&apos;t.</span>
        </h2>
        <p className="text-[18px] leading-[2] font-light mb-16 max-w-xl" style={{ color: '#3D2510' }}>
          Whether it&apos;s a multi-floor corporate office or a single-suite clinic,
          we bring the same discipline: understand the program, get the documentation
          right, and stay involved long enough to make sure what gets built reflects
          what was designed.
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

