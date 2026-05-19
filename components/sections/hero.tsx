"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TRUST_SIGNALS = [
  "CPSIA & OEKO-TEX Certified",
  "300 pcs MOQ",
  "10–14 day sampling",
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden gradient-hero">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-600/30 blur-[80px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent-500/20 blur-[80px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="accent" className="mb-6">
                Bangladesh — Est. 2009
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Kids Apparel.{" "}
              <span className="text-accent-400">Engineered</span> for Global
              Retail.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-brand-200 leading-relaxed max-w-lg"
            >
              Precision-manufactured children&apos;s garments (0–14 years) for
              EU, UK, USA, and Scandinavian retail brands. Private label, OEM,
              cut-and-sew — from 300 pieces.
            </motion.p>

            {/* Trust signals */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3"
            >
              {TRUST_SIGNALS.map((signal) => (
                <li
                  key={signal}
                  className="flex items-center gap-2 text-sm text-brand-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                  {signal}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <Button size="xl" variant="accent" asChild>
                <Link href="/contact/rfq">
                  Request a Quote
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/case-studies">See Our Work</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right — Stats card grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: "500+", label: "Skilled Workers", desc: "On-site production team" },
              { value: "6M+", label: "Pieces / Year", desc: "Annual production capacity" },
              { value: "15+", label: "Export Markets", desc: "EU, UK, USA, Scandinavia & more" },
              { value: "99.4%", label: "First-Pass QC", desc: "AQL 1.5 standard, inline QC" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15"
              >
                <div className="text-3xl font-bold text-accent-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-brand-300">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-brand-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
