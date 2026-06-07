'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { hero } from '@/lib/data/site';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax background shifts and dynamic zooms (but subtle so it works beautifully everywhere)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.12]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Multi-dimensional asymmetric scroll drift for a stunning depth effect
  const tagY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Split title into words for dynamic stagger animation on load
  const words = hero.title.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-6rem)] w-full flex flex-col items-center justify-between overflow-hidden bg-forest-green py-12 md:py-16"
    >
      {/* Background Image / Texture Layer */}
      <motion.div
        style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-forest-green/80 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green via-transparent to-forest-green/50 z-20" />

        {/* Placeholder for high-end commodity imagery */}
        <Image
          src="/herobg.jpg"
          alt="Premium global agriculture sourcing commodities background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-30 mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center items-center py-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline wrapper */}
          <motion.div style={{ y: tagY, opacity: contentOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-6 h-[1px] bg-muted-gold/30" />
                <span className="inline-block text-muted-gold tracking-[0.25em] uppercase text-[10px] font-semibold">
                  Global Sourcing Excellence
                </span>
                <div className="w-6 h-[1px] bg-muted-gold/30" />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Title with Staggered Word Reveal */}
          <motion.div style={{ y: titleY, opacity: contentOpacity }}>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-soft-ivory leading-[1.12] mb-8 text-center font-normal max-w-4xl mx-auto">
              {words.map((word, i) => {
                const isSustainable = word.toLowerCase().includes("sustainable");
                return (
                  <span key={i}>
                    <motion.span
                      initial={{ opacity: 0, y: 35 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.0,
                        delay: 0.3 + i * 0.04,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className={`inline-block ${isSustainable ? 'font-serif italic text-muted-gold font-normal' : ''
                        }`}
                    >
                      {word}
                    </motion.span>
                    {i !== words.length - 1 && " "}
                  </span>
                );
              })}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div style={{ y: subtitleY, opacity: contentOpacity }}>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-soft-ivory/80 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              {hero.subtitle}
            </motion.p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div style={{ y: ctaY, opacity: contentOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto max-w-md mx-auto sm:max-w-none"
            >
              {hero.cta.map((cta, i) => (
                <Link
                  key={i}
                  href={cta.to}
                  className={`px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto text-center ${cta.primary
                    ? 'bg-muted-gold text-export-dark-green hover:bg-soft-ivory'
                    : 'border border-soft-ivory/30 text-soft-ivory hover:border-muted-gold hover:text-muted-gold'
                    }`}
                >
                  {cta.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-30 flex flex-col items-center gap-2 mt-6"
      >
        <span className="text-soft-ivory/50 text-[10px] uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-soft-ivory/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-muted-gold absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
