"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);

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
        backgroundColor: "#FAF7F2",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 inset-x-0 h-[3px]" style={{ backgroundColor: "#D4622A" }} />

      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="font-display select-none pointer-events-none"
        style={{
          position: "absolute",
          right: "-0.04em",
          bottom: "-0.12em",
          fontSize: "clamp(260px, 36vw, 540px)",
          fontStyle: "italic",
          fontWeight: 700,
          color: "rgba(212,98,42,0.08)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
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
          style={{ paddingBottom: "1.25rem", borderBottom: "1px solid rgba(212,98,42,0.22)" }}
        >
          <p
            className="font-sans font-medium uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.38em", color: "#9A6030" }}
          >
            Interior Design &amp; Build
          </p>
          <p
            className="font-sans font-medium uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.38em", color: "#9A6030" }}
          >
            The Northeast &nbsp;·&nbsp; Est. 2012
          </p>
        </div>

        {/* ── HEADLINE ── */}
        <div className="flex-1 flex items-center py-10 lg:py-0">
          <h1
            className="font-display font-light"
            style={{
              fontSize: "clamp(56px, 10vw, 140px)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#160C04",
            }}
          >
            <span style={{ display: "block", fontStyle: "italic" }}>This region</span>
            <span style={{ display: "block", fontStyle: "italic" }}>is being remade.</span>
            <span
              className="font-sans font-semibold not-italic"
              style={{
                display: "block",
                color: "#D4622A",
                marginTop: "1.2em",
                fontSize: "clamp(14px, 2.8vw, 28px)",
                letterSpacing: "-0.01em",
                lineHeight: 1.4,
                maxWidth: "32ch",
              }}
            >
              We make sure it reflects the people who live here.
            </span>
          </h1>
        </div>

        {/* ── BOTTOM ROW ── */}
        <div style={{ borderTop: "1px solid rgba(90,58,32,0.18)", paddingTop: "2rem" }}>
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
                alignSelf: "flex-start",
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
                color: "#6A3A14",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4622A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6A3A14")}
            >
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
