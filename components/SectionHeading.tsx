"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8"
    >
      <p className="mb-3 text-sm font-semibold text-[#3182F6]">{label}</p>
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
