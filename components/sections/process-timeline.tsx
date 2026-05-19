import { SectionHeader } from "@/components/ui/section";
import { ArrowRight, ArrowDown } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "RFQ & Brief",
    duration: "Day 1",
    description:
      "Submit your brief, tech pack, or reference samples. Our team responds within 24 hours with preliminary pricing, lead times, and MOQ confirmation.",
    color: "bg-brand-700",
    ring: "ring-brand-700/20",
    textAccent: "text-brand-700",
    bgLight: "bg-brand-50",
  },
  {
    num: "02",
    title: "Sampling",
    duration: "Days 2–14",
    description:
      "We develop sealed samples with approved fabrics, trims, and construction. Counter samples sent for buyer approval. Unlimited revisions until you're satisfied.",
    color: "bg-brand-600",
    ring: "ring-brand-600/20",
    textAccent: "text-brand-600",
    bgLight: "bg-brand-50",
  },
  {
    num: "03",
    title: "Order Confirmation",
    duration: "Days 14–16",
    description:
      "Sample approved, bulk fabric and trim ordered. Production schedule issued with weekly WIP checkpoints. Lab test orders placed.",
    color: "bg-brand-500",
    ring: "ring-brand-500/20",
    textAccent: "text-brand-500",
    bgLight: "bg-brand-50",
  },
  {
    num: "04",
    title: "Production",
    duration: "Weeks 4–10",
    description:
      "Inline QC at 20% and 50% completion. Buyer can audit at any stage. Random AQL 1.5 final inspection. Lab test reports shared on completion.",
    color: "bg-accent-600",
    ring: "ring-accent-600/20",
    textAccent: "text-accent-600",
    bgLight: "bg-accent-50",
  },
  {
    num: "05",
    title: "Finishing & Packing",
    duration: "Weeks 10–12",
    description:
      "Hangtag attachment, retail-ready packing per buyer EDI spec, carton construction and barcode scanning. Final QC walkthrough.",
    color: "bg-accent-500",
    ring: "ring-accent-500/20",
    textAccent: "text-accent-500",
    bgLight: "bg-accent-50",
  },
  {
    num: "06",
    title: "Shipment",
    duration: "Week 12–14",
    description:
      "FOB Chittagong or door-to-door. Full compliance documentation package: GCC, test reports, OEKO-TEX/GOTS certificates, packing list, invoice.",
    color: "bg-emerald-600",
    ring: "ring-emerald-600/20",
    textAccent: "text-emerald-600",
    bgLight: "bg-emerald-50",
  },
];

export function ProcessTimeline() {
  return (
    <div>
      <SectionHeader
        badge="Our Process"
        title="From Brief to Shelf in 12–14 Weeks"
        subtitle="A structured, transparent production process — designed to eliminate surprises for brand managers and sourcing teams."
        align="center"
      />

      {/* 3-col × 2-row grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
        {STEPS.map((step, i) => {
          const isLastInRow = (i + 1) % 3 === 0;    // col 3 (index 2, 5)
          const isLastStep = i === STEPS.length - 1;
          const isRowBreak = i === 2;               // end of row 1 → show down arrow

          return (
            <div key={step.num} className="relative flex gap-4 lg:block">
              {/* Card */}
              <div
                className={`flex-1 p-5 lg:p-6 rounded-2xl border border-gray-100 bg-white shadow-[0_1px_3px_0_rgb(0_0_0/0.06)] hover:shadow-[0_4px_16px_-4px_rgb(0_0_0/0.10)] transition-shadow group`}
              >
                {/* Top row: number badge + duration */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl ${step.color} ring-4 ${step.ring} text-white flex items-center justify-center shrink-0`}
                  >
                    <span className="text-xs font-bold">{step.num}</span>
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${step.bgLight} ${step.textAccent}`}
                  >
                    {step.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-base font-bold text-gray-900 mb-2 group-hover:${step.textAccent} transition-colors`}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow — horizontal (between cards in same row, desktop only) */}
              {!isLastInRow && !isLastStep && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </div>
              )}

              {/* Row-break down arrow (desktop: after step 03, below the card) */}
              {isRowBreak && (
                <div className="hidden lg:flex absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm items-center justify-center">
                  <ArrowDown className="w-3.5 h-3.5 text-gray-400" />
                </div>
              )}

              {/* Mobile connector (vertical line between cards) */}
              {!isLastStep && (
                <div className="flex sm:hidden absolute left-5 -bottom-3 w-px h-4 bg-gray-200" />
              )}
            </div>
          );
        })}
      </div>

      {/* Timeline label strip */}
      <div className="mt-10 flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-center">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <div className="w-3 h-3 rounded-sm bg-brand-700" />
          <span className="font-medium text-gray-600">Briefing → Confirmation</span>
          <span className="text-gray-300 mx-1">·</span>
          <div className="w-3 h-3 rounded-sm bg-accent-500" />
          <span className="font-medium text-gray-600">Production → Packing</span>
          <span className="text-gray-300 mx-1">·</span>
          <div className="w-3 h-3 rounded-sm bg-emerald-600" />
          <span className="font-medium text-gray-600">Shipment</span>
        </div>
      </div>
    </div>
  );
}
