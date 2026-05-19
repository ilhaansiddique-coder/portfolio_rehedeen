import type { Metadata } from "next";
import { FileText, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RFQForm } from "@/components/sections/rfq-form";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Submit your production brief — product category, service type, MOQ, and delivery target. Our team responds within 24 hours with pricing and lead times.",
};

const WHAT_HAPPENS = [
  "We review your brief and confirm feasibility within 24 hours",
  "Preliminary pricing and lead time estimate provided by email",
  "Technical review call offered for complex collections",
  "Free tech pack review if you attach one",
];

export default function RFQPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Contact", href: "/contact" }, { label: "Request a Quote" }]}
            className="mb-6 text-brand-300"
          />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-accent-500 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <Badge variant="accent">Free, No Commitment</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            Request a Production Quote
          </h1>
          <p className="text-lg text-brand-200 max-w-xl leading-relaxed">
            Fill in your brief and we&apos;ll respond within 24 hours with preliminary pricing,
            MOQ confirmation, and lead time estimates.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <RFQForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
              <h3 className="font-bold text-gray-900 mb-4">What Happens Next</h3>
              <ul className="space-y-3">
                {WHAT_HAPPENS.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-700 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-card">
              <h3 className="font-bold text-gray-900 mb-4">Already Have a Tech Pack?</h3>
              <p className="text-sm text-gray-500 mb-3">
                Email it to us directly and we&apos;ll include it in your quote review:
              </p>
              <a
                href="mailto:sampling@rahedeen.com"
                className="text-sm font-medium text-brand-700 hover:underline"
              >
                sampling@rahedeen.com
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Compliance Note</span>
              </div>
              <p className="text-xs text-green-700 leading-relaxed">
                All quote responses include standard compliance documentation scope
                (CPSIA, OEKO-TEX, GOTS) applicable to your target market.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
