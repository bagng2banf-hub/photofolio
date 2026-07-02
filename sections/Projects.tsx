"use client";

import { CalendarDays, LayoutPanelTop, Shirt } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

const projectIcons = {
  moodfit: Shirt,
  ondo: CalendarDays,
  portfolio: LayoutPanelTop
};

export function Projects() {
  return (
    <section id="projects" className="bg-[#F8FAFC] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04" label="프로젝트" title="직접 만들어 본 프로젝트" />
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.key as keyof typeof projectIcons] ?? LayoutPanelTop;

            return (
              <AnimatedCard
                key={project.id}
                delay={index * 0.06}
                className={index === 2 ? "lg:col-span-2" : ""}
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-[#111827]">{project.title}</h3>
                    <p className="mt-3 text-sm font-light leading-7 text-[#6B7280]">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <div className="rounded-[18px] bg-[#F8FAFC] p-4">
                    <p className="text-xs font-semibold text-[#3182F6]">왜 만들었나요</p>
                    <p className="mt-1 text-sm font-normal leading-6 text-[#374151]">
                      {project.reason}
                    </p>
                  </div>
                  <div className="rounded-[18px] bg-[#F8FAFC] p-4">
                    <p className="text-xs font-semibold text-[#3182F6]">하면서 배운 것</p>
                    <p className="mt-1 text-sm font-normal leading-6 text-[#374151]">
                      {project.learned}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
