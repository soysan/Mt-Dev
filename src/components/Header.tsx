import { Grid, makeStyles, Typography } from '@material-ui/core';
import Link from 'next/link';
import React, { VFC } from 'react';

const styles = makeStyles({
  root: {
    backgroundColor: 'rgba(255,255,255, .15)',
    borderRadius: '10px 10px 0 0',
  },
  text: {
    margin: '2rem',
  },
});

const Header: VFC = () => {
  const classes = styles();

  return (
    <>
      <Grid container justifyContent='space-between' alignItems='center' className={classes.root}>
        <Link href='/'>
          <a>
            <Typography className={classes.text} variant='h3' component='h5'>
              Mt-Dev
            </Typography>
          </a>
        </Link>
        <div>
          <Grid container justifyContent='flex-end'>
            <Typography className={classes.text} variant='h6' component='h6'>
              <Link href='/project'>Portfolio</Link>
            </Typography>
            <Typography className={classes.text} variant='h6' component='h6'>
              <Link href='/profile'>Profile</Link>
            </Typography>
            <Typography className={classes.text} variant='h6' component='h6'>
              <Link href='/contact'>Contact</Link>
            </Typography>
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default Header;
