import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../components/scroll-observer'
import Navbar from '../components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Navbar />
      <Component {...pageProps} />
    </ScrollObserver>
  )
}
