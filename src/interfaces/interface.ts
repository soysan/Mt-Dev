export interface ProjectProps {
  title: string;
  img: string;
  stacks: Stacks[];
  desc: string;
  githubUrl: string;
  projectUrl: string;
}

type Stacks =
  | 'Html'
  | 'CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'Material-UI'
  | 'Swift'
  | 'CocoaPods'
  | 'Bootstrap'
  | 'Next.js';

export interface ProjectKey {
  [key: string]: ProjectProps;
}
