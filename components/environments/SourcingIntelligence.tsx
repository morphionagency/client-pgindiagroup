"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function SourcingIntelligence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end pb-fluid-3 px-fluid-1 pt-32 overflow-hidden bg-sage"
    >
      {/* Background Cinematic Texture / Abstract Map representation */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-40"
      >
        {/* Placeholder for atmospheric industrial image - ideally warehouse shadows or raw commodity */}
        <div className="absolute inset-0 bg-gradient-to-t from-sage via-sage/80 to-transparent z-10" />
        <div className="w-[120%] h-[120%] absolute blur-3xl opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--color-olive)_0%,_transparent_50%)]" />
        
        {/* Abstract Coordinate Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        
        <div className="md:col-span-8 flex flex-col gap-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-xs tracking-[0.2em] uppercase text-olive font-semibold flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-olive"></span>
            Global Operations Terminal
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-ledger tracking-tight"
          >
            Industrial<br />
            <span className="italic text-olive/80">Agricultural</span><br />
            Intelligence.
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="md:col-span-4 flex flex-col gap-8 md:pl-fluid-2 border-l border-ledger/20"
        >
          <p className="font-sans text-sm leading-relaxed text-ledger/80 max-w-sm">
            We operate internationally at scale. A premium global sourcing and trade network specializing in spices, raw resins, incense materials, nuts, and seeds.
          </p>
          
          <div className="flex flex-col gap-4 font-sans text-xs">
            <div className="flex justify-between border-b border-ledger/10 pb-2">
              <span className="text-ledger/50 uppercase tracking-widest">Active Nodes</span>
              <span className="font-mono">17 COUNTRIES</span>
            </div>
            <div className="flex justify-between border-b border-ledger/10 pb-2">
              <span className="text-ledger/50 uppercase tracking-widest">Network Status</span>
              <span className="font-mono text-olive flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-olive rounded-full animate-pulse"></span>
                SYNCED
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
