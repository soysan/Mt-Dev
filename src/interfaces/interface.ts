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

export interface CategoryProps {
  title: string;
  img: string;
}

export interface MainCardProps {
  [key: string]: CategoryProps;
}

export interface ThirdPartyProps {
  title: string;
  url: string;
}

export interface ThirdProps {
  [key: string]: ThirdPartyProps;
}
