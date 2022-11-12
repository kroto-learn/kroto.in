import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../components/scroll-observer'
import Layout from '../components/layouts/main'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ScrollObserver>
        <Layout router={router} {...pageProps} />
        <Component {...pageProps} />
      </ScrollObserver>
    </>
  )
}
