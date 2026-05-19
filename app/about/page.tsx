import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Factory, Globe, Heart, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About RAHEDEEN™ — বাংলাদেশের বিশ্বস্ত কিডস ফ্যাশন ব্র্যান্ড",
  description:
    "RAHEDEEN™ is a premium kids garment brand from Narayanganj, Bangladesh. Est. 2009. 500+ workers, 6M+ pieces/year, exporting to USA, Canada, Australia, Southeast Asia and the Middle East.",
};

const TIMELINE = [
  {
    year: "2009",
    title: "প্রতিষ্ঠা",
    desc: "নারায়ণগঞ্জে ছোট পরিসরে শুরু — মাত্র ৩টি প্রোডাকশন লাইন নিয়ে RAHEDEEN™-এর যাত্রা শুরু।",
    color: "bg-brand-700",
  },
  {
    year: "2012",
    title: "রপ্তানি শুরু",
    desc: "মার্কিন যুক্তরাষ্ট্র ও কানাডায় প্রথম রপ্তানি। CPSIA কমপ্লায়েন্স অর্জন।",
    color: "bg-brand-600",
  },
  {
    year: "2015",
    title: "OEKO-TEX® সার্টিফিকেশন",
    desc: "OEKO-TEX Standard 100 সার্টিফিকেট অর্জন। আন্তর্জাতিক মানের নিশ্চয়তা।",
    color: "bg-accent-500",
  },
  {
    year: "2018",
    title: "কারখানা সম্প্রসারণ",
    desc: "১৫টি প্রোডাকশন লাইনে উন্নীত। ২৪টি এমব্রয়ডারি হেড ও ৮-কালার স্ক্রিন প্রিন্ট যন্ত্র স্থাপন।",
    color: "bg-brand-500",
  },
  {
    year: "2021",
    title: "Friendship Store লঞ্চ",
    desc: "বাংলাদেশের রিটেইলারদের জন্য Friendship Store প্রোগ্রাম চালু। প্রথম বছরেই ৫০+ পার্টনার।",
    color: "bg-accent-500",
  },
  {
    year: "2024",
    title: "২০০+ পার্টনার মাইলফলক",
    desc: "সারা বাংলাদেশে ২০০-এর বেশি Friendship Store পার্টনার। ৬০+ জেলায় উপস্থিতি।",
    color: "bg-brand-700",
  },
];

const VALUES = [
  {
    icon: Heart,
    color: "bg-rose-50 text-rose-600",
    title: "শিশুর নিরাপত্তা প্রথম",
    desc: "প্রতিটি পোশাক OEKO-TEX® মানদণ্ড অনুযায়ী তৈরি — কোনো ক্ষতিকর রাসায়নিক পদার্থ নেই।",
  },
  {
    icon: Shield,
    color: "bg-brand-50 text-brand-600",
    title: "গুণমানের নিশ্চয়তা",
    desc: "কঠোর QC প্রক্রিয়া: ফ্যাব্রিক ইনস্পেকশন → কাটিং → সেলাই → ফিনিশিং → ফাইনাল চেক।",
  },
  {
    icon: Globe,
    color: "bg-emerald-50 text-emerald-600",
    title: "টেকসই উৎপাদন",
    desc: "GOTS সার্টিফাইড জৈব সুতা ব্যবহার, পানি সাশ্রয়ী ওয়াশিং প্রক্রিয়া এবং পরিবেশ বান্ধব প্যাকেজিং।",
  },
  {
    icon: Factory,
    color: "bg-violet-50 text-violet-600",
    title: "দেশীয় উৎপাদন",
    desc: "১০০% বাংলাদেশে তৈরি। স্থানীয় ৫০০+ শ্রমিকের কর্মসংস্থান, ন্যায্য মজুরি ও নিরাপদ কর্মপরিবেশ।",
  },
];

const FACTORY_STATS = [
  { val: "১৫", label: "প্রোডাকশন লাইন" },
  { val: "২৪", label: "এমব্রয়ডারি হেড" },
  { val: "৮-কালার", label: "স্ক্রিন প্রিন্ট" },
  { val: "৫০০+", label: "দক্ষ কর্মী" },
  { val: "৬০+ জেলা", label: "পার্টনার কভারেজ" },
  { val: "৬M+", label: "পিস/বছর উৎপাদন" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="accent" className="mb-5">বাংলাদেশের কিডস ফ্যাশন ব্র্যান্ড</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            RAHEDEEN™ — শিশুর পোশাকে{" "}
            <span className="text-accent-400">বিশ্বাস ও মান</span>
          </h1>
          <p className="text-brand-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            ২০০৯ সাল থেকে নারায়ণগঞ্জে শিশুর পোশাক তৈরি করে আসছি আমরা।
            আজ ২০০-এর বেশি পার্টনার স্টোর ও আন্তর্জাতিক ক্রেতাদের বিশ্বাসের ব্র্যান্ড RAHEDEEN™।
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { val: "২০০৯", label: "প্রতিষ্ঠা বছর" },
              { val: "৫০০+", label: "কর্মী" },
              { val: "১৫+", label: "বছরের অভিজ্ঞতা" },
              { val: "২০০+", label: "পার্টনার স্টোর" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-2xl bg-white/8 border border-white/12 text-center">
                <div className="text-2xl font-black text-accent-400 mb-1">{s.val}</div>
                <div className="text-xs text-brand-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand story */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story text */}
          <div>
            <Badge variant="default" className="mb-4">আমাদের গল্প</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              ছোট স্বপ্ন থেকে বড় ব্র্যান্ড
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                ২০০৯ সালে নারায়ণগঞ্জের একটি ছোট কারখানায় RAHEDEEN™-এর যাত্রা শুরু।
                মাত্র ৩টি প্রোডাকশন লাইন ও ৫০ জন কর্মী নিয়ে শুরু করা সেই উদ্যোগ আজ
                বাংলাদেশের অন্যতম বিশ্বস্ত কিডস ফ্যাশন ব্র্যান্ড।
              </p>
              <p>
                আমাদের বিশ্বাস — প্রতিটি শিশু সুন্দর, নিরাপদ ও আরামদায়ক পোশাক পাওয়ার
                অধিকার রাখে। এই বিশ্বাস থেকেই আমরা OEKO-TEX® মানদণ্ড, CPSIA কমপ্লায়েন্স
                এবং সর্বোচ্চ মানের কারুকাজ নিশ্চিত করি।
              </p>
              <p>
                আজ আমরা যুক্তরাষ্ট্র, কানাডা, অস্ট্রেলিয়া, দক্ষিণ-পূর্ব এশিয়া ও মধ্যপ্রাচ্যে
                রপ্তানি করি। পাশাপাশি, বাংলাদেশের ২০০-এর বেশি রিটেইলারকে Friendship Store
                প্রোগ্রামের মাধ্যমে ব্র্যান্ডের অংশীদার হওয়ার সুযোগ দিচ্ছি।
              </p>
            </div>
          </div>

          {/* Vision / Mission cards */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">আমাদের লক্ষ্য (Vision)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                বাংলাদেশের প্রতিটি জেলায় RAHEDEEN™-এর একটি করে Friendship Store তৈরি করা
                এবং আন্তর্জাতিক বাজারে বাংলাদেশের কিডস ফ্যাশনকে শীর্ষে নিয়ে যাওয়া।
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-accent-50 border border-accent-100">
              <div className="text-2xl mb-3">💡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">আমাদের উদ্দেশ্য (Mission)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                প্রিমিয়াম মানের কিডসওয়্যার তৈরির মাধ্যমে স্থানীয় রিটেইলার ও আন্তর্জাতিক
                ক্রেতাদের সাথে দীর্ঘমেয়াদী অংশীদারিত্ব গড়ে তোলা।
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="text-2xl mb-3">🌿</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">আমাদের প্রতিশ্রুতি</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                শিশুর নিরাপত্তা, পরিবেশ সংরক্ষণ ও কর্মীদের ন্যায্য অধিকার নিশ্চিত করে
                প্রতিটি পোশাক তৈরি করা।
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <div className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <SectionHeader
            badge="আমাদের যাত্রা"
            title="১৫ বছরের অগ্রযাত্রা"
            subtitle="প্রতিষ্ঠা থেকে আজকের অবস্থানে আসার গল্প — প্রতিটি মাইলফলক আমাদের প্রতিশ্রুতির প্রমাণ।"
            align="center"
          />
          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-brand-100 -translate-x-0.5" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:text-left sm:pl-10"} pl-14 sm:pl-0`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-500 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Dot */}
                  <div className={`absolute left-3 sm:left-1/2 sm:-translate-x-1/2 w-6 h-6 rounded-full ${item.color} border-4 border-gray-50 shrink-0 mt-1`} />

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core values */}
      <Section className="bg-white">
        <SectionHeader
          badge="আমাদের মূল্যবোধ"
          title="যা আমাদের আলাদা করে"
          subtitle="RAHEDEEN™ শুধু পোশাক তৈরি করে না — প্রতিটি সিলাইয়ে আমরা একটি প্রতিশ্রুতি রাখি।"
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {VALUES.map((v) => (
            <div key={v.title} className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Factory stats */}
      <div className="bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10">
            <Badge variant="outline" className="border-white/20 text-white/70 bg-white/8 mb-4">কারখানা সক্ষমতা</Badge>
            <h2 className="text-3xl font-bold text-white mb-3">আধুনিক কারখানা, বিশ্বমানের উৎপাদন</h2>
            <p className="text-brand-300 max-w-xl mx-auto text-sm leading-relaxed">
              নারায়ণগঞ্জের আমাদের কারখানায় আধুনিক যন্ত্রপাতি ও দক্ষ কর্মীরা প্রতিদিন
              বিশ্বমানের পোশাক তৈরি করছেন।
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {FACTORY_STATS.map((s) => (
              <div key={s.label} className="p-5 rounded-2xl bg-white/6 border border-white/10 text-center">
                <div className="text-2xl font-black text-accent-400 mb-1">{s.val}</div>
                <div className="text-xs text-brand-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications strip */}
      <Section className="bg-white">
        <SectionHeader
          badge="সার্টিফিকেশন"
          title="বিশ্বস্ত মানদণ্ড"
          subtitle="আন্তর্জাতিক ও দেশীয় মানদণ্ড মেনে প্রতিটি পোশাক তৈরি — ক্রেতা ও রিটেইলার উভয়ের আস্থার ভিত্তি।"
          align="center"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {[
            { name: "CPSIA", country: "USA", desc: "Consumer Product Safety" },
            { name: "OEKO-TEX® 100", country: "Global", desc: "Harmful Substance Free" },
            { name: "GOTS", country: "Global", desc: "Organic Textile Standard" },
            { name: "BSTI", country: "Bangladesh", desc: "National Quality Standard" },
            { name: "BGMEA", country: "Bangladesh", desc: "Industry Association" },
          ].map((cert) => (
            <div key={cert.name} className="p-4 rounded-2xl bg-brand-50 border border-brand-100 text-center">
              <div className="text-sm font-bold text-brand-700 mb-1">{cert.name}</div>
              <div className="text-xs text-gray-400 mb-1">{cert.country}</div>
              <div className="text-xs text-gray-500">{cert.desc}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/compliance" className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
            সব সার্টিফিকেট দেখুন <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="RAHEDEEN™ Friendship Store পার্টনার হন"
        subtitle="আমাদের ব্র্যান্ডের অংশ হয়ে আপনার কিডস ফ্যাশন ব্যবসাকে নতুন উচ্চতায় নিয়ে যান।"
        primaryLabel="Become a Partner"
        primaryHref="/apply"
        secondaryLabel="প্রোগ্রাম সম্পর্কে জানুন"
        secondaryHref="/friendship-store"
      />
    </>
  );
}
