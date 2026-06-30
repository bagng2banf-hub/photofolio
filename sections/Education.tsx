"use client";

import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { educationItems } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="bg-[#F8FAFC] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="학력" title="Education" />
        <AnimatedCard className="max-w-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            {educationItems.map((item, index) => (
              <div key={item.school} className="flex flex-1 items-center gap-6">
                <div className="flex-1 rounded-[20px] bg-[#F8FAFC] p-5">
                  <p className="text-lg font-extrabold text-[#111827]">{item.school}</p>
                  <p className="mt-2 text-sm font-light text-[#6B7280]">{item.status}</p>
                </div>
                {index < educationItems.length - 1 ? (
                  <span className="hidden text-2xl font-light text-[#60A5FA] md:block">→</span>
                ) : null}
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
