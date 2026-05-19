import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTABanner } from "@/components/sections/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Compliance & Certifications",
  description:
    "CPSIA, OEKO-TEX Standard 100, GOTS organic, and BSTI compliance — full documentation for every shipment.",
};

const CERTS = [
  {
    slug: "cpsia",
    name: "CPSIA",
    fullName: "Consumer Product Safety Improvement Act",
    market: "USA",
    description: "Mandatory for all children's products sold in the USA. GCC + 3rd-party lab tests (lead, phthalates, flammability) per style.",
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    slug: "oeko-tex",
    name: "OEKO-TEX® 100",
    fullName: "OEKO-TEX Standard 100",
    market: "EU / UK / Global",
    description: "Tests every component — fabric, thread, buttons — for 100+ harmful substances. Class I certified for baby and toddler garments.",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-700",
    iconBg: "bg-green-100",
  },
  {
    slug: "gots",
    name: "GOTS",
    fullName: "Global Organic Textile Standard",
    market: "EU / UK / Global",
    description: "Full supply chain certification from organic fibre to finished garment. ≥95% organic cotton, ecological processing, ILO social criteria.",
    color: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-700",
    iconBg: "bg-emerald-100",
  },
  {
    slug: "bsti",
    name: "BSTI Conformity",
    fullName: "Bangladesh Standards & Testing Institution",
    market: "Bangladesh",
    description: "All domestic-market garments comply with BSTI quality and labelling standards — required for BD retail chain, department store, and e-commerce distribution.",
    color: "bg-brand-50 border-brand-200",
    textColor: "text-brand-700",
    iconBg: "bg-brand-100",
  },
];

export default function CompliancePage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Compliance" }]} className="mb-6 text-brand-300" />
          <Badge variant="accent" className="mb-4">Certifications</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            Built for Regulated Markets
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl leading-relaxed">
            Every shipment arrives with complete compliance documentation. Our compliance
            team manages the paperwork so yours doesn&apos;t have to.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid sm:grid-cols-2 gap-6">
          {CERTS.map((cert) => (
            <Link
              key={cert.slug}
              href={`/compliance/${cert.slug}`}
              className={`group flex flex-col p-7 rounded-3xl border ${cert.color} hover:shadow-elevated transition-all`}
            >
              <div className={`w-10 h-10 rounded-xl ${cert.iconBg} flex items-center justify-center mb-5 ${cert.textColor}`}>
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xl font-bold ${cert.textColor}`}>{cert.name}</span>
                <Badge variant="muted" className="text-xs">{cert.market}</Badge>
              </div>
              <div className={`text-xs font-medium ${cert.textColor} opacity-70 mb-3`}>{cert.fullName}</div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{cert.description}</p>
              <div className={`flex items-center gap-1.5 mt-5 text-sm font-semibold ${cert.textColor} group-hover:gap-2.5 transition-all`}>
                View certification details <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeader
          badge="Documentation"
          title="What You Receive with Every Shipment"
          align="center"
        />
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Test Reports", desc: "3rd-party lab reports (SGS / Bureau Veritas / Intertek) per style, per destination market" },
            { title: "Certificates", desc: "OEKO-TEX and GOTS certificates with lot numbers, transaction certificates where applicable" },
            { title: "GCC / Compliance Statement", desc: "General Conformity Certificate per style for USA; BSTI conformity declaration for Bangladesh market" },
          ].map((doc) => (
            <div key={doc.title} className="p-5 bg-white rounded-2xl border border-gray-100 text-center">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-5 h-5 text-brand-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{doc.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{doc.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Need Documentation for a Specific Market?"
        subtitle="Tell us your destination market and product type. We'll confirm which certifications apply and what documentation you'll receive."
      />
    </>
  );
}
