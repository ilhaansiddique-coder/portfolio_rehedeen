import Link from "next/link";
import { Scissors, Tag, Printer, Package, Needle, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const CAPABILITIES = [
  {
    icon: Scissors,
    title: "Cut & Sew",
    href: "/capabilities/cut-and-sew",
    description:
      "15 production lines with single-needle, overlock, flatlock, and coverstitch machines. 10-day sampling turnaround.",
    tags: ["Woven", "Knit", "Fleece"],
    color: "brand",
  },
  {
    icon: Tag,
    title: "Private Label / OEM",
    href: "/capabilities/private-label-oem",
    description:
      "Full private label from design development to retail-ready delivery. In-house hangtag, label, and barcode printing.",
    tags: ["Full Package", "Branding"],
    color: "accent",
  },
  {
    icon: Needle as React.FC<React.SVGProps<SVGSVGElement>>,
    title: "Embroidery",
    href: "/capabilities/embroidery",
    description:
      "24 multi-head Barudan machines, up to 15 thread colours. Flat, puff, and 3D embroidery. Digitization included.",
    tags: ["Logo", "Patch", "Appliqué"],
    color: "brand",
  },
  {
    icon: Printer,
    title: "Printing",
    href: "/capabilities/printing",
    description:
      "Screen printing (8 colours), all-over sublimation, DTG for small runs. REACH-compliant water-based inks.",
    tags: ["Screen", "Sublimation", "DTG"],
    color: "accent",
  },
  {
    icon: Package,
    title: "Finishing",
    href: "/capabilities/finishing",
    description:
      "Garment washing, hangtag attachment, retail-ready packing per buyer EDI spec. 99.4% first-pass QC rate.",
    tags: ["Washing", "Packing", "QC"],
    color: "brand",
  },
];

const iconColors: Record<string, string> = {
  brand: "bg-brand-50 text-brand-700 group-hover:bg-brand-100",
  accent: "bg-accent-50 text-accent-600 group-hover:bg-accent-100",
};

export function CapabilitiesGrid() {
  return (
    <div>
      <SectionHeader
        badge="What We Do"
        title="Five Core Capabilities"
        subtitle="Everything your kids' collection needs — under one roof, with full compliance documentation."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITIES.map((cap, i) => {
          const Icon = cap.icon as React.FC<{ className?: string }>;
          return (
            <Link
              key={cap.href}
              href={cap.href}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 shadow-[0_1px_3px_0_rgb(0_0_0/0.06)] hover:shadow-[0_8px_32px_-8px_rgb(0_0_0/0.12)] transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${iconColors[cap.color]}`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                {cap.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {cap.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {cap.tags.map((tag) => (
                  <Badge key={tag} variant="muted" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Learn more */}
              <div className="flex items-center gap-1.5 mt-5 text-sm font-medium text-brand-700 group-hover:gap-2.5 transition-all">
                Learn more
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          );
        })}

        {/* CTA card */}
        <div className="p-6 rounded-2xl bg-brand-700 text-white flex flex-col justify-between">
          <div>
            <div className="text-sm font-semibold text-brand-200 uppercase tracking-wide mb-3">
              Not sure where to start?
            </div>
            <h3 className="text-xl font-bold mb-3">
              Tell us your collection — we&apos;ll map the service.
            </h3>
            <p className="text-sm text-brand-200 leading-relaxed">
              Share your tech pack, reference samples, or brief. Our team responds in 24h.
            </p>
          </div>
          <Link
            href="/contact/rfq"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-xl transition-colors self-start"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Needle is not in lucide — use a custom SVG
function Needle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M12 2l1.5 6L20 12l-6 1.5L12 20l-1.5-6L4 12l6-1.5L12 2z" />
    </svg>
  );
}
