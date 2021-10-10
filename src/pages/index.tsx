import { Grid, Typography } from '@material-ui/core';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { categoriesName } from '../models/categories';
import MainCard from '@/components/MainCard';
import { thirdParties } from '../models/thirdParty';
import ThirdPartyButton from '@/components/ThirdPartyButton';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css';

const CustomImage = styled(Image)`
  border-radius: 50%;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mt-Dev</title>
        <link rel='icon' href='/static/hatching-chick.png' />
      </Head>
      <main>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          style={{ padding: '1rem', minHeight: '100vh' }}
        >
          <div className={styles.container}>
            <Typography
              variant='h1'
              style={{ textAlign: 'center', textShadow: '3px 3px 10px silver' }}
            >
              Mt-Dev
            </Typography>
            <Grid container justifyContent='space-around'>
              {categoriesName.map((currName) => (
                <MainCard key={currName} name={currName} />
              ))}
            </Grid>

            <Grid container justifyContent='space-around'>
              <div
                style={{
                  margin: '4rem 0',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography variant='h4' component='h4' gutterBottom>
                  Masayuki_Yamaguchi
                </Typography>
                <Typography variant='subtitle2' component='p' gutterBottom>
                  Recursionを使用してコンピュータサイエンスを基礎から学んでいます。
                </Typography>
                <div
                  style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2.5rem' }}
                >
                  {thirdParties.map((currValue) => (
                    <ThirdPartyButton name={currValue} key={currValue} />
                  ))}
                </div>
              </div>
              <div style={{ margin: '4rem 0' }}>
                <CustomImage src={'/static/beer.jpg'} alt='soysan' width={230} height={230} />
              </div>
            </Grid>
          </div>
        </Grid>
      </main>
    </>
  );
};

export default Home;
