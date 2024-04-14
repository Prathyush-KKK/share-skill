import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
} from '@chakra-ui/react';
import '../../assets/styles/App.css';
import { Link } from "react-router-dom";




export default function Content() {
    return (
        <Container minH={'38rem'} maxW={'100%'} backgroundColor={"#89FC00"} >
               <div className="container">
      <div className="background" />

    
            <Stack
                align={'center'}
                // alignItems={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        
                        lineHeight={1.1}
                        fontWeight={600}
                        align={'center'}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                            color={'#FFFDFC'}
                            as={'span'}
                            fontWeight={1000}

                            position={'relative'}
                            // paddingLeft={20}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'red.400',
                                zIndex: -1,
                            }}>
                            EASY
                        </Text>
                        <br />
                        <Text
                        
                        color={'#FFFDFC'}
                        as={'span'} 
                            // paddingLeft={20}
                        >
                            &
                        </Text>
                        <br />
                        <Text
                        co
                        as={'span'} color={'#FFFDFC'}
                            // paddingLeft={20}
                            fontWeight={1000}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'red.400',
                                zIndex: -1,
                            }}
                        >
                            FAST
                        </Text>
                    </Heading>
                    
                </Stack>
                <Flex
                    flex={1}
                    justify={'flex-start'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Box
                        position={'relative'}
                        height={'300px'}
                        width={'500px'}
                        overflow={'hidden'}
                        fontSize={20}
                        // paddingTop={14}
                        >
                        
                        <Text color={'#111B47'} zIndex={'9999'}>
                        Connecting campus communities, our services-based app simplifies task management, facilitates collaboration, and empowers individuals to leverage their skills for a seamless and rewarding campus experience.
                    </Text>
                    <Stack
                    // paddingLeft={30}
                    align={'center'}
                    paddingTop={20}

                        // spacing={{ base: 4, sm: 6 }}
                        // direction={{ base: 'column', sm: 'row' }}
                        >
                    <Link to="/Do">
                        <Button
                        align={'center'}
                            borderRadius={0}
                            backgroundColor={'rgb(0,0,0,0)'}
                            border={'3px solid rgb(250,255,255,0.7)'}
                            size={'lg'}
                            width={'200px'}
                            fontWeight={'normal'}
                            px={6}
                            color={'white'}
                            // colorScheme={'red'}
                            // bg={'red.400'}
                            _hover={{ }}
                            >
                            Start doing Work
                        </Button>
                        </Link>
                    </Stack>
                        
                    </Box>
                </Flex>
            </Stack>
            </div>
        </Container>
    );
}