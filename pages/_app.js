import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fort | Bug Tracking Software</title>
        <meta name="description" content="Bug/error tracking software" />
        <link rel="icon" href="/favicon1.webp" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
