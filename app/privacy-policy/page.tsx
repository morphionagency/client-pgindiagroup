import { SectionHeading } from '@/components/ui/SectionHeading';
import { brand } from '@/lib/data/site';

export const metadata = {
  title: `Privacy Policy | ${brand.name}`,
  description: 'Privacy policy and data handling procedures for PG India Group.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 29, 2026";

  return (
    <main className="min-h-screen bg-soft-ivory pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading 
          subtitle="Data Protection"
          title="Privacy Policy"
        />
        
        <div className="mt-12 prose prose-lg prose-headings:font-serif prose-headings:text-export-dark-green prose-p:text-export-dark-green/80 prose-a:text-cardamom prose-a:no-underline hover:prose-a:text-spice-green">
          <p className="text-sm uppercase tracking-widest text-olive mb-8">Last Updated: {lastUpdated}</p>

          <p>
            At {brand.name}, we are committed to protecting the privacy and security of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, and safeguard your information in the context of global B2B trade.
          </p>

          <h3>1. Information Collection</h3>
          <p>
            We collect information that you voluntarily provide to us when expressing interest in obtaining information about us or our products, participating in activities on the Website, or otherwise contacting us. This includes corporate details, email addresses, phone numbers, and trade requirements.
          </p>

          <h3>2. Use of Your Information</h3>
          <p>
            The information we collect is used primarily to:
          </p>
          <ul>
            <li>Facilitate the processing and fulfillment of your trade inquiries and orders.</li>
            <li>Send administrative information, including contract updates and shipping logistics.</li>
            <li>Improve our sourcing intelligence and tailor our service offerings.</li>
            <li>Comply with international trade regulations and KYC (Know Your Customer) requirements.</li>
          </ul>

          <h3>3. Information Sharing</h3>
          <p>
            We do not sell or rent your corporate data to third parties. We may share necessary data with trusted logistics partners, shipping lines, and regulatory authorities strictly for the purpose of executing international shipments and maintaining compliance.
          </p>

          <h3>4. Cookies and Tracking Technologies</h3>
          <p>
            Our website uses standard cookies and similar tracking technologies to enhance user experience, analyze site traffic, and understand where our audience originates. You can control the use of cookies at the individual browser level.
          </p>

          <h3>5. Data Security</h3>
          <p>
            We implement robust organizational and technical security measures designed to protect your corporate information against unauthorized access, destruction, or alteration.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have questions or comments about this policy, you may email our Data Protection Officer at <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
