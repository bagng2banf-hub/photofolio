export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export type LearningItem = {
  icon: string;
  title: string;
  description: string;
};

export type Project = {
  id: number;
  icon: string;
  title: string;
  summary: string;
  reason: string;
  learned: string;
};

export type ContactLink = {
  icon: string;
  label: string;
  value: string;
  href: string;
};
