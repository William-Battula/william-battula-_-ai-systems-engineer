export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'finance' | 'other';
  icon?: string;
}
