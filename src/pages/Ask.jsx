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
import background from '../assets/styles/background.svg';
import Hero2 from "../components/sections/Hero2";
import CardList from "../components/layouts/CardList";
import axios from "axios";

export default function Ask() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data/:Cards');
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const cardListStyles = {
    marginTop: "20px",
    // ... add more CSS properties as needed
  };
  return (
    <>
    <AskLayout>
      <Hero2 />
    </AskLayout>
    
    <div style={containerStyles}>
        <CardList style={cardListStyles} />
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
