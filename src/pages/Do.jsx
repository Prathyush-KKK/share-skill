import React from "react";
import Hero from "../components/sections/Hero";
import Content from "../components/sections/Content";
import Install from "../components/sections/Install";
import Features from "../components/sections/Features";
import Plans from "../components/sections/Plans";
import Footer from "../components/sections/Footer";
import Parent from "../components/wrapper/Parent";
import DoLayout from "../components/layouts/DoLayout";
import '../assets/styles/index.css';
import background from '../assets/styles/background.svg';
import Hero3 from "../components/sections/Hero3";
import CardList from "../components/layouts/CardList";
import Form from "../components/sections/Form";

export default function DooDoo() {
  return (
    <>
    <DoLayout>
      <Hero3 />
    </DoLayout>
    {/* <Form /> */}
   <CardList />
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
