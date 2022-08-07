import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import theme from '../lib/theme';
import Fonts from '@/components/font';
import Layout from '@/components/layouts/main';

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter={true} initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

// TODO:routerとは？
export default Website;
