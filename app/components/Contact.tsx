"use client";

import { ArrowRight } from "lucide-react";

interface ContactProps {
  onOpenContact?: () => void;
}

export default function Contact({ onOpenContact }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "#D4622A" }}
    >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            {/* Left: editorial headline */}
            <div>
              <p
                className="text-xs tracking-[0.4em] uppercase mb-6 font-sans font-medium"
                style={{ color: "rgba(250,247,242,0.75)" }}
              >
                Start the Conversation
              </p>
              <h2
                className="font-display font-light leading-[1.08] italic"
                style={{ fontSize: "clamp(34px, 5vw, 64px)", color: "#FAF7F2" }}
              >
                Tell us about your space
                <br />
                <span className="not-italic font-semibold">
                  and who it needs to serve.
                </span>
              </h2>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-start lg:items-end gap-5 shrink-0">
              <p
                className="text-[15px] leading-[1.8] max-w-xs lg:text-right"
                style={{ color: "rgba(250,247,242,0.82)" }}
              >
                We take on a small number of projects at a time — by design.
                The first conversation is just that.
              </p>
              <button
                className="inline-flex items-center gap-4 text-white text-[11px] tracking-widest uppercase px-10 py-4 rounded-full transition-colors duration-300"
                style={{ backgroundColor: "#160C04", border: "none", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3D2510")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#160C04")}
                onClick={() => onOpenContact?.()}
              >
                Begin the Conversation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}
