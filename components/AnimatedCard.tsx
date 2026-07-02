"use client";

import { motion, type TargetAndTransition, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cardHover, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function AnimatedCard({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  hover = cardHover
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  hover?: TargetAndTransition;
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-80px" }}
      transition={{ delay }}
      whileHover={hover}
      className={cn(
        "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)] transition-shadow hover:shadow-[0_24px_70px_rgba(49,130,246,0.14)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
