import React from 'react';
import { Box, Container, Heading, Text, VStack, Avatar, Divider, Badge, Flex, Spacer, Stack } from '@chakra-ui/react';

const ProfilePage = () => {
  return (
    <Box minH={'100vh'} bg="gray.100" py={10}>
      <Container maxW="container.md" bg="white" p={6} borderRadius="md" boxShadow="md">
        <Flex direction="column" align="center" justify="center" spacing={6}>
          <Avatar size="2xl" name="John Doe" src="https://i.pravatar.cc/150?img=3" mb={4} />
          <Heading size="lg" textAlign="center">
            John Doe
          </Heading>
          <Text fontSize="md" color="gray.600" textAlign="center">
            Engineer
          </Text>
          <Divider />
          <VStack spacing={4} align="start" w="full">
            <Stack direction="row" align="center">
              <Text fontSize="lg" fontWeight="bold">
                Location:
              </Text>
              <Spacer />
              <Badge colorScheme="teal">Vellore, TN</Badge>
            </Stack>
            <Stack direction="row" align="center">
              <Text fontSize="lg" fontWeight="bold">
                Email:
              </Text>
              <Spacer />
              <Text fontSize="md">john.doe@example.com</Text>
            </Stack>
            <Stack direction="row" align="center">
              <Text fontSize="lg" fontWeight="bold">
                Phone:
              </Text>
              <Spacer />
              <Text fontSize="md">+91 9428265382</Text>
            </Stack>
            <Stack direction="row" align="start">
              <Text fontSize="lg" fontWeight="bold">
                Bio:
              </Text>
              <Spacer />
              <Text fontSize="md">
                Hello 👋 I am John Doe!
              </Text>
            </Stack>
          </VStack>
          <Divider />
          <Flex mt={4}>
            <Badge colorScheme="green">Online</Badge>
            <Spacer />
            <Spacer />
            <Badge marginLeft={5} colorScheme="blue">Verified Customer</Badge>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProfilePage;
