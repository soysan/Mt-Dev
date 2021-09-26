import { Grid, makeStyles, Theme, Typography, useMediaQuery } from '@material-ui/core';
import Link from 'next/link';
import React, { VFC } from 'react';
import DrawerMenu from './DrawerMenu';

const styles = makeStyles({
  root: {
    backgroundColor: 'rgba(255,255,255, .15)',
    borderRadius: '10px 10px 0 0',
  },
  title: {
    textAlign: 'center',
    textShadow: '3px 3px 10px silver',
  },
  text: {
    margin: '2rem',
    fontWeight: 500,
  },
});

const useSize = () => {
  const isSmallSize = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  return { isSmallSize };
};

const Header: VFC = () => {
  const classes = styles();
  const { isSmallSize } = useSize();

  return (
    <>
      <Grid container justifyContent='space-between' alignItems='center' className={classes.root}>
        <Link href='/'>
          <a>
            <Typography className={classes.title + ' ' + classes.text} variant='h2' component='h2'>
              Mt-Dev
            </Typography>
          </a>
        </Link>
        <div>
          {isSmallSize ? (
            <DrawerMenu />
          ) : (
            <Grid container justifyContent='flex-end'>
              <Typography className={classes.text} variant='h5' component='h5'>
                <Link href='/project'>Portfolio</Link>
              </Typography>
              <Typography className={classes.text} variant='h5' component='h5'>
                <Link href='/profile'>Profile</Link>
              </Typography>
              <Typography className={classes.text} variant='h5' component='h5'>
                <Link href='/contact'>Contact</Link>
              </Typography>
            </Grid>
          )}
        </div>
      </Grid>
    </>
  );
};

export default Header;
