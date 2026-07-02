"use client";

import { CalendarDays, LayoutPanelTop, Shirt } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

const projectIcons = {
  moodfit: Shirt,
  ondo: CalendarDays,
  portfolio: LayoutPanelTop
};

export function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;

    if (!root) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (prefersReducedMotion || isMobile) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      gsap.fromTo(
        cards,
        { y: 24 },
        {
          y: -8,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        }
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="bg-[#F8FAFC] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04" label="프로젝트" title="직접 만들어 본 프로젝트" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-80px" }}
          className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {projects.map((project, index) => {
            const Icon = projectIcons[project.key as keyof typeof projectIcons] ?? LayoutPanelTop;

            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.025 }}
                className={`project-card rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.06)] transition-shadow hover:shadow-[0_28px_78px_rgba(49,130,246,0.16)] ${
                  index === 2 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    whileHover={{ rotate: 3, scale: 1.1 }}
                    className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]"
                  >
                    <Icon size={22} />
                  </motion.span>
                  <div>
                    <h3 className="text-2xl font-bold text-[#111827]">{project.title}</h3>
                    <p className="mt-3 text-sm font-light leading-7 text-[#6B7280]">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <div className="rounded-[18px] border border-transparent bg-[#F8FAFC] p-4 transition hover:border-[#BFDBFE]">
                    <p className="text-xs font-semibold text-[#3182F6]">왜 만들었나요</p>
                    <p className="mt-1 text-sm font-normal leading-6 text-[#374151]">
                      {project.reason}
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-transparent bg-[#F8FAFC] p-4 transition hover:border-[#BFDBFE]">
                    <p className="text-xs font-semibold text-[#3182F6]">하면서 배운 것</p>
                    <p className="mt-1 text-sm font-normal leading-6 text-[#374151]">
                      {project.learned}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
