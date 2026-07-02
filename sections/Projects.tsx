"use client";

import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="bg-[#F8FAFC] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04" label="프로젝트" title="직접 만들어 본 프로젝트" />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} delay={index * 0.06} className="h-full">
              <span className="grid size-14 place-items-center rounded-full bg-[#EFF6FF] text-3xl">
                {project.icon}
              </span>
              <h3 className="mt-5 text-2xl font-bold text-[#111827]">{project.title}</h3>
              <p className="mt-4 whitespace-pre-line text-sm font-light leading-7 text-[#6B7280]">
                {project.summary}
              </p>
              <div className="mt-6 space-y-4 rounded-[18px] bg-[#F8FAFC] p-4">
                <div>
                  <p className="text-xs font-semibold text-[#3182F6]">왜 만들었나요</p>
                  <p className="mt-1 text-sm font-normal leading-6 text-[#374151]">
                    {project.reason}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#3182F6]">하면서 배운 것</p>
                  <p className="mt-1 text-sm font-normal leading-6 text-[#374151]">
                    {project.learned}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
