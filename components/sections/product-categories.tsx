import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = [
  {
    slug: "boys",
    title: "Boys",
    age: "0 – 14 years",
    description:
      "T-shirts, polo shirts, hoodies, joggers, cargo pants, denim shorts, track sets, outerwear jackets.",
    styles: "40+ styles",
    fabric: "Cotton, fleece, ripstop",
    gradient: "from-blue-500 to-brand-700",
    emoji: "👦",
  },
  {
    slug: "girls",
    title: "Girls",
    age: "0 – 14 years",
    description:
      "Dresses (woven + jersey), leggings, blouses, ruffle tops, activewear sets, tutu skirts, jersey sets.",
    styles: "50+ styles",
    fabric: "Cotton voile, viscose, jersey",
    gradient: "from-pink-400 to-rose-600",
    emoji: "👧",
  },
  {
    slug: "infants",
    title: "Infants",
    age: "0 – 12 months",
    description:
      "Sleepsuits, onesies, bodysuits, bibs, hats, booties sets. CPSIA-compliant, GOTS organic cotton available.",
    styles: "25+ styles",
    fabric: "GOTS organic cotton",
    gradient: "from-accent-400 to-accent-600",
    emoji: "👶",
  },
  {
    slug: "toddlers",
    title: "Toddlers",
    age: "1 – 3 years",
    description:
      "Comfort-first playwear — jogger sets, bib overalls, jersey dresses, sweatshirts, leggings.",
    styles: "30+ styles",
    fabric: "Low-pill fleece, jersey",
    gradient: "from-emerald-500 to-teal-700",
    emoji: "🧒",
  },
];

export function ProductCategories() {
  return (
    <div className="bg-surface-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          badge="Product Range"
          title="Four Age Categories"
          subtitle="From newborn to 14 years — every style engineered for the specific compliance, construction, and retail requirements of each age group."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-brand-200 shadow-[0_1px_3px_0_rgb(0_0_0/0.06)] hover:shadow-[0_8px_32px_-8px_rgb(0_0_0/0.12)] transition-all duration-300 flex flex-col"
            >
              {/* Gradient top */}
              <div
                className={`relative h-36 bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}
              >
                <span className="text-6xl drop-shadow-lg">{cat.emoji}</span>
                <div className="absolute top-3 right-3">
                  <Badge variant="default" className="bg-white/20 border-white/30 text-white text-xs">
                    {cat.age}
                  </Badge>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                  {cat.description}
                </p>

                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Styles</span>
                    <span className="font-medium text-gray-700">{cat.styles}</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Fabric</span>
                    <span className="font-medium text-gray-700">{cat.fabric}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-sm font-medium text-brand-700 group-hover:gap-2.5 transition-all">
                  Explore range
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
