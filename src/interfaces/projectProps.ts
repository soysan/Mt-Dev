export interface ProjectProps {
  title: string,
  img: string,
  stacks: Stacks[],
  desc: string
}

type Stacks = 'Html' | 'CSS' | 'JavaScript' | 'TypeScript' | 'React' | 'Material-UI' | 'Swift' | 'CocoaPods' | 'Bootstrap' | 'Next.js';
