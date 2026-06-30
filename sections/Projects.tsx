"use client";

import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/AnimatedCard";
import { RippleButton } from "@/components/RippleButton";
import { SectionHeading } from "@/components/SectionHeading";
import { projectCategories, projects } from "@/data/portfolio";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="3"
          eyebrow="Projects"
          title="배운 것을 실제 문제로 연결한 프로젝트"
          description="작게 만들고, 빠르게 실험하고, 더 나은 사용 경험으로 다듬는 것을 중요하게 생각합니다."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-bold transition",
                activeCategory === category
                  ? "border-blue-500 bg-blue-500 text-white shadow-glow"
                  : "border-slate-200 bg-white/70 text-slate-600 hover:border-blue-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.06} className="flex h-full flex-col p-6">
              <div className="mb-6 flex h-44 items-end overflow-hidden rounded-[24px] border border-slate-200/80 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-500 p-5 dark:border-white/10">
                <div className="text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-200">
                    {project.period}
                  </p>
                  <h3 className="mt-2 text-3xl font-black">{project.title}</h3>
                </div>
              </div>
              <p className="text-sm font-bold text-blue-600 dark:text-sky-300">
                {project.summary}
              </p>
              <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-2">
                <RippleButton variant="secondary" href={project.github ?? "#"} className="h-10 px-4">
                  <Github size={16} /> GitHub
                </RippleButton>
                <RippleButton variant="primary" className="h-10 px-4" onClick={() => setSelectedProject(project)}>
                  자세히
                </RippleButton>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>

      {selectedProject ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/60 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-full max-w-xl rounded-[28px] border border-white/70 bg-white p-7 shadow-soft dark:border-white/10 dark:bg-slate-950"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
                  {selectedProject.period}
                </p>
                <h3 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                aria-label="Close project modal"
                onClick={() => setSelectedProject(null)}
                className="grid size-10 place-items-center rounded-full bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-white"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {selectedProject.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-bold text-blue-600 dark:text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <RippleButton href={selectedProject.demo ?? "#"}>
                Demo <ExternalLink size={16} />
              </RippleButton>
              <RippleButton href={selectedProject.github ?? "#"} variant="secondary">
                GitHub <Github size={16} />
              </RippleButton>
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
