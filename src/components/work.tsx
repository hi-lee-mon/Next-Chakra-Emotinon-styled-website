import { ChevronRightIcon } from '@chakra-ui/icons';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { ReactNode, FC } from 'react';

type TitleProps = {
  children: ReactNode;
};
export const Title: FC<TitleProps> = ({ children }) => (
  <Box>
    <NextLink href='/works'>
      <Link>Works</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

type WorkImageProps = {
  src: string;
  alt: string;
};
export const WorkImage: FC<WorkImageProps> = ({ src, alt }) => <Image borderRadius='lg' w='full' src={src} alt={alt} mb={4} />;

type MetaProps = {
  children: ReactNode;
};
export const Meta: FC<MetaProps> = ({ children }) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
);
