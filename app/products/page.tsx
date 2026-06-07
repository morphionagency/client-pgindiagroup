'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { productCategories } from '@/lib/data/products';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { Leaf, Droplets, Zap, ShieldCheck, Search, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const icons = [Leaf, Droplets, Zap, ShieldCheck];

function getCardImage(imageUrl: string | undefined): string {
  if (!imageUrl) return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop';
  return imageUrl;
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'detailed' | 'card'>('detailed');

  // Flatten all product items for a unified real-time search index
  const allProducts = productCategories.flatMap(category =>
    category.items.map(item => ({
      ...item,
      categoryName: category.name,
      categoryDescription: category.description,
    }))
  );

  // Search filter across multiple fields (name, category, origin, specs, uses)
  const filteredProducts = searchQuery.trim() !== ''
    ? allProducts.filter(item => {
      const query = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(query) ||
        item.categoryName.toLowerCase().includes(query) ||
        item.origin.toLowerCase().includes(query) ||
        item.uses.toLowerCase().includes(query) ||
        item.specs.some(spec => spec.toLowerCase().includes(query))
      );
    })
    : [];

  return (
    <div className="bg-soft-ivory min-h-screen pb-24">
      {/* Page Header */}
      <section className="pt-40 pb-24 bg-forest-green relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
          alt="Agricultural sourcing commodities background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-10 mix-blend-luminosity"
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl text-soft-ivory mb-6"
          >
            Global Commodity Portfolios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-soft-ivory/80 text-xl font-light leading-relaxed max-w-2xl"
          >
            Direct-origin sourcing, certified purity control, and institutional supply chains across our core product categories.
          </motion.p>
        </div>
      </section>

      {/* Elegant Floating Search Bar */}
      <div className="relative z-20 -mt-8 max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-full shadow-xl border border-olive/15 p-1.5 flex items-center gap-2"
        >
          <div className="pl-4 text-export-dark-green/45 flex items-center justify-center shrink-0">
            <Search size={20} strokeWidth={2} />
          </div>
          <input
            type="text"
            placeholder="Search commodities... (e.g., 'clove', 'resin', 'cashew')"
            aria-label="Search commodities"
            className="w-full py-3 bg-transparent border-none outline-none text-export-dark-green placeholder-export-dark-green/45 text-sm md:text-base font-medium pr-4 focus:ring-0 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="mr-3 w-7 h-7 rounded-full bg-warm-neutral/50 hover:bg-warm-neutral flex items-center justify-center text-export-dark-green/60 hover:text-export-dark-green transition-all shrink-0 cursor-pointer"
              aria-label="Clear search"
            >
              <X size={14} strokeWidth={2.5} />
            </button>
          )}
        </motion.div>
      </div>

      {/* View Toggle Controls (Centered & Styled) */}
      {searchQuery.trim() === '' && (
        <div className="relative z-10 mt-12 flex justify-center">
          <div className="bg-white/60 backdrop-blur-md p-1 rounded-full border border-olive/15 shadow-md flex items-center gap-1">
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${viewMode === 'detailed'
                  ? 'bg-forest-green text-soft-ivory shadow-md animate-none'
                  : 'text-export-dark-green/60 hover:text-export-dark-green'
                }`}
            >
              Detailed View
            </button>
            <button
              onClick={() => setViewMode('card')}
              className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${viewMode === 'card'
                  ? 'bg-forest-green text-soft-ivory shadow-md animate-none'
                  : 'text-export-dark-green/60 hover:text-export-dark-green'
                }`}
            >
              Card View
            </button>
          </div>
        </div>
      )}

      {/* Search & Categories Display */}
      <AnimatePresence mode="wait">
        {searchQuery.trim() !== '' ? (
          /* Search Results Grid View (Always displays cards with seeded images) */
          <motion.section
            key="search-results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="py-16 container mx-auto px-6 md:px-12 min-h-[50vh]"
          >
            <div className="mb-10 flex justify-between items-center border-b border-olive/10 pb-4">
              <h2 className="font-serif text-2xl md:text-3xl text-export-dark-green">
                Sourcing Match ({filteredProducts.length})
              </h2>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs uppercase tracking-widest text-muted-gold font-bold hover:text-export-dark-green transition-colors cursor-pointer"
              >
                Clear Search
              </button>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-white rounded-3xl border border-olive/10 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-spice-green/30 transition-all duration-300 group"
                  >
                    {/* seeded image header loaded directly from item data */}
                    <div className="relative h-48 w-full overflow-hidden bg-warm-neutral/20 border-b border-olive/10">
                      <img
                        src={getCardImage(item.image)}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        {/* Category Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[9px] uppercase tracking-widest text-forest-green font-bold bg-warm-neutral/60 px-2.5 py-1 rounded">
                            {item.categoryName}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl text-export-dark-green mb-4 group-hover:text-forest-green transition-colors">
                          {item.name}
                        </h3>

                        {/* Technical Specifications */}
                        <div className="mb-4">
                          <span className="block text-[9px] uppercase tracking-wider text-forest-green mb-1.5 font-bold">Technical Specifications</span>
                          <ul className="space-y-1 bg-warm-neutral/30 p-2.5 rounded-xl border border-olive/5">
                            {item.specs.map(spec => (
                              <li key={spec} className="flex items-start gap-1 text-[10px] text-export-dark-green/80">
                                <span className="text-spice-green font-bold">•</span> {spec}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Sourcing Origin */}
                        <div className="mb-4">
                          <span className="block text-[9px] uppercase tracking-wider text-forest-green mb-1 font-bold">Sourcing Origin</span>
                          <p className="text-[10px] text-export-dark-green/80 bg-warm-neutral/30 px-2.5 py-1.5 rounded-xl border border-olive/5">
                            {item.origin}
                          </p>
                        </div>

                        {/* Industrial Applications */}
                        <div className="mb-6">
                          <span className="block text-[9px] uppercase tracking-wider text-forest-green mb-1 font-bold">Industrial Applications</span>
                          <p className="text-[10px] text-export-dark-green/80 bg-warm-neutral/30 px-2.5 py-1.5 rounded-xl border border-olive/5 line-clamp-2">
                            {item.uses}
                          </p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link
                        href={`/contact?commodity=${item.categoryName.toLowerCase()}&product=${encodeURIComponent(item.name)}`}
                        className="w-full py-2.5 bg-export-dark-green text-soft-ivory rounded-full text-center hover:bg-forest-green transition-colors duration-300 font-semibold text-[9px] tracking-wider uppercase block border border-transparent cursor-pointer"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white rounded-3xl border border-olive/10 shadow-sm max-w-xl mx-auto px-6"
              >
                <div className="w-16 h-16 bg-warm-neutral rounded-full flex items-center justify-center mx-auto mb-6 text-muted-gold">
                  <Search size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-export-dark-green mb-3">No Commodities Found</h3>
                <p className="text-sm text-export-dark-green/60 leading-relaxed">
                  We couldn't find any commodities matching <span className="font-semibold text-spice-green">"{searchQuery}"</span>. Try adjusting your query or check our core categories.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-6 px-6 py-2.5 bg-forest-green text-soft-ivory rounded-full hover:bg-export-dark-green transition-colors text-xs font-semibold uppercase tracking-widest cursor-pointer"
                >
                  Reset Search
                </button>
              </motion.div>
            )}
          </motion.section>
        ) : (
          /* Default Core Catalog Section */
          <motion.section
            key={viewMode === 'detailed' ? 'detailed-catalog' : 'card-catalog'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="py-16 container mx-auto px-6 md:px-12"
          >
            {viewMode === 'detailed' ? (
              /* DETAILED VIEW: Left Headers & Right Accordion Dropdowns */
              <div className="flex flex-col gap-32">
                {productCategories.map((category, idx) => {
                  const Icon = icons[idx % icons.length];
                  return (
                    <CategorySection key={category.name} category={category} Icon={Icon} />
                  );
                })}
              </div>
            ) : (
              /* CARD VIEW: Category Sections with Grids of Product Cards and seeded images */
              <div className="flex flex-col gap-24">
                {productCategories.map((category) => (
                  <div key={category.name} className="space-y-8">
                    {/* Category Title bar */}
                    <div className="border-b border-olive/15 pb-4 mt-8">
                      <h2 className="font-serif text-3xl md:text-4xl text-export-dark-green">{category.name}</h2>
                      <p className="text-export-dark-green/70 text-sm mt-2 max-w-3xl">{category.description}</p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.items.map((item, idx) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="bg-white rounded-3xl border border-olive/10 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-spice-green/30 transition-all duration-300 group"
                        >
                          {/* Seeded Image Header loaded directly from item data */}
                          <div className="relative h-48 w-full overflow-hidden bg-warm-neutral/20 border-b border-olive/10">
                            <img
                              src={getCardImage(item.image)}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          <div className="p-6 flex-grow flex flex-col justify-between">
                            <div>
                              <h3 className="font-serif text-xl text-export-dark-green mb-4 group-hover:text-forest-green transition-colors">
                                {item.name}
                              </h3>

                              {/* specs block */}
                              <div className="mb-4">
                                <span className="block text-[9px] uppercase tracking-wider text-forest-green mb-1.5 font-bold">Specifications</span>
                                <ul className="space-y-1 bg-warm-neutral/30 p-2.5 rounded-xl border border-olive/5">
                                  {item.specs.map(spec => (
                                    <li key={spec} className="flex items-start gap-1 text-[10px] text-export-dark-green/80">
                                      <span className="text-spice-green font-bold">•</span> {spec}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* origin */}
                              <div className="mb-4">
                                <span className="block text-[9px] uppercase tracking-wider text-forest-green mb-1 font-bold">Sourcing Origin</span>
                                <p className="text-[10px] text-export-dark-green/80 bg-warm-neutral/30 px-2.5 py-1.5 rounded-xl border border-olive/5">{item.origin}</p>
                              </div>

                              {/* applications */}
                              <div className="mb-6">
                                <span className="block text-[9px] uppercase tracking-wider text-forest-green mb-1 font-bold">Industrial Applications</span>
                                <p className="text-[10px] text-export-dark-green/80 bg-warm-neutral/30 px-2.5 py-1.5 rounded-xl border border-olive/5 line-clamp-2">{item.uses}</p>
                              </div>
                            </div>

                            <Link
                              href={`/contact?commodity=${category.name.toLowerCase()}&product=${encodeURIComponent(item.name)}`}
                              className="w-full py-2.5 bg-export-dark-green text-soft-ivory rounded-full text-center hover:bg-forest-green transition-colors duration-300 font-semibold text-[9px] tracking-wider uppercase block border border-transparent cursor-pointer"
                            >
                              Request Quote
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

// Extracted to manage GSAP refs individually
function CategorySection({ category, Icon }: { category: any, Icon: any }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 opacity-0">
      {/* Category Header */}
      <div className="lg:col-span-4">
        <div className="sticky top-32">
          <div className="w-16 h-16 rounded-full bg-warm-neutral flex items-center justify-center mb-8 border border-olive/20">
            <Icon className="text-spice-green" size={28} strokeWidth={1.5} />
          </div>
          <SectionHeading title={category.name} />
          <p className="text-export-dark-green/70 text-lg leading-relaxed mb-8">
            {category.description}
          </p>
        </div>
      </div>

      {/* Items List */}
      <div className="lg:col-span-8">
        <div className="bg-white rounded-2xl shadow-sm border border-olive/10 p-8 md:p-12">
          <Accordion
            items={category.items.map((item: any) => ({
              title: item.name,
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-forest-green mb-3 font-semibold">Technical Specifications</span>
                    <ul className="space-y-2 bg-warm-neutral/50 p-4 rounded-lg border border-olive/5">
                      {item.specs.map((spec: string) => (
                        <li key={spec} className="flex items-start gap-2 text-sm text-export-dark-green/80">
                          <span className="text-spice-green font-bold mt-0.5">•</span> {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-forest-green mb-2 font-semibold">Sourcing Origin</span>
                      <p className="text-sm text-export-dark-green/80 bg-warm-neutral/50 p-3 rounded-lg border border-olive/5">{item.origin}</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-forest-green mb-2 font-semibold">Industrial Applications</span>
                      <p className="text-sm text-export-dark-green/80 bg-warm-neutral/50 p-3 rounded-lg border border-olive/5">{item.uses}</p>
                    </div>
                  </div>
                </div>
              )
            }))}
          />
        </div>
      </div>
    </div>
  );
}
