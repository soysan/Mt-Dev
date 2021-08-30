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

const recursion: ThirdPartyProps = {
  title: 'Recursion',
  url: 'https://recursionist.io/'
}

export const ThirdParties: ThirdProps = {
  twitter: twitter,
  github: github,
  qiita: qiita,
  recursion: recursion,
};

export const thirdParties: string[] = ['twitter', 'github', 'qiita','recursion'];
