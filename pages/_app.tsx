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
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kroto - Learn Build Discuss" />
        <meta property="og:url" content="https://www.kroto.in" />
        <meta property="og:image" content="https://www.kroto.in/kroto-og.png" />
        <meta
          property="og:image:url"
          content="https://www.kroto.in/kroto-og.png"
        />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:height" content="1200" />
        <meta
          property="og:description"
          content="Struggling to learn to code? This is the solution."
        />
      </Head>
      <ScrollObserver>
        <Navbar />
        <Component {...pageProps} />
      </ScrollObserver>
    </>
  )
}
