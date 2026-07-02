"use client";

import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="소개" title="안녕하세요!" />
        <div className="max-w-3xl space-y-5 text-lg font-normal leading-9 text-[#374151]">
          <p>
            저는 대전에 있는 두리중학교에 재학 중인 중학교 1학년 이다연입니다.
          </p>
          <p>
            새로운 기술을 배우는 것을 좋아하고, 직접 만들어 보며 하나씩 경험을 쌓고
            있습니다.
          </p>
          <p>
            아직은 부족한 점도 많지만, 꾸준히 배우고 도전하면서 더 좋은 프로그램을
            만들기 위해 노력하고 있습니다.
          </p>
          <p>
            앞으로도 많은 경험을 쌓아 사람들에게 도움이 되는 서비스를 만드는 것이
            목표입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
