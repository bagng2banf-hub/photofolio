"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { timelineItems } from "@/data/portfolio";

const accentClasses = [
  "bg-[#EFF6FF] text-[#2563EB]",
  "bg-[#ECFDF5] text-[#059669]",
  "bg-[#FFF7ED] text-[#EA580C]",
  "bg-[#F5F3FF] text-[#7C3AED]",
  "bg-[#EFF6FF] text-[#2563EB]"
];

export function Education() {
  return (
    <section id="education" className="bg-[#F8FAFC] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02" label="연혁" title="학력 및 수상" />

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-[#CBD5E1] md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-7 md:space-y-3">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid gap-4 pl-16 md:grid-cols-[1fr_72px_1fr] md:items-center md:pl-0"
                >
                  <div className={isLeft ? "md:col-start-1" : "md:col-start-3"}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)]"
                    >
                      <p className="text-3xl font-extrabold tracking-tight text-[#2563EB]">
                        {item.year}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-[#111827]">{item.title}</h3>
                      <p className="mt-2 text-sm font-light text-[#6B7280]">{item.note}</p>
                    </motion.div>
                  </div>

                  <div className="absolute left-0 top-5 md:static md:col-start-2 md:grid md:place-items-center">
                    <span
                      className={`grid size-12 place-items-center rounded-full border-4 border-[#F8FAFC] text-xl shadow-sm ${
                        accentClasses[index % accentClasses.length]
                      }`}
                    >
                      {item.icon}
                    </span>
                  </div>

                  <div className={isLeft ? "hidden md:block md:col-start-3" : "hidden md:block md:col-start-1"} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
