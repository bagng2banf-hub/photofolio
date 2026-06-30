"use client";

import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="bg-[#F8FAFC] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="프로젝트" title="Projects" />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} delay={index * 0.06} className="min-h-52">
              <h3 className="text-2xl font-extrabold text-[#111827]">{project.title}</h3>
              <p className="mt-4 min-h-12 text-base font-light leading-7 text-[#6B7280]">
                {project.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#3182F6]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
