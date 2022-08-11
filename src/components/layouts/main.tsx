import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { Router } from 'next/router';
import Navbar from '../navbar';
import NoSsr from '../noSsr';
import VoxelDog from '../vaxelDog';

type Props = {
  children: React.ReactNode;
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
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
