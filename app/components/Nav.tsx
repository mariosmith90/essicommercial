"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

interface NavProps {
  onInquire?: () => void;
}

export default function Nav({ onInquire }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl"
        style={{
          backgroundColor: scrolled ? 'rgba(250,247,242,0.98)' : 'rgba(250,247,242,0.45)',
          boxShadow: scrolled ? '0 1px 0 0 rgba(22,12,4,0.1)' : 'none',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between h-[88px]">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-none group"
          >
            <span className="font-display text-[48px] font-semibold tracking-[0.2em] text-[#160C04] group-hover:text-[#D4622A] transition-colors duration-300 leading-none">
              ESSI
            </span>
            <span className="text-[11px] font-sans tracking-[0.45em] uppercase text-[#9A6030] mt-1">
              Commercial
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleLink(e, l.href)}
                className="text-[11px] tracking-[0.2em] uppercase text-[#3D2510] hover:text-[#D4622A] transition-colors duration-300 font-medium"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onInquire?.(); }}
              className="text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 text-white rounded-full transition-all duration-300 font-medium"
              style={{ backgroundColor: '#D4622A' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#B84A18')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#D4622A')}
            >
              Inquire
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-[#160C04] hover:bg-[#D4622A]/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen
              ? <X className="w-5 h-5" />
              : <Menu className="w-5 h-5" />
            }
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 flex flex-col justify-center items-start px-10 gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: '#FAF7F2' }}
      >
        <button
          type="button"
          className="absolute top-6 right-6 p-2 text-[#160C04]"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#9A6030] mb-2">Menu</p>
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => handleLink(e, l.href)}
            className="font-display text-5xl italic text-[#160C04] hover:text-[#D4622A] transition-colors duration-200"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {l.label}
          </a>
        ))}
        <button
          onClick={() => { setMenuOpen(false); onInquire?.(); }}
          className="mt-6 text-[11px] tracking-[0.2em] uppercase px-8 py-3 rounded-full text-white transition-all duration-300"
          style={{ backgroundColor: '#D4622A' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#B84A18')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#D4622A')}
        >
          Inquire
        </button>
      </div>
    </>
  );
}
