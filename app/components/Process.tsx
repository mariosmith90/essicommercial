const steps = [
  {
    num: "01",
    title: "We learn before we lead",
    body:
      "The first conversation is about your space, your history, and what hasn\u2019t worked before. We\u2019re listening for the things that won\u2019t show up on a floor plan \u2014 the cultural textures, the daily rituals, the things that genuinely matter.",
  },
  {
    num: "02",
    title: "We put everything on paper before we spend a dollar",
    body:
      "You receive a full concept package \u2014 spatial layout, material palette, moodboard, and a line-by-line cost estimate \u2014 before any purchasing begins. You approve every direction. Full stop.",
  },
  {
    num: "03",
    title: "We develop with precision",
    body:
      "Construction drawings, 3D walkthroughs, fixture specs, and sourcing from the region\u2019s best makers. We refine until the plan is genuinely right. Then we lock it so the build holds exactly what you approved.",
  },
  {
    num: "04",
    title: "We see it through to the last detail",
    body:
      "We manage the build and every trade on it. The project isn\u2019t finished when the last box is cleared \u2014 it\u2019s finished when you walk through and it feels like yours. That\u2019s the bar we hold ourselves to.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 text-white" style={{ backgroundColor: '#18120E' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        <p className="text-[11px] tracking-[0.45em] uppercase font-medium mb-8" style={{ color: '#D4622A' }}>
          How We Work
        </p>
        <h2 className="font-display font-light italic leading-[1.05] mb-8 text-white" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          Transparency isn&apos;t a feature.
          <span className="not-italic font-semibold"> It&apos;s the whole method.</span>
        </h2>
        <p className="text-[18px] leading-[2] font-light mb-16 max-w-xl" style={{ color: 'rgba(250,247,242,0.65)' }}>
          The Northeast is full of project horror stories &mdash; budgets that doubled,
          scopes that drifted, clients who stopped being consulted halfway through.
          Our process is designed explicitly around those failures.
        </p>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-6">
              <span className="font-display text-4xl font-light leading-none shrink-0" style={{ color: 'rgba(212,98,42,0.65)' }}>
                {step.num}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-[15px] leading-[1.9]" style={{ color: 'rgba(250,247,242,0.62)' }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
