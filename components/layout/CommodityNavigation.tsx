"use client";

import { motion } from "framer-motion";
import { Menu, Search, Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CommodityNavigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-fluid-1 py-6 transition-colors duration-500 ${
        scrolled ? "bg-ledger/90 backdrop-blur-md text-sage border-b border-olive/30" : "bg-transparent text-ledger"
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Network Node Identifier */}
        <div className="relative flex items-center justify-center w-6 h-6">
          <div className={`absolute w-full h-full rounded-full border border-current opacity-50`} />
          <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
        </div>
        <Link href="/" className="font-sans uppercase tracking-widest text-xs font-semibold">
          PG India Group
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-12 font-sans text-xs tracking-widest uppercase">
        <Link href="#network" className="hover:text-olive transition-colors relative group">
          Intelligence
          <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-olive origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </Link>
        <Link href="#commodities" className="hover:text-olive transition-colors relative group">
          Ecosystem
          <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-olive origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </Link>
        <Link href="#compliance" className="hover:text-olive transition-colors relative group">
          Compliance
          <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-olive origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </Link>
      </nav>

      <div className="flex items-center gap-6">
        <button className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-olive transition-colors">
          <Globe className="w-4 h-4" />
          <span>Global</span>
        </button>
        <button className="flex items-center justify-center w-10 h-10 border border-current rounded-none hover:bg-current hover:text-background transition-colors">
          <Menu className="w-4 h-4" />
        </button>
      </div>
    </motion.header>
  );
}
