"use client";

import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { educationAwardItems } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="bg-[#F8FAFC] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02" label="학력 및 수상" title="학력 및 수상" />
        <AnimatedCard className="max-w-4xl">
          <div className="grid gap-4 md:grid-cols-3">
            {educationAwardItems.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-[20px] bg-[#F8FAFC] p-5"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-[#3182F6]" />
                <span className="grid size-12 place-items-center rounded-full bg-[#EFF6FF] text-2xl">
                  {item.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#111827]">{item.title}</h3>
                <p className="mt-2 text-base font-light text-[#6B7280]">{item.value}</p>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
