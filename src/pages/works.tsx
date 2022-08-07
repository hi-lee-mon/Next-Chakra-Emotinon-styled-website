import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import { WorkGridItem } from '@/components/gridItem';
import Section from '@/components/section';
import thumbWalknote from 'public/image/bilal-mansuri-_nFgGYxeGD4-unsplash.jpg';
import thumbInkdrop from 'public/image/dongsh-a6fr5ynh_E0-unsplash.jpg';

const Works = () => {
  return (
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay='0.1s'>
          <WorkGridItem id='inkdrop' title='Inkdrop' thumbnail={thumbInkdrop}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, error alias. Exercitationem, nihil nesciunt ipsum similique id quisquam
            ad autem nisi quasi quas, obcaecati porro quam explicabo minima sunt accusamus!
          </WorkGridItem>
        </Section>
        <Section delay='0.1s'>
          <WorkGridItem id='walknote' title='Walknote' thumbnail={thumbWalknote}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda sequi earum itaque, unde iste debitis blanditiis architecto, sunt
            animi quisquam soluta, eius eaque aliquid explicabo ipsa rerum velit voluptates.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
