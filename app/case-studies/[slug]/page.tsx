import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Calendar, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTABanner } from "@/components/sections/cta-banner";
import { Section } from "@/components/ui/section";
import { formatDate } from "@/lib/utils";

const CASE_STUDIES: Record<string, {
  title: string;
  client: string;
  market: string;
  season?: string;
  description: string;
  tags: string[];
  results: string[];
  publishedAt: string;
  body: string;
}> = {
  "bd-retailer-aw26": {
    title: "US Brand AW26 Private Label Collection",
    client: "Bloom & Thread USA",
    market: "Scandinavia",
    season: "AW26",
    description: "3,200-piece private label collection delivered 6 days ahead of schedule — zero compliance rejections.",
    tags: ["Private Label", "Scandinavia", "OEM", "AW26"],
    results: [
      "Delivered 6 days ahead of scheduled ex-factory date",
      "Zero compliance rejections on OEKO-TEX documentation",
      "99.8% AQL 1.5 pass rate on pre-shipment inspection",
      "€0 rework cost — first-time right on all 22 styles",
    ],
    publishedAt: "2025-09-15",
    body: "Bloom & Thread USA needed 3,200 pieces across 22 styles for their AW26 own-brand collection. RaheDeen allocated a dedicated production line for the full 14-week programme, delivered complete OEKO-TEX compliance documentation 5 days before buyer request, and shipped 6 days ahead of the ex-factory date. Pre-shipment inspection by Bureau Veritas achieved 99.8% AQL 1.5 pass rate.",
  },
  "southeast-asian-organic-baseline-collection": {
    title: "Organic Baseline Collection — SE Asia Launch",
    client: "Naturlig Born",
    market: "USA + SE Asia",
    season: "SS25",
    description: "GOTS-certified organic cotton collection launched across two markets simultaneously.",
    tags: ["Organic", "GOTS", "Infants", "USA", "SE Asia"],
    results: [
      "Full GOTS chain-of-custody certification across all 8 styles",
      "Dual-market labelling (EU + Thai) in single production run",
      "0 ppm formaldehyde on finished garment testing",
      "12-week lead time from design brief to warehouse",
    ],
    publishedAt: "2025-03-20",
    body: "Naturlig Born needed to launch a GOTS-certified organic baby collection in both US and Thai markets simultaneously, with different labelling requirements. RaheDeen solved the dual-labelling challenge with a single multi-language label, coordinated full GOTS chain-of-custody documentation, used formaldehyde-free reactive dyes (confirmed 0 ppm on SGS test), and delivered in 12 weeks without air freight.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) return { title: "Not Found" };
  return { title: cs.title, description: cs.description };
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) notFound();

  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.title }]}
            className="mb-6 text-brand-300"
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="accent">{cs.market}</Badge>
            {cs.season && <Badge variant="default">{cs.season}</Badge>}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-3xl leading-tight">{cs.title}</h1>
          <p className="text-lg text-brand-200 max-w-2xl">{cs.description}</p>
          <div className="flex items-center gap-4 mt-5 text-sm text-brand-300">
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4" /> {cs.client}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {formatDate(cs.publishedAt)}
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Programme Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{cs.body}</p>

            <div className="flex flex-wrap gap-2 mt-8">
              {cs.tags.map((t) => (
                <Badge key={t} variant="default">{t}</Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="p-6 rounded-3xl bg-brand-50 border border-brand-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Documented Results</h3>
              <ul className="space-y-3">
                {cs.results.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Want Similar Results for Your Brand?"
        subtitle="Tell us your production brief and we'll confirm what we can deliver — lead times, MOQ, compliance documentation included."
      />
    </>
  );
}
