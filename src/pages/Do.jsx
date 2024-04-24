import React from "react";
import Hero from "../components/sections/Hero";
import Content from "../components/sections/Content";
import Install from "../components/sections/Install";
import Features from "../components/sections/Features";
import Plans from "../components/sections/Plans";
import Footer from "../components/sections/Footer";
import Parent from "../components/wrapper/Parent";
import DoLayout from "../components/layouts/DoLayout";
import LandingLayout from "../components/layouts/LandingLayout";
import '../assets/styles/index.css';
import Hero2 from "../components/sections/Hero2";
import background from '../assets/styles/background.svg';
import Hero3 from "../components/sections/Hero3";
import CardList from "../components/layouts/CardList";
import Card from "../components/ui/Cards";
import Form from "../components/sections/Form";
import axios from "axios";
import HorizontalScrollableCards from "../components/layouts/HorCards";
import { Text } from "@chakra-ui/react";

export default function DooDoo() {
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
  return (
    <>
    <DoLayout>
      <Hero3 />
    </DoLayout>
    <div style={containerStyles}>
        <Card promotion title="Exam Help" description="I need help to study for FATS asap. Second year student here" price={"Rs. 3400"} textTitle="Connect" textDesc="View Details"></Card>
      </div>

      <div style={containerStyles}>
      <Text color={"gray.100"} style={textStyles}>MEDICINE</Text>
        <HorizontalScrollableCards number={1} textDesc={"View Details"} textTitle={"Connect"}/>
      </div>
      <div style={containerStyles}>
      <Text color={"gray.100"} style={textStyles}>CODING</Text>
        <HorizontalScrollableCards number={3} textDesc={"View Details"} textTitle={"Connect"} />
      </div>
      <div style={containerStyles}>
      <Text color={"gray.100"} style={textStyles}>FITNESS</Text>
        <HorizontalScrollableCards number={4} textDesc={"View Details"} textTitle={"Connect"} />
      </div>
 
    
    </>
    
  );
}
