'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const accreditations = [
  { name: 'APEDA', src: '/apeda.png', description: 'Agricultural and Processed Food Products Export Development Authority' },
  { name: 'FSSAI', src: '/fssai.png', description: 'Food Safety and Standards Authority of India' },
  { name: 'GAFTA', src: '/gafta.png', description: 'Grain and Feed Trade Association' },
  { name: 'SBI', src: '/sbi.png', description: 'Spices Board of India' },
  { name: 'Chamber of Commerce', src: '/ccoc.png', description: 'Recognized by the local Chamber of Commerce' },
  { name: 'ISO 9001:2015', src: '/iso.png', description: 'International Organization for Standardization' }
];

export default function AccreditationsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-soft-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-6xl text-export-dark-green mb-6"
          >
            Global Accreditations
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-0.5 bg-cardamom mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-export-dark-green/70 text-lg leading-relaxed"
          >
            Our operations are certified by leading international authorities, guaranteeing that our sourcing, processing, and export pipelines meet the strictest phytosanitary and compliance standards worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {accreditations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-olive/10 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={`${item.name} Accreditation Logo`}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="192px"
                />
              </div>
              <h3 className="font-serif text-2xl text-export-dark-green mb-3">
                {item.name}
              </h3>
              <p className="text-sm text-export-dark-green/60 leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
