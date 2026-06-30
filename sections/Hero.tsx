"use client";

import { ArrowDown, Github, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { heroRoles, profileStats } from "@/data/portfolio";
import { RippleButton } from "@/components/RippleButton";

const titleLines = ["안녕하세요.", "저는", "LEE DAYEON입니다."];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-24 pt-32"
    >
      <motion.div
        aria-hidden
        animate={{ x: [0, 46, -18, 0], y: [0, -32, 20, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-blue-400/25 blur-3xl dark:bg-blue-500/20"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -38, 12, 0], y: [0, 24, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10rem] top-1/3 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/15"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-600 dark:text-sky-300"
          >
            <Sparkles size={16} />
            미래를 만드는 학생 개발자
          </motion.div>

          <h1 className="text-5xl font-black leading-[1.04] tracking-tight text-slate-950 dark:text-white md:text-7xl">
            {titleLines.map((line, index) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.16 * index }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, delay: 0.64 }}
            className="mt-6 flex min-h-9 flex-wrap items-center gap-3 text-xl font-bold text-blue-600 dark:text-sky-300"
          >
            {heroRoles.map((role, index) => (
              <span key={role} className="typing-chip">
                {role}
                {index < heroRoles.length - 1 ? <span className="mx-2 text-slate-300">/</span> : null}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, delay: 0.78 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            새로운 아이디어를 현실로 만드는 것을 좋아하는 학생 개발자입니다.
            AI, 웹 개발, 앱 개발을 배우며 실생활에 도움이 되는 서비스를 만드는 것을
            목표로 하고 있습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, delay: 0.92 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <RippleButton href="#projects">
              프로젝트 보기 <ArrowDown size={18} />
            </RippleButton>
            <RippleButton href="#contact" variant="secondary">
              연락하기 <Mail size={18} />
            </RippleButton>
            <RippleButton href="#" variant="ghost">
              GitHub <Github size={18} />
            </RippleButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotate: 1.5, scale: 1.02 }}
            className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-glow backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.07]"
          >
            <div className="absolute inset-x-8 top-6 h-24 rounded-full bg-blue-400/30 blur-3xl" />
            <div className="relative rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white to-slate-100 p-7 dark:border-white/10 dark:from-slate-900 dark:to-slate-950">
              <div className="mb-12 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-500">
                    Profile Card
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
                    LEE DAYEON
                  </h2>
                </div>
                <div className="grid size-16 place-items-center rounded-3xl bg-slate-950 text-2xl font-black text-white shadow-soft dark:bg-white dark:text-slate-950">
                  AI
                </div>
              </div>
              <div className="grid gap-4">
                {profileStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-3xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </span>
                    <span className="font-black text-slate-950 dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
