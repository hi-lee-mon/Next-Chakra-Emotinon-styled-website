import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';
import { BioSection, BioYear } from '@/components/bio';
import Layout from '@/components/layouts/article';
import Paragraph from '@/components/paragraph';
import Section from '@/components/section';

const Home: NextPage = () => {
  return (
    <Layout title='home'>
      <Container>
        <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p='3' mb='6' alignItems='center'>
          Hello, I&apos;m a full-stack developer based in Japan!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow='1'>
            <Heading as='h2' variant='padding-title'>
              Kameda Shunsuke
            </Heading>
            <p>Digital Craftzman (Artist / Developer / Designer)</p>
          </Box>
          <Flex flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} justifyContent={'center'}>
            <Image
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inline-block'
              borderRadius='full'
              src='image/IMG_4331.JPG'
              alt='Profile Image'
            />
          </Flex>
        </Box>
        <Section delay={'0.1s'}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero, corrupti dignissimos inventore consequatur amet quidem perspiciatis
            aliquid totam corporis quod unde dolor veniam ipsa! Rerum fugiat aperiam accusantium veniam? Officia quaerat voluptate, natus fugit
            quisquam voluptatum eligendi corrupti cum enim iure beatae placeat necessitatibus esse in sed labore porro ipsum consequuntur blanditiis
            distinctio assumenda nemo tenetur? Sit, delectus dolor? Sit beatae dicta hic necessitatibus iure. Odio excepturi praesentium suscipit
            asperiores totam cupiditate voluptatum nisi, distinctio, modi adipisci inventore, dolore culpa. Eligendi provident odio sed omnis minima
            neque, obcaecati veniam?{' '}
            <NextLink href=''>
              <Link>Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Flex justifyContent='center' my={4}>
            <NextLink href='/works'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                My portfolio
              </Button>
            </NextLink>
          </Flex>
        </Section>
        <Section delay='0.2s'>
          <Heading as='h3' variant='section-title'>
            Biography
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            神奈川県横浜市生まれ
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            ○○大学 経済学部 経済学科 卒
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            IT企業に入社
          </BioSection>
        </Section>
        <Section delay='0.3s'>
          <Heading as='h3' variant='section-title'>
            Likes
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto sapiente tempora blanditiis ad fugiat necessitatibus iste
            corrupti laudantium excepturi doloribus deleniti aliquam voluptate delectus, illum commodi vel deserunt eveniet!
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
