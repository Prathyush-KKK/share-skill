import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react"; // Assuming Chakra UI for styling
import Card from "../ui/Cards";
import { FaArrowRight } from "react-icons/fa"; // Importing FontAwesome arrow icon
import { CustomScroll } from "react-custom-scroll";

export default function HorizontalScrollableCards({ selectedKeyword }) {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data/Cards");
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

  const filteredCards = selectedKeyword === "All" ? cardsData : cardsData.filter(card => card.keywords.includes(selectedKeyword));

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {filteredCards.map((card, index) => (
        <Box key={index} ml={"20px"} mt={"20px"} mr={"20px"}>
          <Card
            title={card.title}
            description={card.description}
            price={card.price}
            key={index}
            textTitle={card.textTitle}
            textDesc={card.textDesc}
          />
        </Box>
      ))}
    </Flex>
  );
}
