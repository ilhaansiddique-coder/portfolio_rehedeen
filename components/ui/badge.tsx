import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "accent" | "success" | "destructive" | "muted";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-brand-100 text-brand-700 border-brand-200",
  outline: "border border-gray-300 text-gray-700 bg-transparent",
  accent: "bg-accent-100 text-accent-700 border-accent-200",
  success: "bg-green-100 text-green-700 border-green-200",
  destructive: "bg-red-100 text-red-700 border-red-200",
  muted: "bg-gray-100 text-gray-600 border-gray-200",
};

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
