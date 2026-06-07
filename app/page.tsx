'use client';

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import GlobalNetworkMap from "@/components/sections/GlobalNetworkMap";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Services from "@/components/sections/Services";
import TrustAndClients from "@/components/sections/TrustAndClients";
import ClientMarquee from "@/components/sections/ClientMarquee";
import FAQ from "@/components/sections/FAQ";
import B2BShowcase from "@/components/sections/B2BShowcase";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Centralized premium transition reveal wrapper for PC (cinematic asymmetric drift) and Phone (subtle reveal)
function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use GSAP for rock-solid scroll restoration support
    gsap.fromTo(
      el,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%", // Trigger just before it enters viewport
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="w-full relative z-10 opacity-0">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      
      <ScrollReveal>
        <GlobalNetworkMap />
      </ScrollReveal>
      
      <ScrollReveal>
        <ProductShowcase />
      </ScrollReveal>
      
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      
      <ScrollReveal>
        <TrustAndClients />
      </ScrollReveal>
      
      <ScrollReveal>
        <ClientMarquee />
      </ScrollReveal>
      
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      
      <ScrollReveal>
        <B2BShowcase />
      </ScrollReveal>
    </>
  );
}
