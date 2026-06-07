import { SectionHeading } from '@/components/ui/SectionHeading';
import { brand } from '@/lib/data/site';

export const metadata = {
  title: `Terms of Trade & Service | ${brand.name}`,
  description: 'Standard terms of trade and service for PG India Group international operations.',
};

export default function TermsOfServicePage() {
  const lastUpdated = "May 29, 2026";

  return (
    <main className="min-h-screen bg-soft-ivory pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading 
          subtitle="Legal Framework"
          title="Terms of Trade & Service"
        />
        
        <div className="mt-12 prose prose-lg prose-headings:font-serif prose-headings:text-export-dark-green prose-p:text-export-dark-green/80 prose-a:text-cardamom prose-a:no-underline hover:prose-a:text-spice-green">
          <p className="text-sm uppercase tracking-widest text-olive mb-8">Last Updated: {lastUpdated}</p>

          <p>
            Welcome to {brand.name}. By accessing our website, services, and engaging in trade operations with us, you agree to be bound by the following Terms of Trade and Service. Please read them carefully.
          </p>

          <h3>1. Scope of Operations</h3>
          <p>
            {brand.name} acts as a global sourcing, processing, and export entity specializing in agricultural commodities. These terms apply to all digital interactions, negotiations, and formal contracts initiated through our platform.
          </p>

          <h3>2. Trade & Compliance</h3>
          <p>
            All international shipments are subject to the regulations of the exporting and importing nations. We strictly adhere to phytosanitary requirements and international compliance standards (including GAFTA and ISO directives). Buyers are responsible for ensuring commodities meet local import regulations prior to finalizing contracts.
          </p>

          <h3>3. Quotations and Contracts</h3>
          <p>
            Quotations provided via our digital platforms or direct communication are indicative and subject to final confirmation. A binding agreement is only formed upon the mutual execution of a formal Sales Contract or Proforma Invoice.
          </p>

          <h3>4. Liability and Indemnification</h3>
          <p>
            While we strive to ensure the highest quality through rigorous quality control, {brand.name}'s liability is strictly limited to the value of the goods supplied. We are not liable for indirect, incidental, or consequential damages arising from shipping delays beyond our control (Force Majeure).
          </p>

          <h3>5. Intellectual Property</h3>
          <p>
            All content on this website, including texts, graphics, logos, and images, is the exclusive property of {brand.name} and is protected by international copyright laws. Unauthorized reproduction is strictly prohibited.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction of our global headquarters. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in that region.
          </p>

          <hr className="my-12 border-olive/20" />
          
          <p className="text-sm">
            For specific inquiries regarding our terms of trade, please contact our legal desk at <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
