import { Grid, Typography } from '@material-ui/core';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
// import { theme } from '../styles/colorTheme';
import { categoriesName } from '../models/categories';
import MainCard from '@/components/MainCard';
import { thirdParties } from '../models/thirdParty';
import ThirdPartyButton from '@/components/ThirdPartyButton';
import styled from 'styled-components';

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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '1000px',
              height: '1000px',
              padding: '3rem 0',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                boxShadow: '15px 15px 80px rgba(0,0,0, .6), -15px -10px 80px rgba(255,255,255, .6)',
                borderRadius: '10px',
                minWidth: '700px',
                maxWidth: '1000px',
              }}
            >
              <Typography variant='h1' style={{ textAlign: 'center' }}>
                Mt-Dev
              </Typography>

              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {categoriesName.map((currName) => (
                  <MainCard key={currName} name={currName} />
                ))}
              </div>
              <Grid container justifyContent='space-around'>
                <div
                  style={{
                    margin: '4rem 0',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant='h4' component='h2' gutterBottom>
                    Masayuki_Yamaguchi
                  </Typography>
                  <Typography variant='subtitle2' component='p' gutterBottom>
                    Recursionを使用してコンピュータサイエンスを基礎から学んでいます。
                  </Typography>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
