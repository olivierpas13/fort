import '../styles/globals.css';
import Head from 'next/head';
import { wrapper } from '../store/store';

function MyApp({ Component, pageProps }) {
  console.log(Component.name);
  return (
    <>
      <Head>
        <title>Fort | Bug Tracking Software</title>
        <meta name="description" content="Bug/error tracking software" />
        <link rel="icon" href="/favicon1.webp" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
