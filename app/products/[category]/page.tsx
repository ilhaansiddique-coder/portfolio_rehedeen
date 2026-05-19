import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTABanner } from "@/components/sections/cta-banner";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const PRODUCTS: Record<string, {
  title: string;
  emoji: string;
  ageRange: string;
  description: string;
  tags: string[];
  styles: string[];
  complianceNotes: string[];
}> = {
  boys: {
    title: "Boys Collection",
    emoji: "👦",
    ageRange: "0–14 years",
    description: "T-shirts to outerwear jackets — a complete boys' range engineered for durability, compliance, and retail-ready finishing.",
    tags: ["T-Shirts", "Hoodies", "Joggers", "Outerwear", "Sets", "Denim"],
    styles: [
      "Short & long-sleeve T-shirts",
      "Polo shirts",
      "Pullover & zip-through hoodies",
      "Jogger pants",
      "Cargo pants",
      "Denim shorts and pants",
      "Puffer jackets (packable)",
      "Softshell and rain jackets",
      "2-piece and 3-piece jersey sets",
    ],
    complianceNotes: [
      "No drawstrings at hood or neck on 0–7y (child safety spec)",
      "CPSIA documentation available for USA market",
      "OEKO-TEX Standard 100 fabrics available",
      "Functional pocket depth tested for choking hazard compliance",
    ],
  },
  girls: {
    title: "Girls Collection",
    emoji: "👧",
    ageRange: "0–14 years",
    description: "Dresses to activewear sets — design-forward detailing with full compliance documentation for EU, UK, and USA markets.",
    tags: ["Dresses", "Leggings", "Blouses", "Sets", "Activewear", "Skirts"],
    styles: [
      "Woven and jersey dresses",
      "Smocked bodice dresses",
      "Ruffle and puff-sleeve tops",
      "Leggings (full, 7/8, capri)",
      "Flared and wide-leg pants",
      "Activewear sets (sports bra + legging)",
      "Tutu and midi skirts",
      "Matching co-ord sets",
    ],
    complianceNotes: [
      "No drawstring closures on sizes 0–7y (child safety spec)",
      "Shirring and smocking construction tested for stretch durability",
      "All lace and trim tested for formaldehyde <75ppm",
      "CPSIA and EU compliance documentation available",
    ],
  },
  infants: {
    title: "Infants Collection",
    emoji: "👶",
    ageRange: "0–12 months",
    description: "Sleepsuits, onesies, and full layette sets — CPSIA-compliant, GOTS organic cotton available, formaldehyde-free dyes.",
    tags: ["Sleepsuits", "Onesies", "Bodysuits", "Bibs", "Sets", "GOTS"],
    styles: [
      "Short & long-sleeve bodysuits (snap crotch)",
      "2-way zip sleepsuits / footie pajamas",
      "Sleep sacks (wearable blankets)",
      "Knit pants (elasticated waist)",
      "Short-sleeve tops",
      "Front-snap cardigans",
      "Reversible bibs",
      "3-piece layette gift sets",
    ],
    complianceNotes: [
      "All snaps tested per ISO 8317",
      "No drawstrings — category prohibition for 0–24m",
      "No decorative buttons under 31.75mm (ASTM F963)",
      "CPSIA GCC + 3rd-party lab reports per style for USA",
      "GOTS organic cotton available with transaction certificates",
    ],
  },
  toddlers: {
    title: "Toddlers Collection",
    emoji: "🧒",
    ageRange: "1–3 years",
    description: "Comfort-first playwear built for active, growing toddlers — durable at 60°C wash, easy-dress design, no choking hazards.",
    tags: ["Sets", "Joggers", "Overalls", "Sweatshirts", "Dresses"],
    styles: [
      "2-piece jersey sets (top + jogger)",
      "3-piece sets (top + legging + cardigan)",
      "Bib overalls (snap inseam)",
      "Pullover sweatshirts",
      "Pullover hoodies",
      "Polo shirts",
      "Jersey wrap dresses",
      "Pinafore dresses",
    ],
    complianceNotes: [
      "Low-pill fleece tested ISO 12945-2 (10,000 rubs Martindale)",
      "All waistbands use covered elastic (no exposed elastic)",
      "Machine washable 60°C, 40 cycles tested (IEC 456)",
      "Shrinkage spec ±3% on length and width",
      "Child-safe cord spec compliant",
    ],
  },
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const product = PRODUCTS[category];
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.title} | ${product.ageRange}`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(PRODUCTS).map((category) => ({ category }));
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const product = PRODUCTS[category];
  if (!product) notFound();

  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Products", href: "/products" }, { label: product.title }]}
            className="mb-6 text-brand-300"
          />
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{product.emoji}</span>
            <Badge variant="accent">{product.ageRange}</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-brand-200 max-w-2xl leading-relaxed">{product.description}</p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Styles */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Styles</h2>
            <ul className="space-y-3">
              {product.styles.map((style) => (
                <li key={style} className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-700 shrink-0" />
                  {style}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {product.tags.map((t) => (
                <Badge key={t} variant="default">{t}</Badge>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance & Construction</h2>
            <ul className="space-y-3">
              {product.complianceNotes.map((note) => (
                <li key={note} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  {note}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-brand-50 border border-brand-100">
              <div className="font-semibold text-brand-700 mb-2">Request Compliance Documentation</div>
              <p className="text-sm text-gray-600 mb-4">
                Test reports, certificates, and GCCs available per style on request.
                Turnaround: 48 hours.
              </p>
              <Button variant="default" size="sm" asChild>
                <Link href="/contact/rfq">
                  Contact our compliance team <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner
        title={`Ready to Source ${product.title}?`}
        subtitle="Share your brief — styles, quantities, target markets, and any compliance requirements. We respond within 24 hours."
      />
    </>
  );
}
