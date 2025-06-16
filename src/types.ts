export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  repoLink: string;
  liveDemo: string;
}

export interface Expertise {
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}
