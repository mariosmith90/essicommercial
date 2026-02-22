"use client";

import { useState, useEffect } from "react";
import { MapPin, Mail, Phone, ArrowRight, Check, X } from "lucide-react";

interface ContactOverlayProps {
  open: boolean;
  onClose: () => void;
}

const PROJECT_TYPES = [
  "Commercial Interior",
  "Residential Design",
  "Wellness Space",
  "Community + Cultural",
  "Boutique Hospitality",
  "Architectural Direction",
  "FF&E Procurement",
  "Other",
];

const BUDGETS = [
  "Under $100K",
  "$100K – $250K",
  "$250K – $500K",
  "$500K – $1M",
  "$1M+",
];

// Architectural linework SVG pattern for left panel
const ArchPattern = () => (
  <svg
    aria-hidden
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.055 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="arch" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="80" height="80" fill="none" stroke="#D4622A" strokeWidth="0.5" />
        <line x1="0" y1="40" x2="80" y2="40" stroke="#D4622A" strokeWidth="0.25" />
        <line x1="40" y1="0" x2="40" y2="80" stroke="#D4622A" strokeWidth="0.25" />
        <circle cx="40" cy="40" r="12" fill="none" stroke="#D4622A" strokeWidth="0.4" />
        <circle cx="0" cy="0" r="5" fill="none" stroke="#D4622A" strokeWidth="0.4" />
        <circle cx="80" cy="0" r="5" fill="none" stroke="#D4622A" strokeWidth="0.4" />
        <circle cx="0" cy="80" r="5" fill="none" stroke="#D4622A" strokeWidth="0.4" />
        <circle cx="80" cy="80" r="5" fill="none" stroke="#D4622A" strokeWidth="0.4" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#arch)" />
  </svg>
);

export default function ContactOverlay({ open, onClose }: ContactOverlayProps) {
  const [entered, setEntered] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setEntered(true), 20);
      return () => clearTimeout(t);
    } else { setEntered(false); }
  }, [open]);

  // iOS-safe body scroll lock
  useEffect(() => {
    if (open) {
      const y = window.scrollY;
      document.body.style.cssText = `position:fixed;top:-${y}px;width:100%;overflow:hidden`;
    } else {
      const y = Math.abs(parseFloat(document.body.style.top || "0"));
      document.body.style.cssText = "";
      if (y) window.scrollTo(0, y);
    }
    return () => {
      const y = Math.abs(parseFloat(document.body.style.top || "0"));
      document.body.style.cssText = "";
      if (y) window.scrollTo(0, y);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 400);
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 300,
        opacity: entered ? 1 : 0,
        transition: "opacity 0.38s cubic-bezier(0.22,1,0.36,1)",
        display: "flex", flexDirection: "column",
        background: "#201510",
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: 3, background: "linear-gradient(90deg,#D4622A 0%,#C8A84A 60%,#D4622A 100%)", flexShrink: 0 }} />

      {/* Close button */}
      <button
        onClick={handleClose}
        aria-label="Close"
        className="group"
        style={{
          position: "fixed", top: "1.1rem", right: "1.5rem",
          zIndex: 310, background: "rgba(212,98,42,0.12)",
          border: "1px solid rgba(212,98,42,0.3)", borderRadius: "50%",
          width: "2.6rem", height: "2.6rem",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "#D4622A", transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,98,42,0.22)"; e.currentTarget.style.borderColor = "#D4622A"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(212,98,42,0.12)"; e.currentTarget.style.borderColor = "rgba(212,98,42,0.3)"; }}
      >
        <X size={15} strokeWidth={2} />
      </button>

      {/* Body — two columns */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

        {/* ── LEFT PANEL ── */}
        <div
          className="hidden lg:flex"
          style={{
            width: "42%", flexShrink: 0,
            position: "relative", overflow: "hidden",
            background: "#2A1C0E",
            borderRight: "1px solid rgba(212,98,42,0.18)",
            flexDirection: "column", justifyContent: "space-between",
            padding: "3.5rem 3rem 3rem",
          }}
        >
          <ArchPattern />

          {/* Content over pattern */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Wordmark */}
            <div style={{ marginBottom: "3rem" }}>
              <p style={{ fontSize: 11, letterSpacing: "0.42em", textTransform: "uppercase", color: "#D4622A", fontWeight: 600 }}>
                Essi Commercial
              </p>
            </div>

            {/* Eyebrow + Headline */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(212,98,42,0.12)", border: "1px solid rgba(212,98,42,0.25)",
                borderRadius: 4, padding: "5px 14px", marginBottom: "1.75rem",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4622A", display: "inline-block" }} />
              <span style={{ fontSize: 9, letterSpacing: "0.38em", textTransform: "uppercase", color: "#D4622A", fontWeight: 600 }}>
                New Inquiry
              </span>
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(32px, 3.5vw, 54px)", fontWeight: 300,
                fontStyle: "italic", lineHeight: 1.08, color: "#F4EEE4",
                marginBottom: "1.5rem",
              }}
            >
              Tell us about
              <br />your space{" "}
              <span style={{ color: "#C8A84A", fontStyle: "normal", fontWeight: 700 }}>&amp;</span>
              <br />who it serves.
            </h2>

            <p style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(244,238,228,0.42)", maxWidth: "30ch" }}>
              We take on a small number of projects at a time —{" "}
              by design. No commitment required for the first conversation.
            </p>
          </div>

          {/* Contact pills at bottom */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ height: 1, background: "rgba(212,98,42,0.15)", marginBottom: 8 }} />
            {[
              { Icon: MapPin, label: "20 W 22nd St, Suite 601 · New York, NY" },
              { Icon: Mail, label: "hello@essicommercial.com", href: "mailto:hello@essicommercial.com" },
              { Icon: Phone, label: "(212) 555-0123", href: "tel:+12125550123" },
            ].map(({ Icon, label, href }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{
                  width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(212,98,42,0.12)", border: "1px solid rgba(212,98,42,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={12} color="#D4622A" />
                </span>
                {href
                  ? <a href={href} style={{ fontSize: 12, color: "rgba(244,238,228,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#C8A84A")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,238,228,0.45)")}>{label}</a>
                  : <span style={{ fontSize: 12, color: "rgba(244,238,228,0.45)" }}>{label}</span>
                }
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL: form ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "3.5rem 2.5rem 3rem", scrollbarWidth: "none" }}>
          <div style={{ maxWidth: 520, margin: "0 auto" }}>

            {submitted ? (
              /* Success state */
              <div style={{ paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <span style={{
                  width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(212,98,42,0.12)", border: "1px solid rgba(212,98,42,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Check size={22} color="#D4622A" strokeWidth={2.5} />
                </span>
                <h3 className="font-display" style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 300, fontStyle: "italic", color: "#F4EEE4" }}>
                  Thank you for reaching out.
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(244,238,228,0.45)" }}>
                  We&apos;ve received your inquiry and will be in touch within 2 business days to schedule a discovery call.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,168,74,0.7)", textDecoration: "underline", textUnderlineOffset: 4, background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C8A84A")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(200,168,74,0.7)")}
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <>
                {/* Mobile-only heading */}
                <p className="lg:hidden" style={{ fontSize: 10, letterSpacing: "0.38em", textTransform: "uppercase", color: "#D4622A", fontWeight: 600, marginBottom: "1.25rem" }}>
                  New Inquiry
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

                  {/* Row 1 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <FormField label="Full Name" required>
                      <Input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Smith" />
                    </FormField>
                    <FormField label="Email" required>
                      <Input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" />
                    </FormField>
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <FormField label="Phone">
                      <Input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                    </FormField>
                    <FormField label="Project Type" required>
                      <StyledSelect
                        name="projectType" required value={form.projectType} onChange={handleChange}
                        placeholder="Select type"
                        options={PROJECT_TYPES}
                      />
                    </FormField>
                  </div>

                  {/* Budget */}
                  <FormField label="Approximate Budget">
                    <StyledSelect
                      name="budget" value={form.budget} onChange={handleChange}
                      placeholder="Prefer not to say"
                      options={BUDGETS}
                    />
                  </FormField>

                  {/* Message */}
                  <FormField label="Tell Us About Your Project" required>
                    <textarea
                      name="message" required rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Describe your space, vision, timeline…"
                      style={{
                        ...inputStyles,
                        resize: "none", lineHeight: 1.75, height: "auto",
                        fontFamily: "inherit",
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = "rgba(212,98,42,0.7)"; e.currentTarget.style.background = "rgba(212,98,42,0.07)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(244,238,228,0.1)"; e.currentTarget.style.background = "rgba(244,238,228,0.03)"; }}
                    />
                  </FormField>

                  {/* Divider */}
                  <div style={{ height: 1, background: "rgba(212,98,42,0.15)" }} />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group"
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12,
                      background: "#D4622A", color: "#fff",
                      fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600,
                      padding: "16px 36px", borderRadius: 40, border: "none", cursor: "pointer",
                      transition: "background 0.25s, transform 0.2s", width: "100%",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#C8A84A"; e.currentTarget.style.color = "#0C0A08"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#D4622A"; e.currentTarget.style.color = "#fff"; }}
                  >
                    Send Inquiry
                    <ArrowRight size={14} strokeWidth={2} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Shared field sub-components ── */

const inputStyles: React.CSSProperties = {
  width: "100%", boxSizing: "border-box",
  background: "rgba(255,240,210,0.07)",
  border: "1px solid rgba(255,235,190,0.15)",
  borderRadius: 8,
  padding: "12px 14px",
  fontSize: 14, color: "#F4EEE4",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
  fontFamily: "inherit",
};

function Input({ placeholder, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      placeholder={placeholder}
      style={{ ...inputStyles, caretColor: "#D4622A" }}
      onFocus={e => { e.currentTarget.style.borderColor = "rgba(212,98,42,0.7)"; e.currentTarget.style.background = "rgba(212,98,42,0.07)"; }}
      onBlur={e => { e.currentTarget.style.borderColor = "rgba(244,238,228,0.1)"; e.currentTarget.style.background = "rgba(244,238,228,0.03)"; }}
    />
  );
}

function StyledSelect({
  placeholder, options, ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { placeholder: string; options: string[] }) {
  return (
    <select
      {...props}
      style={{
        ...inputStyles,
        appearance: "none", cursor: "pointer",
        color: props.value ? "#F4EEE4" : "rgba(244,238,228,0.3)",
      }}
      onFocus={e => { e.currentTarget.style.borderColor = "rgba(212,98,42,0.7)"; e.currentTarget.style.background = "rgba(212,98,42,0.07)"; }}
      onBlur={e => { e.currentTarget.style.borderColor = "rgba(244,238,228,0.1)"; e.currentTarget.style.background = "rgba(244,238,228,0.03)"; }}
    >
      <option value="" disabled={!!props.required} style={{ background: "#130F0C", color: "rgba(244,238,228,0.4)" }}>
        {placeholder}
      </option>
      {options.map(o => (
        <option key={o} value={o} style={{ background: "#130F0C", color: "#F4EEE4" }}>{o}</option>
      ))}
    </select>
  );
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{ fontSize: 9, letterSpacing: "0.38em", textTransform: "uppercase", fontWeight: 600, color: "rgba(200,168,74,0.6)" }}>
        {label}{required && <span style={{ color: "#D4622A", marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  );
}
