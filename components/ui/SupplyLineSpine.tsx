"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SupplyLineSpine() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pathRef.current || !containerRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();
    
    // Set initial state for drawing animation
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Draw line based on scroll
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5, // cinematic heavy scrub
      animation: gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
      }),
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <svg 
        className="w-full h-full" 
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          ref={pathRef}
          d="M 10,0 C 10,20 90,30 90,50 C 90,70 20,80 20,100"
          fill="none"
          stroke="var(--color-ledger)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          className="dark:stroke-sage"
        />
      </svg>
    </div>
  );
}
