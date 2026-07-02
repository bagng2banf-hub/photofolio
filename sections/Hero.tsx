"use client";

import { motion } from "framer-motion";
import { RippleButton } from "@/components/RippleButton";
import { buttonItem, buttonStagger, fadeUp, floating, heroTitle } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#2563EB] px-5 pb-20 pt-32 text-white md:pb-24 md:pt-36"
    >
      <motion.div
        aria-hidden
        animate={floating}
        className="pointer-events-none absolute left-[8%] top-24 h-44 w-44 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{
          y: [0, 12, 0],
          x: [0, -8, 0],
          transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="pointer-events-none absolute bottom-16 right-[10%] h-52 w-52 rounded-full bg-[#60A5FA]/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center text-center">
        <motion.h1
          variants={heroTitle}
          initial="hidden"
          animate="show"
          className="w-full text-[16vw] font-extrabold leading-none tracking-[-0.08em] md:text-[8.4rem] lg:text-[9.5rem]"
        >
          LEE DAYEON
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15 }}
          className="mt-8 whitespace-pre-line text-xl font-light leading-9 md:text-2xl"
        >
          {"안녕하세요.\n여러분들께 저를 소개하겠습니다."}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="mt-6 whitespace-pre-line text-base font-light leading-8 text-white/85 md:text-lg"
        >
          {"새로운 것을 배우는 것을 좋아하고,\n직접 만들어 보며 경험을 쌓고 있는\n중학교 1학년 학생입니다."}
        </motion.p>

        <motion.div
          variants={buttonStagger}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap justify-center gap-3 pb-2"
        >
          <motion.div variants={buttonItem} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <RippleButton href="#about">저를 소개합니다</RippleButton>
          </motion.div>
          <motion.div variants={buttonItem} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <RippleButton href="#projects" variant="secondary">
              프로젝트 보기
            </RippleButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
