"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const COMMODITIES = [
  {
    title: "Spices & Botanicals",
    metrics: "4,200 MT / Sourced from 8 regions",
    description: "Export-grade aromatics. Handled through precision temperature-controlled logistics to preserve essential oil integrity.",
    color: "bg-[#2b271d]" // Dark amber/spice tone
  },
  {
    title: "Raw Resins",
    metrics: "1,800 MT / Sourced from 4 regions",
    description: "Translucent mineral tactility. Graded for purity and industrial applications, shipped in specialized containers.",
    color: "bg-[#4a5342]" // Oxidized olive tone
  },
  {
    title: "Incense Materials",
    metrics: "2,900 MT / Sourced from 5 regions",
    description: "Powder and granular industrial texture. Processed under strict moisture controls.",
    color: "bg-[#1c1c1c]" // Dark charcoal/ash tone
  },
];

export default function CommodityEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    const sections = gsap.utils.toArray(".commodity-panel");
    
    // Horizontal scroll animation
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1, // Heavy cinematic scrub
        snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollWrapperRef.current?.offsetWidth,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="commodities" className="h-screen bg-olive text-sage overflow-hidden">
      <div 
        ref={scrollWrapperRef}
        className="flex h-full w-[300vw]"
      >
        {COMMODITIES.map((commodity, i) => (
          <div 
            key={i} 
            className="commodity-panel w-screen h-full flex items-center relative overflow-hidden"
          >
            {/* Cinematic background texture (simulating warehouse shadows/dust) */}
            <div className={`absolute inset-0 z-0 ${commodity.color} opacity-90 transition-colors duration-1000`} />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 z-0 bg-black/40 mix-blend-multiply" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-[1800px] mx-auto px-fluid-1">
              
              {/* Abstract image representation for cinematic handling */}
              <div className="md:col-span-6 h-[50vh] md:h-[70vh] relative group overflow-hidden border border-sage/10 bg-black/20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.15%22/%3E%3C/svg%3E')] opacity-30 mix-blend-overlay z-20 pointer-events-none" />
                {/* Image Placeholder representing the "tactile photography" */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="w-full h-full border border-dashed border-sage/30 flex items-center justify-center text-sage/40 font-mono text-xs uppercase tracking-widest text-center">
                     [ Cinematic Asset Placeholder ]<br />Warehouse Shadows / Export Sacks
                   </div>
                </div>
                {/* Data overlay */}
                <div className="absolute bottom-4 left-4 z-30 font-mono text-[10px] text-sage/60 tracking-widest uppercase">
                  Logistics Terminal: Active
                </div>
              </div>

              {/* Editorial typography */}
              <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
                <div className="overflow-hidden mb-4">
                  <p className="font-sans text-xs tracking-widest uppercase opacity-70">
                    Phase {i + 1} / {COMMODITIES.length}
                  </p>
                </div>
                <h3 className="font-serif text-5xl md:text-7xl mb-6 leading-[0.9]">
                  {commodity.title}
                </h3>
                <div className="font-mono text-xs uppercase tracking-widest border-b border-sage/20 pb-4 mb-6">
                  {commodity.metrics}
                </div>
                <p className="font-sans text-sm md:text-base leading-relaxed opacity-80 max-w-sm">
                  {commodity.description}
                </p>
                
                {/* Engineered Button */}
                <div className="mt-12">
                  <button className="group relative px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] overflow-hidden border border-sage/30 flex items-center gap-4">
                    <span className="relative z-10 transition-colors group-hover:text-ledger">View Operations</span>
                    <span className="relative z-10 w-4 h-[1px] bg-sage transition-all group-hover:w-8 group-hover:bg-ledger"></span>
                    <div className="absolute inset-0 bg-sage scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
