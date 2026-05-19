import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { FriendshipPackages } from "@/components/sections/friendship-packages";
import { PartnerBenefits } from "@/components/sections/partner-benefits";
import { PartnerEligibility } from "@/components/sections/partner-eligibility";
import { GrowthJourney } from "@/components/sections/growth-journey";
import { MarketingShowcase } from "@/components/sections/marketing-showcase";
import { SavingsCalculator } from "@/components/sections/savings-calculator";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Friendship Store Program — RAHEDEEN™",
  description: "RAHEDEEN™ Friendship Store: Brand supported partnership for kids fashion retailers in Bangladesh. ৳30,000/year. Official license, marketing support, 3% extra discount.",
};

const PROGRAM_HIGHLIGHTS = [
  "ফ্র্যাঞ্চাইজি নয় — Brand Supported Partnership",
  "বার্ষিক নবায়নযোগ্য চুক্তি, কোনো লক-ইন নেই",
  "অফিশিয়াল লাইসেন্স + মার্কেটিং উপকরণ সহ",
  "৩% অতিরিক্ত পাইকারি ছাড় — সরাসরি আয়",
  "ওয়েবসাইট ও ফেসবুকে স্টোর লিস্টিং",
];

export default function FriendshipStorePage() {
  return (
    <>
      {/* Page hero */}
      <div className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div aria-hidden className="absolute top-0 right-0 w-96 h-96 bg-accent-500/15 blur-[100px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Badge variant="accent" className="mb-5">🤝 Brand Supported Partnership</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                RAHEDEEN™{" "}
                <span className="text-accent-400">Friendship Store</span>{" "}
                প্রোগ্রাম
              </h1>
              <p className="text-lg text-brand-200 leading-relaxed mb-7">
                আপনার কিডস ফ্যাশন ব্যবসাকে একটি স্বীকৃত ব্র্যান্ডের অংশ করুন।
                অফিশিয়াল লাইসেন্স, মার্কেটিং সাপোর্ট ও অতিরিক্ত ছাড় — সব একসাথে।
              </p>
              <ul className="space-y-2.5 mb-8">
                {PROGRAM_HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-brand-200">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-accent-500/30"
                >
                  এখনই আবেদন করুন <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
                >
                  প্যাকেজ দেখুন
                </Link>
              </div>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "৳৩০,০০০", label: "বার্ষিক শুরুর মূল্য", sub: "Basic প্যাকেজ" },
                { val: "৩%", label: "অতিরিক্ত ছাড়", sub: "পাইকারি ক্রয়ে" },
                { val: "২০০+", label: "সক্রিয় পার্টনার", sub: "সারা বাংলাদেশে" },
                { val: "১৫+", label: "বছরের অভিজ্ঞতা", sub: "কিডস গার্মেন্টে" },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-2xl bg-white/8 border border-white/12">
                  <div className="text-3xl font-black text-accent-400 mb-1">{s.val}</div>
                  <div className="text-sm font-bold text-white">{s.label}</div>
                  <div className="text-xs text-brand-400 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* "Not a franchise" explainer */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 mb-6">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            <span className="text-sm font-semibold text-brand-700">গুরুত্বপূর্ণ তথ্য</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            এটি ফ্র্যাঞ্চাইজি নয়
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            RAHEDEEN™ Friendship Store একটি <strong>&ldquo;Brand Supported Partnership&rdquo;</strong> মডেল।
            আপনাকে বিশাল ফ্র্যাঞ্চাইজি ফি দিতে হবে না, দোকানের মালিকানা আপনারই থাকবে,
            এবং বার্ষিক চুক্তি নবায়নযোগ্য।
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { icon: "❌", label: "ফ্র্যাঞ্চাইজি", items: ["বিশাল এন্ট্রি ফি", "কঠোর নিয়ম", "মালিকানায় সীমাবদ্ধতা"] },
              { icon: "✅", label: "Friendship Store", items: ["৳৩০,০০০/বছর থেকে শুরু", "নমনীয় পরিচালনা", "আপনার ব্যবসা, আপনার নিয়ন্ত্রণ"] },
              { icon: "📈", label: "সুবিধা", items: ["ব্র্যান্ড সাপোর্ট", "মার্কেটিং সহায়তা", "৩% অতিরিক্ত ছাড়"] },
            ].map((col) => (
              <div key={col.label} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-2xl mb-2">{col.icon}</div>
                <div className="text-sm font-bold text-gray-900 mb-2">{col.label}</div>
                <ul className="space-y-1">
                  {col.items.map((item) => (
                    <li key={item} className="text-xs text-gray-500">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FriendshipPackages />
      <PartnerBenefits />
      <MarketingShowcase />
      <SavingsCalculator />
      <GrowthJourney />
      <PartnerEligibility />

      <CTABanner
        title="আজই আবেদন করুন — সীমিত আসন"
        subtitle="প্রতিটি এলাকায় সীমিত সংখ্যক Friendship Store পার্টনার নেওয়া হয়। এখনই আবেদন করুন এবং আপনার এলাকায় প্রথম অফিশিয়াল পার্টনার হন।"
        primaryLabel="Become a Partner"
        primaryHref="/apply"
        secondaryLabel="WhatsApp করুন"
        secondaryHref="https://wa.me/8801234567890"
      />
    </>
  );
}
