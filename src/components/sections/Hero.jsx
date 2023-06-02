import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={1000}
          fontSize={{ base: '8rem', sm: '4xl', md: '8rem' }}
          lineHeight={'20%'}>
          GET IT DONE.
        </Heading>
        <Text >
          or
        </Text>
        <Heading
          fontWeight={1000}
          fontSize={{ base: '8rem', sm: '4xl', md: '8rem' }}
          lineHeight={'10%'}>
          DO IT.
        </Heading>
        <Stack spacing={20} direction={'row'} paddingTop={55}>
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
        </Stack>
      </Stack>
    </Container>
  );
}
