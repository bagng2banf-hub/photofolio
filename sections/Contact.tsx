"use client";

import { Github, Instagram, Mail, Sparkles } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { contactLinks, techStack } from "@/data/portfolio";

const contactIcons = {
  email: Mail,
  instagram: Instagram,
  github: Github
};

export function Contact() {
  return (
    <section id="contact" className="bg-[#F8FAFC] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="06"
          label="SNS"
          title="SNS"
          description={"이메일, 인스타그램, GitHub를 보기 쉽게 정리했습니다."}
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
          <AnimatedCard>
            <div className="grid gap-4 md:grid-cols-3">
              {contactLinks.map((link) => {
                const Icon = contactIcons[link.key as keyof typeof contactIcons] ?? Mail;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-[20px] bg-[#F8FAFC] p-5 transition hover:bg-[#EFF6FF]"
                  >
                    <span className="grid size-11 place-items-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                      <Icon size={20} />
                    </span>
                    <p className="mt-4 text-sm font-light text-[#6B7280]">{link.label}</p>
                    <p className="mt-2 break-all text-sm font-semibold text-[#111827]">
                      {link.value}
                    </p>
                  </a>
                );
              })}
            </div>
          </AnimatedCard>

          <AnimatedCard className="bg-[#2563EB] text-white">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-white/15">
                <Sparkles size={20} />
              </span>
              <div>
                <p className="text-sm font-light text-white/70">지금 배우는 것</p>
                <h3 className="text-xl font-bold">기술 스택</h3>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/12 px-3 py-1.5 text-xs font-semibold text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
