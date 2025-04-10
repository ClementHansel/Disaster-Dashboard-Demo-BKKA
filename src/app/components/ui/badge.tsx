import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { TrainingStatus } from "@/app/types/ai/AI-training/training";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        // Generic variants
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",

        // Custom badges
        warning:
          "border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100",
        success:
          "border-transparent bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100",

        // ✅ AI TrainingStatus variants (TitleCase)
        Queued:
          "border-transparent bg-yellow-100 text-yellow-900 dark:bg-yellow-800 dark:text-yellow-100",
        Running:
          "border-transparent bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100",
        Failed:
          "border-transparent bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100",
        Cancelled:
          "border-transparent bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
        Completed:
          "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-700 dark:text-emerald-100",
        Success:
          "border-transparent bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100",
        Pending:
          "border-transparent bg-muted text-muted-foreground dark:bg-muted/40",
        Training:
          "border-transparent bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type BadgeVariant =
  | VariantProps<typeof badgeVariants>["variant"]
  | TrainingStatus;

type BadgeProps = React.ComponentProps<"span"> & {
  asChild?: boolean;
  variant?: BadgeVariant;
};

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant: variant as BadgeVariant }),
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
