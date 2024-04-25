import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import Card from "../ui/Cards";
import { FaArrowRight } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
      } else {
        // No user is signed in
        setCurrentUser(null);
      }
    });

    return unsubscribe; // Cleanup function to unsubscribe from auth state changes
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data/");
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
  }, [cardsData]);
  
console.log(currentUser)

useEffect(() => {
    if (!currentUser) return; // Skip if currentUser is null
  
    // Filter cards based on uid1 being equal to currentUser.uid and presence of uid
    const filtered = cardsData.filter((card) => {
      if (
        card.uid1 === currentUser.uid && // Check if uid1 matches currentUser.uid
        card.uid // Check if uid is present
      ) {
        return true;
      }
      return false;
    });
    setFilteredCards(filtered);
  }, [cardsData, currentUser]);

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
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
}
