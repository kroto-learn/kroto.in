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
        <meta property="og:title" content="Kroto - Learn Build Discuss" />
        <meta property="og:url" content="https://www.kroto.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.kroto.in" />
        <meta property="twitter:url" content="https://www.kroto.in" />
        <meta name="twitter:title" content="Kroto - Learn Build Discuss" />
        <meta property="og:image" content="https://www.kroto.in/kroto-og.png" />
        <meta
          property="og:image:url"
          content="https://www.kroto.in/kroto-og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:image"
          content="https://www.kroto.in/kroto-og.png"
        />
        <meta
          property="og:description"
          content="Struggling to learn to code? This is the solution."
        />
        <meta
          name="description"
          content="Struggling to learn to code? This is the solution."
        />
        <meta
          name="twitter:description"
          content="Struggling to learn to code? This is the solution."
        />
      </Head>
      <ScrollObserver>
        <Navbar />
        <div className="mt-20">
          <Component {...pageProps} />
        </div>
      </ScrollObserver>
    </>
  )
}
