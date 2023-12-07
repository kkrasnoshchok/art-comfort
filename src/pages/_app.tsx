import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';

import { Cursor } from '@/components/cursor';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Cursor />
      {/* React Toastify Initialistaion */}
      <ToastContainer autoClose={3000} position='bottom-right' />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
