import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTABanner } from "@/components/sections/cta-banner";
import { Section } from "@/components/ui/section";

const CERTS: Record<string, {
  name: string;
  fullName: string;
  market: string;
  description: string;
  details: string;
  validUntil: string;
}> = {
  cpsia: {
    name: "CPSIA",
    fullName: "Consumer Product Safety Improvement Act",
    market: "USA",
    description: "Mandatory 3rd-party testing and documentation for all children's products sold in the USA.",
    details: "RaheDeen issues a General Conformity Certificate (GCC) for every children's product style destined for the USA market. Testing covers lead content (≤100ppm substrate and surface coating), phthalates (6 restricted types ≤0.1%), and flammability per 16 CFR 1615/1616 for sleepwear. Testing is conducted by SGS and Bureau Veritas — both CPSC-accepted labs. Tracking labels are applied to every garment.",
    validUntil: "Ongoing",
  },
  "oeko-tex": {
    name: "OEKO-TEX® Standard 100",
    fullName: "OEKO-TEX Standard 100",
    market: "Global",
    description: "Every component tested for 100+ harmful substances. Class I certified for baby and toddler garments.",
    details: "OEKO-TEX Standard 100 tests every component — fabric, thread, buttons, zippers, labels, prints — for over 100 harmful substances including formaldehyde, heavy metals, pesticides, phthalates, and azo dyes. Our infant and toddler garments are certified to Class I (strictest tier, for babies up to 36 months). Facility-level certification valid through 31 December 2026.",
    validUntil: "2026-12-31",
  },
  gots: {
    name: "GOTS Certified",
    fullName: "Global Organic Textile Standard",
    market: "Global",
    description: "Full supply chain chain-of-custody from organic fibre to finished garment.",
    details: "GOTS certification covers the entire textile processing chain — from organic fibre through spinning, knitting, dyeing, finishing, and garment manufacturing. We work with GOTS-certified mills in Gazipur and issue transaction certificates for every GOTS organic shipment. Minimum 95% certified organic fibre for 'Organic' label claim. Certified by Control Union, valid through 30 June 2026.",
    validUntil: "2026-06-30",
  },
  bsti: {
    name: "BSTI Conformity",
    fullName: "Bangladesh Standards & Testing Institution",
    market: "Bangladesh",
    description: "All domestic-market garments comply with BSTI quality and labelling standards — required for BD retail, chain store, and e-commerce distribution.",
    details: "BSTI (Bangladesh Standards and Testing Institution) conformity is mandatory for garments sold through formal BD retail channels, department stores, and regulated e-commerce platforms. RaheDeen maintains active BSTI registration with annual product compliance testing. All domestic-market garments carry the required labelling (fabric composition, country of origin, care instructions in Bengali and English) and meet BSTI quality specifications. This enables direct supply to Daraz, Shajgoj, and Bangladesh's major retail chains without additional third-party testing costs for the buyer.",
    validUntil: "Ongoing",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cert = CERTS[slug];
  if (!cert) return { title: "Not Found" };
  return { title: cert.name, description: cert.description };
}

export async function generateStaticParams() {
  return Object.keys(CERTS).map((slug) => ({ slug }));
}


export default async function ComplianceSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const cert = CERTS[slug];
  if (!cert) notFound();

  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Compliance", href: "/compliance" }, { label: cert.name }]}
            className="mb-6 text-brand-300"
          />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <Badge variant="accent">{cert.market}</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">{cert.name}</h1>
          <p className="text-brand-300 text-sm mb-4">{cert.fullName}</p>
          <p className="text-lg text-brand-200 max-w-2xl">{cert.description}</p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl">
          <p className="text-gray-600 leading-relaxed text-lg mb-6">{cert.details}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            Certificate validity: <span className="font-medium text-gray-700">{cert.validUntil}</span>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Need Compliance Documentation?"
        subtitle="Test reports, GCCs, and certificates available per style. Contact our compliance team — 48-hour turnaround."
      />
    </>
  );
}
