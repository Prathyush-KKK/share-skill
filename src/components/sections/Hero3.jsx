import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  
  export default function Hero2() {
    const navigate = useNavigate();
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={1000}
            fontSize={{ base: '3rem', sm: '6xl', md: '6rem' }}
            lineHeight={{ base: '1rem', md: '4rem', sm:'1rem' }}>
GET PAID         </Heading>
          <Heading
            fontWeight={1000}
            fontSize={{ base: '2.3rem', sm: '4xl', md: '3.8rem' }}
            lineHeight={{ base: '1rem', md: '4rem', sm:'1rem' }}>
COMPLETE PEOPLE'S TASKS          </Heading>
          <Stack spacing={20} direction={'row'} paddingTop={55}>
            <Button
              // rounded={'full'}
              px={6}
              borderRadius={0}
              color={'white'}
              bg={'#111B47'}
              paddingLeft={10}
              paddingRight={10}
              onClick={navigate('/ask')}
  
              // _hover={{ bg: 'orange.500' }}
              >
Request Work            </Button>

          </Stack>
        </Stack>
      </Container>
    );
  }
  