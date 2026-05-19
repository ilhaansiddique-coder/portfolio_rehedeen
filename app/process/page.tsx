import type { Metadata } from "next";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTABanner } from "@/components/sections/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Production Process",
  description:
    "From brief to shelf in 12–14 weeks — a structured, transparent production process with weekly WIP reporting and buyer-auditable QC.",
};

export default function ProcessPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Process" }]} className="mb-6 text-brand-300" />
          <Badge variant="accent" className="mb-4">How We Work</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            Brief to Shelf in 12–14 Weeks
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl leading-relaxed">
            A structured, transparent production process designed to eliminate surprises
            for brand managers and sourcing teams.
          </p>
        </div>
      </div>

      <Section>
        <ProcessTimeline />
      </Section>

      <Section className="bg-gray-50">
        <SectionHeader
          badge="WIP Transparency"
          title="You See What We See — Every Week"
          subtitle="Weekly WIP reports cover style-by-style completion percentage, fabric intake status, and open queries. No surprises at shipment."
          align="center"
        />
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: "WIP Reports", value: "Weekly", desc: "Every Friday, per style breakdown" },
            { label: "Inline QC", value: "2x per order", desc: "At 20% and 50% completion" },
            { label: "Buyer Audits", value: "Open door", desc: "Any stage, no prior notice required" },
          ].map((item) => (
            <div key={item.label} className="text-center p-6 bg-white rounded-2xl border border-gray-100">
              <div className="text-3xl font-bold text-brand-700 mb-2">{item.value}</div>
              <div className="font-semibold text-gray-900 mb-1">{item.label}</div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
