import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  market: string;
  season?: string;
  description: string;
  tags: string[];
  results: string[];
  publishedAt: string;
}

export function CaseStudyCard({
  slug,
  title,
  client,
  market,
  season,
  description,
  tags,
  results,
  publishedAt,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group flex flex-col rounded-3xl bg-white border border-gray-100 hover:border-brand-200 shadow-[0_1px_3px_0_rgb(0_0_0/0.06)] hover:shadow-[0_8px_32px_-8px_rgb(0_0_0/0.12)] transition-all duration-300 overflow-hidden"
    >
      {/* Color accent top bar */}
      <div className="h-1 w-full gradient-brand group-hover:h-1.5 transition-all" />

      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Badge variant="default">{market}</Badge>
          {season && <Badge variant="accent">{season}</Badge>}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{description}</p>

        {/* Results */}
        {results.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {results.slice(0, 3).map((r) => (
              <li key={r} className="flex items-center gap-2 text-xs text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="text-sm font-semibold text-gray-800">{client}</div>
            <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
              <Calendar className="w-3 h-3" />
              {formatDate(publishedAt)}
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-brand-700 group-hover:gap-2.5 transition-all">
            Read
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
