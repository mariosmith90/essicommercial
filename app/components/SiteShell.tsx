"use client";

import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Process from "./Process";
import Contact from "./Contact";
import Footer from "./Footer";
import ContactOverlay from "./ContactOverlay";

export default function SiteShell() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <>
      <Nav onInquire={openContact} />
      <Hero onOpenContact={openContact} />
      <About />
      <Services />
      <Projects />
      <Process />
      <Contact onOpenContact={openContact} />
      <Footer />
      <ContactOverlay open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
