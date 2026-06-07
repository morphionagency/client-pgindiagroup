'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data/site';
import { SectionHeading } from '../ui/SectionHeading';
import { Truck, Warehouse, CheckCircle2 } from 'lucide-react';

const icons = [CheckCircle2, Truck, Warehouse];

export default function Services() {
  return (
    <section className="py-32 bg-warm-neutral relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          subtitle="Integrated Infrastructure"
          title="Operational Services"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-soft-ivory rounded-2xl p-10 border border-olive/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-spice-green/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-spice-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-forest-green flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:bg-spice-green transition-all duration-500">
                    <Icon className="text-muted-gold" size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-serif text-2xl text-export-dark-green mb-4">{service.name}</h3>
                  <p className="text-export-dark-green/70 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 h-1 bg-muted-gold w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
