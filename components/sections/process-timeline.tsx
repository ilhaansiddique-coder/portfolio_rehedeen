import { SectionHeader } from "@/components/ui/section";

const STEPS = [
  {
    num: "01",
    title: "RFQ & Brief",
    duration: "Day 1",
    description:
      "Submit your brief, tech pack, or reference samples. Our team responds within 24 hours with preliminary pricing, lead times, and MOQ confirmation.",
    color: "bg-brand-700",
  },
  {
    num: "02",
    title: "Sampling",
    duration: "Days 2–14",
    description:
      "We develop sealed samples with approved fabrics, trims, and construction. Counter samples sent for buyer approval. Unlimited revisions until you're satisfied.",
    color: "bg-brand-600",
  },
  {
    num: "03",
    title: "Order Confirmation",
    duration: "Days 14–16",
    description:
      "Sample approved, bulk fabric and trim ordered. Production schedule issued with weekly WIP checkpoints. Lab test orders placed.",
    color: "bg-brand-500",
  },
  {
    num: "04",
    title: "Production",
    duration: "Weeks 4–10",
    description:
      "Inline QC at 20% and 50% completion. Buyer can audit at any stage. Random AQL 1.5 final inspection. Lab test reports shared on completion.",
    color: "bg-accent-600",
  },
  {
    num: "05",
    title: "Finishing & Packing",
    duration: "Weeks 10–12",
    description:
      "Hangtag attachment, retail-ready packing per buyer EDI spec, carton construction and barcode scanning. Final QC walkthrough.",
    color: "bg-accent-500",
  },
  {
    num: "06",
    title: "Shipment",
    duration: "Week 12–14",
    description:
      "FOB Chittagong or door-to-door. Full compliance documentation package: GCC, test reports, OEKO-TEX/GOTS certificates, packing list, invoice.",
    color: "bg-emerald-600",
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

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gray-200 lg:hidden" />
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gray-200" />

        <div className="grid lg:grid-cols-6 gap-6 lg:gap-4">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative pl-16 sm:pl-20 lg:pl-0">
              {/* Step number circle */}
              <div
                className={`absolute left-0 top-0 lg:static lg:mb-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-12 lg:h-12 rounded-2xl ${step.color} text-white flex flex-col items-center justify-center shrink-0`}
              >
                <span className="text-[10px] font-bold opacity-70 leading-none">{step.num}</span>
              </div>

              <div className="lg:mt-6">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                  {step.duration}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
