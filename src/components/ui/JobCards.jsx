import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import ProfCards from '../layouts/ProfCards';
import ProfCards2 from '../layouts/ProfCards2';
import ModalCardDetails from './ModalCard'; // Import the Modal component
import { toast } from 'react-toastify';

const JobList = ({ mode }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedCard, setSelectedCard] = useState(null); // State for selected card details

  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    marginTop: "30px"
  };
  const textStyles = {
    transform: "rotate(-90deg)", // Rotate text by 90 degrees anti-clockwise
    color: "gray.100",
    fontSize: "48px",
    fontWeight: "600"
  };

  useEffect(() => {
    // Fetch data or any initial setup
  }, []);

  const handleUpdateCard = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/data/${id}`, { status: "completed" });
      console.log('Update successful:', response.data);
      toast.success("Thank You!");
      openModal(selectedCard); // Open modal after updating card status
    } catch (error) {
      console.error('Update failed:', error);
      // Handle error
    }
  };

  // Function to open the modal with card details
  const openModal = (card) => {
    setSelectedCard(card);
    console.log(card);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box color={"gray.200"} paddingTop={20}>
      <div style={containerStyles}>
        <Text color={"gray.100"} style={textStyles}>ONGOING</Text>
        <ProfCards2
          number={6}
          textTitle={"Mark Complete"}
          textDesc={"Cancel"}
          isComplete={true}
          onUpdateCardStatus={handleUpdateCard}
          onCardSelect={openModal} // Pass function to open modal on card click
        />
      </div>

      <div style={containerStyles}>
        <Text color={"gray.100"} style={textStyles}>COMPLETED</Text>
        <ProfCards
          number={1}
          textTitle={"View Details"}
          isComplete={true}
          onUpdateCardStatus={openModal} // Pass function to open modal on card click
        />
      </div>

      {/* Modal for displaying card details */}
      <ModalCardDetails isOpen={isModalOpen} onClose={closeModal} card={selectedCard} />
    </Box>
  );
};

export default JobList;
