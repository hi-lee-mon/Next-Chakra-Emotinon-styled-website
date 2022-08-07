import { Text, LinkBox, LinkOverlay, Flex, Box } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import Image, { StaticImageData } from 'next/image';
import NextLink from 'next/link';

export const GridItem = ({ children, href, title, thumbnail }: any) => (
  <Flex w='100%' justifyContent='center'>
    <LinkBox cursor='pointer'>
      <Image src={thumbnail} alt={title} className='grid-item-thumbnail' placeholder='blur' loading='lazy' />
      <LinkOverlay href={href} target='_blank'>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Flex>
);

type WorkGridItemProps = {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: StaticImageData;
};

export const WorkGridItem = ({ children, id, title, thumbnail }: WorkGridItemProps) => (
  <Box w='100%' textAlign='center'>
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor='pointer'>
        <Image src={thumbnail} alt={title} className='grid-item-thumbnail' placeholder='blur' />
        <LinkOverlay href={`/work/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail{
        border-radius:12px
      }
    `}
  />
);
