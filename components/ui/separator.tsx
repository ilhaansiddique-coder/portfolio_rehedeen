import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

export function Separator({ orientation = "horizontal", className, ...props }: SeparatorProps) {
  return orientation === "horizontal" ? (
    <hr className={cn("border-0 border-t border-gray-200", className)} {...props} />
  ) : (
    <div className={cn("w-px bg-gray-200 self-stretch", className)} {...props} />
  );
}
