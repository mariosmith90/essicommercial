import { Leaf, Sun, Layers } from "lucide-react";

const truths = [
  {
    icon: <Leaf className="w-5 h-5" />,
    color: "#C8A84A",
    title: "Feel first, specify second",
    body: "Before a single line is drawn, we need to understand how the space should feel &mdash; acoustically, ergonomically, atmospherically. That answer shapes everything that follows.",
  },
  {
    icon: <Sun className="w-5 h-5" />,
    color: "#FAF7F2",
    title: "Drawings that build without confusion",
    body: "Sloppy documentation costs clients time and money in the field. We take construction documents seriously &mdash; thorough, coordinated packages that trades can actually build from.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    color: "#C8A84A",
    title: "Your identity is the brief",
    body: "Your brand, your people, your way of working &mdash; these aren&apos;t context for the design. They are the design. We build spaces that make sense for the specific organization inside them.",
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
          Built on a decade
          <br />
          <span className="not-italic font-semibold">of doing the actual work.</span>
        </h2>
        <p className="text-[18px] leading-[2] font-light mb-6 max-w-2xl" style={{ color: 'rgba(250,247,242,0.72)' }}>
          EssiCommercial grew out of years spent inside large commercial projects &mdash;
          coordinating trades, producing construction documents, managing FF&amp;E from
          spec to installation, and learning firsthand where most design engagements
          fall apart.
        </p>
        <p className="text-[18px] leading-[2] font-light mb-16 max-w-2xl" style={{ color: 'rgba(250,247,242,0.72)' }}>
          We started this studio because we wanted to work at a scale where the design
          intent actually survives the build. Smaller project load, deeper involvement,
          and documentation rigorous enough that nothing gets lost between the drawing
          and the wall.
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

