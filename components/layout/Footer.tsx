'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { brand, socials } from '@/lib/data/site';

function getSocialIcon(name: string) {
  switch (name.toLowerCase()) {
    case 'linkedin':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163c-.272-1.021-1.026-1.776-2.047-2.047-1.808-.487-9.05-.487-9.05-.487s-7.241 0-9.049.487c-1.021.272-1.777 1.026-2.048 2.047-.487 1.809-.487 5.58-.487 5.58s0 3.771.487 5.58c.271 1.021 1.027 1.776 2.048 2.047 1.808.487 9.049.487 9.049.487s7.242 0 9.05-.487c1.02-.271 1.775-1.026 2.047-2.047.487-1.809.487-5.58.487-5.58s0-3.771-.487-5.58zm-14.28 9.53v-7.386l6.417 3.693-6.417 3.693z"/>
        </svg>
      );
    case 'pinterest':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.396 2.967 7.396 6.93 0 4.135-2.607 7.462-6.227 7.462-1.216 0-2.359-.631-2.75-1.378l-.751 2.86c-.273 1.05-1.01 2.367-1.503 3.171 1.124.347 2.316.536 3.551.536 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12z"/>
        </svg>
      );
    default:
      return <ArrowUpRight size={16} />;
  }
}

export default function Footer() {
  return (
    <footer className="bg-forest-green text-soft-ivory relative overflow-hidden border-t border-spice-green/30">
      {/* Decorative top pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-muted-gold via-cardamom to-export-dark-green" />

      <div className="container mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl mb-4">{brand.name}</h3>
            <p className="text-soft-ivory/70 text-sm leading-relaxed mb-8 max-w-sm">
              {brand.tagline}
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-spice-green flex items-center justify-center text-soft-ivory/70 hover:bg-spice-green hover:text-soft-ivory transition-all"
                >
                  <span className="sr-only">{social.name}</span>
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Explore / Company */}
          <div>
            <h4 className="text-muted-gold font-semibold tracking-widest uppercase text-xs mb-6">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Accreditations', href: '/accreditations' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Global Network', href: '/#network' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-soft-ivory/80 hover:text-muted-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commodities */}
          <div>
            <h4 className="text-muted-gold font-semibold tracking-widest uppercase text-xs mb-6">Commodities</h4>
            <ul className="space-y-4">
              {[
                { name: 'Spices', slug: 'spices' },
                { name: 'Raw Resins', slug: 'raw-resins' },
                { name: 'Incense Materials', slug: 'incense-raw-materials' },
                { name: 'Nuts & Seeds', slug: 'nuts-and-seeds' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={`/categories/${link.slug}`} className="text-soft-ivory/80 hover:text-muted-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-muted-gold font-semibold tracking-widest uppercase text-xs mb-6">Global Desk</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cardamom shrink-0 mt-0.5" />
                <span className="text-soft-ivory/80 text-sm leading-relaxed">{brand.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cardamom shrink-0" />
                <a href={`mailto:${brand.email}`} className="text-soft-ivory/80 hover:text-muted-gold text-sm transition-colors">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cardamom shrink-0" />
                <a href={`tel:${brand.phone}`} className="text-soft-ivory/80 hover:text-muted-gold text-sm transition-colors">
                  {brand.phone}
                </a>
              </li>
              <li className="pt-4">
                {/* Download Brochure removed */}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-spice-green/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-soft-ivory/50">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-muted-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-muted-gold transition-colors">Terms of Trade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
