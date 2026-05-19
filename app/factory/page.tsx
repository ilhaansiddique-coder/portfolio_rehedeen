import type { Metadata } from "next";
import { Users, Building2, Award, Globe } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTABanner } from "@/components/sections/cta-banner";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/ui/stat-card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import site from "@/content/data/site.json";

export const metadata: Metadata = {
  title: "Our Factory",
  description:
    "RaheDeen's Narayanganj facility — 500+ workers, 15 production lines, established 2009. Export-focused, buyer-auditable.",
};

export default function FactoryPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Factory" }]} className="mb-6 text-brand-300" />
          <Badge variant="accent" className="mb-4">Est. {site.founded}</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            Narayanganj Facility
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl leading-relaxed">
            A purpose-built children&apos;s garment factory, export-focused from day one.
            500+ skilled workers, 15 production lines, and a compliance infrastructure
            built for EU, UK, and USA regulatory requirements.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {[
            { value: site.employees, label: "Skilled Workers" },
            { value: "15", label: "Production Lines" },
            { value: site.annualCapacity, label: "Annual Capacity" },
            { value: String(new Date().getFullYear() - site.founded), label: "Years Operating" },
            { value: "99.4%", label: "QC Pass Rate" },
            { value: "14 days", label: "Sample Lead Time" },
          ].map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Facility</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                RaheDeen was established in {site.founded} in Narayanganj — Bangladesh&apos;s largest
                garment manufacturing district. The facility was designed from the ground up as a
                <strong className="text-gray-900"> children&apos;s-specific manufacturer</strong>, rather
                than retrofitting an adult garment factory.
              </p>
              <p>
                This specialisation matters. Infant and children&apos;s garments require different
                machine configurations (flatlock, coverstitch, snap attachment), different quality
                control checklists, and a compliance infrastructure that adult garment factories
                are not set up for.
              </p>
              <p>
                Our 15 production lines are configured by fabric type — single jersey, French terry,
                woven, fleece, and ripstop. Each line has a dedicated line supervisor and QC
                checkpoint at key stages.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Building2,
                title: "Facility Specifications",
                items: ["15 dedicated production lines", "In-house embroidery (24 Barudan machines)", "Garment washing plant", "In-house hangtag and label printing", "On-site QC and compliance lab"],
              },
              {
                icon: Globe,
                title: "Export Markets",
                items: site.exportMarkets,
              },
            ].map((block) => {
              const Icon = block.icon;
              return (
                <div key={block.title} className="p-5 rounded-2xl bg-brand-50 border border-brand-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-brand-700" />
                    <h3 className="font-bold text-gray-900">{block.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {block.items.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <CTABanner
        title="Want to Audit Our Factory?"
        subtitle="We welcome buyer factory audits at any time — no prior notice required. Contact us to arrange a visit or virtual tour."
        primaryLabel="Arrange a Visit"
        primaryHref="/contact"
      />
    </>
  );
}
