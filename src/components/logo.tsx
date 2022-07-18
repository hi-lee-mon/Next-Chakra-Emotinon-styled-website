import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const footPrintImg = `/speed_slow_turtle${useColorModeValue('', '-dark')}.png`;
  console.log(footPrintImg);
  return (
    <div>
      <Link href='/'>
        <a>
          <LogBox>
            <Image src={footPrintImg} width={20} height={20} alt='logo' />
            <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='M PLUS Rounded 1c' fontWeight='bold' ml={3}>
              Shusuke Kameda
            </Text>
          </LogBox>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
