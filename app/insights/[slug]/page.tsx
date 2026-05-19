import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Tag, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTABanner } from "@/components/sections/cta-banner";
import { Section } from "@/components/ui/section";
import { formatDate } from "@/lib/utils";

const INSIGHTS: Record<string, {
  title: string;
  description: string;
  topic: string;
  readingTime: number;
  publishedAt: string;
  tags: string[];
  body: string;
}> = {
  "moq-explained": {
    title: "MOQ Explained: What First-Time Buyers Need to Know",
    description: "Understanding minimum order quantities helps you plan smarter and avoid surprises in your first production run.",
    topic: "Sourcing",
    readingTime: 6,
    publishedAt: "2025-07-10",
    tags: ["MOQ", "Sourcing", "First-time buyer", "Production"],
    body: "This guide explains what MOQ is, why factories set it, typical MOQs at RaheDeen, and how to consolidate your order to reduce effective MOQ. Key takeaway: MOQs exist because mass production has minimum viable economics. Plan your range around them from the start.",
  },
  "tech-pack-guide": {
    title: "Tech Pack 101: What Your Factory Actually Needs",
    description: "A bad tech pack is the #1 cause of sampling delays. Here's what to include, and what to skip.",
    topic: "Design",
    readingTime: 8,
    publishedAt: "2025-08-22",
    tags: ["Tech Pack", "Sampling", "Design", "Production"],
    body: "A tech pack is a precise, numeric specification document — not a design brief. The 8 essential components are: construction drawing, bill of materials, measurement chart, stitch density & seam allowance spec, colourway callouts, label placement diagrams, print/embroidery artwork files, and construction callouts. Skip inspiration imagery, retail prices, and vague 'as standard' references.",
  },
  "cpsia-compliance-101": {
    title: "CPSIA Compliance 101 for Children's Apparel Buyers",
    description: "Selling kids clothes in the US? Here's the compliance checklist every importer needs before the first shipment.",
    topic: "Compliance",
    readingTime: 7,
    publishedAt: "2025-10-05",
    tags: ["CPSIA", "USA", "Compliance", "Safety"],
    body: "CPSIA places legal responsibility on the importer of record. Key requirements: 3rd-party testing (lead, phthalates, flammability), General Conformity Certificate per style, tracking labels on every garment, and care label compliance per 16 CFR 423. Book testing 2–3 weeks before shipment, not at the last minute. RaheDeen includes CPSIA documentation as standard for all USA-destined orders.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS[slug];
  if (!insight) return { title: "Not Found" };
  return { title: insight.title, description: insight.description };
}

export async function generateStaticParams() {
  return Object.keys(INSIGHTS).map((slug) => ({ slug }));
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = INSIGHTS[slug];
  if (!insight) notFound();

  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Insights", href: "/insights" }, { label: insight.title }]}
            className="mb-6 text-brand-300"
          />
          <Badge variant="accent" className="mb-4">{insight.topic}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl leading-tight">
            {insight.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-brand-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {insight.readingTime} min read
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {formatDate(insight.publishedAt)}
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">{insight.description}</p>
          <div className="h-px bg-gray-200 mb-8" />
          <p className="text-gray-600 leading-relaxed text-lg">{insight.body}</p>
          <div className="flex flex-wrap gap-2 mt-8">
            {insight.tags.map((t) => (
              <Badge key={t} variant="default">{t}</Badge>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner
        title="Got a Sourcing Question?"
        subtitle="Our merchandising team answers questions about MOQ, tech packs, compliance, and lead times. No commitment required."
        primaryLabel="Ask Us Directly"
        primaryHref="/contact"
      />
    </>
  );
}
