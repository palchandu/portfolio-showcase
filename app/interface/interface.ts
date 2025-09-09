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