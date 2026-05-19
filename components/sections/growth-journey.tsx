import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";

const STAGES = [
  {
    step: "01",
    icon: "🛒",
    label: "নতুন রিটেইলার",
    labelEn: "New Retailer",
    desc: "পাইকারি ক্রেতা হিসেবে শুরু করুন। কোনো চুক্তি ছাড়াই অর্ডার করুন।",
    color: "bg-gray-100 text-gray-600 border-gray-200",
    dotColor: "bg-gray-400",
    lineColor: "bg-gray-200",
    active: false,
  },
  {
    step: "02",
    icon: "🤝",
    label: "Friendship Store",
    labelEn: "Friendship Partner",
    desc: "অফিশিয়াল লাইসেন্স + মার্কেটিং সাপোর্ট + ৩% অতিরিক্ত ছাড় পান।",
    color: "bg-brand-50 text-brand-700 border-brand-300",
    dotColor: "bg-brand-600",
    lineColor: "bg-brand-200",
    active: true,
  },
  {
    step: "03",
    icon: "⭐",
    label: "Exclusive Store",
    labelEn: "Exclusive Partner",
    desc: "আঞ্চলিক একচেটিয়া অধিকার, কাস্টম শোরুম ডিজাইন ও অতিরিক্ত সুবিধা।",
    color: "bg-accent-50 text-accent-700 border-accent-300",
    dotColor: "bg-accent-500",
    lineColor: "bg-accent-200",
    active: false,
  },
  {
    step: "04",
    icon: "👑",
    label: "Premium Partner",
    labelEn: "Premium Partner",
    desc: "সর্বোচ্চ স্তরের পার্টনারশিপ — সকল সুবিধা, সর্বাধিক ছাড়, সরাসরি কারখানা সংযোগ।",
    color: "bg-violet-50 text-violet-700 border-violet-300",
    dotColor: "bg-violet-600",
    lineColor: "bg-violet-200",
    active: false,
  },
];

export function GrowthJourney() {
  return (
    <div className="bg-brand-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          badge="প্রবৃদ্ধির পথ"
          title="আপনার ব্যবসার যাত্রা"
          subtitle="Friendship Store শুধু একটি শুরু। আপনার পারফরম্যান্স ও বিক্রয়ের উপর ভিত্তি করে পর্যায়ক্রমে আপগ্রেড হয়ে সর্বোচ্চ স্তরে পৌঁছান।"
          align="center"
          inverted
        />

        {/* Journey roadmap */}
        <div className="relative">
          {/* Desktop horizontal timeline */}
          <div className="hidden md:flex items-start gap-0">
            {STAGES.map((stage, i) => (
              <div key={stage.step} className="flex-1 flex flex-col items-center">
                {/* Connector line */}
                <div className="flex items-center w-full">
                  {i > 0 && (
                    <div className={`flex-1 h-0.5 ${STAGES[i - 1].lineColor}`} />
                  )}
                  {i === 0 && <div className="flex-1" />}

                  {/* Node */}
                  <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center border-2 ${stage.color} shrink-0 relative z-10 ${stage.active ? "ring-4 ring-brand-500/30 scale-110" : ""}`}>
                    <span className="text-xl">{stage.icon}</span>
                  </div>

                  {i < STAGES.length - 1 && (
                    <div className={`flex-1 h-0.5 ${stage.lineColor}`} />
                  )}
                  {i === STAGES.length - 1 && <div className="flex-1" />}
                </div>

                {/* Label */}
                <div className="text-center mt-4 px-2">
                  <div className="text-xs text-brand-400 font-bold uppercase tracking-wider mb-1">Step {stage.step}</div>
                  <div className={`text-sm font-bold ${stage.active ? "text-accent-400" : "text-white"} mb-1.5`}>
                    {stage.label}
                  </div>
                  <p className="text-xs text-brand-400 leading-relaxed">{stage.desc}</p>
                  {stage.active && (
                    <div className="mt-2 inline-block px-2.5 py-0.5 bg-accent-500/20 border border-accent-500/30 rounded-full text-xs text-accent-400 font-semibold">
                      আপনি এখানে শুরু করুন
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-0">
            {STAGES.map((stage, i) => (
              <div key={stage.step} className="flex gap-4">
                {/* Left: dot + line */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center shrink-0 ${stage.color} ${stage.active ? "ring-4 ring-brand-500/30" : ""}`}>
                    <span className="text-lg">{stage.icon}</span>
                  </div>
                  {i < STAGES.length - 1 && (
                    <div className={`w-0.5 flex-1 mt-2 mb-2 min-h-[32px] ${stage.lineColor}`} />
                  )}
                </div>

                {/* Right: content */}
                <div className="flex-1 pb-6">
                  <div className="text-xs text-brand-400 font-bold uppercase tracking-wider">Step {stage.step}</div>
                  <div className={`text-base font-bold ${stage.active ? "text-accent-400" : "text-white"} mt-0.5`}>
                    {stage.label}
                  </div>
                  <p className="text-sm text-brand-400 mt-1 leading-relaxed">{stage.desc}</p>
                  {stage.active && (
                    <div className="mt-2 inline-block px-2.5 py-0.5 bg-accent-500/20 border border-accent-500/30 rounded-full text-xs text-accent-400 font-semibold">
                      এখানে শুরু করুন
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-2xl transition-all shadow-xl shadow-accent-500/25 text-sm"
          >
            এখনই Friendship Store পার্টনার হন
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-3 text-xs text-brand-400">ফ্র্যাঞ্চাইজি নয় · কোনো হিডেন চার্জ নেই · ৩০,০০০ টাকা/বছর থেকে শুরু</p>
        </div>
      </div>
    </div>
  );
}
