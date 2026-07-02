"use client";

import { SectionHeading } from "@/components/SectionHeading";

export function Goals() {
  return (
    <section id="goals" className="bg-[#F8FAFC] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="목표" title="앞으로의 목표" />
        <div className="max-w-3xl space-y-5 text-lg font-normal leading-9 text-[#374151]">
          <p>
            지금은 하나씩 배우는 과정에 있지만, 앞으로도 다양한 프로젝트를 만들며
            실력을 키워 나가고 싶습니다.
          </p>
          <p>
            더 많은 경험을 통해 사람들에게 도움이 되는 서비스를 직접 만들어 보고
            싶습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
