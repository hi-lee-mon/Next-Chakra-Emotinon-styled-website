import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from '../lib/theme';
import Fonts from '@/components/font';
import Layout from '@/components/layouts/main';

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

// TODO:routerとは？
export default Website;
