import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { Router } from 'next/router';

type Props = {
  children: any;
  router: Router;
};

const Main = ({ children, router }: Props) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <title>youtube demo-Homepage</title>
      </Head>
      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
