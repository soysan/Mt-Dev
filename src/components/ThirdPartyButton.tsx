import { Button } from '@material-ui/core';
import React, { VFC } from 'react';
import styled from 'styled-components';
import { GitHub, Twitter, CloudQueue, MergeType } from '@material-ui/icons';
import Link from 'next/link';
import { ThirdParties } from '../models/thirdParty';

type Props = {
  name: string;
};
const TwitterButton = styled(Button)`
  background-color: #1da1f2;
`;
const GithubButton = styled(Button)`
  background-color: #2D333B;
`;
const QiitaButton = styled(Button)`
  background-color: #6cc644;
`;
const RecurButton = styled(Button)`
  background-color: #3874cb;
`;

const ThirdPartyButton: VFC<Props> = ({ name }) => {
  const { title, url } = ThirdParties[name];
  const button =
    title === 'Twitter' ? (
      <TwitterButton>
        <Twitter fontSize='large' />
      </TwitterButton>
    ) : title === 'GitHub' ? (
      <GithubButton>
        <GitHub fontSize='large' />
      </GithubButton>
    ) : title === 'Qiita' ? (
      <QiitaButton>
        <CloudQueue fontSize='large' />
      </QiitaButton>
    ) : (
      <RecurButton>
        <MergeType fontSize='large' />
      </RecurButton>
    );

  return (
    <Link href={url}>
      <a>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {button}
          <span>{title}</span>
        </div>
      </a>
    </Link>
  );
};

export default ThirdPartyButton;
