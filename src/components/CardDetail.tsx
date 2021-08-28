import { Button, CardContent, CardMedia, Chip, Grid, Typography } from '@material-ui/core';
import React, { VFC } from 'react';
import { ProjectsData } from '@/models/projects';
import { theme } from '@/styles/colorTheme';
import styled from 'styled-components';
import { Code, Share } from '@material-ui/icons';

type Props = {
  name: string;
};

const StackChip = styled(Chip)`
  background-color: ${theme.palette.secondary.main};
  margin: 0 4px 8px 0;
`;

const LinkButton = styled(Button)`
  color: #fff;
  background-color: ${theme.palette.primary.dark};
`;
const GitButton = styled(Button)`
  color: #fff;
  background-color: ${theme.palette.primary.light};
`;

const CardDetail: VFC<Props> = ({ name }) => {
  const { title, img, stacks, desc, githubUrl, projectUrl } = ProjectsData[name];

  return (
    <>
      <CardMedia component='img' image={img} title={title} style={{ height: '200px' }} />
      <CardContent>
        <Typography variant='h5' component='h2' gutterBottom>
          {title}
        </Typography>
        <Grid>
          {stacks.map((tech) => (
            <StackChip key={tech} label={tech} />
          ))}
        </Grid>
        <Typography variant='subtitle2' component='p' gutterBottom>
          {desc}
        </Typography>
        <Grid container justifyContent='space-around'>
          <LinkButton variant='contained' href={projectUrl} startIcon={<Share />}>
            Link
          </LinkButton>
          <GitButton variant='contained' href={githubUrl} startIcon={<Code />}>
            Code
          </GitButton>
        </Grid>
      </CardContent>
    </>
  );
};

export default CardDetail;
