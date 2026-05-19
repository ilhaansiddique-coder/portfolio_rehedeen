import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ExternalLink, ArrowRight, Store } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Find Our Stores — RAHEDEEN™ Friendship Store",
  description: "আপনার কাছের RAHEDEEN™ Friendship Store খুঁজুন। সারা বাংলাদেশে ২০০+ অফিশিয়াল পার্টনার স্টোর।",
};

const DIVISIONS = ["সব বিভাগ", "ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "বরিশাল", "সিলেট", "রংপুর", "ময়মনসিংহ"];

const STORES = [
  {
    id: 1,
    name: "রহিম কিডস ফ্যাশন",
    owner: "মো. রহিম উদ্দিন",
    division: "ঢাকা",
    district: "ঢাকা",
    upazila: "মিরপুর",
    address: "শপ ৫, মিরপুর-১০ শপিং কমপ্লেক্স, ঢাকা",
    phone: "01711-123456",
    facebook: "#",
    package: "Standard",
    packageColor: "bg-accent-100 text-accent-700",
    since: "২০২২",
  },
  {
    id: 2,
    name: "Little Stars Baby Shop",
    owner: "নাসরিন আক্তার",
    division: "চট্টগ্রাম",
    district: "চট্টগ্রাম",
    upazila: "আগ্রাবাদ",
    address: "রোড ৭, আগ্রাবাদ কমার্শিয়াল এলাকা, চট্টগ্রাম",
    phone: "01821-234567",
    facebook: "#",
    package: "Premium",
    packageColor: "bg-violet-100 text-violet-700",
    since: "২০২১",
  },
  {
    id: 3,
    name: "কিডজ কর্নার",
    owner: "আব্দুল করিম",
    division: "রাজশাহী",
    district: "রাজশাহী",
    upazila: "সদর",
    address: "কোর্ট বাজার রোড, রাজশাহী সদর",
    phone: "01612-345678",
    facebook: "#",
    package: "Basic",
    packageColor: "bg-brand-100 text-brand-700",
    since: "২০২৩",
  },
  {
    id: 4,
    name: "মিনি মি বেবি স্টোর",
    owner: "ফারহানা বেগম",
    division: "ঢাকা",
    district: "নারায়ণগঞ্জ",
    upazila: "সদর",
    address: "চাষাড়া বাজার, নারায়ণগঞ্জ সদর",
    phone: "01912-456789",
    facebook: "#",
    package: "Standard",
    packageColor: "bg-accent-100 text-accent-700",
    since: "২০২২",
  },
  {
    id: 5,
    name: "সানশাইন কিডস",
    owner: "মো. জালাল উদ্দিন",
    division: "সিলেট",
    district: "সিলেট",
    upazila: "জিন্দাবাজার",
    address: "বন্দরবাজার রোড, সিলেট সদর",
    phone: "01511-567890",
    facebook: "#",
    package: "Premium",
    packageColor: "bg-violet-100 text-violet-700",
    since: "২০২১",
  },
  {
    id: 6,
    name: "হ্যাপি কিডস ফ্যাশন",
    owner: "রেহেনা পারভিন",
    division: "খুলনা",
    district: "খুলনা",
    upazila: "দৌলতপুর",
    address: "নিউ মার্কেট, দৌলতপুর, খুলনা",
    phone: "01711-678901",
    facebook: "#",
    package: "Basic",
    packageColor: "bg-brand-100 text-brand-700",
    since: "২০২৩",
  },
  {
    id: 7,
    name: "ড্রিম কিডজ",
    owner: "শাহিন আলম",
    division: "ময়মনসিংহ",
    district: "ময়মনসিংহ",
    upazila: "সদর",
    address: "স্টেশন রোড মার্কেট, ময়মনসিংহ সদর",
    phone: "01811-789012",
    facebook: "#",
    package: "Standard",
    packageColor: "bg-accent-100 text-accent-700",
    since: "২০২২",
  },
  {
    id: 8,
    name: "বর্ণালি বেবি শপ",
    owner: "সালমা বেগম",
    division: "বরিশাল",
    district: "বরিশাল",
    upazila: "চকবাজার",
    address: "চকবাজার এলাকা, বরিশাল সদর",
    phone: "01611-890123",
    facebook: "#",
    package: "Basic",
    packageColor: "bg-brand-100 text-brand-700",
    since: "২০২৩",
  },
  {
    id: 9,
    name: "তারা শিশু নিকেতন",
    owner: "কামাল হোসেন",
    division: "রংপুর",
    district: "রংপুর",
    upazila: "সদর",
    address: "কেরামতিয়া বাজার, রংপুর সদর",
    phone: "01711-901234",
    facebook: "#",
    package: "Standard",
    packageColor: "bg-accent-100 text-accent-700",
    since: "২০২২",
  },
];

const DIVISION_COUNTS = DIVISIONS.slice(1).map((div) => ({
  name: div,
  count: STORES.filter((s) => s.division === div).length,
}));

export default function StoreFinderPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-brand-950 to-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="accent" className="mb-4">অফিশিয়াল পার্টনার স্টোর</Badge>
          <h1 className="text-4xl font-bold mb-4">আপনার কাছের স্টোর খুঁজুন</h1>
          <p className="text-brand-200 text-lg mb-8">
            সারা বাংলাদেশে আমাদের ২০০+ অফিশিয়াল Friendship Store পার্টনার। আপনার জেলা বা
            বিভাগের কাছের স্টোর থেকে সরাসরি কিনুন।
          </p>

          {/* Division breakdown */}
          <div className="flex flex-wrap justify-center gap-2">
            {DIVISION_COUNTS.map((d) => (
              <div key={d.name} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
                <span className="text-white font-semibold">{d.name}</span>
                {d.count > 0 && (
                  <span className="ml-2 px-1.5 py-0.5 rounded-full bg-accent-500 text-white text-xs font-bold">
                    {d.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Store grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">{STORES.length} স্টোর</span> তালিকাভুক্ত
            (নমুনা তথ্য)
          </p>
          <div className="text-xs text-brand-600 font-medium bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-full">
            আপডেট: মে ২০২৫
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STORES.map((store) => (
            <div
              key={store.id}
              className="bg-white border border-gray-100 rounded-3xl p-5 hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0">
                    <Store className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">{store.name}</h3>
                    <p className="text-xs text-gray-400">{store.owner}</p>
                  </div>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold shrink-0 ${store.packageColor}`}>
                  {store.package}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-start gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-500 leading-relaxed">{store.address}</p>
              </div>

              {/* Division/District chips */}
              <div className="flex gap-1.5 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                  {store.division}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                  {store.district}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-3 border-t border-gray-50">
                <a
                  href={`tel:${store.phone}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-brand-50 text-brand-700 text-xs font-semibold hover:bg-brand-100 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {store.phone}
                </a>
                <a
                  href={store.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                  aria-label="Facebook Page"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Since */}
              <p className="text-xs text-gray-300 text-center mt-2">পার্টনার: {store.since} থেকে</p>
            </div>
          ))}
        </div>

        {/* Load more note */}
        <div className="mt-10 p-6 rounded-3xl bg-brand-50 border border-brand-100 text-center">
          <p className="text-sm font-semibold text-gray-900 mb-1">আরও স্টোর যোগ হচ্ছে</p>
          <p className="text-xs text-gray-500 mb-4">
            প্রতি মাসে নতুন Friendship Store পার্টনার যোগ হচ্ছে সারা বাংলাদেশে।
            আপনার এলাকায় এখনও পার্টনার নেই? সেই সুযোগ কাজে লাগান!
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-xl transition-all text-sm"
          >
            আপনার এলাকায় পার্টনার হন <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
