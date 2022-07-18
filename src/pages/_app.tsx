import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/main';

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <div style={{ backgroundColor: '#14222B' }}>
      <ChakraProvider>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ChakraProvider>
    </div>
  );
}

// TODO:routerとは？

export default Website;
