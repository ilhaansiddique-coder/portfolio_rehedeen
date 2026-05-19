import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";

const ELIGIBLE = [
  { emoji: "🏪", label: "কিডস ফ্যাশন শপ", desc: "শিশু পোশাকের দোকান — যেকোনো সাইজ" },
  { emoji: "👶", label: "বেবি শপ", desc: "নবজাতক ও শিশু পণ্যের দোকান" },
  { emoji: "👗", label: "ক্লোদিং রিটেইলার", desc: "জেনারেল ক্লোদিং বা ফ্যামিলি শপ" },
  { emoji: "📱", label: "অনলাইন সেলার", desc: "Facebook, Daraz, Shajgoj বা নিজস্ব পেজ" },
  { emoji: "🏡", label: "ভিলেজ ফ্যাশন স্টোর", desc: "গ্রামে বা ছোট শহরে পোশাকের দোকান" },
  { emoji: "🏬", label: "শোরুম মালিক", desc: "বড় শোরুম বা মাল্টি-ব্র্যান্ড আউটলেট" },
];

const NOT_ELIGIBLE = [
  "পাইকার বা আড়তদার (শুধুমাত্র রিটেইলারদের জন্য)",
  "ইতিমধ্যে প্রতিযোগী ব্র্যান্ডের ফ্র্যাঞ্চাইজি",
  "শিশু পোশাক বিক্রয়ের সাথে সম্পর্কহীন ব্যবসা",
];

export function PartnerEligibility() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          badge="যোগ্যতা"
          title="কে আবেদন করতে পারবেন?"
          subtitle="আপনার দোকান বা ব্যবসার ধরন যাই হোক — শিশু পোশাক বিক্রয়ের সাথে যুক্ত যেকেউ RAHEDEEN™ Friendship Store প্রোগ্রামে যোগ দিতে পারবেন।"
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Eligible */}
          <div className="bg-white rounded-3xl border-2 border-emerald-200 overflow-hidden">
            <div className="px-6 pt-6 pb-4 bg-emerald-50 border-b border-emerald-100">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-emerald-800">যোগ দিতে পারবেন</h3>
              </div>
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-4">
              {ELIGIBLE.map((e) => (
                <div
                  key={e.label}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <span className="text-2xl shrink-0">{e.emoji}</span>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{e.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements + Not eligible */}
          <div className="space-y-6">
            {/* Requirements */}
            <div className="bg-white rounded-3xl border-2 border-brand-200 overflow-hidden">
              <div className="px-6 pt-6 pb-4 bg-brand-50 border-b border-brand-100">
                <h3 className="text-base font-bold text-brand-800">প্রয়োজনীয় শর্ত</h3>
              </div>
              <ul className="p-6 space-y-3">
                {[
                  "একটি সক্রিয় দোকান বা অনলাইন শপ থাকতে হবে",
                  "মাসিক ন্যূনতম ক্রয়ের শর্ত পূরণ করতে হবে",
                  "RAHEDEEN™ ব্র্যান্ড সঠিকভাবে উপস্থাপন করতে হবে",
                  "পারিবারিক পরিবেশ ও ইতিবাচক গ্রাহক সেবা বজায় রাখতে হবে",
                  "সামাজিক মাধ্যমে ব্র্যান্ড নির্দেশিকা মানতে হবে",
                ].map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not eligible */}
            <div className="bg-white rounded-3xl border-2 border-red-100 overflow-hidden">
              <div className="px-6 pt-6 pb-4 bg-red-50 border-b border-red-100">
                <div className="flex items-center gap-2.5">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <h3 className="text-base font-bold text-red-800">যোগ দিতে পারবেন না</h3>
                </div>
              </div>
              <ul className="p-6 space-y-3">
                {NOT_ELIGIBLE.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href="/apply"
              className="flex items-center justify-center gap-2 w-full py-4 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-2xl transition-colors shadow-md shadow-brand-200"
            >
              আবেদন ফর্ম পূরণ করুন
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
