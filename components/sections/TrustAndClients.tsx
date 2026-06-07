'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { trustElements } from '@/lib/data/site';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const accreditationImages = [
  '/apeda.png',
  '/ccoc.png',
  '/fssai.png',
  '/gafta.png',
  '/sbi.png',
  '/iso.png'
];

export default function TrustAndClients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % accreditationImages.length);
    }, 2000); // 2 seconds pause
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-soft-ivory border-t border-olive/10 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div>
            <SectionHeading
              subtitle="Institutional Reliability"
              title="Global Trust Metrics"
            />
            <p className="text-export-dark-green/70 text-lg leading-relaxed max-w-xl mb-12">
              Our operations are certified by leading international authorities, guaranteeing that our sourcing, processing, and export pipelines meet the strictest phytosanitary and compliance standards.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {trustElements.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col"
                >
                  <div className="font-serif text-5xl text-spice-green mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-export-dark-green/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-soft-ivory rounded-2xl p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-olive/10"
          >
            <Link href="/accreditations" className="flex items-center justify-between mb-8 pb-8 border-b border-olive/10 group cursor-pointer">
              <div className="flex items-center gap-4">
                <ShieldCheck size={32} className="text-muted-gold group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-2xl text-export-dark-green group-hover:text-spice-green transition-colors">Accreditations & Compliance</h3>
              </div>
              <ArrowRight className="text-export-dark-green/30 group-hover:text-spice-green group-hover:translate-x-1 transition-all" size={24} />
            </Link>

            <div className="h-[380px] w-full overflow-hidden relative flex items-center justify-center bg-forest-green/5 rounded-xl border border-olive/5">
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  initial={{ y: 150, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -150, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-8"
                >
                  <img
                    src={accreditationImages[currentIndex]}
                    alt="Accreditation"
                    className="w-full h-full object-contain max-w-[280px] drop-shadow-xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
