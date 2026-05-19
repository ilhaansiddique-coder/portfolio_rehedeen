import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTABanner } from "@/components/sections/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real production programmes — US brands, organic baby brands, SE Asia DTC — with documented results and compliance outcomes.",
};

const CASE_STUDIES = [
  {
    slug: "bd-retailer-aw26",
    title: "US Brand AW26 Private Label Collection",
    client: "Bloom & Thread USA",
    market: "Scandinavia",
    season: "AW26",
    description:
      "3,200-piece private label collection delivered 6 days ahead of schedule — zero compliance rejections on OEKO-TEX documentation.",
    tags: ["private-label", "Scandinavia", "OEM"],
    results: [
      "Delivered 6 days ahead of ex-factory date",
      "Zero compliance rejections",
      "99.8% AQL 1.5 pass rate",
    ],
    publishedAt: "2025-09-15",
  },
  {
    slug: "southeast-asian-organic-baseline-collection",
    title: "Organic Baseline Collection — SE Asia Launch",
    client: "Naturlig Born",
    market: "USA + SE Asia",
    season: "SS25",
    description:
      "GOTS-certified organic cotton collection launched across two markets simultaneously — Thai and EU labelling in a single production run.",
    tags: ["organic", "GOTS", "dual-market"],
    results: [
      "Full GOTS chain-of-custody certification",
      "Dual-market labelling in one run",
      "0 ppm formaldehyde result",
    ],
    publishedAt: "2025-03-20",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Case Studies" }]} className="mb-6 text-brand-300" />
          <Badge variant="accent" className="mb-4">Portfolio</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            Production Programmes That Delivered
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl leading-relaxed">
            Real programmes, real results — with compliance documentation, lead time performance,
            and QC outcomes published openly.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid sm:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.slug} {...cs} />
          ))}
        </div>
      </Section>

      <CTABanner
        title="Could Your Programme Be Next?"
        subtitle="We work with brands that value compliance, transparency, and on-time delivery. If that's you, let's talk."
      />
    </>
  );
}
