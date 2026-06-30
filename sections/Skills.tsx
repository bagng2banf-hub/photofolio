"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="bg-white/60 px-4 py-24 dark:bg-slate-950/35 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="2"
          eyebrow="Skills"
          title="아이디어를 서비스로 만들기 위한 기술들"
          description="Frontend, Backend, AI, Tools를 균형 있게 익히며 직접 만들고 개선하는 방식으로 성장하고 있습니다."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
            hidden: {}
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatedCard className="h-full p-7">
                  <div className="flex items-center gap-4">
                    <div className="grid size-12 place-items-center rounded-2xl bg-blue-500 text-white shadow-glow">
                      <Icon size={21} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="mt-7 space-y-5">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm font-bold">
                          <span className="text-slate-700 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-blue-600 dark:text-sky-300">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
