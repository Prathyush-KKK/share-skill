import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { Divider } from '@chakra-ui/react';
import Form from './Form';

export default function Hero2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure()

  // const InitialFocus = () => {

  //   const initialRef = React.useRef(null)
  //   const finalRef = React.useRef(null)

  //   return (
  //     <>
  //       <Button onClick={onOpen}>Open Modal</Button>
  //       <Button ml={4} ref={finalRef}>
  //         I'll receive focus on close
  //       </Button>

  //       <Modal
  //         initialFocusRef={initialRef}
  //         finalFocusRef={finalRef}
  //         isOpen={isOpen}
  //         onClose={onClose}
  //       >
  //         <ModalOverlay />
  //         <ModalContent>
  //           <ModalHeader>Create your account</ModalHeader>
  //           <ModalCloseButton />
  //           <ModalBody pb={6}>
  //             <FormControl>
  //               <FormLabel>First name</FormLabel>
  //               <Input ref={initialRef} placeholder='First name' />
  //             </FormControl>

  //             <FormControl mt={4}>
  //               <FormLabel>Last name</FormLabel>
  //               <Input placeholder='Last name' />
  //             </FormControl>
  //           </ModalBody>

  //           <ModalFooter>
  //             <Button colorScheme='blue' mr={3}>
  //               Save
  //             </Button>
  //             <Button onClick={onClose}>Cancel</Button>
  //           </ModalFooter>
  //         </ModalContent>
  //       </Modal>
  //     </>
  //   )
  // }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          lineHeight={{ base: '1rem', md: '4rem', sm: '1rem' }}>
          ASK FOR WORK.          </Heading>
        <Heading
          fontWeight={1000}
          fontSize={{ base: '2.3rem', sm: '4xl', md: '3.8rem' }}
          lineHeight={{ base: '1rem', md: '4rem', sm: '1rem' }}>
          AND GET IT DONE.
        </Heading>
        <Stack spacing={20} direction={'row'} paddingTop={55}>

          <div>
          <Text
          
          align={'center'}
            fontWeight={600}
          fontSize={{ base: '1.5rem', sm: '2xl', md: '2xl' }}
          >
            Welcome Prathyush Kode 
          </Text>
          
          
          <Button
          marginTop={10}
          align={'center'}
            // rounded={'full'}
            px={6}
            borderRadius={0}
            colorScheme={'#111B47'}
            bg={'#111B47'}
            paddingLeft={10}
            paddingRight={10}
            onClick={handleOpenModal}
            // onClick={InitialFocus}

          // _hover={{ bg: 'orange.500' }}
          >
            Request Work            </Button>
          </div>
          <Form isOpen={isModalOpen} onClose={handleCloseModal} />

        </Stack>
      </Stack>
    </Container>
  );
}
