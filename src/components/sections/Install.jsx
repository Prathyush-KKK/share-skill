import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { GooglePlayButton,  AppStoreButton } from "react-mobile-app-button";

export default function SplitScreen() {
    return (
        <Stack minH={'38rem'} direction={{ base: 'column', md: 'row' }}
            bg={'#181D27'}
        >
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading 
                    align={'center'}
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                        align={'center'}
                            as={'span'}
                            position={'relative'}
                            color={'#FCDDEC'}
                            >
                            CONNECT
                        </Text>
                        <br />
                        <Text color={'#FCDDEC'} as={'span'}

                        >
                            COLLABORATE
                        </Text>
                        <br />
                        <Text color={'#FCDDEC'} as={'span'}>
                            GET THINGS DONE!
                        </Text>
                    </Heading>
                    <Stack 
                    align={'center'}
                    justify={'center'}
                    direction={{ base: 'row' }}
                     spacing={4}>
                        <GooglePlayButton
                        align={'center'}
                        theme={"dark"}
                        />
                        <AppStoreButton 
                        theme={"dark"}
                        />
                    </Stack>
                </Stack>
            </Flex>
            <Flex 
                    borderRadius={4}
            
            flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    borderRadius={4}
                    padding={10}
                    src={
                        'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                />
            </Flex>
        </Stack>
    );
}