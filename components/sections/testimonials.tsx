"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import testimonialsData from "@/content/data/testimonials.json";

export function Testimonials() {
  const featured = testimonialsData.filter((t) => t.featured);
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? featured.length - 1 : a - 1));
  const next = () => setActive((a) => (a === featured.length - 1 ? 0 : a + 1));

  const t = featured[active];

  return (
    <div className="bg-brand-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          badge="Client Voices"
          title="What Buyers Say"
          subtitle="From Nordic retail groups to US DTC brands — hear from the teams who trust RaheDeen every season."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main testimonial */}
          <div className="lg:col-span-2 relative">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Quote className="w-10 h-10 text-accent-400 mb-6 opacity-80" />

              <blockquote className="text-xl sm:text-2xl text-white leading-relaxed font-medium mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                    ))}
                  </div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-sm text-brand-300">
                    {t.title} · {t.company}
                  </div>
                  <div className="text-xs text-brand-400 mt-0.5">{t.country}</div>
                </div>

                {/* Nav */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5 mt-4 justify-center">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === active ? "bg-accent-400 w-6" : "bg-white/20 w-1.5"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* All testimonials sidebar */}
          <div className="space-y-4">
            {featured.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={cn(
                  "w-full text-left p-4 rounded-2xl transition-all",
                  i === active
                    ? "bg-white/10 border border-white/20"
                    : "bg-white/5 border border-transparent hover:bg-white/8"
                )}
              >
                <div className="text-sm text-brand-200 line-clamp-2 mb-2">&ldquo;{item.quote}&rdquo;</div>
                <div className="text-xs font-semibold text-white">{item.author}</div>
                <div className="text-xs text-brand-400">{item.company} · {item.country}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
