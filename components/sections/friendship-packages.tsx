import Link from "next/link";
import { Check, Star, ArrowRight, Sparkles, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";

const PACKAGES = [
  {
    id: "basic",
    tier: "বেসিক",
    name: "Friendship Basic",
    price: 30000,
    highlight: false,
    headerBg: "bg-gradient-to-br from-brand-50 via-blue-50 to-indigo-50",
    headerBorder: "border-brand-100",
    cardBorder: "border-brand-100",
    cardShadow: "shadow-[0_4px_24px_0_rgba(55,48,163,0.08)]",
    priceColor: "text-brand-800",
    accentColor: "text-brand-600",
    checkColor: "text-brand-500",
    checkBg: "bg-brand-50",
    pillBg: "bg-brand-100 text-brand-600",
    btnClass: "bg-brand-700 hover:bg-brand-600 text-white shadow-[0_4px_14px_0_rgba(55,48,163,0.3)]",
    icon: "🤝",
    tag: null,
    features: [
      "অফিশিয়াল ফ্রেন্ডশিপ স্টোর লাইসেন্স",
      "RAHEDEEN™ ব্র্যান্ড ব্যবহারের অনুমতি",
      "স্টোর পোস্টার ডিজাইন (বছরে ৬টি)",
      "মার্কেটিং সাপোর্ট",
      "ব্যবসায়িক গাইডেন্স",
      "আর্লি প্রোডাক্ট অ্যাক্সেস",
      "ওয়েবসাইট ও ফেসবুকে স্টোর লিস্টিং",
      "অতিরিক্ত ৩% পাইকারি ছাড়",
    ],
  },
  {
    id: "standard",
    tier: "স্ট্যান্ডার্ড",
    name: "Friendship Standard",
    price: 55000,
    highlight: true,
    headerBg: "bg-gradient-to-br from-violet-400 via-purple-400 to-accent-500",
    headerBorder: "border-accent-300",
    cardBorder: "border-accent-200",
    cardShadow: "shadow-[0_8px_40px_0_rgba(168,85,247,0.22)]",
    priceColor: "text-white",
    accentColor: "text-violet-100",
    checkColor: "text-violet-500",
    checkBg: "bg-violet-50",
    pillBg: "bg-white/20 text-white",
    btnClass: "bg-gradient-to-r from-violet-500 to-accent-500 hover:from-violet-400 hover:to-accent-400 text-white shadow-[0_4px_18px_0_rgba(168,85,247,0.4)]",
    icon: "⭐",
    tag: "সবচেয়ে জনপ্রিয়",
    features: [
      "Basic-এর সব সুবিধা",
      "ঈদ অফার পোস্টার ডিজাইন (প্রতি ঈদে ৩টি)",
      "ফেসবুক স্টোরি ও কভার ডিজাইন",
      "হোয়াটসঅ্যাপ স্ট্যাটাস ডিজাইন",
      "ডিসকাউন্ট ব্যানার ডিজাইন",
      "ফেস্টিভাল ক্যাম্পেইন ডিজাইন",
      "প্রাইওরিটি অর্ডার প্রসেসিং",
      "ডেডিকেটেড মার্কেটিং ম্যানেজার",
    ],
  },
  {
    id: "premium",
    tier: "প্রিমিয়াম",
    name: "Friendship Premium",
    price: 85000,
    highlight: false,
    headerBg: "bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50",
    headerBorder: "border-violet-100",
    cardBorder: "border-violet-100",
    cardShadow: "shadow-[0_4px_24px_0_rgba(124,58,237,0.08)]",
    priceColor: "text-violet-900",
    accentColor: "text-violet-600",
    checkColor: "text-violet-500",
    checkBg: "bg-violet-50",
    pillBg: "bg-violet-100 text-violet-600",
    btnClass: "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-[0_4px_14px_0_rgba(124,58,237,0.3)]",
    icon: "👑",
    tag: null,
    features: [
      "Standard-এর সব সুবিধা",
      "এক্সক্লুসিভ স্টোর আপগ্রেড পাথ",
      "কাস্টম সাইনবোর্ড ডিজাইন সহ",
      "মাসিক বিক্রয় বিশ্লেষণ রিপোর্ট",
      "প্রোডাক্ট ফটোগ্রাফি সহযোগিতা",
      "রিজিওনাল এক্সক্লুসিভিটি অপশন",
      "সরাসরি ফ্যাক্টরি ভিজিট সুযোগ",
      "বার্ষিক পার্টনার সম্মেলনে আমন্ত্রণ",
    ],
  },
];

export function FriendshipPackages() {
  return (
    <div id="packages" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          badge="প্যাকেজ ও মূল্য"
          title="আপনার জন্য সঠিক প্যাকেজ বেছে নিন"
          subtitle="তিনটি প্যাকেজ — ছোট রিটেইলার থেকে বড় শোরুম পর্যন্ত। সব প্যাকেজে অফিশিয়াল লাইসেন্স ও মার্কেটিং সাপোর্ট অন্তর্ভুক্ত।"
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7 items-stretch mt-12">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl border overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1 ${pkg.cardBorder} ${pkg.cardShadow} ${
                pkg.highlight ? "ring-2 ring-accent-300 ring-offset-2 md:-translate-y-3 hover:md:-translate-y-4" : ""
              }`}
            >
              {/* Popular ribbon */}
              {pkg.tag && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 border border-violet-200 shadow-sm">
                  <Star className="w-3 h-3 text-violet-500 fill-violet-500" />
                  <span className="text-[10px] font-bold text-violet-600 uppercase tracking-wide">{pkg.tag}</span>
                </div>
              )}

              {/* Header */}
              <div className={`${pkg.headerBg} px-6 pt-6 pb-7 border-b ${pkg.headerBorder}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{pkg.icon}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${pkg.pillBg}`}>
                    {pkg.tier}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${pkg.highlight ? "text-white" : "text-gray-900"}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-end gap-1.5">
                  <span className={`text-4xl font-black tracking-tight ${pkg.priceColor}`}>
                    ৳{pkg.price.toLocaleString("bn-BD")}
                  </span>
                  <span className={`text-sm font-medium pb-1 ${pkg.highlight ? "text-white/70" : "text-gray-400"}`}>
                    /বছর
                  </span>
                </div>
                <p className={`text-xs mt-1.5 ${pkg.highlight ? "text-white/60" : "text-gray-400"}`}>
                  নবায়নযোগ্য বার্ষিক চুক্তি · কোনো লক-ইন নেই
                </p>
              </div>

              {/* Features */}
              <div className="px-6 py-5 flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${pkg.checkBg}`}>
                        <Check className={`w-2.5 h-2.5 ${pkg.checkColor}`} strokeWidth={3} />
                      </span>
                      <span className="text-sm text-gray-600 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/apply"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${pkg.btnClass}`}
                >
                  এখনই আবেদন করুন
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-[11px] text-gray-400 mt-2">কোনো লুকানো চার্জ নেই</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-brand-50 to-indigo-50 border border-brand-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-brand-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-brand-900">কাস্টম প্যাকেজ দরকার?</p>
            <p className="text-sm text-brand-600 mt-0.5 leading-relaxed">
              বড় চেইন শপ বা একাধিক স্টোরের জন্য বিশেষ অফার আলোচনা করা যাবে।{" "}
              <Link href="/contact" className="font-semibold underline underline-offset-2">আমাদের সাথে কথা বলুন →</Link>
            </p>
          </div>
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-brand-100 shadow-sm shrink-0">
            <Zap className="w-3.5 h-3.5 text-accent-500" />
            <span className="text-xs font-bold text-gray-700">৪৮ ঘণ্টায় রিপ্লাই</span>
          </div>
        </div>
      </div>
    </div>
  );
}
