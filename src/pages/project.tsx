import Head from 'next/head';
import Layout from '@/components/Layout';
import React, { VFC } from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import { projectKeys } from '@/models/projects';
import CardDetail from '@/components/CardDetail';
import styled from 'styled-components';

const CustomCard = styled(Card)`
  max-width: 32rem;
  margin: 8px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6), 5px 5px 10px rgba(255, 255, 255, 0.6);
  transition: 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectsPage: VFC = () => {
  return (
    <Layout>
      <Head>
        <title>Mt-Dev Project</title>
      </Head>
      <Typography variant='h3' gutterBottom style={{ marginTop: '2rem', color: '#eceff1', textShadow: '3px 3px 10px silver' }}>
        Projects
      </Typography>
      <Grid container style={{ maxWidth: '70rem', padding: '2rem' }}>
        {projectKeys.map((projectName) => (
          <Grid container justifyContent='center' key={projectName} xs={12} md={6} lg={4}>
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
