"use client";

import { Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: '#0C0804', color: 'rgba(250,247,242,0.5)' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-20">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 pb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>

          {/* Brand + tagline */}
          <div className="max-w-xs">
            <div className="mb-3">
              <p className="font-display text-2xl tracking-widest text-white">ESSI</p>
              <p className="text-[8px] tracking-[0.45em] uppercase mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Commercial</p>
            </div>
            <p className="text-[13px] leading-[1.9]">
              Full-service interior design and architecture.
              The Northeast &middot; Est. 2012.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 border rounded-full flex items-center justify-center transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4622A'; e.currentTarget.style.color = '#D4622A'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = ''; }}
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 border rounded-full flex items-center justify-center transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4622A'; e.currentTarget.style.color = '#D4622A'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = ''; }}
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Nav + Contact side by side */}
          <div className="flex gap-16">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Navigate</p>
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <button
                      onClick={() => scrollTo(l.href)}
                      className="text-[13px] transition-colors hover:text-white"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Studio</p>
              <div className="space-y-2.5 text-[13px]">
                <p>New York, NY</p>
                <a href="mailto:hello@essicommercial.com" className="block hover:text-white transition-colors">
                  hello@essicommercial.com
                </a>
                <a href="tel:+12125550123" className="block hover:text-white transition-colors">
                  (212) 555-0123
                </a>
                <p className="text-[11px] pt-2" style={{ color: 'rgba(255,255,255,0.25)' }}>Mon–Fri · 9am–6pm EST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p>© {new Date().getFullYear()} EssiCommercial. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

