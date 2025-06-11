export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
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
