import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title = "Ready to Source Your Next Collection?",
  subtitle = "Share your tech pack, reference, or brief. Our merchandising team responds within 24 hours with lead times, MOQ, and pricing.",
  primaryLabel = "Request a Quote",
  primaryHref = "/contact/rfq",
  secondaryLabel = "View Case Studies",
  secondaryHref = "/case-studies",
}: CTABannerProps) {
  return (
    <div className="relative overflow-hidden gradient-brand">
      {/* Pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-accent-500 flex items-center justify-center">
                <FileText className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-xs font-semibold text-brand-200 uppercase tracking-widest">
                Start Here
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {title}
            </h2>
            <p className="text-brand-200 text-lg leading-relaxed max-w-xl">{subtitle}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button size="xl" variant="accent" asChild>
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>

        {/* Trust micro-copy */}
        <div className="mt-8 pt-8 border-t border-white/15 flex flex-wrap gap-6">
          {[
            { icon: Mail, text: "Response within 24 hours" },
            { icon: FileText, text: "Free tech pack review" },
            { icon: ArrowRight, text: "No commitment required" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-brand-200">
              <Icon className="w-4 h-4 text-accent-400" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
