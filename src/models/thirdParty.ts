import { ThirdPartyProps } from '@/interfaces/interface';
import { ThirdProps } from '../interfaces/interface';

const twitter: ThirdPartyProps = {
  title: 'Twitter',
  url: 'https://twitter.com/soylove2',
};

const github: ThirdPartyProps = {
  title: 'Github',
  url: 'https://github.com/soysan',
};

const qiita: ThirdPartyProps = {
  title: 'Qiita',
  url: 'https://qiita.com/soysan',
};

export const ThirdParties: ThirdProps = {
  twitter: twitter,
  github: github,
  qiita: qiita,
};

export const thirdParties: string[] = ['twitter', 'github', 'qiita'];
