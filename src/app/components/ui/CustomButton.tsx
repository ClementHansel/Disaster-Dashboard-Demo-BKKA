// ui/CustomButton.tsx
"use client";
import { Button as ShadButton } from "@/components/ui/button";

export const CustomButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ShadButton className={className} {...props} />;
};
