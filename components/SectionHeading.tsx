"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  number?: string;
};

export function SectionHeading({ label, title, description, number }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-80px" }}
      className="mb-8"
    >
      <div className="mb-3 flex items-center gap-3">
        {number ? (
          <motion.span
            variants={fadeUp}
            className="text-4xl font-extrabold leading-none text-[#2563EB]/65 md:text-5xl"
          >
            {number}
          </motion.span>
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
