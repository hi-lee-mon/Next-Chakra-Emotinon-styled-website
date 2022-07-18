import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, Stack, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Logo from './logo';

type LinkItemProps = {
  href: string;
  path: string;
  children: React.ReactNode;
};

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpah.900');
  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? '#202023' : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  );
};

type NavbarProps = {
  path: string;
};

const Navbar = (props: NavbarProps) => {
  const { path } = props;
  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container display='flex' p={2} maxW='container.md' flexWrap='wrap' alignItems='center' justifyContent='space-between'>
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems='center'
            flexGrow={1}
            mt={{ base: 4, nmd: 0 }}
          >
            <LinkItem href='/works' path={path}>
              Works
            </LinkItem>
            <LinkItem href='/posts' path={path}>
              Posts
            </LinkItem>
          </Stack>
          <Box flex={1} alignItems='rignt'>
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} variant='outline' aria-label='Options'></MenuButton>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;