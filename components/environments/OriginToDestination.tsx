"use client";

import { useRef } from "react";
import Image from "next/image";

export default function OriginToDestination() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="bg-sage text-ledger py-fluid-3 px-fluid-1 relative">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 relative">
        
        <div className="md:col-span-5 flex flex-col justify-between h-full min-h-[60vh] sticky top-32">
          <div>
            <p className="font-mono text-[10px] tracking-widest text-olive uppercase mb-8">Supply Chain Narrative</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tight">
              From Origin <br />
              <span className="italic">to Destination.</span>
            </h2>
          </div>
          
          <div className="mt-16 md:mt-0">
            <p className="font-sans text-sm max-w-sm opacity-80 leading-relaxed">
              We solve complex supply chain anomalies before they become logistics failures. Layered density, problem solving, and raw industrial operations.
            </p>
          </div>
        </div>

        {/* Layered editorial density for stories */}
        <div className="md:col-span-6 md:col-start-7 flex flex-col gap-24 md:gap-48 mt-16 md:mt-32">
          {[
            {
              id: "CS-01",
              title: "Monsoon Logistics Resilience",
              location: "Madagascar Terminal",
              desc: "Managing moisture volatility in raw vanilla transport across severe humidity index shifts.",
            },
            {
              id: "CS-02",
              title: "Volume Scalability",
              location: "Vietnam Processing Hub",
              desc: "Processing 8,000 MT of cassia with a less than 0.2% variance in essential oil yield.",
            }
          ].map((story, i) => (
            <div key={i} className="flex flex-col gap-6 relative group">
              {/* Image / Abstract Placeholder */}
              <div className={`relative w-full h-[50vh] overflow-hidden bg-black/10 border border-olive/20 ${i % 2 !== 0 ? 'md:-ml-24' : 'md:ml-12'}`}>
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.08%22/%3E%3C/svg%3E')]">
                  <div className="text-center font-mono text-[10px] text-ledger/40 tracking-widest uppercase">
                    [ Cinematic Paper Grain / Export Ledger Texture ]<br />
                    Operation {story.id} Documentation
                  </div>
                </div>
                {/* Scale effect on hover */}
                <div className="absolute inset-0 bg-olive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className={`flex flex-col gap-3 ${i % 2 !== 0 ? 'md:pr-24' : 'md:pl-12'}`}>
                <p className="font-mono text-[10px] tracking-widest text-olive uppercase flex gap-4">
                  <span>{story.id}</span>
                  <span>//</span>
                  <span>{story.location}</span>
                </p>
                <h3 className="font-serif text-3xl md:text-4xl">{story.title}</h3>
                <p className="font-sans text-sm opacity-80 max-w-md">{story.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
