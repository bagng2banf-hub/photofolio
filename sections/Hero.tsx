"use client";

import { motion } from "framer-motion";
import { RippleButton } from "@/components/RippleButton";

export function Hero() {
  return (
    <section id="hero" className="bg-[#2563EB] px-5 pb-20 pt-32 text-white md:pb-24 md:pt-36">
      <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-[16vw] font-extrabold leading-none tracking-[-0.08em] md:text-[8.4rem] lg:text-[9.5rem]"
        >
          LEE DAYEON
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-8 whitespace-pre-line text-xl font-light leading-9 md:text-2xl"
        >
          {"안녕하세요.\n여러분들께 저를 소개하겠습니다."}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-6 whitespace-pre-line text-base font-light leading-8 text-white/85 md:text-lg"
        >
          {"새로운 것을 배우는 것을 좋아하고,\n직접 만들어 보며 경험을 쌓고 있는\n중학교 1학년 학생입니다."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-10 flex flex-wrap justify-center gap-3 pb-2"
        >
          <RippleButton href="#about">저를 소개합니다</RippleButton>
          <RippleButton href="#projects" variant="secondary">
            프로젝트 보기
          </RippleButton>
        </motion.div>
      </div>
    </section>
  );
}
