"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [btnHovered, setBtnHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#FAF7F2',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 inset-x-0 h-[3px]" style={{ backgroundColor: '#D4622A' }} />

      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="font-display select-none pointer-events-none"
        style={{
          position: 'absolute',
          right: '-0.04em',
          bottom: '-0.12em',
          fontSize: 'clamp(260px, 36vw, 540px)',
          fontStyle: 'italic',
          fontWeight: 700,
          color: 'rgba(212,98,42,0.1)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        EC
      </div>

      {/* Main layout */}
      <div
        ref={contentRef}
        className="relative flex flex-col max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-16"
        style={{
          flex: 1,
          paddingTop: '112px',
          paddingBottom: '56px',
          justifyContent: 'space-between',
          opacity: 0,
          transform: 'translateY(24px)',
          transition: 'opacity 0.95s cubic-bezier(0.22,1,0.36,1), transform 0.95s cubic-bezier(0.22,1,0.36,1)',
        }}
      >

        {/* ── META ROW ── */}
        <div
          className="flex flex-wrap items-baseline justify-between gap-y-1"
          style={{ paddingBottom: '1.25rem', borderBottom: '1px solid rgba(212,98,42,0.22)' }}
        >
          <p
            className="font-sans font-medium uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.38em', color: '#9A6030' }}
          >
            Interior Design &amp; Build
          </p>
          <p
            className="font-sans font-medium uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.38em', color: '#9A6030' }}
          >
            The Northeast &nbsp;·&nbsp; Est. 2012
          </p>
        </div>

        {/* ── HEADLINE ── */}
        <div className="flex-none lg:flex-1 flex items-start lg:items-center py-8 lg:py-0">
          <h1
            className="font-display font-light"
            style={{
              fontSize: 'clamp(52px, 9vw, 132px)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#160C04',
            }}
          >
            <span style={{ display: 'block', fontStyle: 'italic' }}>This region</span>
            <span style={{ display: 'block', fontStyle: 'italic' }}>is being remade.</span>
            <span
              className="font-sans font-semibold not-italic"
              style={{
                display: 'block',
                color: '#D4622A',
                marginTop: '0.4em',
                fontSize: 'clamp(15px, 3.5vw, 32px)',
                letterSpacing: '-0.01em',
                lineHeight: 1.4,
                maxWidth: '30ch',
              }}
            >
              We make sure it reflects the people who live here.
            </span>
          </h1>
        </div>

        {/* ── BOTTOM ROW ── */}
        <div style={{ borderTop: '1px solid rgba(90,58,32,0.28)', paddingTop: '2rem' }}>
          {/* Mobile: full-width stack — Desktop: side-by-side editorial split */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">

            {/* Body copy */}
            <p
              className="font-sans font-light"
              style={{ fontSize: '16px', lineHeight: 1.9, color: '#3D2510', maxWidth: '52ch' }}
            >
              From repurposed mill buildings in Providence to converted rowhouses in
              Philadelphia &mdash; the Northeast is full of spaces with history worth honoring.
              We design interiors that know where they are and who they belong to.
            </p>

            {/* CTAs + trust — left on mobile, right-aligned on desktop */}
            <div className="flex flex-col items-start lg:items-end gap-5 lg:shrink-0">
              <div className="flex flex-col items-start lg:items-end gap-3">
                <button
                  onClick={() => onOpenContact?.()}
                  className="inline-flex items-center gap-3 text-white font-sans font-medium rounded-full group"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    padding: '13px 28px',
                    backgroundColor: btnHovered ? '#B84A18' : '#D4622A',
                    transition: 'background-color 0.25s ease',
                    whiteSpace: 'nowrap',
                    border: 'none', cursor: 'pointer',
                  }}
                  onMouseEnter={() => setBtnHovered(true)}
                  onMouseLeave={() => setBtnHovered(false)}
                >
                  Start a Project
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
                <a
                  href="#projects"
                  onClick={scrollTo("#projects")}
                  className="font-sans font-medium underline underline-offset-4"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: linkHovered ? '#D4622A' : '#6A3A14',
                    transition: 'color 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={() => setLinkHovered(true)}
                  onMouseLeave={() => setLinkHovered(false)}
                >
                  See Our Work
                </a>
              </div>

              <p
                className="font-sans uppercase lg:text-right"
                style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#8A5530', lineHeight: 1.8 }}
              >
                Conscious interiors &nbsp;·&nbsp; Full-service build<br />
                Residential &amp; Commercial
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
