"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useGCSImage } from "@/app/lib/useGCSImage";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const bgUrl = useGCSImage("hero/hero-bg.jpg");

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
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1a1008",
      }}
    >
      {/* Background image */}
      {bgUrl && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.72,
          }}
        />
      )}

      {/* Gradient overlay — heavier at bottom so text pops */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,6,2,0.88) 0%, rgba(10,6,2,0.45) 50%, rgba(10,6,2,0.15) 100%)",
        }}
      />

      {/* Top accent bar */}
      <div className="absolute top-0 inset-x-0 h-[3px]" style={{ backgroundColor: "#D4622A" }} />

      {/* Main layout */}
      <div
        ref={contentRef}
        className="relative flex flex-col max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-16"
        style={{
          flex: 1,
          paddingTop: "128px",
          paddingBottom: "56px",
          justifyContent: "space-between",
          opacity: 0,
          transform: "translateY(24px)",
          transition:
            "opacity 0.95s cubic-bezier(0.22,1,0.36,1), transform 0.95s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* ── META ROW ── */}
        <div
          className="flex flex-wrap items-baseline justify-between gap-y-1"
          style={{ paddingBottom: "1.25rem", borderBottom: "1px solid rgba(255,255,255,0.18)" }}
        >
          <p
            className="font-sans font-medium uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.38em", color: "rgba(255,255,255,0.6)" }}
          >
            Interior Design &amp; Build
          </p>
          <p
            className="font-sans font-medium uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.38em", color: "rgba(255,255,255,0.6)" }}
          >
            The Northeast &nbsp;·&nbsp; Est. 2012
          </p>
        </div>

        {/* ── BOTTOM BLOCK: headline + CTAs pinned to bottom ── */}
        <div className="flex flex-col gap-8 mt-auto pt-10">
          <h1
            className="font-display font-light"
            style={{
              fontSize: "clamp(52px, 10vw, 140px)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#FAF7F2",
            }}
          >
            <span style={{ display: "block", fontStyle: "italic" }}>This region</span>
            <span style={{ display: "block", fontStyle: "italic" }}>is being remade.</span>
            <span
              className="font-sans font-semibold not-italic"
              style={{
                display: "block",
                color: "#E8854A",
                marginTop: "1em",
                fontSize: "clamp(14px, 2.5vw, 26px)",
                letterSpacing: "-0.01em",
                lineHeight: 1.5,
                maxWidth: "34ch",
              }}
            >
              We make sure it reflects the people who live here.
            </span>
          </h1>

          <div
            style={{ borderTop: "1px solid rgba(255,255,255,0.18)", paddingTop: "1.75rem" }}
          >
            <div className="flex flex-row items-center gap-5 flex-wrap">
              <button
                onClick={() => onOpenContact?.()}
                className="inline-flex items-center gap-3 text-white font-sans font-medium rounded-full group"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  padding: "14px 30px",
                  backgroundColor: "#D4622A",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.25s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B84A18")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#D4622A")}
              >
                Start a Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
              </button>

              <a
                href="#projects"
                onClick={scrollTo("#projects")}
                className="font-sans font-medium"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8854A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
