"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  number?: string;
};

export function SectionHeading({ label, title, description, number }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8"
    >
      <div className="mb-3 flex items-center gap-3">
        {number ? (
          <span className="text-4xl font-extrabold leading-none text-[#3182F6]/20 md:text-5xl">
            {number}
          </span>
        ) : null}
        <p className="text-sm font-semibold text-[#3182F6]">{label}</p>
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl whitespace-pre-line text-lg font-light leading-8 text-[#6B7280]">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
