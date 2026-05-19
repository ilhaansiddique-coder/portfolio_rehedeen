import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { FriendshipPackages } from "@/components/sections/friendship-packages";
import { ProductTypeShowcase } from "@/components/sections/product-type-showcase";
import { MarketReach } from "@/components/sections/market-reach";
import { CapabilitiesGrid } from "@/components/sections/capabilities-grid";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ComplianceWall } from "@/components/sections/compliance-wall";
import { GrowthJourney } from "@/components/sections/growth-journey";
import { Testimonials } from "@/components/sections/testimonials";
import { CTABanner } from "@/components/sections/cta-banner";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import site from "@/content/data/site.json";

export const metadata: Metadata = {
  title: "RAHEDEEN™ — কিডস ফ্যাশন পার্টনারশিপ ও গার্মেন্ট ম্যানুফ্যাকচারার",
  description: site.description,
};

const PARTNERSHIP_HIGHLIGHTS = [
  "ফ্র্যাঞ্চাইজি নয় — আপনার দোকান, আপনার নিয়ন্ত্রণ",
  "৩% অতিরিক্ত পাইকারি ছাড় সরাসরি আয়ে",
  "অফিশিয়াল লাইসেন্স + প্রফেশনাল মার্কেটিং উপকরণ",
  "বার্ষিক নবায়নযোগ্য — কোনো লক-ইন নেই",
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Partnership-first, product visual grid */}
      <Hero />

      {/* 2. Friendship Store intro bridge */}
      <div className="bg-gradient-to-br from-brand-50 to-brand-100/60 border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Badge variant="default" className="mb-4">🤝 Friendship Store Program</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                আপনার কিডস ফ্যাশন ব্যবসাকে{" "}
                <span className="text-brand-700">RAHEDEEN™-এর অংশ</span> করুন
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                বাংলাদেশের {site.partnerStores} রিটেইলার ইতিমধ্যে RAHEDEEN™ Friendship Store
                প্রোগ্রামে যোগ দিয়েছেন। অফিশিয়াল লাইসেন্স, মার্কেটিং সাপোর্ট ও অতিরিক্ত ছাড় —
                সব একসাথে, মাত্র ৳৩০,০০০/বছর থেকে।
              </p>
              <ul className="space-y-2.5 mb-8">
                {PARTNERSHIP_HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-accent-500/25"
                >
                  এখনই আবেদন করুন <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/friendship-store"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-brand-200 text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-all"
                >
                  প্রোগ্রাম সম্পর্কে জানুন
                </Link>
              </div>
            </div>

            {/* Stats / proof cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: site.partnerStores, label: "সক্রিয় পার্টনার স্টোর", sub: "সারা বাংলাদেশে", icon: "🤝" },
                { val: "৳৩০,০০০", label: "বার্ষিক শুরুর মূল্য", sub: "Basic প্যাকেজ", icon: "💰" },
                { val: "৩%", label: "অতিরিক্ত পাইকারি ছাড়", sub: "প্রতিটি অর্ডারে", icon: "📈" },
                { val: "৪৮ ঘণ্টা", label: "আবেদনের পর যোগাযোগ", sub: "আমাদের টিম থেকে", icon: "⚡" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-2xl bg-white border border-brand-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-2xl font-black text-brand-700 mb-1">{s.val}</div>
                  <div className="text-xs font-bold text-gray-900">{s.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Friendship Packages — the three tiers */}
      <FriendshipPackages />

      {/* 5. Product Type Showcase — what we make */}
      <ProductTypeShowcase />

      {/* 6. Market Reach — BD first, then international */}
      <MarketReach />

      {/* 7. Capabilities — factory & production */}
      <Section>
        <CapabilitiesGrid />
      </Section>

      {/* 8. Process Timeline — order to delivery */}
      <Section className="bg-gray-50">
        <ProcessTimeline />
      </Section>

      {/* 9. Compliance Wall — certifications as differentiator */}
      <ComplianceWall />

      {/* 10. Growth Journey — partnership tiers */}
      <GrowthJourney />

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. CTA — Become a Partner primary */}
      <CTABanner
        title="আজই RAHEDEEN™ Friendship Store পার্টনার হন"
        subtitle="প্রতিটি এলাকায় সীমিত আসন। এখনই আবেদন করুন এবং আপনার এলাকায় প্রথম অফিশিয়াল পার্টনার হন।"
        primaryLabel="Become a Partner"
        primaryHref="/apply"
        secondaryLabel="প্রোগ্রাম সম্পর্কে জানুন"
        secondaryHref="/friendship-store"
      />
    </>
  );
}
