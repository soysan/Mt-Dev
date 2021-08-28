import Head from 'next/head';
import Layout from '@/components/Layout';
import React, { VFC } from 'react';
import Link from 'next/link';
import { Card, Grid, Typography } from '@material-ui/core';
import { projectKeys } from '@/models/projects';
import CardDetail from '@/components/CardDetail';
import { theme } from '../styles/colorTheme';
import styled from 'styled-components';

const CustomCard = styled(Card)`
  max-width: 300px;
  margin: 8px;
  padding: 8px;
  box-shadow: 5px 5px 5px 3px ${theme.palette.primary.dark};
`;

const ProjectsPage: VFC = () => {
  return (
    <Layout>
      <Head>
        <title>First page</title>
      </Head>
      <Typography variant='h2' gutterBottom>
        Portfolio
      </Typography>
      <Grid container style={{ maxWidth: '900px' }}>
        {projectKeys.map((projectName) => (
          <Grid container key={projectName} xs={4}>
            <CustomCard>
              <CardDetail name={projectName} />
            </CustomCard>
          </Grid>
        ))}
      </Grid>

      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default ProjectsPage;
