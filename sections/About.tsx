"use client";

import { Code2, MapPin, School, Sprout, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { profileItems } from "@/data/portfolio";
import { fadeUp, slideRight, staggerContainer } from "@/lib/motion";

const profileIcons = {
  name: UserRound,
  school: School,
  location: MapPin,
  interest: Sprout
};

const introLines = [
  "저는 대전에 있는 두리중학교에 다니는 중학교 1학년 이다연입니다.",
  "새로운 것을 배우는 걸 좋아하고, 직접 만들어 보면서 조금씩 익히고 있습니다.",
  "아직 부족한 점도 많지만, 꾸준히 해보면서 더 좋은 프로그램을 만들고 싶습니다."
];

export function About() {
  return (
    <section id="about" className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
        <div className="rounded-[28px] bg-[#F8FAFC] p-7 md:p-9">
          <SectionHeading number="01" label="소개" title="안녕하세요!" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
            className="max-w-3xl space-y-5 text-lg font-normal leading-9 text-[#374151]"
          >
            {introLines.map((line) => (
              <motion.p key={line} variants={fadeUp}>
                {line}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <AnimatedCard variants={slideRight} className="w-full lg:mt-14">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-light text-[#6B7280]">간단한 소개</p>
              <h3 className="mt-1 text-2xl font-bold text-[#111827]">이다연</h3>
            </div>
            <motion.span
              whileHover={{ scale: 1.08 }}
              className="grid size-12 place-items-center rounded-2xl bg-[#DBEAFE] text-[#2563EB]"
            >
              <Code2 size={22} />
            </motion.span>
          </div>
          <div className="space-y-3">
            {profileItems.map((item) => {
              const Icon = profileIcons[item.key as keyof typeof profileIcons] ?? UserRound;

              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-[18px] bg-[#F8FAFC] p-4"
                >
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#2563EB] shadow-sm"
                  >
                    <Icon size={18} />
                  </motion.span>
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">{item.label}</p>
                    <p className="mt-1 text-sm font-light leading-6 text-[#6B7280]">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
