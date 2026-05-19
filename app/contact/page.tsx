import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import site from "@/content/data/site.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with RaheDeen's merchandising team. 24-hour response on all quote requests.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} className="mb-6 text-brand-300" />
          <Badge variant="accent" className="mb-4">Get in Touch</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s Talk About Your Collection
          </h1>
          <p className="text-lg text-brand-200 max-w-xl">
            Our merchandising team responds within 24 hours on all quote requests and general enquiries.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Direct Contact</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">General Enquiries</div>
                  <a href={`mailto:${site.email}`} className="text-brand-700 hover:underline">
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Quote Requests</div>
                  <a href={`mailto:${site.rfqEmail}`} className="text-brand-700 hover:underline">
                    {site.rfqEmail}
                  </a>
                  <div className="text-sm text-gray-500 mt-0.5">Preferred for detailed briefs and tech packs</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone / WhatsApp</div>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-brand-700 hover:underline">
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Factory Address</div>
                  <address className="text-gray-600 not-italic">
                    {site.address.street}<br />
                    {site.address.city}, {site.address.country} {site.address.zip}
                  </address>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Response Time</div>
                  <div className="text-gray-600">24 hours on quote requests</div>
                  <div className="text-gray-600">48 hours on compliance documentation</div>
                </div>
              </div>
            </div>
          </div>

          {/* RFQ CTA */}
          <div>
            <div className="p-8 rounded-3xl gradient-brand text-white">
              <h2 className="text-2xl font-bold mb-4">Faster? Use the Quote Form</h2>
              <p className="text-brand-200 leading-relaxed mb-6">
                The RFQ form structures your brief for our merchandising team — product category,
                service type, MOQ, and target delivery date. We can respond with preliminary
                pricing faster when we have the full picture.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Response within 24 hours",
                  "Preliminary pricing included",
                  "No commitment required",
                  "Free tech pack review on request",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="accent" asChild>
                <Link href="/contact/rfq">
                  Open Quote Form <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
