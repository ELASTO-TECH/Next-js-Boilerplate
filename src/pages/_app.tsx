import '../styles/global.css';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SessionProvider>
    <Component {...pageProps} />
  </SessionProvider>
);

export default MyApp;
