import { TrendingUp, Package, Building2, Globe, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";

const BD_SEGMENTS = [
  {
    icon: Building2,
    label: "Retail Chains & Boutiques",
    desc: "Dhaka, Chittagong, and Sylhet retail chains — private label production for branded kids fashion stores.",
  },
  {
    icon: Globe,
    label: "E-Commerce Brands",
    desc: "Powering BD e-commerce brands like Akhiyan with seasonal collections at scale. Daraz, Shajgoj, and direct-to-consumer.",
  },
  {
    icon: Package,
    label: "Wholesale Distributors",
    desc: "Bulk wholesale supply to Narayanganj, Gazipur, and Mirpur garment trading hubs. Same-week dispatch.",
  },
  {
    icon: TrendingUp,
    label: "Growing Brands",
    desc: "MOQ from 300 pieces — accessible to growing BD kids brands building their first seasonal range.",
  },
];

const EXPORT_MARKETS = [
  {
    flag: "🇺🇸",
    region: "United States",
    countries: "East Coast · West Coast · Midwest · DTC Brands",
    certs: ["CPSIA", "OEKO-TEX"],
    color: "blue",
  },
  {
    flag: "🇨🇦",
    region: "Canada",
    countries: "Ontario · British Columbia · Quebec",
    certs: ["CPSIA", "OEKO-TEX"],
    color: "red",
  },
  {
    flag: "🇦🇺",
    region: "Australia & New Zealand",
    countries: "Sydney · Melbourne · Auckland",
    certs: ["OEKO-TEX", "GOTS"],
    color: "violet",
  },
  {
    flag: "🌏",
    region: "Southeast Asia",
    countries: "Singapore · Malaysia · Thailand · Vietnam",
    certs: ["OEKO-TEX", "Local Standards"],
    color: "emerald",
  },
  {
    flag: "🌍",
    region: "Middle East & Africa",
    countries: "UAE · Saudi Arabia · South Africa",
    certs: ["OEKO-TEX", "GOTS"],
    color: "purple",
  },
];

const certColors: Record<string, string> = {
  CPSIA: "bg-blue-100 text-blue-700",
  "OEKO-TEX": "bg-emerald-100 text-emerald-700",
  GOTS: "bg-green-100 text-green-700",
  "Local Standards": "bg-gray-100 text-gray-600",
};

export function MarketReach() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        <SectionHeader
          badge="Our Markets"
          title="Bangladesh First. Built for the World."
          subtitle="Rooted in the BD kids fashion market since 2009 — now exporting to brands across USA, Southeast Asia, Australia, and the Middle East."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── Bangladesh ─────────────────────────────────── */}
          <div className="rounded-3xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 overflow-hidden">
            <div className="px-6 pt-7 pb-5 border-b border-emerald-200/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇧🇩</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-0.5">
                    Primary Market
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Bangladesh</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Where RaheDeen began. Our domestic supply chain serves BD&apos;s
                fastest-growing kids fashion segment — from Dhaka boutiques to
                national e-commerce platforms.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  { val: "15+", label: "Years in BD Market" },
                  { val: "300", label: "Min. Pieces MOQ" },
                  { val: "48h", label: "Dhaka Delivery" },
                ].map((s) => (
                  <div key={s.label} className="px-3 py-2 rounded-xl bg-white/70 border border-emerald-200">
                    <div className="text-lg font-bold text-emerald-700">{s.val}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 space-y-4">
              {BD_SEGMENTS.map((seg) => {
                const Icon = seg.icon;
                return (
                  <div key={seg.label} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-0.5">{seg.label}</div>
                      <p className="text-xs text-gray-500 leading-relaxed">{seg.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── International Export ───────────────────────── */}
          <div className="rounded-3xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-blue-50 overflow-hidden">
            <div className="px-6 pt-7 pb-5 border-b border-brand-200/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌐</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-0.5">
                    Export Markets
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">15+ Countries</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Exporting to USA, Southeast Asia, Australia, and Middle East — each
                market served with the correct compliance documentation. FOB
                Chittagong or door-to-door delivery.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  { val: "6M+", label: "Pieces Exported/Year" },
                  { val: "12–14w", label: "Production Lead Time" },
                  { val: "FOB", label: "Chittagong Port" },
                ].map((s) => (
                  <div key={s.label} className="px-3 py-2 rounded-xl bg-white/70 border border-brand-200">
                    <div className="text-lg font-bold text-brand-700">{s.val}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 space-y-3">
              {EXPORT_MARKETS.map((market) => (
                <div
                  key={market.region}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/60 border border-white hover:bg-white/90 transition-colors"
                >
                  <span className="text-2xl shrink-0">{market.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900 mb-0.5">{market.region}</div>
                    <div className="text-xs text-gray-400 mb-1.5">{market.countries}</div>
                    <div className="flex flex-wrap gap-1">
                      {market.certs.map((c) => (
                        <span
                          key={c}
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${certColors[c] ?? "bg-gray-100 text-gray-600"}`}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
