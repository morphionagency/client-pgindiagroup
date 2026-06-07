'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { brand } from '@/lib/data/site';
import { Mail, Phone, MapPin, Send, ChevronDown, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

function ContactForm() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    commodity: '',
    volume: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const commodityParam = searchParams.get('commodity');
    const productParam = searchParams.get('product');
    
    let updatedCommodity = '';
    if (commodityParam) {
      const p = commodityParam.toLowerCase();
      if (p.includes('spice')) updatedCommodity = 'spices';
      else if (p.includes('resin')) updatedCommodity = 'resins';
      else if (p.includes('incense')) updatedCommodity = 'incense';
      else if (p.includes('nuts') || p.includes('seed')) updatedCommodity = 'nuts';
    }

    let updatedMessage = '';
    if (productParam) {
      updatedMessage = `Inquiry regarding: ${decodeURIComponent(productParam)}\n\n`;
    }

    setFormData(prev => ({
      ...prev,
      commodity: updatedCommodity || prev.commodity,
      message: updatedMessage ? updatedMessage + prev.message : prev.message
    }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formspree.io/f/mjgdyjoo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          commodity: '',
          volume: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setSubmitError('An unexpected network error occurred. Please verify your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-warm-neutral/40 backdrop-blur-md rounded-3xl p-8 border border-olive/15 shadow-2xl flex flex-col items-center justify-center text-center py-16 w-full"
      >
        <div className="w-16 h-16 bg-forest-green/10 text-forest-green rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={32} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-gold block mb-2">
          Inquiry Registered
        </span>
        <h3 className="font-serif text-3xl text-export-dark-green mb-4">
          Sourcing Request Received
        </h3>
        <p className="text-export-dark-green/80 text-sm font-light leading-relaxed max-w-sm mb-8">
          Thank you for your request. Our trade sales desk will analyze your specifications and verify cargo dispatch feasibility. A representative will contact you via email or phone within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitSuccess(false)}
          className="px-8 py-3 bg-export-dark-green text-soft-ivory rounded-full hover:bg-forest-green transition-all duration-300 font-semibold text-xs tracking-widest uppercase cursor-pointer"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-warm-neutral/40 backdrop-blur-md rounded-3xl p-8 border border-olive/15 shadow-2xl w-full"
    >
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-gold block mb-2">
          Formal Request for Quote
        </span>
        <h3 className="font-serif text-3xl text-export-dark-green">
          Sourcing Specifications Form
        </h3>
      </div>

      {submitError && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-700 text-xs p-4 rounded-xl mb-6 flex items-start gap-2.5">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-export-dark-green/70 font-semibold mb-2">
              Full Name *
            </label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="bg-soft-ivory/80 border border-olive/15 rounded-xl px-4 py-3 outline-none focus:border-spice-green transition-colors text-sm text-export-dark-green placeholder-export-dark-green/30 disabled:opacity-60" 
              placeholder="Harrison Croft" 
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="company" className="text-[10px] uppercase tracking-wider text-export-dark-green/70 font-semibold mb-2">
              Company Name *
            </label>
            <input 
              type="text" 
              id="company" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
              className="bg-soft-ivory/80 border border-olive/15 rounded-xl px-4 py-3 outline-none focus:border-spice-green transition-colors text-sm text-export-dark-green placeholder-export-dark-green/30 disabled:opacity-60" 
              placeholder="Apex Flavors Ltd" 
              required 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-export-dark-green/70 font-semibold mb-2">
              Work Email *
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="bg-soft-ivory/80 border border-olive/15 rounded-xl px-4 py-3 outline-none focus:border-spice-green transition-colors text-sm text-export-dark-green placeholder-export-dark-green/30 disabled:opacity-60" 
              placeholder="purchasing@apexflavors.com" 
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-[10px] uppercase tracking-wider text-export-dark-green/70 font-semibold mb-2">
              Direct Phone / Whatsapp
            </label>
            <input 
              type="text" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="bg-soft-ivory/80 border border-olive/15 rounded-xl px-4 py-3 outline-none focus:border-spice-green transition-colors text-sm text-export-dark-green placeholder-export-dark-green/30 disabled:opacity-60" 
              placeholder="+44 7911 123456" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col relative">
            <label htmlFor="commodity" className="text-[10px] uppercase tracking-wider text-export-dark-green/70 font-semibold mb-2">
              Select Category *
            </label>
            <div className="relative">
              <select 
                id="commodity" 
                name="commodity"
                value={formData.commodity}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full bg-soft-ivory/80 border border-olive/15 rounded-xl px-4 py-3 outline-none focus:border-spice-green transition-colors text-sm text-export-dark-green appearance-none pr-10 disabled:opacity-60"
                required
              >
                <option value="">Select Category</option>
                <option value="spices">Spices</option>
                <option value="resins">Raw Resins</option>
                <option value="incense">Incense Raw Materials</option>
                <option value="nuts">Nuts & Seeds</option>
              </select>
              <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-export-dark-green/60 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="volume" className="text-[10px] uppercase tracking-wider text-export-dark-green/70 font-semibold mb-2">
              Target Volume (FCL / MT)
            </label>
            <input 
              type="text" 
              id="volume" 
              name="volume"
              value={formData.volume}
              onChange={handleChange}
              disabled={isSubmitting}
              className="bg-soft-ivory/80 border border-olive/15 rounded-xl px-4 py-3 outline-none focus:border-spice-green transition-colors text-sm text-export-dark-green placeholder-export-dark-green/30 disabled:opacity-60" 
              placeholder="2x20' FCL / 40 MT" 
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-export-dark-green/70 font-semibold mb-2">
            Message & Sifting Specifications *
          </label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            rows={4} 
            className="bg-soft-ivory/80 border border-olive/15 rounded-xl px-4 py-3 outline-none focus:border-spice-green transition-colors text-sm text-export-dark-green resize-none placeholder-export-dark-green/30 leading-relaxed disabled:opacity-60" 
            placeholder="Provide moisture grade parameters, required sifting mesh sizes, or targeted shipping terms (FOB/CIF)..."
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="mt-2 w-full py-4 bg-export-dark-green text-soft-ivory rounded-full hover:bg-forest-green transition-all duration-300 font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 border border-transparent shadow-lg cursor-pointer disabled:bg-export-dark-green/60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span>Processing Request</span>
              <Loader2 size={12} className="animate-spin" />
            </>
          ) : (
            <>
              <span>Send Cargo Request</span>
              <Send size={12} className="transform rotate-0" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-warm-neutral/30 min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Decorative organic background blobs */}
      <div className="absolute -left-32 top-12 pointer-events-none h-[450px] w-[450px] rounded-full bg-forest-green/5 blur-3xl opacity-60" />
      <div className="absolute -right-32 bottom-12 pointer-events-none h-[450px] w-[450px] rounded-full bg-muted-gold/5 blur-3xl opacity-60" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Narrative & Contact Details */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-muted-gold/60" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-gold font-semibold block">
                  Enterprise Contact
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl text-export-dark-green leading-[1.1] tracking-tight">
                Establish B2B Cargo Sourcing.
              </h1>
              
              <p className="text-export-dark-green/80 text-sm md:text-base font-light leading-relaxed max-w-xl">
                Our trade operators coordinate FCL ocean freight logistics under standard international parameters. Request custom moisture sifting grades or verify shipping schedules.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-8 pt-4">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-full border border-muted-gold/40 flex items-center justify-center shrink-0 text-muted-gold">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-export-dark-green/60 font-sans font-semibold">
                    Trade Sales Desk
                  </span>
                  <a href={`mailto:${brand.email}`} className="block font-serif text-lg text-export-dark-green hover:underline mt-1">
                    {brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-full border border-muted-gold/40 flex items-center justify-center shrink-0 text-muted-gold">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-export-dark-green/60 font-sans font-semibold">
                    Operations Line
                  </span>
                  <a href={`tel:${brand.phone}`} className="block font-serif text-lg text-export-dark-green hover:underline mt-1">
                    {brand.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-full border border-muted-gold/40 flex items-center justify-center shrink-0 text-muted-gold">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-export-dark-green/60 font-sans font-semibold">
                    Head Office Address
                  </span>
                  <p className="block font-serif text-lg text-export-dark-green mt-1 max-w-sm leading-relaxed">
                    {brand.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Transit Proximity Info */}
            <div className="bg-forest-green/5 border border-spice-green/10 rounded-2xl p-6 max-w-md">
              <span className="text-[9px] uppercase tracking-widest text-muted-gold font-bold block mb-2">Transit Proximity</span>
              <p className="text-xs text-export-dark-green/70 leading-relaxed">
                Primary consolidation warehouse located within 45km of Haldia / Kolkata Seaports, assuring prompt custom clearance and vessel dispatch.
              </p>
            </div>
          </div>

          {/* Right Column: Custom Specifications Form Card */}
          <Suspense fallback={
            <div className="bg-warm-neutral/40 backdrop-blur-md rounded-3xl p-8 border border-olive/15 shadow-2xl h-[600px] flex items-center justify-center w-full">
              <div className="text-export-dark-green/60 text-sm animate-pulse flex items-center gap-2">
                <Loader2 size={16} className="animate-spin" />
                <span>Loading form details...</span>
              </div>
            </div>
          }>
            <ContactForm />
          </Suspense>

        </div>
      </div>
    </div>
  );
}

