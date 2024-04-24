import React, {useState, useEffect} from "react";
import Hero from "../components/sections/Hero";
import Content from "../components/sections/Content";
import Install from "../components/sections/Install";
import Features from "../components/sections/Features";
import Plans from "../components/sections/Plans";
import Footer from "../components/sections/Footer";
import Parent from "../components/wrapper/Parent";
import AskLayout from "../components/layouts/AskLayout";
import '../assets/styles/index.css';
import Card from '../components/ui/Cards'
import { Text } from "@chakra-ui/react";
import background from '../assets/styles/background.svg';
import Hero2 from "../components/sections/Hero2";
import CardList from "../components/layouts/CardList";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import HorizontalScrollableCards from "../components/layouts/HorCards";

export default function Ask() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data/');
        setCards(response.data);
        console.log(cards);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    marginTop: "30px"
  };
  const arrowStyles = {
    position: "relative",

    right: "-5px",
    border: "2px solid gray",
    borderRadius: "30px",
    transform: "translateY(-50%)",
    fontSize: "48px",
    color: "#FAFAFA",
    cursor: "pointer",
  };

  const cardListStyles = {
    marginTop: "20px",
    // ... add more CSS properties as needed
  };

  const textStyles = {
    transform: "rotate(-90deg)", // Rotate text by 90 degrees anti-clockwise
    color: "gray.100",
    fontSize: "48px",
    fontWeight: "600"
  };
  return (
    <>
    <AskLayout>
      <Hero2 />
    </AskLayout>
    
    <div style={containerStyles}>
      <Text color={"gray.100"} style={textStyles}>PENDING</Text>
        <HorizontalScrollableCards number={2} textTitle={"Promote"} textDesc={"Remove Post"}/>
      </div>

      <div style={containerStyles}>
      <Text color={"gray.100"} style={textStyles}>ONGOING</Text>
        <HorizontalScrollableCards number={6}  textTitle={"Mark as Complete"} textDesc={"Cancel"} />
        <FaArrowRight style={arrowStyles} />
      </div>

      <div style={containerStyles}>
      <Text color={"gray.100"} style={textStyles}>COMPLETED</Text>
        <HorizontalScrollableCards number={1} textTitle={"View Details"} />
      </div>
      
    {/* <LandingLayout>
      <Hero2/>
    </LandingLayout>
    {/* <Content />
    <div className="container">
      <Install />
      <Features />
    </div>
    <Plans /> */}
    {/* <Footer /> */} 
    </>
    
  );
}
