import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextjs project</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/303/parrot_1f99c.png"
        />
        <main>Welcome</main>
        <h2>Main Page</h2>
      </Head>
      <Link href="/first">
        <a>Go to firstPage</a>
      </Link>
    </>
  );
}

export default Home;
