'use client';

import { motion } from 'framer-motion';
import { caseStudies, brand } from '@/lib/data/site';
import { b2bTestimonials } from '@/lib/data/testimonials';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function B2BShowcase() {
  return (
    <section className="py-24 bg-warm-neutral border-t border-olive/10 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* SECTION 1: CASE STUDIES */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-forest-green font-semibold block mb-4">
            — Enterprise Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-export-dark-green max-w-3xl leading-[1.15]">
            Direct off-take solutions for purchasing desks.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {caseStudies.map((item, idx) => (
            <motion.article 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group bg-soft-ivory p-8 rounded-2xl border border-olive/15 shadow-sm hover:shadow-2xl hover:bg-warm-neutral hover:-translate-y-2 hover:border-spice-green/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest-green block">
                  {item.industry}
                </span>
                <h3 className="text-2xl font-serif text-export-dark-green leading-snug group-hover:text-forest-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-export-dark-green/75 pt-2">
                  {item.problem}
                </p>
                <p className="text-xs leading-relaxed text-export-dark-green/90 bg-forest-green/5 border border-spice-green/10 rounded-xl p-4 font-medium">
                  {item.solution}
                </p>
              </div>

              <div className="mt-12 flex items-end justify-between border-t border-olive/10 pt-4">
                <div className="space-y-1">
                  <span className="block text-[8px] uppercase tracking-wider text-forest-green/80 font-semibold">Volume Handled</span>
                  <span className="text-2xl tracking-tight text-cardamom font-serif font-bold">
                    {item.metric}
                  </span>
                </div>
                <span className="text-forest-green transition group-hover:translate-x-1.5 duration-300">
                  <ArrowRight size={18} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SECTION 2: TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {b2bTestimonials.map((t, idx) => (
            <motion.div 
              key={t.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group flex flex-col justify-between rounded-2xl border border-olive/15 bg-soft-ivory p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-spice-green/20 transition-all duration-500"
            >
              <div>
                <p className="text-lg leading-relaxed text-export-dark-green font-serif italic text-export-dark-green/90">
                  “{t.quote}”
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-olive/10 pt-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-green/10 text-xs font-semibold text-muted-gold border border-muted-gold/30 font-serif">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-export-dark-green">{t.author}</div>
                  <div className="text-xs text-export-dark-green/60 font-sans mt-0.5">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 3: B2B LEAD CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl px-6 py-20 text-center md:px-16 md:py-24 bg-export-dark-green border border-spice-green/30 shadow-2xl"
        >
          {/* Subtle Grid Backdrop */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />

          <div className="relative space-y-6 max-w-3xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-gold block font-semibold">
              — Start a Sourcing Dialogue
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-soft-ivory font-serif font-normal">
              Optimize Your Next Sourcing Cycle.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-soft-ivory/80">
              Specify packaging meshes, desired volatile oils, and target port shipping parameters FOB or CIF. Our Kolkata sales desk coordinates formal B2B pricing indices in 24 hours.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cardamom px-8 py-3.5 text-xs font-semibold text-export-dark-green uppercase tracking-widest hover:bg-muted-gold transition-colors duration-300 h-[48px] w-full sm:w-auto"
              >
                <span>Request Sourcing Quote</span>
                <ArrowRight size={14} />
              </Link>
              
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-soft-ivory/20 px-8 py-3.5 text-xs font-semibold text-soft-ivory font-serif hover:bg-soft-ivory/10 transition-colors duration-300 h-[48px] w-full sm:w-auto"
              >
                {brand.email}
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
