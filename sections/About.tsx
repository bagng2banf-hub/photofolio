"use client";

import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { profileItems } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading number="01" label="소개" title="안녕하세요!" />
          <div className="max-w-3xl space-y-5 text-lg font-normal leading-9 text-[#374151]">
            <p>
              저는 대전에 있는 두리중학교에 재학 중인 중학교 1학년 이다연입니다.
            </p>
            <p>
              새로운 것을 배우는 것을 좋아하고, 직접 만들어 보며 하나씩 경험을 쌓고
              있습니다.
            </p>
            <p>
              아직은 부족한 점도 많지만, 꾸준히 배우고 도전하면서 더 좋은 프로그램을
              만들기 위해 노력하고 있습니다.
            </p>
          </div>
        </div>

        <AnimatedCard className="w-full lg:max-w-sm lg:justify-self-end">
          <div className="mb-6">
            <p className="text-sm font-light text-[#6B7280]">간단한 소개</p>
            <h3 className="mt-1 text-2xl font-bold text-[#111827]">이다연입니다</h3>
          </div>
          <div className="space-y-3">
            {profileItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-[18px] bg-[#F8FAFC] p-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-lg">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{item.label}</p>
                  <p className="mt-1 text-sm font-light leading-6 text-[#6B7280]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
