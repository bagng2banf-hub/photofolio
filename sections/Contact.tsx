"use client";

import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { contactLinks } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="bg-[#F8FAFC] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="06"
          label="연락하기"
          title="연락하기"
          description={"문의는 이메일 또는 인스타그램으로\n편하게 연락 부탁드립니다."}
        />
        <div className="grid max-w-3xl gap-5 md:grid-cols-2">
          {contactLinks.map((link, index) => (
            <AnimatedCard key={link.label} delay={index * 0.06}>
              <a href={link.href} className="block">
                <span className="grid size-14 place-items-center rounded-full bg-[#EFF6FF] text-3xl">
                  {link.icon}
                </span>
                <p className="mt-5 text-sm font-light text-[#6B7280]">{link.label}</p>
                <p className="mt-2 break-all text-lg font-semibold text-[#111827]">
                  {link.value}
                </p>
              </a>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
