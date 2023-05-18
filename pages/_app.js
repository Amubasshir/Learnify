import Footer from 'componemt/components/Footer';
import Navbar from 'componemt/components/Navbar';
import 'componemt/styles/globals.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
