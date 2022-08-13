import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { NextPage } from 'next';
import Layout from '../../components/layouts/article';
import P from '../../components/paragraph';
import { Title, WorkImage, Meta } from '../../components/work';

const Work: NextPage = () => {
  return (
    <Layout title='Inkdrop'>
      <Container>
        <Title>
          Inkdrop <Badge>2016</Badge>
        </Title>
        <P>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, reprehenderit nam beatae dolorum quos deserunt voluptates error fugit
          quasi exercitationem voluptate consequatur quidem quo sit magni maxime commodi cumque dolor.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>WebSite</Meta>
            <Link href=''>
              https://www.google.com
              <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stach</Meta>
            <span>NodeJS, Electron, React, Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href='http://www.google.com'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
        </List>
        <WorkImage src='/image/dongsh-a6fr5ynh_E0-unsplash.jpg' alt='Inkdrop' />
      </Container>
    </Layout>
  );
};
export default Work;
