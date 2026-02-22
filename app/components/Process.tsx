const steps = [
  {
    num: "01",
    title: "Discovery — we listen before we draw",
    body:
      "The first conversation covers your program, your operational needs, and what hasn't worked in your current space. We're building the brief that will drive every decision downstream — spatial, material, and budgetary.",
  },
  {
    num: "02",
    title: "Concept — everything on paper before a dollar moves",
    body:
      "You receive a full concept package: spatial layout, material palette, moodboard, and a line-by-line cost estimate before any purchasing begins. Stakeholder walkthroughs are part of this phase — approvals happen here, not during construction.",
  },
  {
    num: "03",
    title: "Development — documents that build without confusion",
    body:
      "Revit and ArchiCAD construction documents, 3D walkthroughs, FF&E specifications, and finish schedules. Daniela's documentation standard has reduced field change orders by 40% and cut permit review timelines across multi-site projects.",
  },
  {
    num: "04",
    title: "Delivery — on site until it's right",
    body:
      "We coordinate procurement lead times, sequence installations, and conduct site reviews through completion. The project closes when the space performs as designed — not when the last box leaves the floor.",
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
          After a decade managing construction documents, coordinating trades, and
          tracking FF&amp;E across complex projects, Daniela built a process designed
          around one goal: no surprises. For you or for the build team.
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
