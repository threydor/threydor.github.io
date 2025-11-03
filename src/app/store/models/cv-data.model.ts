export type Language = 'en' | 'pl';

export interface PersonalInfo {
  name: string;
  title: string;
  dateOfBirth: string;
  location: string;
  email: string;
  phone: string;
  githubPage?: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  linkedIn?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface SectionTitles {
  skills: string;
  experience: string;
  education: string;
}

export interface SectionLabels {
  dateOfBirth: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  responsibilities: string;
  frontEnd: string;
  backEnd: string;
  other: string;
  copied: string;
}

export interface Skills {
  frontEnd: string[];
  backEnd: string[];
  other: string[];
}

export interface CVData {
  personalInfo: PersonalInfo;
  skills: Skills;
  experiences: Experience[];
  educations: Education[];
  sectionTitles: SectionTitles;
  sectionLabels: SectionLabels;
  footerNote: string;
}

