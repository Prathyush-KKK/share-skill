import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react"; // Assuming Chakra UI for styling
import Card from "../ui/Cards";
import { FaArrowRight } from "react-icons/fa"; // Importing FontAwesome arrow icon
import { CustomScroll } from "react-custom-scroll";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { toast } from "react-toastify";


export default function HorizontalScrollableCards({ selectedKeyword, textTitle, textDesc }) {
  const [cardsData, setCardsData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);
const [id, setId] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe; // Cleanup function to unsubscribe from auth state changes
  }, []);

  const logCardDetails = (card) => {
    setId(card.id)
    handleUpdate(id);
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/data/${id}`, { uid1: currentUser.uid, status: "ongoing" });
      console.log('Update successful:', response.data);
      toast.success("Connected!")
    } catch (error) {
      console.error('Update failed:', error);
      // Handle error
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setCardsData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter cards based on selectedKeyword, currentUser, and presence of uid1 and uid2
    const filtered = selectedKeyword === "All"
      ? cardsData.filter(card => {
          return currentUser?.uid !== null && card.uid !== currentUser?.uid && (!card.uid || !card.uid1);
        })
      : cardsData.filter(card => {
          return card.keywords.includes(selectedKeyword) && currentUser?.uid !== null && card.uid !== currentUser?.uid && (!card.uid || !card.uid1);
        });
    setFilteredCards(filtered);
  }, [cardsData, currentUser, selectedKeyword]);
  
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {filteredCards.map((card, index) => (
        <Box key={index} ml={"20px"} mt={"20px"} mr={"20px"}>
          <Card
            title={card.title}
            description={card.description}
            price={card.price}
            key={index}
            textTitle={textTitle}
            textDesc={textDesc}
            id ={card.id}
            onTitleButtonClick={() => {
              logCardDetails(card);
            }}
          />
        </Box>
      ))}
    </Flex>
  );
}
