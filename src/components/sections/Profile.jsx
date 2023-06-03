import React from 'react';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

const ProfilePage = () => {
  return (
    <Box bg="gray.100" py={10}>
      <Container maxW="container.md" bg="white" p={6} borderRadius="md" boxShadow="md">
        <VStack spacing={6} align="center">
          <Heading size="lg">Profile</Heading>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Name:
            </Text>
            <Text fontSize="md">John Doe</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Email:
            </Text>
            <Text fontSize="md">john.doe@example.com</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Location:
            </Text>
            <Text fontSize="md">New York, USA</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Bio:
            </Text>
            <Text fontSize="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dapibus lectus, nec consequat magna
              consectetur nec. Aliquam in elit fermentum, vulputate tortor ut, commodo nisl.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ProfilePage;
