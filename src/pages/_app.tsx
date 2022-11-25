import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import ScrollObserver from "../components/scroll-observer";
import Layout from "../components/layouts/main";
import { AppProps } from "next/dist/shared/lib/router/router";

interface P extends AppProps {
  session: Session | null;
}

const MyApp: AppType<P> = ({
  Component,
  pageProps: { session, pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ScrollObserver>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScrollObserver>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
