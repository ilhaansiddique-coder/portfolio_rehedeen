import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/sections/cta-banner";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities",
  description:
    "Cut & sew, private label OEM, embroidery, printing, and finishing — five core capabilities for kids' apparel brands.",
};

const CAPABILITIES = [
  {
    slug: "cut-and-sew",
    title: "Cut & Sew",
    description:
      "15 production lines for woven and knit children's garments. Single-needle, overlock, flatlock, coverstitch. 10-day sampling turnaround. MOQ 300 pcs.",
    tags: ["Woven", "Knit", "Jersey", "Fleece"],
    highlight: "10-day sampling",
  },
  {
    slug: "private-label-oem",
    title: "Private Label / OEM",
    description:
      "Full private label service from design development to retail-ready delivery. In-house hangtag, label, and barcode printing. Single-point vendor.",
    tags: ["Full Package", "OEM", "Branding"],
    highlight: "Single-point vendor",
  },
  {
    slug: "embroidery",
    title: "Embroidery",
    description:
      "24 Barudan multi-head machines, up to 15 thread colours. Flat, puff, 3D embroidery. Digitization included. OEKO-TEX certified threads.",
    tags: ["Flat", "Puff", "3D", "Appliqué"],
    highlight: "24 machines",
  },
  {
    slug: "printing",
    title: "Printing",
    description:
      "Screen printing (8 colours), all-over sublimation, DTG for short runs, heat transfer vinyl. Water-based, phthalate-free inks — safe for children's garments.",
    tags: ["Screen", "Sublimation", "DTG", "HTV"],
    highlight: "Phthalate-free, child-safe inks",
  },
  {
    slug: "finishing",
    title: "Finishing",
    description:
      "Stone wash, enzyme wash, pigment wash. Hangtag attachment, retail-ready packing per buyer EDI spec. 99.4% first-pass QC rate.",
    tags: ["Washing", "Packing", "QC"],
    highlight: "99.4% QC pass rate",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Capabilities" }]} className="mb-6 text-brand-300" />
          <Badge variant="accent" className="mb-4">Manufacturing</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            Five Core Capabilities
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl leading-relaxed">
            Everything your kids&apos; collection needs — under one roof, with full
            compliance documentation for EU, UK, and USA markets.
          </p>
        </div>
      </div>

      <Section>
        <SectionHeader
          title="What We Do"
          subtitle="Each capability operates as a standalone service or as part of a full-package programme."
          align="left"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <Link
              key={cap.slug}
              href={`/capabilities/${cap.slug}`}
              className="group relative flex flex-col p-6 rounded-3xl bg-white border border-gray-100 hover:border-brand-200 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Number */}
              <div className="text-5xl font-bold text-brand-100 mb-4 leading-none">
                0{i + 1}
              </div>

              {/* Highlight badge */}
              <Badge variant="accent" className="self-start mb-3 text-xs">
                {cap.highlight}
              </Badge>

              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors">
                {cap.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{cap.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {cap.tags.map((t) => (
                  <Badge key={t} variant="muted" className="text-xs">{t}</Badge>
                ))}
              </div>

              <div className="flex items-center gap-1.5 mt-5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                View details <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Need a Custom Capability Mix?"
        subtitle="Not every collection fits neatly into one service. Talk to our team about combining cut-and-sew, embroidery, and finishing in a single production programme."
      />
    </>
  );
}
