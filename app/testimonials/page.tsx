'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Global Spices Imports UK",
    role: "Procurement Director",
    content: "PG India Group has consistently delivered premium grade cloves and cumin that meet our rigorous European quality standards. Their phytosanitary compliance and reliable shipping schedules have made them our preferred partner in India.",
  },
  {
    name: "Sarah Chen",
    company: "Pan-Asian Distributors SG",
    role: "Head of Operations",
    content: "The custom packaging and mesh sorting for the Damar Batu grades we ordered were exactly to our specifications. The transparency throughout the FOB process and the rapid response from their cargo desk is unmatched in the industry.",
  },
  {
    name: "Ahmed Al-Fayed",
    company: "Desert Traders LLC UAE",
    role: "CEO",
    content: "We have been sourcing black pepper and cardamom from PGIE for over three years. Their B2B index pricing is highly competitive, and the moisture certifications are always accurate. A truly trustworthy institutional partner.",
  },
  {
    name: "Elena Rodriguez",
    company: "Iberia Flavors ES",
    role: "Supply Chain Manager",
    content: "When we needed a steady supply of Joss Powder with specific viscosity indexes, PGIE stepped up immediately. Their technical knowledge of agricultural commodities and seamless logistics makes them stand out.",
  }
];

export default function TestimonialsPage() {
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
            Client Testimonials
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
            Hear from our global network of institutional partners and enterprise clients about their experience sourcing premium agricultural commodities through PG India Group.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-olive/10 relative overflow-hidden group hover:border-olive/30 transition-colors"
            >
              <Quote className="absolute top-8 right-8 text-soft-ivory w-24 h-24 rotate-12 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                <div className="hidden md:flex w-16 h-16 rounded-full bg-forest-green text-soft-ivory flex-shrink-0 items-center justify-center font-serif text-2xl">
                  {testimonial.name.charAt(0)}
                </div>
                
                <div className="flex-grow">
                  <p className="text-lg md:text-xl text-export-dark-green leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex md:hidden w-12 h-12 rounded-full bg-forest-green text-soft-ivory items-center justify-center font-serif text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-export-dark-green text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-forest-green font-medium uppercase tracking-wider mt-1">
                        {testimonial.role} <span className="text-muted-gold mx-1">•</span> {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
