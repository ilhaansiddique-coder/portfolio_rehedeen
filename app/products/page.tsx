import type { Metadata } from "next";
import { ProductCategories } from "@/components/sections/product-categories";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTABanner } from "@/components/sections/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Kids Apparel Product Range",
  description:
    "Four age categories — boys, girls, infants (0–12m), and toddlers (1–3y) — with 150+ base styles, CPSIA and OEKO-TEX compliant.",
};

export default function ProductsPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Products" }]} className="mb-6 text-brand-300" />
          <Badge variant="accent" className="mb-4">Product Range</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            150+ Styles, Four Age Categories
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl leading-relaxed">
            From newborn onesies to 14-year outerwear — engineered for the specific
            compliance, construction, and retail requirements of each age group.
          </p>
        </div>
      </div>

      <ProductCategories />

      <Section>
        <SectionHeader
          badge="Compliance by Design"
          title="Every Category Built to Market Requirements"
          subtitle="Age-appropriate compliance isn't an afterthought — it's built into our standard spec for each category."
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { category: "Infants", spec: "Class I OEKO-TEX, CPSIA, no drawstrings, snap closure safety testing" },
            { category: "Toddlers", spec: "Child-safe cord specs, detachment force testing, 60°C wash durability" },
            { category: "Boys & Girls 2–7y", spec: "No hood drawstrings, decorative trim detachment tests, phthalate-free inks" },
            { category: "Boys & Girls 8–14y", spec: "Functional pockets tested, standard OEKO-TEX Class II" },
          ].map((item) => (
            <div key={item.category} className="p-5 rounded-2xl bg-brand-50 border border-brand-100">
              <div className="font-bold text-brand-700 mb-2">{item.category}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.spec}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Looking for a Specific Style or Fabric?"
        subtitle="Share your brief and we'll confirm which base styles match, along with MOQ, lead time, and pricing."
      />
    </>
  );
}
