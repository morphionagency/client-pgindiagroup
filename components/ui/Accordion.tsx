'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string | React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  const contentId = `accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="border-b border-olive/20">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-6 text-left group"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="font-serif text-xl text-export-dark-green group-hover:text-spice-green transition-colors pr-8">
          {title}
        </span>
        <span className="text-muted-gold shrink-0 transition-transform duration-300">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
            id={contentId}
          >
            <div className="pb-6 text-export-dark-green/70 text-base leading-relaxed max-w-3xl">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: {
    title: string;
    content: string | React.ReactNode;
  }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
