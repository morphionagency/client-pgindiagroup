import { TestimonialItem } from "@/types";

export interface B2BTestimonialItem {
  quote: string;
  initials: string;
  author: string;
  company: string;
}

export interface TestimonialStatItem {
  stat: string;
  detail: string;
  metric: string;
  label: string;
}

export const testimonials: TestimonialStatItem[] = [
  {
    stat: "28 Years Active",
    detail: "Maintained verified trade compliance across 17 global sourcing regions since our inception.",
    metric: "1996 Establishment",
    label: "Operating History"
  },
  {
    stat: "100% Clearance",
    detail: "Zero-compromise active APEDA & FSSAI certified phytosanitary clearance on all export shipments.",
    metric: "Tier-1 Certified",
    label: "Quality Accreditations"
  }
];

export const b2bTestimonials: B2BTestimonialItem[] = [
  {
    quote: "The analytical consistency PG India provides across raw resin shipments has elevated our distillation output. Their lot traceability documentation makes global custom clearance effortless.",
    initials: "PL",
    author: "Procurement Lead",
    company: "Scent & Chemistry International"
  },
  {
    quote: "In the B2B incense market, powder binding viscosity is everything. PG India Group is the first supplier that consistently delivers premium Joss Powder sorted by precise mechanical specs.",
    initials: "MD",
    author: "Manufacturing Director",
    company: "Asia Aromatic Industries"
  }
];
