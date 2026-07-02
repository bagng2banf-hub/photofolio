export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export type LearningItem = {
  key: string;
  title: string;
  description: string;
};

export type Project = {
  id: number;
  key: string;
  title: string;
  summary: string;
  reason: string;
  learned: string;
};

export type ContactLink = {
  key: string;
  label: string;
  value: string;
  href: string;
};
