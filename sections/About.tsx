"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutTimeline, interests } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="1"
          eyebrow="About Me"
          title="새로운 기술을 배우고 직접 만들어 봅니다."
          description="AI, 웹 개발, 앱 개발에 관심이 많으며 다양한 아이디어를 실제 서비스로 구현하는 것을 목표로 공부하고 있습니다."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedCard className="p-8">
            <p className="text-xl font-black text-slate-950 dark:text-white">안녕하세요.</p>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              <p>
                저는 새로운 기술을 배우고 직접 만들어 보는 것을 좋아하는 학생 개발자
                이다연입니다.
              </p>
              <p>
                특히 사람들이 편리하게 사용할 수 있는 프로그램을 만드는 것을 가장
                중요하게 생각합니다.
              </p>
              <p>
                현재는 다양한 프로젝트를 진행하며 개발 경험을 쌓고 있습니다.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid gap-6">
            <AnimatedCard className="p-8" delay={0.1}>
              <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                Education & Awards
              </h3>
              <div className="mt-8 space-y-5">
                {aboutTimeline.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.45 }}
                      className="relative flex gap-4"
                    >
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-sky-300">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                          {item.caption}
                        </p>
                        <p className="mt-1 font-bold text-slate-950 dark:text-white">
                          {item.title}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedCard>

            <AnimatedCard className="p-8" delay={0.18}>
              <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                Interests
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-600 dark:text-sky-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
