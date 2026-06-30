"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  number?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  number,
  className
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-12 flex flex-col gap-4 md:mb-16", className)}
    >
      <div className="flex items-center gap-4">
        {number ? (
          <span className="text-5xl font-black tracking-tight text-blue-500/20 md:text-7xl">
            {number}
          </span>
        ) : null}
        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-600 dark:text-sky-300">
          {eyebrow}
        </span>
      </div>
      <div className="max-w-3xl">
        <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
