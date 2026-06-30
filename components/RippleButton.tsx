import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RippleButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function RippleButton({
  children,
  variant = "primary",
  className,
  ...props
}: RippleButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-200 hover:scale-[1.03]",
        variant === "primary"
          ? "bg-white text-[#2563EB] hover:bg-[#F8FAFC]"
          : "border border-white/35 text-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
