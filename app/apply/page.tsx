"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Store, User, Phone, MapPin, ShoppingBag, Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const schema = z.object({
  shopName: z.string().min(2, "দোকানের নাম দিন"),
  ownerName: z.string().min(2, "মালিকের নাম দিন"),
  phone: z.string().min(11, "সঠিক ফোন নম্বর দিন"),
  email: z.string().email("সঠিক ইমেইল দিন").optional().or(z.literal("")),
  businessType: z.string().min(1, "ব্যবসার ধরন বেছে নিন"),
  division: z.string().min(1, "বিভাগ বেছে নিন"),
  district: z.string().min(2, "জেলা লিখুন"),
  upazila: z.string().min(2, "উপজেলা / এলাকা লিখুন"),
  monthlySales: z.string().min(1, "আনুমানিক মাসিক বিক্রয় বেছে নিন"),
  packageChoice: z.string().min(1, "প্যাকেজ বেছে নিন"),
  facebookPage: z.string().optional(),
  message: z.string().optional(),
  _honey: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

const DIVISIONS = ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "বরিশাল", "সিলেট", "রংপুর", "ময়মনসিংহ"];
const BUSINESS_TYPES = [
  "কিডস ফ্যাশন শপ",
  "বেবি শপ",
  "জেনারেল ক্লোদিং রিটেইলার",
  "অনলাইন সেলার (Facebook/Daraz)",
  "শোরুম",
  "ভিলেজ ফ্যাশন স্টোর",
  "অন্যান্য",
];
const MONTHLY_SALES = [
  "৳৫০,০০০ এর নিচে",
  "৳৫০,০০০ – ৳১,০০,০০০",
  "৳১,০০,০০০ – ৳৩,০০,০০০",
  "৳৩,০০,০০০ – ৳৫,০০,০০০",
  "৳৫,০০,০০০ এর বেশি",
];

const STEPS = [
  { step: "01", label: "আবেদন জমা দিন", desc: "অনলাইন ফর্ম পূরণ করুন" },
  { step: "02", label: "যাচাই প্রক্রিয়া", desc: "৪৮ ঘণ্টার মধ্যে কল" },
  { step: "03", label: "চুক্তি স্বাক্ষর", desc: "ডিজিটাল বা সরাসরি" },
  { step: "04", label: "পার্টনার অ্যাক্টিভ", desc: "লাইসেন্স ও সুবিধা শুরু" },
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (data._honey) return;
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">আবেদন সফল হয়েছে!</h2>
          <p className="text-gray-500 mb-6">
            আপনার আবেদন পেয়েছি। ৪৮ ঘণ্টার মধ্যে আমাদের টিম আপনার সাথে যোগাযোগ করবে।
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/friendship-store" className="px-6 py-3 bg-brand-700 text-white font-semibold rounded-xl">
              প্রোগ্রাম সম্পর্কে জানুন
            </Link>
            <Link href="/" className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl">
              হোমে ফিরুন
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-brand-950 to-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="accent" className="mb-4">পার্টনারশিপ আবেদন</Badge>
          <h1 className="text-4xl font-bold mb-4">Friendship Store-এ যোগ দিন</h1>
          <p className="text-brand-200 text-lg">
            ফর্মটি পূরণ করুন — আমাদের টিম ৪৮ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।
          </p>
        </div>
      </div>

      {/* Process steps */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.step} className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${i === 0 ? "bg-brand-700 text-white" : "bg-gray-100 text-gray-500"}`}>
                  {s.step}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">{s.label}</div>
                  <div className="text-xs text-gray-400">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Honeypot */}
          <input type="text" {...register("_honey")} className="hidden" tabIndex={-1} />

          {/* Section: Shop Info */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <Store className="w-5 h-5 text-brand-600" /> দোকানের তথ্য
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="shopName" className="mb-1.5 block text-sm font-medium">দোকানের নাম *</Label>
                <Input id="shopName" placeholder="যেমন: রহিম কিডস ফ্যাশন" {...register("shopName")} />
                {errors.shopName && <p className="text-xs text-red-500 mt-1">{errors.shopName.message}</p>}
              </div>
              <div>
                <Label htmlFor="businessType" className="mb-1.5 block text-sm font-medium">ব্যবসার ধরন *</Label>
                <Select id="businessType" {...register("businessType")}>
                  <option value="">বেছে নিন</option>
                  {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </Select>
                {errors.businessType && <p className="text-xs text-red-500 mt-1">{errors.businessType.message}</p>}
              </div>
              <div>
                <Label htmlFor="facebookPage" className="mb-1.5 block text-sm font-medium">
                  <span className="flex items-center gap-1.5"><Link2 className="w-3.5 h-3.5" /> ফেসবুক পেজ লিংক (ঐচ্ছিক)</span>
                </Label>
                <Input id="facebookPage" placeholder="https://facebook.com/yourpage" {...register("facebookPage")} />
              </div>
              <div>
                <Label htmlFor="monthlySales" className="mb-1.5 block text-sm font-medium">
                  <span className="flex items-center gap-1.5"><ShoppingBag className="w-3.5 h-3.5" /> আনুমানিক মাসিক বিক্রয় *</span>
                </Label>
                <Select id="monthlySales" {...register("monthlySales")}>
                  <option value="">বেছে নিন</option>
                  {MONTHLY_SALES.map((s) => <option key={s} value={s}>{s}</option>)}
                </Select>
                {errors.monthlySales && <p className="text-xs text-red-500 mt-1">{errors.monthlySales.message}</p>}
              </div>
            </div>
          </div>

          {/* Section: Owner Info */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <User className="w-5 h-5 text-brand-600" /> মালিকের তথ্য
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="ownerName" className="mb-1.5 block text-sm font-medium">মালিকের নাম *</Label>
                <Input id="ownerName" placeholder="আপনার পূর্ণ নাম" {...register("ownerName")} />
                {errors.ownerName && <p className="text-xs text-red-500 mt-1">{errors.ownerName.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> ফোন নম্বর *</span>
                </Label>
                <Input id="phone" placeholder="01XXXXXXXXX" {...register("phone")} />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email" className="mb-1.5 block text-sm font-medium">ইমেইল (ঐচ্ছিক)</Label>
                <Input id="email" type="email" placeholder="example@gmail.com" {...register("email")} />
              </div>
            </div>
          </div>

          {/* Section: Location */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-600" /> অবস্থান
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <Label htmlFor="division" className="mb-1.5 block text-sm font-medium">বিভাগ *</Label>
                <Select id="division" {...register("division")}>
                  <option value="">বেছে নিন</option>
                  {DIVISIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                </Select>
                {errors.division && <p className="text-xs text-red-500 mt-1">{errors.division.message}</p>}
              </div>
              <div>
                <Label htmlFor="district" className="mb-1.5 block text-sm font-medium">জেলা *</Label>
                <Input id="district" placeholder="যেমন: নারায়ণগঞ্জ" {...register("district")} />
                {errors.district && <p className="text-xs text-red-500 mt-1">{errors.district.message}</p>}
              </div>
              <div>
                <Label htmlFor="upazila" className="mb-1.5 block text-sm font-medium">উপজেলা / এলাকা *</Label>
                <Input id="upazila" placeholder="যেমন: সদর" {...register("upazila")} />
                {errors.upazila && <p className="text-xs text-red-500 mt-1">{errors.upazila.message}</p>}
              </div>
            </div>
          </div>

          {/* Section: Package */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-5">পছন্দের প্যাকেজ</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              {[
                { id: "basic", name: "Friendship Basic", price: "৳৩০,০০০/বছর", color: "border-brand-300 bg-brand-50" },
                { id: "standard", name: "Friendship Standard", price: "৳৫৫,০০০/বছর", color: "border-accent-300 bg-accent-50" },
                { id: "premium", name: "Friendship Premium", price: "৳৮৫,০০০/বছর", color: "border-violet-300 bg-violet-50" },
              ].map((pkg) => (
                <label key={pkg.id} className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer hover:shadow-sm transition-all ${pkg.color}`}>
                  <input type="radio" value={pkg.id} {...register("packageChoice")} className="mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">{pkg.name}</div>
                    <div className="text-xs text-gray-500">{pkg.price}</div>
                  </div>
                </label>
              ))}
            </div>
            {errors.packageChoice && <p className="text-xs text-red-500">{errors.packageChoice.message}</p>}
            <div>
              <Label htmlFor="message" className="mb-1.5 block text-sm font-medium">অতিরিক্ত বার্তা (ঐচ্ছিক)</Label>
              <Textarea id="message" rows={3} placeholder="আপনার দোকান সম্পর্কে বা প্রশ্ন থাকলে লিখুন..." {...register("message")} />
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" size="xl" disabled={isSubmitting} className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold">
            {isSubmitting ? "পাঠানো হচ্ছে..." : "আবেদন জমা দিন"}
            {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>

          <p className="text-center text-xs text-gray-400">
            আবেদন করে আপনি RAHEDEEN™-এর{" "}
            <Link href="/guidelines" className="text-brand-600 hover:underline">পার্টনার নির্দেশিকা</Link>{" "}
            পড়তে সম্মত হচ্ছেন।
          </p>
        </form>
      </div>
    </>
  );
}
