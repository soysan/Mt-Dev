import { CategoryProps, MainCardProps } from '@/interfaces/interface';

const profile: CategoryProps = {
  title: 'Profile',
  img: '/static/person.png',
};

const portfolio: CategoryProps = {
  title: 'Portfolio',
  img: '/static/work.png',
};

const contact: CategoryProps = {
  title: 'Contact',
  img: '/static/mail.png',
};

export const Categories: MainCardProps = {
  profile: profile,
  portfolio: portfolio,
  contact: contact,
};

export const categoriesName: string[] = ['profile', 'portfolio', 'contact'];
