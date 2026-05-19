import Link from "next/link";
import { Factory, Shield, Clock, Users, FileSearch, Truck, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";

const PILLARS = [
  {
    icon: Factory,
    title: "15+ Years in Kids Manufacturing",
    body: "Founded 2009 in Narayanganj — Bangladesh's garment manufacturing heartland. Fifteen seasons of kids wear production, from newborn babywear to teen outerwear. No generalist production lines. Dedicated kids garment expertise.",
    stat: "Est. 2009",
    color: "brand",
  },
  {
    icon: Shield,
    title: "Built-In Compliance, Not Bolted On",
    body: "We don't send garments to labs after production. Compliance is engineered in from fabric sourcing — tested greige, OEKO-TEX certified dyes, nickel-free trims, child-safe cord specs. Your documentation is ready when production closes.",
    stat: "5 certifications",
    color: "emerald",
  },
  {
    icon: Users,
    title: "500+ Dedicated Production Workers",
    body: "Permanent, trained workforce — not day-wage casual labour. Operators are style-specialised: infant lines, jersey lines, woven lines. The same team handles your sampling and your bulk run.",
    stat: "500+ workers",
    color: "blue",
  },
  {
    icon: FileSearch,
    title: "Open Factory Policy",
    body: "Any buyer, any stage. Audit us before you order. Visit during sampling, inline, or final inspection. Weekly WIP photo reports sent to your merchandising team. Nothing to hide because there's nothing hidden.",
    stat: "Buyer auditable",
    color: "accent",
  },
  {
    icon: Clock,
    title: "Consistent 12–14 Week Lead Times",
    body: "We issue a production calendar at order confirmation and hit it. Inline QC at 20% and 50% completion, AQL 1.5 final inspection. If anything slips, you hear from us — not from a delayed shipment.",
    stat: "99.4% on-time",
    color: "brand",
  },
  {
    icon: Truck,
    title: "FOB Chittagong or Door-to-Door",
    body: "Shipping coordination managed by our logistics team. FOB Chittagong for buyers with freight forwarders. Door-to-door available for smaller brands. Full compliance documentation package travels with every shipment.",
    stat: "FOB + DDP",
    color: "emerald",
  },
];

const iconColors: Record<string, string> = {
  brand: "bg-brand-50 text-brand-700",
  emerald: "bg-emerald-50 text-emerald-700",
  blue: "bg-blue-50 text-blue-700",
  accent: "bg-accent-50 text-accent-600",
};

const statColors: Record<string, string> = {
  brand: "text-brand-700",
  emerald: "text-emerald-600",
  blue: "text-blue-600",
  accent: "text-accent-600",
};

const FACTORY_STATS = [
  { value: "15", label: "Production Lines" },
  { value: "24", label: "Embroidery Heads" },
  { value: "8-colour", label: "Screen Print" },
  { value: "2", label: "Washing Lines" },
  { value: "500+", label: "Workers" },
  { value: "6M+", label: "Pcs/Year Capacity" },
];

export function WhyRaheDeen() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        <SectionHeader
          badge="Why RaheDeen"
          title="What Makes Us Different"
          subtitle="Hundreds of Bangladesh manufacturers can make kids garments. Here's what separates us from the rest."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 hover:bg-white hover:shadow-[0_4px_20px_-4px_rgb(0_0_0/0.08)] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconColors[p.color]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-bold ${statColors[p.color]} bg-white border border-current/20 px-2.5 py-1 rounded-full`}>
                    {p.stat}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{p.body}</p>
              </div>
            );
          })}
        </div>

        {/* Factory numbers strip */}
        <div className="rounded-3xl bg-brand-950 text-white overflow-hidden">
          <div className="px-6 pt-7 pb-3">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-1">Factory Capacity</div>
            <h3 className="text-xl font-bold text-white">Narayanganj Production Facility</h3>
            <p className="text-sm text-brand-400 mt-1">
              BSCIC Industrial Area, Narayanganj · Open to buyer audit at any stage
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6">
            {FACTORY_STATS.map((s, i) => (
              <div
                key={s.label}
                className={`px-5 py-5 text-center ${i < FACTORY_STATS.length - 1 ? "border-r border-white/8" : ""}`}
              >
                <div className="text-2xl font-bold text-accent-400 mb-0.5">{s.value}</div>
                <div className="text-xs text-brand-400">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="px-6 py-5 border-t border-white/8 flex items-center justify-between gap-4">
            <p className="text-sm text-brand-300">
              Want to see the factory before placing an order?
            </p>
            <Link
              href="/factory"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-600 rounded-xl transition-colors shrink-0"
            >
              Factory Tour
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
