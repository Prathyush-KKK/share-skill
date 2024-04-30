import React, {useEffect, useState} from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text } from '@chakra-ui/react';
import axios from 'axios';

const ModalCardDetails = ({ isOpen, onClose, card }) => {
  const [cardsData, setCardsData] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/data/");
        setCardsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  console.log(card)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Card Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {card && (
            <div>
              <Text>Number: {card.number}</Text>
              <Text>Location: {card.location}</Text>
              <Text>Name: {card.name}</Text>
              {/* Add other card details here */}
            </div>
          )}
        </ModalBody>

        <ModalFooter>
          {/* Add any footer content here */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCardDetails;
