import { AppProps } from 'next/app';
import useHasHydrated from '../src/hooks/useHasHydrated';
import { Toaster } from 'react-hot-toast';
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
      <MotionConfig reducedMotion="user">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <ThemeProvider theme={theme}>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: 'toast-container',
              style: {
                backgroundColor: '#00373f',
                color: '#faf7f3',
                borderRightColor: '#00373f',
              },
            }}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </MotionConfig>
    );
  }
}
