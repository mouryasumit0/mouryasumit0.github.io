export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
}
