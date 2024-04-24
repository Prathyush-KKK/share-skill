import React from "react";
import { Text, Flex } from "@chakra-ui/react"; // Assuming Chakra UI for styling
import Card from "../ui/Cards";
import { FaArrowRight } from "react-icons/fa"; // Importing FontAwesome arrow icon
import {CustomScroll} from "react-custom-scroll";


export default function HorizontalScrollableCards({number, textTitle, textDesc}) {
    const containerStyles = {
        display: "flex",
        flexDirection: "row",
        width: "60vw",
        alignItems: "center",
        overflowX: "auto", // Enable horizontal scrolling
        padding: "20px",
        position: "relative", // Positioning for the arrow
      };
    
     
      const cards = []; // Array to hold card components

      // Loop to generate 4 cards
      for (let i = 0; i < number; i++) {
        cards.push(<Card title="Exam Help" description="I need help to study for FATS asap. Second year student here" price={"Rs. 3400"} key={i} textTitle={textTitle} textDesc={textDesc} />); // Pushing Card components into the array
      }
      const cardContainerStyles = {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
      };
    
      
    
      return (
        <div style={containerStyles}>
          <div style={cardContainerStyles}>
            {/* Render your Card components here */}

            {cards}
          </div>
          {/* Arrow icon */}
        </div>
      );
    }