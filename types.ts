export interface ExperienceItem {
  id: string;
  category: string;
  company: string;
  role: string;
  period: string;
  link: string;
  tags: string[];
  description: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  image: string;
  techStack: string[];
  description: string;
  detailedOverview: string;
  features: string[];
  myRole: string[];
  links: { label: string; url: string; type: string }[];
}

export interface EducationItem {
  school: string;
  major: string;
  period: string;
}

export interface LicenseItem {
  name: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tag: string;
  additionalImages: string[];
}