import Footer from 'componemt/components/Footer';
import Navbar from 'componemt/components/Navbar';
import 'componemt/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
