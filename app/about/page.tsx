'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { about } from '@/lib/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

const leadershipTeam = [
  {
    name: "Mr. P.G. Agarwal",
    role: "Founder & Chairman",
    image: "/businessman.jpg",
    bio: "With over three decades of commodity trading expertise, Mr. Agarwal established PG India Group with a vision to streamline the fragmented agricultural supply chain. His deep relationships across origin markets continue to drive our global expansion."
  },
  {
    name: "Mr. Rajat Agarwal",
    role: "Managing Director",
    image: "/businessman.jpg",
    bio: "Spearheading the company's modernization and international compliance standards. Rajat oversees our expansion into specialized resin processing and directs the global distribution network across 17 countries."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-soft-ivory min-h-screen">
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-export-dark-green relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
          alt="Agricultural supply chain background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-10 mix-blend-luminosity"
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl text-soft-ivory mb-6"
          >
            {about.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-soft-ivory/80 text-xl font-light leading-relaxed"
          >
            {about.content}
          </motion.p>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {about.sections.map((section, i) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border-t border-olive/20 pt-8"
            >
              <h3 className="font-serif text-2xl text-export-dark-green mb-4">{section.title}</h3>
              <p className="text-export-dark-green/70 leading-relaxed text-sm">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-warm-neutral border-t border-olive/10">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading 
            subtitle="Executive Board"
            title="Leadership"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
            {leadershipTeam.map((leader, i) => (
              <motion.div 
                key={leader.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group"
              >
                <div className="w-full h-[500px] rounded-xl overflow-hidden mb-6 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <h3 className="font-serif text-3xl text-export-dark-green mb-2">{leader.name}</h3>
                <p className="text-muted-gold tracking-widest uppercase text-xs font-semibold mb-4">{leader.role}</p>
                <p className="text-export-dark-green/70 leading-relaxed text-sm">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
