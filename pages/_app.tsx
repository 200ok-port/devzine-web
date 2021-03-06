import Head from "next/head";
import "../styles/globals.css";
import '@ionic/react/css/core.css';
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
         <title>DEVzine</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
