import React, { useState, useEffect } from "react";
import Card from "../components/ui/Cards";
import axios from "axios";
import HorizontalScrollableCards from "../components/layouts/DoHorCards";
import DoLayout from "../components/layouts/DoLayout";
import Hero3 from "../components/sections/Hero3";
import KeywordHorizontal from "../components/layouts/KeywordHorizontal";
import { Flex } from "@chakra-ui/react";

export default function DooDoo() {
  const [cardsData, setCardsData] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const containerStyles = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    marginTop: "30px"
  };
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

  const updateCardData = async (id, newData) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/data/${id}`, newData);
      console.log(response.data.message); // Log the response message
    } catch (error) {
      console.error("Error updating card data:", error.message);
    }
  };

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
  };



  return (
    <>
      <DoLayout>
        <Hero3 />
        <KeywordHorizontal
        keywords={Array.from(new Set(cardsData.map((card) => card.keywords)))}
        selectedKeyword={selectedKeyword}
        onKeywordClick={handleKeywordClick}
      />
      </DoLayout>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" pt={4}>

        <Card
          promotion
          title="Exam Help"
          description="I need help to study for FATS asap. Second year student here"
          price={"3400"}
          textTitle="Connect"
          textDesc="View Details"
        />
      </Flex>

      <HorizontalScrollableCards selectedKeyword={selectedKeyword} textTitle="Connect"
          textDesc="View Details" />
    </>
  );
}
