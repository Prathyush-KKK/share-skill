import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import Card from "../ui/Cards";
import { FaArrowRight } from "react-icons/fa";
import { CustomScroll } from "react-custom-scroll";

export default function HorizontalScrollableCards({
  number,
  textTitle,
  textDesc,
}) {
  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    width: "60vw",
    alignItems: "center",
    overflowX: "auto",
    padding: "20px",
    position: "relative",
  };

  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data/Cards");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setCardsData(jsonData);
        console.log(cardsData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter cards based on status
    const filtered = cardsData.filter((card) => {
      if (textTitle === "Promote" && card.status === "pending") return true;
      if (textTitle === "Mark Complete" && card.status === "ongoing") return true;
      if (textTitle === "View Details" && card.status === "completed") return true;
      return false;
    });
    setFilteredCards(filtered);
  }, [cardsData, textTitle]);

  const cardContainerStyles = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  };

  return (
    <div style={containerStyles}>
      <div style={cardContainerStyles}>
        {filteredCards.map((card, index) => (
          <Card
            title={card.title}
            description={card.description}
            price={card.price}
            key={index}
            textTitle={textTitle}
            textDesc={textDesc}
          />
        ))}
      </div>
    </div>
  );
}
