import type { NavItem, Project } from "@/types";

export const navItems: NavItem[] = [
  { label: "소개", href: "#about", id: "about" },
  { label: "경력", href: "#experience", id: "experience" },
  { label: "프로젝트", href: "#projects", id: "projects" },
  { label: "연락하기", href: "#contact", id: "contact" }
];

export const profileInfo = [
  { label: "이름", value: "이다연" },
  { label: "학교", value: "두리중학교 재학" },
  { label: "관심 분야", value: "웹사이트 제작, 기능 개선" },
  { label: "거주 지역", value: "대전" }
];

export const educationItems = [
  { school: "두리초등학교", status: "졸업" },
  { school: "두리중학교", status: "재학 중" }
];

export const experienceItems = [
  {
    title: "Python",
    points: ["기초 문법", "간단한 프로그램 제작"]
  },
  {
    title: "Codex",
    points: ["웹사이트 제작", "기능 수정", "오류 개선"]
  }
];

export const award = {
  title: "행복장애이해 IT 대회",
  result: "은상"
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    summary: "저를 소개하기 위해 만든 반응형 포트폴리오 웹사이트",
    tech: ["Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    id: 2,
    title: "MoodFit",
    summary: "사용자에게 어울리는 코디를 추천하는 서비스",
    tech: ["Next.js", "React", "AI"]
  },
  {
    id: 3,
    title: "ONDO",
    summary: "관계와 일정을 더 편하게 관리하기 위한 서비스",
    tech: ["React", "Next.js", "OpenAI"]
  }
];

export const contactLinks = [
  {
    label: "이메일",
    value: "bagng2banf@gmail.com",
    href: "mailto:bagng2banf@gmail.com"
  },
  {
    label: "인스타그램",
    value: "_daue0n",
    href: "https://instagram.com/_daue0n"
  }
];
