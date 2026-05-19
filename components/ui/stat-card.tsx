"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function StatCard({ value, label, description, className }: StatCardProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_1px_3px_0_rgb(0_0_0/0.06)] transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      <div className="text-4xl sm:text-5xl font-bold text-brand-700 tracking-tight mb-2">
        {value}
      </div>
      <div className="text-base font-semibold text-gray-900 mb-1">{label}</div>
      {description && (
        <div className="text-sm text-gray-500 leading-relaxed">{description}</div>
      )}
    </div>
  );
}
