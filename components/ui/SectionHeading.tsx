'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({ subtitle, title, align = 'left', light = false }: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 95%",
        once: true
      }
    });

    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
    
    if (titleRef.current) {
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }

    if (lineRef.current) {
      tl.fromTo(lineRef.current,
        { width: 0 },
        { width: "80px", duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`flex flex-col gap-4 mb-16 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
    >
      {subtitle && (
        <span
          ref={subtitleRef}
          className={`text-xs uppercase tracking-[0.2em] font-semibold opacity-0 ${
            light ? 'text-muted-gold' : 'text-spice-green'
          }`}
        >
          {subtitle}
        </span>
      )}
      
      <h2
        ref={titleRef}
        className={`font-serif text-4xl md:text-5xl lg:text-6xl opacity-0 ${
          light ? 'text-soft-ivory' : 'text-export-dark-green'
        }`}
      >
        {title}
      </h2>
      
      <div
        ref={lineRef}
        className={`h-0.5 mt-2 opacity-100 ${light ? 'bg-muted-gold' : 'bg-cardamom'}`}
        style={{ width: 0 }}
      />
    </div>
  );
}
