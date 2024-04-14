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
import Cards from "../components/ui/Cards";
import Form from "../components/sections/Form";
import axios from "axios";

export default function DooDoo() {
  return (
    <>
    <DoLayout>
      <Hero3 />
    </DoLayout>
   <CardList />
 
 
    
    </>
    
  );
}
