import { productCategories } from '@/lib/data/products';
import { generateSlug } from '@/lib/utils/slugify';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Droplets, Zap, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const icons = [Leaf, Droplets, Zap, ShieldCheck];

const categoryImages: Record<string, string> = {
  "Spices": "/spices.jpg",
  "Raw Resins": "/resins.jpg",
  "Incense Raw Materials": "/incenseraw.jpg",
  "Nuts & Seeds": "/nutseeds.jpg"
};

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: generateSlug(category.name),
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = productCategories.find(c => generateSlug(c.name) === slug);
  if (!category) return {};

  return {
    title: `${category.name} | PG India Group`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryIndex = productCategories.findIndex(c => generateSlug(c.name) === slug);
  const category = productCategories[categoryIndex];

  if (!category) {
    notFound();
  }

  const Icon = icons[categoryIndex % icons.length];
  const bgImage = categoryImages[category.name] || '/herobg.jpg';

  return (
    <div className="bg-soft-ivory min-h-screen pb-24">
      {/* Category Hero Section */}
      <section className="pt-40 pb-24 bg-forest-green relative overflow-hidden">
        <Image
          src={bgImage}
          alt={`${category.name} background`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green via-forest-green/80 to-transparent z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 max-w-5xl text-center">
          <div className="w-20 h-20 rounded-full bg-soft-ivory/10 backdrop-blur-md flex items-center justify-center mx-auto mb-8 border border-muted-gold/30">
            <Icon className="text-muted-gold" size={36} strokeWidth={1.5} />
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <h1 className="font-serif text-5xl md:text-7xl text-soft-ivory mb-6">
              {category.name}
            </h1>
            <p className="text-soft-ivory/90 text-xl font-light leading-relaxed max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <SectionHeading subtitle="Commodity Deep Dive" title={`Our ${category.name} Portfolio`} />
        </div>

        <div className="flex flex-col gap-24 max-w-6xl mx-auto">
          {category.items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const itemSlug = generateSlug(item.name);

            return (
              <div
                key={item.name}
                id={itemSlug}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center scroll-mt-32 group ${!isEven ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Visual */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-olive/10 group-hover:shadow-olive/20 transition-all duration-700">
                    <img
                      src={item.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop'}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                    />
                    <div className="absolute inset-0 bg-forest-green/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-[1px] bg-muted-gold/60" />
                      <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-forest-green">
                        {category.name}
                      </span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-export-dark-green mb-6 group-hover:text-forest-green transition-colors duration-500">
                      {item.name}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-forest-green mb-4 font-bold flex items-center gap-2">
                        <ShieldCheck size={16} className="text-muted-gold" />
                        Specifications
                      </h4>
                      <ul className="space-y-3">
                        {item.specs.map(spec => (
                          <li key={spec} className="flex items-start gap-2 text-sm text-export-dark-green/80">
                            <span className="text-spice-green font-bold mt-0.5">•</span> {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-forest-green mb-3 font-bold flex items-center gap-2">
                          <Leaf size={16} className="text-muted-gold" />
                          Sourcing Origin
                        </h4>
                        <p className="text-sm text-export-dark-green/80 leading-relaxed bg-white/50 p-4 rounded-xl border border-olive/10 shadow-sm">{item.origin}</p>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-forest-green mb-3 font-bold flex items-center gap-2">
                          <Zap size={16} className="text-muted-gold" />
                          Industrial Uses
                        </h4>
                        <p className="text-sm text-export-dark-green/80 leading-relaxed bg-white/50 p-4 rounded-xl border border-olive/10 shadow-sm">{item.uses}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/contact?commodity=${category.name.toLowerCase()}&product=${encodeURIComponent(item.name)}`}
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-export-dark-green text-soft-ivory rounded-full hover:bg-forest-green transition-all duration-300 font-semibold text-[10px] tracking-widest uppercase shadow-lg shadow-forest-green/20 hover:shadow-forest-green/40 self-start w-full md:w-auto"
                  >
                    Request Bulk Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
