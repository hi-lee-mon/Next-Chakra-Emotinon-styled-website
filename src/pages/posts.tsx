import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { GridItem } from '@/components/gridItem';
import Layout from '@/components/layouts/article';
import Section from '@/components/section';
import thumbWalknote from 'public/image/bilal-mansuri-_nFgGYxeGD4-unsplash.jpg';
import thumbInkdrop from 'public/image/dongsh-a6fr5ynh_E0-unsplash.jpg';

const Posts = () => (
  <Layout title='Posts'>
    <Container>
      <Heading as='h4' fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay='0.1s'>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title='My Fish workflow' thumbnail={thumbWalknote} href='' />
          <GridItem title='My Fish workflow' thumbnail={thumbInkdrop} href='' />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
