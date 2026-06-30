"use client";

import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { award, experienceItems } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <SectionHeading label="경력" title="현재 배우고 있는 기술" />
          <AnimatedCard className="max-w-3xl">
            <div className="grid gap-5 md:grid-cols-2">
              {experienceItems.map((item) => (
                <div key={item.title} className="rounded-[20px] bg-[#F8FAFC] p-5">
                  <h3 className="text-xl font-extrabold text-[#111827]">{item.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="text-sm font-light text-[#6B7280]">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>

        <div>
          <SectionHeading label="수상" title="Awards" />
          <AnimatedCard>
            <p className="text-lg font-extrabold text-[#111827]">{award.title}</p>
            <p className="mt-4 text-4xl font-extrabold text-[#3182F6]">{award.result}</p>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
