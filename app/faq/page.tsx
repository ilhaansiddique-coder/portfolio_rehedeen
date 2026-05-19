"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FAQS = [
  {
    category: "প্রোগ্রাম সম্পর্কে",
    items: [
      {
        q: "Friendship Store কি ফ্র্যাঞ্চাইজি?",
        a: "না। Friendship Store একটি 'Brand Supported Partnership' — ফ্র্যাঞ্চাইজি নয়। আপনাকে বিশাল ফ্র্যাঞ্চাইজি ফি দিতে হবে না, দোকানের মালিকানা সম্পূর্ণ আপনার থাকবে এবং আপনি নিজের নিয়মে ব্যবসা পরিচালনা করতে পারবেন। RAHEDEEN™ শুধু ব্র্যান্ড লাইসেন্স, মার্কেটিং সাপোর্ট ও অতিরিক্ত ছাড় প্রদান করে।",
      },
      {
        q: "Friendship Store প্রোগ্রামে যোগ দিতে কত টাকা লাগে?",
        a: "Basic প্যাকেজ ৳৩০,০০০/বছর, Standard প্যাকেজ ৳৫৫,০০০/বছর, এবং Premium প্যাকেজ ৳৮৫,০০০/বছর। প্রতিটি প্যাকেজ বার্ষিক নবায়নযোগ্য — কোনো লক-ইন নেই।",
      },
      {
        q: "পার্টনারশিপ চুক্তির মেয়াদ কত?",
        a: "১ বছর। প্রতি বছর নবায়ন করা হয়। চাইলে যেকোনো বছর নবায়ন না করার অধিকার আপনার আছে। কোনো দীর্ঘমেয়াদী বাধ্যবাধকতা নেই।",
      },
    ],
  },
  {
    category: "পাইকারি ক্রয় ও ছাড়",
    items: [
      {
        q: "Friendship Store পার্টনার হলে কি ধরনের ছাড় পাওয়া যায়?",
        a: "সাধারণ পাইকারি মূল্যের উপর অতিরিক্ত ৩% ছাড় পাবেন প্রতিটি অর্ডারে। উদাহরণ: মাসে ৳২,০০,০০০ ক্রয়ে মাসিক ৳৬,০০০ এবং বার্ষিক ৳৭২,০০০ সাশ্রয় — প্যাকেজ মূল্য বাদে নিট ৳৪২,০০০ সাশ্রয়।",
      },
      {
        q: "সর্বনিম্ন মাসিক ক্রয়ের শর্ত আছে কি?",
        a: "Basic প্যাকেজে মাসিক সর্বনিম্ন ক্রয় নেই। Standard ও Premium প্যাকেজে মাসিক সর্বনিম্ন ক্রয়ের লক্ষ্যমাত্রা আছে — বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।",
      },
      {
        q: "ব্র্যান্ড নাম ব্যবহার করে অনলাইনে বিক্রি করা যাবে?",
        a: "হ্যাঁ, Standard ও Premium প্যাকেজে অনলাইন বিক্রয়ের অনুমতি অন্তর্ভুক্ত। তবে ব্র্যান্ড গাইডলাইন মেনে চলতে হবে — ব্র্যান্ড লোগো ও নাম সঠিকভাবে ব্যবহার করতে হবে।",
      },
    ],
  },
  {
    category: "মার্কেটিং সাপোর্ট",
    items: [
      {
        q: "কি ধরনের মার্কেটিং সাপোর্ট পাওয়া যায়?",
        a: "আপনার প্যাকেজ অনুযায়ী: ঈদ অফার পোস্টার, ফেসবুক স্টোরি ডিজাইন, WhatsApp স্ট্যাটাস, ডিসকাউন্ট ব্যানার, ফেস্টিভাল ক্যাম্পেইন ম্যাটেরিয়াল, দোকানের সাইনবোর্ড ডিজাইন। Standard ও Premium প্যাকেজে সব ডিজাইন বিনামূল্যে পাওয়া যায়।",
      },
      {
        q: "RAHEDEEN™-এর ওয়েবসাইটে কি আমার দোকান তালিকাভুক্ত হবে?",
        a: "হ্যাঁ। সব Friendship Store পার্টনার RAHEDEEN™-এর অফিশিয়াল ওয়েবসাইটের 'Find Our Stores' বিভাগে তালিকাভুক্ত হবেন। এতে স্থানীয় গ্রাহকরা সহজেই আপনার দোকান খুঁজে পাবেন।",
      },
      {
        q: "ফেসবুক পেজ বা গ্রুপে আমাদের সাথে যোগযোগ করা যাবে?",
        a: "হ্যাঁ। সব পার্টনার RAHEDEEN™ অফিশিয়াল পার্টনার গ্রুপে যোগ দিতে পারবেন। সেখানে নতুন কালেকশনের আপডেট, মার্কেটিং টিপস, ও অন্যান্য পার্টনারদের সাথে যোগাযোগের সুযোগ পাবেন।",
      },
    ],
  },
  {
    category: "আবেদন প্রক্রিয়া",
    items: [
      {
        q: "কিভাবে Friendship Store পার্টনার হওয়ার আবেদন করবো?",
        a: "অনলাইন ফর্মটি পূরণ করুন — দোকানের তথ্য, মালিকের তথ্য, অবস্থান ও পছন্দের প্যাকেজ দিন। আবেদনের ৪৮ ঘণ্টার মধ্যে আমাদের টিম আপনাকে ফোন করবে।",
      },
      {
        q: "কোন ধরনের ব্যবসা আবেদন করতে পারবে?",
        a: "কিডস ফ্যাশন শপ, বেবি শপ, জেনারেল ক্লোদিং রিটেইলার, অনলাইন সেলার (Facebook/Daraz), শোরুম ও ভিলেজ ফ্যাশন স্টোর — সব ধরনের ব্যবসা আবেদন করতে পারবে।",
      },
      {
        q: "আবেদনের পর কতদিনের মধ্যে পার্টনার হওয়া যায়?",
        a: "আবেদনের পর: ৪৮ ঘণ্টায় আমাদের টিম কল করবে → যাচাই প্রক্রিয়া → ডিজিটাল বা সরাসরি চুক্তি স্বাক্ষর → ৭-১০ কার্যদিবসের মধ্যে পার্টনার অ্যাক্টিভ হবে।",
      },
    ],
  },
  {
    category: "এলাকা ও টেরিটরি",
    items: [
      {
        q: "একই এলাকায় কয়টি Friendship Store হতে পারে?",
        a: "প্রতিটি উপজেলায় সর্বোচ্চ ২-৩টি Friendship Store পার্টনার নেওয়া হয়। Premium পার্টনারদের নির্দিষ্ট এলাকায় একচেটিয়া (exclusive) অধিকার দেওয়া হতে পারে।",
      },
      {
        q: "একটি এলাকায় কি আগেই পূর্ণ হয়ে গেছে?",
        a: "আবেদন করার পর আমরা আপনার এলাকার অবস্থান জানাবো। যদি আপনার নির্দিষ্ট এলাকায় আসন পূর্ণ হয়ে থাকে, তাহলে নিকটতম এলাকায় সুযোগ আছে কিনা জানাবো।",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-gray-900 pr-4">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 pt-1">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-brand-950 to-brand-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="accent" className="mb-4">সাধারণ প্রশ্ন ও উত্তর</Badge>
          <h1 className="text-4xl font-bold mb-4">আপনার প্রশ্নের উত্তর</h1>
          <p className="text-brand-200 text-lg">
            Friendship Store প্রোগ্রাম সম্পর্কে সবচেয়ে বেশি জিজ্ঞেস করা প্রশ্নগুলোর উত্তর।
            আরও প্রশ্ন থাকলে সরাসরি WhatsApp-এ যোগাযোগ করুন।
          </p>
        </div>
      </div>

      {/* FAQ content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {FAQS.map((section) => (
          <div key={section.category}>
            <h2 className="text-base font-bold text-brand-700 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-500 inline-block" />
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.items.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        {/* Still have questions */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-700 to-brand-800 text-white text-center">
          <div className="text-2xl mb-3">💬</div>
          <h3 className="text-lg font-bold mb-2">আরও প্রশ্ন আছে?</h3>
          <p className="text-brand-200 text-sm mb-5">
            আমাদের টিম WhatsApp, ফোন বা ইমেইলে সাহায্য করতে প্রস্তুত।
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp করুন
            </a>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-500 hover:bg-accent-400 text-white font-semibold rounded-xl transition-all"
            >
              আবেদন করুন <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
