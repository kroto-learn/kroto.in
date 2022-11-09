import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../components/scroll-observer'
import Navbar from '../components/navbar'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kroto</title>
        <meta property="og:title" content="Kroto - Learn Build Discuss" />
        <meta property="og:image" content="https://kroto.in/kroto-og.png" />
        <meta
          property="og:description"
          content="This is the solution if you're struggling to learn to code by watching videos."
        />
      </Head>
      <ScrollObserver>
        <Navbar />
        <Component {...pageProps} />
      </ScrollObserver>
    </>
  )
}
