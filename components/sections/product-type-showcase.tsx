import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";

type ProductType = {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  ageRange: string;
  construction: string[];
  fabrics: string[];
  moq: string;
  certs: string[];
  gradient: string;
  accentText: string;
  accentBg: string;
  link: string;
};

const PRODUCT_TYPES: ProductType[] = [
  {
    id: "rompers",
    emoji: "👶",
    name: "Rompers & Babywear",
    subtitle: "Snap closures · Lap shoulder necklines · Rib cuffs",
    ageRange: "0 – 24 months",
    construction: [
      "Lap shoulder or envelope neckline",
      "Snap-leg closure (nickel-free)",
      "Flat-seam finishing for skin comfort",
      "Rib-knit cuffs and collar",
    ],
    fabrics: ["GOTS Organic Cotton", "Interlock 200gsm", "Rib 1×1"],
    moq: "300 pcs/style/colour",
    certs: ["OEKO-TEX Class I", "GOTS", "CPSIA"],
    gradient: "from-violet-400 to-purple-500",
    accentText: "text-violet-700",
    accentBg: "bg-violet-50 border-violet-200",
    link: "/products/infants",
  },
  {
    id: "tshirts",
    emoji: "👕",
    name: "T-Shirts & Jerseys",
    subtitle: "Screen print · Sublimation · Embroidery ready",
    ageRange: "0 – 14 years",
    construction: [
      "Single jersey or interlock knit",
      "Crew, round, or V-neck options",
      "Taped shoulder seams",
      "Tagless or printed neck label",
    ],
    fabrics: ["100% Cotton Jersey", "CVC 60/40", "Organic Pima"],
    moq: "300 pcs/style/colour",
    certs: ["OEKO-TEX", "CPSIA", "GOTS"],
    gradient: "from-brand-500 to-brand-700",
    accentText: "text-brand-700",
    accentBg: "bg-brand-50 border-brand-200",
    link: "/products/boys",
  },
  {
    id: "pants",
    emoji: "👖",
    name: "Pants, Joggers & Shorts",
    subtitle: "Elastic waist · Drawcord · French terry / fleece",
    ageRange: "6 months – 14 years",
    construction: [
      "Elasticated waistband, drawcord option",
      "Single or double-needle hem",
      "Ribbed or jersey cuff options",
      "Deep pockets (from age 3+)",
    ],
    fabrics: ["French Terry 280gsm", "Fleece 300gsm", "Twill Woven"],
    moq: "300 pcs/style/colour",
    certs: ["OEKO-TEX", "CPSIA", "GOTS"],
    gradient: "from-blue-500 to-indigo-600",
    accentText: "text-blue-700",
    accentBg: "bg-blue-50 border-blue-200",
    link: "/products/boys",
  },
  {
    id: "sets",
    emoji: "🧺",
    name: "Matching Sets & Co-ords",
    subtitle: "Coordinated fabric lots · Custom branded packaging",
    ageRange: "3 months – 14 years",
    construction: [
      "Same fabric lot for perfect colour match",
      "Top + bottom sold as one SKU",
      "Custom branded inner labels",
      "Retail-ready polybag or hanger pack",
    ],
    fabrics: ["Jersey Sets", "French Terry", "Woven Shirting"],
    moq: "300 sets/style/colour",
    certs: ["OEKO-TEX", "CPSIA", "GOTS"],
    gradient: "from-pink-400 to-rose-600",
    accentText: "text-rose-700",
    accentBg: "bg-rose-50 border-rose-200",
    link: "/products/girls",
  },
  {
    id: "frocks",
    emoji: "👗",
    name: "Frocks & Dresses",
    subtitle: "Smocking · Embroidery · A-line / wrap / tiered",
    ageRange: "1 – 14 years (Girls)",
    construction: [
      "Woven cotton, viscose, or jersey base",
      "Smocking, pin-tuck, or gathered bodice",
      "Concealed back zip or button placket",
      "Embroidery, print, or appliqué detail",
    ],
    fabrics: ["Cotton Voile", "Viscose Poplin", "Jersey Ponte"],
    moq: "300 pcs/style/colour",
    certs: ["OEKO-TEX", "CPSIA", "GOTS"],
    gradient: "from-violet-400 to-purple-600",
    accentText: "text-violet-700",
    accentBg: "bg-violet-50 border-violet-200",
    link: "/products/girls",
  },
  {
    id: "outerwear",
    emoji: "🧥",
    name: "Outerwear & Hoodies",
    subtitle: "Polar fleece · Tracksuits · Zip-front · Child-safe cord specs",
    ageRange: "6 months – 14 years",
    construction: [
      "Polar fleece, sherpa, or woven shell",
      "Child-safe hood cord spec (age 7+ guidelines)",
      "YKK or SBS zip-front options",
      "Reflective tape available",
    ],
    fabrics: ["Polar Fleece 300gsm", "Sherpa", "Ripstop Shell"],
    moq: "300 pcs/style/colour",
    certs: ["OEKO-TEX", "CPSIA", "GOTS"],
    gradient: "from-teal-500 to-emerald-600",
    accentText: "text-teal-700",
    accentBg: "bg-teal-50 border-teal-200",
    link: "/products/boys",
  },
];

const certChipColors: Record<string, string> = {
  "OEKO-TEX Class I": "bg-emerald-100 text-emerald-700",
  "OEKO-TEX": "bg-emerald-100 text-emerald-700",
  GOTS: "bg-green-100 text-green-700",
  CPSIA: "bg-blue-100 text-blue-700",
};

export function ProductTypeShowcase() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        <SectionHeader
          badge="What We Make"
          title="Six Product Categories. One Factory."
          subtitle="From newborn rompers to teenage outerwear — everything manufactured in-house in Narayanganj with the same quality controls, same lead times, same documentation package."
          align="center"
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {PRODUCT_TYPES.map((pt) => (
            <Link
              key={pt.id}
              href={pt.link}
              className="group bg-white rounded-3xl border border-gray-100 hover:border-brand-200 shadow-[0_1px_4px_0_rgb(0_0_0/0.06)] hover:shadow-[0_8px_32px_-8px_rgb(0_0_0/0.12)] transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Gradient header */}
              <div className={`relative h-28 bg-gradient-to-br ${pt.gradient} flex items-center px-5 gap-3`}>
                <span className="text-4xl drop-shadow-md">{pt.emoji}</span>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{pt.name}</h3>
                  <p className="text-xs text-white/75 mt-0.5">{pt.ageRange}</p>
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/20 backdrop-blur-sm">
                  <span className="text-xs text-white/90 font-medium">MOQ {pt.moq.split(" ")[0]}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                {/* Subtitle */}
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{pt.subtitle}</p>

                {/* Construction details */}
                <div className="space-y-1.5 mb-4">
                  {pt.construction.map((detail) => (
                    <div key={detail} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                      <span className="text-xs text-gray-600 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Fabric options */}
                <div className={`rounded-xl border p-3 mb-4 ${pt.accentBg}`}>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Fabrics</div>
                  <div className="flex flex-wrap gap-1.5">
                    {pt.fabrics.map((f) => (
                      <span key={f} className={`text-xs font-medium ${pt.accentText}`}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certs */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pt.certs.map((c) => (
                    <span
                      key={c}
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${certChipColors[c] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-brand-700 group-hover:gap-2.5 transition-all">
                  View range
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-400 mt-10">
          All product types available with custom private label packaging, hangtags, and barcode scanning.{" "}
          <Link href="/contact/rfq" className="text-brand-700 font-medium hover:underline">
            Request a quote →
          </Link>
        </p>
      </div>
    </div>
  );
}
