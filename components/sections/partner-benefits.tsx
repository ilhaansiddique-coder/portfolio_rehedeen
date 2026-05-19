import { Shield, Palette, TrendingUp, Users, Headphones, Tag, Star, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";

const BENEFITS = [
  {
    icon: Shield,
    title: "ব্র্যান্ড আইডেন্টিটি",
    titleEn: "Brand Identity",
    desc: "RAHEDEEN™-এর অফিশিয়াল লোগো ও ব্র্যান্ড ব্যবহারের লাইসেন্স পান। আপনার দোকান একটি স্বীকৃত ব্র্যান্ড হিসেবে পরিচিত হবে।",
    color: "bg-brand-50 text-brand-700",
    iconBg: "bg-brand-100",
  },
  {
    icon: Palette,
    title: "মার্কেটিং সাপোর্ট",
    titleEn: "Marketing Support",
    desc: "ঈদ পোস্টার, ফেসবুক স্টোরি, হোয়াটসঅ্যাপ স্ট্যাটাস, ক্যাম্পেইন ব্যানার — সব আমরা ডিজাইন করে দিই।",
    color: "bg-accent-50 text-accent-700",
    iconBg: "bg-accent-100",
  },
  {
    icon: Headphones,
    title: "ডিজাইন সাপোর্ট",
    titleEn: "Design Support",
    desc: "প্রফেশনাল গ্রাফিক ডিজাইন টিম আপনার যেকোনো মার্কেটিং উপকরণ তৈরি করতে সাহায্য করবে।",
    color: "bg-purple-50 text-purple-700",
    iconBg: "bg-purple-100",
  },
  {
    icon: Users,
    title: "ব্যবসায়িক গাইডেন্স",
    titleEn: "Business Guidance",
    desc: "অভিজ্ঞ ব্যবসায়িক পরামর্শদাতা দল আপনার বিক্রয় কৌশল, স্টক ম্যানেজমেন্ট ও গ্রাহক ধরে রাখার বিষয়ে সহায়তা করবে।",
    color: "bg-emerald-50 text-emerald-700",
    iconBg: "bg-emerald-100",
  },
  {
    icon: Star,
    title: "বিশ্বস্ত গ্রাহক ইম্প্রেশন",
    titleEn: "Customer Trust",
    desc: "RAHEDEEN™ ব্র্যান্ডের পরিচিতি আপনার দোকানে গ্রাহকের আস্থা বহুগুণে বাড়িয়ে দেবে।",
    color: "bg-rose-50 text-rose-700",
    iconBg: "bg-rose-100",
  },
  {
    icon: TrendingUp,
    title: "প্রবৃদ্ধির সুযোগ",
    titleEn: "Growth Opportunity",
    desc: "Friendship Store থেকে Exclusive Store — আপনার পারফরম্যান্স অনুযায়ী আপগ্রেডের সুযোগ সবসময় খোলা।",
    color: "bg-teal-50 text-teal-700",
    iconBg: "bg-teal-100",
  },
  {
    icon: Tag,
    title: "অতিরিক্ত ৩% ছাড়",
    titleEn: "3% Wholesale Discount",
    desc: "পার্টনার হিসেবে সাধারণ পাইকারি মূল্যের উপর অতিরিক্ত ৩% ছাড় পাবেন। বেশি কিনুন, বেশি সাশ্রয় করুন।",
    color: "bg-violet-50 text-violet-700",
    iconBg: "bg-violet-100",
  },
  {
    icon: Rocket,
    title: "আর্লি প্রোডাক্ট অ্যাক্সেস",
    titleEn: "Early Access",
    desc: "নতুন কালেকশন ও ঈদ কালেকশন সাধারণ বাজারে আসার আগেই আপনি অর্ডার করতে পারবেন।",
    color: "bg-sky-50 text-sky-700",
    iconBg: "bg-sky-100",
  },
];

export function PartnerBenefits() {
  return (
    <div id="benefits" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          badge="পার্টনার সুবিধা"
          title="যা পাবেন পার্টনার হিসেবে"
          subtitle="একটি প্যাকেজে এতকিছু — অফিশিয়াল লাইসেন্স থেকে শুরু করে ডিজাইন সাপোর্ট পর্যন্ত। আপনার ব্যবসার বৃদ্ধিই আমাদের লক্ষ্য।"
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`group p-5 rounded-2xl border border-gray-100 hover:border-current/20 hover:shadow-md transition-all duration-300 ${b.color} bg-opacity-30`}
                style={{ background: undefined }}
              >
                <div className={`w-10 h-10 rounded-xl ${b.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${b.color.split(" ")[1]}`} />
                </div>
                <div className="text-xs font-semibold text-gray-400 mb-0.5">{b.titleEn}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
