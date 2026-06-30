"use client";

import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { profileInfo } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
        <div>
          <SectionHeading label="소개" title="저를 소개합니다" />
          <div className="max-w-2xl space-y-5 text-lg font-normal leading-9 text-[#374151]">
            <p>안녕하세요.</p>
            <p>저는 두리중학교에 재학 중인 이다연입니다.</p>
            <p>
              새로운 기술을 배우는 것을 좋아하며, 직접 만들어 보고 수정하는 과정을
              즐깁니다.
            </p>
            <p>
              앞으로도 꾸준히 경험을 쌓으며 더 좋은 서비스를 만드는 것이 목표입니다.
            </p>
          </div>
        </div>

        <AnimatedCard className="w-full md:max-w-sm md:justify-self-end">
          <h3 className="mb-5 text-xl font-extrabold text-[#111827]">기본 정보</h3>
          <div className="space-y-4">
            {profileInfo.map((item) => (
              <div key={item.label} className="flex justify-between gap-6 border-b border-[#F3F4F6] pb-4 last:border-0 last:pb-0">
                <span className="text-sm font-light text-[#6B7280]">{item.label}</span>
                <span className="text-right text-sm font-semibold text-[#111827]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
