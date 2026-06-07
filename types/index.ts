export interface Brand {
  name: string;
  tagline: string;
  industry: string;
  theme: string;
  established: string;
  location: string;
  address: string;
  phone: string;
  email: string;
}

export interface NavigationItem {
  label: string;
  to: string;
}

export interface CTA {
  label: string;
  to: string;
  primary: boolean;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  cta: CTA[];
  visual: string;
}

export interface AboutSectionInfo {
  title: string;
  description: string;
}

export interface AboutSection {
  title: string;
  content: string;
  sections: AboutSectionInfo[];
}

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ProductItem {
  name: string;
  specs: string[];
  origin: string;
  uses: string;
  image: string;
}

export interface ProductCategory {
  name: string;
  description: string;
  items: ProductItem[];
}

export interface GlobalPresenceItem {
  name: string;
  role: string;
  products: string[];
  cx: number;
  cy: number;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TrustElements {
  accreditations: string[];
  stats: StatItem[];
}

export interface CaseStudyItem {
  industry: string;
  title: string;
  problem: string;
  solution: string;
  metric: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
}

export interface SupplyChainStage {
  stage: string;
  title: string;
  detail: string;
}

export interface SocialItem {
  name: string;
  url: string;
}
