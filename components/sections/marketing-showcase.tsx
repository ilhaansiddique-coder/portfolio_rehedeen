import { SectionHeader } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

const DESIGNS = [
  {
    id: "eid-poster",
    label: "ঈদ অফার পোস্টার",
    desc: "প্রতি ঈদে ৩টি প্রফেশনাল পোস্টার ডিজাইন",
    preview: {
      bg: "from-green-600 to-emerald-500",
      emoji: "🌙",
      title: "ঈদ সেল",
      subtitle: "৩০% ছাড় সকল পোশাকে",
      tag: "RAHEDEEN™",
    },
    format: "A4 / Facebook Post",
    color: "border-emerald-200 bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "fb-story",
    label: "ফেসবুক স্টোরি ডিজাইন",
    desc: "৯:১৬ ফরম্যাটে আকর্ষণীয় স্টোরি টেমপ্লেট",
    preview: {
      bg: "from-blue-600 to-brand-600",
      emoji: "👗",
      title: "New Arrival",
      subtitle: "কিডস কালেকশন ২০২৫",
      tag: "RAHEDEEN™",
    },
    format: "1080×1920 Story",
    color: "border-blue-200 bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    id: "whatsapp",
    label: "WhatsApp স্ট্যাটাস",
    desc: "শেয়ারযোগ্য ওয়াটসঅ্যাপ প্রোমো ডিজাইন",
    preview: {
      bg: "from-green-500 to-teal-500",
      emoji: "💬",
      title: "বিশেষ অফার",
      subtitle: "আজই অর্ডার করুন",
      tag: "RAHEDEEN™",
    },
    format: "WhatsApp Status",
    color: "border-teal-200 bg-teal-50",
    badge: "bg-teal-100 text-teal-700",
  },
  {
    id: "discount-banner",
    label: "ডিসকাউন্ট ব্যানার",
    desc: "দোকানে ব্যবহারের জন্য ব্যানার ডিজাইন",
    preview: {
      bg: "from-accent-500 to-purple-500",
      emoji: "🏷️",
      title: "Super Sale",
      subtitle: "সীমিত সময়ের অফার",
      tag: "RAHEDEEN™",
    },
    format: "Print / Digital Banner",
    color: "border-violet-200 bg-violet-50",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    id: "festival",
    label: "ফেস্টিভাল ক্যাম্পেইন",
    desc: "পহেলা বৈশাখ, পূজা, ক্রিসমাস ক্যাম্পেইন",
    preview: {
      bg: "from-rose-500 to-pink-600",
      emoji: "🎊",
      title: "Festival Special",
      subtitle: "সকল উৎসবে RAHEDEEN™",
      tag: "RAHEDEEN™",
    },
    format: "Multi-format Campaign",
    color: "border-rose-200 bg-rose-50",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    id: "signboard",
    label: "সাইনবোর্ড ডিজাইন",
    desc: "দোকানের সামনে RAHEDEEN™ অফিশিয়াল সাইন",
    preview: {
      bg: "from-brand-700 to-brand-900",
      emoji: "🏪",
      title: "RAHEDEEN™",
      subtitle: "Friendship Store",
      tag: "Official Partner",
    },
    format: "Flex Print / LED Sign",
    color: "border-brand-200 bg-brand-50",
    badge: "bg-brand-100 text-brand-700",
  },
];

export function MarketingShowcase() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          badge="মার্কেটিং সাপোর্ট"
          title="আমরা ডিজাইন করি — আপনি ব্যবহার করুন"
          subtitle="পার্টনার হওয়ার পর থেকেই আপনার দোকানের জন্য প্রফেশনাল মার্কেটিং উপকরণ তৈরি করে দেবে আমাদের ডিজাইন টিম। আলাদা কোনো খরচ নেই।"
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGNS.map((d) => (
            <div
              key={d.id}
              className={`rounded-3xl border-2 overflow-hidden hover:shadow-lg transition-shadow ${d.color}`}
            >
              {/* Mockup preview */}
              <div className="p-4">
                <div className={`h-44 rounded-2xl bg-gradient-to-br ${d.preview.bg} flex flex-col items-center justify-center relative overflow-hidden`}>
                  {/* Inner pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, white 2px, transparent 0)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <span className="relative text-4xl mb-2 drop-shadow-lg">{d.preview.emoji}</span>
                  <div className="relative text-center">
                    <div className="text-white font-black text-lg leading-none">{d.preview.title}</div>
                    <div className="text-white/75 text-xs mt-0.5">{d.preview.subtitle}</div>
                    <div className="mt-2 px-3 py-0.5 bg-white/20 border border-white/30 rounded-full text-xs text-white font-bold">
                      {d.preview.tag}
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="px-5 pb-5">
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">{d.label}</h3>
                <p className="text-xs text-gray-500 mb-3">{d.desc}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${d.badge}`}>
                    {d.format}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-brand-700 to-brand-800 text-white text-center">
          <p className="text-lg font-bold mb-1">সব ডিজাইন আপনার প্যাকেজে অন্তর্ভুক্ত</p>
          <p className="text-brand-200 text-sm">
            Standard ও Premium প্যাকেজে সমস্ত মার্কেটিং উপকরণ বিনামূল্যে পাওয়া যায়।
            নতুন ডিজাইনের জন্য অনুরোধ করুন — আমরা তৈরি করে দেবো।
          </p>
        </div>
      </div>
    </div>
  );
}
