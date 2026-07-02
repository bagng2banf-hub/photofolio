"use client";

import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/SectionHeading";
import { contactLinks } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="연락하기"
          title="연락하기"
          description={"문의는 이메일 또는 인스타그램으로\n편하게 연락 부탁드립니다."}
        />
        <AnimatedCard className="max-w-2xl">
          <div className="space-y-5">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between gap-6 rounded-[18px] bg-[#F8FAFC] p-5 transition hover:bg-[#EFF6FF]"
              >
                <span className="text-sm font-light text-[#6B7280]">{link.label}</span>
                <span className="text-right text-base font-semibold text-[#111827]">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
