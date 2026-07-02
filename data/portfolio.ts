import type { NavItem, Project } from "@/types";

export const navItems: NavItem[] = [
  { label: "소개", href: "#about", id: "about" },
  { label: "배우는 기술", href: "#learning", id: "learning" },
  { label: "프로젝트", href: "#projects", id: "projects" },
  { label: "연락하기", href: "#contact", id: "contact" }
];

export const educationItems = [
  { school: "두리초등학교", status: "졸업" },
  { school: "두리중학교", status: "재학 중" }
];

export const award = {
  title: "행복장애이해 IT 대회",
  result: "은상"
};

export const learningItems = [
  {
    title: "Python",
    points: ["기초 문법 공부", "간단한 프로그램 만들기"]
  },
  {
    title: "Codex",
    points: ["웹사이트 만들기", "기능 수정하기"]
  },
  {
    title: "HTML · CSS",
    points: ["웹페이지 구조 이해", "간단한 화면 꾸미기"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "MoodFit",
    summary: "옷차림을 추천하는 아이디어를 웹사이트로 만들어 본 프로젝트입니다."
  },
  {
    id: 2,
    title: "ONDO",
    summary: "일정과 약속을 조금 더 편리하게 관리할 수 있도록 기획한 프로젝트입니다."
  },
  {
    id: 3,
    title: "Portfolio",
    summary: "저를 소개하기 위해 직접 만든 포트폴리오 웹사이트입니다."
  }
];

export const contactLinks = [
  {
    label: "Email",
    value: "bagng2banf@gmail.com",
    href: "mailto:bagng2banf@gmail.com"
  },
  {
    label: "Instagram",
    value: "_daue0n",
    href: "https://instagram.com/_daue0n"
  }
];
