import { ProductCategory } from "@/types";

// B2B Cargo Desk — Sourcing Media Offline Migration Guide:
// --------------------------------------------------------
// To link a product to a local file in your /public folder:
// 1. Drop your photo inside the public directory, e.g., `/public/products/cloves.jpg`
// 2. Set the image property to its relative web path: `image: "/products/cloves.jpg"`
export const productCategories: ProductCategory[] = [
  {
    name: "Spices",
    description: "Premium quality whole and ground culinary and industrial spices, fully tested for purity and volatile oil content.",
    items: [
      {
        name: "Cloves",
        specs: ["Moisture < 12%", "Headless < 2%", "Foreign Matter < 0.5%", "Volatile Oil > 18%"],
        origin: "Comoros, Madagascar, Indonesia",
        uses: "Food Processing, Extraction, Healthcare",
        image: "/products/clove.jpg"
      },
      {
        name: "Cassia",
        specs: ["Thickness 1.5mm - 3mm", "Moisture < 14%", "Foreign Matter < 1%", "Volatile Oil > 2%"],
        origin: "Vietnam, Indonesia",
        uses: "Culinary Spice, Essential Oils, Bakery Channels",
        image: "/products/cassia.jpg"
      },
      {
        name: "Cubeb",
        specs: ["Purity > 99%", "Moisture < 12%", "Ash Content < 7%"],
        origin: "Indonesia",
        uses: "Pharmacognosy, Cosmetics, Flavorings",
        image: "/products/cubeb.jpg"
      },
      {
        name: "Black Pepper",
        specs: ["Density 500 - 550 GL", "Moisture < 12.5%", "Piperine Content > 4%"],
        origin: "India (Malabar), Vietnam",
        uses: "Ground Spices, Oleoresins, Global Retail Grinding",
        image: "/products/bpepper.jpg"
      },
      {
        name: "Clove Stem",
        specs: ["Moisture < 13%", "Admixture < 1%", "Sand/Dust < 0.5%"],
        origin: "Madagascar, Indonesia",
        uses: "Essential Oil Distillation, Ground Spice Mixes",
        image: "/products/clovestem.jpg"
      },
      {
        name: "Dry Ginger",
        specs: ["Grade: Nuwara / Cochin", "Moisture < 12%", "SO2 Content: Nil"],
        origin: "India, Nigeria",
        uses: "Confectionery, Extraction, Herbal Infusions",
        image: "/products/dryginger.jpg"
      },
      {
        name: "Mace",
        specs: ["Color: Orange-Red", "Broken < 5%", "Foreign Matter < 1%"],
        origin: "India, Sri Lanka, Indonesia",
        uses: "Premium Spice Mixes, Perfumery, Bakery Ingredients",
        image: "/products/mace.jpg"
      },
      {
        name: "Star Anise",
        specs: ["Dicarps > 85%", "Foreign Matter < 1%", "Moisture < 12%"],
        origin: "China, Vietnam",
        uses: "Extraction, Traditional Seasonings, Confectionery",
        image: "/products/staranise.jpg"
      },
      {
        name: "Stone Flower",
        specs: ["Clean, Sun-dried", "Moisture < 10%", "Admixture < 1.5%"],
        origin: "Nigeria",
        uses: "Garam Masala Formulations, Trad Medicine",
        image: "/products/stoneflower.jpg"
      }
    ]
  },
  {
    name: "Raw Resins",
    description: "High-purity natural gums and aromatic resins direct from forest concessions for industrial, incense, and fragrance manufacturing.",
    items: [
      {
        name: "Damar Batu",
        specs: ["Grade: Calcutta, Bombay, Dust", "Moisture < 3%", "Insoluble Ash < 0.5%"],
        origin: "Thailand, Indonesia",
        uses: "Paints & Varnishes, Boat Caulking, Aromatic Incense",
        image: "/products/damar.jpg"
      },
      {
        name: "Loban",
        specs: ["Aromatic Grade A/B", "Purity > 98%", "Ash < 4%"],
        origin: "Indonesia, Thailand",
        uses: "Traditional Incense, Religious Ceremonies, Fragrances",
        image: "/products/loban.jpg"
      },
      {
        name: "Gum Benzoin",
        specs: ["Moisture < 5%", "Siam/Sumatra Grade", "Alcohol Soluble Resin > 90%"],
        origin: "Laos, Vietnam, Indonesia",
        uses: "Perfumery, Pharmaceutics, Flavor Fixatives",
        image: "/products/benzoin.jpg"
      }
    ]
  },
  {
    name: "Incense Raw Materials",
    description: "Standardized botanical binders, powders, and core materials optimized for mechanical incense stick processing.",
    items: [
      {
        name: "Joss Powder",
        specs: ["Viscosity: 1800 - 3000 cps", "Mesh Size: 80 - 100", "Bark Content: 100% litsea glutinosa"],
        origin: "Vietnam, Myanmar",
        uses: "Incense Binding Agent, Cone Manufacturing",
        image: "/products/josspowder.jpg"
      },
      {
        name: "Bamboo Sticks",
        specs: ["Length: 8inch, 9inch, 12inch", "Thickness: 1.3mm - 2.0mm", "Peeled & Polished, Zero Mold"],
        origin: "China, India",
        uses: "Agarbatti Cores, Manual & Auto Incense Machines",
        image: "/products/bamboo.jpg"
      },
      {
        name: "Wood Powder",
        specs: ["Mesh Size: 80 - 120", "Moisture < 8%", "Color: Light Cream/White"],
        origin: "India, Vietnam",
        uses: "Base Filler, Aroma Carrier Powder",
        image: "/products/woodpowder.jpg"
      }
    ]
  },
  {
    name: "Nuts & Seeds",
    description: "Graded seeds and raw nuts, tested for moisture, pesticide residues, and aflatoxin compliance.",
    items: [
      {
        name: "Raw Cashew",
        specs: ["Out-Turn: 48 - 52 lbs", "Nut Count: 180 - 200/kg", "Moisture < 8.5%"],
        origin: "Ivory Coast, Ghana, Benin, Togo",
        uses: "Cashew Processing, Roasting & Salting Channels",
        image: "/products/cashew.jpg"
      },
      {
        name: "Areca Nut",
        specs: ["Grade: Lali, Split, Whole", "Moisture < 12%", "Aflatoxin Compliant"],
        origin: "India, Myanmar, Indonesia",
        uses: "Traditional Chewing Formulations, Industrial Extraction",
        image: "/products/areca.jpg"
      },
      {
        name: "Soybeans",
        specs: ["Protein > 38%", "Moisture < 13%", "Oil Content > 18.5%"],
        origin: "India, Togo, Benin",
        uses: "Crushing Mills, Animal Feed, Edible Oil Production",
        image: "/products/soybean.jpg"
      },
      {
        name: "Poppy Seeds",
        specs: ["Grade: Blue / White", "Purity > 99.5%", "Damaged Seeds < 0.5%"],
        origin: "Turkey, China",
        uses: "Bakery Toppings, Traditional Desserts, Thickening Pastes",
        image: "/products/poppy.jpg"
      },
      {
        name: "Melon Seeds",
        specs: ["Purity > 99%", "Moisture < 9%", "Shell-Free Kernels"],
        origin: "India, Sudan",
        uses: "Snacks Sourcing, Confectionery, Indian Gravy Bases",
        image: "/products/melon.jpg"
      },
      {
        name: "Basil Seeds",
        specs: ["Grade A Sun-dried", "Purity > 99%", "Swelling Factor > 5%"],
        origin: "India, Laos",
        uses: "Beverages, Healthy Foods, Hydrocolloid Production",
        image: "/products/basil.jpg"
      },
      {
        name: "Caraway Seeds",
        specs: ["Foreign Matter < 1%", "Moisture < 11%", "Volatile Oil > 2.5%"],
        origin: "India, Turkey",
        uses: "Spiced Liqueurs, Rye Baking, Traditional Spice Mixes",
        image: "/products/caraway.jpg"// "https://images.unsplash.com/photo-1536882240095-0379873feb4e?q=80&w=600&auto=format&fit=crop"
      }
    ]
  }
];
