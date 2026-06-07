'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { globalPresence } from '@/lib/data/site';
import { SectionHeading } from '../ui/SectionHeading';
import { MapPin, X } from 'lucide-react';

// Removed mathematically mapped Robinson projection coordinates for each node on /world-map.svg
// The coordinates are now dynamically sourced directly from the globalPresence object.

export default function GlobalNetworkMap() {
  const [selectedCountry, setSelectedCountry] = useState<string>("India");
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const activeCountry = hoveredCountry || selectedCountry;
  const activeCountryData = globalPresence.find(c => c.name === activeCountry);

  return (
    <section id="network" className="py-32 bg-export-dark-green relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-forest-green/50 via-export-dark-green to-export-dark-green z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          subtitle="Operating Across 17 Sovereign Nations"
          title="Global Sourcing Network"
          light={true}
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Information Column (Desktop only, hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-4 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-forest-green/20 border border-spice-green/30 p-8 rounded-xl min-h-[320px] flex flex-col justify-between"
            >
              {activeCountryData ? (
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-3xl font-serif text-muted-gold mb-2">{activeCountryData.name}</h3>
                    <p className="text-soft-ivory/70 text-sm tracking-wide uppercase mb-6">{activeCountryData.role}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <p className="text-xs text-soft-ivory/50 uppercase tracking-widest mb-3">Key Commodities</p>
                    <div className="flex flex-wrap gap-2">
                      {activeCountryData.products.map(product => (
                        <span key={product} className="px-3 py-1 bg-export-dark-green border border-spice-green/50 text-soft-ivory text-xs rounded-full">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-48 flex flex-col justify-center items-center text-center opacity-50">
                  <MapPin size={32} className="text-muted-gold mb-4" />
                  <p className="text-soft-ivory font-serif text-lg">Click a node to view operational details.</p>
                </div>
              )}
            </motion.div>

            <div className="mt-8 flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted-gold animate-pulse" />
                <span className="text-xs text-soft-ivory/70 uppercase tracking-wider">Headquarters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-spice-green" />
                <span className="text-xs text-soft-ivory/70 uppercase tracking-wider">Sourcing Hub</span>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-8 order-1 lg:order-2 relative w-full aspect-[784/458] rounded-xl overflow-hidden bg-forest-green/10 border border-spice-green/20 shadow-2xl flex items-center justify-center">
            
            {/* Real World Map SVG Background */}
            <div 
              className="absolute inset-0 bg-[url('/world-map.svg')] bg-cover bg-center opacity-100 z-0"
              aria-hidden="true"
            />
            
            {/* Dark green overlay to blend map perfectly into section canvas */}
            <div className="absolute inset-0 bg-gradient-to-t from-export-dark-green/10 via-transparent to-export-dark-green/10 z-10 pointer-events-none" />

            {/* Nodes */}
            <div className="absolute inset-0 z-20">
              {globalPresence.map((country, index) => {
                const isHQ = country.name === 'India';
                const isSelected = selectedCountry === country.name;
                const isHovered = hoveredCountry === country.name;
                const isActive = isSelected || isHovered;
                
                // Get coordinates directly from the country object
                const left = `${country.cx}%`;
                const top = `${country.cy}%`;

                return (
                  <motion.div
                    key={country.name}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ left, top }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, type: 'spring', stiffness: 100 }}
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    onClick={() => setSelectedCountry(country.name)}
                  >
                    <div className="relative group flex items-center justify-center">
                      {/* Animated Pulse waves for active node */}
                      <div className={`absolute inset-0 rounded-full animate-ping opacity-30 ${isHQ ? 'bg-muted-gold' : 'bg-cardamom'} ${isActive ? 'scale-150 duration-700' : 'scale-100'}`} />
                      
                      {/* Core Node Dot */}
                      <div className={`w-3.5 h-3.5 md:w-4.5 md:h-4.5 rounded-full border border-export-dark-green/60 transition-all duration-300 shadow-lg ${
                        isHQ 
                          ? 'bg-muted-gold z-30' 
                          : isActive 
                            ? 'bg-cardamom z-25 scale-125' 
                            : 'bg-spice-green z-20'
                      }`} />

                      {/* Tooltip for desktop */}
                      <div className={`hidden md:block absolute bottom-full mb-2.5 w-max px-3 py-1.5 bg-export-dark-green border border-spice-green/30 text-soft-ivory text-xs rounded shadow-xl transition-all duration-300 pointer-events-none ${
                        isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
                      }`}>
                        <span className="font-serif font-medium">{country.name}</span>
                        <span className="text-[10px] text-soft-ivory/50 block font-sans tracking-wider">{country.role}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile/Tablet Overlay Details Card (Interactive Slide-Up Panel) */}
            <AnimatePresence>
              {selectedCountry && activeCountryData && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute bottom-4 left-4 right-4 z-30 lg:hidden bg-export-dark-green/95 backdrop-blur-md border border-muted-gold/30 p-5 rounded-lg shadow-2xl flex flex-col"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-serif text-muted-gold">{activeCountryData.name}</h4>
                      <p className="text-[10px] text-soft-ivory/60 uppercase tracking-widest font-sans mt-0.5">{activeCountryData.role}</p>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCountry("");
                      }}
                      className="p-1 text-soft-ivory/40 hover:text-soft-ivory transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  
                  <div>
                    <p className="text-[9px] text-muted-gold uppercase tracking-widest font-sans font-semibold mb-2">Key Sourced Commodities</p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCountryData.products.map(product => (
                        <span key={product} className="px-2.5 py-0.5 bg-forest-green/80 border border-spice-green/50 text-soft-ivory text-[10px] rounded-full">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
