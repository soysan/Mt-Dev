import { Button } from '@material-ui/core';
import React, { VFC } from 'react';
import styled from 'styled-components';
import { GitHub, Twitter, CloudQueue } from '@material-ui/icons';
import Link from 'next/link';
import { ThirdParties } from '../models/thirdParty';

type Props = {
  name: string;
};
const TwitterButton = styled(Button)`
  background-color: #1da1f2;
`;
const GithubButton = styled(Button)`
  background-color: #f5f5f5;
`;
const QiitaButton = styled(Button)`
  background-color: #6cc644;
`;

const ThirdPartyButton: VFC<Props> = ({ name }) => {
  const { title, url } = ThirdParties[name];
  const button =
    title === 'Twitter' ? (
      <TwitterButton>
        <Twitter fontSize='large' />
      </TwitterButton>
    ) : title === 'Github' ? (
      <GithubButton>
        <GitHub fontSize='large' />
      </GithubButton>
    ) : (
      <QiitaButton>
        <CloudQueue fontSize='large' />
      </QiitaButton>
    );

  return (
    <Link href={url}>
      <a>{button}</a>
    </Link>
  );
};

export default ThirdPartyButton;
