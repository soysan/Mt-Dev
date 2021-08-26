import Head from 'next/head'
import Layout from 'src/components/Layout'
import React from 'react'
import Link from 'next/link'

const FirstPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>First page</title>
      </Head>
      <h1>First page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

export default FirstPage
