"use client";

import { CheckCircle2, HeartHandshake, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { goalItems } from "@/data/portfolio";
import { fadeUp, floating, staggerContainer } from "@/lib/motion";

const goalIcons = {
  learn: CheckCircle2,
  build: Wrench,
  help: HeartHandshake
};

export function Goals() {
  return (
    <section id="goals" className="relative overflow-hidden bg-white px-5 py-24">
      <motion.div
        aria-hidden
        animate={floating}
        className="pointer-events-none absolute right-[-3rem] top-16 h-48 w-48 rounded-full bg-[#EFF6FF] blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading number="05" label="목표" title="앞으로의 목표" />
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
            className="rounded-[28px] bg-[#F8FAFC] p-7"
          >
            <p className="text-lg font-normal leading-9 text-[#374151]">
              지금은 하나씩 배우는 중입니다. 작게라도 직접 만들어 보면서 조금씩 실력을
              키워 나가고 싶습니다.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
            className="relative space-y-4 border-l border-[#DBEAFE] pl-5"
          >
            {goalItems.map((goal) => {
              const Icon = goalIcons[goal.key as keyof typeof goalIcons] ?? CheckCircle2;

              return (
                <motion.div
                  key={goal.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative rounded-[22px] border border-[#E5E7EB] bg-white p-5 shadow-[0_16px_42px_rgba(17,24,39,0.05)]"
                >
                  <span className="absolute -left-[42px] top-5 grid size-9 place-items-center rounded-full bg-[#2563EB] text-white">
                    <Icon size={17} />
                  </span>
                  <h3 className="text-lg font-semibold text-[#111827]">{goal.title}</h3>
                  <p className="mt-2 text-sm font-light text-[#6B7280]">{goal.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
