import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTABanner } from "@/components/sections/cta-banner";
import { Section } from "@/components/ui/section";

// Static data — replace with Velite when build is set up
const CAPABILITIES: Record<string, {
  title: string;
  description: string;
  tags: string[];
  body: string;
}> = {
  "cut-and-sew": {
    title: "Cut & Sew",
    description: "15 production lines for woven and knit children's garments. 10-day sampling turnaround. MOQ 300 pcs.",
    tags: ["Woven", "Knit", "Jersey", "Fleece"],
    body: "Full cut-and-sew capability details available. Contact us for a capability overview.",
  },
  "private-label-oem": {
    title: "Private Label / OEM",
    description: "Full private label service from design development to retail-ready delivery.",
    tags: ["OEM", "Full Package", "Branding"],
    body: "Full private label / OEM capability details available. Contact us for a capability overview.",
  },
  embroidery: {
    title: "Embroidery",
    description: "24 Barudan multi-head machines, up to 15 thread colours. Digitization included.",
    tags: ["Flat", "Puff", "3D", "Appliqué"],
    body: "Full embroidery capability details available. Contact us for a capability overview.",
  },
  printing: {
    title: "Printing",
    description: "Screen, sublimation, DTG — water-based, phthalate-free inks.",
    tags: ["Screen", "Sublimation", "DTG"],
    body: "Full printing capability details available. Contact us for a capability overview.",
  },
  finishing: {
    title: "Finishing",
    description: "Garment washing, retail-ready packing, 99.4% first-pass QC.",
    tags: ["Washing", "Packing", "QC"],
    body: "Full finishing capability details available. Contact us for a capability overview.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cap = CAPABILITIES[slug];
  if (!cap) return { title: "Not Found" };
  return {
    title: cap.title,
    description: cap.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(CAPABILITIES).map((slug) => ({ slug }));
}

export default async function CapabilityPage({ params }: PageProps) {
  const { slug } = await params;
  const cap = CAPABILITIES[slug];
  if (!cap) notFound();

  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Capabilities", href: "/capabilities" }, { label: cap.title }]}
            className="mb-6 text-brand-300"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{cap.title}</h1>
          <p className="text-lg text-brand-200 max-w-2xl">{cap.description}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {cap.tags.map((t) => (
              <Badge key={t} variant="accent">{t}</Badge>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl">
          <p className="text-gray-500 text-lg leading-relaxed">
            Detailed capability documentation is available in our capability guide.
            Contact our team for a comprehensive overview, machine list, and production schedule.
          </p>
        </div>
      </Section>

      <CTABanner
        title={`Interested in ${cap.title}?`}
        subtitle="Tell us your collection details and we'll confirm lead times, MOQ, and pricing within 24 hours."
      />
    </>
  );
}
