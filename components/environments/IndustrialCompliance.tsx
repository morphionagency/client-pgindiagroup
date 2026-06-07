"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function IndustrialCompliance() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      ".compliance-stat",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="compliance" className="bg-forest text-mineral py-fluid-3 px-fluid-1 relative overflow-hidden">
      {/* Mathematical / Architectural Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-b border-mineral/20 pb-16">
          <div className="md:col-span-5 flex flex-col gap-6">
            <p className="font-mono text-[10px] tracking-widest text-olive uppercase">System Integrity // 04</p>
            <h2 className="font-sans text-4xl md:text-5xl uppercase tracking-tighter font-medium leading-none">
              Swiss-Grade <br />
              <span className="text-olive">Operational Trust.</span>
            </h2>
          </div>
          
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end">
            <p className="font-sans text-sm opacity-80 leading-relaxed max-w-sm">
              Our network operates under strict industrial compliance. Every metric, certification, and volume output is monitored through rigorous quality control systems ensuring globally verifiable reliability.
            </p>
          </div>
        </div>

        {/* Data-heavy metrics section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-16">
          {[
            { label: "Annual Volume", value: "85K", unit: "MT" },
            { label: "Sourcing Origin", value: "17", unit: "NODES" },
            { label: "Quality Control", value: "99.8", unit: "%" },
            { label: "Network Up-time", value: "24/7", unit: "SYNC" },
          ].map((stat, i) => (
            <div key={i} className="compliance-stat flex flex-col gap-2 border-l border-olive/30 pl-6">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">{stat.label}</span>
              <div className="flex items-baseline gap-1">
                <span className="font-sans text-5xl md:text-6xl tracking-tighter">{stat.value}</span>
                <span className="font-mono text-xs text-olive">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
