"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { RippleButton } from "@/components/RippleButton";

export function Goals() {
  return (
    <section id="goals" className="bg-white/60 px-4 py-24 dark:bg-slate-950/35 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="4"
          eyebrow="Goals"
          title="AI와 소프트웨어로 도움이 되는 서비스를 만들고 싶습니다."
          description="더 많은 프로젝트를 완성하여 실무 경험을 쌓고, 사람들의 일상을 조금 더 편하게 만드는 개발자로 성장하는 것이 목표입니다."
        />

        <AnimatedCard className="relative overflow-hidden p-8 md:p-12">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-500">
                Future Plan
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-5xl">
                배우고, 만들고, 더 나은 경험으로 연결하기
              </h3>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                작은 아이디어도 직접 구현해 보며 기술의 가능성을 확인하고 있습니다.
                앞으로는 AI와 웹 기술을 함께 활용해 실제 사용자가 만족할 수 있는
                서비스를 꾸준히 완성하고 싶습니다.
              </p>
            </div>
            <RippleButton href="#contact">
              함께 이야기하기 <ArrowUpRight size={18} />
            </RippleButton>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
