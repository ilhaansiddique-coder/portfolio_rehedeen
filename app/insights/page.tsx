import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTABanner } from "@/components/sections/cta-banner";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights — Sourcing, Compliance & Design",
  description:
    "Practical guides for brand owners and sourcing managers: MOQ, tech packs, CPSIA compliance, and how to work with a Bangladesh manufacturer.",
};

const INSIGHTS = [
  {
    slug: "moq-explained",
    title: "MOQ Explained: What First-Time Buyers Need to Know",
    description: "Understanding minimum order quantities helps you plan smarter and avoid surprises in your first production run.",
    topic: "Sourcing",
    readingTime: 6,
    publishedAt: "2025-07-10",
    tags: ["MOQ", "Sourcing", "First-time buyer"],
  },
  {
    slug: "tech-pack-guide",
    title: "Tech Pack 101: What Your Factory Actually Needs",
    description: "A bad tech pack is the #1 cause of sampling delays. Here's what to include, and what factories actually use.",
    topic: "Design",
    readingTime: 8,
    publishedAt: "2025-08-22",
    tags: ["Tech Pack", "Sampling", "Design"],
  },
  {
    slug: "cpsia-compliance-101",
    title: "CPSIA Compliance 101 for Children's Apparel Buyers",
    description: "Selling kids clothes in the US? Here's the compliance checklist every importer needs before the first shipment.",
    topic: "Compliance",
    readingTime: 7,
    publishedAt: "2025-10-05",
    tags: ["CPSIA", "USA", "Compliance"],
  },
];

const topicColors: Record<string, string> = {
  Sourcing: "bg-blue-50 text-blue-700 border-blue-200",
  Design: "bg-purple-50 text-purple-700 border-purple-200",
  Compliance: "bg-green-50 text-green-700 border-green-200",
};

export default function InsightsPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Insights" }]} className="mb-6 text-brand-300" />
          <Badge variant="accent" className="mb-4">Knowledge Hub</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            Practical Guides for Apparel Buyers
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl leading-relaxed">
            MOQ, tech packs, compliance documentation, and how to work with a Bangladesh
            manufacturer — written for brand owners and sourcing managers.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHTS.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="group flex flex-col rounded-3xl bg-white border border-gray-100 hover:border-brand-200 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden"
            >
              {/* Topic strip */}
              <div className={`px-5 py-2.5 border-b ${topicColors[insight.topic] || "bg-gray-50 text-gray-600 border-gray-100"}`}>
                <span className="text-xs font-semibold uppercase tracking-wide">{insight.topic}</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors leading-snug">
                  {insight.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                  {insight.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {insight.tags.map((t) => (
                    <Badge key={t} variant="muted" className="text-xs">{t}</Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {insight.readingTime} min read
                  </div>
                  <div>{formatDate(insight.publishedAt)}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Question Not Covered?"
        subtitle="Our merchandising team answers sourcing and compliance questions for free. No commitment required."
        primaryLabel="Ask a Question"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
