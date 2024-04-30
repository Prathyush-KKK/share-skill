import React, { useState, useEffect } from 'react';
import { Box, Container, Heading, Text, VStack, Avatar, Divider, Badge, Flex, Spacer, Stack, Button, IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import axios from 'axios'; // Import Axios for making HTTP requests
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState("John Doe");
  const [designation, setDesignation] = useState("Engineer");
  const [location, setLocation] = useState("Vellore, TN");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+91 9428265382");
  const [bio, setBio] = useState("Hello 👋 I am John Doe!");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSubmit = async () => {
    try {
      const userData = {
        name,
        designation,
        location,
        email,
        phone,
        bio,
      };

      // Send PUT request to update user details
      const response = await axios.put(`http://localhost:3000/api/user/${currentUser.uid}`, userData);
      console.log(response.data); // Log response message
      toast.success("Updated!")
    } catch (error) {
      console.error('Error updating user data:', error);
    }

    toggleEditMode(); // Close edit mode
  };

  const setEmailFromCurrentUser = () => {
    if (currentUser) {
      setEmail(currentUser.email);
    }
  };

  useEffect(() => {
    setEmailFromCurrentUser();
  }, [currentUser, setEmailFromCurrentUser]);
  
  

  return (
    <Container maxW="container.md" bg="white" p={6} borderRadius="md" boxShadow="md" border='10px' borderColor='gray.700' position="relative">
      <IconButton
        icon={<EditIcon />}
        aria-label="Edit profile"
        position="absolute"
        top="1rem"
        right="1rem"
        color="black"
        onClick={toggleEditMode}
      />
      <Flex direction="column" align="center" justify="center" color={'black'} spacing={6}>
        <Avatar size="2xl" name={name} src="https://i.pravatar.cc/150?img=3" mb={4} />
        <Heading size="lg" textAlign="center">
          {name}
        </Heading>
        <Text fontSize="md" color="gray.600" textAlign="center">
          {designation}
        </Text>
        <Divider />
        <VStack spacing={4} align="start" w="full">
          <Stack direction="row" align="center">
            <Text fontSize="lg" fontWeight="bold">
              Location:
            </Text>
            <Spacer />
            <Badge colorScheme="dark-blue">{location}</Badge>
          </Stack>
          <Stack direction="row" align="center">
            <Text fontSize="lg" fontWeight="bold">
              Email:
            </Text>
            <Spacer />
            {isEditMode ? (
              <input type="email" value={email} style={{backgroundColor: "white", border: "1px solid black"}} onChange={(e) => setEmail(e.target.value)} />
            ) : (
              <Text fontSize="md">{email}</Text>
            )}
          </Stack>
          <Stack direction="row" align="center">
            <Text fontSize="lg" fontWeight="bold">
              Phone:
            </Text>
            <Spacer />
            {isEditMode ? (
              <input type="tel" value={phone} style={{backgroundColor: "white", border: "1px solid black"}} onChange={(e) => setPhone(e.target.value)} />
            ) : (
              <Text fontSize="md">{phone}</Text>
            )}
          </Stack>
          <Stack direction="row" align="start">
            <Text fontSize="lg" fontWeight="bold">
              Bio:
            </Text>
            <Spacer />
            {isEditMode ? (
              <textarea value={bio} style={{backgroundColor: "white", border: "1px solid black"}} onChange={(e) => setBio(e.target.value)} />
            ) : (
              <Text fontSize="md">{bio}</Text>
            )}
          </Stack>
        </VStack>
        <Divider />
        <Flex mt={4}>
          <Badge colorScheme="green">Online</Badge>
          <Spacer />
          <Spacer />
          <Badge marginLeft={5} colorScheme="blue">Verified Customer</Badge>
        </Flex>
        {/* Toggle edit mode button */}
        {isEditMode && (
          <Button mt={4} colorScheme="blue" onClick={handleSubmit}>
            Save
          </Button>
        )}
      </Flex>
    </Container>
  );
};

export default ProfilePage;
