import '../styles/globals.css';
import Head from 'next/head';

import { wrapper } from '../store/store';
import { SessionProvider } from 'next-auth/react';
// import { getUserFromLocal } from '../utils/localStorage';

// import { useDispatch } from 'react-redux';
// import { setUser } from '../store/userSlice';

function MyApp({ Component, pageProps:{ session, ...pageProps } }) {
  return (
    <SessionProvider session={session} >
      <Head>
        <title>Fort | Bug Tracking Software</title>
        <meta name="description" content="Bug/error tracking software" />
        <link rel="icon" href="/favicon1.webp" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
