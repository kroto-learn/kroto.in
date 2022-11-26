import { type AppType } from "next/app";
import "../styles/globals.css";
import ScrollObserver from "../components/scroll-observer";
import Layout from "../components/layouts/main";
import { AppProps } from "next/dist/shared/lib/router/router";

const MyApp: AppType<AppProps> = ({ Component, pageProps: { pageProps } }) => {
  return (
    <ScrollObserver>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ScrollObserver>
  );
};

export default MyApp;
