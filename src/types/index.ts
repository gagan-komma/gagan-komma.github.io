export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  detailedDescription?: string;
  challenges?: string;
  solutions?: string;
  outcomes?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type ThemeMode = 'light' | 'dark';