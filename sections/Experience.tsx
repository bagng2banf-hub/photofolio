"use client";

import { Blocks, Bot, Code2, Github, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { learningItems } from "@/data/portfolio";
import { scaleIn, staggerContainer } from "@/lib/motion";

const learningIcons = {
  python: Code2,
  codex: Bot,
  chatgpt: MessageCircle,
  entry: Blocks,
  github: Github
};

const cardStyles = [
  "md:col-span-1 bg-white",
  "md:col-span-1 bg-[#F8FAFC]",
  "md:col-span-1 bg-white",
  "md:col-span-2 bg-white",
  "md:col-span-1 bg-[#F8FAFC]"
];

export function Experience() {
  return (
    <section id="learning" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="03"
          label="배우는 기술"
          title="배우는 기술"
          description="요즘 배우고 직접 써보는 기술과 도구입니다."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {learningItems.map((item, index) => {
            const Icon = learningIcons[item.key as keyof typeof learningIcons] ?? Code2;

            return (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`rounded-[24px] border border-[#E5E7EB] p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)] transition-shadow hover:shadow-[0_24px_70px_rgba(49,130,246,0.16)] ${cardStyles[index]}`}
              >
                <motion.span
                  whileHover={{ scale: 1.12 }}
                  className="grid size-12 place-items-center rounded-2xl bg-[#EFF6FF] text-[#2563EB] transition-colors hover:bg-[#DBEAFE]"
                >
                  <Icon size={22} />
                </motion.span>
                <h3 className="mt-5 text-xl font-semibold text-[#111827]">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-[#6B7280]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
