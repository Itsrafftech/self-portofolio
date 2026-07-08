export type Lang = "id" | "en";

export interface LocalizedText {
  id: string;
  en: string;
}

export type ProjectCategory = "fullstack" | "data-science" | "finance" | "pm-tool" | "frontend";

export interface Project {
  id: string;
  title: string;
  description: LocalizedText;
  techStack: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export type SkillCategoryId = "frontend" | "backend" | "data-science" | "pm-finance";

export interface SkillCategory {
  id: SkillCategoryId;
  label: LocalizedText;
  icon: string;
  skills: string[];
}

export type TimelineType = "work" | "education" | "organization" | "committee";

export interface TimelineEntry {
  id: string;
  year: string;
  title: LocalizedText;
  company: string;
  description: LocalizedText;
  type: TimelineType;
}

export interface NavLink {
  href: string;
  label: LocalizedText;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}