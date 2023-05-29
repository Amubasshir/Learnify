import { Footer } from 'componemt/components/Footer';
import Navbar from 'componemt/components/Navbar';
import 'componemt/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <link rel="icon" href="/l-logo.png" sizes="any" />
      {/* <MainHead /> */}
      <Head>
        <title>Learnify</title>
        <link rel="icon" href="/l-logo.png" sizes="any" />
      </Head>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
