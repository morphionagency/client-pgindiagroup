import { Brand, HeroSection, AboutSection, ServiceItem, GlobalPresenceItem, TrustElements, CaseStudyItem, SupplyChainStage, SocialItem } from "@/types";

export const brand: Brand = {
  name: "PG India Group",
  tagline: "Connecting the World through Sustainable Agri-Commodity Networks",
  industry: "Agri Commodities / Import Export / Distribution",
  theme: "Premium B2B, trust-first, SEO-first, global",
  established: "1998",
  location: "Kolkata, India",
  address: "22 Roopchand Roy Street, Bara Bazar, Kolkata 700007",
  phone: "+91 9665338365",
  email: "sales@pgindiagroup.co.in"
};

export const marqueeItems: string[] = [
  "APEDA & FSSAI Certified",
  "99.4% On-Time Vessel Bookings",
  "Direct Farm-Gate Contracts",
  "Zero Adulteration Guarantee",
  "Mechanical Moisture Control",
  "“Consistent viscosity indexing.” — Aromatic Partner",
  "Sovereign Origin Networks",
  "Tier-1 Custom Cleared Logistics",
  "3500+ MT Annual Trade Volume"
];

export const hero: HeroSection = {
  title: "Connecting the World through Sustainable Agri-Commodity Networks",
  subtitle: "Direct-origin sourcing, certified purity control, and institutional supply chains across Spices, Raw Resins, Incense Raw Materials, and Seeds.",
  cta: [
    { label: "Explore Products", to: "/products", primary: true },
    { label: "Request Quotation", to: "/contact", primary: false }
  ],
  visual: "Animated global trade map + subtle grain + premium motion"
};

export const about: AboutSection = {
  title: "Who We Are",
  content: "Global fully integrated agri-commodities network connecting producers and consumers with sustainable and quality-controlled sourcing.",
  sections: [
    {
      title: "Mission",
      description: "To establish resilient, direct-from-origin agricultural supply chains that guarantee food safety, purity, and environmental stewardship from grower to global port."
    },
    {
      title: "Vision",
      description: "To become the global standard for transparent, verified sourcing in spices and specialty raw resins, driven by automated logistics and zero-compromise quality assurance."
    },
    {
      title: "Our Strength",
      description: "A quarter-century of logistics compound partnerships, state-of-the-art warehouses across growing regions, and in-house laboratory testing for moisture, oil content, and microbial purity."
    },
    {
      title: "Global Reach",
      description: "Active in 17 sovereign sourcing and distribution countries, matching commercial volumes with prompt vessel arrivals and compliant phytosanitary documentation."
    }
  ]
};

export const services: ServiceItem[] = [
  {
    name: "Sourcing & Procurement",
    description: "Direct procurement contracts with farming cooperatives and forest collectors across India, Indonesia, and East Africa for unadulterated spices, gums, and seeds."
  },
  {
    name: "Marketing & Distribution",
    description: "Multi-port distribution networks, managing customs compliance, custom grinding, and prompt bulk supply to food manufacturers and industrial processing channels globally."
  },
  {
    name: "Storage & Handling",
    description: "In-house temperature-controlled storage facilities situated across primary cultivation regions, maintaining product moisture levels and preventing contamination."
  }
];

export const globalPresence: GlobalPresenceItem[] = [
  { name: "Comoros", role: "Spice Origin", products: ["Cloves"], cx: 61.7, cy: 69.4 },
  { name: "Madagascar", role: "Clove & Spice Origin", products: ["Cloves", "Clove Stem"], cx: 63.3, cy: 69.8 },
  { name: "Indonesia", role: "Spices & Resin Capital", products: ["Cloves", "Cassia", "Cubeb", "Clove Stem", "Mace", "Damar Batu", "Loban", "Gum Benzoin", "Areca Nut"], cx: 82.9, cy: 65.2 },
  { name: "Vietnam", role: "Incense & Aromatic Sourcing", products: ["Cassia", "Black Pepper", "Star Anise", "Gum Benzoin", "Joss Powder", "Wood Powder"], cx: 80.1, cy: 56.8 },
  { name: "India", role: "Global Headquarters & Hub", products: ["Black Pepper", "Dry Ginger", "Mace", "Bamboo Sticks", "Wood Powder", "Areca Nut", "Soybeans", "Melon Seeds", "Basil Seeds", "Caraway Seeds"], cx: 72.0, cy: 58.5 },
  { name: "Nigeria", role: "Spice Origin", products: ["Dry Ginger", "Stone Flower"], cx: 48.9, cy: 59.7 },
  { name: "Sri Lanka", role: "Specialty Spice Sourcing", products: ["Mace"], cx: 73.0, cy: 57.5 },
  { name: "China", role: "Supply & Sourcing Hub", products: ["Star Anise", "Bamboo Sticks", "Poppy Seeds"], cx: 79.0, cy: 30.3 },
  { name: "Thailand", role: "Resin Sourcing", products: ["Damar Batu", "Loban"], cx: 78.5, cy: 50.4 },
  { name: "Laos", role: "Specialty Sourcing", products: ["Gum Benzoin", "Basil Seeds"], cx: 79.1, cy: 49.0 },
  { name: "Myanmar", role: "Forest Products Sourcing", products: ["Joss Powder", "Areca Nut"], cx: 78.4, cy: 56.7 },
  { name: "Ivory Coast", role: "Cashew Sourcing Origin", products: ["Raw Cashew"], cx: 45.6, cy: 61.1 },
  { name: "Ghana", role: "Raw Cashew Sourcing", products: ["Raw Cashew"], cx: 47.0, cy: 59.2 },
  { name: "Benin", role: "Cashew & Soybean Origin", products: ["Raw Cashew", "Soybeans"], cx: 48.6, cy: 59.7 },
  { name: "Togo", role: "Cashew & Bean Sourcing", products: ["Raw Cashew", "Soybeans"], cx: 48.2, cy: 60.0 },
  { name: "Turkey", role: "Seed & Spice Sourcing", products: ["Poppy Seeds", "Caraway Seeds"], cx: 56.4, cy: 39.3 },
  { name: "Sudan", role: "Seed Origin", products: ["Melon Seeds"], cx: 55.5, cy: 57.4 }
];

export const trustElements: TrustElements = {
  accreditations: ["APEDA", "FSSAI Certified", "Spices Board of India", "ISO 9001:2015", "IEC Registered"],
  stats: [
    { value: 28, suffix: "+", label: "Years Sourcing Heritage" },
    { value: 17, suffix: "", label: "Direct Presence Countries" },
    { value: 3500, suffix: " MT+", label: "Annual Supply Volume" },
    { value: 99.4, suffix: "%", label: "On-Time Vessel Bookings" }
  ]
};

export const caseStudies: CaseStudyItem[] = [
  {
    industry: "Global Flavorings",
    title: "Industrial Distillation Sourcing of Madagascar Cloves",
    problem: "A European flavoring house experienced supply-chain disruptions, failing to meet eugenol yield requirements due to moisture variations in spot-market clove shipments.",
    solution: "PG India Group structured direct off-take agreements with grower cooperatives in Madagascar and implemented mechanical dry testing at our local collection depot before bagging.",
    metric: "850 MT / Year"
  },
  {
    industry: "Incense Production",
    title: "High-Viscosity Joss Powder Pipeline for Southeast Asia",
    problem: "An automated incense manufacturer faced constant assembly line machine jams caused by uneven binder powder viscosity from unstable litsea glutinosa supplies.",
    solution: "We established a standardized sorting program in Central Vietnam, classifying Joss Powder by strict cold-water viscosity indexes (2000-3000 cps) with 100-mesh filtration.",
    metric: "45 Containers / Quarter"
  },
  {
    industry: "Aromatic Processing",
    title: "Calibrated Damar Batu Grates for Paint Manufacturers",
    problem: "A major coatings manufacturer in East Asia was unable to process raw forest-collected resins directly due to heavy wood dust, bark particles, and mixed stone sizes.",
    solution: "PG India implemented a mechanical sorting and dust washing process at our Indonesia warehouse to distribute clean, graded Calcutta and Bombay class Damar Batu resin.",
    metric: "1,200 MT Supplied"
  }
];

export const supplyChain: SupplyChainStage[] = [
  {
    stage: "01",
    title: "Direct Origin Sourcing",
    detail: "We secure supply contracts directly at farm gates and forest concessions, ensuring fair price terms and eliminating third-party adulteration risks."
  },
  {
    stage: "02",
    title: "Rigorous Moisture & Purity Testing",
    detail: "Raw lots are brought to local depots for immediate mechanical testing. Spices are oven-dried to strict moisture thresholds (<12%) before shipping."
  },
  {
    stage: "03",
    title: "Custom Grading & Sifting",
    detail: "Natural gums are graded by size and dust content, and incense powders are sifted to exact mesh sizes to ensure standard flowability in packaging machines."
  },
  {
    stage: "04",
    title: "Compliant B2B Packaging",
    detail: "We pack in premium multi-wall kraft paper bags, double-layer HDPE bags, or solid jute bags. Every package is labeled with lot IDs for full traceability."
  },
  {
    stage: "05",
    title: "Vessel Booking & Custom Cleared",
    detail: "Our Kolkata trade desk coordinates phytosanitary certificates, certificate of origin, and custom export logs to assure prompt sailings."
  }
];

export const socials: SocialItem[] = [
  { name: "LinkedIn", url: "https://linkedin.com/company/pg-india-group" },
  { name: "Facebook", url: "https://facebook.com/pgindiagroup" },
  { name: "Instagram", url: "https://instagram.com/pgindiagroup" },
  { name: "YouTube", url: "https://youtube.com/pgindiagroup" },
  { name: "Pinterest", url: "https://pinterest.com/pgindiagroup" }
];
