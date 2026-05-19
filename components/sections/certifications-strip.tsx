import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";

const CERTS = [
  {
    slug: "cpsia",
    name: "CPSIA",
    issuer: "U.S. CPSC",
    description:
      "All children's products for the USA market tested and documented per CPSIA. GCC + 3rd-party lab reports available per style.",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    iconColor: "text-blue-600",
  },
  {
    slug: "oeko-tex",
    name: "OEKO-TEX® 100",
    issuer: "OEKO-TEX Association",
    description:
      "Every component — fabric, thread, buttons — tested for harmful substances. Class I certified for babies and toddlers.",
    color: "bg-green-50 border-green-200 text-green-700",
    iconColor: "text-green-600",
  },
  {
    slug: "gots",
    name: "GOTS Certified",
    issuer: "Global Organic Textile Standard",
    description:
      "Chain-of-custody certified organic cotton processing. 95%+ organic fibre, ecological processing, ILO social criteria.",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    iconColor: "text-emerald-600",
  },
  {
    slug: "bsti",
    name: "BSTI Conformity",
    issuer: "Bangladesh Standards & Testing Institution",
    description:
      "All domestic-market garments comply with BSTI quality and labelling standards for BD retail and e-commerce distribution.",
    color: "bg-brand-50 border-brand-200 text-brand-700",
    iconColor: "text-brand-600",
  },
];

export function CertificationsStrip() {
  return (
    <div>
      <SectionHeader
        badge="Compliance"
        title="Built for Regulated Markets"
        subtitle="Every shipment arrives with complete documentation. Our compliance team manages the paperwork so yours doesn't have to."
        align="center"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CERTS.map((cert) => (
          <Link
            key={cert.slug}
            href={`/compliance/${cert.slug}`}
            className={`group flex flex-col p-5 rounded-2xl border ${cert.color} hover:shadow-md transition-all`}
          >
            <div className={`w-9 h-9 rounded-xl bg-white/60 flex items-center justify-center mb-4 ${cert.iconColor}`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-bold text-base mb-0.5">{cert.name}</div>
            <div className="text-xs font-medium opacity-70 mb-3">{cert.issuer}</div>
            <p className="text-xs leading-relaxed opacity-75 flex-1">{cert.description}</p>
            <div className="mt-4 text-xs font-semibold group-hover:underline">
              View documentation →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
