import { Building2, Home, Palette, Box } from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Commercial Interiors",
    who: "Offices, corporate HQ, retail & hospitality",
    description:
      "Daniela has led space planning and design development for multi-site corporate offices up to 25,000 sq. ft. &mdash; applying activity-based zoning, adjacency mapping, and environmental branding to build spaces that reinforce how organizations actually work.",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Residential Design",
    who: "Primary homes, townhouses & multi-unit",
    description:
      "Rooted in material intelligence and a genuine interest in how people live, residential projects receive the same documentation rigor as commercial work &mdash; full FF&amp;E coordination, finish specifications, and site review through installation.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Wellness & Community Spaces",
    who: "Clinics, studios, cultural & civic organizations",
    description:
      "Sensory load, acoustic threshold, material safety, and ergonomic planning are not afterthoughts &mdash; they are primary design constraints. Daniela has delivered medical wellness clinics and community-facing spaces built around the people who use them daily.",
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "FF&E & Construction Documents",
    who: "Specs, sourcing, Revit & ArchiCAD production",
    description:
      "Complete FF&amp;E packages, procurement coordination, and construction document production in Revit and ArchiCAD. Standardized workflows that reduce permit review timelines, cut field change orders, and keep installations on schedule.",
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
          From 25,000 sq. ft. corporate headquarters to a single-room wellness clinic,
          Daniela brings the same disciplined approach: understand the program deeply,
          document it precisely, and deliver a space that functions as well as it looks.
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

