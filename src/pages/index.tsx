import { Grid, Typography } from '@material-ui/core';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { theme } from '../styles/colorTheme';
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
          <div style={{ padding: '1rem' }}>
            <div
              style={{
                backgroundColor: theme.palette.primary.main,
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
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
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
                <div>
                  <CustomImage src={'/static/beer.jpg'} alt='soysan' width={250} height={250} />
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
