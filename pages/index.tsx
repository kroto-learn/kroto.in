import Head from 'next/head'
import Landing from '../components/landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kroto</title>
        <meta property="og:title" content="Kroto - Learn Build Discuss" />
        <meta property="og:image" content="/public/images/kroto-og.png" />
        <meta
          property="og:description"
          content="This is the solution if you're struggling to learn to code by watching videos."
        />
      </Head>
      <Landing />
    </>
  )
}
