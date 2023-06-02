import React, { useState } from 'react';
import { Text, Flex, Spacer } from '@chakra-ui/react';
 
const Nav = () => {
  const [scroll, setScroll] = useState(false);
 
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);
 
  window.addEventListener('scroll', changeScroll);
 
  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
    >
      <Text fontSize="xl" fontWeight="bold">
        Chakra Sample
      </Text>
 
      <Spacer />
 
      <Flex alignItems="center">
        <Text fontSize="md" mr="10">
          About
        </Text>
        <Text fontSize="md">More Apps</Text>
      </Flex>
    </Flex>
  );
};
 
export default Nav;