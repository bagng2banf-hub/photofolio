import {
  BrainCircuit,
  Code2,
  Cpu,
  Figma,
  Github,
  GraduationCap,
  Laptop,
  PenTool,
  Rocket,
  Server,
  Sparkles,
  Trophy,
  Wrench
} from "lucide-react";
import type { NavItem, Project, ProjectCategory, SkillCategory } from "@/types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export const heroRoles = [
  "Student Developer",
  "AI Creator",
  "Future IT Innovator"
];

export const profileStats = [
  { label: "Name", value: "LEE DAYEON" },
  { label: "Mindset", value: "Build & Learn" },
  { label: "Goal", value: "Helpful Tech" }
];

export const aboutTimeline = [
  {
    title: "두리초등학교 졸업",
    caption: "Education",
    icon: GraduationCap
  },
  {
    title: "두리중학교 재학",
    caption: "Education",
    icon: GraduationCap
  },
  {
    title: "행복장해이해 IT대회 은상",
    caption: "Awards",
    icon: Trophy
  },
  {
    title: "AI, 웹, 앱 프로젝트 학습",
    caption: "Activities",
    icon: Rocket
  }
];

export const interests = [
  "Artificial Intelligence",
  "Web Development",
  "App Development",
  "UI / UX Design",
  "Creative Coding"
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Laptop,
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 84 },
      { name: "TypeScript", level: 78 },
      { name: "React", level: 82 },
      { name: "Next.js", level: 78 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Firebase", level: 76 },
      { name: "Supabase", level: 68 },
      { name: "Node.js", level: 70 }
    ]
  },
  {
    title: "AI",
    icon: BrainCircuit,
    skills: [
      { name: "OpenAI", level: 82 },
      { name: "Computer Vision", level: 72 },
      { name: "Prompt Engineering", level: 86 }
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 76 },
      { name: "GitHub", level: 82 },
      { name: "Figma", level: 78 },
      { name: "VS Code", level: 90 },
      { name: "Cursor", level: 84 }
    ]
  }
];

export const projectCategories: ProjectCategory[] = ["All", "Web", "AI", "App"];

export const projects: Project[] = [
  {
    id: 1,
    title: "MoodFit",
    category: "AI",
    summary: "AI 패션 추천 플랫폼",
    description:
      "사용자의 취향과 옷장을 기반으로 AI가 코디를 추천하는 서비스입니다.",
    period: "Project 01",
    tech: ["Next.js", "React", "TailwindCSS", "AI"]
  },
  {
    id: 2,
    title: "ONDO",
    category: "Web",
    summary: "AI 관계 관리 플랫폼",
    description:
      "약속 관리, 일정 추천, 답장 추천 등을 제공하는 AI 서비스입니다.",
    period: "Project 02",
    tech: ["React", "Next.js", "OpenAI"]
  },
  {
    id: 3,
    title: "AI Smart Charger",
    category: "App",
    summary: "AI 스마트 충전 시스템",
    description:
      "휴대폰을 자동으로 감지하여 충전 상태를 관리하는 AI 스마트 충전 시스템입니다.",
    period: "Project 03",
    tech: ["Arduino", "AI", "IoT"]
  }
];

export const contactLinks = [
  {
    label: "Email",
    value: "bagng2banf@gmail.com",
    href: "mailto:bagng2banf@gmail.com",
    icon: PenTool,
    copyable: true
  },
  {
    label: "Instagram",
    value: "_daue0n",
    href: "https://instagram.com/_daue0n",
    icon: Sparkles,
    copyable: true
  },
  {
    label: "GitHub",
    value: "추후 입력",
    href: "#",
    icon: Github,
    copyable: false
  },
  {
    label: "Blog",
    value: "Coming soon",
    href: "#",
    icon: Code2,
    copyable: false
  }
];

export const footerLinks = [
  { label: "GitHub", href: "#", icon: Github },
  { label: "Instagram", href: "https://instagram.com/_daue0n", icon: Sparkles },
  { label: "Projects", href: "#projects", icon: Cpu }
];
