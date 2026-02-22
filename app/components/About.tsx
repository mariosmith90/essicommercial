import { Leaf, Sun, Layers } from "lucide-react";

const truths = [
  {
    icon: <Leaf className="w-5 h-5" />,
    color: "#C8A84A",
    title: "Sensation before specification",
    body: "Daniela starts every project by asking how the space needs to feel &mdash; acoustically, atmospherically, and ergonomically. The construction documents follow that intent. Never the other way around.",
  },
  {
    icon: <Sun className="w-5 h-5" />,
    color: "#FAF7F2",
    title: "Documentation that holds",
    body: "Precise Revit and ArchiCAD packages mean fewer field change orders, fewer RFIs, and faster permit approvals. Good drawings are the most underrated client service in this industry.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    color: "#C8A84A",
    title: "Your identity is the brief",
    body: "Your brand, your community, your operational reality &mdash; these are design materials with the same weight as the millwork. We treat them accordingly.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ backgroundColor: '#1A5C3A' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <p className="text-[11px] tracking-[0.45em] uppercase font-medium mb-8" style={{ color: '#C8A84A' }}>
          Why We Exist
        </p>
        <h2 className="font-display font-light italic leading-[1.05] mb-8" style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#FAF7F2' }}>
          Ten years of details.
          <br />
          <span className="not-italic font-semibold">Zero tolerance for vague drawings.</span>
        </h2>
        <p className="text-[18px] leading-[2] font-light mb-6 max-w-2xl" style={{ color: 'rgba(250,247,242,0.72)' }}>
          Daniela Smith founded EssiCommercial after a decade leading design at firms
          across New York &mdash; managing construction documents, directing space planning
          for multi-site corporate portfolios, and delivering luxury interiors from
          schematic concept through final installation.
        </p>
        <p className="text-[18px] leading-[2] font-light mb-16 max-w-2xl" style={{ color: 'rgba(250,247,242,0.72)' }}>
          She built this studio around a simple conviction: that the quality of the
          documentation is the quality of the project. Precise Revit packages, rigorous
          FF&amp;E coordination, and a genuine curiosity about each client&apos;s identity
          are not extras &mdash; they are the work.
        </p>

        {/* Three truths */}
        <div className="grid md:grid-cols-3 gap-10 pt-10 border-t" style={{ borderColor: 'rgba(250,247,242,0.14)' }}>
          {truths.map((t) => (
            <div key={t.title}>
              <div
                className="w-10 h-10 rounded-full border flex items-center justify-center mb-5"
                style={{ borderColor: t.color + '55', color: t.color }}
              >
                {t.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3" style={{ color: '#FAF7F2' }}>
                {t.title}
              </h3>
              <p className="text-[15px] leading-[1.9]" style={{ color: 'rgba(250,247,242,0.65)' }}>{t.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

