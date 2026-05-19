import type { Metadata } from "next";
import { Leaf, Droplets, Users, ShieldCheck } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTABanner } from "@/components/sections/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "RaheDeen's approach to sustainable manufacturing — organic cotton, GOTS certification, wastewater management, and worker welfare.",
};

export default function SustainabilityPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Sustainability" }]} className="mb-6 text-brand-300" />
          <Badge variant="accent" className="mb-4">Our Approach</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            Responsible Manufacturing for Children&apos;s Apparel
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl leading-relaxed">
            Sustainability in garment manufacturing isn&apos;t a marketing position — it&apos;s a
            compliance requirement for our buyers&apos; markets. Here&apos;s how we meet it.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              icon: Leaf,
              title: "Organic Materials",
              color: "text-green-600",
              bg: "bg-green-50",
              points: [
                "GOTS-certified organic cotton from certified Bangladesh mills",
                "Chain-of-custody documentation per production lot",
                "Minimum 95% organic fibre for 'Organic' label claim",
                "Available across our full product range on request",
              ],
            },
            {
              icon: Droplets,
              title: "Chemical Management",
              color: "text-blue-600",
              bg: "bg-blue-50",
              points: [
                "Water-based, phthalate-free printing inks (child-safe)",
                "Formaldehyde-free reactive dyes across all colourways",
                "Azo dye-free (no carcinogenic amines)",
                "OEKO-TEX Standard 100 certified fabrics for all product classes",
              ],
            },
            {
              icon: Droplets,
              title: "Wastewater & Water Use",
              color: "text-teal-600",
              bg: "bg-teal-50",
              points: [
                "Mill partners operate GOTS-audited wastewater treatment plants",
                "Washing plant effluent treated before discharge",
                "Water use monitored and reported annually",
                "Closed-loop water systems at washing stage",
              ],
            },
            {
              icon: Users,
              title: "Worker Welfare",
              color: "text-brand-700",
              bg: "bg-brand-50",
              points: [
                "ILO conventions compliance (GOTS social criteria)",
                "No forced labour, no child labour",
                "Freedom of association respected",
                "Living wage benchmarked and reviewed annually",
                "Annual worker welfare audit by Control Union",
              ],
            },
          ].map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.title} className="p-6 rounded-3xl bg-white border border-gray-100 shadow-card">
                <div className={`w-10 h-10 rounded-xl ${block.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${block.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{block.title}</h3>
                <ul className="space-y-2.5">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <ShieldCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      <CTABanner
        title="Need Sustainability Documentation?"
        subtitle="GOTS certificates, OEKO-TEX certificates, and worker welfare audit reports available to brands on request."
        primaryLabel="Request Documentation"
        primaryHref="/contact"
        secondaryLabel="View Certifications"
        secondaryHref="/compliance"
      />
    </>
  );
}
