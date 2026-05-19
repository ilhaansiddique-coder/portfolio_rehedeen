"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";

const TIERS = [
  { label: "৳1,00,000", value: 100000 },
  { label: "৳2,00,000", value: 200000 },
  { label: "৳5,00,000", value: 500000 },
  { label: "৳10,00,000", value: 1000000 },
  { label: "৳20,00,000", value: 2000000 },
];

function formatBDT(n: number) {
  if (n >= 10000000) return `৳${(n / 10000000).toFixed(1)} কোটি`;
  if (n >= 100000) return `৳${(n / 100000).toFixed(1)} লক্ষ`;
  return `৳${n.toLocaleString("bn-BD")}`;
}

export function SavingsCalculator() {
  const [monthly, setMonthly] = useState(200000);
  const DISCOUNT_PCT = 3;
  const PACKAGE_COST = 30000;

  const monthlyDiscount = Math.round((monthly * DISCOUNT_PCT) / 100);
  const annualDiscount = monthlyDiscount * 12;
  const netSaving = annualDiscount - PACKAGE_COST;
  const roi = Math.round((netSaving / PACKAGE_COST) * 100);

  return (
    <div className="bg-gradient-to-br from-brand-950 to-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          badge="সঞ্চয় ক্যালকুলেটর"
          title="আপনি কত সাশ্রয় করতে পারবেন?"
          subtitle="মাসিক ক্রয়ের পরিমাণ দিন এবং দেখুন Friendship Store পার্টনারশিপে কত টাকা সাশ্রয় হবে।"
          align="center"
          inverted
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Calculator */}
          <div className="bg-white/8 border border-white/15 rounded-3xl p-7 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 mb-7">
              <Calculator className="w-5 h-5 text-accent-400" />
              <span className="text-white font-bold">মাসিক ক্রয় নির্বাচন করুন</span>
            </div>

            {/* Preset buttons */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {TIERS.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setMonthly(t.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    monthly === t.value
                      ? "bg-accent-500 text-white shadow-md shadow-accent-500/30"
                      : "bg-white/10 text-brand-200 border border-white/15 hover:bg-white/20"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Custom input */}
            <div className="mb-6">
              <label className="text-xs text-brand-400 font-semibold uppercase tracking-wider block mb-2">
                বা নিজে পরিমাণ লিখুন (টাকায়)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-300 font-bold">৳</span>
                <input
                  type="number"
                  value={monthly}
                  onChange={(e) => setMonthly(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full pl-9 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-base font-bold focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400/30"
                  placeholder="100000"
                />
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 p-5 rounded-2xl bg-white/6 border border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-brand-300">মাসিক ক্রয়</span>
                <span className="text-white font-semibold">{formatBDT(monthly)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-brand-300">৩% অতিরিক্ত ছাড় (মাসিক)</span>
                <span className="text-emerald-400 font-bold">+{formatBDT(monthlyDiscount)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-brand-300">বার্ষিক মোট ছাড়</span>
                <span className="text-emerald-400 font-bold">+{formatBDT(annualDiscount)}</span>
              </div>
              <div className="h-px bg-white/10 my-1" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-brand-300">প্যাকেজ মূল্য</span>
                <span className="text-red-400 font-semibold">−৳৩০,০০০</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/15 pt-3">
                <span className="text-white font-bold">নিট বার্ষিক সাশ্রয়</span>
                <span className={`text-xl font-black ${netSaving >= 0 ? "text-accent-400" : "text-red-400"}`}>
                  {netSaving >= 0 ? "+" : "−"}{formatBDT(Math.abs(netSaving))}
                </span>
              </div>
            </div>
          </div>

          {/* Result highlight */}
          <div className="space-y-5">
            {/* ROI card */}
            <div className="p-7 rounded-3xl bg-accent-500/10 border-2 border-accent-400/30">
              <div className="text-xs text-accent-400 font-bold uppercase tracking-widest mb-2">
                বিনিয়োগের রিটার্ন (ROI)
              </div>
              <div className="text-6xl font-black text-accent-400 mb-2">
                {roi > 0 ? `${roi}%` : "—"}
              </div>
              <p className="text-brand-300 text-sm leading-relaxed">
                {monthly >= 100000
                  ? `মাসে ${formatBDT(monthly)} ক্রয়ে বার্ষিক ${formatBDT(annualDiscount)} সাশ্রয় — প্যাকেজ মূল্য বাদে নিট ${netSaving >= 0 ? formatBDT(netSaving) : "ঘাটতি"} সাশ্রয়।`
                  : "মাসিক ক্রয়ের পরিমাণ বাড়ালে আরও বেশি সাশ্রয় হবে।"}
              </p>
            </div>

            {/* Example calculations */}
            <div className="p-6 rounded-2xl bg-white/6 border border-white/10">
              <div className="text-xs text-brand-400 font-bold uppercase tracking-wider mb-4">উদাহরণ হিসাব</div>
              <div className="space-y-3">
                {[
                  { monthly: 100000, label: "৳১ লক্ষ/মাস" },
                  { monthly: 500000, label: "৳৫ লক্ষ/মাস" },
                  { monthly: 1000000, label: "৳১০ লক্ষ/মাস" },
                ].map((ex) => {
                  const saving = (ex.monthly * 12 * DISCOUNT_PCT) / 100 - PACKAGE_COST;
                  return (
                    <div key={ex.label} className="flex items-center justify-between">
                      <span className="text-sm text-brand-300">{ex.label} ক্রয়ে</span>
                      <span className={`text-sm font-bold ${saving >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                        {saving >= 0 ? "সাশ্রয় " : "ঘাটতি "}{formatBDT(Math.abs(saving))}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Link
              href="/apply"
              className="flex items-center justify-center gap-2 w-full py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-2xl transition-all shadow-xl shadow-accent-500/25"
            >
              পার্টনার হয়ে সাশ্রয় শুরু করুন
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
