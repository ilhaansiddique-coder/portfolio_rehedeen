import { StatCard } from "@/components/ui/stat-card";

const STATS = [
  {
    value: "500+",
    label: "Skilled Workers",
    description: "On-site, trained production team in Narayanganj",
  },
  {
    value: "6M+",
    label: "Pieces Per Year",
    description: "Annual production capacity across all lines",
  },
  {
    value: "15+",
    label: "Export Markets",
    description: "EU, UK, USA, Scandinavia, Southeast Asia",
  },
  {
    value: "99.4%",
    label: "First-Pass QC Rate",
    description: "AQL 1.5 inline quality control, buyer auditable",
  },
  {
    value: "300",
    label: "Min. Order (pcs)",
    description: "Per style, per colour — MOQ flexibility for brands",
  },
  {
    value: "14 days",
    label: "Sample Turnaround",
    description: "From approved tech pack to sealed sample",
  },
];

export function StatsStrip() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}
