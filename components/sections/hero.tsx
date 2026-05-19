"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Download, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TRUST_SIGNALS = [
  "অফিশিয়াল লাইসেন্স ও ব্র্যান্ড ব্যবহার অনুমতি",
  "ঈদ পোস্টার · ফেসবুক স্টোরি · ক্যাম্পেইন ডিজাইন সহ",
  "অতিরিক্ত ৩% পাইকারি ছাড়",
  "ব্যবসায়িক গাইডেন্স ও দীর্ঘমেয়াদী প্রবৃদ্ধি",
];

const PRODUCT_VISUALS = [
  {
    image: "/images/hero/baby.webp",
    label: "Baby Collection",
    sub: "নবজাতক – ২৪ মাস",
    count: "25+ styles",
    bg: "bg-violet-50",
  },
  {
    image: "/images/hero/boys.webp",
    label: "Boys Collection",
    sub: "২ – ১৪ বছর",
    count: "40+ styles",
    bg: "bg-brand-50",
  },
  {
    image: "/images/hero/girls.webp",
    label: "Girls Collection",
    sub: "২ – ১৪ বছর",
    count: "50+ styles",
    bg: "bg-pink-50",
  },
  {
    image: "/images/hero/festival.webp",
    label: "Festival / Eid",
    sub: "বিশেষ কালেকশন",
    count: "20+ styles",
    bg: "bg-emerald-50",
  },
];

const CTABUTTONS = [
  { label: "Become a Partner", href: "/apply", variant: "accent" as const, icon: ArrowRight },
  { label: "View Products", href: "/products", variant: "outline" as const, icon: null },
  { label: "Download Profile", href: "/contact", variant: "outline" as const, icon: Download },
  { label: "WhatsApp Us", href: "https://wa.me/8801234567890", variant: "outline" as const, icon: MessageCircle },
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Rich layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#312e81]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent-500/8" />

      {/* Dot grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-16 items-center">

          {/* ── Left: Text ───────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-5"
            >
              <Badge variant="accent">🇧🇩 বাংলাদেশের বিশ্বস্ত ব্র্যান্ড</Badge>
              <Badge variant="outline" className="border-white/20 text-white/65 bg-white/8 text-xs">
                Est. 2009 · BGMEA Member
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] tracking-tight"
            >
              Grow Your{" "}
              <span className="text-accent-400">Kids Fashion</span>
              <br />
              Business with{" "}
              <span className="relative">
                RAHEDEEN™
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-400 to-transparent rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-lg sm:text-xl text-brand-200 leading-relaxed max-w-xl"
            >
              Premium Kidswear + Brand Supported Partnership.{" "}
              <span className="text-white font-medium">Friendship Store — এটি ফ্র্যাঞ্চাইজি নয়।</span>
            </motion.p>

            {/* Trust signals */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 space-y-2.5"
            >
              {TRUST_SIGNALS.map((signal) => (
                <li key={signal} className="flex items-start gap-2.5 text-sm text-brand-200">
                  <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                  {signal}
                </li>
              ))}
            </motion.ul>

            {/* CTA grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-9 grid grid-cols-2 gap-3"
            >
              {CTABUTTONS.map((cta, i) => {
                const Icon = cta.icon;
                return (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    target={cta.href.startsWith("http") ? "_blank" : undefined}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 text-center ${
                      i === 0
                        ? "bg-accent-500 hover:bg-accent-400 text-white shadow-lg shadow-accent-500/30 hover:shadow-accent-400/40"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/35"
                    }`}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                    <span>{cta.label}</span>
                  </Link>
                );
              })}
            </motion.div>

            {/* Market chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-7 flex flex-wrap items-center gap-2"
            >
              <span className="text-xs text-brand-400 uppercase tracking-wide">Available in:</span>
              {["🇧🇩 Bangladesh", "🇺🇸 USA", "🇦🇺 Australia", "🌏 SEA", "🌍 Middle East"].map((m) => (
                <span
                  key={m}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/8 border border-white/12 text-white/65"
                >
                  {m}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Product Visual Grid ───────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main grid */}
              <div className="grid grid-cols-2 gap-4">
                {PRODUCT_VISUALS.map((pv, i) => (
                  <motion.div
                    key={pv.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className={`relative rounded-lg overflow-hidden group cursor-default bg-white`}
                  >
                    {/* Product image */}
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={pv.image}
                        alt={pv.label}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        sizes="240px"
                        unoptimized
                      />
                      <span className="absolute bottom-2 left-2 z-10 text-xs font-bold text-white bg-black/40 px-2.5 py-0.5 rounded-full">
                        {pv.count}
                      </span>
                    </div>

                    {/* Card label */}
                    <div className="bg-white px-3.5 py-2.5">
                      <div className="text-xs font-bold text-gray-900">{pv.label}</div>
                      <div className="text-xs text-gray-500">{pv.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center overlay badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-28 h-28"
              >
                {/* Soft glow behind */}
                <div className="absolute inset-2 rounded-full bg-accent-400/20 blur-lg" />

                {/* Rotating gradient dashed SVG ring — stays perfectly inside */}
                <svg
                  className="absolute inset-0 w-full h-full animate-spin"
                  style={{ animationDuration: "10s" }}
                  viewBox="0 0 112 112"
                >
                  <defs>
                    <linearGradient id="dashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="40%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#818CF8" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="56" cy="56" r="52"
                    fill="none"
                    stroke="url(#dashGrad)"
                    strokeWidth="2.5"
                    strokeDasharray="10 6"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Main badge */}
                <div className="absolute inset-[8px] rounded-full bg-gradient-to-br from-brand-900 to-brand-950 border border-accent-400/40 flex flex-col items-center justify-center">
                  <span className="text-[8px] font-bold text-accent-300/70 uppercase tracking-widest leading-none mb-0.5">Total</span>
                  <span className="text-accent-400 text-2xl font-black leading-none">135+</span>
                  <span className="text-white/50 text-[8px] font-medium tracking-wide mt-0.5">Styles</span>
                </div>
              </motion.div>

              {/* Partnership badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-4 p-4 rounded-2xl bg-white/10 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center shrink-0">
                    <span className="text-xl">🤝</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Friendship Store Program</div>
                    <div className="text-xs text-brand-300">৳30,000/year · Brand Supported Partnership</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-accent-400 ml-auto shrink-0" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-brand-400"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
