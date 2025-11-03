export type Language = 'en' | 'pl';

export interface PersonalInfo {
  name: string;
  title: string;
  dateOfBirth: string;
  location: string;
  email: string;
  phone: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  location: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  skills: string[];
  experiences: Experience[];
  educations: Education[];
  sectionTitles: {
    skills: string;
    experience: string;
    education: string;
  };
}

