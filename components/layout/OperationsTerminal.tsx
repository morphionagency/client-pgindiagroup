"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function OperationsTerminal() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().split("T")[1].slice(0, 8) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-ledger text-sage pt-fluid-3 pb-8 px-fluid-1 overflow-hidden border-t border-olive/30">
      {/* Infrastructure Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 max-w-[1800px] mx-auto mb-24">
        <div className="md:col-span-5 flex flex-col gap-8">
          <h2 className="font-serif text-5xl md:text-7xl leading-none">
            PG India <br />
            <span className="italic text-olive">Group.</span>
          </h2>
          <p className="font-sans text-sm max-w-sm opacity-70">
            A globally interconnected agricultural commodity network operating across sourcing regions, logistics chains, and industrial processing ecosystems.
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-8">
          <h3 className="font-mono text-[10px] tracking-widest text-olive mb-6 uppercase">Operating Nodes</h3>
          <ul className="space-y-4 font-sans text-xs tracking-widest uppercase">
            <li><a href="#" className="hover:text-olive transition-colors flex justify-between items-center group">Mumbai <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" /></a></li>
            <li><a href="#" className="hover:text-olive transition-colors flex justify-between items-center group">Dubai <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" /></a></li>
            <li><a href="#" className="hover:text-olive transition-colors flex justify-between items-center group">Singapore <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" /></a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-mono text-[10px] tracking-widest text-olive mb-6 uppercase">System Links</h3>
          <ul className="space-y-4 font-sans text-xs tracking-widest uppercase">
            <li><a href="#" className="hover:text-olive transition-colors">Trade Intelligence</a></li>
            <li><a href="#" className="hover:text-olive transition-colors">Logistics Hub</a></li>
            <li><a href="#" className="hover:text-olive transition-colors">Compliance Protocol</a></li>
            <li><a href="#" className="hover:text-olive transition-colors">Origin Network</a></li>
          </ul>
        </div>
      </div>

      {/* Live Export Logs / Metadata Terminal */}
      <div className="relative z-10 border-t border-sage/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-sage/50">
        <div className="flex gap-8">
          <span>SYS_TIME: {time}</span>
          <span className="hidden md:inline">LAT: 19.0760° N, LON: 72.8777° E</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-olive rounded-full animate-pulse" />
          SYSTEM SECURE
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-sage transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-sage transition-colors">Terms of Trade</a>
          <span>© {new Date().getFullYear()} PG INDIA GROUP</span>
        </div>
      </div>
    </footer>
  );
}
