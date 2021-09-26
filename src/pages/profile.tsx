import Layout from '@/components/Layout';
import { Typography } from '@material-ui/core';
import React, { VFC } from 'react';

const Profile: VFC = () => {
  return (
    <>
      <Layout>
        <Typography variant='h2' component='h1' style={{height: '350px', display: 'flex', alignItems: 'center'}}>
          [Coming soon]
        </Typography>
      </Layout>
    </>
  );
};

export default Profile;
