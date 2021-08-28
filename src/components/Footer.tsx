import { Grid, Link, makeStyles } from '@material-ui/core';
import { CloudQueue, GitHub, Twitter } from '@material-ui/icons';
import React, { VFC } from 'react';
import { theme } from '../styles/colorTheme';

const styles = makeStyles({
  root: {
    padding: '2rem',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '0 0 10px 10px',
  },
  icons: {
    margin: '0 2rem',
    color: '#37474f',
  },
  text: {
    color: '#37474f',
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#37474f',
  },
});

const Footer: VFC = () => {
  const classes = styles();

  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          style={{ marginBottom: '2rem' }}
        >
          <Link href='https://twitter.com/soylove2'>
            <a className={classes.link}>
              <Twitter className={classes.icons} fontSize='large' />
              <small>Twitter</small>
            </a>
          </Link>
          <Link href='https://github.com/soysan'>
            <a className={classes.link}>
              <GitHub className={classes.icons} fontSize='large' />
              <small>Github</small>
            </a>
          </Link>
          <Link href='https://qiita.com/soysan'>
            <a className={classes.link}>
              <CloudQueue className={classes.icons} fontSize='large' />
              <small>Qiita</small>
            </a>
          </Link>
        </Grid>
        <Grid container justifyContent='center'>
          <small>© 2021 Mt-Dev</small>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
