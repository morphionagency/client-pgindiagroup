"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SOURCING_NODES = [
  { id: "IND", name: "India", type: "Spices & Botanicals", volume: "12,400 MT/yr" },
  { id: "MDG", name: "Madagascar", type: "Vanilla & Cloves", volume: "3,200 MT/yr" },
  { id: "VNM", name: "Vietnam", type: "Cassia & Pepper", volume: "8,900 MT/yr" },
  { id: "IDN", name: "Indonesia", type: "Nutmeg & Mace", volume: "5,100 MT/yr" },
];

export default function TradeNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Staggered operational reveals for nodes
    gsap.fromTo(
      nodesRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );

    // Dotted route line animation
    gsap.to(".route-line", {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="network" className="relative min-h-screen bg-mineral py-fluid-3 px-fluid-1 overflow-hidden">
      {/* Background trade-route dividers / Map influence */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path 
            className="route-line" 
            d="M 0,200 Q 300,300 500,100 T 1000,400 T 1500,200" 
            fill="none" 
            stroke="var(--color-ledger)" 
            strokeWidth="2"
            strokeDasharray="10 10"
            strokeDashoffset="2000"
          />
          <path 
            className="route-line" 
            d="M -100,500 Q 400,600 600,300 T 1200,700 T 1800,400" 
            fill="none" 
            stroke="var(--color-ledger)" 
            strokeWidth="1"
            strokeDasharray="5 15"
            strokeDashoffset="2000"
          />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 max-w-[1800px] mx-auto">
        <div className="md:col-span-4 md:col-start-2 flex flex-col gap-6">
          <h2 className="font-serif text-4xl md:text-6xl text-ledger leading-tight">
            Global Trade <br />
            <span className="italic text-olive">Infrastructure.</span>
          </h2>
          <p className="font-sans text-sm text-ledger/70 max-w-md">
            Our network operates across 17 distinct sourcing regions, moving raw commodities through precision logistics chains and industrial processing ecosystems.
          </p>
        </div>

        {/* Asymmetrical interactive nodes layout */}
        <div className="md:col-span-6 md:col-start-7 relative mt-12 md:mt-0 min-h-[60vh]">
          {SOURCING_NODES.map((node, i) => {
            // Calculated asymmetrical positioning for controlled imperfection
            const positions = [
              { top: "10%", left: "10%" },
              { top: "40%", left: "60%" },
              { top: "70%", left: "20%" },
              { top: "80%", left: "80%" },
            ];
            const pos = positions[i % positions.length];

            return (
              <div 
                key={node.id}
                ref={(el) => { if (el) nodesRef.current[i] = el; }}
                className="absolute group cursor-pointer"
                style={{ top: pos.top, left: pos.left }}
              >
                {/* Node Point */}
                <div className="relative flex items-center justify-center w-4 h-4 z-20">
                  <div className="absolute w-full h-full rounded-full bg-olive opacity-30 group-hover:animate-ping" />
                  <div className="w-2 h-2 rounded-full bg-olive transition-transform duration-300 group-hover:scale-150" />
                </div>

                {/* Hover Data / Trade Language */}
                <div className="absolute top-1/2 left-8 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out z-10 w-48 pointer-events-none">
                  <div className="bg-ledger text-sage p-4 rounded-sm border border-olive/30 shadow-2xl">
                    <p className="font-mono text-[10px] text-olive mb-1 tracking-widest">{node.id} // ORIGIN</p>
                    <h3 className="font-serif text-xl mb-2">{node.name}</h3>
                    <div className="space-y-1 font-sans text-xs opacity-80">
                      <p className="flex justify-between"><span>TYPE:</span> <span>{node.type}</span></p>
                      <p className="flex justify-between"><span>VOL:</span> <span>{node.volume}</span></p>
                    </div>
                  </div>
                </div>
                
                {/* Always visible minimal label */}
                <span className="absolute top-6 left-1/2 -translate-x-1/2 font-sans text-[10px] tracking-widest text-ledger/60 group-hover:opacity-0 transition-opacity">
                  {node.id}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
