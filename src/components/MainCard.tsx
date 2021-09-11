import React, { VFC } from 'react';
import { Categories } from '@/models/categories';
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from '@/styles/colorTheme';
import Link from 'next/link';

const CustomCard = styled(Card)`
  color: #eceff1;
  border-radius: 30% 30%;
  background-color: ${theme.palette.primary.light};
  min-width: 250px;
  box-shadow: 5px 5px 5px 5px ${theme.palette.primary.dark};
  margin: 2rem;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

type Props = {
  name: string;
};
const MainCard: VFC<Props> = ({ name }) => {
  const { title, img } = Categories[name];
  const href = title === 'Profile' ? '/profile' : title === 'Portfolio' ? '/project' : '/contact';

  return (
    <>
      <Link href={href}>
        <a>
          <CustomCard>
            <Grid container justifyContent='center' alignItems='center' direction='column'>
              <CardMedia
                component='img'
                image={img}
                title={title}
                style={{ width: '100px', paddingTop: '1rem' }}
              />
              <CardContent>
                <Typography variant='h4' component='h5' style={{ color: '#eceff1' }}>
                  {title}
                </Typography>
              </CardContent>
            </Grid>
          </CustomCard>
        </a>
      </Link>
    </>
  );
};

export default MainCard;
