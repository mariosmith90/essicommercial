"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGCSImage } from "@/app/lib/useGCSImage";

const categories = ["All", "Commercial", "Residential", "Wellness", "Hospitality"];

const projects = [
  {
    id: 1,
    title: "The Meridian",
    category: "Commercial",
    type: "Biophilic Corporate HQ",
    location: "TriBeCa, New York",
    year: "2024",
    imageKey: "projects/meridian.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Casa Verde",
    category: "Residential",
    type: "Sustainable Retreat",
    location: "Brooklyn, New York",
    year: "2024",
    imageKey: "projects/casa-verde.jpg",
    size: "small",
  },
  {
    id: 3,
    title: "Solstice",
    category: "Wellness",
    type: "Wellness Center & Day Spa",
    location: "Hudson Valley, New York",
    year: "2023",
    imageKey: "projects/solstice.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "The Collective",
    category: "Commercial",
    type: "Adaptive Reuse — Mixed Use",
    location: "Boston, Massachusetts",
    year: "2023",
    imageKey: "projects/collective.jpg",
    size: "medium",
  },
  {
    id: 5,
    title: "Parlour",
    category: "Hospitality",
    type: "Boutique Hotel — 32 Rooms",
    location: "The Hamptons, New York",
    year: "2023",
    imageKey: "projects/parlour.jpg",
    size: "medium",
  },
  {
    id: 6,
    title: "Harbor House",
    category: "Residential",
    type: "Modern Coastal Residence",
    location: "Greenwich, Connecticut",
    year: "2022",
    imageKey: "projects/harbor-house.jpg",
    size: "small",
  },
  {
    id: 7,
    title: "Dwell & Co.",
    category: "Hospitality",
    type: "Co-Living Development",
    location: "Cambridge, Massachusetts",
    year: "2022",
    imageKey: "projects/dwell-co.jpg",
    size: "large",
  },
  {
    id: 8,
    title: "Atrium",
    category: "Wellness",
    type: "Medical Wellness Clinic",
    location: "Montclair, New Jersey",
    year: "2022",
    imageKey: "projects/atrium.jpg",
    size: "small",
  },
];

type Project = typeof projects[0];

function ProjectCard({ project }: { project: Project }) {
  const signedUrl = useGCSImage(project.imageKey);

  const heightClass =
    project.size === "large"
      ? "h-[480px]"
      : project.size === "medium"
        ? "h-[360px]"
        : "h-[280px]";

  return (
    <div
      className={`relative break-inside-avoid overflow-hidden group cursor-pointer img-zoom ${heightClass}`}
    >
      {/* Background image via signed URL */}
      {signedUrl ? (
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${signedUrl})` }}
        />
      ) : (
        // Skeleton while loading
        <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: '#ccaa88' }} />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
        <span className="text-[#c47850] text-[10px] tracking-[0.35em] uppercase mb-2">
          {project.category} — {project.year}
        </span>
        <h3 className="font-display text-2xl font-semibold text-white mb-1">
          {project.title}
        </h3>
        <p className="text-white/70 text-xs tracking-wide mb-1">
          {project.type}
        </p>
        <p className="text-white/50 text-xs mb-4">
          {project.location}
        </p>
        <div className="flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase">
          <span>View Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Category badge (always visible) */}
      <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 group-hover:opacity-0 transition-opacity">
        <span className="text-white/90 text-[9px] tracking-[0.3em] uppercase">
          {project.category}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 lg:py-36" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.45em] uppercase font-medium mb-6" style={{ color: '#D4622A' }}>
            Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-display font-light italic leading-[1.05]" style={{ fontSize: 'clamp(34px, 5vw, 62px)', color: '#160C04' }}>
              Twelve years across
              <span className="not-italic font-semibold"> the region&apos;s most interesting spaces.</span>
            </h2>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  aria-pressed={active === cat}
                  className="text-[11px] tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-200 rounded-sm"
                  style={active === cat
                    ? { backgroundColor: '#D4622A', borderColor: '#D4622A', color: '#fff' }
                    : { backgroundColor: 'transparent', borderColor: 'rgba(212,98,42,0.28)', color: '#9A6030' }
                  }
                  onMouseEnter={e => { if (active !== cat) { e.currentTarget.style.borderColor = '#D4622A'; e.currentTarget.style.color = '#D4622A'; } }}
                  onMouseLeave={e => { if (active !== cat) { e.currentTarget.style.borderColor = 'rgba(212,98,42,0.28)'; e.currentTarget.style.color = '#9A6030'; } }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 border text-sm tracking-widest uppercase px-10 py-4 rounded-full transition-all duration-300"
            style={{ borderColor: '#D4622A', color: '#D4622A' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#D4622A';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#D4622A';
            }}
          >
            Discuss Your Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

