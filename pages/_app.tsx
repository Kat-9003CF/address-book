import { AppProps } from 'next/app';
import useHasHydrated from '../src/hooks/useHasHydrated';
import { MotionConfig } from 'framer-motion';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import '../src/styles/fonts/fonts.css';
import '../src/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  const hasHydrated = useHasHydrated();
  if (!hasHydrated) {
    return null;
  } else {
    return (
      <div>
        <MotionConfig reducedMotion="user">
          <Head>
            <title>Address Book</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MotionConfig>
      </div>
    );
  }
}
