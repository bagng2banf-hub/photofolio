"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { goalItems } from "@/data/portfolio";

export function Goals() {
  return (
    <section id="goals" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="05" label="목표" title="앞으로의 목표" />
        <div className="max-w-3xl space-y-5 text-lg font-normal leading-9 text-[#374151]">
          <p>
            지금은 하나씩 배우는 과정에 있지만, 앞으로도 다양한 프로젝트를 만들며
            실력을 키워 나가고 싶습니다.
          </p>
          <p>
            더 많은 경험을 통해 사람들에게 도움이 되는 서비스를 직접 만들어 보고
            싶습니다.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {goalItems.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)]"
            >
              <span className="grid size-11 place-items-center rounded-full bg-[#EFF6FF] text-xl">
                {goal.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[#111827]">{goal.title}</h3>
              <p className="mt-2 text-sm font-light leading-6 text-[#6B7280]">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
