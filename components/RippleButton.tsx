"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RippleButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

export function RippleButton({
  children,
  variant = "primary",
  className,
  onPointerDown,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const createRipple: AnchorHTMLAttributes<HTMLAnchorElement>["onPointerDown"] = (event) => {
    onPointerDown?.(event);

    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.8;
    const id = Date.now();

    setRipples((items) => [
      ...items,
      {
        id,
        x: event.clientX - rect.left - size / 2,
        y: event.clientY - rect.top - size / 2,
        size
      }
    ]);
  };

  return (
    <a
      className={cn(
        "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-6 text-sm font-semibold transition duration-200 hover:scale-[1.03]",
        variant === "primary"
          ? "bg-white text-[#2563EB] hover:bg-[#F8FAFC]"
          : "border border-white/35 text-white hover:bg-white/10",
        className
      )}
      onPointerDown={createRipple}
      {...props}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          aria-hidden
          initial={{ scale: 0, opacity: 0.28 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          onAnimationComplete={() =>
            setRipples((items) => items.filter((item) => item.id !== ripple.id))
          }
          className={cn(
            "pointer-events-none absolute rounded-full",
            variant === "primary" ? "bg-[#2563EB]/20" : "bg-white/24"
          )}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </a>
  );
}
