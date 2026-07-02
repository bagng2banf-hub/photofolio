"use client";

import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { learningItems } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="learning" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="배우는 기술" title="배우는 기술" />
        <AnimatedCard className="max-w-4xl">
          <div className="grid gap-5 md:grid-cols-3">
            {learningItems.map((item) => (
              <div key={item.title} className="rounded-[20px] bg-[#F8FAFC] p-5">
                <h3 className="text-xl font-bold text-[#111827]">{item.title}</h3>
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
    </section>
  );
}
