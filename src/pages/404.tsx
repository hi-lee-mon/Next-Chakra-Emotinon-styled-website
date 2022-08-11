import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const NotFound = () => {
  return (
    <Container>
      <Heading as='h1'>Not Found</Heading>
      <Text>The page you&apos:re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6} alignContent='center'>
        <NextLink href='/'>
          <Button colorScheme='teal'>Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
 