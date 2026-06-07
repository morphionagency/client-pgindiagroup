'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from '../ui/SectionHeading';

const clients = [
  { name: 'Cycle', src: '/cycle.png' },
  { name: 'Patanjali', src: '/patanjali.png' },
  { name: 'DNV', src: '/dnv.png' },
  { name: 'ITC', src: '/itc.png' },
  { name: 'JK', src: '/jk.png' },
  { name: 'Madhukunj', src: '/madhukunj.png' },
];

export default function ClientMarquee() {
  return (
    <section className="py-24 bg-soft-ivory border-t border-olive/10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-8 flex flex-col items-center">
        <SectionHeading
          subtitle="clients we worked with"
          title="The Industry Trusts Us"
          align="center"
        />
      </div>

      <div className="flex overflow-hidden relative w-full pt-8 pb-12">
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-soft-ivory to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-soft-ivory to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-24 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {/* Duplicate to create a seamless loop */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="relative w-48 h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-105 filter grayscale hover:grayscale-0"
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
