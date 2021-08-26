import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextjs project</title>
        <link rel='icon' href='/hatching-chick.png' />
      </Head>
      <main>
        <h2>hello</h2>
        <h2>Main Page</h2>
        <Link href='/first'>
          <a>Go to firstPage</a>
        </Link>
      </main>
    </>
  );
};

export default Home;
