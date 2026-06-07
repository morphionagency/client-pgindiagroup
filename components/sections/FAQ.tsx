'use client';

import { faqs } from '@/lib/data/faqs';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';

export default function FAQ() {
  return (
    <section className="py-32 bg-soft-ivory relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading 
          subtitle="Clarity in Operations"
          title="Frequently Asked Questions"
          align="center"
        />

        <div className="mt-16 bg-soft-ivory rounded-2xl shadow-sm border border-olive/10 p-8 md:p-12">
          <Accordion 
            items={faqs.map(faq => ({
              title: faq.q,
              content: faq.a
            }))}
          />
        </div>
      </div>
    </section>
  );
}
