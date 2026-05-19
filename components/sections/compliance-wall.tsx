import Link from "next/link";
import { ShieldCheck, Leaf, Award, FileCheck, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";

type AccentKey = "emerald" | "blue" | "green" | "violet" | "indigo";

const ACCENT: Record<AccentKey, { bg: string; border: string; text: string; iconBg: string; calloutBg: string }> = {
  emerald: {
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    calloutBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  blue: {
    bg: "bg-blue-500/8",
    border: "border-blue-500/20",
    text: "text-blue-400",
    iconBg: "bg-blue-500/15",
    calloutBg: "bg-blue-500/10 border-blue-500/20",
  },
  green: {
    bg: "bg-green-500/8",
    border: "border-green-500/20",
    text: "text-green-400",
    iconBg: "bg-green-500/15",
    calloutBg: "bg-green-500/10 border-green-500/20",
  },
  violet: {
    bg: "bg-violet-500/8",
    border: "border-violet-500/20",
    text: "text-violet-400",
    iconBg: "bg-violet-500/15",
    calloutBg: "bg-violet-500/10 border-violet-500/20",
  },
  indigo: {
    bg: "bg-brand-500/8",
    border: "border-brand-500/20",
    text: "text-brand-300",
    iconBg: "bg-brand-500/15",
    calloutBg: "bg-brand-500/10 border-brand-500/20",
  },
};

const BD_CERTS = [
  {
    name: "BSTI Conformity",
    issuer: "Bangladesh Standards & Testing Institution",
    icon: ShieldCheck,
    accent: "emerald" as AccentKey,
    benefit:
      "All garments for the Bangladesh market conform to BSTI quality and labelling standards — enabling direct distribution through BD retail chains, department stores, and e-commerce platforms without additional re-testing.",
    buyerLine:
      "List on Daraz, Shajgoj, Chaldal, and all major BD retail and chain store formats without compliance costs.",
  },
  {
    name: "BGMEA Member",
    issuer: "Bangladesh Garment Manufacturers & Exporters Association",
    icon: Award,
    accent: "emerald" as AccentKey,
    benefit:
      "Active BGMEA membership with a clean annual factory audit. EPZ-registered, with full customs documentation — HS code classification, GSP certificates, and certificate of origin managed for every shipment.",
    buyerLine:
      "Zero customs hold-ups. Complete documentation package with every order, domestic or export.",
  },
  {
    name: "RSC Building Safety",
    issuer: "Remediation & Sustainability Company (formerly ACCORD)",
    icon: ShieldCheck,
    accent: "green" as AccentKey,
    benefit:
      "Factory building certified under the RSC programme — the post-Rana Plaza structural and electrical safety audit covering 98% of Bangladesh's garment export facilities.",
    buyerLine:
      "Ethically sourceable from Bangladesh with full building safety compliance — satisfies Western retailer sourcing policies.",
  },
];

const INTL_CERTS = [
  {
    slug: "cpsia",
    name: "CPSIA",
    full: "Consumer Product Safety Improvement Act",
    issuer: "U.S. Consumer Product Safety Commission",
    icon: ShieldCheck,
    accent: "blue" as AccentKey,
    benefit:
      "All children's products destined for the US market are third-party tested at an accredited CPSC lab, documented with a General Conformity Certificate (GCC), and include per-style lab reports. Tracking label and flammability compliance included.",
    buyerLine:
      "Your US retail partner — Target, Walmart, Amazon, or boutique buyer — can skip third-party testing costs. We've already done it. Documentation ships with the goods.",
  },
  {
    slug: "oeko-tex",
    name: "OEKO-TEX® Standard 100",
    full: "Tested for Harmful Substances",
    issuer: "OEKO-TEX Association · Class I (Infants & Toddlers)",
    icon: Leaf,
    accent: "green" as AccentKey,
    benefit:
      "Every component — shell fabric, lining, thread, buttons, zippers, prints, and embellishments — is tested against 100+ harmful substances. Class I certified: the highest classification for products in direct contact with baby and toddler skin.",
    buyerLine:
      "Parents recognise the OEKO-TEX hang-tag. Your brand carries zero chemical liability — proven before the garment leaves our floor.",
  },
  {
    slug: "gots",
    name: "GOTS Certified",
    full: "Global Organic Textile Standard",
    issuer: "Global Organic Textile Standard e.V.",
    icon: Leaf,
    accent: "emerald" as AccentKey,
    benefit:
      "Chain-of-custody certified organic cotton processing from fibre to finished garment. 95%+ organic fibre content, ecological wet-processing criteria, ILO fair labour standards throughout the supply chain.",
    buyerLine:
      "Ready for Whole Foods, Nordstrom organic, or any retailer with a certified organic mandate — full chain-of-custody documents provided.",
  },
];

const DOCS = [
  "General Conformity Certificate (GCC)",
  "Third-Party Lab Test Reports",
  "OEKO-TEX® Certificate",
  "GOTS Chain-of-Custody",
  "GSP Certificate",
  "Packing List & Commercial Invoice",
  "Certificate of Origin",
];

export function ComplianceWall() {
  return (
    <div className="bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        <SectionHeader
          badge="Compliance"
          title="Every Standard. Every Market."
          subtitle="Compliance documentation is not an add-on — it ships with every order. Whether you sell in Dhaka or New York, your buyer gets a complete documentation package."
          align="center"
          inverted
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">

          {/* ── Bangladesh Market (2 cols) ─────────────────── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-xl">🇧🇩</span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Bangladesh Market
              </span>
            </div>

            <div className="space-y-4">
              {BD_CERTS.map((cert) => {
                const a = ACCENT[cert.accent];
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.name}
                    className={`p-5 rounded-2xl border ${a.border} ${a.bg}`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`w-9 h-9 rounded-xl ${a.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon className={`w-4.5 h-4.5 ${a.text}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-bold ${a.text} mb-0.5`}>{cert.name}</div>
                        <div className="text-xs text-brand-500 mb-3 leading-snug">{cert.issuer}</div>
                        <p className="text-xs text-brand-300 leading-relaxed mb-3">{cert.benefit}</p>
                        <div className={`rounded-lg border p-2.5 ${a.calloutBg}`}>
                          <p className={`text-xs font-medium ${a.text} leading-relaxed`}>
                            → {cert.buyerLine}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Export / International (3 cols) ───────────── */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-xl">🌐</span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                International Export Markets
              </span>
            </div>

            <div className="space-y-4">
              {INTL_CERTS.map((cert) => {
                const a = ACCENT[cert.accent];
                const Icon = cert.icon;
                return (
                  <Link
                    key={cert.slug}
                    href={`/compliance/${cert.slug}`}
                    className={`group block p-5 rounded-2xl border ${a.border} ${a.bg} hover:brightness-125 transition-all duration-200`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`w-9 h-9 rounded-xl ${a.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon className={`w-4.5 h-4.5 ${a.text}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-0.5">
                          <div className={`text-sm font-bold ${a.text}`}>{cert.name}</div>
                          <div className="text-xs text-brand-500 text-right leading-tight shrink-0 max-w-[160px]">
                            {cert.full}
                          </div>
                        </div>
                        <div className="text-xs text-brand-500 mb-3 leading-snug">{cert.issuer}</div>
                        <p className="text-xs text-brand-300 leading-relaxed mb-3">{cert.benefit}</p>
                        <div className={`rounded-lg border p-2.5 ${a.calloutBg} flex items-start justify-between gap-3`}>
                          <p className={`text-xs font-medium ${a.text} leading-relaxed flex-1`}>
                            → {cert.buyerLine}
                          </p>
                          <span className="text-xs text-brand-500 group-hover:text-brand-300 transition-colors shrink-0 self-end">
                            View docs →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Documentation strip ───────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <FileCheck className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-semibold text-white">Ships with every order:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {DOCS.map((doc) => (
                <span
                  key={doc}
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-white/6 text-brand-300 border border-white/10"
                >
                  <CheckCircle2 className="w-3 h-3 text-accent-400 shrink-0" />
                  {doc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
