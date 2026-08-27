import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-sans font-extrabold uppercase tracking-wide transition-[background-color,color,transform] duration-150 ease-out active:not-disabled:scale-press disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-bg text-cream hover:bg-bg/90",
        rust: "bg-rust text-ink hover:bg-rust-deep",
        ghost: "bg-transparent text-ink hover:bg-bg/5",
        outline: "bg-transparent text-ink ring-2 ring-ink/40 hover:ring-ink",
        share: "bg-cream text-bg hover:bg-cream/90",
      },
      size: {
        sm: "h-11 px-4 text-sm",
        md: "h-14 px-5 text-base",
        lg: "h-16 px-6 text-xl",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
