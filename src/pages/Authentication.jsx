import React, {useState} from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Login from '../components/login/Login';
import Signup from '../components/login/SignUp';
import Header from '../components/sections/Header';

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
    <Header />
    <Box
      bg="#161616"
      minH="100vh"
      pb={6}
      borderBottomRadius="50% 50% 0 0"
      overflow="hidden"
      position="relative"
    >
      
      <Box
        bg="#CADC00"
        h="12rem"
        borderBottomRadius="50% 50% 0 0"
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={1}
      />
      <Container maxW="xl" zIndex={2} position="relative" pt={10} textAlign="start" color="white" >
        <Heading as="h1" mb={4} fontWeight="bold" >
          AUTHENTICATION
        </Heading>
        <Text fontSize="xl" mb={8} fontWeight="bold">
        {isLogin ? 'LOGIN TO YOUR ACCOUNT' : 'CREATE AN ACCOUNT'}
        </Text>
      </Container>
      {isLogin ? <Login toggleAuthMode={toggleAuthMode} /> : <Signup toggleAuthMode={toggleAuthMode} />}
    </Box>
    </>
  );
};

export default AuthenticationPage;
