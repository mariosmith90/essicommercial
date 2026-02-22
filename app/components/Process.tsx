const steps = [
  {
    num: "01",
    title: "Discovery — we listen before we draw",
    body:
      "We start by understanding your program, how your team or clients use the space day-to-day, and where your current environment is working against you. That context shapes every decision that follows.",
  },
  {
    num: "02",
    title: "Concept — aligned before anything is purchased",
    body:
      "You get a complete concept package — layouts, material palette, FF&E direction, and a cost estimate — before any procurement begins. Stakeholder sign-off happens here, not mid-construction.",
  },
  {
    num: "03",
    title: "Development — built to be built",
    body:
      "Full construction documents in Revit or ArchiCAD, finish schedules, and coordinated specifications. We produce drawings that trades can follow without calling us for clarification on every detail.",
  },
  {
    num: "04",
    title: "Delivery — present through the finish",
    body:
      "We track procurement, review installations on site, and stay involved until the space is complete. The handoff happens when everything is right — not when the calendar runs out.",
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
          Good process is invisible.
          <span className="not-italic font-semibold"> Bad process isn&apos;t.</span>
        </h2>
        <p className="text-[18px] leading-[2] font-light mb-16 max-w-xl" style={{ color: 'rgba(250,247,242,0.65)' }}>
          We&apos;ve seen what happens when approvals slip into construction phase,
          when FF&amp;E lead times aren&apos;t tracked early, or when drawings leave
          too much open to interpretation. Our process is structured specifically to
          close those gaps.
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
