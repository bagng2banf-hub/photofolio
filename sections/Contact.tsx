"use client";

import { Check, Copy, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { RippleButton } from "@/components/RippleButton";
import { SectionHeading } from "@/components/SectionHeading";
import { contactLinks } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const copyValue = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="5"
          eyebrow="Contact"
          title="새로운 프로젝트와 아이디어를 기다립니다."
          description="문의는 이메일, 인스타그램 또는 아래 폼으로 남겨주세요. 현재 폼은 데모 UI이며 실제 전송 서버 연결 전까지 화면 확인용으로 동작합니다."
        />

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-4">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;

              return (
                <AnimatedCard key={link.label} delay={index * 0.05} className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <a href={link.href} className="flex items-center gap-4">
                      <span className="grid size-12 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-sky-300">
                        <Icon size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                          {link.label}
                        </span>
                        <span className="mt-1 block font-black text-slate-950 dark:text-white">
                          {link.value}
                        </span>
                      </span>
                    </a>
                    {link.copyable ? (
                      <button
                        aria-label={`Copy ${link.label}`}
                        onClick={() => copyValue(link.label, link.value)}
                        className="grid size-10 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-blue-500 hover:text-white dark:bg-white/10 dark:text-white"
                      >
                        {copied === link.label ? <Check size={17} /> : <Copy size={17} />}
                      </button>
                    ) : null}
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

          <AnimatedCard className="p-7">
            <form onSubmit={submitForm} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                    이름
                  </span>
                  <input
                    required
                    name="name"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5"
                    placeholder="이름"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                    이메일
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5"
                    placeholder="email@example.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  내용
                </span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="w-full resize-none rounded-[24px] border border-slate-200 bg-white/80 px-4 py-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5"
                  placeholder="프로젝트, 협업, 질문을 자유롭게 적어주세요."
                />
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <RippleButton>
                  보내기 <Send size={17} />
                </RippleButton>
                {sent ? (
                  <p className="text-sm font-bold text-blue-600 dark:text-sky-300">
                    메시지 UI가 정상 동작했습니다.
                  </p>
                ) : null}
              </div>
            </form>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
