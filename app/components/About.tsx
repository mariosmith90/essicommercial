import { Leaf, Sun, Layers } from "lucide-react";

const truths = [
  {
    icon: <Leaf className="w-5 h-5" />,
    color: "#C8A84A",
    title: "Sensation before specification",
    body: "We start with how you want the space to feel &mdash; acoustically, atmospherically, emotionally. The specs follow from that. Not the other way around.",
  },
  {
    icon: <Sun className="w-5 h-5" />,
    color: "#FAF7F2",
    title: "Radical cost transparency",
    body: "Budget anxiety kills more projects than bad design does. We put every cost on the table from day one &mdash; material, labor, contingency &mdash; so nothing blindsides you.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    color: "#C8A84A",
    title: "Identity as the brief",
    body: "Your heritage, your neighborhood&apos;s history, your community&apos;s future &mdash; these are design materials. We treat them with the same care as the joinery.",
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
          A lot of design firms work
          <br />
          <span className="not-italic font-semibold">in the Northeast. Very few listen to it.</span>
        </h2>
        <p className="text-[18px] leading-[2] font-light mb-6 max-w-2xl" style={{ color: 'rgba(250,247,242,0.72)' }}>
          We&apos;ve watched neighborhoods change, buildings get flipped, and communities
          lose the visual language that made them theirs. Gentrification doesn&apos;t
          just displace people &mdash; it erases the aesthetic memory of a place.
        </p>
        <p className="text-[18px] leading-[2] font-light mb-16 max-w-2xl" style={{ color: 'rgba(250,247,242,0.72)' }}>
          EssiCommercial was built as a counter to that. We practice design as an act
          of cultural stewardship &mdash; taking each project&apos;s specific history, community,
          and client seriously enough to make something that couldn&apos;t exist anywhere else.
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

