export type SocialLinkType = 'github' | 'linkedin' | 'email' | 'website';

export interface SocialLink {
  type: SocialLinkType;
  label: string;
  url: string;
}

export interface Experience {
  company: string;
  role: string;
  contract?: string; // ex: Alternance
  location?: string;
  start: string; // ex: "09/2022"
  end: string;   // ex: "08/2025" ou "Aujourd’hui"
  highlights: string[];
  stack?: string[];
}

export interface Project {
  title: string;
  period?: string;
  description: string[];
  stack?: string[];
  links?: { label: string; url: string }[];
}

export interface Education {
  title: string;
  school: string;
  location?: string;
  start: string;
  end: string;
}

export interface Certification {
  title: string;
  year: string;
}

export interface ProfileData {
  name: string;
  headline: string;
  location: string;
  socials: SocialLink[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  skills: {
    backend: string[];
    frontend: string[];
    devops: string[];
    agile: string[];
    tools: string[];
  };
  languages: string[];
}
