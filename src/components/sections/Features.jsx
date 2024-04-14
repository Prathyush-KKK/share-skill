import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
import { Link } from 'react-router-dom';

  export default function Features() {
    return (
      <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} bg={'#DC0073'}>
        <Flex flex={1}>
          <Image padding={10}
        //   height={40}
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Light, Fast & Powerful
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black.500'}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Link to="../do">
              <Button
                rounded={'full'}
                bg={'#111B47'}
                borderRadius={0}

                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Purchase Now
              </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        
      </Stack>
    );
  }