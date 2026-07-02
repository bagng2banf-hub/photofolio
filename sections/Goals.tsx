"use client";

import { CheckCircle2, HeartHandshake, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { goalItems } from "@/data/portfolio";

const goalIcons = {
  learn: CheckCircle2,
  build: Wrench,
  help: HeartHandshake
};

export function Goals() {
  return (
    <section id="goals" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="05" label="목표" title="앞으로의 목표" />
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="rounded-[28px] bg-[#F8FAFC] p-7">
            <p className="text-lg font-normal leading-9 text-[#374151]">
              지금은 하나씩 배우는 중입니다. 작게라도 직접 만들어 보면서 조금씩 실력을
              키워 나가고 싶습니다.
            </p>
          </div>

          <div className="relative space-y-4 border-l border-[#DBEAFE] pl-5">
            {goalItems.map((goal, index) => {
              const Icon = goalIcons[goal.key as keyof typeof goalIcons] ?? CheckCircle2;

              return (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 3, scale: 1.01 }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
