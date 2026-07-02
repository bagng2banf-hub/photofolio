"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { learningItems } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="learning" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="03"
          label="배우는 기술"
          title="배우는 기술"
          description="지금 배우고 직접 활용해 보고 있는 기술과 도구입니다."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {learningItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)] transition-shadow hover:shadow-[0_24px_70px_rgba(49,130,246,0.14)]"
            >
              <span className="grid size-12 place-items-center rounded-full bg-[#EFF6FF] text-2xl">
                {item.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#111827]">{item.title}</h3>
              <p className="mt-3 whitespace-pre-line text-sm font-light leading-7 text-[#6B7280]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
