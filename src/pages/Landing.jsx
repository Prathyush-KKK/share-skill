import React from "react";
import Hero from "../components/sections/Hero";
import Content from "../components/sections/Content";
import Install from "../components/sections/Install";
import Features from "../components/sections/Features";
import Plans from "../components/sections/Plans";
import Footer from "../components/sections/Footer";
import Parent from "../components/wrapper/Parent";
import LandingLayout from "../components/layouts/LandingLayout";
import '../assets/styles/index.css';
import background from '../assets/styles/background.svg';

export default function Landing() {
  return (
    <>
    <LandingLayout>
      <Hero />
    </LandingLayout>
    <Content  />
    <div className="container">

      <Install />
      <Features />
    
    <Plans />
    <Footer />  
    </div>
    </>
    
  );
}
