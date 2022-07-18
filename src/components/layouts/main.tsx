import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { Router } from 'next/router';
import Navbar from '../navbar';

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
      <Navbar path={router.asPath} />
      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
