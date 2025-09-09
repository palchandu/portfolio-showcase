import type { an } from "node_modules/react-router/dist/development/routeModules-rOzWJJ9x";

export interface HeroSection {
  intro: string;
  tagline: string;
  profileImage: string;
  resumeLink: string;
  tags: {
    id: number;
    tgs: string;
  }[];
  githubLink: string;
}

export interface AboutMe {
  bio: string;
  philosophy: string;
  profile_image: string;
}

export interface IExperience {
  id: number;
  sequence: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: any;
}
export interface ISkill {
  id: number;
  documentId: string;
  icon: string;
  name: string;
  sequence: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  skills: [
    {
      id: number;
      documentId: string;
      name: string;
      category: string;
      level: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    }
  ];
}

export interface IProject {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: any;
  githubLink: string | null;
  liveLink: string | null;
  caseStudy: string | null;
  featured: boolean | null;
  short_description: any;
  techStack: [
    {
      id: number;
      documentId: string;
      name: string;
      category: string;
      level: string;
    }
  ];
  images: [
    {
      url: '/uploads/pt_We_E4_G2y_Gt_T_Mkfm_Y_Docker_logo_8abe17b5ea.png';
    }
  ];
  features: [
    {
      id: number;
      name: string;
    }
  ];
}

export interface ISiteSettings {
  id: number;
  documentId: string;
  socialLinks: {
    name: string;
    url: string;
  }[];
  seoMeta: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  copyright: string;
}
