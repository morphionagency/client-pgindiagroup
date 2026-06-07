'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { productCategories } from '@/lib/data/products';
import { generateSlug } from '@/lib/utils/slugify';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Accreditations", href: "/accreditations" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Global Network", href: "/#network" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-soft-ivory/90 backdrop-blur-md shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center gap-3 group">
            <div className="relative w-12 h-12 shrink-0">
              <Image 
                src="/logo.png" 
                alt="PG India Group Logo" 
                fill 
                className="object-contain"
                priority
                sizes="48px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wide text-export-dark-green font-semibold leading-tight">
                PG India Group
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-export-dark-green/60 font-semibold mt-0.5">
                SWISS-B2B STANDARDS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              if (link.label === "Products") {
                return (
                  <div
                    key={link.label}
                    className="relative py-4"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button
                      className="text-sm font-medium tracking-wide text-export-dark-green hover:text-spice-green transition-colors flex items-center gap-1 cursor-pointer outline-none"
                    >
                      <span>Our Products</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180 text-forest-green' : ''}`} />
                    </button>
                    
                    {/* MEGAMENU DROPDOWN */}
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 -translate-x-[45%] top-full mt-2 w-[100vw] max-w-4xl bg-soft-ivory/95 backdrop-blur-md border border-olive/15 rounded-3xl shadow-2xl p-8 z-50 pointer-events-auto"
                        >
                          <div className="grid grid-cols-4 gap-8">
                            {productCategories.map((category) => (
                              <div key={category.name} className="flex flex-col">
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-forest-green mb-2">
                                  {category.name}
                                </h4>
                                <p className="text-[10px] text-export-dark-green/75 leading-relaxed mb-6 font-medium">
                                  {category.description.substring(0, 75)}...
                                </p>
                                <ul className="space-y-3 flex-grow">
                                  {category.items.slice(0, 5).map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={`/categories/${generateSlug(category.name)}#${generateSlug(item.name)}`}
                                        className="text-xs text-export-dark-green/85 hover:text-spice-green hover:underline font-medium transition-colors"
                                        onClick={() => setIsProductsOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                                
                                {category.items.length > 5 && (
                                  <Link
                                    href={`/categories/${generateSlug(category.name)}`}
                                    className="text-[10px] text-forest-green font-semibold uppercase tracking-wider mt-4 flex items-center gap-1 hover:text-spice-green transition-colors"
                                    onClick={() => setIsProductsOpen(false)}
                                  >
                                    <span>View All ({category.items.length})</span>
                                    <ChevronRight size={10} />
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                          
                          {/* Megamenu Footer */}
                          <div className="mt-8 bg-forest-green/5 border border-spice-green/10 rounded-2xl px-6 py-3 flex justify-between items-center text-[10px] text-export-dark-green font-medium">
                            <div className="flex items-center gap-2">
                              <ShieldCheck size={14} className="text-forest-green" />
                              <span>All materials carry active APEDA / Spices Board phytosanitary certification.</span>
                            </div>
                            <Link 
                              href="/products"
                              className="text-forest-green font-semibold uppercase tracking-widest hover:text-spice-green hover:underline flex items-center gap-1 transition-colors"
                              onClick={() => setIsProductsOpen(false)}
                            >
                              <span>Search Full Catalog</span>
                              <ChevronRight size={10} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-export-dark-green hover:text-spice-green transition-colors relative group py-4"
                >
                  {link.label}
                  <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-muted-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-export-dark-green text-soft-ivory text-xs font-semibold tracking-widest uppercase hover:bg-forest-green transition-colors border border-transparent hover:border-spice-green rounded-full flex items-center gap-2"
              >
                <span>Request Quote</span>
                <span className="text-lg leading-none transform translate-y-[-1px]">→</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-export-dark-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        className="fixed inset-0 z-40 bg-soft-ivory flex flex-col pt-32 px-6 pb-12"
      >
        <div className="flex-1 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-4xl font-serif text-export-dark-green flex items-center justify-between border-b border-olive/20 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ChevronRight className="text-muted-gold opacity-50" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
