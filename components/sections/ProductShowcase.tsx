'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productCategories } from '@/lib/data/products';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';
import Link from 'next/link';
import { generateSlug } from '@/lib/utils/slugify';
import { ArrowRight } from 'lucide-react';

const categoryImages = {
  "Spices": "/spices.jpg",
  "Raw Resins": "/resins.jpg",
  "Incense Raw Materials": "/incenseraw.jpg",
  "Nuts & Seeds": "/nutseeds.jpg"
};

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0]);

  return (
    <section className="py-32 bg-soft-ivory relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          subtitle="Commodity Portfolios"
          title="Export Grade Quality"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">

          {/* Navigation / Selection */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {productCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category)}
                className={`text-left px-8 py-6 rounded-lg transition-all duration-500 border hover:-translate-y-1 ${activeCategory.name === category.name
                  ? 'bg-forest-green text-soft-ivory border-forest-green shadow-xl scale-[1.02]'
                  : 'bg-transparent text-export-dark-green border-olive/20 hover:border-olive/50 hover:shadow-md'
                  }`}
              >
                <h3 className="font-serif text-2xl mb-2">{category.name}</h3>
                <p className={`text-sm leading-relaxed ${activeCategory.name === category.name ? 'text-soft-ivory/80' : 'text-export-dark-green/60'
                  }`}>
                  {category.description}
                </p>
              </button>
            ))}
          </div>

          {/* Dynamic Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-10"
              >
                {/* Visual Header */}
                <div className="w-full h-[400px] relative rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-forest-green/20 mix-blend-multiply z-10" />
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${categoryImages[activeCategory.name as keyof typeof categoryImages]})` }}
                  />
                  <Link
                    href={`/categories/${generateSlug(activeCategory.name)}`}
                    className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-forest-green/90 to-transparent group/link flex items-center justify-between cursor-pointer"
                  >
                    <h4 className="text-soft-ivory/90 font-serif text-3xl group-hover/link:text-white group-hover/link:drop-shadow-md transition-all duration-300">{activeCategory.name} Depth</h4>
                    <ArrowRight className="text-soft-ivory/90 group-hover/link:translate-x-2 group-hover/link:text-white group-hover/link:drop-shadow-md transition-all duration-500 ease-[0.16,1,0.3,1]" size={32} />
                  </Link>
                </div>

                {/* Depth Content Accordions */}
                <div className="bg-soft-ivory rounded-xl shadow-sm border border-olive/10 p-8">
                  <Accordion
                    items={activeCategory.items.map(item => ({
                      title: item.name,
                      content: (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                          <div>
                            <span className="block text-xs uppercase tracking-widest text-forest-green mb-2">Specifications</span>
                            <ul className="space-y-1">
                              {item.specs.map(spec => (
                                <li key={spec} className="flex items-start gap-2 text-sm text-export-dark-green/80">
                                  <span className="text-spice-green mt-1">•</span> {spec}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <span className="block text-xs uppercase tracking-widest text-forest-green mb-1">Origin</span>
                              <p className="text-sm text-export-dark-green/80">{item.origin}</p>
                            </div>
                            <div>
                              <span className="block text-xs uppercase tracking-widest text-forest-green mb-1">Industrial Uses</span>
                              <p className="text-sm text-export-dark-green/80">{item.uses}</p>
                            </div>
                          </div>
                        </div>
                      )
                    }))}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
