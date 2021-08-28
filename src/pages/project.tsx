import Head from 'next/head';
import Layout from '@/components/Layout';
import React, { VFC } from 'react';
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
  background-color: #eceff1;
  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectsPage: VFC = () => {
  return (
    <Layout>
      <Head>
        <title>Mt-Dev Project</title>
      </Head>
      <Typography variant='h3' gutterBottom style={{ marginTop: '2rem', color: '#eceff1' }}>
        Projects
      </Typography>
      <Grid container style={{ maxWidth: '1000px', marginBottom: '2rem' }}>
        {projectKeys.map((projectName) => (
          <Grid container key={projectName} item xs={4}>
            <CustomCard>
              <CardDetail name={projectName} />
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default ProjectsPage;
