import type { ContactLink, LearningItem, NavItem, Project } from "@/types";

export const navItems: NavItem[] = [
  { label: "소개", href: "#about", id: "about" },
  { label: "배우는 기술", href: "#learning", id: "learning" },
  { label: "프로젝트", href: "#projects", id: "projects" },
  { label: "SNS", href: "#contact", id: "contact" }
];

export const profileItems = [
  { icon: "👤", label: "이름", value: "이다연" },
  { icon: "🏫", label: "학교", value: "두리중학교 1학년" },
  { icon: "📍", label: "지역", value: "대전" },
  { icon: "🌱", label: "요즘 관심", value: "Python, AI 도구, 웹사이트 만들기" }
];

export const educationAwardItems = [
  { icon: "🎒", title: "두리초등학교", value: "졸업" },
  { icon: "🏫", title: "두리중학교", value: "재학 중" },
  { icon: "🏆", title: "행복장애이해 IT 대회", value: "은상" }
];

export const learningItems: LearningItem[] = [
  {
    icon: "🐍",
    title: "Python",
    description: "기초 문법을 공부하며\n작은 프로그램을 만들어 보고 있습니다."
  },
  {
    icon: "🤖",
    title: "Codex",
    description: "웹사이트를 만들 때\n막히는 부분을 고치는 데 활용하고 있습니다."
  },
  {
    icon: "💬",
    title: "ChatGPT",
    description: "공부한 내용을 정리하고\n아이디어를 다듬을 때 사용합니다."
  },
  {
    icon: "🎮",
    title: "Entry",
    description: "블록 코딩으로\n게임과 프로그램을 만들어 보고 있습니다."
  },
  {
    icon: "📂",
    title: "GitHub",
    description: "프로젝트를 저장하고\n관리하는 방법을 배우고 있습니다."
  }
];

export const projects: Project[] = [
  {
    id: 1,
    icon: "👕",
    title: "MoodFit",
    summary: "옷차림을 추천하는 아이디어를\n웹사이트로 만들어 본 프로젝트입니다.",
    reason: "아침마다 옷을 고르는 시간이 줄면 좋겠다고 생각했습니다.",
    learned: "떠올린 아이디어를 화면에 어떻게 배치할지 고민해 봤습니다."
  },
  {
    id: 2,
    icon: "📅",
    title: "ONDO",
    summary: "일정과 약속을 조금 더 편리하게\n관리할 수 있도록 기획한 프로젝트입니다.",
    reason: "약속과 일정을 한눈에 정리하면 편하겠다고 생각했습니다.",
    learned: "사용자가 어떤 기능을 먼저 필요로 할지 생각해 봤습니다."
  },
  {
    id: 3,
    icon: "💼",
    title: "Portfolio",
    summary: "저를 소개하기 위해\n직접 만든 포트폴리오 웹사이트입니다.",
    reason: "제가 배우고 만든 것을 한 곳에 정리하고 싶었습니다.",
    learned: "소개, 프로젝트, 연락처를 보기 좋게 나누는 방법을 배웠습니다."
  }
];

export const goalItems = [
  {
    icon: "🌱",
    title: "꾸준히 배우기",
    description: "새로운 기술을 하나씩 익히기"
  },
  {
    icon: "🛠️",
    title: "직접 만들어 보기",
    description: "아이디어를 실제 결과물로 만들기"
  },
  {
    icon: "🤝",
    title: "도움 되는 서비스 만들기",
    description: "사람들이 편하게 사용할 수 있는 프로그램 만들기"
  }
];

export const contactLinks: ContactLink[] = [
  {
    icon: "📧",
    label: "Email",
    value: "bagng2banf@gmail.com",
    href: "mailto:bagng2banf@gmail.com"
  },
  {
    icon: "📷",
    label: "Instagram",
    value: "_daue0n",
    href: "https://instagram.com/_daue0n"
  }
];
