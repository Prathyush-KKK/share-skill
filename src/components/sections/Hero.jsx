import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button
} from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <Container minH={'35rem'} maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={1000}
          fontSize={{ base: '3rem', sm: '6xl', md: '6rem' }}
          lineHeight={{ base: '0.3rem', md: '4rem', sm:'1rem' }}>
          GET IT DONE.
        </Heading>
        {/* <Text >
          or
        </Text> */}
        <Heading
          fontWeight={1000}
          fontSize={{ base: '3rem', sm: '4rem', md: '7rem' }}
          lineHeight={{ base: '1rem', md: '5rem', sm:'4rem' }}>
          DO IT.
        </Heading>
        <Stack spacing={20} direction={'row'} paddingTop={55}>
        <Link to="../ask">

          <Button
            
            // rounded={'full'}
            px={6}
            borderRadius={0}
            colorScheme={'#111B47'}
            bg={'#111B47'}
            paddingLeft={10}
            paddingRight={10}

            // _hover={{ bg: 'orange.500' }}
            >
            Ask for Work
          </Button>
          </Link>

          <Link to="../Do">
          <Button
            borderColor={'#111B47'}
            borderWidth={1}
            borderRadius={0}
            backgroundColor={'rgba(52, 52, 52, 0)'}
            px={6}
            paddingLeft={10}
            paddingRight={10}
            // _hover={{bg:'#111B47'}}
          >
            Start doing Work
          </Button>
          </Link>

        </Stack>
      </Stack>
    </Container>
  );
}
