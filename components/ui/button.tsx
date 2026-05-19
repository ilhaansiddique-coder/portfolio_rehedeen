import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-700 text-white shadow-md shadow-brand-700/20 hover:bg-brand-800 hover:shadow-brand-700/40 active:scale-[0.98]",
        outline:
          "border-2 border-brand-700 text-brand-700 bg-transparent hover:bg-brand-50 active:scale-[0.98]",
        ghost:
          "text-brand-700 bg-transparent hover:bg-brand-50 active:scale-[0.98]",
        accent:
          "bg-accent-500 text-white shadow-md shadow-accent-500/20 hover:bg-accent-600 hover:shadow-accent-500/40 active:scale-[0.98]",
        secondary:
          "bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-md active:scale-[0.98]",
        link: "text-brand-700 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-8 rounded-lg px-3 text-xs",
        default: "h-10 rounded-xl px-5 text-sm",
        lg: "h-12 rounded-xl px-7 text-base",
        xl: "h-14 rounded-2xl px-8 text-base",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
