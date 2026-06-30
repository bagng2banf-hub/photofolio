"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AnimatedCard({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.015 }}
      className={cn(
        "rounded-card border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur-xl transition-shadow hover:shadow-glow dark:border-white/10 dark:bg-white/[0.06]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
