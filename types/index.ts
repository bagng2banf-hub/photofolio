import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: {
    name: string;
    level: number;
  }[];
};

export type ProjectCategory = "All" | "Web" | "AI" | "App";

export type Project = {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  summary: string;
  description: string;
  period: string;
  tech: string[];
  github?: string;
  demo?: string;
};
